/**
 * Project detail view driven by `projectsData` and the `:projectId` URL param.
 */
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Github,
    ExternalLink,
    Calendar,
    CheckCircle2,
    Layers,
    Database,
    DatabaseZap,
    CreditCard,
    Code2,
    Coffee,
    Wind,
    Box,
    Zap,
    Network,
    Webhook,
    Server,
    Clock
} from 'lucide-react';
import { projectsData } from '@/data/projectsData.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

/** Maps `technologies[].icon` strings from projectsData to Lucide components. */
const iconMap = {
    Layers,
    Database,
    DatabaseZap,
    CreditCard,
    Code2,
    Coffee,
    Wind,
    Box,
    Zap,
    Network,
    Webhook,
    Server,
    Clock
};

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find(p => p.id === projectId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl font-bold">Project Not Found</h1>
                        <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
                        <button onClick={() => navigate('/')} className="btn-primary inline-flex items-center gap-2">
                            <ArrowLeft size={18} /> Back to Home
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{`${project.title} - Seyba Tandia`}</title>
                <meta name="description" content={project.shortDescription} />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-background">
                <Header />

                <main className="flex-1 pt-24 pb-20">
                    <div className="container-custom max-w-5xl">
                        {/* Back Navigation */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-8"
                        >
                            <Link to="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                                <ArrowLeft size={18} />
                                <span>Back to Projects</span>
                            </Link>
                        </motion.div>

                        {/* Project Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6 mb-12"
                        >
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-full">
                                    <Calendar size={14} />
                                    {project.date}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                                {project.title}
                            </h1>

                            <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
                                {project.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        <Github size={20} />
                                        View Source
                                    </a>
                                )}
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary inline-flex items-center gap-2"
                                    >
                                        <ExternalLink size={20} />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>

                        {/* Main Image */}
                        {project.images && project.images.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/20 mb-16 aspect-video bg-muted"
                            >
                                <img
                                    src={project.images[0]}
                                    alt={`${project.title} preview`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        )}

                        {/* Content Grid */}
                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Left Column: Description & Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="lg:col-span-2 space-y-12"
                            >
                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold">Overview</h2>
                                    <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed">
                                        <p>{project.fullDescription}</p>
                                    </div>
                                </section>

                                <section className="space-y-6">
                                    <h2 className="text-2xl font-bold">Key Features</h2>
                                    <ul className="grid gap-4">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border">
                                                <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                                                <span className="text-foreground/90">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </motion.div>

                            {/* Right Column: Tech Stack Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-8"
                            >
                                <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                                    <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
                                    <div className="flex flex-col gap-4">
                                        {project.technologies.map((tech, index) => {
                                            const IconComponent = iconMap[tech.icon] || Code2;
                                            return (
                                                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 border border-border/50">
                                                    <div className="p-2 bg-background rounded-md shadow-sm">
                                                        <IconComponent className="text-accent" size={20} />
                                                    </div>
                                                    <span className="font-medium">{tech.name}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default ProjectDetailPage;