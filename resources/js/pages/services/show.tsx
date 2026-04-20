import AboutUsStats from '@/components/about-us-stats';
import BrandTrust from '@/components/brand-trust';
import CTASection from '@/components/cta-section';
import DeliveryProcessSection from '@/components/delivery-process-section';
import FullWidthBanner from '@/components/full-width-banner';
import PremiumServicesSection from '@/components/premium-services-section';
import QuoteSection from '@/components/quote-section';
import ServiceEngagementModels from '@/components/service-engagement-models';
import ServiceFeatureSection from '@/components/service-feature-section';
import ServiceHero from '@/components/service-hero';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/constants/services-data';
import MarketingLayout from '@/layouts/marketing-layout';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';

interface ServiceShowProps {
    slug: string;
}

export default function ServiceShow({ slug }: ServiceShowProps) {
    const content = servicesData[slug];

    if (!content) {
        return (
            <MarketingLayout>
                <div className="flex min-h-[60svh] flex-col items-center justify-center bg-[#f0f4ff] px-6 py-32 text-center font-sans">
                    <h1 className="mb-4 text-4xl font-extrabold text-[#0a1a3b]">Service Not Found</h1>
                    <p className="mb-8 max-w-md text-[#4a5568]">
                        We couldn&apos;t find the service you&apos;re looking for. It may have been moved or renamed.
                    </p>
                    <Button asChild className="h-auto rounded-md bg-[#000027] px-8 py-3 text-sm font-bold text-white shadow-lg hover:bg-blue-700">
                        <Link href="/">
                            <ChevronLeft className="mr-2 size-4" /> Back to Home
                        </Link>
                    </Button>
                </div>
            </MarketingLayout>
        );
    }

    return (
        <MarketingLayout>
            <Head title={`${content.title} - NeuralNet`} />

            <ServiceHero title={content.heroTitle} description={content.heroDesc} imageSrc={content.imageSrc} />

            <ServiceFeatureSection title={content.featureTitle} description={content.featureDesc} imageSrc={content.featureImageSrc} />

            <FullWidthBanner text={content.bannerText} />

            <QuoteSection title={content.quoteTitle} quote={content.quoteText} description={content.quoteDesc} />

            <PremiumServicesSection />

            <AboutUsStats />

            <ServiceEngagementModels serviceName={content.title} />

            <DeliveryProcessSection title={content.deliveryTitle} steps={content.deliverySteps} />

            <BrandTrust />

            <CTASection title={content.ctaTitle} description={content.ctaDesc} />
        </MarketingLayout>
    );
}
