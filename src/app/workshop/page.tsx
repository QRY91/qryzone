// src/app/workshop/page.tsx
import Link from "next/link";

interface WorkshopCardProps {
  title: string;
  description: string;
  href: string;
  status?: "ready" | "coming-soon";
  tags?: string[];
}

function WorkshopCard({
  title,
  description,
  href,
  status = "ready",
  tags = [],
}: WorkshopCardProps) {
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
            Read guide →
          </Link>
        )}
      </div>
    </div>
  );
}

export default function WorkshopPage() {
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
        Process Documentation
      </h1>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-secondary)",
          }}
        >
          Practical guides, workflows, and methodologies for systematic
          building. These are the actual processes used to build tools and solve
          problems.
        </p>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Documentation designed for adaptation and transfer - take what works,
          modify for your context, improve and share back.
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
          QRY Methodology Implementation
        </h2>

        <WorkshopCard
          title="Implementing Query → Refine → Yield"
          description="Step-by-step guide to applying the QRY methodology to real problems. Documentation templates, process workflows, and common pitfalls to avoid."
          href="/workshop/qry-implementation"
          tags={["qry", "methodology", "process"]}
          status="coming-soon"
        />

        <WorkshopCard
          title="Problem Documentation Templates"
          description="Structured approaches to documenting problems before building solutions. Templates and examples for different types of dysfunction and technical challenges."
          href="/workshop/problem-documentation"
          tags={["documentation", "templates", "problems"]}
          status="coming-soon"
        />

        <WorkshopCard
          title="Solution Validation Workflows"
          description="Systematic approaches to testing solutions with real problems. Validation criteria, testing methodologies, and iteration frameworks."
          href="/workshop/solution-validation"
          tags={["validation", "testing", "iteration"]}
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
          Development Workflows
        </h2>

        <WorkshopCard
          title="Local-First Development Setup"
          description="Complete guide to setting up development environments that work offline and respect privacy. Tool selection, configuration, and workflow optimization."
          href="/workshop/local-first-setup"
          tags={["development", "local-first", "setup"]}
          status="coming-soon"
        />

        <WorkshopCard
          title="Context Preservation Systems"
          description="Workflows for maintaining development context across interruptions and context switches. Documentation practices and tool integration."
          href="/workshop/context-preservation"
          tags={["context", "workflow", "documentation"]}
          status="coming-soon"
        />

        <WorkshopCard
          title="Systematic Debugging Methodology"
          description="Structured approach to debugging complex problems. Documentation requirements, hypothesis testing, and solution verification processes."
          href="/workshop/debugging-methodology"
          tags={["debugging", "systematic", "methodology"]}
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
          AI Collaboration Processes
        </h2>

        <WorkshopCard
          title="Transparent AI Integration Workflow"
          description="Step-by-step process for integrating AI assistance without losing authenticity or professional credibility. Documentation requirements and transparency principles."
          href="/workshop/ai-integration"
          tags={["ai", "collaboration", "transparency"]}
          status="coming-soon"
        />

        <WorkshopCard
          title="AI Session Management"
          description="Structured approach to AI collaboration sessions. Startup procedures, context management, progress capture, and shutdown protocols."
          href="/workshop/ai-session-management"
          tags={["ai", "session", "management"]}
          status="coming-soon"
        />

        <WorkshopCard
          title="Building AI Capability vs Dependency"
          description="Practical guidelines for using AI to enhance rather than replace human capability. Skill development, documentation practices, and ethical considerations."
          href="/workshop/ai-capability-building"
          tags={["ai", "capability", "ethics"]}
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
          Content & Creative Processes
        </h2>

        <WorkshopCard
          title="Microstudio Context & Development Philosophy"
          description="Systematic approach to building an integrated development environment and creative practice. Core mission framework, AI integration evolution, and project portfolio architecture."
          href="/workshop/microstudio-context"
          tags={["microstudio", "philosophy", "development"]}
          status="coming-soon"
        />

        <WorkshopCard
          title="QRY Zone: Living Workshop Concept"
          description="Design methodology for authentic, evolving digital development environments. Beyond traditional portfolios - create living workshops that demonstrate ongoing process and systematic thinking."
          href="/workshop/qryzone-concept"
          tags={["design", "portfolio", "workshop"]}
          status="coming-soon"
        />

        <WorkshopCard
          title="Microstudio Audience & Authentic Positioning"
          description="Framework for identifying your authentic audience and building genuine developer community. Dual-platform strategy for professional and personal authenticity."
          href="/workshop/microstudio-audience"
          tags={["audience", "community", "authenticity"]}
          status="coming-soon"
        />

        <WorkshopCard
          title="Microstudio Workflow Architecture"
          description="Complete workflow for systematic content creation and documentation. From software development to educational content, maintaining quality and consistency."
          href="/workshop/microstudio-workflow"
          tags={["content", "workflow", "creative"]}
          status="coming-soon"
        />

        <WorkshopCard
          title="Educational Content Design"
          description="Systematic approach to creating educational content that makes complex concepts accessible without oversimplification. Design principles and testing methodologies."
          href="/workshop/educational-content"
          tags={["education", "content", "design"]}
          status="coming-soon"
        />

        <WorkshopCard
          title="Documentation as Product Philosophy"
          description="Treating documentation as a first-class product rather than afterthought. Quality standards, user experience design, and maintenance workflows."
          href="/workshop/documentation-as-product"
          tags={["documentation", "product", "philosophy"]}
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
          Using These Guides
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          These process guides are designed for adaptation, not rigid
          implementation. Take what works for your context, modify what doesn't,
          and contribute improvements back to the community.
        </p>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Each guide includes the problem it solves, why other approaches
          failed, step-by-step implementation, and common adaptation points for
          different contexts.
        </p>
        <div
          style={{
            background: "#2f2f1f",
            border: "1px dashed #7f7f5f",
            padding: "var(--space-md)",
            borderRadius: "var(--border-radius)",
            fontSize: "0.9rem",
            marginBottom: "var(--space-md)",
          }}
        >
          <strong>Note:</strong> These are working processes, not theoretical
          frameworks. They're documented from actual usage in real projects with
          real constraints.
        </div>
        <Link
          href="/methodology"
          style={{
            color: "var(--color-accent)",
            textDecoration: "none",
          }}
        >
          More about the systematic approach →
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
          Process documentation works best with strategic thinking and learning
          context.
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
            href="/thinking"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              padding: "var(--space-sm) var(--space-md)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              background: "var(--color-background)",
            }}
          >
            Strategic Thinking →
          </Link>
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
