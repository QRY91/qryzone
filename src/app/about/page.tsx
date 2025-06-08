// src/app/about/page.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 var(--space-md)',
      lineHeight: '1.7'
    }}>
      
      <h1 style={{
        fontSize: '2rem',
        marginBottom: 'var(--space-xl)',
        color: 'var(--color-accent)',
        fontFamily: 'var(--font-mono)'
      }}>
        The whole story
      </h1>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          The non-traditional route
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          I took the scenic route to software development. Call center → psychology studies → 
          game design → bootcamp → startup burnout → back to school at 33. Not exactly the 
          typical CS path, but it gave me something useful: a systematic approach to understanding 
          why things break and how to build better alternatives.
        </p>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Months out of bootcamp, I was handling enterprise logistics for Maersk as a solo developer. 
          Complex API integrations, German customs systems, client relationships, project management - 
          work that should require a team. That's when I learned the difference between building 
          software and building <em>systems that actually work</em>.
        </p>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Learning through institutional dysfunction
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Then came the education in organizational toxicity. Quality work punished. Systematic 
          thinking labeled as "slowness" while depending on the solutions it produced. The classic 
          double-bind: do it fast or do it right, but somehow also make it perfect.
        </p>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Instead of just complaining, I documented everything. Patterns, failures, what worked, 
          what didn't. That documentation became the foundation for building tools that solve these 
          problems systematically.
        </p>
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          padding: 'var(--space-lg)',
          borderRadius: 'var(--border-radius)',
          fontStyle: 'italic',
          color: 'var(--color-text-secondary)',
          margin: 'var(--space-lg) 0'
        }}>
          "I learn to spite those who punish it. If I can suffer and learn and build systems 
          that prevent others from experiencing that dysfunction, then the suffering becomes valuable. 
          If I die with the knowledge, the systems never get built, and the dysfunction repeats."
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Current capabilities
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          What you get when you hire someone who took the long way around:
        </p>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          marginBottom: 'var(--space-lg)'
        }}>
          <li style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-accent)' }}>Multi-domain experience:</strong> Psychology, 
            game design, cybersecurity, enterprise systems - different contexts, same systematic thinking
          </li>
          <li style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-accent)' }}>Problem transformation:</strong> Converting 
            institutional trauma into systematic solutions others can use
          </li>
          <li style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-accent)' }}>Documentation obsession:</strong> Everything 
            captured systematically - enables knowledge transfer without human bottlenecks
          </li>
          <li style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-accent)' }}>AI integration expertise:</strong> Transparent 
            collaboration that builds capability rather than dependency
          </li>
          <li style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-accent)' }}>Local-first philosophy:</strong> Privacy-respecting 
            tools that work offline and don't phone home
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Recent work highlights
        </h2>
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <h3 style={{ 
            color: 'var(--color-accent)', 
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-mono)'
          }}>
            Panopticron - Enterprise Monitoring
          </h3>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Built enterprise-level monitoring system for 6-person agency. Live production system with 
            worker-based data sync, custom visualization, service-oriented architecture. Academic 
            validation through IEEE-formatted report delivered in 16 hours.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
            <strong>Evidence:</strong> <a href="https://panopticron.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Live at panopticron.vercel.app</a>
          </p>
        </div>

        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <h3 style={{ 
            color: 'var(--color-accent)', 
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-mono)'
          }}>
            QRY Tool Ecosystem
          </h3>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Local-first developer tools addressing documented problems: context preservation, 
            work visibility, systematic learning, AI collaboration methodology. Each tool solves 
            a specific dysfunction I've experienced and documented.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
            <strong>Evidence:</strong> <a href="https://github.com/QRY91/qry" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Active development on GitHub</a>
          </p>
        </div>

        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <h3 style={{ 
            color: 'var(--color-accent)', 
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-mono)'
          }}>
            Educational Game Design
          </h3>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Quantum mechanics through dice game mechanics. Complex concepts made accessible 
            without dumbing down. Proven methodology for translating difficult technical topics 
            into intuitive interactive systems.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
            <strong>Evidence:</strong> <a href="https://github.com/QRY91/quantum_dice" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Game development on GitHub</a>
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          What I'm looking for
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Environments where systematic problem-solving is valued over velocity theater. Teams that 
          build solutions rather than just implement predetermined requirements. Organizations that 
          understand the difference between "moving fast" and "building sustainably."
        </p>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          I'm particularly interested in:
        </p>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          marginBottom: 'var(--space-lg)'
        }}>
          <li style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-accent)' }}>Developer tools companies</strong> - 
            Building tools that make other developers more effective
          </li>
          <li style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-accent)' }}>Platform engineering</strong> - 
            Infrastructure that enables rather than constrains
          </li>
          <li style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-accent)' }}>R&D environments</strong> - 
            Systematic exploration of complex problems
          </li>
          <li style={{ marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--color-accent)' }}>Educational technology</strong> - 
            Making complex concepts accessible without oversimplification
          </li>
        </ul>
      </section>

      <section style={{
        background: 'var(--color-surface)',
        padding: 'var(--space-xl)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--border-radius)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '1.3rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-accent)',
          fontFamily: 'var(--font-mono)'
        }}>
          Contact
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Want to talk about systematic solutions to documented problems?
        </p>
        <div style={{
          display: 'flex',
          gap: 'var(--space-lg)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="mailto:glenn@qry.zone" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            glenn@qry.zone
          </a>
          <a href="https://github.com/QRY91" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            GitHub →
          </a>
        </div>
        <p style={{ 
          marginTop: 'var(--space-lg)',
          fontSize: '0.9rem',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic'
        }}>
          Currently finishing graduate degree, available summer 2025
        </p>
      </section>

    </div>
  );
}