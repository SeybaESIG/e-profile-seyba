import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

/** Profile image: `public/profile/Photo_CV.jpg` */
const PROFILE_PHOTO_SRC = '/profile/Photo_CV.jpg';

const HeroSection = () => {
    const [photoFailed, setPhotoFailed] = useState(false);
    const scrollToSection = href => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return <section className="relative min-h-screen flex items-start lg:items-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]" />
        </div>

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

        <div className="container-custom relative z-10 pt-20 pb-12 lg:pb-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div initial={{
                    opacity: 0,
                    y: 30
                }} animate={{
                    opacity: 1,
                    y: 0
                }} transition={{
                    duration: 0.6
                }} className="space-y-6">
                    <motion.h1 initial={{
                        opacity: 0,
                        y: 20
                    }} animate={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        duration: 0.6,
                        delay: 0.2
                    }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{
                        letterSpacing: '-0.02em'
                    }}>
                        Hi, I'm{' '}
                        <span className="gradient-text">Seyba Tandia</span>
                    </motion.h1>

                    <motion.p initial={{
                        opacity: 0,
                        y: 20
                    }} animate={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        duration: 0.6,
                        delay: 0.3
                    }} className="text-xl md:text-2xl font-semibold text-foreground/90">
                        Software Engineer
                    </motion.p>

                    <motion.p initial={{
                        opacity: 0,
                        y: 20
                    }} animate={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        duration: 0.6,
                        delay: 0.4
                    }} className="text-lg text-foreground/70 leading-relaxed max-w-prose">
                        Building scalable APIs, cloud-ready systems & automated infrastructure
                    </motion.p>

                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} animate={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        duration: 0.6,
                        delay: 0.5
                    }} className="flex flex-wrap gap-4 pt-4">
                        <button onClick={() => scrollToSection('#contact')} className="btn-primary flex items-center gap-2">
                            Contact Me
                            <ArrowRight size={18} />
                        </button>
                        <button onClick={() => scrollToSection('#projects')} className="btn-secondary flex items-center gap-2">
                            View My Work
                            <Download size={18} />
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Content - Developer Photo */}
                <motion.div initial={{
                    opacity: 0,
                    scale: 0.95
                }} animate={{
                    opacity: 1,
                    scale: 1
                }} transition={{
                    duration: 0.6,
                    delay: 0.3
                }} className="relative">
                    <div className="relative aspect-square max-w-md mx-auto">
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

                        {/* Photo Container — circular */}
                        <div className="relative h-full w-full rounded-full overflow-hidden bg-gradient-to-br from-accent/10 to-blue-500/10 p-1">
                            <div className="bg-card h-full w-full rounded-full overflow-hidden flex items-center justify-center">
                                {!photoFailed ? (
                                    <img
                                        src={PROFILE_PHOTO_SRC}
                                        alt="photo of Seyba Tandia"
                                        className="h-full w-full object-cover"
                                        onError={() => setPhotoFailed(true)}
                                    />
                                ) : (
                                    <div className="h-full w-full bg-gradient-to-br from-muted to-card flex items-center justify-center rounded-full">
                                        <div className="text-center space-y-4">
                                            <div className="w-32 h-32 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                                                <span className="text-5xl font-bold text-accent">ST</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground">Add photo at public/profile/Photo_CV.jpg</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

    </section>;
};
export default HeroSection;