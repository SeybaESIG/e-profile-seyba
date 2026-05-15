/**
 * Landing page: stacked sections with hash targets for header/footer navigation.
 * Section order matches the scroll flow (hero → skills marquees → about → …).
 */
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
                    content="Online profile of Seyba Tandia, a Software engineering student at ESIG"
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