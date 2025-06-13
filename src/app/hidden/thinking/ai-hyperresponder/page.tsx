// src/app/thinking/ai-hyperresponder/page.tsx
import Link from 'next/link';

export default function AIHyperresponderPage() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 var(--space-md)',
      lineHeight: '1.7'
    }}>

      <div style={{
        marginBottom: 'var(--space-xl)',
        paddingBottom: 'var(--space-lg)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <h1 style={{
          fontSize: '2rem',
          marginBottom: 'var(--space-md)',
          color: 'var(--color-accent)',
          fontFamily: 'var(--font-mono)'
        }}>
          AI Hyperresponder Profile
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-md)'
        }}>
          Strategic analysis of individuals who achieve disproportionate benefits from AI collaboration
        </p>
        <div style={{
          display: 'flex',
          gap: 'var(--space-sm)',
          flexWrap: 'wrap'
        }}>
          {['ai-collaboration', 'strategic-analysis', 'neurodivergent-advantages', 'productivity'].map(tag => (
            <span key={tag} style={{
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)',
              background: 'var(--color-surface)',
              padding: '4px 8px',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          The Core Concept
        </h2>

        <div style={{
          background: 'var(--color-surface)',
          padding: 'var(--space-lg)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          marginBottom: 'var(--space-lg)'
        }}>
          <h3 style={{
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-mono)'
          }}>
            AI Hyperresponder Definition
          </h3>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            An individual who achieves disproportionate benefits from AI collaboration compared to the general population.
            Like anabolic steroid "hyperresponders" in fitness - same tools, dramatically different results.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            This isn't about AI dependency or replacement of human capability. It's about specific cognitive patterns
            that create synergistic amplification when combined with AI capabilities.
          </p>
        </div>

        <p style={{ marginBottom: 'var(--space-md)' }}>
          Understanding the AI hyperresponder profile has strategic implications for individual career positioning,
          team composition, and organizational AI adoption strategies.
        </p>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          The Collaboration Dynamic
        </h2>

        <div style={{
          background: 'var(--color-surface)',
          padding: 'var(--space-lg)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          marginBottom: 'var(--space-lg)'
        }}>
          <h3 style={{
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-mono)'
          }}>
            Reckless Artist + Ruthless Editor
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-md)'
          }}>
            <div style={{
              background: 'var(--color-background)',
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--border-radius)'
            }}>
              <h4 style={{
                color: 'var(--color-accent)',
                marginBottom: 'var(--space-sm)',
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem'
              }}>
                Human (Reckless Artist)
              </h4>
              <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                <li>Associative logic</li>
                <li>Breaks conventions</li>
                <li>Creative leaps</li>
                <li>Rule-breaking insights</li>
                <li>Pattern recognition</li>
              </ul>
            </div>

            <div style={{
              background: 'var(--color-background)',
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--border-radius)'
            }}>
              <h4 style={{
                color: 'var(--color-accent)',
                marginBottom: 'var(--space-sm)',
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem'
              }}>
                AI (Ruthless Editor)
              </h4>
              <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                <li>Sequential logic</li>
                <li>Follows plans</li>
                <li>Disciplined execution</li>
                <li>Error-checking</li>
                <li>Systematic implementation</li>
              </ul>
            </div>
          </div>

          <div style={{
            background: '#2f2f1f',
            border: '1px dashed #7f7f5f',
            padding: 'var(--space-md)',
            borderRadius: 'var(--border-radius)'
          }}>
            <h4 style={{
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-sm)',
              fontFamily: 'var(--font-mono)'
            }}>
              Synergistic Result
            </h4>
            <p style={{ fontSize: '0.9rem' }}>
              Creative exploration with systematic implementation. The human provides breakthrough insights
              and novel approaches, while AI handles structured execution and quality control.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Neurodivergent Advantages
        </h2>

        <p style={{ marginBottom: 'var(--space-lg)' }}>
          Certain neurodivergent traits create natural advantages in AI collaboration,
          suggesting why some individuals become hyperresponders while others struggle with adoption.
        </p>

        <div style={{
          display: 'grid',
          gap: 'var(--space-md)',
          marginBottom: 'var(--space-lg)'
        }}>
          <div style={{
            background: 'var(--color-surface)',
            padding: 'var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)'
          }}>
            <h4 style={{
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-sm)',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem'
            }}>
              Enhanced Pattern Recognition
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              ADHD and similar cognitive patterns excel at seeing unexpected connections that AI can build upon.
              The human spots the pattern; AI systematically explores and validates it.
            </p>
          </div>

          <div style={{
            background: 'var(--color-surface)',
            padding: 'var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)'
          }}>
            <h4 style={{
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-sm)',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem'
            }}>
              Hyperfocus Capabilities
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              Deep AI-assisted problem-solving sessions become highly engaging when the collaboration
              dynamic is working effectively. Extended focus periods that would be difficult solo become natural.
            </p>
          </div>

          <div style={{
            background: 'var(--color-surface)',
            padding: 'var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)'
          }}>
            <h4 style={{
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-sm)',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem'
            }}>
              Non-Linear Thinking Advantage
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              AI excels at linear execution while humans provide creative jumps and conceptual leaps.
              This creates a natural division of cognitive labor that amplifies both capabilities.
            </p>
          </div>

          <div style={{
            background: 'var(--color-surface)',
            padding: 'var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)'
          }}>
            <h4 style={{
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-sm)',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem'
            }}>
              Systems Thinking Alignment
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              Natural framework creation that AI can populate and extend. The human builds the conceptual
              architecture; AI fills in systematic details and validates consistency.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Evidence Patterns
        </h2>

        <div style={{
          background: 'var(--color-surface)',
          padding: 'var(--space-lg)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          marginBottom: 'var(--space-lg)'
        }}>
          <h3 style={{
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-mono)'
          }}>
            Observable Hyperresponder Indicators
          </h3>

          <div style={{ marginBottom: 'var(--space-md)' }}>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              Motivation Transformation
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--space-sm)' }}>
              Work becomes intrinsically motivating. AI-amplified work provides higher stimulation than
              traditional dopamine sources (gaming, social media, entertainment).
            </p>
            <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontStyle: 'italic' }}>
              Example: 600+ game library abandoned in favor of AI-assisted development work
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-md)' }}>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              Productivity Surge
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--space-sm)' }}>
              Dramatic increase in output quality and quantity once collaboration patterns are established.
              Breakthrough moments lead to sustained high-productivity periods.
            </p>
            <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontStyle: 'italic' }}>
              Pattern: Single insight leads to weeks of accelerated development
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-md)' }}>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              Ecosystem Development
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--space-sm)' }}>
              Creation of bidirectional tool ecosystems that enhance AI collaboration capabilities.
              Tools that make AI assistance more effective while documenting the collaboration process.
            </p>
            <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontStyle: 'italic' }}>
              Example: Uroboro, Examinator, Doggowoof, Panopticron integration
            </p>
          </div>

          <div>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              The Arcade Machine Effect
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--space-sm)' }}>
              Each AI interaction provides immediate feedback similar to game mechanics.
              Meta-improvement (getting better at AI collaboration) creates engaging learning curves.
            </p>
            <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontStyle: 'italic' }}>
              "Work is now play. Learning either way. Need another coin for the productivity arcade!"
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Strategic Career Positioning
        </h2>

        <div style={{
          background: 'var(--color-surface)',
          padding: 'var(--space-lg)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          marginBottom: 'var(--space-lg)'
        }}>
          <h3 style={{
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-mono)'
          }}>
            Value for AI-Building Companies
          </h3>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            Companies building AI tools need people who have <em>lived</em> the transformation from
            traditional work patterns to AI-amplified productivity.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-md)'
          }}>
            <div>
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)', fontSize: '1rem' }}>
                AI-Native Workflow Design
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Understanding from experience how to design workflows that amplify rather than replace human capability
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)', fontSize: '1rem' }}>
                Collaboration Psychology
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Insights into human-AI collaboration dynamics and what creates sustainable, engaging partnerships
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)', fontSize: '1rem' }}>
                Amplification Systems
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Building systems that enhance human capabilities rather than attempting replacement
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)', fontSize: '1rem' }}>
                Documented Journey
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Transparent record of transformation from dopamine-seeking to creation-driven productivity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        background: 'var(--color-surface)',
        padding: 'var(--space-xl)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--border-radius)',
        marginBottom: 'var(--space-xxl)'
      }}>
        <h2 style={{
          fontSize: '1.3rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-accent)',
          fontFamily: 'var(--font-mono)'
        }}>
          Strategic Implications
        </h2>
        <div style={{
          background: '#2f2f1f',
          border: '1px dashed #7f7f5f',
          padding: 'var(--space-lg)',
          borderRadius: 'var(--border-radius)',
          marginBottom: 'var(--space-md)'
        }}>
          <h4 style={{
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-mono)'
          }}>
            For Organizations
          </h4>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Identify and cultivate hyperresponders rather than implementing one-size-fits-all AI adoption strategies.
            Different cognitive patterns require different collaboration approaches.
          </p>
        </div>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          <strong>For Individuals:</strong> Understanding your cognitive patterns and AI collaboration style
          enables strategic positioning and more effective tool adoption.
        </p>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          <strong>For Teams:</strong> Balanced composition of hyperresponders and traditional workers
          creates both innovation and stability.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This analysis suggests AI adoption success depends more on matching collaboration styles
          to cognitive patterns than on training everyone to use AI the same way.
        </p>
      </section>

      <section style={{
        textAlign: 'center',
        background: 'var(--color-surface)',
        padding: 'var(--space-xl)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--border-radius)'
      }}>
        <h2 style={{
          fontSize: '1.3rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-accent)',
          fontFamily: 'var(--font-mono)'
        }}>
          Related Strategic Analysis
        </h2>
        <div style={{
          display: 'flex',
          gap: 'var(--space-lg)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/thinking/automation-strategy" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            Automation Strategy →
          </Link>
          <Link href="/journey/ai-development-narrative" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            AI Development Journey →
          </Link>
          <Link href="/thinking" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            ← All Strategic Thinking
          </Link>
        </div>
      </section>

    </div>
  );
}
