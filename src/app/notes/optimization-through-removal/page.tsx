// src/app/notes/optimization-through-removal/page.tsx
export default function OptimizationThroughRemovalPage() {
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
          Optimization through removal
        </h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
          The fastest code is code that doesn't run
        </p>
      </header>

      <section style={{ marginBottom: "var(--space-xl)" }}>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Three things from the same debugging session taught me this:
        </p>

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--border-radius)",
            padding: "var(--space-md)",
            marginBottom: "var(--space-md)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
          }}
        >
          <p style={{ marginBottom: "var(--space-sm)" }}>
            <strong>1.</strong> "unsorted fetch seems faster (shocker)"
          </p>
          <p style={{ color: "var(--color-text-secondary)" }}>
            Removed a sort operation that wasn't needed. Instant improvement.
          </p>
        </div>

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--border-radius)",
            padding: "var(--space-md)",
            marginBottom: "var(--space-md)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
          }}
        >
          <p style={{ marginBottom: "var(--space-sm)" }}>
            <strong>2.</strong> Rule results were being calculated three times
          </p>
          <p style={{ color: "var(--color-text-secondary)" }}>
            At shipment update, at search query, and again in memory with map/filter.
            Only the first one was necessary.
          </p>
        </div>

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--border-radius)",
            padding: "var(--space-md)",
            marginBottom: "var(--space-md)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
          }}
        >
          <p style={{ marginBottom: "var(--space-sm)" }}>
            <strong>3.</strong> Integration servers were fetching, then updating everything
          </p>
          <p style={{ color: "var(--color-text-secondary)" }}>
            They fetched from the API, then sent update requests for all shipments without
            checking if updates were needed. A diffcheck at the source cut most traffic.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: "var(--space-xl)" }}>
        <h2
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          The principle
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          The reflex is to make things faster - better algorithms, more caching, parallel
          execution. Sometimes that's right. But often the better question is: does this
          need to happen at all?
        </p>
        <p>
          Removing unnecessary work beats optimizing it. Every time.
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
        <p>From work notes, May 2022.</p>
      </footer>
    </article>
  );
}
