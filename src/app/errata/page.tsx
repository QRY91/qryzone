export default function Errata() {
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
          fontSize: "2rem",
          marginBottom: "var(--space-xl)",
          color: "var(--color-accent)",
          fontFamily: "var(--font-mono)",
        }}
      >
        Errata: AI Mistakes and Corrections
      </h1>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-secondary)",
          }}
        >
          Documentation of AI hallucinations, inaccuracies, and mistakes that
          required human correction. Starting with the most ironic example: this
          page itself.
        </p>
      </section>

      {/* Meta-Irony Alert */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <div
          style={{
            background: "#fef2f2",
            borderLeft: "4px solid #f87171",
            padding: "var(--space-xl)",
            margin: "var(--space-xl) 0",
            borderRadius: "var(--border-radius)",
          }}
        >
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              color: "#991b1b",
              marginBottom: "var(--space-md)",
              fontFamily: "var(--font-mono)",
            }}
          >
            🚨 First Entry: Meta-Irony
          </h2>
          <p
            style={{
              color: "#b91c1c",
              marginBottom: "var(--space-md)",
            }}
          >
            When initially asked to create this errata page, the AI assistant
            fabricated an entire document of fake error examples, complete with
            made-up statistics like "23 documented errors" and "15% needed major
            fact correction."
          </p>
          <div
            style={{
              background: "#fee2e2",
              padding: "var(--space-md)",
              borderRadius: "var(--border-radius)",
              border: "1px solid #fca5a5",
            }}
          >
            <strong style={{ color: "#7f1d1d" }}>
              This fabrication is itself the perfect first entry
            </strong>{" "}
            - demonstrating exactly why AI requires human oversight and why
            errata pages are essential.
          </div>
        </div>
      </section>

      {/* The Core Problem */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
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
            The Confidence Problem
          </h2>
          <p style={{ marginBottom: "var(--space-md)" }}>
            AI assistants will confidently generate detailed, plausible-sounding
            information even when they don't actually know the facts. This
            creates a fundamental problem for AI-assisted content creation:
          </p>
          <div
            style={{
              background: "#fff3cd",
              border: "1px solid #ffc107",
              padding: "var(--space-lg)",
              borderRadius: "var(--border-radius)",
              textAlign: "center",
              margin: "var(--space-lg) 0",
            }}
          >
            <strong style={{ color: "#856404", fontSize: "1.1rem" }}>
              How do you distinguish between AI accuracy and AI confidence?
            </strong>
          </div>
          <p style={{ marginBottom: "var(--space-md)" }}>
            During the QRY.zone content transformation process, the human
            collaborator caught and corrected various AI mistakes, but the
            specific details weren't systematically documented at the time.
            Rather than fabricate examples (as the AI just demonstrated), this
            page will honestly track actual errors as they're identified and
            corrected.
          </p>
        </div>
      </section>

      {/* Error Categories */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-primary)",
          }}
        >
          Real Error Categories We've Observed
        </h2>

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-xl)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <h3
            style={{
              fontSize: "1.3rem",
              marginBottom: "var(--space-lg)",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Fabrication and Hallucination
          </h3>

          <div
            style={{
              background: "#2f2f1f",
              border: "1px dashed #7f7f5f",
              padding: "var(--space-lg)",
              borderRadius: "var(--border-radius)",
              marginBottom: "var(--space-md)",
            }}
          >
            <h4
              style={{
                color: "#ff6b6b",
                marginBottom: "var(--space-md)",
                fontFamily: "var(--font-mono)",
              }}
            >
              ❌ Example: This Page's First Version
            </h4>
            <div
              style={{
                background: "var(--color-background)",
                padding: "var(--space-md)",
                borderRadius: "var(--border-radius)",
                border: "1px solid var(--color-border)",
                marginBottom: "var(--space-md)",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                <strong>Context:</strong> Creating an errata page
              </p>
              <p style={{ marginBottom: "var(--space-sm)" }}>
                <span
                  style={{
                    background: "#ffebee",
                    color: "#c62828",
                    padding: "2px 8px",
                    borderRadius: "var(--border-radius)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                  }}
                >
                  AI generated: Detailed fake examples of 23 specific errors
                  with categories and statistics
                </span>
              </p>
              <p style={{ marginBottom: "var(--space-sm)" }}>
                <span
                  style={{
                    background: "#e8f5e8",
                    color: "#2e7d32",
                    padding: "2px 8px",
                    borderRadius: "var(--border-radius)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                  }}
                >
                  Reality: AI had no knowledge of actual errors and fabricated
                  everything
                </span>
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                <strong>Impact:</strong> Would have completely undermined the
                credibility of the transparency effort.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#fff3cd",
              border: "1px solid #ffc107",
              padding: "var(--space-lg)",
              borderRadius: "var(--border-radius)",
            }}
          >
            <h4 style={{ color: "#856404", marginBottom: "var(--space-md)" }}>
              🎯 Why This Matters
            </h4>
            <p style={{ color: "#856404" }}>
              The original fabricated errata page looked completely plausible.
              It had specific examples, technical details, and statistical
              breakdowns. Someone could have published it as-is and claimed it
              demonstrated "transparent AI collaboration." This is exactly the
              problem that real transparency is meant to address.
            </p>
          </div>
        </div>
      </section>

      {/* Moving Forward */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
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
            Moving Forward: Honest Error Tracking
          </h2>
          <p style={{ marginBottom: "var(--space-md)" }}>
            This page will be updated with <strong>actual</strong> errors as
            they're discovered and corrected. No fabricated examples, no made-up
            statistics, no plausible-sounding fiction.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--space-lg)",
              margin: "var(--space-lg) 0",
            }}
          >
            <div
              style={{
                background: "#e8f5e8",
                border: "1px solid #4caf50",
                padding: "var(--space-md)",
                borderRadius: "var(--border-radius)",
              }}
            >
              <h3
                style={{
                  color: "#2e7d32",
                  marginBottom: "var(--space-sm)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                ✅ What We Actually Know
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  color: "#388e3c",
                  fontSize: "0.9rem",
                }}
              >
                <li style={{ marginBottom: "var(--space-xs)" }}>
                  • AI makes mistakes
                </li>
                <li style={{ marginBottom: "var(--space-xs)" }}>
                  • Human oversight is essential
                </li>
                <li style={{ marginBottom: "var(--space-xs)" }}>
                  • Systematic verification is required
                </li>
                <li style={{ marginBottom: "var(--space-xs)" }}>
                  • Transparency requires honesty
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#fff3e0",
                border: "1px solid #ff9800",
                padding: "var(--space-md)",
                borderRadius: "var(--border-radius)",
              }}
            >
              <h3
                style={{
                  color: "#e65100",
                  marginBottom: "var(--space-sm)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                🤷 What We Don't Know
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  color: "#f57c00",
                  fontSize: "0.9rem",
                }}
              >
                <li style={{ marginBottom: "var(--space-xs)" }}>
                  • Exact statistics on error rates
                </li>
                <li style={{ marginBottom: "var(--space-xs)" }}>
                  • Detailed categorization of mistakes
                </li>
                <li style={{ marginBottom: "var(--space-xs)" }}>
                  • Comprehensive documentation of all interventions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Safeguards */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-primary)",
          }}
        >
          The Lesson for AI Collaboration
        </h2>

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-xl)",
            borderRadius: "var(--border-radius)",
          }}
        >
          <h3
            style={{
              fontSize: "1.3rem",
              marginBottom: "var(--space-lg)",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Essential Safeguards
          </h3>
          <div style={{ display: "grid", gap: "var(--space-sm)" }}>
            {[
              {
                num: "1",
                title: "Human subject matter expertise",
                desc: "Ability to recognize when AI claims are wrong",
              },
              {
                num: "2",
                title: "Systematic fact-checking",
                desc: "Verification of all specific claims",
              },
              {
                num: "3",
                title: "Intellectual honesty",
                desc: "Admitting when we don't know something",
              },
              {
                num: "4",
                title: "Process transparency",
                desc: "Clear documentation of what's AI vs. human contribution",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  padding: "var(--space-md)",
                  borderRadius: "var(--border-radius)",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-md)",
                }}
              >
                <div
                  style={{
                    background: "var(--color-accent)",
                    color: "var(--color-background)",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    flexShrink: 0,
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <strong style={{ color: "var(--color-text-primary)" }}>
                    {item.title}:
                  </strong>{" "}
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Verification */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
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
              fontSize: "1.3rem",
              marginBottom: "var(--space-lg)",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            📝 Reader Verification
          </h2>
          <p style={{ marginBottom: "var(--space-md)" }}>
            Found an error in the content? Please report it so we can add{" "}
            <strong>real</strong> examples to this errata page:
          </p>

          <div
            style={{
              background: "#2f2f1f",
              border: "1px dashed #7f7f5f",
              padding: "var(--space-lg)",
              borderRadius: "var(--border-radius)",
              marginBottom: "var(--space-md)",
            }}
          >
            <h3
              style={{
                color: "#f0c674",
                marginBottom: "var(--space-md)",
                fontFamily: "var(--font-mono)",
              }}
            >
              How to Report Actual Errors
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                color: "var(--color-text-secondary)",
              }}
            >
              <li style={{ marginBottom: "var(--space-sm)" }}>
                <strong style={{ color: "#81c784" }}>GitHub Issue:</strong>{" "}
                <a
                  href="https://github.com/QRY91/qryzone/issues"
                  style={{
                    color: "var(--color-accent)",
                    textDecoration: "none",
                  }}
                >
                  github.com/QRY91/qryzone/issues
                </a>
              </li>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                <strong style={{ color: "#81c784" }}>Include:</strong> Page URL,
                specific error, and evidence of the mistake
              </li>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                <strong style={{ color: "#81c784" }}>Response:</strong> All
                verified errors will be corrected and honestly documented here
              </li>
            </ul>
          </div>

          <div
            style={{
              background: "#e3f2fd",
              border: "1px solid #2196f3",
              padding: "var(--space-md)",
              borderRadius: "var(--border-radius)",
              fontSize: "0.9rem",
            }}
          >
            <strong style={{ color: "#1565c0" }}>
              Future entries will include:
            </strong>{" "}
            <span style={{ color: "#1976d2" }}>
              Exact error, correction, impact, and detection method. Real
              documentation of real mistakes.
            </span>
          </div>
        </div>
      </section>

      {/* The Real Transparency Principle */}
      <section
        style={{
          background: "var(--color-surface)",
          padding: "var(--space-xl)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--border-radius)",
          textAlign: "center",
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
          🔍 The Real Transparency Principle
        </h2>
        <div
          style={{
            background: "var(--color-background)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-lg)",
            borderRadius: "var(--border-radius)",
            fontStyle: "italic",
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-md)",
          }}
        >
          Genuine transparency about AI collaboration means admitting when we
          don't know something, documenting actual mistakes rather than
          fabricating plausible examples, and acknowledging that AI requires
          constant human oversight.
        </div>
        <p style={{ color: "var(--color-text-primary)" }}>
          The ironic fabrication that started this page demonstrates exactly why
          these principles matter.
        </p>
      </section>

      {/* Footer Status */}
      <section
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "var(--space-lg)",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "var(--color-text-secondary)",
        }}
      >
        <div style={{ marginBottom: "var(--space-sm)" }}>
          <strong>Last updated:</strong> {new Date().toLocaleDateString()} •{" "}
          <strong>Documented errors:</strong> 1 (this page's fabricated first
          version) • <strong>Lesson learned:</strong> AI confidence ≠ AI
          accuracy
        </div>
        <a
          href="https://github.com/QRY91/qryzone"
          style={{
            color: "var(--color-accent)",
            textDecoration: "none",
            fontSize: "0.8rem",
          }}
        >
          View all corrections in source code →
        </a>
      </section>
    </div>
  );
}
