import { getSiteUrl } from "@/lib/site";

type SoftwareApplicationJsonLdProps = {
  name: string;
  description: string;
  applicationCategory?: string;
  contentRating?: string;
};

/**
 * 服务端输出的 JSON-LD（SoftwareApplication），与页面主关键词/文案后续对齐时再细化字段。
 */
export function SoftwareApplicationJsonLd({
  name,
  description,
  applicationCategory = "Game",
  contentRating,
}: SoftwareApplicationJsonLdProps) {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory,
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url,
    ...(contentRating ? { contentRating } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
