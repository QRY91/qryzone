// src/app/journey/career-realignment/page.tsx
import Link from 'next/link';

export default function CareerRealignmentPage() {
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
          Career Realignment at 33
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-md)'
        }}>
          From junior positioning to senior reality: strategic approach to career transition and authentic capability recognition
        </p>
        <div style={{
          display: 'flex',
          gap: 'var(--space-sm)',
          flexWrap: 'wrap'
        }}>
          {['career-strategy', 'professional-positioning', 'authentic-assessment', 'strategic-transition'].map(tag => (
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
          Career transitions often create misalignment between how you position yourself and your actual
          capabilities. Non-traditional paths can lead to systematic undervaluation of experience and
          imposter syndrome that prevents authentic professional positioning.
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
            The Discovery
          </h3>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Massive misalignment between current professional positioning and actual demonstrated capability.
            Years of systematic undervaluation creating artificial career barriers.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Key Insight:</strong> What appears to be "junior experience" may actually be principal-level
            work performed under resource constraints.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Positioning vs. Reality Analysis
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
              color: '#d73027',
              marginBottom: 'var(--space-sm)',
              fontFamily: 'var(--font-mono)'
            }}>
              Current Positioning (Underselling)
            </h3>
            <ul style={{ paddingLeft: 'var(--space-lg)', marginBottom: 'var(--space-md)' }}>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                "2 years of professional experience"
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                "Software Engineer, team member"
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                Generic tool listing without business impact
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                Missing enterprise complexity and leadership
              </li>
            </ul>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Positioning based on time-in-role rather than capability demonstrated
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
              Actual Experience Reality
            </h3>
            <ul style={{ paddingLeft: 'var(--space-lg)', marginBottom: 'var(--space-md)' }}>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                Multi-role technical leadership (solo)
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                Enterprise platform architecture management
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                Fortune 500 client relationship management
              </li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>
                Principal-level complexity under resource constraints
              </li>
            </ul>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Capability demonstrated through systematic problem-solving at scale
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
          Multi-Role Technical Leadership Evidence
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
            Roles Performed Simultaneously
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-lg)'
          }}>
            <div style={{
              background: 'var(--color-background)',
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--border-radius)'
            }}>
              <h4 style={{
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-xs)',
                fontSize: '1rem'
              }}>
                Product Owner
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Led product strategy and roadmap decisions for enterprise logistics platform
              </p>
            </div>

            <div style={{
              background: 'var(--color-background)',
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--border-radius)'
            }}>
              <h4 style={{
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-xs)',
                fontSize: '1rem'
              }}>
                Systems Architect
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Managed three-silo monolith with continental distribution and versioning
              </p>
            </div>

            <div style={{
              background: 'var(--color-background)',
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--border-radius)'
            }}>
              <h4 style={{
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-xs)',
                fontSize: '1rem'
              }}>
                Platform Engineer
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Built modular CI/CD infrastructure reusable across projects
              </p>
            </div>

            <div style={{
              background: 'var(--color-background)',
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--border-radius)'
            }}>
              <h4 style={{
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-xs)',
                fontSize: '1rem'
              }}>
                Integration Engineer
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                API worker infrastructure handling FTP, XML, REST data ingestion
              </p>
            </div>

            <div style={{
              background: 'var(--color-background)',
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--border-radius)'
            }}>
              <h4 style={{
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-xs)',
                fontSize: '1rem'
              }}>
                Team Leadership
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Onboarded external developers and managed knowledge transfer
              </p>
            </div>

            <div style={{
              background: 'var(--color-background)',
              padding: 'var(--space-md)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--border-radius)'
            }}>
              <h4 style={{
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-xs)',
                fontSize: '1rem'
              }}>
                Customer Success
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Direct Fortune 500 client support and relationship management
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
            Enterprise Platform Scope
          </h3>
          <ul style={{ paddingLeft: 'var(--space-lg)', marginBottom: 'var(--space-md)' }}>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Mileviewer Platform:</strong> Enterprise logistics serving Fortune 500 clients
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Client Portfolio:</strong> Maersk, DHL, FedEx, UPS, Kuehne+Nagel, SAP integrations
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Technical Complexity:</strong> "Universal adapter" for logistics data integration
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Business Impact:</strong> Global supply chain management and optimization
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
          The Startup Context Validation
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
            What Actually Happened
          </h3>
          <div style={{
            background: '#2f2f1f',
            border: '1px dashed #7f7f5f',
            padding: 'var(--space-md)',
            borderRadius: 'var(--border-radius)',
            marginBottom: 'var(--space-md)'
          }}>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              Solo developer carrying enterprise-level logistics platform at burn-money startup.
              Fired during cost-cutting measures. Company went bankrupt after firing key technical staff.
            </p>
            <p style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>
              They pivoted to the project I was maintaining. Took a team of 5 people to replace my workload.
            </p>
          </div>

          <h4 style={{
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-sm)',
            fontSize: '1rem'
          }}>
            Why This Strengthens Your Position
          </h4>
          <ul style={{ paddingLeft: 'var(--space-lg)' }}>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Proves senior-level capability:</strong> One person doing work that requires a team of 5
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Demonstrates resilience:</strong> Delivered results in chaotic, underfunded environment
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Shows business impact:</strong> Company literally pivoted to your project after you left
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Validates systematic thinking:</strong> Documentation/maintenance sound enough to become business pivot
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
          Strategic Realignment Approach
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
            Two-Track Strategy
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-md)'
          }}>
            <div>
              <h4 style={{
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-sm)',
                fontSize: '1rem'
              }}>
                Track 1: Traditional Resume (ATS/HR Filter)
              </h4>
              <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', paddingLeft: 'var(--space-lg)' }}>
                <li>Years of experience formatting for keyword matching</li>
                <li>Role titles that map to standard job descriptions</li>
                <li>Technology stack optimization for search algorithms</li>
                <li>Quantified achievements in conventional metrics</li>
              </ul>
            </div>

            <div>
              <h4 style={{
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-sm)',
                fontSize: '1rem'
              }}>
                Track 2: Portfolio Reality (Human Evaluation)
              </h4>
              <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', paddingLeft: 'var(--space-lg)' }}>
                <li>Systematic documentation of actual complexity handled</li>
                <li>Enterprise scope and business impact evidence</li>
                <li>Multi-role capability demonstration</li>
                <li>Strategic thinking and systematic methodology showcase</li>
              </ul>
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
            Narrative Repositioning Framework
          </h3>
          <div style={{ marginBottom: 'var(--space-md)' }}>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              From: "Junior developer with 2 years experience"
            </h4>
            <p style={{ color: '#d73027', fontSize: '0.9rem', marginBottom: 'var(--space-sm)' }}>
              Undersells capability, focuses on time rather than impact
            </p>
          </div>
          <div>
            <h4 style={{
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
              fontSize: '1rem'
            }}>
              To: "Systems engineer with enterprise platform management experience"
            </h4>
            <p style={{ color: 'var(--color-accent)', fontSize: '0.9rem' }}>
              Accurate capability positioning, focuses on complexity and business impact
            </p>
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
            Systematic Capability Assessment
          </h4>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Document actual work performed, not job title responsibilities. Focus on complexity handled,
            decisions made, and business impact created rather than time in role.
          </p>
        </div>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          <strong>For Non-Traditional Paths:</strong> Your diverse experience often creates unique problem-solving
          capabilities that traditional career paths don't develop.
        </p>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          <strong>For Resource-Constrained Experience:</strong> Work performed under constraints often demonstrates
          higher capability than the same work with full team support.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The goal is authentic positioning that reflects actual capability rather than conventional
          career progression expectations.
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
          <Link href="/journey/professional-visibility" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            Professional Visibility →
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
