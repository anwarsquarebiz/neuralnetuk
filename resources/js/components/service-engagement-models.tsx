import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { 
    Users, 
    Handshake, 
    LayoutGrid, 
    RefreshCw,
    Check
} from 'lucide-react';

interface EngagementModel {
    title: string;
    icon: any;
    desc: string;
    points: string[];
}

interface ServiceEngagementModelsProps {
    serviceName: string;
    models?: EngagementModel[];
}

const defaultModels: EngagementModel[] = [
    { 
        title: 'Fully Managed Development', 
        icon: LayoutGrid, 
        desc: 'NeuralNet manages the entire web application development lifecycle, from architecture and development to deployment and support, allowing your organisation to focus on business growth.',
        points: ['Complete development ownership', 'Managed delivery and reporting', 'Predictable operational costs']
    },
    { 
        title: 'Hybrid Collaboration Model', 
        icon: Handshake, 
        desc: 'Work alongside your internal development team while NeuralNet provides specialised engineers, additional capacity, and technical expertise to accelerate web application delivery.',
        points: ['Extend your internal team', 'Access specialised expertise', 'Maintain strategic control']
    },
    { 
        title: 'Dedicated Development Team', 
        icon: Users, 
        desc: 'Build a dedicated team of developers, architects, and DevOps engineers exclusively aligned with your web application project and long-term digital strategy.',
        points: ['Exclusive engineering team', 'Long-term project continuity', 'Scalable development capacity']
    },
    { 
        title: 'Build-Operate-Transfer (BOT)', 
        icon: RefreshCw, 
        desc: 'NeuralNet builds and operates a web development team for your organisation, with the option to transfer the fully established team and operations to your ownership.',
        points: ['Structured team setup', 'Managed operations and governance', 'Optional full ownership transfer']
    },
];

export default function ServiceEngagementModels({ 
    serviceName, 
    models = defaultModels 
}: ServiceEngagementModelsProps) {
    return (
        <section className="py-24 bg-[#eef4ff] font-sans">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                    Flexible Engagement Models for {serviceName}
                </h2>
                <p className="text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
                    NeuralNet provides flexible engagement models designed to support organisations building modern web applications. Whether you need a fully managed delivery team, additional engineering capacity, or a dedicated development unit, our models adapt to your project goals and scale requirements.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {models.map((model, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col h-full border border-gray-100 hover:shadow-xl transition-all">
                            <div className="size-12 bg-blue-50 rounded-xl flex items-center justify-center mb-8 shrink-0">
                                <model.icon className="size-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-6 leading-tight min-h-[3rem]">
                                {model.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-8 leading-relaxed font-normal">
                                {model.desc}
                            </p>
                            <div className="space-y-4 mb-10 mt-auto">
                                {model.points.map((point, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <div className="size-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="size-3 text-blue-600" />
                                        </div>
                                        <span className="text-sm text-gray-700 font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full font-bold h-auto py-3 text-sm">
                                <Link href="/contact">Hire Now</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
