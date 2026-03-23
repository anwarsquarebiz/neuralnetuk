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
    LineChart, 
    PieChart, 
    ShieldCheck, 
    Settings, 
    Lightbulb, 
    Activity 
} from 'lucide-react';

const analyticsSteps: DeliveryStep[] = [
    { id: '01', title: 'Data Strategy', icon: Search, desc: 'Defining clear business objectives and identifying key data sources.' },
    { id: '02', title: 'Data Ingestion', icon: Database, desc: 'Setting up automated pipelines to collect raw data from diverse sources.' },
    { id: '03', title: 'ETL & Transformation', icon: Settings, desc: 'Cleaning and structuring data for high-performance analytic query execution.' },
    { id: '04', title: 'Warehouse Design', icon: Database, desc: 'Architecting scalable cloud data warehouses for efficient storage.' },
    { id: '05', title: 'Visualisation & BI', icon: PieChart, desc: 'Creating intuitive dashboards that provide real-time business visibility.' },
    { id: '06', title: 'Security & Governance', icon: ShieldCheck, desc: 'Implementing robust data security and access control protocols.' },
    { id: '07', title: 'Deep Analysis', icon: LineChart, desc: 'Applying advanced analytics to extract actionable business insights.' },
    { id: '08', title: 'Continuous Insights', icon: Lightbulb, desc: 'Providing ongoing monitoring and refinement of analytical models.' },
];

export default function DataAnalytics() {
    return (
        <MarketingLayout>
            <Head title="Advanced Data Analytics - NeuralNet" />
            
            <ServiceHero 
                title="Data Analytics"
                description="Transform your data into actionable insights. We help organisations build comprehensive analytic platforms that drive smarter business decisions."
            />

            <ServiceFeatureSection 
                title="Turning Raw Data into Strategic Business Value"
                description="Our data analytics services help you uncover hidden trends and opportunities. We build robust pipelines that ensure your data is accurate, secure, and ready for analysis."
            />

            <FullWidthBanner text="Empowering Data-Driven Growth" />

            <QuoteSection 
                title="Optimise Your Business Strategy with Expert Data Analysis"
                quote="In data we trust, but first, we must understand it."
                description="We help organisations build a data-centric culture. From ingestion to high-quality visualization, we ensure your team has the insights they need to succeed."
            />

            <PremiumServicesSection />

            <AboutUsStats />

            <ServiceEngagementModels serviceName="Analytics Services" />

            <DeliveryProcessSection 
                title="Our Data Process"
                steps={analyticsSteps}
            />

            <BrandTrust />

            <CTASection 
                title="Ready to become a Data-Driven Organisation?"
                description="Consult with our analysts to transform your data into a powerful business asset."
            />
        </MarketingLayout>
    );
}
