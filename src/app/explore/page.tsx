// src/app/explore/page.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface ContentItem {
  title: string;
  description: string;
  href: string;
  tags: string[];
  section: "thinking" | "journey" | "workshop" | "main";
  connections?: string[];
}

// Sample content data - this would eventually come from the semantic search system
const sampleContent: ContentItem[] = [
  {
    title: "QRY Methodology",
    description:
      "Systematic approach to building solutions: Query → Refine → Yield",
    href: "/methodology",
    tags: ["methodology", "systematic", "core"],
    section: "main",
    connections: ["Problem Documentation", "Solution Validation"],
  },
  {
    title: "How This Site Was Built",
    description:
      "Complete AI collaboration methodology with transparent documentation of the process",
    href: "/how-this-was-built",
    tags: ["ai", "collaboration", "transparency", "methodology"],
    section: "main",
    connections: ["QRY Methodology", "AI Collaboration"],
  },
  {
    title: "Errata: AI Mistakes and Corrections",
    description:
      "Documentation of AI hallucinations, inaccuracies, and mistakes requiring human correction",
    href: "/errata",
    tags: ["ai", "transparency", "quality-control", "honesty"],
    section: "main",
    connections: ["How This Site Was Built", "AI Collaboration"],
  },
  {
    title: "Strategic Thinking (Coming Soon)",
    description:
      "Analysis, patterns, and strategic insights from systematic observation - articles in development",
    href: "/thinking",
    tags: ["strategy", "analysis", "systematic", "coming-soon"],
    section: "thinking",
    connections: ["QRY Methodology", "Professional Development"],
  },
  {
    title: "Learning Journey (Coming Soon)",
    description:
      "Professional development and systematic approaches to building capability - articles in development",
    href: "/journey",
    tags: ["learning", "professional-development", "systematic", "coming-soon"],
    section: "journey",
    connections: ["Strategic Thinking", "Process Documentation"],
  },
  {
    title: "Process Documentation (Coming Soon)",
    description:
      "Practical guides, workflows, and methodologies for systematic building - articles in development",
    href: "/workshop",
    tags: ["process", "workflow", "methodology", "coming-soon"],
    section: "workshop",
    connections: ["QRY Methodology", "Learning Journey"],
  },
];

const allTags = Array.from(
  new Set(sampleContent.flatMap((item) => item.tags)),
).sort();

function ExploreCard({
  item,
  onTagClick,
}: {
  item: ContentItem;
  onTagClick: (tag: string) => void;
}) {
  const getSectionColor = (section: ContentItem["section"]) => {
    switch (section) {
      case "thinking":
        return "#7f7f5f";
      case "journey":
        return "#5f7f7f";
      case "workshop":
        return "#7f5f7f";
      default:
        return "var(--color-accent)";
    }
  };

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--border-radius)",
        padding: "var(--space-lg)",
        marginBottom: "var(--space-md)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "var(--space-sm)",
        }}
      >
        <h3
          style={{
            color: getSectionColor(item.section),
            margin: 0,
            fontFamily: "var(--font-mono)",
            fontSize: "1.1rem",
          }}
        >
          {item.title}
        </h3>
        <span
          style={{
            fontSize: "0.7rem",
            color: "var(--color-text-secondary)",
            background: "var(--color-background)",
            padding: "2px 8px",
            borderRadius: "12px",
            border: `1px solid ${getSectionColor(item.section)}`,
          }}
        >
          {item.section}
        </span>
      </div>

      <p
        style={{
          marginBottom: "var(--space-md)",
          color: "var(--color-text-primary)",
          lineHeight: "1.6",
        }}
      >
        {item.description}
      </p>

      <div
        style={{
          display: "flex",
          gap: "var(--space-xs)",
          flexWrap: "wrap",
          marginBottom: "var(--space-md)",
        }}
      >
        {item.tags.map((tag) => (
          <button
            key={tag}
            onClick={(e) => {
              e.stopPropagation();
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
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-background)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--color-background)";
              e.currentTarget.style.color = "var(--color-text-secondary)";
            }}
          >
            #{tag}
          </button>
        ))}
      </div>

      {item.connections && item.connections.length > 0 && (
        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-sm)",
          }}
        >
          <strong>Connected to:</strong> {item.connections.join(", ")}
        </div>
      )}

      <div style={{ textAlign: "right" }}>
        <Link
          href={item.href}
          style={{
            color: getSectionColor(item.section),
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          Explore →
        </Link>
      </div>
    </div>
  );
}

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredContent, setFilteredContent] = useState(sampleContent);
  const [randomContent, setRandomContent] = useState<ContentItem[]>([]);

  useEffect(() => {
    // Filter content based on search and tags
    let filtered = sampleContent;

    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((item) =>
        selectedTags.some((tag) => item.tags.includes(tag)),
      );
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedTags]);

  useEffect(() => {
    // Generate random content on load
    const shuffled = [...sampleContent].sort(() => 0.5 - Math.random());
    setRandomContent(shuffled.slice(0, 3));
  }, []);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "0 var(--space-md)",
        lineHeight: "1.7",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "var(--space-xl)",
          color: "var(--color-accent)",
          fontFamily: "var(--font-mono)",
        }}
      >
        Explore Everything
      </h1>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-secondary)",
          }}
        >
          Intentionally chaotic discovery zone. Search semantically, explore by
          tags, or let serendipity guide you through connections between ideas.
        </p>
        <p style={{ marginBottom: "var(--space-md)" }}>
          This is where the systematic meets the exploratory - find unexpected
          connections between strategic thinking, learning processes, and
          practical methodologies.
        </p>
      </section>

      {/* Search Interface */}
      <section
        style={{
          background: "var(--color-surface)",
          padding: "var(--space-xl)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--border-radius)",
          marginBottom: "var(--space-xxl)",
        }}
      >
        <h2
          style={{
            fontSize: "1.3rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Search & Filter
        </h2>

        <div style={{ marginBottom: "var(--space-lg)" }}>
          <input
            type="text"
            placeholder="Search for concepts, methods, insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "var(--space-md)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
              color: "var(--color-text-primary)",
              fontSize: "1rem",
              fontFamily: "inherit",
            }}
          />
        </div>

        <div style={{ marginBottom: "var(--space-md)" }}>
          <h3
            style={{
              fontSize: "1rem",
              marginBottom: "var(--space-sm)",
              color: "var(--color-text-primary)",
            }}
          >
            Filter by tags:
          </h3>
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
                  color: selectedTags.includes(tag)
                    ? "var(--color-background)"
                    : "var(--color-text-secondary)",
                  background: selectedTags.includes(tag)
                    ? "var(--color-accent)"
                    : "var(--color-background)",
                  padding: "var(--space-xs) var(--space-sm)",
                  borderRadius: "var(--border-radius)",
                  border: "1px solid var(--color-border)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {(searchQuery || selectedTags.length > 0) && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "var(--space-sm) 0",
            }}
          >
            <span
              style={{
                fontSize: "0.9rem",
                color: "var(--color-text-secondary)",
              }}
            >
              Showing {filteredContent.length} results
              {selectedTags.length > 0 &&
                ` for tags: ${selectedTags.map((t) => "#" + t).join(", ")}`}
            </span>
            <button
              onClick={clearFilters}
              style={{
                fontSize: "0.8rem",
                color: "var(--color-accent)",
                background: "transparent",
                border: "1px solid var(--color-accent)",
                padding: "var(--space-xs) var(--space-sm)",
                borderRadius: "var(--border-radius)",
                cursor: "pointer",
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Search Results or Random Content */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        {searchQuery || selectedTags.length > 0 ? (
          <>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "var(--space-lg)",
                color: "var(--color-text-primary)",
              }}
            >
              Search Results
            </h2>
            {filteredContent.length > 0 ? (
              filteredContent.map((item, index) => (
                <ExploreCard
                  key={index}
                  item={item}
                  onTagClick={handleTagClick}
                />
              ))
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "var(--space-xxl)",
                  color: "var(--color-text-secondary)",
                }}
              >
                <p>No content matches your search criteria.</p>
                <p>
                  Try different keywords or clear the filters to explore
                  everything.
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "var(--space-lg)",
                color: "var(--color-text-primary)",
              }}
            >
              Random Discovery
            </h2>
            <p
              style={{
                marginBottom: "var(--space-lg)",
                color: "var(--color-text-secondary)",
              }}
            >
              Start exploring with these randomly selected pieces, or use the
              search above to find something specific.
            </p>
            {randomContent.map((item, index) => (
              <ExploreCard
                key={index}
                item={item}
                onTagClick={handleTagClick}
              />
            ))}
          </>
        )}
      </section>

      {/* Navigation Sections */}
      <section
        style={{
          background: "var(--color-surface)",
          padding: "var(--space-xl)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--border-radius)",
          marginBottom: "var(--space-xxl)",
        }}
      >
        <h2
          style={{
            fontSize: "1.3rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Structured Exploration
        </h2>
        <p style={{ marginBottom: "var(--space-lg)" }}>
          Prefer organized discovery? Browse by content type:
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "var(--space-lg)",
          }}
        >
          <Link
            href="/thinking"
            style={{
              color: "var(--color-text-primary)",
              textDecoration: "none",
              padding: "var(--space-lg)",
              border: "1px solid #7f7f5f",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
              transition: "all 0.2s ease",
            }}
          >
            <h3
              style={{
                color: "#7f7f5f",
                margin: "0 0 var(--space-sm) 0",
                fontFamily: "var(--font-mono)",
              }}
            >
              Strategic Thinking
            </h3>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              Market analysis, risk assessment, technical vision
            </p>
          </Link>

          <Link
            href="/journey"
            style={{
              color: "var(--color-text-primary)",
              textDecoration: "none",
              padding: "var(--space-lg)",
              border: "1px solid #5f7f7f",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
              transition: "all 0.2s ease",
            }}
          >
            <h3
              style={{
                color: "#5f7f7f",
                margin: "0 0 var(--space-sm) 0",
                fontFamily: "var(--font-mono)",
              }}
            >
              Learning Journey
            </h3>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              Professional development, AI collaboration, systematic learning
            </p>
          </Link>

          <Link
            href="/workshop"
            style={{
              color: "var(--color-text-primary)",
              textDecoration: "none",
              padding: "var(--space-lg)",
              border: "1px solid #7f5f7f",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
              transition: "all 0.2s ease",
            }}
          >
            <h3
              style={{
                color: "#7f5f7f",
                margin: "0 0 var(--space-sm) 0",
                fontFamily: "var(--font-mono)",
              }}
            >
              Process Documentation
            </h3>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              Practical guides, workflows, implementation methodologies
            </p>
          </Link>
        </div>
      </section>

      {/* Coming Soon: Real Semantic Search */}
      <section
        style={{
          textAlign: "center",
          background: "#2f2f1f",
          border: "1px dashed #7f7f5f",
          padding: "var(--space-xl)",
          borderRadius: "var(--border-radius)",
        }}
      >
        <h2
          style={{
            fontSize: "1.3rem",
            marginBottom: "var(--space-lg)",
            color: "#f0c674",
            fontFamily: "var(--font-mono)",
          }}
        >
          🚀 Coming Soon: True Semantic Search
        </h2>
        <p
          style={{
            marginBottom: "var(--space-md)",
            color: "var(--color-text-secondary)",
          }}
        >
          This is just the beginning. Real semantic search powered by the QRY
          repository analysis system is in development - search by meaning, not
          just keywords.
        </p>
        <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
          The system will index the entire QRY methodology documentation and
          enable discovery of connections between ideas across all content
          areas.
        </p>
      </section>
    </div>
  );
}
