import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface QuoteSectionProps {
    quote: string;
    title: string;
    description: string;
}

export default function QuoteSection({ quote, title, description }: QuoteSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(leftRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 95%',
                        end: 'top 60%',
                        scrub: 1,
                    }
                }
            );

            gsap.fromTo(rightRef.current,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 95%',
                        end: 'top 60%',
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
    }, []);

    return (
        <section ref={sectionRef} className="py-12 md:py-24 bg-[#f8fbff] font-sans">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-10 md:mb-16 text-left">{title}</h2>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Quote */}
                    <div ref={leftRef} className="lg:w-1/3 flex flex-col gap-6">
                        <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Quote className="size-6 text-blue-600 fill-blue-600" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-blue-600 leading-tight italic break-words">
                            {quote}
                        </h3>
                    </div>

                    {/* Right Content */}
                    <div ref={rightRef} className="lg:w-2/3 space-y-8">
                        <p className="text-lg text-gray-700 font-medium leading-relaxed">
                            {description}
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed font-normal">
                            Our expert development team works as an extension of your own, ensuring that every line of code aligns with your commercial objectives. We don&apos;t just build apps; we build engines for business transformation, leveraging the latest in distributed systems and cloud-native architecture.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
