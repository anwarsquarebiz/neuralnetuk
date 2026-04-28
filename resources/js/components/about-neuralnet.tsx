import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutNeuralNet() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 90%',
                        end: 'top 40%',
                        scrub: 1,
                    },
                },
            );

            gsap.fromTo(
                textRef.current,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 90%',
                        end: 'top 40%',
                        scrub: 1,
                    },
                },
            );

            ScrollTrigger.refresh();
        }, sectionRef);

        const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={sectionRef} className="overflow-hidden bg-white py-12 font-sans md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div ref={imageRef} className="group relative order-2 lg:order-1">
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-[#000027]/5 blur-2xl transition-all duration-700 group-hover:bg-[#000027]/10"></div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/50 bg-gray-100 shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
                            <picture>
                                <source srcSet="/assets/about-us/about section image.webp" type="image/webp" />
                                <img
                                    src="/assets/about-us/about section image.webp"
                                    alt="About NeuralNet"
                                    className="pointer-events-none h-full w-full object-cover transition-transform duration-700 select-none group-hover:scale-110"
                                    style={{ transform: 'translateZ(0)' }}
                                    loading="lazy"
                                />
                            </picture>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div ref={textRef} className="order-1 space-y-8 lg:order-2">
                        <div>
                            <h2 className="mb-6 text-3xl font-extrabold text-[#0a1a3b] md:text-4xl">About NeuralNet</h2>
                            <p className="mb-6 text-lg leading-relaxed text-[#4a5568]">
                                NeuralNet is a UK-based IT consulting and software development company focused on delivering high-quality solutions on
                                time and within budget. We specialize in AI-driven digital transformation for enterprise clients worldwide.
                            </p>
                            <p className="text-lg leading-relaxed text-[#4a5568]">
                                Our mission is to empower businesses with the latest technologies and strategic insights they need to thrive in the
                                digital age. With a team of world-class engineers and strategists, we turn complex challenges into competitive
                                advantages.
                            </p>
                        </div>
                        <Button className="h-12 rounded-xl bg-[#000027] px-8 font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700">
                            Join our team
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
