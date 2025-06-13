export default function NixOSLearningProgression() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          NixOS Learning Progression
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Systematic journey for mastering declarative system configuration, from basic
          concepts to advanced infrastructure management using modern Nix approaches.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>The Declarative Learning Philosophy</h2>
        <p>
          NixOS represents a fundamental paradigm shift from traditional Linux administration.
          Success requires <strong>unlearning imperative system management</strong> and
          embracing declarative configuration thinking. This learning progression builds
          understanding systematically, from core concepts to advanced implementation.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6">
          "Learn NixOS concepts before touching production hardware. The paradigm shift
          is significant enough that hands-on experimentation should follow conceptual
          understanding, not replace it."
        </blockquote>

        <h2>Pre-Implementation Learning Strategy</h2>
        <p>
          The optimal NixOS learning approach begins with conceptual foundation building
          before attempting system installation:
        </p>

        <h3>Phase 0: Conceptual Foundation (Week 1)</h3>
        <div className="bg-blue-50 p-4 rounded-lg my-6">
          <h4 className="font-semibold mb-2">Core Concepts to Master</h4>
          <ul>
            <li><strong>Declarative vs. Imperative</strong>: System state as code rather than commands</li>
            <li><strong>Nix Language Basics</strong>: Functional language fundamentals</li>
            <li><strong>The Nix Store</strong>: Immutable package storage and derivations</li>
            <li><strong>Configuration.nix</strong>: System specification as single source of truth</li>
            <li><strong>Flakes</strong>: Modern dependency management and reproducibility</li>
          </ul>

          <h4 className="font-semibold mb-2 mt-4">Essential Learning Resources</h4>
          <ol>
            <li>NixOS Manual (chapters 1-3): Official conceptual foundation</li>
            <li>Nix Pills: Deep conceptual understanding</li>
            <li>Practical Nix Flakes Tutorial: Modern workflow patterns</li>
            <li>"Nix from First Principles": Community explanations</li>
          </ol>
        </div>

        <h3>Phase 1: Controlled Experimentation (Week 2)</h3>
        <p>
          <strong>Goal</strong>: Hands-on experience with low-stakes hardware before
          production deployment.
        </p>

        <div className="bg-green-50 p-4 rounded-lg my-6">
          <h4 className="font-semibold mb-2">Safe Learning Environment</h4>
          <ul>
            <li>Virtual machine installation for initial practice</li>
            <li>Older hardware testing for real hardware experience</li>
            <li>Documentation of every configuration change</li>
            <li>Systematic exploration of system rebuilds</li>
          </ul>

          <h4 className="font-semibold mb-2 mt-4">First Configuration Framework</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mt-2">
            <div># /etc/nixos/configuration.nix - learning baseline</div>
            <div>{'{ config, pkgs, ... }: {'}</div>
            <div>  # Boot configuration</div>
            <div>  boot.loader.systemd-boot.enable = true;</div>
            <div>  </div>
            <div>  # Network and hostname</div>
            <div>  networking.hostName = "nixos-learning";</div>
            <div>  </div>
            <div>  # User management</div>
            <div>  users.users.learner = {'{'}</div>
            <div>    isNormalUser = true;</div>
            <div>    extraGroups = [ "wheel" "networkmanager" ];</div>
            <div>  {'}'};</div>
            <div>  </div>
            <div>  # System packages</div>
            <div>  environment.systemPackages = with pkgs; [</div>
            <div>    vim git curl</div>
            <div>  ];</div>
            <div>{'}'}</div>
          </div>
        </div>

        <h3>Phase 2: Modern Nix with Flakes (Week 3)</h3>
        <p>
          <strong>Goal</strong>: Transition to flakes-based configuration management for
          reproducibility and modern best practices.
        </p>

        <div className="bg-purple-50 p-4 rounded-lg my-6">
          <h4 className="font-semibold mb-2">Flakes Introduction</h4>
          <p className="text-sm mb-3">
            Flakes provide dependency locking, reproducible builds, and composable
            configuration management. They represent the modern NixOS approach.
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div># flake.nix - modern configuration entry point</div>
            <div>{'{'}</div>
            <div>  description = "Learning System Configuration";</div>
            <div>  </div>
            <div>  inputs = {'{'}</div>
            <div>    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";</div>
            <div>  {'}'};</div>
            <div>  </div>
            <div>  outputs = {'{ self, nixpkgs }: {'}</div>
            <div>    nixosConfigurations.learning = nixpkgs.lib.nixosSystem {'{'}</div>
            <div>      system = "x86_64-linux";</div>
            <div>      modules = [</div>
            <div>        ./hardware-configuration.nix</div>
            <div>        ./configuration.nix</div>
            <div>      ];</div>
            <div>    {'}'};</div>
            <div>  {'}'};</div>
            <div>{'}'}</div>
          </div>

          <h4 className="font-semibold mb-2 mt-4">Flakes Workflow Mastery</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div># Essential flakes commands</div>
            <div>sudo nixos-rebuild switch --flake .#learning</div>
            <div>nix flake update                    # Update dependencies</div>
            <div>nix flake show                     # Display configuration</div>
            <div>nix flake check                    # Validate configuration</div>
          </div>
        </div>

        <h2>Production Implementation Phases</h2>
        <p>
          After establishing conceptual foundation and safe experimentation, systematic
          production deployment follows proven patterns:
        </p>

        <h3>Phase 3: Production Hardware Setup (Weeks 4-5)</h3>
        <div className="bg-yellow-50 p-4 rounded-lg my-6">
          <h4 className="font-semibold mb-2">Day-One Installation Strategy</h4>
          <ul>
            <li><strong>Pre-installation preparation</strong>: Download latest installer, backup existing system</li>
            <li><strong>Hardware-specific configuration</strong>: Framework laptop optimizations</li>
            <li><strong>Partition planning</strong>: EFI, swap, root, and expansion storage</li>
            <li><strong>Network and driver setup</strong>: WiFi, Bluetooth, audio configuration</li>
          </ul>

          <h4 className="font-semibold mb-2 mt-4">Hardware Optimization Example</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div># Hardware-specific optimizations</div>
            <div>boot.kernelPackages = pkgs.linuxPackages_latest;</div>
            <div>services.thermald.enable = true;</div>
            <div>services.auto-cpufreq.enable = true;</div>
            <div>hardware.bluetooth.enable = true;</div>
            <div>hardware.bluetooth.powerOnBoot = true;</div>
          </div>
        </div>

        <h3>Phase 4: Modular Architecture Design (Weeks 6-7)</h3>
        <p>
          <strong>Goal</strong>: Create maintainable, reusable configuration architecture
          that scales with complexity.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg my-6">
          <h4 className="font-semibold mb-2">Configuration Organization Strategy</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div>~/nixos-config/</div>
            <div>├── flake.nix                 # Main configuration entry</div>
            <div>├── flake.lock               # Dependency lock file</div>
            <div>├── hosts/                   # Machine-specific configs</div>
            <div>│   └── framework/</div>
            <div>│       ├── default.nix</div>
            <div>│       └── hardware.nix</div>
            <div>├── modules/                 # Reusable modules</div>
            <div>│   ├── terminal.nix</div>
            <div>│   ├── development.nix</div>
            <div>│   ├── ai-tools.nix</div>
            <div>│   └── desktop.nix</div>
            <div>├── packages/                # Custom packages</div>
            <div>│   ├── uroboro.nix</div>
            <div>│   └── wherewasi.nix</div>
            <div>└── users/</div>
            <div>    └── qry.nix             # User-specific config</div>
          </div>

          <h4 className="font-semibold mb-2 mt-4">Module Design Principles</h4>
          <ul>
            <li><strong>Single responsibility</strong>: Each module handles one concern</li>
            <li><strong>Configurable interfaces</strong>: Parameters for customization</li>
            <li><strong>Dependency clarity</strong>: Explicit module dependencies</li>
            <li><strong>Reusability focus</strong>: Modules work across different hosts</li>
          </ul>
        </div>

        <h3>Phase 5: Development Environment Integration (Weeks 8-9)</h3>
        <div className="bg-blue-50 p-4 rounded-lg my-6">
          <h4 className="font-semibold mb-2">Terminal and Shell Configuration</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div># modules/terminal.nix</div>
            <div>{'{ pkgs, ... }: {'}</div>
            <div>  programs.zsh.enable = true;</div>
            <div>  </div>
            <div>  environment.systemPackages = with pkgs; [</div>
            <div>    zellij          # Terminal multiplexer</div>
            <div>    neovim          # Editor</div>
            <div>    ripgrep         # Fast search</div>
            <div>    fd              # File finder</div>
            <div>    bat             # Better cat</div>
            <div>    fzf             # Fuzzy finder</div>
            <div>  ];</div>
            <div>{'}'}</div>
          </div>

          <h4 className="font-semibold mb-2 mt-4">AI Development Tools</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div># modules/ai-tools.nix</div>
            <div>{'{ pkgs, ... }: {'}</div>
            <div>  services.ollama = {'{'}</div>
            <div>    enable = true;</div>
            <div>    acceleration = "cpu";</div>
            <div>  {'}'};</div>
            <div>  </div>
            <div>  environment.systemPackages = with pkgs; [</div>
            <div>    aider-chat      # AI pair programming</div>
            <div>    python3Full     # Python with all modules</div>
            <div>  ];</div>
            <div>{'}'}</div>
          </div>
        </div>

        <h3>Phase 6: Custom Package Development (Weeks 10-11)</h3>
        <p>
          <strong>Goal</strong>: Package personal tools as Nix derivations for system integration.
        </p>

        <div className="bg-green-50 p-4 rounded-lg my-6">
          <h4 className="font-semibold mb-2">Custom Package Creation</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div># packages/uroboro.nix</div>
            <div>{'{ pkgs, buildGoModule, fetchFromGitHub }:'}</div>
            <div></div>
            <div>buildGoModule rec {'{'}</div>
            <div>  pname = "uroboro";</div>
            <div>  version = "0.1.0";</div>
            <div>  </div>
            <div>  src = fetchFromGitHub {'{'}</div>
            <div>    owner = "qry91";</div>
            <div>    repo = "uroboro";</div>
            <div>    rev = "v${'{'}version{'}'}";</div>
            <div>    sha256 = "sha256-AAAA...";</div>
            <div>  {'}'};</div>
            <div>  </div>
            <div>  vendorSha256 = "sha256-BBBB...";</div>
            <div>  </div>
            <div>  meta = with pkgs.lib; {'{'}</div>
            <div>    description = "Context capture tool";</div>
            <div>    license = licenses.mit;</div>
            <div>  {'}'};</div>
            <div>{'}'}</div>
          </div>
        </div>

        <h2>Advanced Learning Objectives</h2>
        <p>
          Advanced NixOS mastery involves sophisticated system management and
          infrastructure-as-code practices:
        </p>

        <h3>System State Management</h3>
        <ul>
          <li><strong>Generation management</strong>: Rollback and version control strategies</li>
          <li><strong>Secrets management</strong>: Secure handling of sensitive configuration</li>
          <li><strong>Service orchestration</strong>: SystemD integration and custom services</li>
          <li><strong>Network configuration</strong>: Advanced networking and firewall setup</li>
        </ul>

        <h3>Infrastructure Scaling</h3>
        <ul>
          <li><strong>Multi-machine management</strong>: Deploy configurations across systems</li>
          <li><strong>Cross-compilation</strong>: Build for different architectures</li>
          <li><strong>Continuous integration</strong>: Automated configuration testing</li>
          <li><strong>Community contribution</strong>: Upstream package and module development</li>
        </ul>

        <h2>Learning Validation Framework</h2>
        <p>
          Establish clear criteria for evaluating NixOS competency at each learning phase:
        </p>

        <h3>Competency Milestones</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">Basic Competency</h4>
            <ul className="text-sm">
              <li>Understand declarative vs. imperative concepts</li>
              <li>Create and modify configuration.nix</li>
              <li>Install packages and enable services</li>
              <li>Perform system rebuilds successfully</li>
              <li>Use rollback functionality when needed</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-2">Advanced Competency</h4>
            <ul className="text-sm">
              <li>Design modular flakes architecture</li>
              <li>Create custom package derivations</li>
              <li>Manage secrets and sensitive data</li>
              <li>Configure complex services and networking</li>
              <li>Contribute to NixOS community</li>
            </ul>
          </div>
        </div>

        <h3>Practical Assessment Exercises</h3>
        <ol>
          <li><strong>Configuration Recreation</strong>: Reproduce system from scratch using only flake.nix</li>
          <li><strong>Package Creation</strong>: Package a personal tool as Nix derivation</li>
          <li><strong>Service Integration</strong>: Deploy and configure a complex service stack</li>
          <li><strong>Problem Resolution</strong>: Debug and fix configuration issues systematically</li>
          <li><strong>Documentation</strong>: Document configuration for others to understand and use</li>
        </ol>

        <h2>Common Learning Pitfalls and Solutions</h2>

        <h3>Conceptual Challenges</h3>
        <ul>
          <li><strong>Imperative thinking</strong>: Attempting to manually modify system state</li>
          <li><strong>Configuration complexity</strong>: Over-engineering initial setups</li>
          <li><strong>Dependency confusion</strong>: Misunderstanding Nix store and package relationships</li>
          <li><strong>Update anxiety</strong>: Fear of system changes breaking configurations</li>
        </ul>

        <h3>Mitigation Strategies</h3>
        <ul>
          <li><strong>Start simple</strong>: Begin with minimal configurations and add complexity gradually</li>
          <li><strong>Version control everything</strong>: Track all configuration changes</li>
          <li><strong>Test systematically</strong>: Validate changes in safe environments first</li>
          <li><strong>Community engagement</strong>: Join NixOS communities for support and learning</li>
        </ul>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Learning Philosophy</h3>
          <p>
            NixOS learning succeeds through patient conceptual building rather than
            rushed hands-on experimentation. The paradigm shift from imperative to
            declarative system management requires unlearning established patterns.
            Invest time in understanding the underlying principles before attempting
            complex configurations. The initial learning curve is steep, but the
            long-term benefits of reproducible, version-controlled infrastructure
            justify the investment.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Related:</strong> This learning progression connects with
            <a href="/journey/framework-nixos-roadmap" className="text-blue-600 hover:underline"> Framework NixOS development roadmap</a> and
            <a href="/thinking/cli-first-development" className="text-blue-600 hover:underline"> CLI-first development strategies</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
