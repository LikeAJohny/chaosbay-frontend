import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '@api/client.ts';

const builder = imageUrlBuilder(sanityClient);

export function desktopImage(source: object) {
  return builder.image(source).width(1920).url();
}

export function mobileImage(source: object) {
  return builder.image(source).width(640).url();
}
