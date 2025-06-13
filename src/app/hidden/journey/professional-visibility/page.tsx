// src/app/journey/professional-visibility/page.tsx
import Link from 'next/link';

export default function ProfessionalVisibilityPage() {
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
          Professional Visibility Campaign
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-md)'
        }}>
          Systematic approach to professional networking and visibility through authentic demonstration of value
        </p>
        <div style={{
          display: 'flex',
          gap: 'var(--space-sm)',
          flexWrap: 'wrap'
        }}>
          {['professional-networking', 'systematic-approach', 'authentic-voice', 'career-strategy'].map(tag => (
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
          The Strategic Problem
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Most professional networking treats visibility as a performance rather than demonstration
          of actual value. The systematic approach: use the same methodical documentation and
          strategic thinking that makes you valuable as an engineer to approach professional
          visibility systematically.
        </p>

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
            Core Strategy
          </h3>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Demonstrate systematic thinking value through the professional networking approach itself.
            Create professional surface area for meaningful opportunities through authentic
            demonstration rather than artificial marketing.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Key Insight:</strong> Marketing honesty + systematic networking + authentic professional voice
            creates sustainable competitive advantages.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          The 4-Week Campaign Framework
        </h2>

        <div style={{
          display: 'grid',
          gap: 'var(--space-lg)',
          marginBottom: 'var(--space-lg)'
        }}>
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
              Week 1: Foundation Setting
            </h3>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Focus:</strong> Systematic thinking breakthrough announcement
            </p>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              Establish your authentic professional voice by sharing genuine insights about
              systematic problem-solving. Demonstrate the meta-insight: the same analytical
              thinking that helps you survive institutional dysfunction also helps you build
              tools that prevent others from experiencing it.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Key Message:</strong> "Nothing revolutionary - just systematic approaches
              that respect human psychology over engagement metrics."
            </p>
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
              Week 2: Academic-Professional Bridge
            </h3>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Focus:</strong> Demonstrating systematic approach in academic/professional contexts
            </p>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              Bridge academic learning with professional application. Show how systematic
              architecture decisions create real business value. Demonstrate that
              documentation-driven development pays off in measurable ways.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Key Message:</strong> "Systematic thinking applied to real business problems
              produces enterprise-level solutions."
            </p>
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
              Week 3: Professional Readiness
            </h3>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Focus:</strong> Insights and validation from systematic approach
            </p>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              Share validated insights about systematic methodology. Demonstrate readiness
              to apply systematic thinking in professional environments where thoroughness
              prevents future problems rather than slowing current progress.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Key Message:</strong> "Ready to apply systematic thinking where
              documentation is viewed as infrastructure investment, not overhead."
            </p>
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
              Week 4: Opportunity Availability
            </h3>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Focus:</strong> Professional availability announcement
            </p>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              Clear statement of availability and values alignment. Target teams that value
              systematic problem-solving over velocity theater. Establish clear preferences
              for environments where quality work is recognized and rewarded.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Key Message:</strong> "Looking for teams where systematic thinking
              creates measurable business impact."
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
          Platform-Specific Strategies
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 'var(--space-lg)',
          marginBottom: 'var(--space-lg)'
        }}>
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
              LinkedIn Professional Voice
            </h3>
            <ul style={{ paddingLeft: 'var(--space-lg)', marginBottom: 'var(--space-md)' }}>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                <strong>Tone:</strong> Professional but authentic, systematic but accessible
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                <strong>Focus:</strong> Business impact of systematic thinking
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                <strong>Content:</strong> Methodology insights, professional development, industry analysis
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                <strong>Hashtags:</strong> #SystematicThinking #DeveloperTools #ProfessionalDevelopment
              </li>
            </ul>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Target: Hiring managers, senior engineers, business stakeholders who value sustainable approaches
            </p>
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
              BlueSky Technical Voice
            </h3>
            <ul style={{ paddingLeft: 'var(--space-lg)', marginBottom: 'var(--space-md)' }}>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                <strong>Tone:</strong> Technical, concise, community-focused
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                <strong>Focus:</strong> Technical implementation details and insights
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                <strong>Content:</strong> Tool builds, technical solutions, developer experience
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                <strong>Style:</strong> Short, direct, emoji-enhanced for engagement
              </li>
            </ul>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Target: Technical community, developers, tool builders who appreciate practical solutions
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
          Intelligence Gathering & Outreach
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
            Strategic Company Research
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-md)'
          }}>
            <div>
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)', fontSize: '1rem' }}>
                Developer Tools
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Companies building tools for developers: Cursor, Linear, Figma ecosystem
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)', fontSize: '1rem' }}>
                Platform Engineering
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Privacy-conscious companies with infrastructure focus
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)', fontSize: '1rem' }}>
                R&D Divisions
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Technology companies with systematic methodology focus
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)', fontSize: '1rem' }}>
                Educational Technology
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Companies applying systematic approaches to learning
              </p>
            </div>
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
            Coffee Conversation Strategy
          </h3>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Target: 2-3 substantive conversations per week with people who appreciate systematic approaches.
          </p>
          <ul style={{ paddingLeft: 'var(--space-lg)', marginBottom: 'var(--space-md)' }}>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              <strong>Approach:</strong> "I'm fascinated by systematic approaches to [their domain area]"
            </li>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              <strong>Value:</strong> Share insights about systematic methodology applications
            </li>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              <strong>Listen:</strong> Learn about their challenges with unsystematic approaches
            </li>
            <li style={{ marginBottom: 'var(--space-xs)' }}>
              <strong>Follow-up:</strong> Document insights and share relevant resources
            </li>
          </ul>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Goal: Build genuine professional relationships, not transactional job-seeking interactions
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Success Metrics & Tracking
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
              Foundation Metrics (Weeks 1-2)
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>Content engagement quality over quantity</li>
              <li>Meaningful comments and conversations</li>
              <li>Connection requests from relevant professionals</li>
              <li>Authentic voice development and refinement</li>
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
              Opportunity Metrics (Weeks 3-4)
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>Coffee conversation requests</li>
              <li>Interview opportunities aligned with values</li>
              <li>Informal opportunity discussions</li>
              <li>Professional relationship development</li>
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
              Long-term Success Indicators
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>Professional network of systematic thinkers</li>
              <li>Reputation for authentic professional voice</li>
              <li>Opportunities aligned with systematic values</li>
              <li>Community recognition for methodology insights</li>
            </ul>
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
            Marketing Honesty Principles
          </h4>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Don't oversell, don't undersell. Be accurate about capabilities and genuine about interests.
            "Nothing revolutionary" is more compelling than artificial excitement about routine work.
          </p>
        </div>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          The goal is sustainable professional relationships, not short-term visibility spikes.
          Demonstrate systematic thinking through the networking approach itself.
        </p>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Adapt the messaging to your actual experience and authentic voice. The framework
          matters more than the specific content examples.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Remember: People hire individuals they trust to solve problems systematically,
          not performers who market themselves effectively.
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
          Related Career Strategy Content
        </h2>
        <div style={{
          display: 'flex',
          gap: 'var(--space-lg)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/journey/systematic-career-growth" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            Systematic Career Growth →
          </Link>
          <Link href="/thinking/ai-hyperresponder" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            AI Hyperresponder Profile →
          </Link>
          <Link href="/journey" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            ← All Journey Content
          </Link>
        </div>
      </section>

    </div>
  );
}
