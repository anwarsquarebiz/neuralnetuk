import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Phone } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import ButtonCom from './common/ButtonCom';
import ButtonSecondary from './common/ButtonSecondary';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Main content reveal
            gsap.fromTo(
                contentRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'top 30%',
                        scrub: 1,
                    },
                },
            );

            // Subtle background glow pulse
            gsap.to(bgRef.current, {
                opacity: 0.8,
                scale: 1.1,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 font-sans md:py-26">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div ref={contentRef} className="flex flex-col items-center text-center">
                    <div className="mb-12 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#000027]/10"></span>
                        <h4 className="text-[10px] font-bold tracking-[0.4em] text-[#000027]/40 uppercase">START A PROJECT</h4>
                        <span className="h-px w-8 bg-[#000027]/10"></span>
                    </div>

                    <h2 className="mb-10 max-w-4xl text-5xl leading-[1.1] sm:leading-[1.05] font-black tracking-tight text-[#000027] md:text-7xl lg:text-8xl">
                        The right system starts with the <br />
                        <span className="bg-[#000027] px-4 text-white">right conversation.</span>
                    </h2>

                    <p className="mx-auto mb-16 max-w-2xl text-xl leading-relaxed font-medium text-[#000027]/60 md:text-2xl">
                        Tell us what isn't working. <br className="hidden md:block" />
                        We'll tell you what we'd build.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row md:gap-8">
                        <ButtonCom title="Book a Scoping Call" icon={Phone} bgWhite={false} href="/contact" />
                        <ButtonSecondary 
                            title="Download Capabilities Overview" 
                            icon={Download} 
                            bgWhite={true} 
                            href="/downloads/NeuralNet_Capabilities_Overview.docx"
                            download="NeuralNet_Capabilities_Overview.docx"
                        />
                    </div>
                </div>
            </div>

            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#000027]/5 to-transparent" />
        </section>
    );
}
