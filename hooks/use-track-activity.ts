"use client"

import { useCallback } from "react"
import { useCookieConsent } from "@/hooks/use-cookie-consent"

export type GaEventParams = {
  /** GA4 event name, e.g. "whatsapp_click" */
  action: string
  /** GA4 event category */
  category?: string
  /** GA4 event label */
  label?: string
  /** Numeric value (e.g. scroll depth %) */
  value?: number
  /** Any extra GA4 custom parameters */
  [key: string]: unknown
}

/**
 * Returns a `track` function that fires a GA4 custom event.
 * Events are silently dropped when the user has denied analytics consent.
 */
export function useTrackActivity() {
  const { consent } = useCookieConsent()

  const track = useCallback(
    ({ action, category, label, value, ...rest }: GaEventParams) => {
      if (consent !== "granted") return
      if (typeof window === "undefined" || typeof window.gtag !== "function") return

      window.gtag("event", action, {
        event_category: category ?? "engagement",
        event_label: label,
        value,
        ...rest,
      })
    },
    [consent]
  )

  return { track }
}
