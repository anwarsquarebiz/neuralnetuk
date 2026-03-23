import MarketingLayout from '@/layouts/marketing-layout';
import ContactHero from '@/components/contact-hero';
import ContactForm from '@/components/contact-form';
import StatsGrid from '@/components/stats-grid';
import FullWidthBanner from '@/components/full-width-banner';
import DeliveryProcessSection, { DeliveryStep } from '@/components/delivery-process-section';
import ImpactSection from '@/components/impact-section';
import BrandTrustSection from '@/components/brand-trust';
import OfficeLocations from '@/components/office-locations';
import { Head } from '@inertiajs/react';
import { 
    CalendarCheck, 
    BarChart, 
    Code2, 
    ShieldCheck, 
    Rocket, 
    Settings 
} from 'lucide-react';

const contactDeliverySteps: DeliveryStep[] = [
    { 
        id: '01', 
        title: 'Project Planning', 
        icon: CalendarCheck, 
        desc: 'Identifying your project\'s goals, requirements, and project scope before development.' 
    },
    { 
        id: '02', 
        title: 'Product Analytics', 
        icon: BarChart, 
        desc: 'Define KPIs and metric tracking to evaluate product success.' 
    },
    { 
        id: '03', 
        title: 'Development', 
        icon: Code2, 
        desc: 'Design and develop relevant parts of the customer journey for better conversions.' 
    },
    { 
        id: '04', 
        title: 'Testing & QA', 
        icon: ShieldCheck, 
        desc: 'Audit and help audit code quality, technical infrastructure, and best practices.' 
    },
    { 
        id: '05', 
        title: 'Deployment & Launch', 
        icon: Rocket, 
        desc: 'Optimize and automate your cloud infrastructure to help operations run at low cost.' 
    },
    { 
        id: '06', 
        title: 'Maintenance & Support', 
        icon: Settings, 
        desc: 'Review code and infrastructure on a regular basis to ensure performance.' 
    },
];

export default function Contact() {
    return (
        <MarketingLayout>
            <Head title="Contact Us - NeuralNet" />
            
            {/* 1. Hero */}
            <ContactHero />

            {/* 2. Stats & Form */}
            <section className="bg-white py-20 font-sans">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Stats Left */}
                        <div className="lg:col-span-5 space-y-8">
                            
                            <StatsGrid />
                        </div>

                        {/* Form Right */}
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Blue Label */}
            <FullWidthBanner text="Trusted by Growing Businesses" />

            {/* 4. Delivery Process */}
            <DeliveryProcessSection 
                title="Our Delivery Process"
                steps={contactDeliverySteps}
            />

            {/* 5. Impact Section */}
            <ImpactSection />

            {/* 6. Brand Trust Grid */}
            <BrandTrustSection />

            {/* 7. Office Locations */}
            <OfficeLocations />
        </MarketingLayout>
    );
}
