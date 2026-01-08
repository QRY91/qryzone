// src/app/notes/database-first-debugging/page.tsx
export default function DatabaseFirstDebuggingPage() {
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
          Database-first debugging
        </h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
          A lesson from production firefighting
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
          "Assuming that a breakage is caused by a code change is often true, but not always.
          If we had spent less time looking at the recent changes, and more time looking at the
          database itself, we would have found it much faster."
        </blockquote>

        <p style={{ marginBottom: "var(--space-md)" }}>
          From a production debugging session. We were chasing a performance issue through git
          blame and commit diffs for hours. The actual problem was 12.8 million stale database
          records - damcologs where only 27k contained actual content.
        </p>

        <p style={{ marginBottom: "var(--space-md)" }}>
          After cleanup: 406,624 records. Down from 13,279,954. Integration server CPU usage
          dropped immediately. The "bug" wasn't in the code at all.
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
          The pattern
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          When something breaks, the instinct is to look at what changed recently. git diff,
          recent commits, recent deploys. This is usually right. But when it's wrong, you
          burn hours.
        </p>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Sometimes the problem has been there for months, slowly accumulating until it tips
          over. The database grew. The load changed. Something external shifted.
        </p>
        <p>
          <strong style={{ color: "var(--color-accent)" }}>The fix:</strong> Before diving into
          code archaeology, spend 10 minutes looking at the actual data. Database size, record
          counts, query performance. Often the answer is sitting there, waiting.
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
        <p>From work notes, May 2022. Mileviewer performance investigation.</p>
      </footer>
    </article>
  );
}
