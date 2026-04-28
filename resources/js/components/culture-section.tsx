import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function CultureSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
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

            if (gridRef.current) {
                // Animate each column of the grid separately for a staggered feel
                gsap.fromTo(
                    gridRef.current.children,
                    { y: (i) => (i === 0 ? 50 : 100), opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 90%',
                            end: 'top 30%',
                            scrub: 1,
                        },
                    },
                );
            }

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
                    {/* Left: Text Content */}
                    <div ref={textRef} className="space-y-8">
                        <div>
                            <h2 className="mb-6 text-3xl font-extrabold text-[#0a1a3b] md:text-4xl">Our Culture</h2>
                            <p className="mb-6 text-lg leading-relaxed text-[#4a5568]">
                                At NeuralNet, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our
                                team members to take ownership of their work and drive meaningful results.
                            </p>
                            <p className="text-lg leading-relaxed text-[#4a5568]">
                                We are a team of passionate and dedicated professionals who are committed to delivering exceptional quality and value
                                to our clients. Our culture is built on a foundation of trust, respect, and mutual support.
                            </p>
                        </div>
                        <Button className="h-12 rounded-xl bg-[#000027] px-8 font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700">
                            Join our team
                        </Button>
                    </div>

                    {/* Right: 2x2 Image Grid */}
                    <div ref={gridRef} className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="group aspect-square overflow-hidden rounded-[2rem] bg-blue-50">
                                <picture>
                                    <source srcSet="/assets/about-us/our-culture/first.webp" type="image/webp" />
                                    <img
                                        src="/assets/about-us/our-culture/first.webp"
                                        alt="Team Event"
                                        className="pointer-events-none h-full w-full object-cover transition-transform duration-700 select-none group-hover:scale-110"
                                        style={{ transform: 'translateZ(0)' }}
                                        loading="lazy"
                                    />
                                </picture>
                            </div>
                            <div className="group aspect-[3/4] overflow-hidden rounded-[2rem] bg-indigo-50">
                                <picture>
                                    <source srcSet="/assets/about-us/our-culture/second.webp" type="image/webp" />
                                    <img
                                        src="/assets/about-us/our-culture/second.webp"
                                        alt="Workplace"
                                        className="pointer-events-none h-full w-full object-cover transition-transform duration-700 select-none group-hover:scale-110"
                                        style={{ transform: 'translateZ(0)' }}
                                        loading="lazy"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                            <div className="group aspect-[3/4] overflow-hidden rounded-[2rem] bg-sky-50">
                                <picture>
                                    <source srcSet="/assets/about-us/our-culture/third.webp" type="image/webp" />
                                    <img
                                        src="/assets/about-us/our-culture/third.webp"
                                        alt="Collaboration"
                                        className="pointer-events-none h-full w-full object-cover transition-transform duration-700 select-none group-hover:scale-110"
                                        style={{ transform: 'translateZ(0)' }}
                                        loading="lazy"
                                    />
                                </picture>
                            </div>
                            <div className="group aspect-square overflow-hidden rounded-[2rem] bg-slate-50">
                                <picture>
                                    <source srcSet="/assets/about-us/our-culture/fourth.webp" type="image/webp" />
                                    <img
                                        src="/assets/about-us/our-culture/fourth.webp"
                                        alt="Office Fun"
                                        className="pointer-events-none h-full w-full object-cover transition-transform duration-700 select-none group-hover:scale-110"
                                        style={{ transform: 'translateZ(0)' }}
                                        loading="lazy"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
