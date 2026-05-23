import { getSiteUrl } from "@/lib/site";

type VideoGameJsonLdProps = {
  name: string;
  description: string;
  contentRating?: string;
};

/**
 * Server-rendered JSON-LD for the visible browser game page.
 */
export function VideoGameJsonLd({
  name,
  description,
  contentRating,
}: VideoGameJsonLdProps) {
  const url = `${getSiteUrl()}/`;
  const data = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name,
    description,
    url,
    inLanguage: "en",
    isAccessibleForFree: true,
    genre: ["Zombie survival", "Shooter", "Wave defense"],
    gamePlatform: ["Web browser", "HTML5"],
    playMode: "SinglePlayer",
    operatingSystem: "Web",
    browserRequirements: "HTML5 browser with keyboard and mouse input",
    ...(contentRating ? { contentRating } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
