// src/app/methodology/page.tsx
import ArticleLayout, { InlineHumanEdit } from "@/components/ArticleLayout";
import Link from "next/link";

export default function MethodologyPage() {
  return (
    <ArticleLayout>
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "var(--space-xl)",
          color: "var(--color-accent)",
          fontFamily: "var(--font-mono)",
        }}
      >
        Query, Refine, Yield
      </h1>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-secondary)",
          }}
        >
          <InlineHumanEdit original="The QRY methodology isn't revolutionary. It's just systematic."></InlineHumanEdit>{" "}
          When you encounter problems repeatedly, you can either keep
          complaining or start documenting patterns and building better
          solutions.{" "}
          <InlineHumanEdit>
            I chose the latter. I only complain recreationally. Promise.
          </InlineHumanEdit>
        </p>
        <p style={{ marginBottom: "var(--space-md)" }}>
          This is what I've learned works for turning institutional dysfunction
          into useful tools.
        </p>
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-xl)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "var(--space-lg)",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Query: Document what's actually broken
          </h2>
          <p style={{ marginBottom: "var(--space-md)" }}>
            Before building anything, figure out what the real problem is. Not
            the symptom everyone complains about, but the underlying dysfunction
            that keeps causing the same issues.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "var(--space-md)",
            }}
          >
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Document patterns:
              </strong>{" "}
              When does this problem happen? What triggers it?
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Identify root causes:
              </strong>{" "}
              Why do current solutions fail? What assumptions are wrong?
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Map the dysfunction:
              </strong>{" "}
              How does the broken system actually work? Who gets hurt?
            </li>
          </ul>
          <div
            style={{
              background: "#2f2f1f",
              border: "1px dashed #7f7f5f",
              padding: "var(--space-md)",
              borderRadius: "var(--border-radius)",
              fontSize: "0.9rem",
            }}
          >
            <strong>Example:</strong> "Good work stays invisible" → systematic
            documentation reveals that velocity metrics punish thoroughness
            while depending on quality outcomes.
          </div>
        </div>

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-xl)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "var(--space-lg)",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Refine: Build focused solutions, test with real problems
          </h2>
          <p style={{ marginBottom: "var(--space-md)" }}>
            Build the minimum viable tool that solves the documented problem.
            Test it with actual dysfunction, not idealized scenarios. Iterate
            based on what breaks.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "var(--space-md)",
            }}
          >
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Start small:
              </strong>{" "}
              Solve one specific aspect of the problem completely
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Test with chaos:
              </strong>{" "}
              Use it in real situations with real constraints and interruptions
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Document failures:
              </strong>{" "}
              What breaks? What assumptions were wrong? What works unexpectedly
              well?
            </li>
          </ul>
          <div
            style={{
              background: "#2f2f1f",
              border: "1px dashed #7f7f5f",
              padding: "var(--space-md)",
              borderRadius: "var(--border-radius)",
              fontSize: "0.9rem",
            }}
          >
            <strong>Example:</strong> uroboro captures development context →
            tested during actual deadline pressure → refined to handle
            interruptions and context switching.
          </div>
        </div>

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-xl)",
            borderRadius: "var(--border-radius)",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "var(--space-lg)",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Yield: Share what works so others can adapt it
          </h2>
          <p style={{ marginBottom: "var(--space-md)" }}>
            Document the solution completely. Not just the code, but the problem
            it solves, why other approaches failed, and how others can adapt it
            to their situations.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "var(--space-md)",
            }}
          >
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Share the methodology:
              </strong>{" "}
              How did you approach the problem? What can be transferred?
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Document limitations:
              </strong>{" "}
              What doesn't this solve? What are the sharp edges?
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Enable adaptation:
              </strong>{" "}
              How can others modify this for their specific dysfunction?
            </li>
          </ul>
          <div
            style={{
              background: "#2f2f1f",
              border: "1px dashed #7f7f5f",
              padding: "var(--space-md)",
              borderRadius: "var(--border-radius)",
              fontSize: "0.9rem",
            }}
          >
            <strong>Example:</strong> QRY methodology itself → documented
            completely → others can adapt systematic problem-solving to their
            domains.
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-primary)",
          }}
        >
          Why this works
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Most problem-solving approaches either jump straight to solutions
          (missing the real problem) or get stuck in analysis paralysis (never
          building anything). QRY forces you through all three phases
          systematically.
        </p>
        <p style={{ marginBottom: "var(--space-md)" }}>
          The documentation component is crucial. If you can't explain the
          problem clearly, you probably don't understand it. If you can't
          document the solution, others can't benefit from your work.
        </p>
        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-lg)",
            borderRadius: "var(--border-radius)",
            fontStyle: "italic",
            color: "var(--color-text-secondary)",
            margin: "var(--space-lg) 0",
          }}
        >
          "I learn to spite those who punish it. If I can suffer and learn and
          build systems that prevent others from experiencing that dysfunction,
          then the suffering becomes valuable."
        </div>
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-primary)",
          }}
        >
          Current applications
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          The QRY methodology is being applied across several domains:
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginBottom: "var(--space-lg)",
          }}
        >
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong style={{ color: "var(--color-accent)" }}>
              Developer tools:
            </strong>{" "}
            Local-first solutions to surveillance-heavy productivity software
          </li>
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong style={{ color: "var(--color-accent)" }}>
              Educational games:
            </strong>{" "}
            Making complex concepts accessible without oversimplification
          </li>
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong style={{ color: "var(--color-accent)" }}>
              AI collaboration:
            </strong>{" "}
            Transparent integration that builds capability rather than
            dependency
          </li>
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong style={{ color: "var(--color-accent)" }}>
              Institutional dysfunction:
            </strong>
            Converting toxic experiences into systematic knowledge
          </li>
        </ul>
      </section>

      <section
        style={{
          background: "var(--color-surface)",
          padding: "var(--space-xl)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--border-radius)",
          textAlign: "center",
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
          Try it yourself
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Pick a problem you encounter repeatedly. Document what's actually
          broken. Build the smallest thing that might help. Share what you
          learn.
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--space-lg)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/QRY91"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              padding: "var(--space-sm) var(--space-md)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
            }}
          >
            github.com/QRY91 →
          </a>
          <Link
            href="/about"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              padding: "var(--space-sm) var(--space-md)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
            }}
          >
            Read the story →
          </Link>
        </div>
      </section>
    </ArticleLayout>
  );
}
