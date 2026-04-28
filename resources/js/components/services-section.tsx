import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code2, Eye, Mic2, ShieldCheck, Star, UserCircle2 } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const systems = [
    {
        id: '01',
        title: 'Software Development',
        description: 'Custom AI software solutions tailored to your specific needs. Deployed to production.',
        icon: Code2,
        slug: 'software-development',
        className: 'lg:col-span-2 lg:row-span-1',
    },
    {
        id: '02',
        title: 'Cybersecurity',
        description: 'Penetration testing and an AI-driven Security Operations Centre. Real-time response.',
        icon: ShieldCheck,
        slug: 'cybersecurity',
        className: 'lg:col-span-1 lg:row-span-1',
    },
    {
        id: '03',
        title: 'AI Avatars',
        description: 'Pre-recorded and real-time interactive avatars for training and support.',
        icon: UserCircle2,
        slug: 'ai-avatars',
        className: 'lg:col-span-1 lg:row-span-1',
    },
    {
        id: '04',
        title: 'AI Voice Agents',
        description: 'Conversational AI handling calls instantly. No holds, no transfers, just resolution.',
        icon: Mic2,
        slug: 'ai-voice-agents',
        className: 'lg:col-span-2 lg:row-span-1',
    },
    {
        id: '05',
        title: 'AI Guardian',
        description:
            'The oversight system for your entire AI stack. Tracks performance, measures ROI, identifies failure points, and ensures every tool earns its place.',
        icon: Eye,
        slug: 'ai-guardian',
        featured: true,
        star: true,
        className: 'lg:col-span-2 lg:row-span-2',
    },
];

export default function ServicesSection() {
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
        <section id="services" ref={sectionRef} className="relative overflow-hidden bg-white py-16 font-sans md:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div ref={headerRef} className="mb-16">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#000027]/20"></span>
                        <h4 className="text-[10px] font-bold tracking-[0.4em] text-[#000027]/60 uppercase">Solutions OVERVIEW</h4>
                    </div>
                    <h2 className="max-w-3xl text-4xl leading-[1.1] font-extrabold tracking-tight text-[#000027] md:text-5xl lg:text-6xl">
                        Five systems.
                        <br />
                        <span className="text-[#000027]/40">One infrastructure.</span>
                    </h2>
                </div>

                {/* Awwwards Bento Grid */}
                <div ref={gridRef} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                    {systems.map((system) => (
                        <Link
                            key={system.id}
                            href={`/solutions/${system.slug}`}
                            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-500 ${
                                system.featured
                                    ? 'border-transparent bg-[#000027] text-white shadow-2xl'
                                    : 'border-[#000027]/5 bg-gray-50 hover:border-[#000027]/10 hover:bg-white hover:shadow-2xl'
                            } ${system.className}`}
                        >
                            <div className="relative z-10">
                                <div className="mb-12 flex items-start justify-between">
                                    <div
                                        className={`flex size-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${
                                            system.featured ? 'bg-white/10' : 'bg-white shadow-sm'
                                        }`}
                                    >
                                        <system.icon className={`size-6 ${system.featured ? 'text-white' : 'text-[#000027]'}`} />
                                    </div>
                                </div>

                                <h3
                                    className={`mb-4 flex items-center gap-2 text-2xl font-black ${system.featured ? 'text-white md:text-4xl' : 'text-[#000027]'}`}
                                >
                                    {system.title}
                                    {system.star && <Star className="size-5 fill-amber-400 text-amber-400" />}
                                </h3>
                                <p
                                    className={`max-w-sm text-base leading-relaxed ${system.featured ? 'text-white/70 md:text-lg' : 'text-[#000027]/60'}`}
                                >
                                    {system.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-12 flex items-center justify-between transition-transform group-hover:translate-x-1">
                                <span
                                    className={`text-[10px] font-black tracking-widest uppercase ${system.featured ? 'text-white' : 'text-[#000027]'}`}
                                >
                                    Explore System
                                </span>
                                <ArrowUpRight className={`size-4 ${system.featured ? 'text-white' : 'text-[#000027]'}`} />
                            </div>

                            {/* Decorative Background Elements */}
                            {system.featured && (
                                <>
                                    <div className="pointer-events-none absolute top-0 right-0 p-8 font-mono text-[120px] leading-none font-black opacity-10 select-none">
                                        05
                                    </div>
                                    <div className="pointer-events-none absolute -top-20 -right-20 size-80 rounded-full bg-blue-600/20 blur-[100px]"></div>
                                </>
                            )}
                        </Link>
                    ))}

                    {/* High Impact Statement - No Box, Spans remaining space */}
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
