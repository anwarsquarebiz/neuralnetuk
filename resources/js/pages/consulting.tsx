import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';
import ConsultingHero from '@/components/consulting-hero';
import ServicesSection from '@/components/services-section';
import ImpactSection from '@/components/impact-section';
import DeliveryProcessSection, { DeliveryStep } from '@/components/delivery-process-section';
import BrandTrustSection from '@/components/brand-trust';
import CTASection from '@/components/cta-section';
import { Search, Activity, ClipboardList, Lightbulb, Terminal, Sliders } from 'lucide-react';

const consultingSteps: DeliveryStep[] = [
    { 
        id: '01', 
        title: 'Discovery & Assessment', 
        icon: Search, 
        desc: 'We begin by understanding your business goals, requirements, and current technology landscape to identify key challenges and opportunities for AI-driven transformation.' 
    },
    { 
        id: '02', 
        title: 'Strategy & Planning', 
        icon: ClipboardList, 
        desc: 'Our experts develop a comprehensive roadmap and implementation strategy, ensuring that technical solutions are perfectly aligned with your long-term business objectives.' 
    },
    { 
        id: '03', 
        title: 'Solution Design', 
        icon: Lightbulb, 
        desc: 'We design modern, scalable technical architectures and AI models that are built to handle enterprise-level demands while remaining flexible for future growth.' 
    },
    { 
        id: '04', 
        title: 'Implementation Support', 
        icon: Terminal, 
        desc: 'Our engineering teams provide end-to-end support during the deployment and integration of new solutions, ensuring a seamless transition and minimal disruption.' 
    },
    { 
        id: '05', 
        title: 'Optimization & Review', 
        icon: Sliders, 
        desc: 'We continuously monitor performance and gather data-driven insights to refine and optimize your AI solutions, ensuring they deliver maximum ROI and peak efficiency.' 
    },
    { 
        id: '06', 
        title: 'Ongoing Advisory', 
        icon: Activity, 
        desc: 'As your strategic partner, we provide continuous guidance and support to help you stay ahead of the technology curve and adapt to evolving market demands.' 
    },
];

export default function Consulting() {
    return (
        <MarketingLayout transparentNavbar={false}>
            <Head title="AI Consulting & Strategy - NeuralNet" />

            {/* Section 1: Hero */}
            <ConsultingHero />

            {/* Section 2: Our Services */}
            <ServicesSection />

            {/* Section 3: Impact & Global Presence */}
            <ImpactSection />

            {/* Section 4: Our Consulting Process */}
            <DeliveryProcessSection 
                title="Our Consulting Process" 
                steps={consultingSteps} 
            />

            {/* Section 5: Brand Trust */}
            <BrandTrustSection />

            {/* Section 6: CTA */}
            <CTASection 
                title="Start Building with a Dedicated Engineering Team"
                description="Let's discuss how our AI-augmented teams can accelerate your product development and reduce time-to-market."
            />
        </MarketingLayout>
    );
}
