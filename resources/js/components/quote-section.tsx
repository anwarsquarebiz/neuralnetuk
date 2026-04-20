import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

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
            gsap.fromTo(
                leftRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 95%',
                        end: 'top 60%',
                        scrub: 1,
                    },
                },
            );

            gsap.fromTo(
                rightRef.current,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 95%',
                        end: 'top 60%',
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
        <section ref={sectionRef} className="bg-[#f8fbff] py-12 font-sans md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-10 text-left text-2xl font-bold text-gray-900 md:mb-16">{title}</h2>
                <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
                    {/* Left Quote */}
                    <div ref={leftRef} className="flex flex-col gap-6 lg:w-1/3">
                        <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100">
                            <Quote className="size-6 fill-[#000027] text-[#000027]" />
                        </div>
                        <h3 className="text-2xl leading-tight font-extrabold break-words text-[#000027] italic sm:text-3xl md:text-5xl">{quote}</h3>
                    </div>

                    {/* Right Content */}
                    <div ref={rightRef} className="space-y-8 lg:w-2/3">
                        <p className="text-lg leading-relaxed font-medium text-gray-700">{description}</p>
                        <p className="text-base leading-relaxed font-normal text-gray-600">
                            Our expert development team works as an extension of your own, ensuring that every line of code aligns with your
                            commercial objectives. We don&apos;t just build apps; we build engines for business transformation, leveraging the latest
                            in distributed systems and cloud-native architecture.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
