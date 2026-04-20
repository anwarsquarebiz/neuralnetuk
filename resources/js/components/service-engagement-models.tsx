import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Check, Handshake, LayoutGrid, RefreshCw, Users } from 'lucide-react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

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
        points: ['Complete development ownership', 'Managed delivery and reporting', 'Predictable operational costs'],
    },
    {
        title: 'Hybrid Collaboration Model',
        icon: Handshake,
        desc: 'Work alongside your internal development team while NeuralNet provides specialised engineers, additional capacity, and technical expertise to accelerate web application delivery.',
        points: ['Extend your internal team', 'Access specialised expertise', 'Maintain strategic control'],
    },
    {
        title: 'Dedicated Development Team',
        icon: Users,
        desc: 'Build a dedicated team of developers, architects, and DevOps engineers exclusively aligned with your web application project and long-term digital strategy.',
        points: ['Exclusive engineering team', 'Long-term project continuity', 'Scalable development capacity'],
    },
    {
        title: 'Build-Operate-Transfer (BOT)',
        icon: RefreshCw,
        desc: 'NeuralNet builds and operates a web development team for your organisation, with the option to transfer the fully established team and operations to your ownership.',
        points: ['Structured team setup', 'Managed operations and governance', 'Optional full ownership transfer'],
    },
];

export default function ServiceEngagementModels({ serviceName, models = defaultModels }: ServiceEngagementModelsProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 95%',
                        end: 'top 70%',
                        scrub: 1,
                    },
                },
            );

            if (gridRef.current) {
                gsap.fromTo(
                    gridRef.current.children,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 90%',
                            end: 'top 50%',
                            scrub: 1,
                        },
                    },
                );
            }

            ScrollTrigger.refresh();
        }, sectionRef);

        const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#eef4ff] py-12 font-sans md:py-24">
            <div ref={headerRef} className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6 md:mb-16 lg:px-8">
                <h2 className="mb-6 text-2xl font-extrabold break-words text-gray-900 sm:text-3xl md:text-4xl">
                    Flexible Engagement Models for {serviceName}
                </h2>
                <p className="mx-auto max-w-4xl leading-relaxed font-medium text-gray-600">
                    NeuralNet provides flexible engagement models designed to support organisations building modern web applications. Whether you need
                    a fully managed delivery team, additional engineering capacity, or a dedicated development unit, our models adapt to your project
                    goals and scale requirements.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div ref={gridRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {models.map((model, i) => (
                        <div
                            key={i}
                            className="flex min-h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
                        >
                            <div className="mb-8 flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                                <model.icon className="size-6 text-[#000027]" />
                            </div>
                            <h3 className="mb-6 min-h-[3rem] text-lg leading-tight font-bold text-gray-900">{model.title}</h3>
                            <p className="mb-8 text-sm leading-relaxed font-normal text-gray-600">{model.desc}</p>
                            <div className="mt-auto mb-10 space-y-4">
                                {model.points.map((point, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                                            <Check className="size-3 text-[#000027]" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <Button asChild className="h-auto w-full rounded-md bg-[#000027] py-3 text-sm font-bold text-white hover:bg-blue-700">
                                <Link href="/contact">Hire Now</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
