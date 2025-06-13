// src/app/thinking/page.tsx
import Link from "next/link";

interface ThinkingCardProps {
  title: string;
  description: string;
  href: string;
  status?: "ready" | "coming-soon";
  tags?: string[];
}

function ThinkingCard({
  title,
  description,
  href,
  status = "ready",
  tags = [],
}: ThinkingCardProps) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--border-radius)",
        padding: "var(--space-lg)",
        marginBottom: "var(--space-md)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "var(--space-sm)",
        }}
      >
        <h3
          style={{
            color: "var(--color-accent)",
            margin: 0,
            fontFamily: "var(--font-mono)",
            fontSize: "1.1rem",
          }}
        >
          {title}
        </h3>
        {tags.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "var(--space-xs)",
              flexWrap: "wrap",
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.7rem",
                  color: "var(--color-text-secondary)",
                  background: "var(--color-background)",
                  padding: "2px 6px",
                  borderRadius: "3px",
                  border: "1px solid var(--color-border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <p
        style={{
          marginBottom: "var(--space-md)",
          color: "var(--color-text-primary)",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>

      <div style={{ textAlign: "right" }}>
        {status === "coming-soon" ? (
          <span
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "0.9rem",
              fontStyle: "italic",
            }}
          >
            Coming soon
          </span>
        ) : (
          <Link
            href={href}
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Read more →
          </Link>
        )}
      </div>
    </div>
  );
}

export default function ThinkingPage() {
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
        Strategic Thinking
      </h1>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-secondary)",
          }}
        >
          Analysis, patterns, and strategic insights from systematic observation
          of how things actually work vs. how they're supposed to work.
        </p>
        <p style={{ marginBottom: "var(--space-md)" }}>
          These pieces document strategic thinking processes - market analysis,
          risk assessment, technical vision, and the systematic approach to
          understanding complex domains.
        </p>
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-primary)",
          }}
        >
          Market & Industry Analysis
        </h2>

        <ThinkingCard
          title="DevTools Landscape Analysis"
          description="Strategic analysis of the developer tools market, identifying opportunities and positioning strategies. What works, what doesn't, and where the genuine problems are."
          href="/thinking/devtools-landscape"
          tags={["market-analysis", "devtools", "strategy"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="AI Advancement Risk Assessment"
          description="Strategic risk analysis: what happens if cloud AI gets dramatically better? How to position for multiple futures without betting everything on predictions."
          href="/thinking/ai-risk-assessment"
          tags={["ai", "risk-analysis", "strategy"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="Market Positioning & Competitive Analysis"
          description="Strategic framework for authentic market positioning in emerging technology sectors. Systematic approach to market analysis, competitive gaps, and timing dynamics."
          href="/thinking/market-positioning-analysis"
          tags={["market-analysis", "strategy", "competitive-intelligence"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="Hardware Cluster Economics"
          description="Economic analysis of local AI infrastructure vs. cloud dependencies for development workflows. Complete TCO framework with break-even analysis and strategic benefits."
          href="/thinking/hardware-cluster-economics"
          tags={["economics", "hardware", "ai-infrastructure"]}
          status="coming-soon"
        />
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-primary)",
          }}
        >
          Technical Vision & Architecture
        </h2>

        <ThinkingCard
          title="Homelab Permacomputing Strategy"
          description="Resilient, local-first development environments inspired by 100 Rabbits methodology. Build complete development capability independent of vendor relationships and network connectivity."
          href="/thinking/homelab-permacomputing-strategy"
          tags={["permacomputing", "microstudio", "resilience"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="CLI-First Development Environment"
          description="Systematic approach to building terminal-centric development workflows that prioritize speed of thought over visual polish, integrating AI assistance and context management."
          href="/thinking/cli-first-development"
          tags={["cli", "development-environment", "productivity"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="Hybrid AI Transition Strategy"
          description="80/20 sustainable AI integration for systematic workflow optimization. Hybrid transition strategy building capability rather than dependency with environmental consciousness."
          href="/thinking/hybrid-ai-transition"
          tags={["automation", "ai", "sustainability"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="CLI Tooling Stack Design"
          description="Systematic approach to building composable, maintainable command-line development workflows. Framework for tool selection, integration, and workflow optimization."
          href="/thinking/cli-tooling-stack"
          tags={["cli", "tooling", "systematic-design"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="Framework Cluster Economics"
          description="Economic analysis of development framework ecosystems and the hidden costs of vendor lock-in. Strategic framework for tool independence and sustainable development practices."
          href="/thinking/framework-cluster-economics"
          tags={["economics", "frameworks", "strategy"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="Local-First Development Patterns"
          description="Architectural patterns for building applications that work offline, respect privacy, and don't depend on external services for core functionality."
          href="/thinking/local-first-patterns"
          tags={["architecture", "local-first", "privacy"]}
          status="coming-soon"
        />
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-primary)",
          }}
        >
          Professional Strategy & Growth
        </h2>

        <ThinkingCard
          title="Technical Depth Assessment"
          description="Truthful constraint analysis for authentic capability positioning. Document actual capabilities and limitations to speak honestly in professional conversations - no hype, just measurable evidence."
          href="/thinking/technical-depth-assessment"
          tags={[
            "capability-assessment",
            "professional-development",
            "strategy",
          ]}
          status="coming-soon"
        />

        <ThinkingCard
          title="Professional Positioning Strategy"
          description="Strategic framework for authentic professional differentiation and brand consistency. Create your own space instead of fitting into inadequate existing ones."
          href="/thinking/professional-positioning-strategy"
          tags={["professional-development", "branding", "differentiation"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="AI Hyperresponder Profile"
          description="Strategic analysis of individuals who get disproportionate benefits from AI collaboration. Characteristics, capabilities, and implications for professional development."
          href="/thinking/ai-hyperresponder"
          tags={["ai", "professional-development", "strategy"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="Development Tooling Market Analysis"
          description="Market analysis of developer tooling trends, opportunities, and positioning strategies. What works in practice vs. what gets hyped in the ecosystem."
          href="/thinking/dev-tooling-market-analysis"
          tags={["market-analysis", "devtools", "strategy"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="Priority Bubbling UI Design"
          description="Interface design philosophy that surfaces important information through systematic priority management rather than notification spam or attention hijacking."
          href="/thinking/priority-bubbling-ui"
          tags={["ui-design", "priority-management", "systematic-thinking"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="Non-Traditional Career Advantages"
          description="Strategic advantages of non-linear career paths in technical roles. How diverse experience creates unique problem-solving capabilities."
          href="/thinking/career-advantages"
          tags={["career", "strategy", "experience"]}
          status="coming-soon"
        />

        <ThinkingCard
          title="Systematic vs. Velocity Thinking"
          description="Analysis of organizational tension between systematic work and velocity metrics. Why quality work often appears 'slow' and how to navigate this dysfunction."
          href="/thinking/systematic-vs-velocity"
          tags={["methodology", "organizations", "strategy"]}
          status="coming-soon"
        />
      </section>

      <section
        style={{
          background: "var(--color-surface)",
          padding: "var(--space-xl)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--border-radius)",
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
          Methodology Note
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          These strategic analyses follow the QRY methodology: document the
          actual problem, build focused understanding through systematic
          observation, share insights that others can adapt to their contexts.
        </p>
        <p style={{ marginBottom: "var(--space-md)" }}>
          They're not academic papers or business school case studies. They're
          practical strategic thinking documented transparently so others can
          learn from the process.
        </p>
        <Link
          href="/methodology"
          style={{
            color: "var(--color-accent)",
            textDecoration: "none",
          }}
        >
          More about the methodology →
        </Link>
      </section>

      <section
        style={{
          textAlign: "center",
          background: "var(--color-surface)",
          padding: "var(--space-xl)",
          border: "1px solid var(--color-border)",
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
          More QRY Content
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Strategic thinking is just one aspect of systematic building.
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--space-lg)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/journey"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              padding: "var(--space-sm) var(--space-md)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
            }}
          >
            Learning Journey →
          </Link>
          <Link
            href="/workshop"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              padding: "var(--space-sm) var(--space-md)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
            }}
          >
            Process Documentation →
          </Link>
          <Link
            href="/explore"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              padding: "var(--space-sm) var(--space-md)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
            }}
          >
            Explore Everything →
          </Link>
        </div>
      </section>
    </div>
  );
}
