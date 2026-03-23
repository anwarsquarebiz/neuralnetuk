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
    Target, 
    Users, 
    Zap, 
    RefreshCw, 
    ShieldCheck, 
    Rocket, 
    Activity 
} from 'lucide-react';

const agileSteps: DeliveryStep[] = [
    { id: '01', title: 'Product Discovery', icon: Search, desc: 'Identifying core product goals and defining target user requirements.' },
    { id: '02', title: 'Roadmap & Backlog', icon: Target, desc: 'Prioritising features and creating an initial project delivery roadmap.' },
    { id: '03', title: 'Sprint Planning', icon: Users, desc: 'Defining specific goals and tasks for each iterative development cycle.' },
    { id: '04', title: 'Iterative Development', icon: Zap, desc: 'Rapidly building and refining features in continuous logic cycles.' },
    { id: '05', title: 'Daily Standups', icon: Activity, desc: 'Ensuring absolute alignment and resolving bottlenecks in real-time.' },
    { id: '06', title: 'Testing & QA', icon: ShieldCheck, desc: 'Conducting continuous quality assurance within every sprint cycle.' },
    { id: '07', title: 'Review & Retrospective', icon: RefreshCw, desc: 'Analyzing sprint performance and identifying improvement opportunities.' },
    { id: '08', title: 'Release & Launch', icon: Rocket, desc: 'Deploying stable features into production while maintaining velocity.' },
];

export default function Agile() {
    return (
        <MarketingLayout>
            <Head title="Agile Project Delivery - NeuralNet" />
            
            <ServiceHero 
                title="Agile Project Delivery"
                description="Deliver high-quality products faster with agile expertise. We help organizations adopt collaborative development cultures that prioritize value and efficiency."
            />

            <ServiceFeatureSection 
                title="Flexible and Collaborative Development for Modern Business"
                description="Our agile services focus on transparency, efficiency, and continuous improvement. We help you build products that adapt to changing market requirements."
            />

            <FullWidthBanner text="Efficiency and Collaborative Innovation" />

            <QuoteSection 
                title="Drive Continuous Value with Expert Agile Methodologies"
                quote="Agility is not just about speed; it's about adaptability."
                description="We help organisations build high-performance delivery teams. Our focus is on fostering a collaborative culture that delivers consistent value to your users."
            />

            <PremiumServicesSection />

            <AboutUsStats />

            <ServiceEngagementModels serviceName="Agile Services" />

            <DeliveryProcessSection 
                title="Our Agile Process"
                steps={agileSteps}
            />

            <BrandTrust />

            <CTASection 
                title="Ready to Accelerating Your Product Development?"
                description="Partner with our agile experts to build faster, smarter, and with better results."
            />
        </MarketingLayout>
    );
}
