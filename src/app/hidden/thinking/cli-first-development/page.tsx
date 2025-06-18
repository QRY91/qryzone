import Link from "next/link";

export default function CLIFirstDevelopment() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 var(--space-md)",
        lineHeight: "1.7",
      }}
    >
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <Link
          href="/thinking"
          style={{
            color: "var(--color-accent)",
            textDecoration: "none",
            marginBottom: "var(--space-md)",
            display: "inline-block",
          }}
        >
          ← Back to Strategic Thinking
        </Link>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          CLI-First Development Environment
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-lg)",
          }}
        >
          Systematic approach to terminal-centric development workflows that
          prioritize efficiency, composability, and resource optimization.
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
            The CLI-First Philosophy
          </h2>
          <p style={{ color: "#0c4a6e" }}>
            CLI-first development prioritizes composable, scriptable tools over
            GUI applications. The goal isn't terminal purism—it's building
            workflows that are faster, more repeatable, and less
            resource-intensive than traditional IDE-heavy approaches.
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
          Performance Advantages
        </h2>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Resource Efficiency
        </h3>
        <p style={{ marginBottom: "var(--space-lg)" }}>
          Terminal-based tools consistently use less memory and CPU than their
          GUI counterparts. A fully-featured CLI development environment can run
          effectively on hardware that struggles with modern IDEs.
        </p>

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
            Measured Performance Gains:
          </h4>
          <ul style={{ marginBottom: "var(--space-md)" }}>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Startup time:</strong> 16GB laptop consistently
              outperforms 32GB machines running Docker Desktop
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Context switching:</strong> No interface changes between
              different development tasks
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Battery life:</strong> Significantly longer development
              sessions on mobile hardware
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Iteration speed:</strong> Faster feedback loops for
              testing and deployment
            </li>
          </ul>
        </div>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Composability Benefits
        </h3>
        <p style={{ marginBottom: "var(--space-lg)" }}>
          CLI tools follow Unix philosophy: do one thing well and compose easily
          with other tools. This creates workflows that are more flexible and
          maintainable than monolithic IDE configurations.
        </p>
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
          Core Tool Stack
        </h2>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Terminal Multiplexing
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
          <p style={{ marginBottom: "var(--space-md)" }}>
            <strong>tmux</strong> or <strong>screen</strong> for session
            persistence and window management. Essential for maintaining context
            across disconnections and organizing different aspects of
            development work.
          </p>
          <ul>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              Persistent sessions survive SSH disconnections
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              Split panes for monitoring logs while coding
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              Named sessions for different projects
            </li>
          </ul>
        </div>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Text Editing
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
          <p style={{ marginBottom: "var(--space-md)" }}>
            <strong>vim/neovim</strong> configured for development work. The
            learning curve pays dividends in editing speed and consistency
            across different environments.
          </p>
          <ul>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              Language servers for intelligent code completion
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              Git integration for inline blame and diff viewing
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              Project-wide search and file navigation
            </li>
          </ul>
        </div>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Development Tools
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
          <ul>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Language-specific REPLs:</strong> Interactive development
              and testing
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Command-line debuggers:</strong> gdb, pdb, node inspect
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>File watchers:</strong> entr, watchman for automated
              testing and builds
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              <strong>Package managers:</strong> npm, pip, cargo, etc. used
              directly rather than through IDE abstractions
            </li>
          </ul>
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
          Workflow Optimization
        </h2>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Context Preservation
        </h3>
        <p style={{ marginBottom: "var(--space-lg)" }}>
          CLI workflows excel at maintaining development context. Sessions
          persist across disconnections, command history preserves debugging
          steps, and environment variables maintain configuration state.
        </p>

        <div
          style={{
            background: "#fef3c7",
            borderLeft: "4px solid #f59e0b",
            padding: "var(--space-lg)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <h4
            style={{
              fontWeight: "600",
              marginBottom: "var(--space-md)",
              color: "#92400e",
            }}
          >
            Key Context Management Strategies:
          </h4>
          <ul style={{ marginBottom: "var(--space-md)" }}>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              Project-specific shell configurations and aliases
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              tmux sessions named and organized by project
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              Shell history configured for maximum retention
            </li>
            <li style={{ marginBottom: "var(--space-sm)" }}>
              Environment management through direnv or similar tools
            </li>
          </ul>
        </div>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          Automation Integration
        </h3>
        <p style={{ marginBottom: "var(--space-lg)" }}>
          CLI-first approaches integrate naturally with automation scripts,
          CI/CD pipelines, and infrastructure-as-code tools. Development
          workflows become deployment workflows with minimal translation.
        </p>
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
          Addressing Common Objections
        </h2>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          "But IDEs Provide Better IntelliSense"
        </h3>
        <p style={{ marginBottom: "var(--space-lg)" }}>
          Modern CLI editors with Language Server Protocol (LSP) support provide
          equivalent code intelligence to IDEs, often with lower latency and
          resource usage.
        </p>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          "Debugging is Harder Without GUI"
        </h3>
        <p style={{ marginBottom: "var(--space-lg)" }}>
          Command-line debuggers offer more precise control and better
          scriptability than GUI debuggers. The investment in learning CLI
          debugging pays dividends in complex scenarios.
        </p>

        <h3
          style={{
            fontSize: "1.2rem",
            marginBottom: "var(--space-md)",
            color: "var(--color-text-primary)",
          }}
        >
          "Learning Curve is Too Steep"
        </h3>
        <p style={{ marginBottom: "var(--space-lg)" }}>
          The initial investment in learning CLI tools creates compound returns.
          Skills transfer across projects, environments, and even decades of
          technology change.
        </p>
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
          Implementation Strategy
        </h2>

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "var(--space-lg)",
            borderRadius: "var(--border-radius)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              marginBottom: "var(--space-md)",
              color: "var(--color-text-primary)",
            }}
          >
            Gradual Transition
          </h3>
          <ol>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Start with terminal familiarity:</strong> Use terminal
              alongside existing IDE for simple tasks
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Learn one tool at a time:</strong> Master tmux, then vim,
              then specialized CLI tools
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Identify efficiency gains:</strong> Measure where CLI
              workflows are faster than GUI equivalents
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Build systematic configurations:</strong> Create
              reproducible dotfiles and setup scripts
            </li>
            <li style={{ marginBottom: "var(--space-md)" }}>
              <strong>Maintain hybrid approach:</strong> Use GUI tools where
              they genuinely provide better UX
            </li>
          </ol>
        </div>
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
          The CLI-First Mindset
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
          "Everything from project initialization to deployment happens through
          composable commands. The surprising part was how much faster iteration
          became when everything stays in the same interface."
        </div>
        <p style={{ marginBottom: "var(--space-md)" }}>
          CLI-first development isn't about rejecting useful graphical
          tools—it's about building a foundation of efficient, scriptable,
          composable workflows that scale with complexity and remain consistent
          across different environments and projects.
        </p>
      </section>
    </div>
  );
}
