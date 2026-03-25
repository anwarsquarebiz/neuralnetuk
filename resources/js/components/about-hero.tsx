import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AboutHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

            tl.fromTo(textRef.current?.children || [],
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, delay: 0.2 }
            );

            tl.fromTo(imageRef.current,
                { scale: 0.9, opacity: 0, x: 50 },
                { scale: 1, opacity: 1, x: 0 },
                '-=0.7'
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#f0f4ff] pt-32 pb-20 font-sans overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div ref={textRef} className="space-y-8 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1a3b] leading-[1.1]">
                            Driving Innovation Through AI & Digital Technology
                        </h1>
                        <p className="text-[#4a5568] text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            We help businesses grow by delivering high-quality, AI-powered software solutions. Our team of digital innovators and business specialists is dedicated to your success.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <Button className="h-14 px-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-200">
                                Contact Us
                            </Button>
                        </div>
                    </div>

                    {/* Right: Illustration/Image Mockup */}
                    <div ref={imageRef} className="relative group">
                        <div className="absolute -inset-4 bg-blue-600/5 rounded-[2rem] blur-2xl group-hover:bg-blue-600/10 transition-all duration-700"></div>
                        <div className="relative bg-white p-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden transform group-hover:scale-[1.02] transition-all duration-700">
                            {/* Dashboard/Code Mockup Placeholder */}
                            <div className="aspect-[4/3] bg-gray-50 rounded-2xl flex flex-col overflow-hidden border border-gray-100">
                                <div className="h-8 bg-gray-100 flex items-center px-4 gap-1.5 border-b border-gray-100">
                                    <div className="size-2.5 rounded-full bg-red-400"></div>
                                    <div className="size-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="size-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex-1 p-6 space-y-4">
                                    <div className="h-4 w-1/2 bg-blue-100 rounded-full"></div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="h-20 bg-gray-100 rounded-xl"></div>
                                        <div className="h-20 bg-gray-100 rounded-xl"></div>
                                        <div className="h-20 bg-gray-100 rounded-xl"></div>
                                    </div>
                                    <div className="h-32 bg-blue-50/50 rounded-xl border border-blue-100 border-dashed"></div>
                                    <div className="flex justify-between items-center pt-4">
                                        <div className="h-8 w-24 bg-blue-600/10 rounded-lg"></div>
                                        <div className="h-8 w-24 bg-gray-100 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
