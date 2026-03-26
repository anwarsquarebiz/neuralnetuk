import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface ServiceFeatureSectionProps {
    title: string;
    description: string;
    imageSrc?: string;
    imageOnLeft?: boolean;
}

export default function ServiceFeatureSection({ title, description, imageSrc, imageOnLeft = true }: ServiceFeatureSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                { x: imageOnLeft ? 50 : -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 90%',
                        end: 'top 30%',
                        scrub: 1,
                    },
                },
            );

            gsap.fromTo(
                imageRef.current,
                { x: imageOnLeft ? -50 : 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 90%',
                        end: 'top 30%',
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
    }, [imageOnLeft]);

    return (
        <section ref={sectionRef} className="overflow-hidden bg-white py-12 md:py-24 font-sans">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={cn('flex flex-col items-center gap-16 lg:gap-24', imageOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse')}>
                    {/* Image Area */}
                    <div ref={imageRef} className="relative w-full flex-1">
                        {imageSrc ? (
                            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
                                <picture>
                                    <source srcSet={imageSrc} type="image/webp" />
                                    <img
                                        src={imageSrc}
                                        alt={title}
                                        className="pointer-events-none h-full w-full rounded-xl object-cover select-none"
                                        style={{ transform: 'translateZ(0)' }}
                                        loading="lazy"
                                    />
                                </picture>
                            </div>
                        ) : (
                            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-12 shadow-lg">
                                <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-gray-200">
                                    <div className="h-4 w-[80%] rounded-full bg-gray-100"></div>
                                    <div className="h-4 w-[60%] rounded-full bg-gray-100"></div>
                                    <div className="mt-4 h-44 w-[70%] rounded-lg bg-gray-100"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Content Area */}
                    <div ref={contentRef} className="flex-1 text-left">
                        <h2 className="mb-8 text-3xl leading-tight font-extrabold text-[#0a1a3b] md:text-4xl">{title}</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed font-medium text-gray-600">{description}</p>
                            {/* Dummy secondary paragraph if none provided */}
                            <p className="text-base leading-relaxed font-normal text-gray-500">
                                We combine robust engineering with strategic insight to ensure your digital platforms are not just functional, but
                                high-performing and ready for future growth. Our approach prioritizes scalability and security at every layer of
                                development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
