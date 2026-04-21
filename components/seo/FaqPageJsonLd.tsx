type FaqItem = {
  question: string;
  answer: string;
};

type FaqPageJsonLdProps = {
  items: FaqItem[];
};

/**
 * 服务端渲染的 FAQPage JSON-LD。
 * 文案应与页面 DOM 中的 FAQ 条目保持一致，否则可能被 Google 判定为结构化数据与可见内容不符。
 */
export function FaqPageJsonLd({ items }: FaqPageJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
