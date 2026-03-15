import React from "react";
import { render, screen, waitFor, within, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Room from "./room";

const mockEmit = jest.fn();
const mockOn = jest.fn();
const mockDisconnect = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useParams: () => ({ roomId: "testroom" }),
  useNavigate: () => mockNavigate
}));

jest.mock("socket.io-client", () => ({
  io: () => ({
    emit: mockEmit,
    on: mockOn,
    disconnect: mockDisconnect
  })
}));

jest.mock("react-webcam", () => ({
  __esModule: true,
  default: () => <div data-testid="webcam" />
}));

function renderRoom() {
  return render(<Room />);
}

beforeEach(() => {
  mockEmit.mockClear();
  mockOn.mockClear();
  mockDisconnect.mockClear();
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve([]) }));
});

describe("Room page", () => {
  it("renders room title with roomId", () => {
    renderRoom();
    expect(screen.getByText(/Room: testroom/i)).toBeInTheDocument();
  });

  it("shows Songs, Queue, and Chat panels", () => {
    renderRoom();
    expect(screen.getByText("Songs")).toBeInTheDocument();
    expect(screen.getByText("Queue")).toBeInTheDocument();
    expect(screen.getByText("Chat")).toBeInTheDocument();
  });

  it("connects socket and joins room on mount", () => {
    renderRoom();
    expect(mockEmit).toHaveBeenCalledWith("join-room", "testroom");
    expect(mockOn).toHaveBeenCalledWith("chat-history", expect.any(Function));
    expect(mockOn).toHaveBeenCalledWith("chat-message", expect.any(Function));
    expect(mockOn).toHaveBeenCalledWith("queue-updated", expect.any(Function));
  });

  it("fetches songs from API", async () => {
    const songs = [
      { id: "1", title: "Test Song", artist: "Test Artist", previewUrl: "https://example.com/1.mp3" }
    ];
    global.fetch.mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(songs) });

    renderRoom();
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining("/songs"));
    });
    await waitFor(() => {
      expect(screen.getByText(/Test Song/)).toBeInTheDocument();
      expect(screen.getByText(/Test Artist/)).toBeInTheDocument();
    });
  });

  it("shows queue empty state when no songs in queue", () => {
    renderRoom();
    const queuePanel = screen.getByText("Queue").closest(".queue-panel");
    expect(within(queuePanel).getByText(/No songs in queue/i)).toBeInTheDocument();
  });

  it("sends chat message on form submit", async () => {
    renderRoom();
    const input = screen.getByPlaceholderText(/Type a message/i);
    const sendBtn = screen.getByRole("button", { name: /Send/i });
    await userEvent.type(input, "Hello");
    await userEvent.click(sendBtn);
    expect(mockEmit).toHaveBeenCalledWith("chat-message", {
      roomId: "testroom",
      username: expect.any(String),
      text: "Hello"
    });
    expect(input).toHaveValue("");
  });

  it("has Leave Room button that navigates away", async () => {
    renderRoom();
    const leaveBtn = screen.getByRole("button", { name: /Leave Room/i });
    await userEvent.click(leaveBtn);
    expect(leaveBtn).toBeInTheDocument();
  });

  it("displays messages when chat-history is received", async () => {
    let historyCb;
    mockOn.mockImplementation((event, cb) => {
      if (event === "chat-history") historyCb = cb;
    });

    renderRoom();
    expect(historyCb).toBeDefined();
    act(() => {
      historyCb([{ id: "1", username: "Alice", text: "Hi" }]);
    });
    await waitFor(() => {
      expect(screen.getByText(/Alice: Hi/i)).toBeInTheDocument();
    });
  });

  it("displays queue when queue-updated is received", async () => {
    let queueCb;
    mockOn.mockImplementation((event, cb) => {
      if (event === "queue-updated") queueCb = cb;
    });

    renderRoom();
    expect(queueCb).toBeDefined();
    act(() => {
      queueCb([
        { id: "q1", title: "Song A", artist: "Artist A", addedBy: "User1" }
      ]);
    });
    await waitFor(() => {
      expect(screen.getByText(/Song A/)).toBeInTheDocument();
      expect(screen.getByText(/Artist A/)).toBeInTheDocument();
      expect(screen.getByText(/added by User1/i)).toBeInTheDocument();
    });
  });

  it("calls queue-add when Add to queue is clicked", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve([
          { id: "1", title: "My Song", artist: "My Artist", previewUrl: "" }
        ])
    });

    renderRoom();
    await waitFor(() => {
      expect(screen.getByText(/My Song/)).toBeInTheDocument();
    });

    const addBtn = screen.getByRole("button", { name: /Add to queue/i });
    await userEvent.click(addBtn);
    expect(mockEmit).toHaveBeenCalledWith("queue-add", {
      roomId: "testroom",
      song: { id: "1", title: "My Song", artist: "My Artist" },
      username: expect.any(String)
    });
  });

  it("calls queue-remove when Remove is clicked on queue item", async () => {
    let queueCb;
    mockOn.mockImplementation((event, cb) => {
      if (event === "queue-updated") queueCb = cb;
    });

    renderRoom();
    act(() => {
      queueCb([{ id: "q99", title: "X", artist: "Y", addedBy: "Z" }]);
    });
    await waitFor(() => {
      expect(screen.getByText(/X/)).toBeInTheDocument();
    });

    const removeBtn = screen.getByRole("button", { name: /Remove/i });
    await userEvent.click(removeBtn);
    expect(mockEmit).toHaveBeenCalledWith("queue-remove", {
      roomId: "testroom",
      queueItemId: "q99"
    });
  });
});
