import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3, PenTool, Target, Zap } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: '01',
        mode: 'SCOPING',
        title: 'Start with the problem',
        description:
            'Every engagement begins with a scoping process. We want to understand the actual business constraints before recommending anything.',
        icon: Target,
    },
    {
        id: '02',
        mode: 'CONTEXT',
        title: 'Design the right system',
        description:
            "Not every problem needs an AI solution. When it does, we design for the specific context — not for what's available off the shelf.",
        icon: PenTool,
    },
    {
        id: '03',
        mode: 'STANDARDS',
        title: 'Build to production standard',
        description: "Everything we deliver is built to be deployed, maintained, and measured. We don't hand over prototypes.",
        icon: Zap,
    },
    {
        id: '04',
        mode: 'QUANTIFIED',
        title: 'Measure what matters',
        description: 'Performance is quantified from day one. We define success criteria before build, and we track against them.',
        icon: BarChart3,
    },
];

export default function HowWeWorkSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

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

            // Steps animation
            if (gridRef.current) {
                gsap.fromTo(
                    gridRef.current.children,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.2,
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
        <section ref={sectionRef} className="relative z-10 overflow-hidden bg-white py-20 font-sans md:py-32">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Architectural Header */}
                <div ref={headerRef} className="mb-16 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-6 bg-blue-600/40"></div>
                            <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase">Operational Discipline</span>
                        </div>
                        <h2 className="text-3xl leading-[1.1] sm:leading-[1] tracking-tighter text-[#000027] uppercase md:text-5xl lg:text-6xl">
                            <span className="font-light opacity-50">The methodology of</span>
                            <br />
                            <span className="font-black">High Performance.</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-[13px] leading-relaxed font-light tracking-wide text-[#000027]/60">
                        Defining success criteria from day one and tracking against them through custom AI systems.
                    </p>
                </div>

                {/* Steps Section: Protocol Blocks in Light Mode */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 gap-px overflow-hidden rounded-[2.5rem] border border-[#000027]/5 bg-[#000027]/5 md:grid-cols-2 lg:grid-cols-4"
                >
                    {steps.map((step, i) => (
                        <div key={i} className="group relative bg-gray-50 p-10 transition-all duration-700 hover:bg-white hover:shadow-2xl">
                            <div className="mb-12 flex items-start justify-between">
                                <span className="text-5xl font-black tracking-tighter text-[#000027]/[0.03] italic transition-all duration-700 group-hover:text-blue-600/10">
                                    {step.id}
                                </span>
                                <span className="text-[9px] font-bold tracking-[0.3em] text-blue-600/40 uppercase transition-colors group-hover:text-blue-600">
                                    {step.mode}
                                </span>
                            </div>

                            <div className="mb-8 flex size-12 items-center justify-center rounded-xl border border-[#000027]/5 bg-white text-[#000027]/40 transition-all duration-500 group-hover:bg-blue-600/10 group-hover:text-blue-600">
                                <step.icon className="size-6" />
                            </div>

                            <h3 className="mb-4 text-xl font-bold tracking-[0.1em] text-[#000027]/90 uppercase transition-colors group-hover:text-[#000027]">
                                {step.title}
                            </h3>
                            <p className="text-[13px] leading-relaxed font-light tracking-wide text-[#000027]/60 transition-colors group-hover:text-[#000027]/80">
                                {step.description}
                            </p>

                            {/* Technical Detail Line */}
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent transition-all duration-1000 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
