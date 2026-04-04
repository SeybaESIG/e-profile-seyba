import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Workflow } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="section-padding bg-background">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
                    
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-lg shadow-black/10"
                    >
                        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                            <p>
                                I'm a backend developer and software engineering student at ESIG, focused on building scalable systems that power modern applications. My expertise lies in creating robust APIs, designing efficient databases, and implementing DevOps practices that streamline the development lifecycle.
                            </p>
                            <p>
                                I believe that great software is built on a foundation of clean architecture, comprehensive testing, and automated workflows. My goal is to start as a backend software engineer and grow into roles in cloud engineering, DevOps, and cloud security, where I can design, deploy, and secure scalable infrastructure.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education & Interests Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-card rounded-2xl p-8 border border-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                        >
                            <div className="flex items-start gap-5">
                                <div className="p-4 bg-accent/10 rounded-xl">
                                    <GraduationCap className="text-accent" size={28} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-4">Education</h3>

                                    <ul className="space-y-4 text-foreground/80">
                                        <li className="flex items-start gap-3">
                                            <span className="text-accent mt-1.5 text-sm shrink-0">✦</span>
                                            <div className="space-y-1 min-w-0">
                                                <p className="text-foreground/90 font-medium text-lg leading-snug">
                                                    Business Information Systems
                                                </p>
                                                <p className="text-foreground/60">ESIG (Delémont, Switzerland)</p>
                                                <p className="text-accent/80 text-sm font-medium">Aug 2024 – Jun 2026</p>
                                            </div>
                                        </li>

                                        <li className="flex items-start gap-3">
                                            <span className="text-accent mt-1.5 text-sm shrink-0">✦</span>
                                            <div className="space-y-1 min-w-0">
                                                <p className="text-foreground/90 font-medium text-lg leading-snug">
                                                    Bachelor of Business Administration
                                                </p>
                                                <p className="text-foreground/60">IFM (Geneva, Switzerland)</p>
                                                <p className="text-accent/80 text-sm font-medium">Apr 2018 – Jun 2021</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Interests */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-card rounded-2xl p-8 border border-border transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                        >
                            <div className="flex items-start gap-5">
                                <div className="p-4 bg-accent/10 rounded-xl">
                                    <Workflow className="text-accent" size={28} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-4">Current Focus</h3>

                                    <ul className="space-y-3 text-foreground/80">
                                        <li className="flex items-start gap-3">
                                            <span className="text-accent mt-1.5 text-sm shrink-0">✦</span>
                                            <span>Backend performance, security, and scalability</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-accent mt-1.5 text-sm shrink-0">✦</span>
                                            <span>Designing and implementing CI/CD pipelines (GitHub Actions, Docker)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-accent mt-1.5 text-sm shrink-0">✦</span>
                                            <span>Containerization and cloud-native development</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-accent mt-1.5 text-sm shrink-0">✦</span>
                                            <span>Exploring cloud platforms and infrastructure as code</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;