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
    Search, 
    Workflow, 
    Zap, 
    Settings, 
    ShieldCheck, 
    Activity, 
    Rocket,
    BarChart3, 
    RefreshCcw 
} from 'lucide-react';

const automationSteps: DeliveryStep[] = [
    { id: '01', title: 'Process Discovery', icon: Search, desc: 'Identifying manual workflows suitable for high-impact automation.' },
    { id: '02', title: 'Workflow Mapping', icon: Workflow, desc: 'Detailed documentation of existing processes and identifying bottlenecks.' },
    { id: '03', title: 'Solution Design', icon: Zap, desc: 'Designing an automated architecture that streamlines operations.' },
    { id: '04', title: 'Implementation', icon: Settings, desc: 'Building and integrating automated bots and intelligent workflows.' },
    { id: '05', title: 'Integration & Testing', icon: ShieldCheck, desc: 'Ensuring seamless connectivity with existing enterprise systems.' },
    { id: '06', title: 'Operational Launch', icon: Rocket, desc: 'Deploying automation solutions with carefully managed transition plans.' },
    { id: '07', title: 'Performance Tracking', icon: BarChart3, desc: 'Monitoring efficiency gains and resource optimization metrics.' },
    { id: '08', title: 'Continuous Refinement', icon: RefreshCcw, desc: 'Iteratively improving workflows based on operational data results.' },
];

export default function Automation() {
    return (
        <MarketingLayout>
            <Head title="Intelligent Automation Services - NeuralNet" />
            
            <ServiceHero 
                title="Intelligent Automation"
                description="Maximize operational efficiency with smart workflows. We help businesses automate repetitive tasks and optimize complex processes through intelligent technology."
            />

            <ServiceFeatureSection 
                title="Efficiency and Scalability through Smart Operational Workflows"
                description="Our automation services focus on removing friction from your business operations. We build systems that work for you, allowing your team to focus on strategic growth."
            />

            <FullWidthBanner text="Automating for Operational Excellence" />

            <QuoteSection 
                title="Unlock Significant Productivity with Custom Automation Solutions"
                quote="Efficiency is not just about speed; it's about precision."
                description="Custom automation allows you to scale your operations without scaling your overhead. We build solutions that are both flexible and powerful, ensuring your workflows evolve with your business."
            />

            <PremiumServicesSection />

            <AboutUsStats />

            <ServiceEngagementModels serviceName="Automation Services" />

            <DeliveryProcessSection 
                title="Our Automation Process"
                steps={automationSteps}
            />

            <BrandTrust />

            <CTASection 
                title="Ready to Streamline Your Business Operations?"
                description="Discover how our intelligent automation experts can help you achieve more with less."
            />
        </MarketingLayout>
    );
}
