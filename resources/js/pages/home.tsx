import CorePositioning from '@/components/core-positioning';
import CTASection from '@/components/cta-section';
import DeliveryProcessSection from '@/components/delivery-process-section';
import WhyNeuralNetSection from '@/components/engagement-models-section';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <MarketingLayout transparentNavbar={true}>
            <Head title="Artificial Intelligence & Software Engineering - NeuralNet" />

            {/* Section 1: Hero */}
            <HeroSection />

            {/* Section 2: Stats / About Us */}
            {/* <AboutUsStats /> */}
            <CorePositioning />

            {/* Section 3: Brand Trust */}
            {/* <BrandTrustSection /> */}

            {/* Section 4: Services Grid */}
            <ServicesSection />

            {/* Section 5: Delivery Process */}
            <DeliveryProcessSection />

            {/* Section 6: Why NeuralNet Narrative */}
            <WhyNeuralNetSection />

            {/* Section 7: Premium Services */}
            {/* <PremiumServicesSection /> */}

            {/* Section 8: CTA */}
            <CTASection
                title="Start Building with a Dedicated Engineering Team"
                description="Let's discuss how our AI-augmented teams can accelerate your product development and reduce time-to-market."
            />
        </MarketingLayout>
    );
}
