/**
 * Animated skill bars.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Coffee, Layers, Database, Box, GitBranch, Server } from 'lucide-react';

const SkillsProficiency = () => {
    const skills = [
        { name: 'Python', value: 99, icon: Code2 },
        { name: 'Java', value: 96, icon: Coffee },
        { name: 'PostgreSQL', value: 90, icon: Database },
        { name: 'Docker', value: 90, icon: Box },
        { name: 'Node.js', value: 95, icon: Server },
    ];

    return (
        <section id="skills" className="section-padding bg-background">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Core technologies and tools I use to build scalable backend systems
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border shadow-xl shadow-black/20">
                    <div className="space-y-8">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <div key={skill.name} className="relative">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-accent/10 rounded-lg">
                                                <Icon className="text-accent" size={20} />
                                            </div>
                                            <span className="font-semibold text-lg">{skill.name}</span>
                                        </div>
                                        <span className="text-accent font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
                                            {skill.value}%
                                        </span>
                                    </div>

                                    {/* Progress Bar Track */}
                                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                                        {/* Animated Fill */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                            className="h-full bg-accent rounded-full relative"
                                        >
                                            {/* Shine effect */}
                                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsProficiency;