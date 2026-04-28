import CTASection from '@/components/cta-section';
import SolutionHero from '@/components/solution-hero';
import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, ArrowRight, BarChart3, Eye, Filter, LayoutDashboard, ShieldCheck } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: 'Performance Monitoring',
        description: 'Tracks response quality, resolution rates, latency, and error frequency. Drift is flagged in real time.',
        icon: Activity,
    },
    {
        title: 'ROI Measurement',
        description: 'Translates activity into business metrics: time recovered, cost displaced, and throughput increased.',
        icon: BarChart3,
    },
    {
        title: 'Inefficiency Detection',
        description: 'Surfaces tools that are underperforming, redundant, or consuming budget without delivering value.',
        icon: Filter,
    },
    {
        title: 'Portfolio Intelligence',
        description: 'Consolidated view of the entire AI stack — what it costs, what it does, and what it worth.',
        icon: LayoutDashboard,
    },
    {
        title: 'Compliance & Risk Flagging',
        description: 'Monitors output for drift from approved behaviour, policy violations, and data anomalies.',
        icon: ShieldCheck,
    },
];

const deploymentFeatures = [
    'Vendor-agnostic integration',
    'Dashboard and reporting layer',
    'Alert and escalation configuration',
    'Customisable KPI frameworks',
    'Quarterly performance reviews',
];

export default function AIGuardian() {
    const headerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current?.children || [],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 1.2,
                    ease: 'power4.out',
                },
            );

            gsap.fromTo(
                '.feature-card',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.feature-card',
                        start: 'top 85%',
                    },
                },
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <MarketingLayout transparentNavbar={true}>
            <Head title="AI Guardian - NeuralNet" />

            {/* Flagship Hero Section */}
            <SolutionHero
                overline="Flagship Oversight System"
                titlePart1="You've deployed AI."
                titlePart2="Do you know if it's working?"
                description="Most organisations can't answer that question. AI Guardian is NeuralNet's enterprise oversight system, built to monitor every AI tool, agent, and automated workflow in your organisation — continuously."
                ctaText="Request an AI Guardian Assessment"
                ctaIcon={ArrowRight}
            />

            {/* Section 1: The Visibility Gap - Neural HUD Layout */}
            <section className="relative overflow-hidden border-t border-white/5 bg-[#000027] py-24 text-white md:py-32">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:items-center">
                        <div className="space-y-10 lg:col-span-7">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-6 items-center gap-1 overflow-hidden rounded border border-white/10 bg-white/5 px-2">
                                        <div className="size-1 animate-pulse rounded-full bg-white/40"></div>
                                        <span className="text-[9px] font-black tracking-widest text-white/40 uppercase italic">Live Protocol</span>
                                    </div>
                                    <div className="h-px w-8 bg-white/10"></div>
                                    <span className="text-[10px] font-black tracking-[0.5em] text-white/30 uppercase italic">
                                        Problem Statement 01
                                    </span>
                                </div>
                                <h3 className="text-5xl leading-[0.85] font-black tracking-tighter text-white uppercase italic md:text-7xl lg:text-8xl">
                                    The Visibility <br />
                                    <span className="text-white/20">Gap.</span>
                                </h3>
                            </div>

                            <div className="space-y-6">
                                <p className="max-w-2xl text-xl leading-relaxed font-light text-white/60">
                                    As organisations accumulate AI tools, a gap opens between what those systems were supposed to do and what they're
                                    actually doing. <span className="font-medium text-white/90">Performance degrades silently.</span> ROI goes
                                    unmeasured. Redundant tools proliferate. Compliance exposure builds without oversight.
                                </p>

                                <div className="grid max-w-md grid-cols-2 gap-4">
                                    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                                        <div className="mb-1 text-[10px] font-black tracking-widest text-white/20 uppercase">Risk Exposure</div>
                                        <div className="text-lg font-black text-white uppercase italic">Critical</div>
                                    </div>
                                    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                                        <div className="mb-1 text-[10px] font-black tracking-widest text-white/20 uppercase">Oversight Lag</div>
                                        <div className="text-lg font-black text-white uppercase italic">94% Diff</div>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative flex w-fit items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-6 transition-all hover:bg-white/[0.04]">
                                <div className="absolute -top-px left-8 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white transition-transform group-hover:scale-110">
                                    <ShieldCheck className="size-6 text-white/60" />
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-xs font-black tracking-[0.2em] text-white uppercase italic">Guardian Protocol</span>
                                    <span className="block text-[11px] tracking-tight text-white/40 uppercase">
                                        Continuous Operational Intelligence Integration
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="relative lg:col-span-5">
                            {/* High-Precision Multi-Scan Visual */}
                            <div className="relative flex aspect-square items-center justify-center p-12">
                                {/* Ambient Depth */}
                                <div className="absolute inset-0 rounded-full bg-white/[0.01] blur-3xl"></div>

                                {/* Architectural Rings */}
                                <div className="absolute inset-0 animate-[spin_60s_linear_infinite] rounded-full border border-white/[0.02]"></div>
                                <div className="absolute inset-16 animate-[spin_40s_linear_infinite_reverse] rounded-full border border-white/[0.04]"></div>
                                <div className="absolute inset-32 animate-[spin_30s_linear_infinite] rounded-full border border-white/[0.02]"></div>

                                {/* Multi-Line Radar Scan (Needles) */}
                                <div className="absolute inset-0 animate-[spin_8s_linear_infinite] opacity-30">
                                    <div className="h-full w-full rounded-full [background:conic-gradient(from_0deg,transparent_0deg,white_1deg,transparent_2deg)]"></div>
                                </div>
                                <div className="absolute inset-8 animate-[spin_12s_linear_infinite_reverse] opacity-20">
                                    <div className="h-full w-full rounded-full [background:conic-gradient(from_90deg,transparent_0deg,white_1deg,transparent_2deg)]"></div>
                                </div>
                                <div className="absolute inset-20 animate-[spin_15s_linear_infinite] opacity-10">
                                    <div className="h-full w-full rounded-full [background:conic-gradient(from_180deg,transparent_0deg,white_1deg,transparent_2deg)]"></div>
                                </div>

                                {/* Central Hub */}
                                <div className="relative flex items-center justify-center">
                                    {/* Core Glow */}
                                    <div className="absolute inset-0 size-full animate-pulse rounded-full bg-white/[0.05]"></div>
                                    
                                    <div className="relative z-10 flex items-center justify-center p-12">
                                        <Eye className="size-28 text-white/5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Oversight Modules - Matrix Grid on White */}
            <section className="relative overflow-hidden border-t border-gray-100 bg-white py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header Strip */}
                    <div className="mb-8 flex flex-col items-start gap-8 border-b border-gray-100 pb-6 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="h-px w-6 bg-[#000027]/40"></div>
                                <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase italic">
                                    Oversight Protocol 02
                                </span>
                            </div>
                            <h2 className="text-3xl leading-[0.9] font-black tracking-tighter text-[#000027] uppercase italic md:text-5xl lg:text-6xl">
                                Continuous Operational <br />
                                <span className="text-[#000027]">Intelligence.</span>
                            </h2>
                        </div>
                        <div className="max-w-xs space-y-2">
                            <p className="text-[10px] leading-relaxed font-bold tracking-widest text-[#000027]/30 uppercase italic">
                                What Guardian Does
                            </p>
                            <p className="text-[13px] leading-relaxed text-[#000027]/60">
                                Tracking performance, measuring return, and identifying failure points in real time.
                            </p>
                        </div>
                    </div>

                    {/* Matrix Grid */}
                    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-gray-100 bg-gray-100 lg:grid-cols-3">
                        {[
                            {
                                title: 'Performance Monitoring',
                                desc: 'Tracks response quality, resolution rates, latency, error frequency, and accuracy.',
                                icon: Activity,
                            },
                            {
                                title: 'ROI Measurement',
                                desc: 'Translates AI activity into business metrics: time recovered, cost displaced, volume handled.',
                                icon: BarChart3,
                            },
                            {
                                title: 'Inefficiency Detection',
                                desc: 'Identifies underperforming or redundant systems. Surfaces tools consuming budget without value.',
                                icon: Filter,
                            },
                            {
                                title: 'AI Portfolio Intelligence',
                                desc: 'Consolidated view of the entire stack — costs, activity, and worth. The data layer for strategy.',
                                icon: LayoutDashboard,
                            },
                            {
                                title: 'Compliance & Risk Flagging',
                                desc: 'Monitors output for drift from approved behaviour and policy violations. Flags issues pre-incident.',
                                icon: ShieldCheck,
                            },
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
                                <div className="space-y-4">
                                    <h4 className="text-base leading-tight font-bold tracking-tight text-[#000027] uppercase transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-[11px] leading-relaxed text-[#000027]/60">{item.desc}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-[#000027]/30 to-transparent transition-all duration-1000 group-hover:w-full"></div>
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                                    <div className="animate-scan-down absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-[#000027]/[0.03] to-transparent"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Why This Matters & Deployment - Linear Track */}
            <section className="border-t border-gray-100 bg-gray-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
                        <div className="space-y-8 lg:col-span-5">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black tracking-[0.4em] text-[#000027]/40 uppercase italic">
                                    Deployment Intelligence
                                </h4>
                                <p className="text-3xl leading-[1.1] font-black tracking-tighter text-[#000027] uppercase italic">
                                    AI without oversight <br />
                                    <span className="text-[#000027]/30">is spend without accountability.</span>
                                </p>
                            </div>
                            <p className="max-w-sm text-sm leading-relaxed text-[#000027]/60 italic">
                                "The organisations that get the most out of AI aren't the ones that deployed the most tools. They're the ones that
                                knew which tools were working and had the data to prove it."
                            </p>
                            <div className="h-px w-24 bg-[#000027]/20"></div>
                            <p className="max-w-sm text-sm leading-relaxed text-[#000027]/60">
                                Deployment is additive: it sits across your infrastructure and begins producing data from day one.
                            </p>
                        </div>

                        <div className="relative lg:col-span-7">
                            <div className="absolute top-0 left-4 h-full w-px bg-[#000027]/10 md:left-6"></div>
                            <div className="space-y-2">
                                {[
                                    { title: 'Vendor-agnostic integration', detail: 'Integrates with your existing stack regardless of vendor.' },
                                    { title: 'Dashboard and reporting layer', detail: 'Consolidated views for leadership and operations teams.' },
                                    { title: 'Alert and escalation configuration', detail: 'Custom triggers for operational anomalies.' },
                                    { title: 'Customisable KPI frameworks', detail: 'Metrics tailored by department or business unit.' },
                                    {
                                        title: 'Quarterly performance reviews',
                                        detail: 'Strategic optimisation recommendations based on active data.',
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="group relative rounded-xl py-4 pl-12 transition-all hover:bg-white md:pl-20">
                                        <div className="absolute top-6 left-[13px] size-1.5 rounded-full border border-[#000027]/40 bg-white transition-all group-hover:scale-150 group-hover:bg-[#000027] md:left-[21px]"></div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-4">
                                                <span className="text-[8px] font-black tracking-[0.2em] text-[#000027]/20 uppercase">0{i + 1}</span>
                                                <span className="text-xs font-bold text-[#000027] uppercase">{item.title}</span>
                                            </div>
                                            <p className="text-[10px] text-[#000027]/40 transition-colors group-hover:text-[#000027]/60">
                                                {item.detail}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="border-t border-gray-100 bg-white py-12">
                <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <p className="mb-4 text-sm font-black tracking-widest text-[#000027]/30 uppercase">
                        If you can't measure it, you can't manage it.
                    </p>
                    <p className="mx-auto mb-8 max-w-3xl text-base font-light text-[#000027]/60 italic">
                        Talk to us about what your AI stack looks like — and what AI Guardian would show you about it.
                    </p>
                </div>
            </section>

            {/* Final CTA Section */}
            <CTASection />
        </MarketingLayout>
    );
}
