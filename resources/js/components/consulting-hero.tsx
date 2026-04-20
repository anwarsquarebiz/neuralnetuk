import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

export default function ConsultingHero() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

            tl.fromTo(contentRef.current?.children || [], { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, delay: 0.2 });

            tl.fromTo(imageRef.current, { x: 30, opacity: 0, scale: 0.95 }, { x: 0, opacity: 1, scale: 1 }, '-=0.6');
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="overflow-hidden bg-[#E4ECFF] py-12 font-sans md:pt-32">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 text-center md:flex-row md:text-left lg:px-8">
                {/* Left Content */}
                <div ref={contentRef} className="max-w-xl">
                    <h1 className="mb-6 text-3xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-4xl">
                        At NeuralNet our Specialists are ready to assist
                    </h1>
                    <p className="mb-10 leading-relaxed font-medium text-gray-600">
                        With our expertise in AI, architecture, development and QA, we can design a comprehensive strategy to improve efficiency,
                        performance, and your business outcomes.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <Button
                            asChild
                            size="lg"
                            className="h-auto rounded-md bg-[#000027] px-10 py-3 text-sm font-bold text-white shadow-xl hover:bg-blue-700"
                        >
                            <Link href="/contact" className="flex items-center gap-2">
                                Get Started <ChevronRight className="size-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                <div ref={imageRef} className="w-full max-w-md flex-1">
                    <div className="relative flex aspect-video w-full items-center justify-center p-4">
                        <picture>
                            <source srcSet="/assets/consulting hero.webp" type="image/webp" />
                            <img
                                src="/assets/consulting hero.webp"
                                alt="Consulting Hero"
                                className="pointer-events-none h-full w-full rounded-lg object-cover select-none"
                                style={{ transform: 'translateZ(0)' }}
                                loading="lazy"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
}
