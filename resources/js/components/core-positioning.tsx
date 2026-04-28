import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const CorePositioning = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const pillarsRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                headerRef.current?.children || [],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 85%',
                    },
                },
            );

            // Pillars animation
            if (pillarsRef.current) {
                gsap.fromTo(
                    pillarsRef.current.children,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: pillarsRef.current,
                            start: 'top 80%',
                        },
                    },
                );
            }

            // Footer animation
            gsap.fromTo(
                footerRef.current,
                { scale: 0.95, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 90%',
                    },
                },
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative z-10 overflow-hidden bg-[#000027] py-16 font-sans text-white md:py-24">
            {/* Minimal Brand Aura */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[#000027]/40 blur-[150px]"></div>
                <div className="absolute top-0 right-0 size-96 rounded-full bg-blue-500/5 blur-[100px]"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Architectural Header */}
                <div ref={headerRef} className="mb-12 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-6 bg-blue-500/40"></div>
                            <span className="text-[10px] font-black tracking-[0.5em] text-blue-400/80 uppercase">Positioning Protocol</span>
                        </div>
                        <h2 className="text-3xl leading-[1] tracking-tighter uppercase md:text-5xl lg:text-6xl">
                            <span className="font-light text-white/50">Engineered for</span>
                            <br />
                            <span className="font-black text-white">Exceptional Value.</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-[13px] leading-relaxed font-light tracking-wide text-gray-400">
                        Defining objectives and deploying custom AI frameworks with surgical precision.
                    </p>
                </div>

                {/* Pillars Section: Protocol Blocks */}
                <div
                    ref={pillarsRef}
                    className="mb-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 lg:grid-cols-3"
                >
                    {[
                        {
                            id: '01',
                            mode: 'EFFICIENCY',
                            title: 'Automate',
                            description: 'Transforming legacy processes into high-performance autonomous systems.',
                        },
                        {
                            id: '02',
                            mode: 'OPTIMIZATION',
                            title: 'Refine',
                            description: 'Continuous architectural tuning to ensure peak operational output.',
                        },
                        {
                            id: '03',
                            mode: 'SCALE',
                            title: 'Expand',
                            description: 'Deploying AI-driven insights to capture new strategic market sectors.',
                        },
                    ].map((pillar, i) => (
                        <div key={i} className="group relative bg-[#000027] p-8 transition-all duration-700 hover:bg-white/[0.01]">
                            <div className="mb-8 flex items-start justify-between">
                                <span className="text-5xl font-black tracking-tighter text-white/[0.03] italic transition-all duration-700 group-hover:text-blue-500/10">
                                    {pillar.id}
                                </span>
                                <span className="text-[9px] font-bold tracking-[0.3em] text-blue-500/30 uppercase transition-colors group-hover:text-blue-400/60">
                                    {pillar.mode}
                                </span>
                            </div>
                            <h3 className="mb-4 text-xl font-bold tracking-[0.1em] text-white/90 uppercase transition-colors group-hover:text-white">
                                {pillar.title}
                            </h3>
                            <p className="text-[13px] leading-relaxed font-light tracking-wide text-gray-400 transition-colors group-hover:text-gray-300">
                                {pillar.description}
                            </p>

                            {/* Technical Detail Line */}
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transition-all duration-1000 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>

                {/* Strategic Note Section */}
                <div
                    ref={footerRef}
                    className="relative flex flex-col items-center justify-between gap-8 rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:flex-row"
                >
                    <div className="space-y-1">
                        <h4 className="text-[9px] font-black tracking-[0.4em] text-white/30 uppercase">Strategic ROI</h4>
                        <p className="max-w-2xl text-xl leading-tight md:text-2xl">
                            <span className="font-light text-white/60">Focused on generating</span>{' '}
                            <span className="font-bold text-white">tangible capital ROI</span>{' '}
                            <span className="font-light text-white/60">through innovation.</span>
                        </p>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-500 hover:border-white hover:bg-white hover:text-[#000027]">
                        <Target className="size-5" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorePositioning;
