import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial fade-in and slide-up for text elements on page load
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

            tl.fromTo(
                [titleRef.current, subtitleRef.current, textRef.current, buttonRef.current, rightContentRef.current],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    delay: 0.2,
                },
            );

            if (listRef.current) {
                tl.fromTo(
                    Array.from(listRef.current.children),
                    { x: -20, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        stagger: 0.1,
                    },
                    '-=0.4',
                );
            }

            // Scroll-triggered parallax effect for background image
            gsap.to(imageRef.current, {
                y: '20%',
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
            ScrollTrigger.refresh();
        }, containerRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={containerRef} className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#050B20] font-sans text-white">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <picture>
                    <source srcSet="/assets/hero  image.webp" type="image/webp" />
                    <img
                        ref={imageRef}
                        src="/assets/hero  image.webp"
                        alt="NeuralNet Hero Overlay"
                        className="pointer-events-none mt-[-10%] h-[120%] w-full object-cover opacity-80 select-none"
                        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                        loading="eager"
                        fetchPriority="high"
                    />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B20] via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pt-24 md:pt-40 lg:px-8 xl:mb-12">
                <h1 ref={titleRef} className="text-3xl leading-tight font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                    NeuralNet Delivering
                </h1>
                <h2
                    ref={subtitleRef}
                    className="font-sans text-3xl leading-tight font-extrabold tracking-tight text-blue-500 md:text-5xl lg:text-6xl"
                >
                    Business Outcomes with AI
                </h2>
                <p ref={textRef} className="mt-4 text-lg font-medium text-gray-300 italic md:text-xl">
                    (Limitless Possibilities)
                </p>
            </div>

            {/* Hero Content - Positioned at the bottom */}
            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-12 px-6 py-8 md:flex-row md:items-end md:pb-24 lg:px-8">
                {/* Left Part */}
                <div className="max-w-2xl flex-1">
                    <ul ref={listRef} className="mb-10 space-y-4">
                        <li className="flex items-start gap-3 text-sm font-medium text-gray-200 md:text-base">
                            <span className="mt-2 size-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                            <span>
                                Most-rated <span className="font-bold text-white">#1 App Development</span> Company{' '}
                                <span className="font-bold text-white">on Clutch</span> in India and USA.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-gray-200 md:text-base">
                            <span className="mt-2 size-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                            <span>
                                Trusted by <span className="font-bold text-white">20+ Fortune 500 Companies</span> and a Clutch Leader.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-gray-200 md:text-base">
                            <span className="mt-2 size-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                            <span>
                                We&apos;ve been Redefining Excellence for over <span className="font-bold text-white">Two Decades.</span>
                            </span>
                        </li>
                    </ul>
                    <div ref={buttonRef}>
                        <Button
                            asChild
                            size="lg"
                            className="h-auto rounded-md bg-[#000027]/80 px-10 py-2 text-sm font-bold text-white hover:bg-[#000027] md:text-base"
                        >
                            <Link href="/contact">Request A Call</Link>
                        </Button>
                    </div>
                </div>

                {/* Right Part */}
                <div ref={rightContentRef} className="max-w-xs md:text-right">
                    <p className="text-2xl leading-tight font-bold md:text-3xl">
                        Ready to see what AI solutions can do <span className="text-blue-500">for your business?</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
