"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initPostHog, setSessionContext, trackNavigation } from "@/lib/posthog";
import posthog from "posthog-js";

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  let searchParams;

  try {
    searchParams = useSearchParams();
  } catch (error) {
    // Handle case where searchParams is not available during static generation
    searchParams = null;
  }

  useEffect(() => {
    // Initialize PostHog on mount
    initPostHog();

    // Set session context from URL parameters
    let sessionContext: {
      referrer?: string;
      entry_page?: string;
      utm_source?: string;
      utm_medium?: string;
      utm_campaign?: string;
    } = {
      referrer: typeof document !== "undefined" ? document.referrer : undefined,
      entry_page: pathname,
    };

    // Only process search params if available
    if (searchParams) {
      try {
        const urlParams = new URLSearchParams(searchParams.toString());
        sessionContext = {
          ...sessionContext,
          utm_source: urlParams.get("utm_source") || undefined,
          utm_medium: urlParams.get("utm_medium") || undefined,
          utm_campaign: urlParams.get("utm_campaign") || undefined,
        };
      } catch (error) {
        // Silently handle search params errors during static generation
      }
    }

    setSessionContext(sessionContext);

    // Track initial page view
    if (typeof window !== "undefined") {
      posthog.capture("$pageview", {
        $current_url: window.location.href,
        pathname: pathname,
      });
    }
  }, []);

  useEffect(() => {
    // Track page navigation on route changes
    if (pathname) {
      posthog.capture("$pageview", {
        $current_url: window.location.href,
        pathname: pathname,
      });
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
