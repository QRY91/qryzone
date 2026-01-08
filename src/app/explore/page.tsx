// src/app/explore/page.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type ContentStatus = "seedling" | "growing" | "evergreen";

interface ContentItem {
  title: string;
  description: string;
  href: string;
  tags: string[];
  status: ContentStatus;
  connections?: string[];
  lastUpdated?: string; // ISO date string
}

// All content across the site
const allContent: ContentItem[] = [
  // Evergreen - stable, finished
  {
    title: "About",
    description: "The non-traditional route to software development",
    href: "/about",
    tags: ["personal", "career"],
    status: "evergreen",
    lastUpdated: "2025-01-08",
  },
  {
    title: "Productivity breakthrough",
    description:
      "How transferable skills and AI catalyzed sustained development flow",
    href: "/journey/productivity-breakthrough",
    tags: ["learning", "ai-collaboration", "personal"],
    status: "evergreen",
    connections: ["AI hyperresponder profile", "Hybrid AI transition"],
    lastUpdated: "2025-01-05",
  },
  {
    title: "QRY Methodology",
    description: "Query, Refine, Yield - systematic problem solving",
    href: "/methodology",
    tags: ["systematic-thinking", "learning"],
    status: "evergreen",
    lastUpdated: "2025-01-03",
  },

  // Growing - in progress, substantial
  {
    title: "Homelab permacomputing strategy",
    description:
      "Building distributed infrastructure using heterogeneous hardware",
    href: "/hidden/thinking/homelab-permacomputing-strategy",
    tags: ["permacomputing", "local-first", "systematic-thinking"],
    status: "growing",
    connections: ["Technical depth assessment", "CLI-first development"],
    lastUpdated: "2025-01-07",
  },
  {
    title: "CLI-first development",
    description: "Terminal-centric workflows and why they matter",
    href: "/hidden/thinking/cli-first-development",
    tags: ["developer-tools", "systematic-thinking", "local-first"],
    status: "growing",
    connections: ["Homelab permacomputing strategy"],
    lastUpdated: "2025-01-06",
  },
  {
    title: "AI hyperresponder profile",
    description:
      "Why some people get disproportionate value from AI collaboration",
    href: "/hidden/thinking/ai-hyperresponder",
    tags: ["ai-collaboration", "learning", "neurodivergent"],
    status: "growing",
    connections: ["Productivity breakthrough", "Hybrid AI transition"],
    lastUpdated: "2025-01-04",
  },
  {
    title: "DevTools landscape analysis",
    description: "Understanding the developer tools market",
    href: "/hidden/thinking/devtools-landscape",
    tags: ["developer-tools", "analysis"],
    status: "growing",
    lastUpdated: "2025-01-02",
  },

  // Seedling - rough ideas, early drafts
  {
    title: "Technical depth assessment",
    description: "Evaluating and building genuine technical capability",
    href: "/hidden/thinking/technical-depth-assessment",
    tags: ["learning", "systematic-thinking", "career"],
    status: "seedling",
    connections: ["Homelab permacomputing strategy"],
  },
  {
    title: "Professional positioning strategy",
    description: "How to present non-traditional backgrounds",
    href: "/hidden/thinking/professional-positioning-strategy",
    tags: ["career", "personal"],
    status: "seedling",
    connections: ["Career realignment", "About"],
  },
  {
    title: "Hybrid AI transition",
    description: "80/20 sustainable AI integration for workflows",
    href: "/hidden/thinking/hybrid-ai-transition",
    tags: ["ai-collaboration", "systematic-thinking"],
    status: "seedling",
    connections: ["AI hyperresponder profile", "Productivity breakthrough"],
  },
  {
    title: "Priority bubbling UI",
    description: "Interface patterns for attention-respecting software",
    href: "/hidden/thinking/priority-bubbling-ui",
    tags: ["developer-tools", "design"],
    status: "seedling",
  },
  {
    title: "Framework cluster economics",
    description: "Cost analysis of development infrastructure",
    href: "/hidden/thinking/framework-cluster-economics",
    tags: ["local-first", "analysis"],
    status: "seedling",
    connections: ["Homelab permacomputing strategy"],
  },
  {
    title: "Career realignment",
    description: "Navigating career transitions at 33",
    href: "/hidden/journey/career-realignment",
    tags: ["career", "personal", "learning"],
    status: "seedling",
    connections: ["About", "Professional positioning strategy"],
  },
  {
    title: "Professional identity architecture",
    description: "Building identity from institutional trauma",
    href: "/hidden/journey/professional-identity",
    tags: ["career", "personal"],
    status: "seedling",
    connections: ["About", "Career realignment"],
  },
  {
    title: "NixOS learning progression",
    description: "Systematic approach to learning NixOS",
    href: "/hidden/journey/nixos-learning-progression",
    tags: ["learning", "local-first", "developer-tools"],
    status: "seedling",
    connections: ["CLI-first development", "Homelab permacomputing strategy"],
  },

  // Notes (seedlings from excavation)
  {
    title: "Database-first debugging",
    description: "When the problem isn't in the code, it's in the data",
    href: "/notes/database-first-debugging",
    tags: ["debugging", "systematic-thinking", "learning"],
    status: "seedling",
    connections: ["Optimization through removal"],
    lastUpdated: "2025-01-08",
  },
  {
    title: "Optimization through removal",
    description: "The fastest code is code that doesn't run",
    href: "/notes/optimization-through-removal",
    tags: ["debugging", "systematic-thinking"],
    status: "seedling",
    connections: ["Database-first debugging"],
    lastUpdated: "2025-01-08",
  },
  {
    title: "The sailboat test",
    description: "A filter for what tools deserve to exist",
    href: "/notes/sailboat-test",
    tags: ["permacomputing", "local-first", "systematic-thinking"],
    status: "seedling",
    connections: ["Homelab permacomputing strategy"],
    lastUpdated: "2025-01-08",
  },
  {
    title: "Economic honesty",
    description: "This is all fucking insane but I have a mortgage",
    href: "/notes/economic-honesty",
    tags: ["personal", "career"],
    status: "seedling",
    lastUpdated: "2025-01-08",
  },
  {
    title: "Learning to spite",
    description: "Transforming institutional dysfunction into fuel",
    href: "/notes/learning-to-spite",
    tags: ["learning", "personal"],
    status: "seedling",
    connections: ["QRY Methodology", "About"],
    lastUpdated: "2025-01-08",
  },

  // Projects (external links)
  {
    title: "uroboro",
    description: "Context capture that makes development work visible",
    href: "https://www.uroboro.dev/",
    tags: ["developer-tools", "local-first"],
    status: "growing",
    lastUpdated: "2025-01-08",
  },
  {
    title: "doggowoof",
    description: "Local monitoring that learns your patterns",
    href: "https://github.com/QRY91/doggowoof",
    tags: ["developer-tools", "local-first"],
    status: "seedling",
  },
  {
    title: "wherewasi",
    description: "Context preservation across work sessions",
    href: "https://github.com/QRY91/wherewasi",
    tags: ["developer-tools", "local-first"],
    status: "seedling",
  },
  {
    title: "quantum-dice",
    description: "Learn quantum mechanics through dice game mechanics",
    href: "https://github.com/QRY91/quantum-dice",
    tags: ["learning", "games"],
    status: "growing",
  },
];

// Build a lookup map for connections
const titleToHref = new Map(allContent.map((item) => [item.title, item.href]));

// Extract all unique tags
const allTags = Array.from(
  new Set(allContent.flatMap((item) => item.tags))
).sort();

// Get recently updated items (those with lastUpdated, sorted by date)
const recentlyUpdated = allContent
  .filter((item) => item.lastUpdated)
  .sort((a, b) => (b.lastUpdated! > a.lastUpdated! ? 1 : -1))
  .slice(0, 5);

function StatusBadge({ status }: { status: ContentStatus }) {
  const colors: Record<
    ContentStatus,
    { bg: string; text: string; border: string }
  > = {
    seedling: { bg: "#2d3a2d", text: "#81c784", border: "#4a5f4a" },
    growing: { bg: "#3a3a2d", text: "#f0dfaf", border: "#5f5f4a" },
    evergreen: { bg: "#2d3a3a", text: "#7fc7c7", border: "#4a5f5f" },
  };
  const color = colors[status];

  return (
    <span
      style={{
        fontSize: "0.7rem",
        padding: "2px 6px",
        borderRadius: "3px",
        background: color.bg,
        color: color.text,
        border: `1px solid ${color.border}`,
      }}
    >
      {status}
    </span>
  );
}

function ConnectionLinks({ connections }: { connections: string[] }) {
  return (
    <div
      style={{
        marginTop: "var(--space-sm)",
        fontSize: "0.75rem",
        color: "var(--color-text-secondary)",
      }}
    >
      Related:{" "}
      {connections.map((conn, i) => {
        const href = titleToHref.get(conn);
        const isLast = i === connections.length - 1;

        if (href) {
          const isExternal = href.startsWith("http");
          return (
            <span key={conn}>
              {isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-accent)", textDecoration: "none" }}
                >
                  {conn}
                </a>
              ) : (
                <Link
                  href={href}
                  style={{ color: "var(--color-accent)", textDecoration: "none" }}
                >
                  {conn}
                </Link>
              )}
              {!isLast && ", "}
            </span>
          );
        }
        // Fallback for connections without matching content
        return (
          <span key={conn}>
            {conn}
            {!isLast && ", "}
          </span>
        );
      })}
    </div>
  );
}

function ContentCard({
  item,
  onTagClick,
  compact = false,
}: {
  item: ContentItem;
  onTagClick: (tag: string) => void;
  compact?: boolean;
}) {
  const isExternal = item.href.startsWith("http");

  const CardWrapper = isExternal ? "a" : Link;
  const cardProps = isExternal
    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: item.href };

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--border-radius)",
        padding: compact ? "var(--space-sm)" : "var(--space-md)",
        marginBottom: "var(--space-sm)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: compact ? "0" : "var(--space-xs)",
          gap: "var(--space-sm)",
        }}
      >
        <CardWrapper
          {...cardProps}
          style={{
            color: "var(--color-accent)",
            textDecoration: "none",
            fontFamily: "var(--font-mono)",
            fontSize: compact ? "0.85rem" : "0.95rem",
          }}
        >
          {item.title}
          {isExternal && " \u2197"}
        </CardWrapper>
        <StatusBadge status={item.status} />
      </div>

      {!compact && (
        <>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "0.85rem",
              marginBottom: "var(--space-sm)",
              lineHeight: "1.4",
            }}
          >
            {item.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: "var(--space-xs)",
              flexWrap: "wrap",
            }}
          >
            {item.tags.map((tag) => (
              <button
                key={tag}
                onClick={(e) => {
                  e.preventDefault();
                  onTagClick(tag);
                }}
                style={{
                  fontSize: "0.7rem",
                  color: "var(--color-text-secondary)",
                  background: "var(--color-background)",
                  padding: "2px 6px",
                  borderRadius: "3px",
                  border: "1px solid var(--color-border)",
                  cursor: "pointer",
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {item.connections && item.connections.length > 0 && (
            <ConnectionLinks connections={item.connections} />
          )}
        </>
      )}
    </div>
  );
}

export default function ExplorePage() {
  const searchParams = useSearchParams();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<ContentStatus | null>(
    null
  );
  const [showRandom, setShowRandom] = useState(false);
  const [randomItem, setRandomItem] = useState<ContentItem | null>(null);

  // Handle URL params on mount
  useEffect(() => {
    const tagParam = searchParams.get("tag");
    if (tagParam && allTags.includes(tagParam)) {
      setSelectedTags([tagParam]);
    }
  }, [searchParams]);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleStatusClick = (status: ContentStatus) => {
    setSelectedStatus(selectedStatus === status ? null : status);
  };

  const pickRandom = () => {
    const randomIndex = Math.floor(Math.random() * allContent.length);
    setRandomItem(allContent[randomIndex]);
    setShowRandom(true);
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedStatus(null);
    setShowRandom(false);
    setRandomItem(null);
  };

  // Filter content
  let filteredContent = allContent;

  if (selectedTags.length > 0) {
    filteredContent = filteredContent.filter((item) =>
      selectedTags.some((tag) => item.tags.includes(tag))
    );
  }

  if (selectedStatus) {
    filteredContent = filteredContent.filter(
      (item) => item.status === selectedStatus
    );
  }

  const hasFilters = selectedTags.length > 0 || selectedStatus !== null;

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 var(--space-md)",
        lineHeight: "1.7",
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
          marginBottom: "var(--space-md)",
          color: "var(--color-accent)",
          fontFamily: "var(--font-mono)",
        }}
      >
        Explore
      </h1>

      <p
        style={{
          color: "var(--color-text-secondary)",
          marginBottom: "var(--space-xl)",
        }}
      >
        {allContent.length} notes, ideas, and projects. Filter by topic or
        maturity, or pick something random.
      </p>

      {/* Recently updated */}
      {!hasFilters && !showRandom && (
        <section style={{ marginBottom: "var(--space-xl)" }}>
          <h2
            style={{
              fontSize: "0.9rem",
              marginBottom: "var(--space-sm)",
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Recently updated
          </h2>
          {recentlyUpdated.map((item) => (
            <ContentCard
              key={item.href}
              item={item}
              onTagClick={handleTagClick}
              compact
            />
          ))}
        </section>
      )}

      {/* Filters */}
      <section
        style={{
          marginBottom: "var(--space-xl)",
          padding: "var(--space-md)",
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--border-radius)",
        }}
      >
        {/* Tags */}
        <div style={{ marginBottom: "var(--space-md)" }}>
          <div
            style={{
              fontSize: "0.8rem",
              color: "var(--color-text-secondary)",
              marginBottom: "var(--space-sm)",
            }}
          >
            Topics
          </div>
          <div
            style={{
              display: "flex",
              gap: "var(--space-xs)",
              flexWrap: "wrap",
            }}
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                style={{
                  fontSize: "0.8rem",
                  padding: "4px 8px",
                  borderRadius: "var(--border-radius)",
                  border: "1px solid var(--color-border)",
                  background: selectedTags.includes(tag)
                    ? "var(--color-accent)"
                    : "var(--color-background)",
                  color: selectedTags.includes(tag)
                    ? "var(--color-background)"
                    : "var(--color-text-secondary)",
                  cursor: "pointer",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Status filter */}
        <div style={{ marginBottom: "var(--space-md)" }}>
          <div
            style={{
              fontSize: "0.8rem",
              color: "var(--color-text-secondary)",
              marginBottom: "var(--space-sm)",
            }}
          >
            Maturity
          </div>
          <div style={{ display: "flex", gap: "var(--space-sm)" }}>
            {(["seedling", "growing", "evergreen"] as ContentStatus[]).map(
              (status) => (
                <button
                  key={status}
                  onClick={() => handleStatusClick(status)}
                  style={{
                    fontSize: "0.8rem",
                    padding: "4px 8px",
                    borderRadius: "var(--border-radius)",
                    border:
                      selectedStatus === status
                        ? "1px solid var(--color-accent)"
                        : "1px solid var(--color-border)",
                    background: "var(--color-background)",
                    color:
                      selectedStatus === status
                        ? "var(--color-accent)"
                        : "var(--color-text-secondary)",
                    cursor: "pointer",
                  }}
                >
                  {status}
                </button>
              )
            )}
          </div>
        </div>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            gap: "var(--space-sm)",
            alignItems: "center",
          }}
        >
          <button
            onClick={pickRandom}
            style={{
              fontSize: "0.8rem",
              padding: "4px 12px",
              borderRadius: "var(--border-radius)",
              border: "1px solid var(--color-accent)",
              background: "transparent",
              color: "var(--color-accent)",
              cursor: "pointer",
            }}
          >
            Random
          </button>
          {hasFilters && (
            <button
              onClick={clearFilters}
              style={{
                fontSize: "0.8rem",
                padding: "4px 12px",
                borderRadius: "var(--border-radius)",
                border: "1px solid var(--color-border)",
                background: "transparent",
                color: "var(--color-text-secondary)",
                cursor: "pointer",
              }}
            >
              Clear filters
            </button>
          )}
          {hasFilters && (
            <span
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-secondary)",
              }}
            >
              {filteredContent.length} results
            </span>
          )}
        </div>
      </section>

      {/* Random pick */}
      {showRandom && randomItem && (
        <section
          style={{
            marginBottom: "var(--space-xl)",
            padding: "var(--space-md)",
            background: "#2d3a2d",
            border: "1px solid #4a5f4a",
            borderRadius: "var(--border-radius)",
          }}
        >
          <div
            style={{
              fontSize: "0.8rem",
              color: "#81c784",
              marginBottom: "var(--space-sm)",
            }}
          >
            Random pick:
          </div>
          <ContentCard item={randomItem} onTagClick={handleTagClick} />
        </section>
      )}

      {/* Content list */}
      <section>
        <h2
          style={{
            fontSize: "0.9rem",
            marginBottom: "var(--space-sm)",
            color: "var(--color-text-secondary)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {hasFilters ? "Filtered results" : "Everything"}
        </h2>
        {filteredContent.map((item) => (
          <ContentCard key={item.href} item={item} onTagClick={handleTagClick} />
        ))}
      </section>

      {/* Legend */}
      <section
        style={{
          marginTop: "var(--space-xxl)",
          paddingTop: "var(--space-lg)",
          borderTop: "1px solid var(--color-border)",
          fontSize: "0.8rem",
          color: "var(--color-text-secondary)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "var(--space-lg)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <span>
            <StatusBadge status="seedling" /> rough idea
          </span>
          <span>
            <StatusBadge status="growing" /> in progress
          </span>
          <span>
            <StatusBadge status="evergreen" /> stable
          </span>
        </div>
      </section>
    </div>
  );
}
