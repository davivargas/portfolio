import { describe, it, expect } from "vitest";
import { isLink, youtubeId } from "./projectLinks";

describe("isLink", () => {
  it("accepts a real url", () => {
    expect(isLink("https://github.com/example/repo")).toBe(true);
  });

  it("rejects a missing, empty or placeholder url", () => {
    expect(isLink(undefined)).toBe(false);
    expect(isLink("")).toBe(false);
    expect(isLink("#")).toBe(false);
  });
});

// The id is interpolated straight into an iframe src, so anything this function
// accepts has to be a real YouTube video id and nothing else.
describe("youtubeId", () => {
  const id = "dQw4w9WgXcQ";

  it("reads the watch form", () => {
    expect(youtubeId(`https://www.youtube.com/watch?v=${id}`)).toBe(id);
  });

  it("reads the watch form with extra query parameters", () => {
    expect(youtubeId(`https://www.youtube.com/watch?v=${id}&t=42s&list=PL123`)).toBe(id);
  });

  it("reads the short share form", () => {
    expect(youtubeId(`https://youtu.be/${id}`)).toBe(id);
    expect(youtubeId(`https://youtu.be/${id}?si=abc123`)).toBe(id);
  });

  it("reads the embed, shorts and live forms", () => {
    expect(youtubeId(`https://www.youtube.com/embed/${id}`)).toBe(id);
    expect(youtubeId(`https://www.youtube.com/shorts/${id}`)).toBe(id);
    expect(youtubeId(`https://www.youtube.com/live/${id}`)).toBe(id);
  });

  it("accepts the mobile and no-cookie hosts", () => {
    expect(youtubeId(`https://m.youtube.com/watch?v=${id}`)).toBe(id);
    expect(youtubeId(`https://www.youtube-nocookie.com/embed/${id}`)).toBe(id);
  });

  it("returns null for a missing or placeholder url", () => {
    expect(youtubeId(undefined)).toBeNull();
    expect(youtubeId("")).toBeNull();
    expect(youtubeId("#")).toBeNull();
  });

  it("returns null for a non-YouTube host", () => {
    expect(youtubeId(`https://vimeo.com/${id}`)).toBeNull();
    expect(youtubeId(`https://youtube.com.evil.test/watch?v=${id}`)).toBeNull();
  });

  it("returns null when the id is not a valid video id", () => {
    expect(youtubeId("https://www.youtube.com/watch?v=short")).toBeNull();
    expect(youtubeId("https://www.youtube.com/watch?v=../../escape")).toBeNull();
    expect(youtubeId("https://www.youtube.com/")).toBeNull();
    expect(youtubeId("not a url at all")).toBeNull();
  });
});
