const request = require("supertest");
const { app, rooms } = require("./app");

describe("API", () => {
  beforeEach(() => {
    Object.keys(rooms).forEach((key) => delete rooms[key]);
  });

  describe("POST /create-room", () => {
    it("returns a roomId and creates the room", async () => {
      const res = await request(app).post("/create-room").expect(200);
      expect(res.body).toHaveProperty("roomId");
      expect(typeof res.body.roomId).toBe("string");
      expect(res.body.roomId.length).toBeGreaterThanOrEqual(6);
      expect(rooms[res.body.roomId]).toBeDefined();
      expect(rooms[res.body.roomId].messages).toEqual([]);
      expect(rooms[res.body.roomId].queue).toEqual([]);
    });
  });

  describe("POST /join-room", () => {
    it("returns exists: false for unknown room", async () => {
      const res = await request(app)
        .post("/join-room")
        .send({ roomId: "nonexistent" })
        .set("Content-Type", "application/json")
        .expect(200);
      expect(res.body.exists).toBe(false);
    });

    it("returns exists: true for existing room", async () => {
      const createRes = await request(app).post("/create-room").expect(200);
      const roomId = createRes.body.roomId;
      const res = await request(app)
        .post("/join-room")
        .send({ roomId })
        .set("Content-Type", "application/json")
        .expect(200);
      expect(res.body.exists).toBe(true);
    });
  });

  describe("GET /songs", () => {
    it("returns an array of songs with id, title, artist, previewUrl", async () => {
      const res = await request(app).get("/songs").expect(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThanOrEqual(1);
      const song = res.body[0];
      expect(song).toHaveProperty("id");
      expect(song).toHaveProperty("title");
      expect(song).toHaveProperty("artist");
      expect(song).toHaveProperty("previewUrl");
    });
  });
});
