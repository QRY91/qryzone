// src/app/workshop/microstudio-workflow/page.tsx
import Link from 'next/link';

export default function MicrostudioWorkflowPage() {
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
          Microstudio Workflow Architecture
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-md)'
        }}>
          Systematic workflow for transforming development work into educational content and documentation
        </p>
        <div style={{
          display: 'flex',
          gap: 'var(--space-sm)',
          flexWrap: 'wrap'
        }}>
          {['content-creation', 'workflow', 'systematic', 'documentation'].map(tag => (
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
          The Core Workflow Loop
        </h2>

        <div style={{
          background: 'var(--color-surface)',
          padding: 'var(--space-lg)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          marginBottom: 'var(--space-lg)',
          textAlign: 'center'
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.1rem',
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-sm)'
          }}>
            Development Work → Documentation → Content Creation → Publishing → Feedback Loop
          </div>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '0.9rem'
          }}>
            Each phase feeds into the next, creating a sustainable cycle of building and sharing
          </p>
        </div>

        <p style={{ marginBottom: 'var(--space-md)' }}>
          This workflow transforms personal development work into educational content that helps others
          solve similar problems. It's designed for sustainability - you're already doing the development
          work, this system captures and amplifies its value.
        </p>

        <p style={{ marginBottom: 'var(--space-md)' }}>
          The key insight: systematic documentation of your problem-solving process becomes valuable
          content for others facing similar challenges.
        </p>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Phase 1: Development with Systematic Capture
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
            Primary Development Activities
          </h3>
          <ul style={{ marginBottom: 'var(--space-md)', paddingLeft: 'var(--space-lg)' }}>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              Building and iterating on tools (CLI utilities, monitoring systems, workflow optimizations)
            </li>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              Solving personal development pain points systematically
            </li>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              Experimenting with AI-enhanced workflows and local-first tooling
            </li>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              Hardware integration and sustainable computing projects
            </li>
          </ul>
        </div>

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
            Capture Mechanisms
          </h3>

          <div style={{ marginBottom: 'var(--space-md)' }}>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              Real-time Capture
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Use quick capture tools (like <code>uroboro capture</code>) for development insights,
              breakthroughs, and key decisions as they happen.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-md)' }}>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              Session-based Marking
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Use physical or digital markers during development sessions to identify
              content-worthy moments for later review.
            </p>
          </div>

          <div>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              Systematic Documentation
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Meaningful git commits, issue tracking, and design decision documentation
              that can be referenced during content creation.
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
          Phase 2: Structured Documentation
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
              Immediate Documentation
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>Development session logs with timestamps</li>
              <li>Status reviews to identify content opportunities</li>
              <li>Screen recordings of significant sessions</li>
            </ul>
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
              Structured Documentation
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>Tool evolution documentation (why decisions were made)</li>
              <li>Development environment setups and optimizations</li>
              <li>Integration patterns and architectural decisions</li>
            </ul>
          </div>
        </div>

        <div style={{
          background: '#2f2f1f',
          border: '1px dashed #7f7f5f',
          padding: 'var(--space-lg)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h4 style={{
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-mono)'
          }}>
            Documentation Quality Standards
          </h4>
          <p style={{ marginBottom: 'var(--space-sm)', fontSize: '0.9rem' }}>
            Document the <strong>why</strong> behind decisions, not just the <strong>what</strong>.
            Focus on problems solved and approaches tried, including what didn't work.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
            Future you (and others) will thank you for explaining the reasoning behind
            non-obvious choices and abandoned approaches.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Phase 3: Content Creation & Production
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
            Content Types
          </h3>

          <div style={{ marginBottom: 'var(--space-md)' }}>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              Development Deep Dives
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Detailed explorations of tool development decisions and implementation approaches.
              Show the problem-solving process, not just the final solution.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-md)' }}>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              Problem-Solution Documentation
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              How specific development pain points were systematically addressed.
              Include context, attempted solutions, and final approach.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-md)' }}>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              Tool Demonstrations
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Live usage of developed tools in real development scenarios.
              Show actual workflow integration, not artificial demos.
            </p>
          </div>

          <div>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              "Building in Public" Sessions
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Real-time development with commentary and reflection.
              Transparent problem-solving process documentation.
            </p>
          </div>
        </div>

        <div style={{
          background: 'var(--color-surface)',
          padding: 'var(--space-lg)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-sm)',
            fontFamily: 'var(--font-mono)'
          }}>
            Production Workflow
          </h3>
          <ol style={{ paddingLeft: 'var(--space-lg)' }}>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              Review captured insights and development session logs
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              Identify compelling development stories or systematic approaches
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              Create content outline using captured material as starting point
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              Record development sessions or create retrospective explanations
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              Edit using screen captures and strategic explanations
            </li>
          </ol>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Phase 4: Publishing & Distribution
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
            Primary Hub Strategy
          </h3>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            Use your primary domain (like qry.zone) as the central hub for development portfolio
            and process documentation. This creates a coherent body of work that demonstrates
            systematic thinking over time.
          </p>

          <h4 style={{
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-sm)',
            fontSize: '1rem'
          }}>
            Content Distribution Formats
          </h4>
          <ul style={{ paddingLeft: 'var(--space-lg)' }}>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              Long-form development articles and case studies
            </li>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              Development session recordings and walkthroughs
            </li>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              Tool documentation and interactive demos
            </li>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              "Ideas Database" updates and collaborative development invitations
            </li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Phase 5: Feedback & Iteration Loop
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
              Feedback Sources
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>Developer community engagement</li>
              <li>Collaborative development opportunities</li>
              <li>Usage analytics from tools and content</li>
              <li>Personal reflection on process effectiveness</li>
            </ul>
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
              Integration Back to Development
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>New tool requirements from content creation needs</li>
              <li>Community-identified improvement opportunities</li>
              <li>Enhanced workflows from documentation insights</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Tools Integration Matrix
        </h2>

        <div style={{
          background: 'var(--color-surface)',
          padding: 'var(--space-lg)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9rem'
          }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{
                  textAlign: 'left',
                  padding: 'var(--space-sm)',
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  Development Tool
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: 'var(--space-sm)',
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  Documentation Role
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: 'var(--space-sm)',
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  Content Creation Role
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: 'var(--space-sm)', fontFamily: 'var(--font-mono)' }}>
                  uroboro
                </td>
                <td style={{ padding: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
                  Primary insight capture
                </td>
                <td style={{ padding: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
                  Content stub generation
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: 'var(--space-sm)', fontFamily: 'var(--font-mono)' }}>
                  Context Tracking
                </td>
                <td style={{ padding: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
                  Project context switching
                </td>
                <td style={{ padding: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
                  Development retrospectives
                </td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--space-sm)', fontFamily: 'var(--font-mono)' }}>
                  Monitoring Systems
                </td>
                <td style={{ padding: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
                  Development monitoring
                </td>
                <td style={{ padding: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
                  System reliability content
                </td>
              </tr>
            </tbody>
          </table>
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
          Implementation Guidelines
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
            Start Small, Build Systematically
          </h4>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Don't try to implement all phases at once. Start with basic capture during development,
            then gradually add documentation and content creation as the workflow becomes natural.
          </p>
        </div>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          The key is consistency over perfection. A simple capture mechanism used regularly
          is more valuable than a complex system used sporadically.
        </p>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Adapt the workflow to your tools and preferences. The principles matter more than
          the specific implementation details.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Remember: you're already doing the development work. This system just captures
          and amplifies its educational value for others.
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
          Related Workshop Guides
        </h2>
        <div style={{
          display: 'flex',
          gap: 'var(--space-lg)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/workshop/context-preservation" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            Context Preservation →
          </Link>
          <Link href="/workshop/documentation-as-product" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            Documentation as Product →
          </Link>
          <Link href="/workshop" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            ← All Workshop Guides
          </Link>
        </div>
      </section>

    </div>
  );
}
