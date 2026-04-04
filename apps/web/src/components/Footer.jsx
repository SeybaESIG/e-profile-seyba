import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
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
            href: 'mailto:sayba11@icloud.com',
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
    const scrollToSection = href => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return <footer className="bg-card border-t border-border">
        <div className="container-custom py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Brand */}
                <div>
                    <a href="#" onClick={e => {
                        e.preventDefault();
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }} className="text-2xl font-bold transition-colors duration-200 hover:text-accent inline-block mb-4">
                        <span className="gradient-text">Seyba's{` `}</span>
                        <span className="text-foreground">Tech</span>
                    </a>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                        Building scalable APIs, cloud-ready systems & automated infrastructure
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <span className="text-sm font-semibold tracking-wide uppercase text-foreground/90 mb-4 block">
                        Quick Links
                    </span>
                    <div className="flex flex-wrap gap-4">
                        {quickLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
                            e.preventDefault();
                            scrollToSection(link.href);
                        }} className="text-foreground/70 text-sm transition-colors duration-200 hover:text-accent">
                            {link.name}
                        </a>)}
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <span className="text-sm font-semibold tracking-wide uppercase text-foreground/90 mb-4 block">
                        Connect
                    </span>
                    <div className="flex gap-3">
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
            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-foreground/60 text-sm">
                    © {currentYear} Seyba Tandia. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-foreground/60 text-sm transition-colors duration-200 hover:text-accent">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-foreground/60 text-sm transition-colors duration-200 hover:text-accent">
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>
    </footer>;
};
export default Footer;