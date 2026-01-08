// src/app/fun/apparent-intelligence/page.tsx
"use client";

import { useState } from "react";

export default function ApparentIntelligencePage() {
  const [showWarning, setShowWarning] = useState(false);

  const handleClick = () => {
    alert("⚠ WARNING: USER AGREES TO SURGICAL VOIDANCE OF WARRANTY.");
  };

  return (
    <>
      <style>{`
        .ai-page {
          font-family: 'Inter', -apple-system, sans-serif;
          background: white;
          color: black;
          min-height: 100vh;
          margin: -1rem;
          cursor: crosshair;
        }
        .ai-page * { box-sizing: border-box; }
        .ai-mono { font-family: 'Roboto Mono', monospace; }
        .ai-aperture-btn {
          background-color: #F58025;
          color: white;
          font-weight: 700;
          letter-spacing: 0.05em;
          box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
          transition: all 0.1s ease;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-block;
        }
        .ai-aperture-btn:hover {
          transform: translate(2px, 2px);
          box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
        }
        .ai-brutal-card {
          border: 3px solid black;
          box-shadow: 12px 12px 0px 0px rgba(0,0,0,1);
        }
        .ai-grid-bg {
          background-image: linear-gradient(to right, #e5e5e5 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .ai-section-divider {
          height: 4px;
          background-color: black;
        }
        .ai-warning-stripe {
          background: repeating-linear-gradient(45deg, #F58025, #F58025 20px, #000 20px, #000 40px);
          height: 8px;
        }
        .ai-harassment-banner {
          background: #fef08a;
          color: black;
          padding: 0.5rem;
          font-weight: bold;
          text-align: center;
          border-bottom: 4px solid black;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.2s;
        }
        .ai-harassment-banner:hover {
          background: #ef4444;
          color: white;
        }
        .ai-nav {
          border-bottom: 4px solid black;
          padding: 1.5rem 2rem;
        }
        .ai-nav-inner {
          max-width: 80rem;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ai-hero {
          padding: 6rem 2rem;
          text-align: center;
        }
        .ai-hero h1 {
          font-size: clamp(3rem, 10vw, 8rem);
          font-weight: 900;
          line-height: 0.95;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .ai-hero-sub {
          font-size: clamp(1.25rem, 3vw, 2rem);
          font-weight: 300;
          margin-bottom: 1rem;
          max-width: 50rem;
          margin-left: auto;
          margin-right: auto;
        }
        .ai-hero-desc {
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 300;
          color: #4b5563;
          margin-bottom: 3rem;
          max-width: 50rem;
          margin-left: auto;
          margin-right: auto;
        }
        .ai-hero-img {
          width: 100%;
          max-width: 60rem;
          margin: 3rem auto 0;
          border: 4px solid black;
          overflow: hidden;
        }
        .ai-hero-img img {
          width: 100%;
          height: auto;
          display: block;
        }
        .ai-section {
          padding: 6rem 2rem;
        }
        .ai-section-inner {
          max-width: 80rem;
          margin: 0 auto;
        }
        .ai-grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }
        @media (min-width: 768px) {
          .ai-grid-2 { grid-template-columns: 1fr 1fr; }
        }
        .ai-label {
          display: inline-block;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }
        .ai-label-dark { background: black; color: white; }
        .ai-label-orange { background: #F58025; color: white; }
        .ai-section h2 {
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        .ai-section p {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .ai-quote {
          border-left: 4px solid black;
          padding-left: 1rem;
          font-weight: bold;
        }
        .ai-quote-orange { border-left-color: #F58025; }
        .ai-img-box {
          border: 4px solid black;
          position: relative;
          overflow: hidden;
        }
        .ai-img-box img {
          width: 100%;
          height: auto;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.3s;
        }
        .ai-img-box:hover img { filter: grayscale(0%); }
        .ai-img-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          background: #dc2626;
          color: white;
          padding: 0.5rem;
          font-size: 0.75rem;
          font-weight: bold;
          border-top: 4px solid black;
          border-left: 4px solid black;
        }
        .ai-features {
          background: #f9fafb;
        }
        .ai-features h2 {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 1rem;
        }
        .ai-features-sub {
          text-align: center;
          font-size: 1.25rem;
          font-weight: 300;
          margin-bottom: 4rem;
        }
        .ai-grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .ai-feature-card {
          background: white;
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .ai-feature-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }
        .ai-feature-title {
          font-size: 1.25rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }
        .ai-feature-desc {
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex: 1;
        }
        .ai-terminal {
          background: black;
          color: #4ade80;
          padding: 1rem;
          font-size: 0.75rem;
        }
        .ai-terminal-dim { opacity: 0.5; }
        .ai-testimonial {
          max-width: 50rem;
          margin: 0 auto;
        }
        .ai-testimonial-card {
          background: white;
          padding: 3rem;
          position: relative;
        }
        .ai-testimonial-label {
          position: absolute;
          top: 0;
          left: 0;
          background: black;
          color: white;
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          font-weight: bold;
          transform: translateY(-100%);
        }
        .ai-testimonial-quote {
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .ai-testimonial-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 2px solid black;
          padding-top: 1.5rem;
        }
        .ai-testimonial-subject {
          font-weight: bold;
          font-size: 0.875rem;
        }
        .ai-testimonial-status {
          font-size: 0.875rem;
          color: #6b7280;
        }
        .ai-stars {
          background: #F58025;
          color: white;
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
        }
        .ai-footer {
          background: black;
          color: white;
          padding: 4rem 2rem;
        }
        .ai-footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .ai-footer h3 {
          font-weight: 900;
          margin-bottom: 1rem;
        }
        .ai-footer h4 {
          font-weight: bold;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        .ai-footer p {
          font-size: 0.875rem;
          color: #9ca3af;
          line-height: 1.6;
        }
        .ai-footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ai-footer li {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-bottom: 0.5rem;
        }
        .ai-footer-disclaimer {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          font-size: 0.75rem;
          color: #6b7280;
          line-height: 1.7;
        }
        .ai-footer-disclaimer p { margin-bottom: 1rem; }
        .ai-footer-warning { color: #F58025; }
        .ai-footer-copy {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.75rem;
          color: #4b5563;
        }
      `}</style>

      <div className="ai-page">
        {/* Harassment Banner */}
        <div className="ai-harassment-banner">
          <span className="ai-mono">⚠ URGENT:</span> Your current intelligence is below market average. <span style={{textDecoration:'underline'}}>Upgrade Now</span>
        </div>

        {/* Warning Stripe */}
        <div className="ai-warning-stripe"></div>

        {/* Navbar */}
        <nav className="ai-nav">
          <div className="ai-nav-inner">
            <img src="/fun/apparent-intelligence/apparent_intelligence_logo.png" alt="Apparent Intelligence" style={{height:'4rem'}} />
            <div style={{display:'flex',gap:'1rem'}}>
              <a href="/fun/apparent-intelligence/memo/" className="ai-aperture-btn" style={{padding:'0.75rem 1.5rem',fontSize:'0.875rem'}}>
                Read Memo
              </a>
              <button onClick={handleClick} className="ai-aperture-btn" style={{padding:'0.75rem 1.5rem',fontSize:'0.875rem'}}>
                Invest Now
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="ai-hero ai-grid-bg">
          <h1>APPARENT<br/>INTELLIGENCE</h1>
          <p className="ai-hero-sub">
            Smart is out. <strong>&quot;Seeming Smart&quot;</strong> is in.
          </p>
          <p className="ai-hero-desc">
            Don&apos;t let a lack of education hold you back. Install our neural firmware and project unearned confidence instantly.
          </p>
          <button onClick={handleClick} className="ai-aperture-btn" style={{padding:'1.25rem 3rem',fontSize:'1.25rem'}}>
            Become A Beta Tester
          </button>
          <div className="ai-hero-img">
            <img src="/fun/apparent-intelligence/stock1.png" alt="Neural Interface Test Subject" />
          </div>
        </section>

        <div className="ai-section-divider"></div>

        {/* Problem/Solution Section */}
        <section className="ai-section">
          <div className="ai-section-inner ai-grid-2">
            {/* Problem */}
            <div>
              <div className="ai-label ai-label-dark ai-mono">THE PROBLEM</div>
              <h2>Thinking Is Inefficient</h2>
              <p>
                The human brain consumes approximately <span className="ai-mono" style={{fontWeight:'bold'}}>20% of the body&apos;s energy</span> to process information, form opinions, and generate original thoughts.
              </p>
              <p>
                Studies show that actual intelligence requires years of education, reading, and critical thinking - resources that could be better spent on social media engagement and personal branding.
              </p>
              <p className="ai-quote">
                Why waste energy thinking when you can simply appear to think?
              </p>
              <div className="ai-img-box" style={{marginTop:'2rem'}}>
                <img src="/fun/apparent-intelligence/stock_problem.png" alt="User Attempting Math" />
                <div className="ai-img-badge ai-mono">⚠ CORTEX OVERHEAT</div>
              </div>
            </div>

            {/* Solution */}
            <div>
              <div className="ai-label ai-label-orange ai-mono">THE SOLUTION</div>
              <h2>Synthetic Cognition</h2>
              <p>
                The <span className="ai-mono" style={{fontWeight:'bold'}}>AI-CHIP-7™</span> neural implant bypasses your brain&apos;s inefficient biological processes entirely.
              </p>
              <p>
                Using proprietary <strong>Apparent Intelligence® algorithms</strong>, our chip analyzes conversations in real-time and generates contextually appropriate responses that make you sound informed, confident, and brilliant.
              </p>
              <p className="ai-quote ai-quote-orange">
                You don&apos;t need to understand quantum physics. You just need to sound like you do.
              </p>
              <div className="ai-img-box" style={{marginTop:'2rem'}}>
                <img src="/fun/apparent-intelligence/stock2.png" alt="The Know-It-All Processor" />
              </div>
            </div>
          </div>
        </section>

        <div className="ai-section-divider"></div>

        {/* Features Section */}
        <section className="ai-section ai-features">
          <div className="ai-section-inner">
            <h2>CORE FEATURES</h2>
            <p className="ai-features-sub">Patented technology for simulated competence</p>

            <div className="ai-grid-3">
              <div className="ai-feature-card ai-brutal-card">
                <div className="ai-feature-icon">🗣️</div>
                <div className="ai-feature-title ai-mono">INSTANT JARGON GENERATION</div>
                <p className="ai-feature-desc">
                  Our chip stimulates your Broca&apos;s area to automatically output words like &quot;synergy,&quot; &quot;deliverables,&quot; and &quot;low-hanging fruit&quot; whenever you feel threatened.
                </p>
                <div className="ai-terminal ai-mono">
                  <div>&gt; SYNERGY</div>
                  <div>&gt; DELIVERABLES</div>
                  <div>&gt; LOW-HANGING FRUIT</div>
                  <div className="ai-terminal-dim" style={{marginTop:'0.5rem'}}>&gt; THREAT DETECTED...</div>
                </div>
              </div>

              <div className="ai-feature-card ai-brutal-card">
                <div className="ai-feature-icon">👁️</div>
                <div className="ai-feature-title ai-mono">RETINAL HUD 2.0</div>
                <p className="ai-feature-desc">
                  Projects stock market graphs directly onto your coworker&apos;s faces so you don&apos;t have to make eye contact.
                </p>
                <div style={{border:'4px solid #F58025',padding:'1rem'}}>
                  <div className="ai-mono" style={{fontSize:'0.75rem'}}>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:'0.5rem'}}>
                      <span>EYE CONTACT:</span>
                      <span style={{fontWeight:'bold'}}>AVOIDED</span>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:'0.5rem'}}>
                      <span>CHARTS VISIBLE:</span>
                      <span style={{fontWeight:'bold'}}>YES</span>
                    </div>
                    <div style={{marginTop:'1rem',fontSize:'0.875rem'}}>
                      → Projecting graphs onto face...
                    </div>
                  </div>
                </div>
              </div>

              <div className="ai-feature-card ai-brutal-card">
                <div className="ai-feature-icon">😊</div>
                <div className="ai-feature-title ai-mono">THE &quot;NOD &amp; GRIN&quot; PROTOCOL</div>
                <p className="ai-feature-desc">
                  Uses facial galvanism to force a confident smile even when you have no idea what is happening.
                </p>
                <div>
                  {[
                    { label: 'SMILE', value: 95 },
                    { label: 'NOD', value: 88 },
                    { label: 'AWARENESS', value: 12 },
                  ].map((item) => (
                    <div key={item.label} style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'0.75rem'}}>
                      <div className="ai-mono" style={{width:'5rem',background:'black',color:'white',textAlign:'center',padding:'0.25rem',fontSize:'0.75rem'}}>{item.label}</div>
                      <div style={{flex:1,background:'#e5e7eb',height:'0.5rem',borderRadius:'4px',overflow:'hidden'}}>
                        <div style={{background:'#F58025',height:'100%',width:`${item.value}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ai-section-divider"></div>

        {/* Testimonials Section */}
        <section className="ai-section">
          <div className="ai-section-inner">
            <h2 style={{textAlign:'center',fontSize:'3rem',marginBottom:'4rem'}}>TRIAL FEEDBACK</h2>
            <div className="ai-testimonial">
              <div className="ai-testimonial-card ai-brutal-card">
                <div className="ai-testimonial-label ai-mono">CLINICAL TRIAL DATA</div>
                <div style={{fontSize:'4rem',opacity:0.2,marginBottom:'-2rem'}}>&quot;</div>
                <p className="ai-testimonial-quote">
                  I used to work in the mailroom. After the surgery, I shouted &apos;BLOCKCHAIN&apos; during a silent moment in a board meeting. Now I own the company. I also can&apos;t taste cheese anymore. 5 Stars.
                </p>
                <div className="ai-testimonial-footer">
                  <div>
                    <div className="ai-testimonial-subject ai-mono">SUBJECT #8940</div>
                    <div className="ai-testimonial-status">(Deceased)</div>
                  </div>
                  <div className="ai-stars ai-mono">★★★★★</div>
                </div>
              </div>
            </div>
            <div style={{textAlign:'center',marginTop:'3rem'}}>
              <button onClick={handleClick} className="ai-aperture-btn" style={{padding:'1rem 2.5rem',fontSize:'1.125rem'}}>
                Join The Trial
              </button>
            </div>
          </div>
        </section>

        <div className="ai-section-divider"></div>

        {/* Footer */}
        <footer className="ai-footer">
          <div className="ai-section-inner">
            <div className="ai-footer-grid">
              <div>
                <h3 className="ai-mono">CHASM LOGIC</h3>
                <p>A Bedrock Holdings Company. Disrupting cognitive paradigms since Series A.</p>
              </div>
              <div>
                <h4 className="ai-mono">LEGAL</h4>
                <ul>
                  <li>Terms of Implantation</li>
                  <li>Privacy Policy (Void)</li>
                  <li>Neural Data Harvesting</li>
                  <li>Class Action Waiver</li>
                </ul>
              </div>
              <div>
                <h4 className="ai-mono">CONTACT</h4>
                <ul>
                  <li className="ai-mono">brock@chasmlogic.io</li>
                  <li className="ai-mono">complaints@dev/null</li>
                  <li>Series B inquiries only.</li>
                </ul>
              </div>
            </div>

            <div className="ai-footer-disclaimer ai-mono">
              <p>
                <span style={{color:'white',fontWeight:'bold'}}>DISCLAIMER:</span> Apparent Intelligence is a hyper-growth unicorn subsidiary of Chasm Logic. Side effects of the &apos;Seeing is Believing&apos; ocular implant include retinal scorch, aggressive humors, and the sensation that you are constantly falling.
              </p>
              <p>
                Brock Granite, our CEO, has personally assured investors that the chip does not lobotomize you; it merely &apos;optimizes your hard drive by deleting unnecessary empathy files.&apos; By reading this sentence, you have agreed to arbitration on Mars. Do not operate heavy machinery, heavy concepts, or voting booths while chipset is active.
              </p>
              <p>
                The chip does not make you intelligent. The chip makes you <em>appear</em> intelligent. Actual intelligence sold separately. Chasm Logic assumes no liability for job loss, social ostracization, philosophical crises, or spontaneous combustion resulting from discovery of your simulated competence.
              </p>
              <p className="ai-footer-warning">
                ⚠ WARNING: This product may cause the user to become indistinguishable from an AI language model.
              </p>
            </div>

            <div className="ai-footer-copy ai-mono">
              © 2026 CHASM LOGIC. ALL RIGHTS DISRUPTED.
            </div>
          </div>
        </footer>

        {/* Warning Stripe */}
        <div className="ai-warning-stripe"></div>
      </div>
    </>
  );
}
