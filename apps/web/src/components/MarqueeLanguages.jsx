import React from 'react';
import {
    Atom,
    Braces,
    Brackets,
    Code2,
    Coffee,
    Cpu,
    FileCode,
    Globe,
    Layers,
    Leaf,
    Palette,
    Server,
    Zap,
} from 'lucide-react';

const MarqueeLanguages = () => {
    const languages = [
        { name: 'Python', icon: Code2 },
        { name: 'Django', icon: Layers },
        { name: 'Java', icon: Coffee },
        { name: 'Spring Boot', icon: Cpu },
        { name: 'Node.js', icon: Server },
        { name: 'Express', icon: Zap },
        { name: 'TypeScript', icon: Braces },
        { name: 'React', icon: Atom },
        { name: 'Vue.js', icon: Leaf },
        { name: 'WordPress', icon: Globe },
        { name: 'HTML', icon: FileCode },
        { name: 'CSS', icon: Palette },
        { name: 'JavaScript', icon: Brackets },
    ];

    const duplicatedLanguages = [...languages, ...languages, ...languages, ...languages];

    return (
        <div
            id="skills-languages"
            className="w-full overflow-hidden bg-background py-8 relative flex items-center scroll-mt-24"
        >
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee-reverse pause-on-hover">
                {duplicatedLanguages.map((lang, index) => {
                    const Icon = lang.icon;
                    return (
                        <div
                            key={`${lang.name}-${index}`}
                            className="flex items-center gap-4 px-12 group cursor-default"
                        >
                            <Icon
                                size={40}
                                className="text-muted-foreground transition-colors duration-300 group-hover:text-accent"
                            />
                            <span className="text-2xl font-bold text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                                {lang.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MarqueeLanguages;
