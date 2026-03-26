import MarketingLayout from '@/layouts/marketing-layout';
import ServiceHero from '@/components/service-hero';
import ServiceFeatureSection from '@/components/service-feature-section';
import FullWidthBanner from '@/components/full-width-banner';
import QuoteSection from '@/components/quote-section';
import PremiumServicesSection from '@/components/premium-services-section';
import AboutUsStats from '@/components/about-us-stats';
import ServiceEngagementModels from '@/components/service-engagement-models';
import DeliveryProcessSection from '@/components/delivery-process-section';
import BrandTrust from '@/components/brand-trust';
import CTASection from '@/components/cta-section';
import { Head, Link } from '@inertiajs/react';
import { servicesData } from '@/constants/services-data';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface ServiceShowProps {
    slug: string;
}

export default function ServiceShow({ slug }: ServiceShowProps) {
    const content = servicesData[slug];

    if (!content) {
        return (
            <MarketingLayout>
                <div className="py-32 bg-[#f0f4ff] font-sans flex flex-col items-center justify-center min-h-[60svh] text-center px-6">
                    <h1 className="text-4xl font-extrabold text-[#0a1a3b] mb-4">Service Not Found</h1>
                    <p className="text-[#4a5568] mb-8 max-w-md">
                        We couldn&apos;t find the service you&apos;re looking for. It may have been moved or renamed.
                    </p>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 py-3 h-auto text-sm font-bold shadow-lg">
                        <Link href="/">
                            <ChevronLeft className="size-4 mr-2" /> Back to Home
                        </Link>
                    </Button>
                </div>
            </MarketingLayout>
        );
    }

    return (
        <MarketingLayout>
            <Head title={`${content.title} - NeuralNet`} />
            
            <ServiceHero 
                title={content.heroTitle}
                description={content.heroDesc}
                imageSrc={content.imageSrc}
            />

            <ServiceFeatureSection 
                title={content.featureTitle}
                description={content.featureDesc}
                imageSrc={content.featureImageSrc}
            />

            <FullWidthBanner text={content.bannerText} />

            <QuoteSection 
                title={content.quoteTitle}
                quote={content.quoteText}
                description={content.quoteDesc}
            />

            <PremiumServicesSection />

            <AboutUsStats />

            <ServiceEngagementModels serviceName={content.title} />

            <DeliveryProcessSection 
                title={content.deliveryTitle}
                steps={content.deliverySteps}
            />

            <BrandTrust />

            <CTASection 
                title={content.ctaTitle}
                description={content.ctaDesc}
            />
        </MarketingLayout>
    );
}
