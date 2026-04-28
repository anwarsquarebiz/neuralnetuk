import gsap from 'gsap';
import { ArrowRight, Phone } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import ButtonCom from './common/ButtonCom';
import ButtonSecondary from './common/ButtonSecondary';

export default function AboutHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

            tl.fromTo(headerRef.current?.children || [], { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 });

            tl.fromTo(contentRef.current, { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, '-=0.8');

            tl.fromTo(
                imageContainerRef.current,
                { scale: 0.95, opacity: 0, filter: 'blur(10px)' },
                { scale: 1, opacity: 1, filter: 'blur(0px)' },
                '-=1',
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white pt-32 pb-20 font-sans md:pt-48 md:pb-32">
            {/* Background elements */}
            <div className="absolute top-0 right-0 z-0 h-full w-1/3 origin-top translate-x-20 -skew-x-12 transform bg-gray-50/50"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Architectural Header */}
                <div ref={headerRef} className="mb-16 md:mb-24">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-px w-8 bg-[#000027]/20"></div>
                        <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase">Operational Identity</span>
                    </div>

                    <h1 className="text-4xl leading-[1.1] font-black tracking-tighter text-[#000027] uppercase italic sm:text-5xl sm:leading-[0.95] md:text-7xl lg:text-8xl">
                        Built for <br />
                        <span className="relative inline-block not-italic">
                            {/* Bottom Layer: The Stroke */}
                            <span className="absolute inset-0 text-transparent opacity-80 [-webkit-text-stroke:2px_#000027]" aria-hidden="true">
                                Performance.
                            </span>
                            {/* Top Layer: Matches background to mask internal lines */}
                            <span className="relative text-white">Performance.</span>
                        </span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* Compact Info & Image Integration */}
                    <div className="lg:col-span-5">
                        <div ref={imageContainerRef} className="group relative">
                            <div className="absolute -inset-2 rounded-3xl bg-blue-600/5 blur-xl transition-all duration-700 group-hover:bg-blue-600/10"></div>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#000027]/5 bg-white shadow-[20px_20px_60px_rgba(0,0,0,0.03)]">
                                <picture>
                                    <source srcSet="/assets/about-us/about-hero.webp" type="image/webp" />
                                    <img
                                        src="/assets/about-us/about-hero.webp"
                                        alt="NeuralNet Enterprise AI"
                                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        loading="eager"
                                    />
                                </picture>

                                {/* Overlay Tag */}
                                <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/50 bg-white/80 p-4 backdrop-blur-md">
                                    <p className="mb-1 text-[10px] font-black tracking-widest text-[#000027] uppercase opacity-40">HQ Location</p>
                                    <p className="text-sm font-bold text-[#000027]">United Kingdom</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Descriptive Content */}
                    <div ref={contentRef} className="flex flex-col justify-center lg:col-span-7 lg:pl-12">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <p className="text-2xl leading-snug font-medium text-[#000027] md:text-3xl">
                                    NeuralNet is a UK-based enterprise AI company. We design, build, deploy, and govern the AI systems that
                                    organisations depend on to operate.
                                </p>
                                <div className="h-px w-24 bg-blue-600/30"></div>
                                <p className="text-lg leading-relaxed text-[#000027]/60 md:text-xl">
                                    We don't sell AI for its own sake. We start with the business problem — what's inefficient, what's failing, what's
                                    costing too much or taking too long — and we design the system that addresses it. That discipline is what
                                    separates deployments that perform from ones that don't.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <ButtonCom title="Book a Scoping Call" icon={Phone} href="/contact" />
                                <ButtonSecondary title="View Capabilities" icon={ArrowRight} href="#solutions" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
