// src/app/journey/systematic-career-growth/page.tsx
import Link from 'next/link';

export default function SystematicCareerGrowthPage() {
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
          Systematic Career Growth
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-md)'
        }}>
          From bootcamp graduate to enterprise-level problem solver through systematic skill building
        </p>
        <div style={{
          display: 'flex',
          gap: 'var(--space-sm)',
          flexWrap: 'wrap'
        }}>
          {['professional-development', 'quantified-impact', 'systematic-learning', 'multi-domain'].map(tag => (
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
          The Core Philosophy
        </h2>

        <div style={{
          background: 'var(--color-surface)',
          padding: 'var(--space-lg)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          marginBottom: 'var(--space-lg)'
        }}>
          <blockquote style={{
            fontStyle: 'italic',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-md)',
            fontSize: '1.1rem',
            borderLeft: '3px solid var(--color-accent)',
            paddingLeft: 'var(--space-md)'
          }}>
            "I learn to spite those who punish it. If I can suffer and learn and build systems
            that prevent others from experiencing that dysfunction, then the suffering has become valuable."
          </blockquote>
        </div>

        <p style={{ marginBottom: 'var(--space-md)' }}>
          This isn't typical career advice. It's a systematic approach to transforming institutional
          trauma and dysfunction into preventative infrastructure and solutions.
        </p>

        <p style={{ marginBottom: 'var(--space-md)' }}>
          The pattern: document the actual problem, build focused understanding through systematic
          observation, create systems that prevent others from experiencing the same dysfunction.
        </p>

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
            Core Professional Identity
          </h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Software developer who builds systematic solutions to documented problems.
            Applies "Systematic Development DNA" across coding, gaming, learning, and client relations.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Quantified Professional Impact
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
            Enterprise-Level Complexity (Solo)
          </h3>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            As a junior developer months out of bootcamp, handled enterprise-level logistics
            (Maersk) involving complex API integrations, XML parsing, airline industry algorithms,
            client relations, and project management.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Scale:</strong> Work typically requiring a team of 5-10 specialists,
            managed data for 15 distinct offices for a major enterprise client.
          </p>
        </div>

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
              Database Optimization
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              Cleaned up damcologs from <strong>13.3M records down to 406K</strong>,
              significantly improving integration server performance
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
              System Analysis
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              Analyzed and documented existing import integration process
              spanning <strong>1200+ lines of code</strong>
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
              Cost Optimization
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              Proposed infrastructure consolidation reducing servers from 6 to 3,
              saving <strong>€90/month</strong>
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
            Client Engagement Excellence
          </h3>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Conducted comprehensive on-site user research with multiple stakeholder roles:
            Export Team Lead, Export Team Member, Import Team Member, Management Representative, COO.
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Gathered 8+ distinct feedback points, identified critical workflow inefficiencies
            (e.g., inability to exclude items from bulk actions on 25 shipments forcing 23 manual updates).
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Systematic Tool Development
        </h2>

        <p style={{ marginBottom: 'var(--space-lg)' }}>
          Rather than just solving problems, I build tools that systematically prevent the problems
          from recurring. Each project demonstrates progression in technical depth and strategic thinking.
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
            Panopticron - Enterprise Monitoring System
          </h3>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            <strong>Challenge:</strong> 6-person agency needed centralized monitoring for Vercel & GitHub projects
          </p>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            <strong>Solution:</strong> Real-time monitoring system with 2 data sync workers,
            self-monitoring capabilities, and comprehensive test coverage
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Stack:</strong> Refine v4, Next.js v14, MUI v5, Supabase, Vercel.
            Serving 8 major releases with automated status polling.
          </p>
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
            Uroboro - Self-Documenting Content Pipeline
          </h3>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            <strong>Challenge:</strong> Knowledge work insights were being lost due to poor documentation practices
          </p>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            <strong>Solution:</strong> 10-second insight capture, 2-minute content publishing,
            100% local AI processing for privacy and zero cost
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Evolution:</strong> Refined from 17 commands & 1558 lines of code to
            3 essential CLI commands. Go primary, with Python archived reference.
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
            Examinator - Offline Study Companion
          </h3>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            <strong>Challenge:</strong> Security concept learning required ADHD-friendly, offline-first approach
          </p>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            <strong>Solution:</strong> 186 pre-built security flashcards, 7 curated summary documents,
            local LLM integration for question generation
          </p>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>Philosophy:</strong> Student-centric design with spaced repetition and offline capabilities.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Multi-Domain Technical Mastery
        </h2>

        <p style={{ marginBottom: 'var(--space-lg)' }}>
          Systematic skill acquisition across multiple technical domains creates unique
          problem-solving capabilities and strategic advantages.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
              Security
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              CIA triad, threat modeling, cryptography, web security, privacy,
              incident response, malware analysis
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
              Web Development
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              React, Next.js, Vercel, Supabase, Refine, MUI,
              service-oriented architecture
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
              Languages
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              JavaScript, Python, Rust, C, Go -
              systematic acquisition and practical application
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
              Hardware
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              Linux driver mapping, fightstick configuration,
              embedded systems integration
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
              Game Design
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              Sound-based mechanics, quantum systems,
              architectural planning and user experience
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
          The Systematic Learning Philosophy
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          <strong>"Spite-fueled learning"</strong> combined with documentation-intensive skill building
          creates compound advantages over time.
        </p>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          When institutional knowledge is lost or punished, systematic knowledge preservation
          becomes both a survival strategy and a competitive advantage.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Each challenge faced becomes a documented system that prevents others from experiencing
          the same dysfunction. This transforms individual suffering into collective value.
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
          More Learning Journey Content
        </h2>
        <div style={{
          display: 'flex',
          gap: 'var(--space-lg)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/journey/technical-depth-progression" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            Technical Depth Progression →
          </Link>
          <Link href="/journey/ai-collaboration-mastery" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            AI Collaboration Mastery →
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
