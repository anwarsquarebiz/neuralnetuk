import AboutHero from '@/components/about-hero';
import AboutNeuralNet from '@/components/about-neuralnet';
import BrandTrustSection from '@/components/brand-trust';
import CoreValues from '@/components/core-values';
import CTASection from '@/components/cta-section';
import CultureSection from '@/components/culture-section';
import ImpactSection from '@/components/impact-section';
import LeadershipSection from '@/components/leadership-section';
import VisionMission from '@/components/vision-mission';
import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <MarketingLayout>
            <Head title="About Us - NeuralNet" />

            {/* 1. Hero */}
            <AboutHero />

            {/* 2. Profile */}
            <AboutNeuralNet />

            {/* 3. Vision & Mission */}
            <VisionMission />

            {/* 4. Global Impact */}
            <ImpactSection />

            {/* 5. Core Values */}
            <CoreValues />

            {/* 6. Our Culture */}
            <CultureSection />

            {/* 7. Leadership Team */}
            <LeadershipSection />

            {/* 8. Brand Trust */}
            <BrandTrustSection />

            {/* 9. Final CTA */}
            <CTASection />
        </MarketingLayout>
    );
}
