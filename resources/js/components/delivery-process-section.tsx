import { cn } from '@/lib/utils';
import { LucideIcon, Search, PenTool, Terminal, ShieldCheck, Rocket, Activity } from 'lucide-react';

export interface DeliveryStep {
    id: string;
    title: string;
    icon: LucideIcon;
    desc: string;
}

const defaultSteps: DeliveryStep[] = [
    { id: '01', title: 'Project Planning', icon: Search, desc: 'We begin by understanding your goals, requirements, and business challenges. Clear planning ensures the project scope, timeline, and expectations are aligned from the start.' },
    { id: '02', title: 'Design Architecture', icon: PenTool, desc: 'Our team designs a scalable and secure system architecture that ensures performance, flexibility, and future growth for your solution.' },
    { id: '03', title: 'Developement', icon: Terminal, desc: 'Our engineers build the solution using modern technologies and best development practices to ensure reliability and high performance.' },
    { id: '04', title: 'Testing & QA', icon: ShieldCheck, desc: 'We perform rigorous testing and quality assurance to ensure the system is secure, stable, and ready for real-world usage.' },
    { id: '05', title: 'Deployment Launch', icon: Rocket, desc: 'The solution is deployed into the production environment with careful monitoring to ensure a smooth and successful launch.' },
    { id: '06', title: 'Maintenance & Support', icon: Activity, desc: 'We provide continuous monitoring, updates, and technical support to keep your systems running efficiently and securely.' },
];

interface DeliveryProcessSectionProps {
    title?: string;
    steps?: DeliveryStep[];
}

export default function DeliveryProcessSection({ 
    title = "Our Delivery Process", 
    steps: customSteps 
}: DeliveryProcessSectionProps) {
    const activeSteps = customSteps || defaultSteps;

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-24 px-4">
                <h2 className="text-4xl font-extrabold text-gray-900">{title}</h2>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                {/* Central Vertical Line: Left on mobile/tab, Center on lg+ */}
                <div className="absolute left-[23px] lg:left-1/2 top-0 bottom-0 w-1 bg-gray-900 -translate-x-1/2"></div>
                
                <div className="space-y-24">
                    {activeSteps.map((step, i) => (
                        <div key={i} className="relative flex flex-col lg:flex-row items-center gap-12 group">
                            {/* Timeline Node (Center Icon) */}
                            <div className="absolute left-[0px] lg:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center p-1 bg-white">
                                <div className="size-10 bg-gray-900 rounded-lg flex items-center justify-center text-white shadow-xl group-hover:bg-blue-600 transition-colors">
                                    <step.icon className="size-5" />
                                </div>
                            </div>
                            
                            {/* Content Wrapper */}
                            <div className={cn("flex flex-1 w-full pl-12 lg:pl-0", i % 2 === 0 ? "lg:justify-start" : "lg:flex-row-reverse lg:justify-start")}>
                                <div className={cn("max-w-md", i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left")}>
                                    <span className="text-blue-600 font-bold mb-2 inline-block text-lg">{step.id}</span>
                                    <h3 className="text-2xl font-extrabold text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                </div>
                                <div className="hidden lg:block flex-1"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
