import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '@/data/projectsData.js';

const FeaturedProjects = () => {
    const navigate = useNavigate();

    const handleProjectClick = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <section id="projects" className="section-padding bg-background scroll-mt-24">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured projects</h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        A selection of my recent work 
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => handleProjectClick(project.id)}
                            className={`group cursor-pointer ${project.featured ? 'md:col-span-2' : ''
                                } bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 flex flex-col`}
                        >
                            {/* Project Thumbnail */}
                            <div className={`${project.featured ? 'aspect-[21/9]' : 'aspect-video'} bg-gradient-to-br from-muted to-card relative overflow-hidden`}>
                                {project.images && project.images.length > 0 ? (
                                    <img
                                        src={project.images[0]}
                                        alt={`Screenshot preview of ${project.title}`}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center space-y-3">
                                            <div className={`${project.featured ? 'w-20 h-20' : 'w-16 h-16'} mx-auto rounded-xl bg-accent/20 flex items-center justify-center`}>
                                                <Github className="text-accent" size={project.featured ? 40 : 32} />
                                            </div>
                                            <p className="text-sm text-muted-foreground">Project Preview</p>
                                        </div>
                                    </div>
                                )}

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <span className="flex items-center gap-2 text-foreground font-medium bg-accent/20 px-6 py-3 rounded-full border border-accent/30">
                                        View Details <ArrowRight size={18} />
                                    </span>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className={`${project.featured ? 'text-2xl' : 'text-xl'} font-semibold group-hover:text-accent transition-colors`}>
                                        {project.title}
                                    </h3>
                                    <span className="text-xs font-medium px-2.5 py-1 bg-muted rounded-md text-muted-foreground">
                                        {project.date}
                                    </span>
                                </div>

                                <p className="text-foreground/70 leading-relaxed mb-6 flex-1">
                                    {project.shortDescription}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech.name}
                                            className="px-3 py-1 bg-muted/50 text-foreground/80 text-sm font-medium rounded-lg border border-border/50"
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="px-3 py-1 bg-muted/50 text-foreground/80 text-sm font-medium rounded-lg border border-border/50">
                                            +{project.technologies.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/SeybaESIG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 btn-secondary"
                    >
                        View all projects on GitHub
                        <ExternalLink size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;