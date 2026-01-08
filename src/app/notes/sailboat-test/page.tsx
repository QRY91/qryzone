// src/app/notes/sailboat-test/page.tsx
import Link from "next/link";

export default function SailboatTestPage() {
  return (
    <article
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "0 var(--space-md)",
        lineHeight: "1.8",
      }}
    >
      <header style={{ marginBottom: "var(--space-xl)" }}>
        <span
          style={{
            fontSize: "0.75rem",
            color: "#81c784",
            background: "#2d3a2d",
            padding: "2px 8px",
            borderRadius: "3px",
            border: "1px solid #4a5f4a",
          }}
        >
          seedling
        </span>
        <h1
          style={{
            fontSize: "1.8rem",
            marginTop: "var(--space-md)",
            marginBottom: "var(--space-sm)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          The sailboat test
        </h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
          A filter for what tools deserve to exist
        </p>
      </header>

      <section style={{ marginBottom: "var(--space-xl)" }}>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Hundred Rabbits (Devine Lu Linvega and Rekka Bellum) live and work on a sailboat.
          51-day Pacific crossings without reliable internet. Power budgets measured in solar
          watts. Everything they build has to work in those conditions.
        </p>

        <p style={{ marginBottom: "var(--space-md)" }}>
          This creates a brutal filter. If a tool requires cloud APIs, constant connectivity,
          or more power than a solar panel provides - it doesn't work. It's not a theoretical
          limitation. It's Tuesday.
        </p>

        <blockquote
          style={{
            borderLeft: "3px solid var(--color-accent)",
            paddingLeft: "var(--space-md)",
            margin: "var(--space-lg) 0",
            fontStyle: "italic",
            color: "var(--color-text-secondary)",
          }}
        >
          "I wanted a way of doing computers that nobody could take away from me."
        </blockquote>
      </section>

      <section style={{ marginBottom: "var(--space-xl)" }}>
        <h2
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          The questions
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {[
            "Will this still run in 50 years?",
            "Can I fix it myself?",
            "Does it require an empire to maintain?",
            "Will this still work if the internet goes down?",
            "Does this increase or decrease dependency on external services?",
          ].map((q, i) => (
            <li
              key={i}
              style={{
                marginBottom: "var(--space-sm)",
                paddingLeft: "var(--space-md)",
                borderLeft: "2px solid var(--color-border)",
              }}
            >
              {q}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "var(--space-xl)" }}>
        <h2
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Applied
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Most modern software fails this test immediately. SaaS, cloud APIs, subscription
          services - all gone when the connectivity is. That's fine for some things. But
          your core tools? The ones you think with?
        </p>
        <p>
          Those should work on a sailboat.
        </p>
      </section>

      <footer
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "var(--space-lg)",
          marginTop: "var(--space-xxl)",
          fontSize: "0.85rem",
          color: "var(--color-text-secondary)",
        }}
      >
        <p style={{ marginBottom: "var(--space-sm)" }}>
          Inspired by{" "}
          <a
            href="https://100r.co"
            style={{ color: "var(--color-accent)" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            100 Rabbits
          </a>{" "}
          and{" "}
          <a
            href="https://permacomputing.net"
            style={{ color: "var(--color-accent)" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            permacomputing
          </a>
          .
        </p>
        <p>
          Related:{" "}
          <Link href="/hidden/thinking/homelab-permacomputing-strategy" style={{ color: "var(--color-accent)" }}>
            Homelab permacomputing strategy
          </Link>
        </p>
      </footer>
    </article>
  );
}
