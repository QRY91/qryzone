import Link from 'next/link'

export default function NixOSLearningRoadmap() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/journey" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Learning Journey
        </Link>
        <h1 className="text-4xl font-bold mb-4">NixOS Learning Roadmap</h1>
        <p className="text-xl text-gray-600 mb-6">
          Systematic approach to learning declarative system configuration and reproducible environments
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Strategic Learning Philosophy</h2>
          <p>
            Learning NixOS requires systematic approach due to its fundamentally different paradigm
            from traditional Linux distributions. This roadmap provides a structured path from
            concepts to production-ready configurations, emphasizing hands-on experience and
            practical application over theoretical knowledge.
          </p>
        </div>

        <h2>Pre-Implementation Preparation Strategy</h2>

        <h3>Why Learn Before Building</h3>
        <p>
          The strategic approach involves learning NixOS concepts and testing on expendable hardware
          before implementing on primary development machines. This reduces risk while building
          confidence with the declarative configuration paradigm.
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Risk Mitigation Benefits:</h4>
          <ul className="space-y-2">
            <li><strong>Confidence building:</strong> Master concepts before critical implementation</li>
            <li><strong>Mistake recovery:</strong> Learn troubleshooting on non-essential systems</li>
            <li><strong>Configuration development:</strong> Build and test modular configs safely</li>
            <li><strong>Timeline optimization:</strong> Arrive at new hardware with working knowledge</li>
          </ul>
        </div>

        <h2>Phase 0: Conceptual Foundation</h2>

        <h3>Essential NixOS Concepts</h3>
        <p>
          Before touching any configuration files, understanding the philosophical and technical
          foundations prevents confusion and provides context for later practical work.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Core Concepts to Master:</h4>
          <ul className="space-y-2">
            <li><strong>Declarative configuration:</strong> Entire system state in `/etc/nixos/configuration.nix`</li>
            <li><strong>Nix language fundamentals:</strong> Function syntax, attribute sets, modules</li>
            <li><strong>Package management paradigm:</strong> Immutable packages vs traditional package managers</li>
            <li><strong>Flakes methodology:</strong> Modern Nix approach with reproducible inputs</li>
            <li><strong>Generation management:</strong> Rollback capabilities and system versioning</li>
          </ul>
        </div>

        <h3>Learning Resources Strategy</h3>
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Recommended Learning Sequence:</h4>
          <ol className="space-y-2">
            <li><strong>NixOS Manual:</strong> First 3 chapters for foundational understanding</li>
            <li><strong>Nix Pills:</strong> Deep conceptual foundation and philosophy</li>
            <li><strong>Practical Nix flakes tutorial:</strong> Modern workflow patterns</li>
            <li><strong>"Nix from first principles":</strong> Blog series for systematic understanding</li>
          </ol>
        </div>

        <h2>Phase 1: Hands-On Experimentation</h2>

        <h3>Test Hardware Installation</h3>
        <p>
          Practical experience begins with installing NixOS on expendable hardware to understand
          the installation process, hardware detection, and basic system configuration.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Basic Installation Workflow:</h4>
          <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
            <div># Download NixOS ISO and boot from USB</div>
            <div># Connect to network and run installer</div>
            <div># System generates hardware-configuration.nix</div>
            <div># Create basic configuration.nix</div>
            <div># nixos-rebuild switch</div>
          </div>
        </div>

        <h3>First Configuration Development</h3>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Starter Configuration Example:</h4>
          <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
            <div>{'{ config, pkgs, ... }: {'}</div>
            <div>  boot.loader.systemd-boot.enable = true;</div>
            <div>  networking.hostName = "nixos-test";</div>
            <div>  </div>
            <div>  users.users.qry = {'{'}</div>
            <div>    isNormalUser = true;</div>
            <div>    extraGroups = [ "wheel" "networkmanager" ];</div>
            <div>  {'}; '}</div>
            <div>  </div>
            <div>  environment.systemPackages = with pkgs; [</div>
            <div>    vim git curl tmux</div>
            <div>  ];</div>
            <div>  </div>
            <div>  system.stateVersion = "24.05";</div>
            <div>{'}'}</div>
          </div>
        </div>

        <h2>Phase 2: Flakes Methodology</h2>

        <h3>Modern Nix Workflow</h3>
        <p>
          Flakes represent the current best practice for NixOS configuration management,
          providing reproducible inputs and cleaner project structure. Learning flakes
          early prevents having to migrate later.
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Flakes Architecture Benefits:</h4>
          <ul className="space-y-2">
            <li><strong>Reproducible inputs:</strong> Lock file ensures consistent dependency versions</li>
            <li><strong>Modular structure:</strong> Clean separation of concerns and reusable components</li>
            <li><strong>Version control friendly:</strong> Everything in git with proper dependency tracking</li>
            <li><strong>Cross-machine consistency:</strong> Same flake produces identical systems</li>
          </ul>
        </div>

        <h3>Flake Structure Development</h3>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Organized Configuration Layout:</h4>
          <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
            <div>~/nixos-config/</div>
            <div>├── flake.nix                 # Main flake definition</div>
            <div>├── flake.lock                # Locked dependency versions</div>
            <div>├── hosts/</div>
            <div>│   └── framework12/          # Host-specific configs</div>
            <div>├── modules/                  # Reusable components</div>
            <div>│   ├── terminal.nix</div>
            <div>│   ├── development.nix</div>
            <div>│   └── ai-tools.nix</div>
            <div>├── packages/                 # Custom packages</div>
            <div>│   ├── uroboro.nix</div>
            <div>│   └── wherewasi.nix</div>
            <div>└── users/</div>
            <div>    └── qry.nix              # User configuration</div>
          </div>
        </div>

        <h2>Phase 3: Production Implementation</h2>

        <h3>Hardware-Specific Optimization</h3>
        <p>
          Moving from test hardware to production systems requires hardware-specific
          optimizations and careful configuration of power management, audio, and
          device-specific features.
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Framework 12 Optimization Example:</h4>
          <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
            <div># Hardware-specific configuration</div>
            <div>boot.kernelPackages = pkgs.linuxPackages_latest;</div>
            <div>services.thermald.enable = true;</div>
            <div>services.auto-cpufreq.enable = true;</div>
            <div>hardware.bluetooth.enable = true;</div>
            <div>services.pipewire.enable = true;</div>
          </div>
        </div>

        <h3>Development Environment Integration</h3>
        <p>
          Production NixOS configurations should include comprehensive development tooling,
          from terminal environments to language-specific toolchains and AI development tools.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Development Module Structure:</h4>
          <ul className="space-y-2">
            <li><strong>Terminal environment:</strong> Shell, multiplexer, productivity tools</li>
            <li><strong>Editor configuration:</strong> Neovim with LSP servers and development plugins</li>
            <li><strong>Language toolchains:</strong> Go, Python, Rust, Node.js with version management</li>
            <li><strong>AI development stack:</strong> Ollama service, Python AI libraries, local models</li>
          </ul>
        </div>

        <h2>Phase 4: Custom Tool Integration</h2>

        <h3>Packaging Personal Tools</h3>
        <p>
          Advanced NixOS usage involves packaging your own tools and services, creating
          a completely declarative and reproducible development environment.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Custom Package Example:</h4>
          <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
            <div>{'# packages/uroboro.nix'}</div>
            <div>{'{ lib, buildGoModule, fetchFromGitHub }:'}</div>
            <div></div>
            <div>buildGoModule rec {'{'}</div>
            <div>  pname = "uroboro";</div>
            <div>  version = "1.0.0";</div>
            <div>  src = /home/qry/projects/uroboro;</div>
            <div>  vendorHash = "sha256-...";</div>
            <div>  </div>
            <div>  meta = with lib; {'{'}</div>
            <div>    description = "Self-documenting content pipeline";</div>
            <div>    license = licenses.mit;</div>
            <div>  {'}; '}</div>
            <div>{'}'}</div>
          </div>
        </div>

        <h3>Service Configuration</h3>
        <p>
          Systemd service integration allows your custom tools to run as proper system
          services with automatic startup, logging, and monitoring capabilities.
        </p>

        <h2>Learning Success Milestones</h2>

        <h3>Progressive Competency Markers</h3>
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Phase Completion Criteria:</h4>
          <ul className="space-y-3">
            <li><strong>Phase 0:</strong> Understand declarative paradigm and Nix language basics</li>
            <li><strong>Phase 1:</strong> Successfully install and configure NixOS on test hardware</li>
            <li><strong>Phase 2:</strong> Convert configuration to flakes and understand modular structure</li>
            <li><strong>Phase 3:</strong> Production system running with hardware optimizations</li>
            <li><strong>Phase 4:</strong> Custom tools packaged and integrated as system services</li>
          </ul>
        </div>

        <h2>Risk Management Strategy</h2>

        <h3>Backup and Recovery Planning</h3>
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Essential Safety Measures:</h4>
          <ul className="space-y-2">
            <li><strong>Backup current setup:</strong> Complete system backup before NixOS installation</li>
            <li><strong>Alternative boot media:</strong> Keep working Linux USB available</li>
            <li><strong>Configuration versioning:</strong> Git repository for all NixOS configurations</li>
            <li><strong>Generation management:</strong> Understand rollback procedures</li>
            <li><strong>Documentation discipline:</strong> Document all changes and reasoning</li>
          </ul>
        </div>

        <h2>Adapting This Roadmap</h2>

        <h3>For Individual Learning</h3>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <ol className="space-y-3">
            <li><strong>Assess your risk tolerance:</strong> How much downtime can you afford?</li>
            <li><strong>Identify test hardware:</strong> What systems can you experiment on safely?</li>
            <li><strong>Set learning timeline:</strong> How much time can you dedicate to each phase?</li>
            <li><strong>Define success criteria:</strong> What capabilities do you need before switching?</li>
            <li><strong>Plan backup strategies:</strong> How will you recover if things go wrong?</li>
          </ol>
        </div>

        <h3>For Teams and Organizations</h3>
        <ul>
          <li><strong>Support experimentation time:</strong> Allow team members to learn declarative configuration</li>
          <li><strong>Share learning resources:</strong> Create internal guides and configuration examples</li>
          <li><strong>Document institutional configurations:</strong> Build reusable modules for common setups</li>
          <li><strong>Gradual adoption strategy:</strong> Start with non-critical systems for team learning</li>
        </ul>

        <h2>Key Learning Insights</h2>

        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-3">
            <li><strong>Paradigm shift requires patience:</strong> Declarative thinking differs fundamentally from imperative system administration</li>
            <li><strong>Early mistakes are valuable:</strong> Learning recovery procedures builds confidence</li>
            <li><strong>Modular design pays off:</strong> Time invested in clean configuration structure saves future effort</li>
            <li><strong>Community resources are essential:</strong> Hardware-specific configurations often available from community</li>
            <li><strong>Documentation discipline creates reproducibility:</strong> Well-documented configs enable sharing and maintenance</li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Related Learning Journey</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/thinking/permacomputing-microstudio" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <h4 className="font-semibold">Permacomputing Microstudio Philosophy</h4>
              <p className="text-sm text-gray-600">Resilient, local-first development environments</p>
            </Link>
            <Link href="/journey/productivity-breakthrough" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
              <h4 className="font-semibold">Productivity Breakthrough</h4>
              <p className="text-sm text-gray-600">How transferable skills enable systematic learning</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
