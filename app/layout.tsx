import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Josefin_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import { CookieConsent } from "@/components/analytics/cookie-consent"
import { TrackActivity } from "@/components/analytics/track-activity"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
})

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-ui",
})

const BASE_URL = "https://faceconcept.com.br"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Face Concept, Harmonização Facial & Odontologia Estética",
    template: "%s | Face Concept",
  },
  description:
    "Clínica especializada em harmonização facial, toxina botulínica, preenchedores, bioestimuladores, facetas e implantes. Resultados naturais, expressão preservada.",
  keywords: [
    "harmonização facial",
    "botox",
    "toxina botulínica",
    "preenchedores",
    "bioestimuladores",
    "hifu",
    "skinbooster",
    "clareamento dental",
    "facetas dentárias",
    "implantes dentários",
    "clínica estética",
    "Face Concept",
  ],
  authors: [{ name: "Face Concept", url: BASE_URL }],
  creator: "Face Concept",
  publisher: "Face Concept",
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Face Concept",
    title: "Face Concept, Harmonização Facial & Odontologia Estética",
    description:
      "Protocolo exclusivo de harmonização facial com técnicas minimamente invasivas. Resultados naturais, expressão preservada.",
    images: [
      {
        url: `${BASE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Face Concept, Clínica de Harmonização Facial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Face Concept, Harmonização Facial & Odontologia Estética",
    description:
      "Protocolo exclusivo de harmonização facial com técnicas minimamente invasivas.",
    images: [`${BASE_URL}/images/og-image.jpg`],
  },
  verification: {
    // google: "ADD_YOUR_GOOGLE_SITE_VERIFICATION_TOKEN_HERE",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      // favicon.ico is added by the client at production via the actual .ico file provided
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#cfc7b8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${josefin.variable} bg-background`}
    >
      <body className="font-ui antialiased">
        {/* Analytics — loads only after consent is granted */}
        <GoogleAnalytics />
        <TrackActivity />

        {children}

        {/* Cookie consent banner */}
        <CookieConsent />

        {/* Vercel Analytics (privacy-friendly, no consent needed) */}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
