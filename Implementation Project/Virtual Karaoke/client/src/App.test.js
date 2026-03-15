import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Virtual Karaoke home by default", () => {
  render(<App />);
  expect(screen.getByText(/Virtual Karaoke/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Create Room/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Enter Room ID/i)).toBeInTheDocument();
});
