export default function FrameworkNixOSRoadmap() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Framework NixOS Development Roadmap
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Systematic approach to building a powerful, reproducible development environment
          using Framework hardware and NixOS for AI-enhanced development workflows.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>The Reproducible Development Vision</h2>
        <p>
          Traditional development environment setup is time-consuming, error-prone, and
          difficult to reproduce. The Framework + NixOS combination offers a unique
          opportunity: <strong>hardware designed for modification paired with an OS
          designed for reproducibility</strong>.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6">
          "Studio as Code" - Your entire development environment becomes a version-controlled,
          reproducible system that can be rebuilt identically on any compatible hardware.
        </blockquote>

        <h2>Hardware Foundation Analysis</h2>
        <p>
          Modern Framework laptops provide an excellent foundation for NixOS-based
          development environments, particularly for AI workloads:
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3 className="font-semibold mb-4">Optimal Configuration Elements</h3>
          <ul>
            <li><strong>CPU</strong>: 13th gen Intel (excellent Linux compatibility)</li>
            <li><strong>RAM</strong>: 48GB+ DDR5 (enables large local AI models)</li>
            <li><strong>Storage</strong>: 2TB+ NVMe primary + expansion cards</li>
            <li><strong>Modularity</strong>: Expansion cards for specialized workflows</li>
          </ul>
        </div>

        <h3>Hardware Compatibility Strategy</h3>
        <p>
          Framework's open hardware approach aligns well with NixOS's transparency
          philosophy. Both prioritize user control and modification over vendor lock-in.
          This combination provides:
        </p>

        <ul>
          <li><strong>Hardware transparency</strong>: Full control over components</li>
          <li><strong>Community support</strong>: Strong overlap between Framework and NixOS users</li>
          <li><strong>Long-term viability</strong>: Both platforms prioritize sustainability</li>
          <li><strong>Upgrade flexibility</strong>: Modular hardware meets modular software</li>
        </ul>

        <h2>Storage Architecture Planning</h2>
        <p>
          Framework's expansion card system enables sophisticated storage layouts that
          support multiple operating systems and specialized data organization:
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm my-6">
          <div>┌─ Primary 2TB NVMe ─────────────────────────┐</div>
          <div>│ 512GB  │ NixOS System & /home           │</div>
          <div>│ 512GB  │ AI Models & Local Data         │</div>
          <div>│ 1TB    │ Development Projects           │</div>
          <div>└────────────────────────────────────────────┘</div>
          <div>┌─ 1TB Expansion Card ───────────────────────┐</div>
          <div>│ 512GB  │ Secondary OS (testing/security) │</div>
          <div>│ 512GB  │ Shared data / backup space     │</div>
          <div>└────────────────────────────────────────────┘</div>
        </div>

        <h3>Multi-Boot Strategy</h3>
        <p>
          The expansion card system allows for risk-mitigation strategies during
          the NixOS transition:
        </p>

        <ol>
          <li><strong>Conservative approach</strong>: Start with familiar OS, add NixOS gradually</li>
          <li><strong>Parallel development</strong>: Maintain production environment while learning</li>
          <li><strong>Specialized environments</strong>: Dedicated OS for specific tasks</li>
        </ol>

        <h2>NixOS Adoption Framework</h2>
        <p>
          NixOS represents a paradigm shift in system configuration. Successful adoption
          requires systematic learning and gradual integration:
        </p>

        <h3>Phase 1: Foundation Building (Weeks 1-2)</h3>
        <div className="bg-blue-50 p-4 rounded-lg my-6">
          <h4 className="font-semibold mb-2">Core Concepts</h4>
          <ul>
            <li>Declarative system configuration</li>
            <li>Package management with Nix</li>
            <li>Understanding the Nix store</li>
            <li>Basic configuration.nix editing</li>
          </ul>

          <h4 className="font-semibold mb-2 mt-4">Practical Goals</h4>
          <ul>
            <li>Successful NixOS installation</li>
            <li>Hardware compatibility verification</li>
            <li>Basic desktop environment setup</li>
            <li>Network and driver configuration</li>
          </ul>
        </div>

        <h3>Phase 2: Development Environment (Weeks 3-4)</h3>
        <div className="bg-green-50 p-4 rounded-lg my-6">
          <h4 className="font-semibold mb-2">Tool Integration</h4>
          <ul>
            <li>Terminal multiplexer configuration</li>
            <li>Editor setup with language servers</li>
            <li>Development toolchain installation</li>
            <li>Git and version control integration</li>
          </ul>

          <h4 className="font-semibold mb-2 mt-4">Custom Package Creation</h4>
          <ul>
            <li>Package personal tools as Nix derivations</li>
            <li>Create reusable module configurations</li>
            <li>Implement dotfile management</li>
            <li>Set up automated backups</li>
          </ul>
        </div>

        <h3>Phase 3: Advanced Integration (Month 2)</h3>
        <div className="bg-purple-50 p-4 rounded-lg my-6">
          <h4 className="font-semibold mb-2">AI Workload Optimization</h4>
          <ul>
            <li>Local AI model management</li>
            <li>Memory optimization for large models</li>
            <li>Automated model deployment</li>
            <li>Performance monitoring setup</li>
          </ul>

          <h4 className="font-semibold mb-2 mt-4">System Automation</h4>
          <ul>
            <li>Flake-based configuration management</li>
            <li>Continuous integration for dotfiles</li>
            <li>Automated system updates</li>
            <li>Disaster recovery procedures</li>
          </ul>
        </div>

        <h2>Studio as Code Implementation</h2>
        <p>
          The ultimate goal is a completely reproducible development environment
          defined through code:
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm my-6">
          <div># ~/microstudio/flake.nix</div>
          <div>{'{'}</div>
          <div>  description = "Reproducible Development Environment";</div>
          <div>  </div>
          <div>  outputs = {'{ self, nixpkgs }: {'}</div>
          <div>    nixosConfigurations.framework = nixpkgs.lib.nixosSystem {'{'}</div>
          <div>      system = "x86_64-linux";</div>
          <div>      modules = [</div>
          <div>        ./hardware-configuration.nix</div>
          <div>        ./modules/ai-development.nix</div>
          <div>        ./modules/terminal-environment.nix</div>
          <div>        ./modules/development-tools.nix</div>
          <div>      ];</div>
          <div>    {'}'};</div>
          <div>  {'}'};</div>
          <div>{'}'}</div>
        </div>

        <h3>Modular Configuration Architecture</h3>
        <p>
          Breaking configuration into focused modules enables easier maintenance
          and sharing:
        </p>

        <ul>
          <li><strong>ai-development.nix</strong>: Local AI models, Python ML stack</li>
          <li><strong>terminal-environment.nix</strong>: Shell, multiplexer, CLI tools</li>
          <li><strong>development-tools.nix</strong>: Languages, editors, version control</li>
          <li><strong>monitoring.nix</strong>: System monitoring and alerting</li>
          <li><strong>security.nix</strong>: Hardening and security tools</li>
        </ul>

        <h2>AI Workload Optimization</h2>
        <p>
          Framework hardware with substantial RAM enables running large language
          models locally, but requires careful system tuning:
        </p>

        <h3>Memory Management Strategy</h3>
        <div className="bg-gray-50 p-4 rounded-lg my-6">
          <ul>
            <li><strong>Model sizing</strong>: Match model size to available RAM</li>
            <li><strong>Swap configuration</strong>: Minimize swap usage for AI workloads</li>
            <li><strong>Memory overcommit</strong>: Tune kernel parameters for large allocations</li>
            <li><strong>Process isolation</strong>: Separate AI workloads from system processes</li>
          </ul>
        </div>

        <h3>Model Management Automation</h3>
        <p>
          NixOS enables declarative AI model management through systemd services
          and automatic deployment:
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm my-6">
          <div># Declarative AI model configuration</div>
          <div>services.ollama = {'{'}</div>
          <div>  enable = true;</div>
          <div>  models = [</div>
          <div>    "codestral:22b"    # Large coding model</div>
          <div>    "llama3.2:70b"     # Reasoning tasks</div>
          <div>    "mistral:7b"       # Quick responses</div>
          <div>  ];</div>
          <div>  acceleration = "cpu";</div>
          <div>{'}'};</div>
        </div>

        <h2>Learning Resources and Community</h2>
        <p>
          Both Framework and NixOS have strong communities that provide excellent
          learning resources:
        </p>

        <h3>Essential Learning Path</h3>
        <ol>
          <li><strong>Nix Pills</strong>: Fundamental concepts and philosophy</li>
          <li><strong>NixOS Manual</strong>: Comprehensive official documentation</li>
          <li><strong>Flakes Tutorial</strong>: Modern Nix package management</li>
          <li><strong>Framework Community</strong>: Hardware-specific guides and tips</li>
        </ol>

        <h3>Community Integration</h3>
        <ul>
          <li><strong>Framework Forums</strong>: Hardware compatibility and modifications</li>
          <li><strong>NixOS Discourse</strong>: Configuration help and advanced topics</li>
          <li><strong>GitHub Discussions</strong>: Dotfiles sharing and troubleshooting</li>
          <li><strong>Matrix/Discord</strong>: Real-time community support</li>
        </ul>

        <h2>Risk Mitigation Strategies</h2>
        <p>
          Transitioning to NixOS requires careful risk management, especially for
          production development work:
        </p>

        <h3>Gradual Migration Approach</h3>
        <ul>
          <li><strong>VM learning</strong>: Practice NixOS in virtual machines first</li>
          <li><strong>Dual boot safety</strong>: Maintain familiar OS during transition</li>
          <li><strong>Configuration backups</strong>: Version control all system configs</li>
          <li><strong>Rollback capability</strong>: Leverage NixOS generation rollbacks</li>
        </ul>

        <h3>Productivity Continuity</h3>
        <ul>
          <li><strong>Tool compatibility</strong>: Verify all essential tools work on NixOS</li>
          <li><strong>Workflow preservation</strong>: Maintain familiar keybindings and shortcuts</li>
          <li><strong>Data synchronization</strong>: Ensure seamless data access across systems</li>
          <li><strong>Emergency procedures</strong>: Plan for system recovery scenarios</li>
        </ul>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Strategic Advantage</h3>
          <p>
            The Framework + NixOS combination provides unique advantages: hardware
            designed for user modification paired with an OS designed for user control.
            This creates a development environment that can evolve with your needs while
            maintaining complete reproducibility. The initial learning investment pays
            dividends in long-term flexibility and system reliability.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Related:</strong> This roadmap connects with
            <a href="/journey/nixos-learning-roadmap" className="text-blue-600 hover:underline"> NixOS learning progression</a> and
            <a href="/thinking/cli-first-development" className="text-blue-600 hover:underline"> CLI-first development environments</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
