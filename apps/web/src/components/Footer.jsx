/** Site footer: brand, in-page quick links, and social profiles. */
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Github,
            href: 'https://github.com/SeybaESIG',
            label: 'GitHub',
        },
        {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/seyba-t-749745234',
            label: 'LinkedIn',
        },
        {
            icon: Mail,
            href: 'mailto:contact.seyba25@gmail.com',
            label: 'Email',
        },
    ];
    const quickLinks = [{
        name: 'About',
        href: '#about'
    }, {
        name: 'Projects',
        href: '#projects'
    }, {
        name: 'Services',
        href: '#services'
    }, {
        name: 'Contact',
        href: '#contact'
    }];
    // Same hash navigation pattern as Header (see scrollToSection there).
    const scrollToSection = (href) => {
        if (location.pathname !== '/') {
            navigate({ pathname: '/', hash: href });
            return;
        }
        const id = href.replace(/^#/, '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return <footer className="bg-card border-t border-border">
        <div className="container-custom py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8 text-center">
                {/* Brand */}
                <div>
                    <Link
                        to="/"
                        onClick={(e) => {
                            if (location.pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="text-2xl font-bold transition-colors duration-200 hover:text-accent inline-block mb-4"
                    >
                        <span className="gradient-text">Seyba's{` `}</span>
                        <span className="text-foreground">Tech</span>
                    </Link>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                        Building scalable APIs, cloud-ready systems & automated infrastructure
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <span className="text-sm font-semibold tracking-wide uppercase text-foreground/90 mb-4 block">
                        Quick Links
                    </span>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {quickLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={{ pathname: '/', hash: link.href }}
                                onClick={(e) => {
                                    if (location.pathname === '/') {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }
                                }}
                                className="text-foreground/70 text-sm transition-colors duration-200 hover:text-accent"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <span className="text-sm font-semibold tracking-wide uppercase text-foreground/90 mb-4 block">
                        Connect
                    </span>
                    <div className="flex gap-3 justify-center">
                        {socialLinks.map(social => {
                            const Icon = social.icon;
                            const isMail = social.href.startsWith('mailto:');
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    {...(isMail
                                        ? {}
                                        : { target: '_blank', rel: 'noopener noreferrer' })}
                                    className="p-2.5 bg-background rounded-lg border border-border transition-all duration-200 hover:bg-accent/10 hover:border-accent/30 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                                    aria-label={social.label}
                                >
                                    <Icon size={18} className="text-foreground/70" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                <p className="text-foreground/60 text-sm">
                    © {currentYear} Seyba Tandia. All rights reserved.
                </p>
            </div>
        </div>
    </footer>;
};
export default Footer;