// src/app/page.tsx
import Link from "next/link";
import dynamic from "next/dynamic";

const QryShaderVisual = dynamic(() => import("../components/QryShaderVisual"), {
  ssr: false,
});

// Topics that appear across the site - these become entry points
const topics = [
  { name: "local-first", description: "tools that work offline" },
  { name: "permacomputing", description: "sustainable tech philosophy" },
  { name: "systematic-thinking", description: "frameworks over heuristics" },
  { name: "developer-tools", description: "things I'm building" },
  { name: "learning", description: "how I figure things out" },
  { name: "ai-collaboration", description: "using AI honestly" },
];

// Featured pieces - things worth reading
const featured = [
  {
    title: "Productivity breakthrough",
    description: "How transferable skills and AI catalyzed sustained flow",
    href: "/journey/productivity-breakthrough",
    status: "evergreen",
  },
  {
    title: "Homelab permacomputing",
    description: "Building distributed infrastructure from whatever hardware you have",
    href: "/hidden/thinking/homelab-permacomputing-strategy",
    status: "growing",
  },
  {
    title: "uroboro",
    description: "Context capture that makes development work visible",
    href: "https://www.uroboro.dev/",
    status: "growing",
  },
];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    seedling: { bg: "#2d3a2d", text: "#81c784", border: "#4a5f4a" },
    growing: { bg: "#3a3a2d", text: "#f0dfaf", border: "#5f5f4a" },
    evergreen: { bg: "#2d3a3a", text: "#7fc7c7", border: "#4a5f5f" },
  };
  const color = colors[status] || colors.seedling;

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

export default function HomePage() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 var(--space-md)",
        lineHeight: "1.7",
      }}
    >
      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "var(--space-xxl)",
        }}
      >
        <div style={{ marginBottom: "var(--space-lg)" }}>
          <QryShaderVisual />
        </div>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-md)",
          }}
        >
          Notes, tools, and half-formed ideas about building software that
          respects your time and attention.
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--color-text-secondary)",
          }}
        >
          Wander around. Most things are unfinished. That's fine.
        </p>
      </section>

      {/* Topics */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-secondary)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Topics
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-sm)",
          }}
        >
          {topics.map((topic) => (
            <Link
              key={topic.name}
              href={`/explore?tag=${topic.name}`}
              style={{
                color: "var(--color-text-primary)",
                textDecoration: "none",
                padding: "var(--space-sm) var(--space-md)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--border-radius)",
                background: "var(--color-surface)",
                fontSize: "0.9rem",
                transition: "all 0.2s ease",
              }}
              title={topic.description}
            >
              {topic.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-secondary)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Worth reading
        </h2>
        <div style={{ display: "grid", gap: "var(--space-md)" }}>
          {featured.map((item) => {
            const isExternal = item.href.startsWith("http");
            const Wrapper = isExternal ? "a" : Link;
            const wrapperProps = isExternal
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: item.href };

            return (
              <Wrapper
                key={item.href}
                {...wrapperProps}
                style={{
                  textDecoration: "none",
                  padding: "var(--space-md)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--border-radius)",
                  background: "var(--color-surface)",
                  display: "block",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "var(--space-xs)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-accent)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {item.title}
                    {isExternal && " \u2197"}
                  </span>
                  <StatusBadge status={item.status} />
                </div>
                <span
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.description}
                </span>
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* Entry points */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <div
          style={{
            display: "flex",
            gap: "var(--space-md)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href="/explore"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              padding: "var(--space-sm) var(--space-lg)",
              border: "1px solid var(--color-accent)",
              borderRadius: "var(--border-radius)",
            }}
          >
            Browse everything
          </Link>
          <Link
            href="/about"
            style={{
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              padding: "var(--space-sm) var(--space-lg)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
            }}
          >
            Who is this
          </Link>
        </div>
      </section>

      {/* Status legend */}
      <section
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "var(--space-lg)",
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
