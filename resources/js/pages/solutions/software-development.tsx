import CTASection from '@/components/cta-section';
import SolutionHero from '@/components/solution-hero';
import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Code2, Cpu, Database, Globe, Layers, MessageSquareCode, Zap } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
    { title: 'Custom software application development', icon: Code2 },
    { title: 'SaaS platform architecture and build', icon: Layers },
    { title: 'Legacy system integration and modernisation', icon: Cpu },
    { title: 'Database architecture and data pipeline engineering', icon: Database },
    { title: 'Systems scoping, technical specification, and project delivery', icon: Zap },
];

const useCases = [
    {
        title: 'Internal Operations Platform',
        description: 'Replace a stack of disconnected tools with a single, purpose-built system your teams actually use.',
        id: '01',
    },
    {
        title: 'Client-Facing SaaS Product',
        description: 'From architecture to first deployment — we build the platform and the infrastructure underneath it.',
        id: '02',
    },
    {
        title: 'API Layer for AI Integration',
        description: 'Build the connective tissue between your data, your AI tools, and the workflows that depend on them.',
        id: '03',
    },
    {
        title: 'Legacy Replacement',
        description: "Structured migration from systems that are slowing you down to infrastructure that won't.",
        id: '04',
    },
];

export default function SoftwareDevelopment() {
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current?.children || [],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 1,
                    ease: 'power4.out',
                },
            );

            gsap.fromTo(
                '.reveal-section',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.reveal-section',
                        start: 'top 85%',
                    },
                },
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <MarketingLayout transparentNavbar={true}>
            <Head title="Software Development - NeuralNet" />

            {/* Hero Section */}
            <SolutionHero
                overline="Solution Architecture"
                titlePart1="Infrastructure built for the way"
                titlePart2="business actually works."
                description="Off-the-shelf platforms solve general problems. Your organisation has specific ones. We build the software that fits the problem — not the problem that fits the software."
                ctaText="Describe Your Requirements"
                ctaIcon={ArrowRight}
            />

            {/* What It Is - Dark Section */}
            <section className="relative z-10 overflow-hidden bg-[#000027] py-16 font-sans text-white md:py-24">
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Architectural Header */}
                    <div className="mb-12 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-3xl space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="h-px w-6 bg-white/20"></div>
                                <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase">System Protocol 01</span>
                            </div>
                            <h2 className="text-3xl leading-[1.1] sm:leading-[1] tracking-tighter uppercase md:text-5xl lg:text-6xl">
                                <span className="font-light text-white/50">Custom Systems</span>
                                <br />
                                <span className="font-black text-white">Built for Scale.</span>
                            </h2>
                        </div>
                        <p className="max-w-xs text-[13px] leading-relaxed font-light tracking-wide text-gray-400">
                            NeuralNet's software development practice delivers custom software, SaaS platforms, APIs, and backend infrastructure.
                        </p>
                    </div>

                    {/* Capabilities Grid: Protocol Blocks style */}
                    <div className="mb-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-2 lg:grid-cols-5">
                        {capabilities.map((cap, i) => (
                            <div key={i} className="group relative bg-[#000027] p-8 transition-all duration-700 hover:bg-white/[0.01]">
                                <div className="mb-8 flex items-start justify-between">
                                    <span className="text-4xl font-black tracking-tighter text-white/[0.03] italic transition-all duration-700 group-hover:text-blue-500/10">
                                        0{i + 1}
                                    </span>
                                </div>
                                <div className="mb-6 flex size-10 items-center justify-center rounded-xl bg-white/5 text-white transition-transform group-hover:scale-110">
                                    <cap.icon className="size-5" />
                                </div>
                                <h3 className="text-sm font-bold tracking-[0.1em] text-white/90 uppercase transition-colors group-hover:text-white">
                                    {cap.title}
                                </h3>

                                {/* Technical Detail Line */}
                                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:w-full"></div>
                            </div>
                        ))}
                    </div>

                    {/* Narrative Footnote Section */}
                    <div className="relative flex flex-col items-center justify-between gap-8 rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:flex-row">
                        <div className="space-y-1">
                            <h4 className="text-[9px] font-black tracking-[0.4em] text-white/30 uppercase">Operational Reality</h4>
                            <p className="max-w-4xl text-lg leading-relaxed text-white/70">
                                <span className="font-bold text-white">Our collaborative approach</span> ensures that we understand your unique
                                challenges. We build feature-rich, scalable applications that{' '}
                                <span className="text-white">automate time-intensive tasks</span> and optimize workflows, all while being
                                production-ready and fully integrated.
                            </p>
                        </div>
                        <div className="flex size-12 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-500 hover:border-white hover:bg-white hover:text-[#000027]">
                            <Cpu className="size-5" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gen AI & Web Apps - Ultra Compact Section */}
            <section className="border-t border-gray-100 bg-white py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-6 bg-[#000027]/40"></div>
                            <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase">Specialisation</span>
                        </div>
                        <div className="mx-8 hidden h-px flex-1 bg-gray-100 md:block"></div>
                        <span className="text-[10px] font-black tracking-[0.3em] text-[#000027]/20 uppercase">Technical Specialisation Layer</span>
                    </div>

                    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-gray-100 bg-gray-100 md:grid-cols-2 lg:grid-cols-2">
                        {/* Gen AI Block */}
                        <div className="reveal-section group relative bg-white p-8 transition-all duration-700 hover:bg-gray-50">
                            <div className="mb-8 flex items-start justify-between">
                                <div className="flex size-12 items-center justify-center rounded-xl bg-[#000027] text-white shadow-lg transition-transform group-hover:scale-110">
                                    <MessageSquareCode className="size-6" />
                                </div>
                                <span className="text-[9px] font-bold tracking-[0.3em] text-[#000027]/40 uppercase">Synthesis</span>
                            </div>
                            <h3 className="mb-4 text-xl font-black tracking-tight text-[#000027] uppercase italic md:text-2xl">
                                Generative AI <br />
                                <span className="text-lg font-light text-[#000027]/30 not-italic">Intelligence Layer</span>
                            </h3>
                            <p className="mb-6 max-w-md text-sm leading-relaxed text-[#000027]/60">
                                Content-generation systems and customer experience enhancers that integrate into existing infrastructure.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['LLM', 'FINE-TUNING', 'VECTOR DB'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md bg-gray-50 px-2 py-1 text-[8px] font-black tracking-widest text-[#000027]/40 uppercase"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#000027] transition-all duration-1000 group-hover:w-full"></div>
                        </div>

                        {/* Web Apps Block */}
                        <div className="reveal-section group relative bg-white p-8 transition-all duration-700 hover:bg-gray-50">
                            <div className="mb-8 flex items-start justify-between">
                                <div className="flex size-12 items-center justify-center rounded-xl bg-[#000027] text-white shadow-lg transition-transform group-hover:scale-110">
                                    <Globe className="size-6" />
                                </div>
                                <span className="text-[9px] font-bold tracking-[0.3em] text-[#000027]/40 uppercase">Interface</span>
                            </div>
                            <h3 className="mb-4 text-xl font-black tracking-tight text-[#000027] uppercase italic md:text-2xl">
                                AI-Powered Apps <br />
                                <span className="text-lg font-light text-[#000027]/30 not-italic">Operational Layer</span>
                            </h3>
                            <p className="mb-6 max-w-md text-sm leading-relaxed text-[#000027]/60">
                                Intuitive web and mobile applications that leverage AI to drive engagement and personalized experiences.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['FULL-STACK', 'REAL-TIME', 'UX/UI'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md bg-gray-50 px-2 py-1 text-[8px] font-black tracking-widest text-[#000027]/40 uppercase"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#000027] transition-all duration-1000 group-hover:w-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases - Compact Bento Section */}
            <section className="border-t border-gray-100 bg-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="h-px w-6 bg-[#000027]/40"></div>
                                <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase">Utility Protocols</span>
                            </div>
                            <h2 className="text-3xl leading-[1.1] sm:leading-[0.9] font-black tracking-tighter text-[#000027] uppercase italic md:text-5xl lg:text-6xl">
                                Operational <br />
                                <span className="text-[#000027]">Use Cases.</span>
                            </h2>
                        </div>
                        <p className="max-w-xs text-[11px] leading-relaxed font-bold tracking-widest text-[#000027]/30 uppercase">
                            Specific deployment scenarios where NeuralNet infrastructure solves complex organizational challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
                        {/* Large Bento Item 01 */}
                        <div className="reveal-section group relative rounded-2xl border border-[#000027]/5 bg-gray-50 p-10 transition-all hover:bg-white hover:shadow-2xl md:col-span-3 lg:col-span-7">
                            <div className="mb-12 flex items-start justify-between">
                                <span className="text-6xl font-black tracking-tighter text-[#000027]/[0.03] italic">01</span>
                            </div>
                            <h4 className="mb-4 text-2xl font-bold tracking-tight text-[#000027]">{useCases[0].title}</h4>
                            <p className="max-w-md text-[15px] leading-relaxed text-[#000027]/60">{useCases[0].description}</p>
                        </div>

                        {/* Smaller Bento Item 02 */}
                        <div className="reveal-section group relative rounded-2xl border border-[#000027]/5 bg-gray-50 p-10 transition-all hover:bg-white hover:shadow-2xl md:col-span-3 lg:col-span-5">
                            <div className="mb-12 flex items-start justify-between">
                                <span className="text-6xl font-black tracking-tighter text-[#000027]/[0.03] italic">02</span>
                            </div>
                            <h4 className="mb-4 text-xl leading-tight font-bold tracking-tight text-[#000027]">{useCases[1].title}</h4>
                            <p className="text-sm leading-relaxed text-[#000027]/60">{useCases[1].description}</p>
                        </div>

                        {/* Smaller Bento Item 03 */}
                        <div className="reveal-section group relative rounded-2xl border border-[#000027]/5 bg-gray-50 p-10 transition-all hover:bg-white hover:shadow-2xl md:col-span-3 lg:col-span-5">
                            <div className="mb-12 flex items-start justify-between">
                                <span className="text-6xl font-black tracking-tighter text-[#000027]/[0.03] italic">03</span>
                            </div>
                            <h4 className="mb-4 text-xl leading-tight font-bold tracking-tight text-[#000027]">{useCases[2].title}</h4>
                            <p className="text-sm leading-relaxed text-[#000027]/60">{useCases[2].description}</p>
                        </div>

                        {/* Large Bento Item 04 */}
                        <div className="reveal-section group relative rounded-2xl border border-[#000027]/5 bg-gray-50 p-10 transition-all hover:bg-white hover:shadow-2xl md:col-span-3 lg:col-span-7">
                            <div className="mb-12 flex items-start justify-between">
                                <span className="text-6xl font-black tracking-tighter text-[#000027]/[0.03] italic">04</span>
                            </div>
                            <h4 className="mb-4 text-2xl font-bold tracking-tight text-[#000027]">{useCases[3].title}</h4>
                            <p className="max-w-md text-[15px] leading-relaxed text-[#000027]/60">{useCases[3].description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <CTASection />
        </MarketingLayout>
    );
}
