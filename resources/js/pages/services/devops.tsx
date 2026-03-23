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
    Settings, 
    Terminal, 
    Container, 
    ShieldCheck, 
    Activity, 
    Cloud, 
    Zap 
} from 'lucide-react';

const devopsSteps: DeliveryStep[] = [
    { id: '01', title: 'Infrastructure Audit', icon: Search, desc: 'Analyzing existing cloud environments and identifying optimization points.' },
    { id: '02', title: 'Architecture Planning', icon: Settings, desc: 'Designing a scalable, secure, and cost-effective cloud infrastructure.' },
    { id: '03', title: 'CI/CD Pipeline Setup', icon: Terminal, desc: 'Automating build, test, and deployment workflows for rapid delivery.' },
    { id: '04', title: 'Containerization', icon: Container, desc: 'Packaging applications for consistency across development and production.' },
    { id: '05', title: 'Security & Compliance', icon: ShieldCheck, desc: 'Integrating security protocols and compliance checks into the pipeline.' },
    { id: '06', title: 'Cloud Provisioning', icon: Cloud, desc: 'Deploying infrastructure-as-code (IaC) for automated environment management.' },
    { id: '07', title: 'Monitoring & Logging', icon: Activity, desc: 'Implementing real-time tracking for system health and performance.' },
    { id: '08', title: 'Performance Optimization', icon: Zap, desc: 'Continuous refinement of system performance and cloud resource usage.' },
];

export default function DevOps() {
    return (
        <MarketingLayout>
            <Head title="DevOps and Cloud Services - NeuralNet" />
            
            <ServiceHero 
                title="DevOps and Cloud"
                description="Accelerate your product delivery with high-performance DevOps. We help organizations build, scale, and secure their cloud infrastructure with modern automation."
            />

            <ServiceFeatureSection 
                title="Building Resilient Infrastructures for Faster, Safer Delivery"
                description="Our DevOps and cloud services focus on reliability and speed. We integrate security and automation into every stage of your development lifecycle."
            />

            <FullWidthBanner text="Reliability and Continuous Innovation" />

            <QuoteSection 
                title="Scale with Confidence Using Enterprise-Grade DevOps Practices"
                quote="DevOps is not just a role; it's a culture of continuous delivery."
                description="We help organizations transition from legacy deployment to modern, automated cloud environments. Our focus is on high availability, security, and developer productivity."
            />

            <PremiumServicesSection />

            <AboutUsStats />

            <ServiceEngagementModels serviceName="DevOps Services" />

            <DeliveryProcessSection 
                title="Our DevOps Process"
                steps={devopsSteps}
            />

            <BrandTrust />

            <CTASection 
                title="Ready to Accelerate Your Release Cycle?"
                description="Consult with our DevOps experts to optimize your infrastructure and delivery pipelines."
            />
        </MarketingLayout>
    );
}
