"use client";

import Script from "next/script";
import { useMemo } from "react";

/**
 * 仅当环境变量存在时注入 GA4 / Clarity；未配置时不请求任何第三方脚本。
 */
export function ConditionalAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim();
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim();

  const claritySnippet = useMemo(() => {
    if (!clarityId) return null;
    return `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarityId}");`;
  }, [clarityId]);

  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');
            `.trim()}
          </Script>
        </>
      ) : null}
      {claritySnippet ? (
        <Script id="clarity-init" strategy="afterInteractive">
          {claritySnippet}
        </Script>
      ) : null}
    </>
  );
}
