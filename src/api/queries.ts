import { sanityClient } from './client.ts';
import type { Show } from '../types/show.ts';
import type { Single } from '../types/single.ts';

export async function getShows() {
  const query = `*[_type == 'shows'] | order(date asc)`;

  return await sanityClient.fetch<Show[]>(query);
}

export async function getSingle() {
  const query = `*[_type == 'latestSingle']`;

  return await sanityClient.fetch<Single>(query);
}
