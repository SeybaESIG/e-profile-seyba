import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import ServicesSection from '@/components/ServicesSection.jsx';
import SkillsProficiency from '@/components/SkillsProficiency.jsx';
import MarqueeBackendTools from '@/components/MarqueeBackendTools.jsx';
import MarqueeLanguages from '@/components/MarqueeLanguages.jsx';
import FeaturedProjects from '@/components/FeaturedProjects.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import Footer from '@/components/Footer.jsx';
import { Toaster } from '@/components/ui/toaster';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Seyba Tandia - Software Engineering Student</title>
                <meta
                    name="description"
                    content="Backend developer specializing in Python, Django, PostgreSQL, and scalable API development. Software engineering student at ESIG with expertise in DevOps and cloud infrastructure."
                />
            </Helmet>

            <div className="min-h-screen">
                <Header />
                <main>
                    <HeroSection />
                    <MarqueeBackendTools />
                    <MarqueeLanguages />
                    <SkillsProficiency />
                    <AboutSection />
                    <ServicesSection />
                    <FeaturedProjects />
                    <ContactForm />
                </main>
                <Footer />
                <Toaster />
            </div>
        </>
    );
};

export default HomePage;