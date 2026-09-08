// Link helpers for the Projects section. They live outside the component file so
// the section can stay a pure component export and keep React Fast Refresh working.

/** A placeholder href points nowhere, so treat it the same as a missing link. */
export const isLink = (url?: string): boolean => Boolean(url && url !== "#");

/**
 * Accepts the watch, share, embed, shorts and live forms of a YouTube URL and
 * returns the video id. Returns null for anything else, including a valid URL on
 * another host, so the caller can fall back to a plain link. The id is
 * interpolated into an iframe src, so it is validated before being handed back.
 */
export const youtubeId = (url?: string): string | null => {
  if (!isLink(url)) return null;

  let parsed: URL;
  try {
    parsed = new URL(url as string);
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^www\./, "");
  let id: string | undefined;

  if (host === "youtu.be") {
    id = parsed.pathname.split("/").filter(Boolean)[0];
  } else if (host === "youtube.com" || host === "youtube-nocookie.com" || host === "m.youtube.com") {
    const segments = parsed.pathname.split("/").filter(Boolean);
    const marker = segments.findIndex(
      (s) => s === "embed" || s === "shorts" || s === "live" || s === "v",
    );
    id = parsed.searchParams.get("v") ?? (marker === -1 ? undefined : segments[marker + 1]);
  }

  return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
};
