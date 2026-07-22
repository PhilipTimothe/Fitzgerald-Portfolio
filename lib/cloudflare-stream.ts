// Shared Cloudflare Stream account — case studies reference videos by UID only.
const CUSTOMER_CODE = "o9ac0gnpm96dfbq7";

/** Cloudflare Stream HLS manifest URL for a given video UID. */
export function cloudflareStreamManifestSrc(videoId: string) {
  return `https://customer-${CUSTOMER_CODE}.cloudflarestream.com/${videoId}/manifest/video.m3u8`;
}
