import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = ['about', 'services', 'backend-tools', 'projects'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            setActiveSection(current || '');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Skills', href: '#backend-tools' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-transparent'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-2xl font-bold transition-colors duration-200 hover:text-accent flex items-center gap-2.5"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        <span className="gradient-text">Seyba's</span>
                        <span className="text-foreground">Tech</span>
                        <svg
                            viewBox="0 0 3 2"
                            className="h-6 w-10 shrink-0 rounded-sm border border-border/60 shadow-sm"
                            aria-hidden
                        >
                            <rect width="1" height="2" fill="#14B53A" />
                            <rect x="1" width="1" height="2" fill="#FCD116" />
                            <rect x="2" width="1" height="2" fill="#CE1126" />
                        </svg>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const sectionId = link.href.substring(1);
                            const isActive = activeSection === sectionId;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    className={`relative text-sm font-medium transition-colors duration-200 ${isActive ? 'text-accent' : 'text-foreground/80 hover:text-foreground'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#contact');
                        }}
                        className="hidden md:block btn-primary"
                    >
                        Contact Me
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-card border-t border-border overflow-hidden"
                    >
                        <div className="container-custom py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    className="block text-lg font-medium text-foreground/80 hover:text-accent transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('#contact');
                                }}
                                className="block w-full text-center btn-primary"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;