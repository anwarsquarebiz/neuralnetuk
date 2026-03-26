import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function AboutHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

            tl.fromTo(textRef.current?.children || [], { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, delay: 0.2 });

            tl.fromTo(imageRef.current, { scale: 0.9, opacity: 0, x: 50 }, { scale: 1, opacity: 1, x: 0 }, '-=0.7');
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="overflow-hidden bg-[#f0f4ff] pt-24 pb-12 md:pt-32 md:pb-20 font-sans">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left: Text Content */}
                    <div ref={textRef} className="space-y-8 text-center lg:text-left">
                        <h1 className="text-4xl leading-[1.1] font-extrabold text-[#0a1a3b] md:text-5xl lg:text-6xl">
                            Driving Innovation Through AI & Digital Technology
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#4a5568] md:text-xl lg:mx-0">
                            We help businesses grow by delivering high-quality, AI-powered software solutions. Our team of digital innovators and
                            business specialists is dedicated to your success.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4 lg:justify-start">
                            <Button className="h-14 rounded-xl bg-blue-600 px-10 text-lg font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700">
                                Contact Us
                            </Button>
                        </div>
                    </div>

                    {/* Right: Illustration/Image Mockup */}
                    <div ref={imageRef} className="group relative">
                        <div className="absolute -inset-4 rounded-[2rem] bg-blue-600/5 blur-2xl transition-all duration-700 group-hover:bg-blue-600/10"></div>
                        <div className="relative transform overflow-hidden rounded-[2rem] border border-white/50 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:scale-[1.02] aspect-[4/3]">
                            <picture>
                                <source srcSet="/assets/about-us/about-hero.webp" type="image/webp" />
                                <img
                                    src="/assets/about-us/about-hero.webp"
                                    alt="NeuralNet Innovation"
                                    className="w-full h-full rounded-2xl object-cover shadow-inner select-none pointer-events-none"
                                    style={{ transform: 'translateZ(0)' }}
                                    loading="eager"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
