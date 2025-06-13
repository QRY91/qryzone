// src/app/thinking/ai-risk-assessment/page.tsx
import Link from 'next/link';

export default function AIRiskAssessmentPage() {
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
          AI Advancement Risk Assessment
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-md)'
        }}>
          Strategic analysis: What happens if cloud AI gets dramatically better? How to position for multiple futures without betting everything on predictions.
        </p>
        <div style={{
          display: 'flex',
          gap: 'var(--space-sm)',
          flexWrap: 'wrap'
        }}>
          {['ai-strategy', 'risk-analysis', 'technology-investment', 'strategic-planning'].map(tag => (
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
          The Core Risk Scenario
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
            The Strategic Question
          </h3>
          <div style={{
            background: '#2f2f1f',
            border: '1px dashed #7f7f5f',
            padding: 'var(--space-md)',
            borderRadius: 'var(--border-radius)',
            marginBottom: 'var(--space-md)'
          }}>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Scenario:</strong> Cloud AI continues rapid advancement while local AI stagnates
            </p>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Consequence:</strong> Local infrastructure becomes obsolete within 2-3 years
            </p>
            <p style={{ color: 'var(--color-accent)' }}>
              <strong>Question:</strong> Is betting on local AI a risky technology investment?
            </p>
          </div>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            This analysis examines the probability and implications of different AI advancement scenarios
            to inform strategic technology investment decisions.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Historical Development Patterns
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
              Cloud AI Evolution
            </h3>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              background: 'var(--color-background)',
              padding: 'var(--space-md)',
              borderRadius: 'var(--border-radius)',
              marginBottom: 'var(--space-md)'
            }}>
              <div>2022: GPT-3.5 (decent but limited)</div>
              <div>2023: GPT-4 (major leap in capability)</div>
              <div>2024: GPT-4o, Claude 3.5 (incremental)</div>
              <div>2025: GPT-5(?), multimodal advances</div>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Pattern:</strong> Big leaps followed by incremental improvements
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
              Open Source Following Pattern
            </h3>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              background: 'var(--color-background)',
              padding: 'var(--space-md)',
              borderRadius: 'var(--border-radius)',
              marginBottom: 'var(--space-md)'
            }}>
              <div>2023: Llama 2 (6 months behind GPT-4)</div>
              <div>2024: Llama 3.1 70B (GPT-4 competitive)</div>
              <div>2024: Qwen 2.5, DeepSeek V3 (competitive)</div>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Pattern:</strong> 6-12 month lag, then competitive performance
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
          Physics & Economics Constraints
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
            Scaling Law Limitations
          </h3>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            background: 'var(--color-background)',
            padding: 'var(--space-md)',
            borderRadius: 'var(--border-radius)',
            marginBottom: 'var(--space-md)'
          }}>
            <div>GPT-3: ~$5M to train</div>
            <div>GPT-4: ~$100M to train</div>
            <div>GPT-5: ~$1B to train (estimated)</div>
            <div>GPT-6: ~$10B to train (projected)</div>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Training costs are scaling exponentially. Bigger models require higher API prices to recover costs.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-md)'
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
              Compute Bottlenecks
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>H100 GPU shortage continues</li>
              <li>Data center power constraints</li>
              <li>Training infrastructure limits</li>
              <li>Inference cost pressure</li>
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
              Market Dynamics
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>OpenAI, Anthropic burning cash</li>
              <li>Pressure to monetize = higher prices</li>
              <li>Competition driving open source</li>
              <li>Meta, Google commoditizing models</li>
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
          Scenario Analysis
        </h2>

        <div style={{
          display: 'grid',
          gap: 'var(--space-md)',
          marginBottom: 'var(--space-lg)'
        }}>
          <div style={{
            background: 'var(--color-surface)',
            padding: 'var(--space-lg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)'
          }}>
            <h3 style={{
              color: '#4daf4a',
              marginBottom: 'var(--space-sm)',
              fontFamily: 'var(--font-mono)'
            }}>
              Scenario 1: Gradual Improvement (Most Likely)
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-sm)',
              marginBottom: 'var(--space-sm)'
            }}>
              <div><strong>Cloud AI:</strong> 10-20% annual improvement</div>
              <div><strong>Local AI:</strong> 6-12 month lag but follows</div>
              <div><strong>Outcome:</strong> Still economically viable</div>
              <div><strong>Risk Level:</strong> Low</div>
            </div>
          </div>

          <div style={{
            background: 'var(--color-surface)',
            padding: 'var(--space-lg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)'
          }}>
            <h3 style={{
              color: '#ff7f00',
              marginBottom: 'var(--space-sm)',
              fontFamily: 'var(--font-mono)'
            }}>
              Scenario 2: Major Breakthrough (Possible)
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-sm)',
              marginBottom: 'var(--space-sm)'
            }}>
              <div><strong>Cloud AI:</strong> Revolutionary capability leap</div>
              <div><strong>Local AI:</strong> Significant lag (18+ months)</div>
              <div><strong>Outcome:</strong> Temporarily inferior but catches up</div>
              <div><strong>Risk Level:</strong> Medium</div>
            </div>
          </div>

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
              Scenario 3: Cloud Dominance (Low Probability)
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-sm)',
              marginBottom: 'var(--space-sm)'
            }}>
              <div><strong>Cloud AI:</strong> Sustained exponential improvement</div>
              <div><strong>Local AI:</strong> Unable to keep pace</div>
              <div><strong>Outcome:</strong> Obsolete investment</div>
              <div><strong>Risk Level:</strong> High but unlikely</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-xxl)' }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: 'var(--space-lg)',
          color: 'var(--color-text-primary)'
        }}>
          Why Cloud Dominance Is Unlikely
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
              Open Source Acceleration
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>Meta's strategy: Commoditize cloud AI</li>
              <li>Google's strategy: Democratize AI ecosystem</li>
              <li>Academic research: Efficiency breakthroughs</li>
              <li>China's strategy: AI sovereignty</li>
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
              Economic Incentives
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>Hardware vendors want to sell equipment</li>
              <li>Enterprises want on-premise options</li>
              <li>Governments want AI sovereignty</li>
              <li>Developers want control/customization</li>
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
              Technical Reality
            </h4>
            <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <li>Inference optimization advancing rapidly</li>
              <li>Quantization techniques improving</li>
              <li>Smaller models achieving better performance</li>
              <li>Edge AI deployment growing</li>
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
          Strategic Hedging Approaches
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
              1. Modular Investment Approach
            </h3>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              Instead of large upfront investment, scale gradually based on demonstrated value and market evolution.
            </p>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              background: 'var(--color-background)',
              padding: 'var(--space-md)',
              borderRadius: 'var(--border-radius)',
              marginBottom: 'var(--space-sm)'
            }}>
              <div>Year 1: Single unit (test local AI viability)</div>
              <div>Year 2: Add 1x unit (2-node cluster)</div>
              <div>Year 3: Add 2x more if economics work</div>
              <div>Year 4: Full cluster or pivot as needed</div>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Risk Reduction:</strong> Gradual investment allows pivoting based on actual market evolution
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
              2. Hybrid Architecture Design
            </h3>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              Build systems with cloud fallback capability. Not all-or-nothing local vs. cloud.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-sm)',
              marginBottom: 'var(--space-sm)'
            }}>
              <div><strong>Local AI:</strong> 80% routine tasks</div>
              <div><strong>Cloud AI:</strong> 20% bleeding edge needs</div>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Risk Reduction:</strong> Can shift ratios based on capability gaps without complete infrastructure changes
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
              3. Revenue Generation Options
            </h3>
            <p style={{ marginBottom: 'var(--space-sm)' }}>
              Local infrastructure can generate income even if personal use diminishes.
            </p>
            <ul style={{ paddingLeft: 'var(--space-lg)', marginBottom: 'var(--space-sm)' }}>
              <li>Rent compute to others</li>
              <li>AI inference services</li>
              <li>Model training services</li>
              <li>Development consulting</li>
            </ul>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              <strong>Risk Reduction:</strong> Investment pays for itself even if you pivot to different usage patterns
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
          Strategic Conclusions
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
            Key Insight
          </h4>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Historical patterns suggest even dramatic cloud AI improvements get commoditized within 6-12 months.
            The physics and economics of AI development favor diversification rather than monopolization.
          </p>
        </div>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          <strong>Recommendation:</strong> Modular investment with hybrid architecture provides the best risk-adjusted positioning.
          Gradual scaling allows adaptation to actual market evolution rather than betting on predictions.
        </p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The goal isn't to predict the future perfectly, but to position for multiple possible futures
          while maintaining strategic flexibility.
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
          <Link href="/thinking/devtools-landscape" style={{
            color: 'var(--color-accent)',
            textDecoration: 'none',
            padding: 'var(--space-sm) var(--space-md)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--color-background)'
          }}>
            DevTools Landscape →
          </Link>
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
