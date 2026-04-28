import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function SlidingBanner() {
    const bannerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!contentRef.current) return;

            const contentWidth = contentRef.current.offsetWidth / 2;
            
            gsap.to(contentRef.current, {
                x: -contentWidth,
                duration: 20,
                ease: 'none',
                repeat: -1,
            });
        }, bannerRef);

        return () => ctx.revert();
    }, []);

    const items = ['Build', 'Deploy', 'Secure', 'Evaluate'];

    return (
        <section ref={bannerRef} className="relative overflow-hidden bg-[#000027] py-6 md:py-10">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000027] via-transparent to-[#000027] opacity-60"></div>
            
            <div 
                ref={contentRef}
                className="flex whitespace-nowrap"
            >
                {/* Double the items for seamless loop */}
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {items.map((item, j) => (
                            <div key={j} className="flex items-center px-8 md:px-16">
                                <span className="text-2xl font-black tracking-tighter text-white/90 md:text-5xl uppercase italic">
                                    {item}
                                </span>
                                <span className="ml-8 text-xl text-white/30 md:ml-16 md:text-4xl">→</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
