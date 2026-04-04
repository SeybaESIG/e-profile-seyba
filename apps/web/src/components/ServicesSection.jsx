import React from 'react';
import { motion } from 'framer-motion';
import { Server, Network, Database, TestTube2, Workflow, Cog } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: Server,
            title: 'Backend Development',
            description:
                'Building scalable server-side applications with Python, Django, DRF, Java, Spring Boot, Node.js, and Express.',
            featured: false,
        },
        {
            icon: Network,
            title: 'API Design',
            description:
                'Designing REST APIs with authentication, validation, pagination, and clear business logic.',
            featured: false,
        },
        {
            icon: Database,
            title: 'Database Design',
            description:
                'Working with PostgreSQL, MySQL, Redis, and PL/SQL for modeling, optimization, and performance.',
            featured: false,
        },
        {
            icon: TestTube2,
            title: 'Testing & Quality',
            description:
                'Writing unit, integration, and automated tests with Pytest, JUnit, and Jest.',
            featured: false,
        },
        {
            icon: Workflow,
            title: 'DevOps & Deployment',
            description:
                'Using Docker, Kubernetes, and CI/CD pipelines to support reliable delivery.',
            featured: false,
        },
        {
            icon: Cog,
            title: 'Systems & Automation',
            description:
                'Developing modular tools and automation scripts for internal operations and security checks.',
            featured: false,
        },
    ];

    return (
        <section id="services" className="section-padding bg-card">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What I do</h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Specialized services for building modern backend systems
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group ${service.featured
                                    ? 'md:col-span-2 bg-gradient-to-br from-accent/5 to-blue-500/5 border-accent/20'
                                    : 'bg-background border-border'
                                    } rounded-xl p-8 border transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1`}
                            >
                                <div className={`flex ${service.featured ? 'flex-col md:flex-row md:items-center' : 'flex-col'} gap-6`}>
                                    <div className={`${service.featured ? 'p-4' : 'p-3'} bg-accent/10 rounded-xl w-fit transition-transform duration-300 group-hover:scale-110`}>
                                        <Icon className="text-accent" size={service.featured ? 32 : 24} />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className={`${service.featured ? 'text-2xl' : 'text-xl'} font-semibold mb-3`}>
                                            {service.title}
                                        </h3>
                                        <p className="text-foreground/70 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
