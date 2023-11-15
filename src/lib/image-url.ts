import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@api/client.ts";
import type { ImageFormat } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(sanityClient);

export function desktopImage(source: object) {
  return builder.image(source).width(1920).url();
}

export function mobileImage(source: object) {
  return builder.image(source).width(640).url();
}

export function seoImage(source: object) {
  return builder.image(source).width(1200).url();
}

export function iconImage(
  source: object,
  width = 512,
  height = 512,
  format: ImageFormat = "png",
) {
  return builder.image(source).rect(0, 0, width, height).format(format).url();
}
