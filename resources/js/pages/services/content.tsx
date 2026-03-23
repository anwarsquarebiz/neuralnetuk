import MarketingLayout from '@/layouts/marketing-layout';
import ServiceHero from '@/components/service-hero';
import ServiceFeatureSection from '@/components/service-feature-section';
import FullWidthBanner from '@/components/full-width-banner';
import QuoteSection from '@/components/quote-section';
import PremiumServicesSection from '@/components/premium-services-section';
import AboutUsStats from '@/components/about-us-stats';
import ServiceEngagementModels from '@/components/service-engagement-models';
import DeliveryProcessSection, { DeliveryStep } from '@/components/delivery-process-section';
import BrandTrust from '@/components/brand-trust';
import CTASection from '@/components/cta-section';
import { Head } from '@inertiajs/react';
import { 
    PenTool, 
    Search, 
    Palette, 
    FileText, 
    Users, 
    Rocket, 
    BarChart3, 
    RefreshCcw 
} from 'lucide-react';

const contentSteps: DeliveryStep[] = [
    { id: '01', title: 'Content Audit', icon: Search, desc: 'Reviewing existing assets and identifying gaps in your content strategy.' },
    { id: '02', title: 'Strategy Design', icon: PenTool, desc: 'Crafting a content roadmap aligned with your brand voice and goals.' },
    { id: '03', title: 'Creative Ideation', icon: Palette, desc: 'Generating innovative content concepts that capture audience attention.' },
    { id: '04', title: 'Copywriting & Design', icon: FileText, desc: 'Producing high-quality written and visual content across all channels.' },
    { id: '05', title: 'Review & Polishing', icon: Users, desc: 'Ensuring absolute consistency and quality through rigorous peer reviews.' },
    { id: '06', title: 'Publishing & Distribution', icon: Rocket, desc: 'Strategically launching content across selected platforms and networks.' },
    { id: '07', title: 'Performance Analysis', icon: BarChart3, desc: 'Tracking engagement and conversion metrics to measure impact.' },
    { id: '08', title: 'Optimization Iterations', icon: RefreshCcw, desc: 'Refining the content strategy based on real-world data and feedback.' },
];

export default function Content() {
    return (
        <MarketingLayout>
            <Head title="Strategic Content Creation - NeuralNet" />
            
            <ServiceHero 
                title="Strategic Content Creation"
                description="Communicate your brand's story with clarity and impact. We blend creative storytelling with data-driven strategy to produce content that resonates."
            />

            <ServiceFeatureSection 
                title="Brand Communication that Captures Attention and Drives Action"
                description="We help organizations build authority and trust through high-quality, strategic content. From whitepapers to digital campaigns, we ensure your message is heard."
            />

            <FullWidthBanner text="Strategic Brand Communication" />

            <QuoteSection 
                title="Build Authority and Engagement with Impactful Storytelling"
                quote="Content is the connection between your brand and your audience."
                description="Great content is more than just words on a page; it's a strategic asset that builds trust and drives growth. We focus on quality over quantity, ensuring every piece has a purpose."
            />

            <PremiumServicesSection />

            <AboutUsStats />

            <ServiceEngagementModels serviceName="Content Services" />

            <DeliveryProcessSection 
                title="Our Content Process"
                steps={contentSteps}
            />

            <BrandTrust />

            <CTASection 
                title="Need a Content Strategy that Actually Works?"
                description="Our team of strategists and creators is ready to help you tell your brand's story to the world."
            />
        </MarketingLayout>
    );
}
