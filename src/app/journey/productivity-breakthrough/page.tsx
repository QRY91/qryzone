import Link from "next/link";
import ArticleLayout, {
  InlineHumanEdit,
  HotswapEdit,
  HotswapBlock,
} from "@/components/ArticleLayout";

export default function ProductivityBreakthrough() {
  return (
    <ArticleLayout>
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <Link
          href="/journey"
          style={{
            color: "var(--color-accent)",
            textDecoration: "none",
            marginBottom: "var(--space-md)",
            display: "inline-block",
          }}
        >
          ← Back to Learning Journey
        </Link>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Productivity Breakthrough
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-lg)",
          }}
        >
          From consumption to creation: how transferable skills and AI catalyzed
          sustained development flow
        </p>
      </div>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <div
          style={{
            background: "#e0f2fe",
            borderLeft: "4px solid #0284c7",
            padding: "var(--space-lg)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-xl)",
          }}
        >
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              color: "#0369a1",
              marginBottom: "var(--space-md)",
              fontFamily: "var(--font-mono)",
            }}
          >
            The Narrative Core
          </h2>
          <p style={{ color: "#0c4a6e" }}>
            Something clicked. Years of exploring game mechanics and studying
            complex systems finally made the leap to hands-on learning and
            building to learn. The result: sustained GitHub activity, intrinsic
            motivation, and genuine fun in the creative process.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          The Shift: From Consumption to Creation
        </h2>

        <p style={{ marginBottom: "var(--space-lg)" }}>
          A conscious move away from activities like gaming toward "hacking
          together stuff" and actively building projects.{" "}
          <InlineHumanEdit
            original="This wasn't abandoning
          previous interests — it was recognizing that the systematic analysis
          and deep practice skills developed elsewhere could transfer to
          software development."
          >
            I had a much easier time executing on ideas by leveraging my natural
            language skills in AI collaboration in combination with my
            understanding of game state systems. If you've ever tried to break a
            dialogue tree in an RPG just to see if there's any funny responses,
            you know what I mean.
          </InlineHumanEdit>
        </p>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          The "Aha!" Moment: Transferable Skills Unleashed
        </h3>
        <div
          style={{
            background: "#f0fdf4",
            borderLeft: "4px solid #16a34a",
            padding: "var(--space-lg)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <h4
            style={{
              fontWeight: "600",
              marginBottom: "var(--space-md)",
              color: "#15803d",
            }}
          >
            Skills That Transferred from Gaming to Development:
          </h4>
          <ul style={{ marginBottom: "var(--space-md)" }}>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Systematic analysis:</strong> Breaking down complex
              systems to understand mechanics
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Pattern recognition:</strong> Identifying optimal
              approaches and efficiency patterns
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Deep practice and iteration:</strong> Grinding
              improvements through repetition
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Problem-solving persistence:</strong> Working through
              challenging scenarios systematically
            </li>
          </ul>
          <div
            style={{
              background: "#dcfce7",
              padding: "var(--space-md)",
              borderRadius: "var(--border-radius)",
              border: "1px solid #bbf7d0",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                color: "#166534",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              "The hours of studying systems in games finally made the leap to
              hands on learning and building to learn."
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          AI as Catalyst and Enabler
        </h2>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Bypassing the Tutorial Slog
        </h3>
        <p style={{ marginBottom: "var(--space-lg)" }}>
          AI tools helped bypass{" "}
          <HotswapEdit
            original="the 'tutorial slog'—a common momentum killer
          when starting new projects"
          >
            "tutorial hell"
          </HotswapEdit>
          . Instead of getting stuck in setup phases, I could immediately engage
          with the interesting complexity that actually maintains motivation and
          drives learning.
        </p>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          The "Always On" Partner
        </h3>
        <div
          style={{
            background: "#fef3c7",
            borderLeft: "4px solid #f59e0b",
            padding: "var(--space-lg)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <p
            style={{
              fontWeight: "600",
              marginBottom: "var(--space-sm)",
              color: "#92400e",
            }}
          >
            Key Insight:
          </p>
          <p style={{ color: "#92400e", marginBottom: "var(--space-md)" }}>
            AI acts as an always on board and encouraging partner. Even when it
            leads to experimental "lemming" moments where we go off the cliff,
            there's fun and learning all the way down. This resilience and humor
            about experimentation became part of the enjoyment.
          </p>
          <div
            style={{
              background: "#fde68a",
              padding: "var(--space-md)",
              borderRadius: "var(--border-radius)",
              border: "1px solid #fcd34d",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                color: "#78350f",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              "Sure we go off the cliff like lemmings sometimes, but I'm having
              fun all the way down!"
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Intrinsic Motivation Discovery
        </h2>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Joy-Driven Development
        </h3>
        <p style={{ marginBottom: "var(--space-lg)" }}>
          The drive to build became primarily intrinsic and joy-driven.
          "Couldn't stop hacking" and "having fun??" became the actual
          experience rather than forced productivity. This signals genuine
          engagement rather than external pressure responses.
        </p>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Flow State Achievement
        </h3>
        <ul style={{ marginBottom: "var(--space-lg)" }}>
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong>Proactive engagement:</strong> Building beyond requirements
            and exploring independently
          </li>
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong>Sustained effort:</strong> Daily activity rather than
            sporadic bursts
          </li>
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong>Deep learning integration:</strong> Building to learn rather
            than learning to build
          </li>
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong>Natural motivation:</strong> Intrinsic drive rather than
            external validation seeking
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Visual Evidence: The GitHub Story
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
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "var(--space-md)",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            GitHub Activity as Professional Proof
          </h3>
          <p style={{ marginBottom: "var(--space-md)" }}>
            <HotswapBlock
              original="The GitHub contribution graph serves as compelling visual evidence
            of sustained engagement, proactive learning, and genuine passion for
            the craft. Daily commits tell the story better than any resume
            bullet point."
            >
              This GitHub graph shows a distinct spike in activity once I
              started using AI more intensively. The threshold for
              experimentation was suddenly so low, that I found myself
              continuously building out ideas that I'd had floating around for
              ages. A GitHub contribution graph is easily manipulated,
              obviously. I could write my name if I prefer. Regardless, I found
              this sudden change worth noting.
            </HotswapBlock>
          </p>
          <p>
            <strong>Profile:</strong>{" "}
            <a
              href="https://github.com/QRY91"
              style={{
                color: "var(--color-accent)",
                textDecoration: "none",
              }}
            >
              github.com/QRY91
            </a>
          </p>
        </div>
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Professional Narrative Framework
        </h2>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Authenticity Over Generic Statements
        </h3>
        <p style={{ marginBottom: "var(--space-lg)" }}>
          This personal journey narrative is more compelling than generic
          passion statements because it's specific, measurable, and demonstrates
          genuine transformation. The story shows rather than tells professional
          capability.
        </p>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Interview-Ready Elements
        </h3>
        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-lg)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <h4
            style={{
              fontWeight: "600",
              marginBottom: "var(--space-md)",
              color: "var(--color-text-primary)",
            }}
          >
            Key Story Components:
          </h4>
          <ol>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>The "click" moment:</strong> Skills from other domains
              transferring to development
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>AI as barrier removal:</strong> How tools helped overcome
              initial friction
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Experimental resilience:</strong> Comfort with failure and
              iteration
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Specific project connections:</strong> Linking motivation
              to concrete work (Uroboro, Examinator, Panopticron)
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Visual evidence:</strong> GitHub activity supporting the
              narrative
            </li>
          </ol>
        </div>
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Adapting This Framework
        </h2>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          For Individual Breakthrough Recognition
        </h3>
        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-lg)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <ol>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Identify transferable skills:</strong> What systematic
              approaches do you use in other areas?
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Recognize catalyst moments:</strong> When did tools or
              environments unlock your natural patterns?
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Document intrinsic motivation:</strong> What activities
              feel genuinely engaging vs. forced?
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Collect visual evidence:</strong> How does your work
              pattern demonstrate sustained engagement?
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Frame authenticity:</strong> What's your specific story
              rather than generic statements?
            </li>
          </ol>
        </div>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          For Teams Supporting Breakthrough
        </h3>
        <ul style={{ marginBottom: "var(--space-lg)" }}>
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong>Remove tutorial barriers:</strong> Help people engage with
            interesting complexity quickly
          </li>
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong>Support experimental approaches:</strong> Create safe spaces
            for "lemming moments"
          </li>
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong>Recognize transferable skills:</strong> Value systematic
            thinking from any domain
          </li>
          <li style={{ marginBottom: "var(--space-sm)" }}>
            <strong>Encourage intrinsic motivation:</strong> Let people find
            their natural engagement patterns
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Key Insights
        </h2>

        <div
          style={{
            background: "#e0f2fe",
            border: "1px solid #0ea5e9",
            padding: "var(--space-lg)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <ul>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Skills transfer systematically:</strong> Deep practice
              patterns apply across domains
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Barriers matter more than motivation:</strong> Removing
              friction unlocks natural engagement
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Intrinsic joy drives sustainability:</strong> Fun creates
              better long-term outcomes than discipline
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Visual evidence supports narrative:</strong> Activity
              patterns tell compelling professional stories
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Authenticity beats generic positioning:</strong> Specific
              transformation stories demonstrate genuine capability
            </li>
          </ul>
        </div>
      </section>

      <section
        style={{
          marginTop: "var(--space-xxl)",
          paddingTop: "var(--space-xl)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Related Learning Journey
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-md)",
          }}
        >
          <Link
            href="/journey/professional-identity"
            style={{
              display: "block",
              padding: "var(--space-md)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h4
              style={{
                fontWeight: "600",
                marginBottom: "var(--space-sm)",
                color: "var(--color-text-primary)",
              }}
            >
              Professional Identity Architecture
            </h4>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-text-secondary)",
                margin: 0,
              }}
            >
              From institutional trauma to systematic solutions
            </p>
          </Link>
          <Link
            href="/journey/systematic-career-growth"
            style={{
              display: "block",
              padding: "var(--space-md)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h4
              style={{
                fontWeight: "600",
                marginBottom: "var(--space-sm)",
                color: "var(--color-text-primary)",
              }}
            >
              Systematic Career Growth
            </h4>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-text-secondary)",
                margin: 0,
              }}
            >
              Quantified accomplishments and multi-domain mastery
            </p>
          </Link>
        </div>
      </section>
    </ArticleLayout>
  );
}
