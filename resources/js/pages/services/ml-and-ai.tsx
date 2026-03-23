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
    Cpu, 
    LineChart, 
    BrainCircuit, 
    Layers, 
    ShieldCheck, 
    Activity 
} from 'lucide-react';

const mlSteps: DeliveryStep[] = [
    { id: '01', title: 'Data Discovery', icon: Search, desc: 'Identifying and auditing your data assets to determine AI readiness.' },
    { id: '02', title: 'Data Preprocessing', icon: Database, desc: 'Cleaning and structuring raw data for high-quality model training.' },
    { id: '03', title: 'Feature Engineering', icon: Cpu, desc: 'Extracting informative features that drive model accuracy and performance.' },
    { id: '04', title: 'Model Selection', icon: BrainCircuit, desc: 'Choosing the optimal algorithms tailored to your specific business problem.' },
    { id: '05', title: 'Training & Refinement', icon: Layers, desc: 'Iterative training and hyperparameter tuning to reach desired accuracy levels.' },
    { id: '06', title: 'Validation & Testing', icon: ShieldCheck, desc: 'Rigorous validation against real-world scenarios to ensure reliability.' },
    { id: '07', title: 'Integration', icon: Activity, desc: 'Seamlessly deploying AI models into your existing business ecosystems.' },
    { id: '08', title: 'Monitoring & Growth', icon: Activity, desc: 'Continuous performance tracking and retraining to ensure long-term value.' },
];

export default function MLandAI() {
    return (
        <MarketingLayout>
            <Head title="ML and AI Solutions - NeuralNet" />
            
            <ServiceHero 
                title="ML and AI Solutions"
                description="From intelligent automation to predictive analytics, we help businesses leverage the power of Artificial Intelligence to drive innovation and efficiency."
            />

            <ServiceFeatureSection 
                title="Intelligent Automation & Advanced Predictive Insights"
                description="Our AI and Machine Learning services help you unlock the hidden value in your data. We design solutions that automate complex tasks, predict trends, and enhance decision-making."
            />

            <FullWidthBanner text="Harnessing Neural Intelligence" />

            <QuoteSection 
                title="Empower Your Business with data-driven AI Strategies"
                quote="AI is not just a tool; it's the engine for your future growth."
                description="Success in AI requires more than just algorithms; it requires a deep understanding of your data landscape and commercial objectives. We build ethical, scalable, and impactful AI solutions."
            />

            <PremiumServicesSection />

            <AboutUsStats />

            <ServiceEngagementModels serviceName="AI and ML" />

            <DeliveryProcessSection 
                title="Our AI Delivery Process"
                steps={mlSteps}
            />

            <BrandTrust />

            <CTASection 
                title="Ready to Innovate with Artificial Intelligence?"
                description="Our team of AI experts is ready to help you build the next generation of intelligent business solutions."
            />
        </MarketingLayout>
    );
}
