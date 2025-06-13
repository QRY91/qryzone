export default function HomeLabPermacomputingStrategy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Homelab Permacomputing Strategy
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          A systematic approach to building distributed computing infrastructure using heterogeneous hardware,
          permacomputing principles, and resourceful engineering.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>The Resourceful Infrastructure Framework</h2>
        <p>
          Most homelab approaches assume uniform, modern hardware. This framework embraces the opposite:
          <strong>systematic utilization of whatever hardware you have</strong>, from ancient Pentium II
          machines to modern workstations, each playing specialized roles in a distributed system.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6">
          "Cave with a box of scraps" engineering: When you can't buy your way to a solution,
          you engineer your way to one.
        </blockquote>

        <h2>Hardware Capability Assessment</h2>
        <p>
          Before assigning roles, systematically assess what you're working with:
        </p>

        <h3>The Stratification Approach</h3>
        <ul>
          <li><strong>Ultra-Low Spec</strong> (Penny-class): Sub-1GHz, &lt;64MB RAM - Static services, monitoring</li>
          <li><strong>Legacy Workable</strong> (Debby-class): Multi-core, 2-8GB RAM - Dedicated services, experimentation</li>
          <li><strong>Modern Capable</strong> (Poppy-class): High-performance, GPU - AI workloads, development</li>
          <li><strong>Portable Power</strong> (Framework-class): Laptop form factor - Nomadic computing, privacy-first</li>
        </ul>

        <h2>Machine Role Specialization</h2>
        <p>
          Each machine class has optimal use patterns based on its constraints and capabilities:
        </p>

        <h3>The Ancient Servants (Ultra-Low Spec)</h3>
        <p>
          These machines excel at tasks that require persistence rather than performance:
        </p>
        <ul>
          <li><strong>Configuration Distribution</strong>: Serve dotfiles, scripts, and system configs via basic HTTP</li>
          <li><strong>Network Monitoring</strong>: Continuous ping monitoring, basic health checks</li>
          <li><strong>Time Services</strong>: NTP server for local network synchronization</li>
          <li><strong>Morning Digest Base</strong>: Overnight data collection from simple sources</li>
        </ul>

        <h3>The Reliable Workhorses (Legacy Workable)</h3>
        <p>
          These handle the bulk of always-on services that need more capability than ancient hardware can provide:
        </p>
        <ul>
          <li><strong>Network Services</strong>: Pi-hole, local DNS, basic routing</li>
          <li><strong>Development Infrastructure</strong>: Git servers, documentation wikis, CI runners</li>
          <li><strong>Dashboard Displays</strong>: System monitoring, home automation interfaces</li>
          <li><strong>Experimentation Playground</strong>: Safe testing environment for new configurations</li>
        </ul>

        <h3>The Power Players (Modern Capable)</h3>
        <p>
          These tackle computationally intensive tasks and orchestrate the entire system:
        </p>
        <ul>
          <li><strong>Local AI Inference</strong>: 7B parameter models, quantized LLMs via Ollama</li>
          <li><strong>Development Powerhouse</strong>: Compilation, containerization, VM hosting</li>
          <li><strong>System Orchestration</strong>: Managing deployments to lower-tier machines</li>
          <li><strong>Heavy Processing</strong>: Data analysis, multimedia work, gaming</li>
        </ul>

        <h2>Distributed AI Strategy</h2>
        <p>
          Rather than trying to run everything on one machine, distribute AI tasks across your infrastructure:
        </p>

        <h3>The Pipeline Approach</h3>
        <div className="bg-gray-50 p-4 rounded-lg my-6">
          <p><strong>Data Collection</strong> (Ancient machines): Fetch raw data from APIs, RSS feeds, local sensors</p>
          <p><strong>Preprocessing</strong> (Legacy machines): Filter, format, and structure data for analysis</p>
          <p><strong>Analysis</strong> (Modern machines): Apply LLMs for summarization, decision-making, insight generation</p>
          <p><strong>Distribution</strong> (All tiers): Serve results back to appropriate interfaces</p>
        </div>

        <h3>Capability-Matched Tasks</h3>
        <ul>
          <li><strong>Ultra-low spec</strong>: Basic text processing, simple data aggregation</li>
          <li><strong>Legacy workable</strong>: Traditional ML models, basic NLP with classical approaches</li>
          <li><strong>Modern capable</strong>: Transformer models, vision tasks, complex reasoning</li>
        </ul>

        <h2>Network Architecture Principles</h2>
        <p>
          Your heterogeneous infrastructure needs thoughtful network design:
        </p>

        <h3>Segmentation Strategy</h3>
        <ul>
          <li><strong>Homelab subnet</strong>: Isolated network segment for experimental machines</li>
          <li><strong>Production services</strong>: Stable, always-on services on reliable hardware</li>
          <li><strong>Development sandbox</strong>: Safe environment for testing new configurations</li>
          <li><strong>External access</strong>: Carefully controlled exposure of specific services</li>
        </ul>

        <h3>Service Discovery</h3>
        <ul>
          <li><strong>Central DNS</strong>: One machine handles name resolution for the entire lab</li>
          <li><strong>SSH everywhere</strong>: Consistent remote access across all Linux machines</li>
          <li><strong>Service mesh</strong>: Each machine advertises its capabilities and services</li>
        </ul>

        <h2>Implementation Roadmap</h2>
        <p>
          Start small and expand systematically:
        </p>

        <h3>Phase 1: Assessment and Basic Services</h3>
        <ol>
          <li>Inventory and capability-test all available hardware</li>
          <li>Set up basic networking and SSH access</li>
          <li>Deploy one simple service on each tier</li>
          <li>Establish monitoring and basic automation</li>
        </ol>

        <h3>Phase 2: Service Specialization</h3>
        <ol>
          <li>Migrate services to optimal hardware based on resource usage</li>
          <li>Implement cross-machine communication and coordination</li>
          <li>Add redundancy for critical services</li>
          <li>Develop custom tooling for your specific setup</li>
        </ol>

        <h3>Phase 3: Advanced Integration</h3>
        <ol>
          <li>Implement distributed AI pipeline</li>
          <li>Add sophisticated monitoring and alerting</li>
          <li>Develop custom applications that leverage your entire infrastructure</li>
          <li>Document and systematize your operational procedures</li>
        </ol>

        <h2>Strategic Insights</h2>

        <h3>Embrace Constraints as Features</h3>
        <p>
          Ancient hardware forces you to write efficient code and design lean systems.
          These constraints often lead to better architecture than unlimited resources would.
        </p>

        <h3>Permacomputing Philosophy</h3>
        <p>
          Long-running, low-power tasks on older hardware often provide better reliability
          than high-performance solutions. A Pentium II running for months is more valuable
          than a modern server that crashes weekly.
        </p>

        <h3>Learning Through Limitation</h3>
        <p>
          Working with diverse hardware teaches you more about computing fundamentals than
          any single modern system. The contrast between a Pentium II and a modern Framework
          laptop is a master class in computer architecture evolution.
        </p>

        <h3>Distributed Resilience</h3>
        <p>
          When your infrastructure spans multiple machines with different capabilities,
          you naturally build systems that can gracefully degrade and recover from failures.
        </p>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Key Takeaway</h3>
          <p>
            Resourceful infrastructure isn't about making do with less—it's about
            systematically maximizing the value of everything you have. The goal isn't
            to build the cheapest homelab, but to build the most thoughtfully distributed one.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Related:</strong> This framework pairs well with systematic thinking about
            <a href="/thinking/technical-depth-assessment" className="text-blue-600 hover:underline">technical depth assessment</a> and
            <a href="/workshop/microstudio-workflow" className="text-blue-600 hover:underline">microstudio workflow architecture</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
