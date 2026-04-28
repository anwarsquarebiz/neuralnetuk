import AboutUsStats from '@/components/about-us-stats';
import BrandTrust from '@/components/brand-trust';
import CTASection from '@/components/cta-section';
import DeliveryProcessSection, { DeliveryStep } from '@/components/delivery-process-section';
import FullWidthBanner from '@/components/full-width-banner';
import PremiumServicesSection from '@/components/premium-services-section';
import QuoteSection from '@/components/quote-section';
import ServiceEngagementModels from '@/components/service-engagement-models';
import ServiceFeatureSection from '@/components/service-feature-section';
import ServiceHero from '@/components/service-hero';
import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';
import { Activity, Code2, Database, PenTool, Rocket, Search, ShieldCheck, Zap } from 'lucide-react';

const webDevSteps: DeliveryStep[] = [
    {
        id: '01',
        title: 'Requirement Analysis',
        icon: Search,
        desc: 'Identifying user needs and outlining the comprehensive project scope to ensure absolute alignment.',
    },
    {
        id: '02',
        title: 'Concept & Design',
        icon: PenTool,
        desc: 'Creating high-fidelity prototypes and intuitive user interfaces based on verified requirements.',
    },
    {
        id: '03',
        title: 'Strategy',
        icon: Zap,
        desc: 'Defining the optimal technology stack and creating a detailed development roadmap for scalability.',
    },
    {
        id: '04',
        title: 'Front-end Development',
        icon: Code2,
        desc: 'Building the visual and interactive components of the web application using modern frameworks.',
    },
    {
        id: '05',
        title: 'Back-end/Server Development',
        icon: Database,
        desc: 'Developing robust server-side logic, API integrations, and secure database architectures.',
    },
    {
        id: '06',
        title: 'Testing & QA',
        icon: ShieldCheck,
        desc: 'Conducting rigorous manual and automated testing to ensure a stable, secure, and bug-free solution.',
    },
    {
        id: '07',
        title: 'Deployment & Launch',
        icon: Rocket,
        desc: 'Deploying the final application to live production environments with zero-downtime strategies.',
    },
    {
        id: '08',
        title: 'Solutions & Services',
        icon: Activity,
        desc: 'Providing continuous monitoring, improvements, and feature updates to maintain performance.',
    },
];

export default function SoftwareDevelopment() {
    return (
        <MarketingLayout>
            <Head title="Web Application Development - NeuralNet" />

            <ServiceHero
                title="Web Application Development"
                description="Working on complicated web applications with ease requires expertise and experience. Our team of software developers will help you from design to deployment."
                imageSrc="/assets/services-page/software-dev-image.webp"
            />

            <ServiceFeatureSection
                title="Modern Web Application Development For Scalable Digital Platforms"
                description="Scalable solutions for modern business require a deep understanding of distributed systems and user-centric design. We build platforms that not only meet today's demands but are engineered for tomorrow's growth."
                imageSrc="/assets/services-page/software-dev-image-2.webp"
            />

            <FullWidthBanner text="Trusted Technology Expertise" />

            <QuoteSection
                title="Build Scalable Web Applications with Our Expert Development Team"
                quote="Turn Your Digital Vision into Powerful Web Applications"
                description="There is more than one way to develop web applications, but we focus on the path that leads to long-term sustainability and performance. Our expert development team works as an extension of your own, ensuring every line of code aligns with your commercial objectives."
            />

            <PremiumServicesSection />

            <AboutUsStats />

            <ServiceEngagementModels serviceName="Web Development" />

            <DeliveryProcessSection title="Our Delivery Process" steps={webDevSteps} />

            <BrandTrust />

            <CTASection
                title="Start Building with a Dedicated Engineering Team"
                description="NeuralNet provides automated and manual software development solutions to help you build and scale your web applications."
            />
        </MarketingLayout>
    );
}
