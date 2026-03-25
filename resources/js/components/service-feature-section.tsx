import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface ServiceFeatureSectionProps {
    title: string;
    description: string;
    imageSrc?: string;
    imageOnLeft?: boolean;
}

export default function ServiceFeatureSection({ 
    title, 
    description, 
    imageSrc, 
    imageOnLeft = true 
}: ServiceFeatureSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current,
                { x: imageOnLeft ? 50 : -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 90%',
                        end: 'top 30%',
                        scrub: 1,
                    }
                }
            );

            gsap.fromTo(imageRef.current,
                { x: imageOnLeft ? -50 : 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 90%',
                        end: 'top 30%',
                        scrub: 1,
                    }
                }
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
        <section ref={sectionRef} className="py-24 bg-white font-sans overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={cn(
                    "flex flex-col items-center gap-16 lg:gap-24",
                    imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                )}>
                    {/* Image Area */}
                    <div ref={imageRef} className="flex-1 w-full relative">
                        {imageSrc ? (
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                                <img src={imageSrc} alt={title} className="w-full h-auto rounded-xl" loading="lazy" />
                            </div>
                        ) : (
                            <div className="w-full aspect-[4/3] bg-gray-50 border border-gray-100 rounded-2xl shadow-lg flex items-center justify-center p-12">
                                <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-4">
                                    <div className="w-[80%] h-4 bg-gray-100 rounded-full"></div>
                                    <div className="w-[60%] h-4 bg-gray-100 rounded-full"></div>
                                    <div className="w-[70%] h-44 bg-gray-100 rounded-lg mt-4"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Content Area */}
                    <div ref={contentRef} className="flex-1 text-left">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1a3b] leading-tight mb-8">
                            {title}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                {description}
                            </p>
                            {/* Dummy secondary paragraph if none provided */}
                            <p className="text-base text-gray-500 leading-relaxed font-normal">
                                We combine robust engineering with strategic insight to ensure your digital platforms are not just functional, but high-performing and ready for future growth. Our approach prioritizes scalability and security at every layer of development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
