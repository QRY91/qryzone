// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import the shader component with no SSR
const QryShaderVisual = dynamic(() => import("../components/QryShaderVisual"), {
  ssr: false,
});

interface ProjectCardProps {
  name: string;
  status: string;
  problem: string;
  approach: string;
  caution?: string;
  link: string;
  linkStatus?: "ready" | "coming-soon" | "external";
  externalUrl?: string;
}

function ProjectCard({
  name,
  status,
  problem,
  approach,
  caution,
  link,
  linkStatus = "ready",
  externalUrl,
}: ProjectCardProps) {
  const getHref = () => {
    if (linkStatus === "external" && externalUrl) return externalUrl;
    if (linkStatus === "ready") return `https://${link}.qry.zone`;
    return "#";
  };

  const getLinkText = () => {
    if (linkStatus === "external" && externalUrl) {
      if (externalUrl.includes("github.com")) {
        return `github.com/QRY91/${link} →`;
      }
      return `${externalUrl.replace("https://", "").replace("www.", "")} →`;
    }
    if (linkStatus === "coming-soon") return `${link}.qry.zone (coming soon)`;
    return `${link}.qry.zone →`;
  };

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
          alignItems: "center",
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
          {name}
        </h3>
        <span
          style={{
            fontSize: "0.8rem",
            color: "var(--color-text-secondary)",
            fontStyle: "italic",
          }}
        >
          {status}
        </span>
      </div>

      <div style={{ marginBottom: "var(--space-sm)" }}>
        <strong style={{ color: "var(--color-text-primary)" }}>Problem:</strong>{" "}
        {problem}
      </div>

      <div style={{ marginBottom: "var(--space-sm)" }}>
        <strong style={{ color: "var(--color-text-primary)" }}>
          Approach:
        </strong>{" "}
        {approach}
      </div>

      {caution && (
        <div
          style={{
            background: "#2f2f1f",
            border: "1px dashed #7f7f5f",
            padding: "var(--space-sm)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-sm)",
            fontSize: "0.9rem",
          }}
        >
          <strong style={{ color: "#f0c674" }}>⚠️ Heads up:</strong> {caution}
        </div>
      )}

      <div style={{ textAlign: "right" }}>
        {linkStatus === "coming-soon" ? (
          <span
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "0.9rem",
              fontStyle: "italic",
            }}
          >
            {getLinkText()}
          </span>
        ) : (
          <Link
            href={getHref()}
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            {getLinkText()}
          </Link>
        )}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 var(--space-md)",
        lineHeight: "1.7",
      }}
    >
      {/* Hero with 3D shader visualization */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "var(--space-xxl)",
        }}
      >
        <div style={{ marginBottom: "var(--space-lg)" }}>
          <QryShaderVisual />
        </div>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          I build tools that solve problems I&apos;ve documented.
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--color-text-secondary)",
            lineHeight: "1.6",
            marginBottom: "var(--space-md)",
          }}
        >
          Come on in, have a look around. Most things are safe to touch.
          <br />
          I&apos;ll point out the ones that might explode.
        </p>
      </section>

      {/* Current projects */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-primary)",
          }}
        >
          What&apos;s on the workbench:
        </h2>

        <div>
          <ProjectCard
            name="uroboro"
            status="Active Development"
            problem="Good systematic work stays invisible in velocity-obsessed cultures"
            approach="Context capture that makes the development process undeniable"
            caution="Database schema still evolving - backup your captures"
            link="labs"
            linkStatus="external"
            externalUrl="https://www.uroboro.dev/"
          />

          <ProjectCard
            name="doggowoof"
            status="Testing Phase"
            problem="Alert systems that cry wolf vs ones that actually help you focus"
            approach="Local monitoring that learns your patterns without surveillance"
            caution="Only tested on my Linux setup so far"
            link="doggowoof"
            linkStatus="external"
            externalUrl="https://github.com/QRY91/doggowoof"
          />

          <ProjectCard
            name="wherewasi"
            status="Prototype"
            problem="Developers becoming walking documentation, context switching costs"
            approach="Archaeological context preservation across work sessions"
            caution="Still figuring out the context retention algorithms"
            link="wherewasi"
            linkStatus="external"
            externalUrl="https://github.com/QRY91/wherewasi"
          />

          <ProjectCard
            name="AI collaboration"
            status="Methodology Documentation"
            problem="Using AI without losing your mind, authenticity, or professional credibility"
            approach="Systematic integration that builds capability rather than dependency"
            caution="Ethics and transparency still being worked out"
            link="qry"
            linkStatus="external"
            externalUrl="https://github.com/QRY91/qry"
          />

          <ProjectCard
            name="quantum dice"
            status="Documented & Playable"
            problem="Quantum mechanics concepts are hard to learn intuitively"
            approach="Dice game mechanics that make superposition feel natural"
            link="quantum-dice"
            linkStatus="external"
            externalUrl="https://github.com/QRY91/quantum-dice"
          />
        </div>
      </section>

      {/* The methodology */}
      <section
        style={{
          marginBottom: "var(--space-xxl)",
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
          The systematic approach
        </h2>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            lineHeight: "1.8",
            marginBottom: "var(--space-lg)",
          }}
        >
          <div>
            <strong style={{ color: "var(--color-accent)" }}>Query:</strong>{" "}
            Document what&apos;s actually broken first
          </div>
          <div>
            <strong style={{ color: "var(--color-accent)" }}>Refine:</strong>{" "}
            Build focused solutions, test with real problems
          </div>
          <div>
            <strong style={{ color: "var(--color-accent)" }}>Yield:</strong>{" "}
            Share what works so others can adapt it
          </div>
        </div>
        <p
          style={{
            marginBottom: "var(--space-md)",
            color: "var(--color-text-secondary)",
          }}
        >
          Not revolutionary. Just systematic.
        </p>
        <Link
          href="/methodology"
          style={{
            color: "var(--color-accent)",
            textDecoration: "none",
          }}
        >
          More about how this works →
        </Link>
      </section>

      {/* Reality check */}
      <section style={{ marginBottom: "var(--space-xxl)" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-primary)",
          }}
        >
          Fair warning
        </h2>
        <p
          style={{
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
            lineHeight: "1.6",
          }}
        >
          I build local-first tools that work offline. I document everything
          because I&apos;ve seen what happens when good work stays invisible. I
          think most productivity software is surveillance with better UX.
        </p>

        <p
          style={{
            marginBottom: "var(--space-lg)",
            color: "var(--color-text-secondary)",
            lineHeight: "1.6",
          }}
        >
          If you&apos;re looking for the next viral app, wrong garage. If you
          want tools that respect your intelligence and don&apos;t phone home,
          stick around.
        </p>

        <div
          style={{
            display: "flex",
            gap: "var(--space-lg)",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              color: "var(--color-text-secondary)",
              padding: "var(--space-sm) var(--space-md)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              background: "var(--color-surface)",
              fontStyle: "italic",
            }}
          >
            ai.qry.zone (coming soon)
          </span>
          <a
            href="https://github.com/QRY91"
            style={{
              color: "var(--color-accent)",
              textDecoration: "none",
              padding: "var(--space-sm) var(--space-md)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--border-radius)",
              background: "var(--color-surface)",
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
              background: "var(--color-surface)",
            }}
          >
            The whole story →
          </Link>
        </div>
      </section>
      <div
        style={{
          display: "flex",
          gap: "var(--space-lg)",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img src="/logo_animation.gif" alt="Logo Animation" />
      </div>
    </div>
  );
}
