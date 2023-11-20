export function videoIdFromUrl(url: string): string {
  const query = new URLSearchParams(url.split("?")[1]);
  const id = query.get("v");

  if (!id) {
    throw new Error(
      "Invalid Video URL provided. Only youtube is possible right now",
    );
  }

  return id;
}
