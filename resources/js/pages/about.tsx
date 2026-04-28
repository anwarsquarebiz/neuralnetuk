import AboutHero from '@/components/about-hero';
import CTASection from '@/components/cta-section';
import HowWeWorkSection from '@/components/how-we-work';
import LeadershipSection from '@/components/leadership-section';
import LocationSection from '@/components/location-section';
import SlidingBanner from '@/components/sliding-banner';
import WhatWeOperateSection from '@/components/what-we-operate';
import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <MarketingLayout>
            <Head title="About Us - NeuralNet" />

            {/* 1. Hero - Opening Statement */}
            <AboutHero />

            {/* 2. Sliding Banner - Build, Deploy, Secure, Evaluate */}
            <SlidingBanner />

            {/* 3. How We Work */}
            <HowWeWorkSection />

            {/* 4. What We Operate Across */}
            <WhatWeOperateSection />

            {/* 5. Leadership Team & Our People */}
            <LeadershipSection />

            {/* 6. Location */}
            <LocationSection />

            {/* 7. Final CTA */}
            <CTASection />
        </MarketingLayout>
    );
}
