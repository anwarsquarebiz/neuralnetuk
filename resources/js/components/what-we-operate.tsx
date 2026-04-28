import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code2, Eye, Mic2, ShieldAlert, Star, UserSquare2 } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const operations = [
    {
        id: '01',
        title: 'Custom Software & Infrastructure',
        description: 'Bespoke systems built for high-scale enterprise operations and seamless integration.',
        icon: Code2,
        className: 'lg:col-span-2 lg:row-span-1',
    },
    {
        id: '02',
        title: 'Cybersecurity',
        description: 'Advanced penetration testing and autonomous SOC for proactive threat management.',
        icon: ShieldAlert,
        className: 'lg:col-span-1 lg:row-span-1',
    },
    {
        id: '03',
        title: 'AI Avatars',
        description: 'Interactive digital humans for pre-recorded content and real-time engagement.',
        icon: UserSquare2,
        className: 'lg:col-span-1 lg:row-span-1',
    },
    {
        id: '04',
        title: 'AI Voice Agents',
        description: 'Intelligent inbound and outbound voice solutions that handle complex customer interactions.',
        icon: Mic2,
        className: 'lg:col-span-2 lg:row-span-1',
    },
    {
        id: '05',
        title: 'AI Guardian',
        description:
            'Enterprise-grade oversight for AI performance, safety, and ROI tracking. Ensuring every tool in your stack delivers measurable value.',
        icon: Eye,
        featured: true,
        star: true,
        className: 'lg:col-span-2 lg:row-span-2',
    },
];

export default function WhatWeOperateSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current?.children || [],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 85%',
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
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 80%',
                        },
                    },
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="solutions" ref={sectionRef} className="relative overflow-hidden bg-white py-20 font-sans md:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Architectural Header */}
                <div ref={headerRef} className="mb-16 md:mb-24">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-px w-8 bg-[#000027]/20"></div>
                        <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase">Operational Capabilities</span>
                    </div>

                    <h2 className="text-4xl leading-[1.1] font-black tracking-tighter text-[#000027] uppercase md:text-6xl lg:text-7xl">
                        Enterprise systems <br />
                        <span className="text-[#000027]/30 italic">built for scale.</span>
                    </h2>
                </div>

                {/* Bento Grid Layout matching ServicesSection */}
                <div ref={gridRef} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                    {operations.map((op) => (
                        <div
                            key={op.id}
                            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-500 ${
                                op.featured
                                    ? 'border-transparent bg-[#000027] text-white shadow-2xl'
                                    : 'border-[#000027]/5 bg-gray-50 hover:border-[#000027]/10 hover:bg-white hover:shadow-2xl'
                            } ${op.className}`}
                        >
                            <div className="relative z-10">
                                <div className="mb-12 flex items-start justify-between">
                                    <div
                                        className={`flex size-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${
                                            op.featured ? 'bg-white/10' : 'bg-white shadow-sm'
                                        }`}
                                    >
                                        <op.icon className={`size-6 ${op.featured ? 'text-white' : 'text-[#000027]'}`} />
                                    </div>
                                </div>

                                <h3
                                    className={`mb-4 flex items-center gap-2 text-2xl font-black ${op.featured ? 'text-white md:text-4xl' : 'text-[#000027]'}`}
                                >
                                    {op.title}
                                    {op.star && <Star className="size-5 fill-amber-400 text-amber-400" />}
                                </h3>
                                <p className={`max-w-sm text-base leading-relaxed ${op.featured ? 'text-white/70 md:text-lg' : 'text-[#000027]/60'}`}>
                                    {op.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-12 flex items-center justify-between transition-transform group-hover:translate-x-1">
                                <span className={`text-[10px] font-black tracking-widest uppercase ${op.featured ? 'text-white' : 'text-[#000027]'}`}>
                                    Capability {op.id}
                                </span>
                                <ArrowUpRight className={`size-4 ${op.featured ? 'text-white' : 'text-[#000027]'}`} />
                            </div>

                            {/* Decorative Background Elements for Featured Card */}
                            {op.featured && (
                                <>
                                    <div className="pointer-events-none absolute top-0 right-0 p-8 font-mono text-[120px] leading-none font-black opacity-10 select-none">
                                        {op.id}
                                    </div>
                                    <div className="pointer-events-none absolute -top-20 -right-20 size-80 rounded-full bg-blue-600/20 blur-[100px]"></div>
                                </>
                            )}
                        </div>
                    ))}

                    {/* High Impact Statement matching ServicesSection */}
                    <div className="hidden flex-col justify-center p-8 lg:col-span-2 lg:flex">
                        <h3 className="text-5xl font-black tracking-tighter whitespace-nowrap text-[#000027]/5 uppercase select-none lg:text-6xl xl:text-8xl">
                            NEURALNET
                        </h3>
                        <div className="mt-1 flex items-center gap-4">
                            <span className="h-px w-25 bg-[#000027]/10"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
