"use client"

import { useState, useEffect, useCallback } from "react"

export type ConsentState = "granted" | "denied" | "pending"

const STORAGE_KEY = "fc_cookie_consent"

export function useCookieConsent() {
  const [consent, setConsentState] = useState<ConsentState>("pending")

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === "granted" || stored === "denied") {
        setConsentState(stored)
      }
    } catch {
      // localStorage unavailable (e.g. private browsing restrictions)
    }
  }, [])

  const grant = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "granted")
    } catch {}
    setConsentState("granted")
  }, [])

  const deny = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "denied")
    } catch {}
    setConsentState("denied")
  }, [])

  const reset = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {}
    setConsentState("pending")
  }, [])

  return { consent, grant, deny, reset }
}
