// src/app/fun/mortgage-driven-engineering/page.tsx
export default function MortgageDrivenEngineeringPage() {
  return (
    <>
      <style>{`
        :root {
          --mde-bg: #0a0a0a;
          --mde-fg: #00ff00;
          --mde-fg-dim: #007700;
          --mde-fg-bright: #33ff33;
          --mde-accent: #ff6600;
          --mde-accent-dim: #994400;
          --mde-border: #333;
          --mde-card-bg: #111;
        }
        .mde-page {
          background-color: var(--mde-bg);
          color: var(--mde-fg);
          font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
          font-size: 14px;
          line-height: 1.6;
          min-height: 100vh;
          margin: -1rem -1rem 0 -1rem;
          padding: 2rem;
        }
        .mde-page * {
          box-sizing: border-box;
        }
        .mde-terminal {
          max-width: 900px;
          margin: 0 auto;
        }
        .mde-header {
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--mde-border);
          padding-bottom: 1rem;
        }
        .mde-ascii-logo {
          color: var(--mde-accent);
          font-size: 6px;
          line-height: 1.1;
          margin-bottom: 1rem;
          overflow-x: auto;
          text-shadow: 0 0 10px var(--mde-accent-dim);
          white-space: pre;
        }
        .mde-tagline {
          color: var(--mde-fg-dim);
          font-size: 1rem;
        }
        .mde-subtitle {
          color: var(--mde-fg);
          font-style: italic;
          margin-top: 0.5rem;
        }
        .mde-nav {
          margin-bottom: 2rem;
          padding: 0.5rem 0;
        }
        .mde-nav a {
          color: var(--mde-fg);
          text-decoration: none;
        }
        .mde-nav a:hover {
          color: var(--mde-fg-bright);
          text-decoration: underline;
        }
        .mde-prompt {
          color: var(--mde-accent);
          font-weight: bold;
        }
        .mde-command {
          margin: 1.5rem 0 0.5rem 0;
          color: var(--mde-fg-bright);
        }
        .mde-output {
          padding-left: 1rem;
          border-left: 2px solid var(--mde-border);
          margin-bottom: 1.5rem;
        }
        .mde-output p {
          margin: 0.5rem 0;
        }
        .mde-output ul {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
        }
        .mde-output li {
          margin: 0.25rem 0;
        }
        .mde-dim {
          color: var(--mde-fg-dim);
        }
        .mde-slogan-grid {
          display: grid;
          gap: 1rem;
          margin: 1rem 0 2rem 0;
        }
        .mde-slogan-card {
          background: var(--mde-card-bg);
          border: 1px solid var(--mde-border);
          padding: 1.5rem;
          transition: border-color 0.2s;
        }
        .mde-slogan-card:hover {
          border-color: var(--mde-fg);
        }
        .mde-slogan-card.expansion {
          border-style: dashed;
        }
        .mde-slogan-text {
          font-size: 1.1rem;
          color: var(--mde-fg-bright);
          margin-bottom: 0.5rem;
          font-weight: bold;
          text-shadow: 0 0 5px var(--mde-fg-dim);
        }
        .mde-slogan-desc {
          color: var(--mde-fg-dim);
          font-size: 0.85rem;
        }
        .mde-manifesto em {
          color: var(--mde-accent);
          font-style: normal;
        }
        .mde-footer {
          margin-top: 3rem;
          padding-top: 1rem;
          border-top: 1px solid var(--mde-border);
        }
        @media (max-width: 600px) {
          .mde-ascii-logo { font-size: 4px; }
          .mde-slogan-text { font-size: 1rem; }
        }
      `}</style>

      <div className="mde-page">
        <div className="mde-terminal">
          <header className="mde-header">
            <pre className="mde-ascii-logo">{`
███╗   ███╗ ██████╗ ██████╗ ████████╗ ██████╗  █████╗  ██████╗ ███████╗
████╗ ████║██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝ ██╔══██╗██╔════╝ ██╔════╝
██╔████╔██║██║   ██║██████╔╝   ██║   ██║  ███╗███████║██║  ███╗█████╗
██║╚██╔╝██║██║   ██║██╔══██╗   ██║   ██║   ██║██╔══██║██║   ██║██╔══╝
██║ ╚═╝ ██║╚██████╔╝██║  ██║   ██║   ╚██████╔╝██║  ██║╚██████╔╝███████╗
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
██████╗ ██████╗ ██╗██╗   ██╗███████╗███╗   ██╗
██╔══██╗██╔══██╗██║██║   ██║██╔════╝████╗  ██║
██║  ██║██████╔╝██║██║   ██║█████╗  ██╔██╗ ██║
██║  ██║██╔══██╗██║╚██╗ ██╔╝██╔══╝  ██║╚██╗██║
██████╔╝██║  ██║██║ ╚████╔╝ ███████╗██║ ╚████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝
███████╗███╗   ██╗ ██████╗ ██╗███╗   ██╗███████╗███████╗██████╗ ██╗███╗   ██╗ ██████╗
██╔════╝████╗  ██║██╔════╝ ██║████╗  ██║██╔════╝██╔════╝██╔══██╗██║████╗  ██║██╔════╝
█████╗  ██╔██╗ ██║██║  ███╗██║██╔██╗ ██║█████╗  █████╗  ██████╔╝██║██╔██╗ ██║██║  ███╗
██╔══╝  ██║╚██╗██║██║   ██║██║██║╚██╗██║██╔══╝  ██╔══╝  ██╔══██╗██║██║╚██╗██║██║   ██║
███████╗██║ ╚████║╚██████╔╝██║██║ ╚████║███████╗███████╗██║  ██║██║██║ ╚████║╚██████╔╝
╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝
            `}</pre>
            <p className="mde-tagline">// &quot;This is all fucking insane but I have a mortgage.&quot;</p>
            <p className="mde-subtitle">&quot;Real people get left behind in the golden parachute techbro dreamworld.&quot;</p>
          </header>

          <nav className="mde-nav">
            <span className="mde-prompt">$</span> <a href="/fun">../fun</a> | <a href="#slogans">slogans</a> | <a href="#thesis">thesis</a> | <a href="#resources">resources</a>
          </nav>

          <main>
            <section>
              <div className="mde-command">
                <span className="mde-prompt">$</span> cat README.md
              </div>
              <div className="mde-output">
                <p>A satirical merch collection for tech workers caught between their principles and their rent payments.</p>
                <p>Think hacker zine meets shitpost meets economic reality meets gift economy.</p>
                <p className="mde-dim">// All designs freely available. Shop is just a convenience layer.</p>
              </div>
            </section>

            <section id="slogans">
              <div className="mde-command">
                <span className="mde-prompt">$</span> ls -la ./slogans/core/
              </div>

              <div className="mde-slogan-grid">
                {[
                  { text: "This is all fucking insane but I have a mortgage.", desc: "The unofficial motto of tech workers everywhere" },
                  { text: "Peak Techbro Hype-Wizardry", desc: "For the connoisseurs of venture capital theater" },
                  { text: "Commons Over Kingdoms", desc: "Subtle rebellion against Big Tech dominance" },
                  { text: "Local-First or GTFO", desc: "If it doesn't work offline, it's not a tool—it's a service dependency" },
                  { text: "Cargo Cult Science with VC Funding", desc: "When companies throw money at correlation hoping causation falls out" },
                ].map((slogan, i) => (
                  <div key={i} className="mde-slogan-card">
                    <div className="mde-slogan-text">&quot;{slogan.text}&quot;</div>
                    <div className="mde-slogan-desc">{slogan.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mde-command">
                <span className="mde-prompt">$</span> ls -la ./slogans/expansion/
              </div>

              <div className="mde-slogan-grid">
                {[
                  { text: "I Survived Another Pivot", desc: "Badge of honor for the battle-scarred" },
                  { text: "Inevitabilism is a Rhetorical Strategy", desc: 'Calling out "AI is inevitable" as a debate tactic, not reality' },
                  { text: "Built Different (Same as Everyone Else)", desc: 'When every company claims to be "disruptive" while following identical playbooks' },
                  { text: "It's Just CRUD with Extra Steps", desc: "When complex architectures boil down to Create, Read, Update, Delete" },
                  { text: "Autocomplete with Delusions of Grandeur", desc: 'When predictive text gets called "artificial intelligence"' },
                  { text: "Even My Critique Gets Commodified", desc: "The system commodifies everything, including its own criticism" },
                ].map((slogan, i) => (
                  <div key={i} className="mde-slogan-card expansion">
                    <div className="mde-slogan-text">&quot;{slogan.text}&quot;</div>
                    <div className="mde-slogan-desc">{slogan.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            <section id="thesis">
              <div className="mde-command">
                <span className="mde-prompt">$</span> cat THESIS.md
              </div>
              <div className="mde-output mde-manifesto">
                <p>The tech industry runs on a simple dynamic: most people know the current trends are varying degrees of insane, but economic leverage determines intellectual freedom.</p>
                <p>Until you have &quot;fuck you&quot; money, you nod along with &quot;AI will revolutionize everything&quot; while quietly building actual useful tools.</p>
                <p>This is for everyone who&apos;s ever sat in a meeting thinking <em>&quot;this is completely insane&quot;</em> while nodding because they need health insurance.</p>
              </div>
            </section>

            <section id="resources">
              <div className="mde-command">
                <span className="mde-prompt">$</span> cat GIFT_ECONOMY.md
              </div>
              <div className="mde-output">
                <p><strong>// The Deal</strong></p>
                <ul>
                  <li>Want to buy a shirt? Cool. We&apos;ll ship it.</li>
                  <li>Want to print your own? Here are the design files. No charge.</li>
                  <li>Want to remix it? Go for it. No trademarks here.</li>
                  <li>It belongs to everyone who pays rent.</li>
                </ul>
                <p className="mde-dim">This project demonstrates its own thesis: we&apos;re selling critique of capitalism while being trapped within it.</p>
              </div>
            </section>
          </main>

          <footer className="mde-footer">
            <div className="mde-command">
              <span className="mde-prompt">$</span> echo $STATUS
            </div>
            <div className="mde-output">
              <p>MIT License | No VC Funding | No Growth Hacking | Pure Vibes</p>
              <p className="mde-dim">No vibe it, no buy it. No problem. It&apos;s vibes.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
