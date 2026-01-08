// src/app/fun/page.tsx
import Link from "next/link";

const funProjects = [
  {
    title: "Apparent Intelligence",
    description:
      "Think Less. Appear More. A satirical take on AI hype culture, featuring the AI-CHIP-7™ neural implant.",
    href: "/fun/apparent-intelligence/",
    tag: "satire",
  },
  {
    title: "Mortgage Driven Engineering",
    description:
      '"This is all fucking insane but I have a mortgage." For tech workers caught between principles and rent.',
    href: "/fun/mortgage-driven-engineering/",
    tag: "satire",
  },
];

export default function FunPage() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem var(--space-md)",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "2rem",
            color: "var(--color-accent)",
            marginBottom: "0.5rem",
          }}
        >
          Fun
        </h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "1rem" }}>
          Side projects and jokes. Not everything has to be serious.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {funProjects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              padding: "1.5rem",
              textDecoration: "none",
              color: "inherit",
              display: "block",
              transition: "all 0.2s ease",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.1rem",
                color: "var(--color-accent)",
                marginBottom: "0.5rem",
              }}
            >
              {project.title}
            </div>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "0.9rem",
                lineHeight: "1.5",
                marginBottom: "1rem",
              }}
            >
              {project.description}
            </p>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                padding: "2px 8px",
                borderRadius: "3px",
                background: "var(--color-background)",
                color: "var(--color-text-secondary)",
                border: "1px solid var(--color-border)",
              }}
            >
              {project.tag}
            </span>
          </a>
        ))}
      </div>

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "3rem",
          color: "var(--color-text-secondary)",
          textDecoration: "none",
          fontSize: "0.9rem",
        }}
      >
        ← back to qry.zone
      </Link>
    </div>
  );
}
