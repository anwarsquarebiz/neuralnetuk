import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface FullWidthBannerProps {
    text: string;
    className?: string;
}

export default function FullWidthBanner({ text, className }: FullWidthBannerProps) {
    const bannerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { y: 50, opacity: 0, scale: 0.8 },
                {
                    y: 0,
                    opacity: 0.9,
                    scale: 1,
                    scrollTrigger: {
                        trigger: bannerRef.current,
                        start: 'top 95%',
                        end: 'top 60%',
                        scrub: 1,
                    },
                },
            );

            ScrollTrigger.refresh();
        }, bannerRef);

        const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={bannerRef} className={cn('w-full overflow-hidden bg-[#000027] py-6', className)}>
            <div className="w-full px-4 text-center">
                <h2
                    ref={textRef}
                    className="text-2xl font-extrabold tracking-tight break-words text-white uppercase opacity-90 sm:text-3xl md:text-6xl lg:text-7xl"
                >
                    {text}
                </h2>
            </div>
        </section>
    );
}
