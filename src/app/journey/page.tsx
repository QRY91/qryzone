// src/app/journey/page.tsx
import Link from "next/link";

interface JourneyCardProps {
  title: string;
  description: string;
  href: string;
  status?: "ready" | "coming-soon";
  tags?: string[];
}

function JourneyCard({
  title,
  description,
  href,
  status = "ready",
  tags = [],
}: JourneyCardProps) {
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

export default function JourneyPage() {
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
        Learning Journey
      </h1>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-secondary)",
          }}
        >
          Professional development, learning methodologies, and systematic
          approaches to building capability in complex domains.
        </p>
        <p style={{ marginBottom: "var(--space-md)" }}>
          These pieces document the learning process transparently - what
          worked, what didn't, and how to systematically develop expertise in
          technical and professional contexts.
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
          Professional Evolution
        </h2>
        <JourneyCard
          title="Productivity Breakthrough"
          description="From consumption to creation: how transferable skills and AI catalyzed sustained development flow. The story of when gaming skills finally transferred to systematic building."
          href="/journey/productivity-breakthrough"
          tags={["productivity", "ai-collaboration", "skill-transfer"]}
        />

        <JourneyCard
          title="Systematic Career Growth"
          description="From bootcamp graduate to enterprise-level problem solver through systematic skill building. Quantified achievements, technical progression, and the philosophy of transforming dysfunction into preventative systems."
          href="/journey/systematic-career-growth"
          tags={[
            "professional-development",
            "quantified-impact",
            "systematic-learning",
          ]}
          status="coming-soon"
        />

        <JourneyCard
          title="Professional Visibility Campaign"
          description="Systematic approach to professional networking and visibility through authentic demonstration of value. Marketing honesty, strategic networking, and building genuine professional relationships."
          href="/journey/professional-visibility"
          tags={[
            "professional-networking",
            "systematic-approach",
            "authentic-voice",
          ]}
          status="coming-soon"
        />

        <JourneyCard
          title="Career Realignment at 33"
          description="From junior positioning to senior reality: strategic approach to career transition and authentic capability recognition. Systematic capability assessment and narrative repositioning framework."
          href="/journey/career-realignment"
          tags={[
            "career-strategy",
            "professional-positioning",
            "authentic-assessment",
          ]}
          status="coming-soon"
        />

        <JourneyCard
          title="Professional Identity Architecture"
          description="From institutional trauma to systematic solutions: building authentic professional identity as a systematic problem-solver. The breakthrough wasn't creating new identity - it was recognizing existing patterns."
          href="/journey/professional-identity"
          tags={["identity", "professional-development", "systematic-thinking"]}
          status="coming-soon"
        />

        <JourneyCard
          title="From Psychology to Programming"
          description="The non-traditional path to software development and how diverse experience creates unique problem-solving capabilities. Psychology → game design → bootcamp → enterprise development."
          href="/journey/career-evolution"
          tags={["career", "experience", "psychology"]}
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
          AI Collaboration Learning
        </h2>

        <JourneyCard
          title="AI Development Journey"
          description="From skeptic to systematic collaborator: evolving AI integration methodology. Personal evolution from AI experimentation to systematic collaboration and tool building."
          href="/journey/ai-development-narrative"
          tags={["ai", "collaboration", "methodology"]}
          status="coming-soon"
        />

        <JourneyCard
          title="AI Hyperresponder Characteristics"
          description="Analysis of individuals who get disproportionate benefits from AI collaboration. Pattern recognition, systematic thinking, and transparent integration approaches."
          href="/journey/ai-hyperresponder"
          tags={["ai", "productivity", "analysis"]}
          status="coming-soon"
        />

        <JourneyCard
          title="Building AI Capability vs Dependency"
          description="Strategic approach to AI integration that enhances rather than replaces human capability. Documentation requirements, transparency principles, and ethical considerations."
          href="/journey/ai-capability-building"
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
          Systematic Learning Methods
        </h2>

        <JourneyCard
          title="NixOS Learning Roadmap"
          description="Systematic approach to learning declarative system configuration and reproducible environments. Strategic learning methodology from concepts to production-ready configurations."
          href="/journey/nixos-learning-roadmap"
          tags={["learning", "nixos", "systematic"]}
          status="coming-soon"
        />

        <JourneyCard
          title="Documentation as Learning Tool"
          description="Using systematic documentation to accelerate learning and knowledge retention. Converting experience into transferable knowledge through transparent capture."
          href="/journey/documentation-learning"
          tags={["documentation", "learning", "knowledge"]}
          status="coming-soon"
        />

        <JourneyCard
          title="Learning Through Institutional Dysfunction"
          description="Converting toxic work experiences into systematic knowledge. How organizational trauma becomes strategic understanding and capability building."
          href="/journey/learning-through-dysfunction"
          tags={["learning", "organizations", "resilience"]}
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
          The Learning Philosophy
        </h2>
        <div
          style={{
            background: "#2f2f1f",
            border: "1px dashed #7f7f5f",
            padding: "var(--space-lg)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-md)",
            fontStyle: "italic",
            color: "var(--color-text-secondary)",
          }}
        >
          "I learn to spite those who punish it. If I can suffer and learn and
          build systems that prevent others from experiencing that dysfunction,
          then the suffering becomes valuable. If I die with the knowledge, the
          systems never get built, and the dysfunction repeats."
        </div>
        <p style={{ marginBottom: "var(--space-md)" }}>
          This learning journey is documented transparently not for personal
          therapy, but because systematic learning methodologies can be
          transferred. The patterns, failures, and insights become resources
          others can adapt to their contexts.
        </p>
        <Link
          href="/methodology"
          style={{
            color: "var(--color-accent)",
            textDecoration: "none",
          }}
        >
          More about systematic approaches →
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
          Continue Exploring
        </h2>
        <p style={{ marginBottom: "var(--space-md)" }}>
          Learning journey documentation is part of the broader systematic
          building approach.
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
