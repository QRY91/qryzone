import ArticleLayout, {
  HotswapEdit,
  HumanEditDiff,
  InlineHumanEdit,
} from "@/components/ArticleLayout";

export default function SitePage() {
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
        How This Site Was Built
      </h1>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-secondary)",
          }}
        >
          Complete transparency about AI collaboration, human-sourced content,
          and the systematic approach to transforming 5+ years of notes into
          structured frameworks.
        </p>
      </section>

      {/* Full Disclosure */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <div
          style={{
            background: "#fef3c7",
            borderLeft: "4px solid #f59e0b",
            padding: "var(--space-lg)",
            margin: "var(--space-xl) 0",
            borderRadius: "var(--border-radius)",
          }}
        >
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#92400e",
              marginBottom: "var(--space-sm)",
            }}
          >
            ⚠️ Full Disclosure
          </h2>
          <p style={{ color: "#92400e" }}>
            <strong>
              Yes, AI wrote most of the final text you're reading.
            </strong>{" "}
            But here's what that actually means and why the value proposition
            still works.
          </p>
        </div>
      </section>

      {/* The Source Material */}
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
            The Source Material: 5+ Years of Human Experience
          </h2>
          <p style={{ marginBottom: "var(--space-md)" }}>
            Every article on this site transforms from{" "}
            <strong>human-typed source material</strong> spanning over 5 years
            of lived professional experience.
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
              What the AI Actually Transformed:
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                color: "var(--color-text-secondary)",
              }}
            >
              <li style={{ marginBottom: "var(--space-sm)" }}>
                <strong style={{ color: "#81c784" }}>
                  Personal development notes:
                </strong>{" "}
                Career transitions, skill building, systematic learning
                approaches
              </li>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                <strong style={{ color: "#81c784" }}>
                  Technical documentation:
                </strong>{" "}
                Tool evaluations, infrastructure decisions, development
                workflows
              </li>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                <strong style={{ color: "#81c784" }}>
                  Strategic thinking records:
                </strong>{" "}
                Market analysis, positioning decisions, long-term planning
              </li>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                <strong style={{ color: "#81c784" }}>
                  Project retrospectives:
                </strong>{" "}
                What worked, what failed, lessons learned from real
                implementations
              </li>
              <li style={{ marginBottom: "var(--space-sm)" }}>
                <strong style={{ color: "#81c784" }}>
                  Research and experimentation logs:
                </strong>{" "}
                Technology evaluations, proof-of-concept results
              </li>
            </ul>
          </div>

          <p style={{ marginBottom: "var(--space-md)" }}>
            Plus <strong>hours of iterative AI/human collaboration</strong> for
            each framework:
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
                Socratic questioning:
              </strong>{" "}
              AI helping surface implicit knowledge and assumptions
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Framework synthesis:
              </strong>{" "}
              Connecting patterns across different experiences and domains
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Strategic refinement:
              </strong>{" "}
              Testing ideas against real constraints and use cases
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>
                Implementation planning:
              </strong>{" "}
              Converting concepts into actionable roadmaps
            </li>
          </ul>
        </div>
      </section>

      {/* The Value Proposition */}
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
            The Value Proposition: 80% Truth at 20% Effort
          </h2>
          <p style={{ marginBottom: "var(--space-md)" }}>
            The AI collaboration enables something valuable:{" "}
            <strong>
              sharing 80% of the underlying truth at 20% of the effort to
              communicate it
            </strong>
            .
          </p>

          <div
            style={{
              background: "#e3f2fd",
              border: "1px solid #2196f3",
              padding: "var(--space-lg)",
              borderRadius: "var(--border-radius)",
              marginBottom: "var(--space-md)",
            }}
          >
            <h3 style={{ color: "#1565c0", marginBottom: "var(--space-md)" }}>
              🎯 Why This Works
            </h3>
            <p style={{ color: "#1976d2", marginBottom: "var(--space-md)" }}>
              <InlineHumanEdit
                original="The bottleneck in knowledge transfer isn't having insights—it's
                the time and effort required to communicate them clearly. AI
                collaboration solves the communication bottleneck while
                preserving the human insight that took years to develop."
              >
                In knowledge transfer, the bottleneck is in the time and effort
                required for effective, consistent communication. AI solves the
                consistency issue, but for the communication to be effective,
                human intervention remains necessary.
              </InlineHumanEdit>
            </p>
            <div
              style={{
                background: "#bbdefb",
                padding: "var(--space-md)",
                borderRadius: "var(--border-radius)",
                fontStyle: "italic",
              }}
            >
              <strong style={{ color: "#0d47a1" }}>Key Question:</strong> Is the
              writing the core value? Or is it the frameworks, patterns, and
              systematic approaches that took years to develop?
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation Process */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-primary)",
          }}
        >
          The Systematic Transformation Process
        </h2>

        <div
          style={{
            display: "grid",
            gap: "var(--space-md)",
            marginBottom: "var(--space-lg)",
          }}
        >
          {[
            {
              step: "1",
              title: "Source Analysis",
              desc: "AI reads and analyzes years of personal notes",
            },
            {
              step: "2",
              title: "Pattern Recognition",
              desc: "Identifying systematic approaches and frameworks",
            },
            {
              step: "3",
              title: "Structure Optimization",
              desc: "Organizing insights for maximum transferability",
            },
            {
              step: "4",
              title: "Voice Preservation",
              desc: "Maintaining authentic systematic thinking style",
            },
            {
              step: "5",
              title: "Cross-linking",
              desc: "Connecting related concepts across the site",
            },
            {
              step: "6",
              title: "Quality Assurance",
              desc: "Human review and correction of AI output",
            },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                background: "var(--color-surface)",
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
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontWeight: "bold",
                  flexShrink: 0,
                }}
              >
                {item.step}
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
      </section>

      {/* AI vs Human Contributions */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-primary)",
          }}
        >
          What AI Actually Did vs. Didn't Do
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-lg)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <div
            style={{
              background: "#e8f5e8",
              border: "1px solid #4caf50",
              padding: "var(--space-lg)",
              borderRadius: "var(--border-radius)",
            }}
          >
            <h3
              style={{
                color: "#2e7d32",
                marginBottom: "var(--space-md)",
                fontFamily: "var(--font-mono)",
              }}
            >
              ✅ AI Contributions
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                fontSize: "0.9rem",
                color: "#388e3c",
              }}
            >
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • Structured writing and clear explanations
              </li>
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • Consistent formatting and organization
              </li>
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • Cross-referencing and integration
              </li>
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • Technical documentation clarity
              </li>
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • Systematic presentation of frameworks
              </li>
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • Professional tone and accessibility
              </li>
            </ul>
          </div>

          <div
            style={{
              background: "#e3f2fd",
              border: "1px solid #2196f3",
              padding: "var(--space-lg)",
              borderRadius: "var(--border-radius)",
            }}
          >
            <h3
              style={{
                color: "#1565c0",
                marginBottom: "var(--space-md)",
                fontFamily: "var(--font-mono)",
              }}
            >
              🧠 Human Contributions
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                fontSize: "0.9rem",
                color: "#1976d2",
              }}
            >
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • All underlying insights and experiences
              </li>
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • Strategic thinking and pattern recognition
              </li>
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • Real-world validation and constraints
              </li>
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • Years of iterative learning and refinement
              </li>
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • Authentic voice and perspective
              </li>
              <li style={{ marginBottom: "var(--space-xs)" }}>
                • Quality control and accuracy verification
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* QRY Applied */}
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
            🔄 The Meta-Framework: QRY Applied to Content Creation
          </h2>
          <p style={{ marginBottom: "var(--space-md)" }}>
            This site itself demonstrates the methodology it documents:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "var(--space-md)",
            }}
          >
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>Query:</strong>{" "}
              5+ years of notes documenting real problems and solutions
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>Refine:</strong>{" "}
              AI collaboration to transform insights into transferable
              frameworks
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong style={{ color: "var(--color-accent)" }}>Yield:</strong>{" "}
              Complete transparency about process, sources, and methodology
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom Line */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <div
          style={{
            background: "#fef3c7",
            borderLeft: "4px solid #f59e0b",
            padding: "var(--space-xl)",
            borderRadius: "var(--border-radius)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.3rem",
              marginBottom: "var(--space-lg)",
              color: "#92400e",
              fontFamily: "var(--font-mono)",
            }}
          >
            🎯 Bottom Line
          </h2>
          <div
            style={{
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "#92400e",
              marginBottom: "var(--space-md)",
            }}
          >
            <strong>
              AI wrote the words, but human experience created the knowledge.
            </strong>
          </div>
          <p style={{ color: "#92400e" }}>
            <HotswapEdit
              original="The value isn't in the writing—it's in the systematic approaches
            that took years to develop, test, and refine."
            >
              The value is in sharing approaches that took years of experience
              to distill and refine. Not the writing. AI collaboration
              significantly lowers the threshold for sharing these frameworks.
            </HotswapEdit>
          </p>
        </div>
      </section>

      {/* Try It Yourself */}
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
          🚀 Try It Yourself
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          This entire approach is open and replicable. Start with your own
          experience, document systematically, collaborate transparently.
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--space-lg)",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "var(--space-lg)",
          }}
        >
          <a
            href="https://github.com/QRY91/qryzone"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              padding: "var(--space-sm) var(--space-md)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
            }}
          >
            View Source Code →
          </a>
          <a
            href="/errata"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              padding: "var(--space-sm) var(--space-md)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
            }}
          >
            See AI Mistakes →
          </a>
        </div>
      </section>
    </ArticleLayout>
  );
}
