"use client"

import Script from "next/script"
import { useEffect } from "react"
import { useCookieConsent } from "@/hooks/use-cookie-consent"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

/** Declares gtag on window so TypeScript is happy */
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export function GoogleAnalytics() {
  const { consent } = useCookieConsent()

  // Update consent state whenever the user changes their preference
  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return
    window.gtag("consent", "update", {
      analytics_storage: consent === "granted" ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    })
  }, [consent])

  if (!GA_ID) return null

  return (
    <>
      {/* Load gtag script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* Initialize with consent mode v2 defaults (denied until user grants) */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            // Consent Mode v2 — default to denied
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500,
            });

            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
            });
          `,
        }}
      />
    </>
  )
}
