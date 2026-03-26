import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function ConsultingHero() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
            
            tl.fromTo(contentRef.current?.children || [], 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, delay: 0.2 }
            );

            tl.fromTo(imageRef.current,
                { x: 30, opacity: 0, scale: 0.95 },
                { x: 0, opacity: 1, scale: 1 },
                '-=0.6'
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-[#E4ECFF] py-12 md:pt-32 font-sans overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                {/* Left Content */}
                <div ref={contentRef} className="max-w-xl">
                    <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl text-gray-900 leading-tight mb-6">
                        At NeuralNet our Specialists are ready to assist
                    </h1>
                    <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                        With our expertise in AI, architecture, development and QA, we can design a comprehensive strategy to improve efficiency, performance, and your business outcomes.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-10 py-3 h-auto text-sm font-bold shadow-xl">
                            <Link href="/contact" className="flex items-center gap-2">
                                Get Started <ChevronRight className="size-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                <div ref={imageRef} className="flex-1 w-full max-w-md">
                    <div className="relative w-full aspect-video flex items-center justify-center p-4">
                        <picture>
                            <source srcSet="/assets/consulting hero.webp" type="image/webp" />
                            <img 
                                src="/assets/consulting hero.webp" 
                                alt="Consulting Hero" 
                                className="w-full h-full object-cover rounded-lg select-none pointer-events-none"
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
