// src/lib/posthog.ts
import posthog from "posthog-js";

export const initPostHog = () => {
  if (typeof window !== "undefined") {
    // Only initialize on client side
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
      // Enable session recording for user experience optimization
      session_recording: {
        recordCrossOriginIframes: false,
      },
      // Enable feature flags for A/B testing content presentation
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") {
          console.log("PostHog loaded in development mode");
        }
      },
      // Privacy-focused configuration
      opt_out_capturing_by_default: false,
      respect_dnt: true, // Respect Do Not Track headers
      disable_session_recording: process.env.NODE_ENV === "development",
      // Capture additional context for qry.zone optimization
      capture_pageview: true,
      capture_pageleave: true,
      // Advanced settings for content discovery optimization
      autocapture: {
        css_selector_allowlist: [
          "[data-ph-capture]", // Only capture elements explicitly marked
          ".explore-card", // Capture exploration interactions
          ".thinking-card", // Capture thinking section engagement
          ".journey-card", // Capture journey content interaction
          ".workshop-card", // Capture workshop guide usage
        ],
      },
    });
  }
};

// Event tracking functions for qry.zone specific analytics
export const trackContentView = (
  contentType: string,
  contentTitle: string,
  section: string,
) => {
  posthog.capture("content_viewed", {
    content_type: contentType,
    content_title: contentTitle,
    section: section,
    timestamp: new Date().toISOString(),
  });
};

export const trackSearch = (
  query: string,
  resultsCount: number,
  searchType: "semantic" | "tag" | "text" = "text",
) => {
  posthog.capture("search_performed", {
    query: query,
    results_count: resultsCount,
    search_type: searchType,
    timestamp: new Date().toISOString(),
  });
};

export const trackTagInteraction = (
  tag: string,
  action: "add" | "remove" | "click",
) => {
  posthog.capture("tag_interaction", {
    tag: tag,
    action: action,
    timestamp: new Date().toISOString(),
  });
};

export const trackNavigation = (
  fromPage: string,
  toPage: string,
  method: "link" | "search" | "discovery" = "link",
) => {
  posthog.capture("navigation", {
    from_page: fromPage,
    to_page: toPage,
    navigation_method: method,
    timestamp: new Date().toISOString(),
  });
};

export const trackMethodologyEngagement = (
  section: "query" | "refine" | "yield",
  timeSpent: number,
) => {
  posthog.capture("methodology_engagement", {
    qry_section: section,
    time_spent_seconds: timeSpent,
    timestamp: new Date().toISOString(),
  });
};

export const trackProjectInteraction = (
  projectName: string,
  action: "view" | "click_link" | "expand",
) => {
  posthog.capture("project_interaction", {
    project_name: projectName,
    action: action,
    timestamp: new Date().toISOString(),
  });
};

// Discovery pattern tracking for "intentionally chaotic" optimization
export const trackDiscoveryPath = (
  contentSequence: string[],
  sessionDuration: number,
) => {
  posthog.capture("discovery_path", {
    content_sequence: contentSequence,
    path_length: contentSequence.length,
    session_duration_seconds: sessionDuration,
    timestamp: new Date().toISOString(),
  });
};

// Professional interest tracking (for application/hiring insights)
export const trackProfessionalInterest = (
  section: string,
  engagement_depth: "brief" | "medium" | "deep",
) => {
  posthog.capture("professional_interest", {
    section: section,
    engagement_depth: engagement_depth,
    timestamp: new Date().toISOString(),
  });
};

// Feature flag helpers for A/B testing content presentation
export const getContentVariant = (
  flagKey: string,
  defaultVariant: string = "default",
) => {
  if (typeof window !== "undefined") {
    return posthog.getFeatureFlag(flagKey) || defaultVariant;
  }
  return defaultVariant;
};

// User identification for return visitor analysis
export const identifyUser = (
  userId: string,
  properties?: Record<string, any>,
) => {
  posthog.identify(userId, {
    ...properties,
    first_visit: new Date().toISOString(),
  });
};

// Session context for visitor journey analysis
export const setSessionContext = (context: {
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  entry_page?: string;
}) => {
  posthog.register(context);
};

// Public analytics dashboard data aggregation
export const getPublicAnalytics = async () => {
  // This would integrate with PostHog's API to fetch aggregated,
  // anonymized data for the public analytics dashboard
  // For now, return mock data structure
  return {
    pageviews_last_30_days: 0,
    unique_visitors_last_30_days: 0,
    most_popular_content: [],
    common_discovery_paths: [],
    engagement_by_section: {
      thinking: 0,
      journey: 0,
      workshop: 0,
      explore: 0,
    },
  };
};

export default posthog;
