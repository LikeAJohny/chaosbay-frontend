import { sanityClient } from './client.ts';
import type { Show } from '../types/show.ts';
import type { Single } from '../types/single.ts';

export async function getSettings() {
  const query = `*[_type == 'settings']`;

  return await sanityClient.fetch(query);
}

export async function getAnnouncements() {
  const query = `*[_type == 'announcement']`;

  return await sanityClient.fetch(query);
}

export async function getShows() {
  const query = `*[_type == 'shows'] | order(date asc)`;

  return await sanityClient.fetch<Show[]>(query);
}
