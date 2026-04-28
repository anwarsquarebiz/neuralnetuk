import gsap from 'gsap';
import { LucideIcon } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import ButtonCom from './common/ButtonCom';

interface SolutionHeroProps {
    overline: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    ctaText: string;
    ctaIcon: LucideIcon;
}

export default function SolutionHero({ overline, titlePart1, titlePart2, description, ctaText, ctaIcon }: SolutionHeroProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

            tl.fromTo(headerRef.current?.children || [], { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 });

            tl.fromTo(contentRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.8');
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white pt-32 pb-20 font-sans md:pt-48 md:pb-32">
            {/* Background accent */}
            <div className="absolute top-0 right-0 z-0 h-full w-1/3 origin-top translate-x-20 -skew-x-12 transform bg-gray-50/50"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Architectural Header */}
                <div ref={headerRef} className="mb-16 md:mb-24">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-px w-8 bg-[#000027]/20"></div>
                        <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase">{overline}</span>
                    </div>

                    <h1 className="text-5xl leading-[0.95] font-black tracking-tighter text-[#000027] uppercase italic md:text-7xl lg:text-8xl">
                        {titlePart1} <br />
                        <span className="relative inline-block not-italic">
                            {/* Bottom Layer: The Stroke */}
                            <span className="absolute inset-0 text-transparent opacity-80 [-webkit-text-stroke:2px_#000027]" aria-hidden="true">
                                {titlePart2}
                            </span>
                            {/* Top Layer: Matches background to mask internal lines */}
                            <span className="relative text-white">{titlePart2}</span>
                        </span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* Descriptive Content */}
                    <div ref={contentRef} className="flex flex-col justify-center lg:col-span-8">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <p className="text-2xl leading-snug font-medium text-[#000027] md:text-3xl lg:text-4xl">{description}</p>
                                <div className="h-px w-24 bg-blue-600/30"></div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <ButtonCom title={ctaText} icon={ctaIcon} href="/contact" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
