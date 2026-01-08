// src/app/notes/economic-honesty/page.tsx
export default function EconomicHonestyPage() {
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
          Economic honesty
        </h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
          "This is all fucking insane but I have a mortgage."
        </p>
      </header>

      <section style={{ marginBottom: "var(--space-xl)" }}>
        <p style={{ marginBottom: "var(--space-md)" }}>
          The tech industry runs on a simple dynamic: most people know the current trends
          are varying degrees of insane, but economic leverage determines intellectual freedom.
          Until you have "fuck you" money, you nod along with "AI will revolutionize everything"
          while quietly building actual useful tools.
        </p>

        <p style={{ marginBottom: "var(--space-md)" }}>
          This is for everyone who's ever sat in a meeting thinking "this is completely insane"
          while nodding because they need health insurance.
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
          The meta layer
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Even this observation gets commodified. The critique of capitalism becomes a product
          (satirical merch, anyone?). We're simultaneously victims and perpetrators. That's
          not hypocrisy - it's just the water we swim in.
        </p>

        <p>
          Acknowledging economic constraints isn't defeat. It's starting from reality instead
          of pretending you're operating from some principled high ground that doesn't exist.
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
          What this changes
        </h2>
        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--border-radius)",
            padding: "var(--space-md)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
          }}
        >
          <p style={{ marginBottom: "var(--space-sm)" }}>
            <strong>Career decisions</strong> - What can you actually afford to say publicly?
          </p>
          <p style={{ marginBottom: "var(--space-sm)" }}>
            <strong>Tool choices</strong> - Local-first matters more when cloud subscriptions stack up
          </p>
          <p style={{ marginBottom: "var(--space-sm)" }}>
            <strong>Side projects</strong> - Build escape routes, not just passion projects
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Community</strong> - Target systems, not individuals trapped in them
          </p>
        </div>
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
          "Real people get left behind in the golden parachute techbro dreamworld.
          We deserve better."
        </p>
      </footer>
    </article>
  );
}
