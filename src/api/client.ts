import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '8me5yfa8',
  dataset: 'dev',
  useCdn: true,
  apiVersion: '2023-10-04',
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
