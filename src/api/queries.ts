import { sanityClient } from "./client.ts";
import type { ShowsSchema } from "@/types/shows.schema.ts";
import type { AnnouncementsSchema } from "@/types/announcements.schema.ts";
import type { VideosSchema } from "@/types/videos.schema.ts";
import type { MerchSchema } from "@/types/merch.schema.ts";
import type { SettingsSchema } from "@/types/settings.schema.ts";

export async function getSettings(): Promise<SettingsSchema[]> {
  const query = `*[_type == 'settings']`;

  return await sanityClient.fetch(query);
}

export async function getAnnouncements(): Promise<AnnouncementsSchema> {
  const query = `*[_type == 'announcement']`;

  return await sanityClient.fetch(query);
}

export async function getShows() {
  const query = `*[_type == 'shows'] | order(date desc) { headline, limit, shows }`;
  const schema = await sanityClient.fetch<ShowsSchema[]>(query);

  return schema[0];
}

export async function getVideos(): Promise<VideosSchema> {
  const query = `*[_type == 'videos']`;

  return await sanityClient.fetch(query);
}

export async function getMerch(): Promise<MerchSchema[]> {
  const query = `*[_type == 'merch']`;

  return await sanityClient.fetch(query);
}
