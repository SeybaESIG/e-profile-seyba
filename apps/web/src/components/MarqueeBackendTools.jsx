/** Infinite horizontal scroll of backend tools. */
import React from 'react';
import {
    Box,
    Database,
    Github,
    GitBranch,
    Lock,
    Network,
    Server,
    Cloud,
    Workflow,
    Monitor,
} from 'lucide-react';

const MarqueeBackendTools = () => {
    const tools = [
        { name: 'PostgreSQL', icon: Database },
        { name: 'REST API', icon: Network },
        { name: 'Authentication', icon: Lock },
        { name: 'MySQL', icon: Database },
        { name: 'Git', icon: GitBranch },
        { name: 'GitHub', icon: Github },
        { name: 'Docker', icon: Box },
        { name: 'Kubernetes', icon: Cloud },
        { name: 'Redis', icon: Database },
        { name: 'CI/CD pipelines', icon: Workflow },
        { name: 'Windows Server', icon: Monitor },
        { name: 'Linux', icon: Server },
    ];

    // Repeat the list so the CSS marquee loop has no visible seam.
    const duplicatedTools = [...tools, ...tools, ...tools, ...tools];

    return (
        <section
            id="backend-tools"
            className="w-full overflow-hidden bg-card border-y border-border py-8 relative flex items-center scroll-mt-24"
        >
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee pause-on-hover">
                {duplicatedTools.map((tool, index) => {
                    const Icon = tool.icon;
                    return (
                        <div
                            key={`${tool.name}-${index}`}
                            className="flex items-center gap-4 px-12 group cursor-default"
                        >
                            <Icon
                                size={40}
                                className="text-muted-foreground shrink-0 transition-colors duration-300 group-hover:text-accent"
                            />
                            <span className="text-2xl font-bold text-muted-foreground transition-colors duration-300 group-hover:text-foreground whitespace-nowrap">
                                {tool.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default MarqueeBackendTools;
