import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

export default function HowWeCanHelpHero() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

            tl.fromTo(contentRef.current?.children || [], { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, delay: 0.2 });

            tl.fromTo(imageRef.current, { y: 30, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1 }, '-=0.6');
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="overflow-hidden bg-[#E4ECFF] py-12 font-sans md:py-20 md:pt-32">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row lg:px-8">
                {/* Left Content */}
                <div ref={contentRef} className="max-w-xl">
                    <h1 className="mb-6 text-3xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-5xl">
                        At NeuralNet our Specialists are ready to assist
                    </h1>
                    <p className="mb-10 text-lg leading-relaxed font-medium text-gray-600">
                        With our expertise in AI, architecture, development and QA, we can design a comprehensive strategy to improve efficiency,
                        performance, and your business outcomes.
                    </p>
                    <Button asChild size="lg" className="h-10 rounded-md bg-[#000027] px-10 text-sm font-bold text-white shadow-xl hover:bg-blue-700">
                        <Link href="/contact" className="flex items-center gap-2">
                            Get Started <ChevronRight className="size-4" />
                        </Link>
                    </Button>
                </div>

                {/* Right Placeholder Image */}
                <div ref={imageRef} className="w-full max-w-md flex-1">
                    <div className="flex aspect-square items-center justify-center rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl">
                        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-blue-50 text-blue-200">
                            <span className="text-5xl font-extrabold">IMAGE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
