import CTASection from '@/components/cta-section';
import SolutionHero from '@/components/solution-hero';
import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Globe, GraduationCap, Headset, Megaphone, Presentation, ShoppingBag, Video } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AIAvatars() {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.reveal-card',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.reveal-card',
                        start: 'top 85%',
                    },
                },
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <MarketingLayout transparentNavbar={true}>
            <Head title="AI Avatars - NeuralNet" />

            {/* Hero Section */}
            <SolutionHero
                overline="Digital Presence"
                titlePart1="Your brand. A consistent"
                titlePart2="presence. Deployed at scale."
                description="Two avatar systems, built for different jobs. One for content that needs to be produced and distributed. One for interactions that need to happen in real time."
                ctaText="Request an Avatar Demo"
                ctaIcon={ArrowRight}
            />

            {/* Offering 1: Pre-Recorded Avatars - Matrix Grid (Matching Cybersecurity Offering 01) */}
            <section className="relative overflow-hidden border-t border-gray-100 bg-white py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header Strip */}
                    <div className="mb-8 flex flex-col items-start gap-8 border-b border-gray-100 pb-6 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="h-px w-6 bg-[#000027]/40"></div>
                                <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase italic">System 01</span>
                            </div>
                            <h2 className="text-3xl leading-[1.1] sm:leading-[0.9] font-black tracking-tighter text-[#000027] uppercase italic md:text-5xl lg:text-6xl">
                                Pre-Recorded <br />
                                <span className="text-[#000027]">Avatars.</span>
                            </h2>
                        </div>
                        <div className="max-w-xs space-y-2">
                            <p className="text-[10px] leading-relaxed font-bold tracking-widest text-[#000027]/30 uppercase italic">
                                Photorealistic Production
                            </p>
                            <p className="text-[13px] leading-relaxed text-[#000027]/60">
                                Photorealistic AI avatars for video content — training programmes, marketing materials, and internal communications.
                            </p>
                        </div>
                    </div>

                    {/* Matrix Grid */}
                    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-gray-100 bg-gray-100 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: 'Employee onboarding and compliance training', icon: GraduationCap },
                            { title: 'Product explainers and demo videos', icon: Presentation },
                            { title: 'Marketing campaigns requiring localisation', icon: Megaphone },
                            { title: 'Executive communications and internal broadcasts', icon: Globe },
                            { title: 'E-learning content libraries', icon: Video },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="reveal-card group relative overflow-hidden bg-white p-8 transition-all duration-700 hover:bg-gray-50/50"
                            >
                                <div className="absolute top-4 right-6 text-5xl leading-none font-black text-[#000027]/[0.02] italic transition-all duration-700 select-none group-hover:scale-110 group-hover:text-[#000027]/5">
                                    0{i + 1}
                                </div>
                                <div className="mb-6 flex items-start justify-between">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#000027] text-white shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-6">
                                        <item.icon className="size-5" />
                                    </div>
                                </div>
                                <h4 className="text-base leading-tight font-bold tracking-tight text-[#000027] uppercase transition-colors">
                                    {item.title}
                                </h4>
                                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-[#000027]/30 to-transparent transition-all duration-1000 group-hover:w-full"></div>
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                                    <div className="animate-scan-down absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-[#000027]/[0.03] to-transparent"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offering 2: Real-Time Interactive - Technical Split Layout (Matching Cybersecurity Offering 02) */}
            <section className="overflow-hidden border-t border-white/5 bg-[#000027] py-16 text-white md:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 max-w-4xl space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-6 bg-white/20"></div>
                            <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase italic">System 02</span>
                        </div>
                        <h3 className="text-3xl leading-[1.1] sm:leading-[0.9] font-black tracking-tight text-white uppercase italic md:text-5xl lg:text-6xl">
                            Real-Time <br />
                            <span className="text-white/40">Interactive.</span>
                        </h3>
                        <p className="max-w-2xl pt-4 text-lg leading-relaxed font-light text-white/60">
                            Live, conversational AI avatars that interact with users in real time. They hold conversations, answer questions, qualify
                            leads, and handle front-desk interactions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {[
                                    { title: 'Website front desk and visitor qualification', icon: Globe },
                                    { title: 'Sales conversation and product walkthrough', icon: ShoppingBag },
                                    { title: 'Customer support and self-service resolution', icon: Headset },
                                    { title: 'HR and internal help desk', icon: GraduationCap },
                                    { title: 'Event and conference installations', icon: Presentation },
                                    { title: 'Interactive E-learning', icon: Video },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="reveal-card flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:bg-white/[0.04]"
                                    >
                                        <item.icon className="mt-1 size-4 text-white/40 transition-colors group-hover:text-white" />
                                        <span className="text-[11px] font-bold tracking-wide text-white/70 uppercase transition-colors group-hover:text-white">
                                            {item.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-8 lg:col-span-5">
                            {/* Technical detail line */}
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                            <h4 className="mb-4 text-lg font-black tracking-tight text-white uppercase italic">Infrastructure</h4>
                            <p className="text-base leading-relaxed font-light text-white/60 italic">
                                "Voice synthesis, lip sync, and conversational AI are integrated into a single deployable system. Custom avatar
                                creation uses defined brand personas."
                            </p>
                            <div className="mt-8 flex items-center gap-4 text-[10px] font-black tracking-[0.2em] text-white/30 uppercase">
                                <span>Deployment Ready</span>
                                <div className="h-px flex-1 bg-white/10"></div>
                                <span className="text-white/60">LTCY: &lt;200ms</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <CTASection />
        </MarketingLayout>
    );
}
