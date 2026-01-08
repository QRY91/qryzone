// src/app/notes/learning-to-spite/page.tsx
import Link from "next/link";

export default function LearningToSpitePage() {
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
          Learning to spite
        </h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
          Transforming institutional dysfunction into fuel
        </p>
      </header>

      <section style={{ marginBottom: "var(--space-xl)" }}>
        <blockquote
          style={{
            borderLeft: "3px solid var(--color-accent)",
            paddingLeft: "var(--space-md)",
            margin: "var(--space-lg) 0",
            fontStyle: "italic",
            color: "var(--color-text-secondary)",
          }}
        >
          "I learn to spite those who punish it. If I can suffer and learn and build systems
          that prevent others from experiencing that dysfunction, then the suffering becomes
          valuable. If I die with the knowledge, the systems never get built, and the
          dysfunction repeats."
        </blockquote>

        <p style={{ marginBottom: "var(--space-md)" }}>
          Bad experiences with institutions - education that punished curiosity, workplaces
          that valued compliance over competence, systems that extracted more than they gave.
          These leave marks.
        </p>

        <p>
          The question is what to do with them.
        </p>
      </section>

      <section style={{ marginBottom: "var(--space-xl)" }}>
        <h2
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          The reframe
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Spite is underrated as motivation. It's sustainable in ways that pure altruism
          isn't. "I will learn this thing specifically because someone said I couldn't"
          carries you through the 3am debugging sessions that "it would be nice to help
          people" doesn't.
        </p>

        <p style={{ marginBottom: "var(--space-md)" }}>
          But spite alone is corrosive. The trick is combining it with documentation.
          Learn, build, then share so others don't have to suffer the same path.
        </p>

        <p>
          The dysfunction becomes data. The suffering becomes a case study.
          The spite fuels the work. The documentation makes it useful to others.
        </p>
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
        <p>
          Every tool I build comes from a specific frustration. Context gets lost between
          sessions - <Link href="https://www.uroboro.dev/" style={{ color: "var(--color-accent)" }}>
          uroboro</Link>. Systems require too much from the user - local-first design.
          Corporate software treats users as products - privacy-respecting alternatives.
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
        <p>
          Related:{" "}
          <Link href="/methodology" style={{ color: "var(--color-accent)" }}>
            QRY Methodology
          </Link>
          {" "}-{" "}
          <Link href="/about" style={{ color: "var(--color-accent)" }}>
            About
          </Link>
        </p>
      </footer>
    </article>
  );
}
