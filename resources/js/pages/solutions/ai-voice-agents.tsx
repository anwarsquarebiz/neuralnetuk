import CTASection from '@/components/cta-section';
import SolutionHero from '@/components/solution-hero';
import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Database, Globe, Headset, MessageSquare, PhoneIncoming, PhoneOutgoing, Settings, Users } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AIVoiceAgents() {
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
            <Head title="AI Voice Agents - NeuralNet" />

            {/* Hero Section */}
            <SolutionHero
                overline="Voice Automation"
                titlePart1="Every call handled."
                titlePart2="Every single time."
                description="Conversational AI systems that manage inbound and outbound calls across support, sales, and operations — with the reliability and consistency your team can't maintain at volume."
                ctaText="Request a Voice Agent Demo"
                ctaIcon={ArrowRight}
            />

            {/* Offering 1: Capabilities - Matrix Grid (Matching Cybersecurity Offering 01) */}
            <section className="relative overflow-hidden border-t border-gray-100 bg-white py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header Strip */}
                    <div className="mb-8 flex flex-col items-start gap-8 border-b border-gray-100 pb-6 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="h-px w-6 bg-[#000027]/40"></div>
                                <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase italic">Voice Protocol 01</span>
                            </div>
                            <h2 className="text-3xl leading-[0.9] font-black tracking-tighter text-[#000027] uppercase italic md:text-5xl lg:text-6xl">
                                System <br />
                                <span className="text-[#000027]">Capabilities.</span>
                            </h2>
                        </div>
                        <div className="max-w-xs space-y-2">
                            <p className="text-[10px] leading-relaxed font-bold tracking-widest text-[#000027]/30 uppercase italic">
                                Conversational Logic
                            </p>
                            <p className="text-[13px] leading-relaxed text-[#000027]/60">
                                AI Voice Agents are fully deployable conversational systems that operate over the phone.
                            </p>
                        </div>
                    </div>

                    {/* Matrix Grid */}
                    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-gray-100 bg-gray-100 lg:grid-cols-3">
                        {[
                            { title: 'Inbound call handling — triage, FAQ, account management', icon: PhoneIncoming },
                            { title: 'Outbound campaigns — appointment setting, follow-up', icon: PhoneOutgoing },
                            { title: 'CRM integration — real-time record creation and retrieval', icon: Database },
                            { title: 'Natural language understanding across accents and intent', icon: MessageSquare },
                            { title: 'Multi-language deployment for global scale', icon: Globe },
                            { title: 'Escalation routing with context handoff to live agents', icon: Settings },
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

            {/* Offering 2: Use Cases - Technical Split Layout (Matching Cybersecurity Offering 02) */}
            <section className="overflow-hidden border-t border-white/5 bg-[#000027] py-16 text-white md:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 max-w-4xl space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-6 bg-white/20"></div>
                            <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase italic">Voice Protocol 02</span>
                        </div>
                        <h3 className="text-3xl leading-[0.9] font-black tracking-tight text-white uppercase italic md:text-5xl lg:text-6xl">
                            Operational <br />
                            <span className="text-white/40">Use Cases.</span>
                        </h3>
                        <p className="max-w-2xl pt-4 text-lg leading-relaxed font-light text-white/60">
                            For every call your team shouldn't be spending time on, there's a voice agent that should.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {[
                                    { title: 'Customer Support — Tier 1: Handle inbound volume without a queue', icon: Headset },
                                    { title: 'Outbound Sales Qualification: Qualify, capture intent, and book meetings', icon: Users },
                                    { title: 'Appointment Operations: Inbound booking, rescheduling, and reminders', icon: Calendar },
                                    { title: 'Internal Operations: HR queries, IT helpdesk, and facilities requests', icon: Settings },
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

                            <h4 className="mb-4 text-lg font-black tracking-tight text-white uppercase italic">Autonomous Flow</h4>
                            <p className="text-base leading-relaxed font-light text-white/60 italic">
                                "They don't approximate a human experience — they handle the call, understand the context, take the action, and close
                                the interaction autonomously."
                            </p>
                            <div className="mt-8 flex items-center gap-4 text-[10px] font-black tracking-[0.2em] text-white/30 uppercase">
                                <span>Voice Efficiency</span>
                                <div className="h-px flex-1 bg-white/10"></div>
                                <span className="text-white/60">LTCY: &lt;500ms</span>
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
