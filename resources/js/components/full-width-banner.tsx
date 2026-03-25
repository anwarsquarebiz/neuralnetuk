import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

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
            gsap.fromTo(textRef.current,
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
                    }
                }
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
        <section ref={bannerRef} className={cn("w-full bg-blue-600 py-6 overflow-hidden", className)}>
            <div className="w-full text-center px-4">
                <h2 ref={textRef} className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight opacity-90 break-words">
                    {text}
                </h2>
            </div>
        </section>
    );
}
