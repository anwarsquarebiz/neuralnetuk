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
    Database, 
    Lock, 
    Code2, 
    Network, 
    Layers, 
    ShieldCheck, 
    Activity 
} from 'lucide-react';

const blockchainSteps: DeliveryStep[] = [
    { id: '01', title: 'Feasibility Study', icon: Search, desc: 'Determining the optimal blockchain architecture for your use case.' },
    { id: '02', title: 'Network Selection', icon: Network, desc: 'Choosing between public, private, or consortium-style networks.' },
    { id: '03', title: 'Smart Contract Design', icon: Code2, desc: 'Architecting secure and efficient self-executing digital agreements.' },
    { id: '04', title: 'Core Development', icon: Database, desc: 'Building the fundamental protocol and dApp layers for your solution.' },
    { id: '05', title: 'Security Auditing', icon: Lock, desc: 'Conducting in-depth code reviews and security testing of contracts.' },
    { id: '06', title: 'Validation & Testing', icon: ShieldCheck, desc: 'Verifying decentralized logic across different network conditions.' },
    { id: '07', title: 'Deployment & Launch', icon: Layers, desc: 'Strategic rollout onto selected mainnet or private blockchain environments.' },
    { id: '08', title: 'Support & Scaling', icon: Activity, desc: 'Providing ongoing monitoring and protocol upgrades for high availability.' },
];

export default function Blockchain() {
    return (
        <MarketingLayout>
            <Head title="Secure Blockchain Development - NeuralNet" />
            
            <ServiceHero 
                title="Blockchain Development"
                description="Build secure, transparent, and decentralized systems. We provide expert blockchain solutions for finance, supply chain, and digital identity management."
            />

            <ServiceFeatureSection 
                title="Transforming Industries with Secure Decentralized Technology"
                description="Our blockchain services enable businesses to build trust through technology. We design and implement decentralized solutions that ensure data integrity and security."
            />

            <FullWidthBanner text="Building Decentralized Trust" />

            <QuoteSection 
                title="Secure Your Future with Transparent and Tamper-Proof Systems"
                quote="Blockchain is the foundation for a more transparent digital economy."
                description="We help organizations navigate the complexities of decentralized technology, focusing on security and scalability at every step. From smart contracts to tokenomics, we ensure your blockchain solution is enterprise-grade."
            />

            <PremiumServicesSection />

            <AboutUsStats />

            <ServiceEngagementModels serviceName="Blockchain Services" />

            <DeliveryProcessSection 
                title="Our Blockchain Process"
                steps={blockchainSteps}
            />

            <BrandTrust />

            <CTASection 
                title="Ready to Build Secure Decentralized Solutions?"
                description="Consult with our blockchain experts to discover how decentralization can benefit your business."
            />
        </MarketingLayout>
    );
}
