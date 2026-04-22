"use client"

import { useEffect, useRef } from "react"
import { useCookieConsent } from "@/hooks/use-cookie-consent"
import { useTrackActivity } from "@/hooks/use-track-activity"

/**
 * TrackActivity — mounted once in the layout.
 * Automatically tracks:
 *   • page_view on mount
 *   • scroll_depth at 25 / 50 / 75 / 100 % thresholds
 *   • time_on_page every 30 s
 *   • outbound_link_click for all external <a> clicks
 */
export function TrackActivity() {
  const { consent } = useCookieConsent()
  const { track } = useTrackActivity()
  const depthRef = useRef<Set<number>>(new Set())
  const timeRef = useRef(0)

  // page_view
  useEffect(() => {
    if (consent !== "granted") return
    track({ action: "page_view", category: "navigation", label: document.title })
  }, [consent, track])

  // scroll_depth
  useEffect(() => {
    if (consent !== "granted") return

    const onScroll = () => {
      const el = document.documentElement
      const pct = Math.round((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
      const thresholds = [25, 50, 75, 100]
      for (const t of thresholds) {
        if (pct >= t && !depthRef.current.has(t)) {
          depthRef.current.add(t)
          track({ action: "scroll_depth", category: "engagement", label: `${t}%`, value: t })
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [consent, track])

  // time_on_page
  useEffect(() => {
    if (consent !== "granted") return

    const interval = setInterval(() => {
      timeRef.current += 30
      track({
        action: "time_on_page",
        category: "engagement",
        label: `${timeRef.current}s`,
        value: timeRef.current,
      })
    }, 30_000)

    return () => clearInterval(interval)
  }, [consent, track])

  // outbound_link_click
  useEffect(() => {
    if (consent !== "granted") return

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a")
      if (!anchor) return
      const href = anchor.getAttribute("href") ?? ""
      const isExternal =
        href.startsWith("http") && !href.includes(window.location.hostname)
      if (isExternal) {
        track({
          action: "outbound_link_click",
          category: "engagement",
          label: href,
        })
      }
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [consent, track])

  return null
}
