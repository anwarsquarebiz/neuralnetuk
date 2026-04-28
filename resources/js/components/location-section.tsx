import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe2, MapPin } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current?.children || [],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 85%',
                    },
                },
            );

            gsap.fromTo(
                visualRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: visualRef.current,
                        start: 'top 80%',
                    },
                },
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 font-sans md:py-32">
            {/* Minimal architectural accents */}
            <div className="absolute top-0 right-0 h-px w-1/3 bg-gradient-to-l from-[#000027]/10 to-transparent"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Identifier */}
                <div className="mb-12 flex items-center gap-3">
                    <div className="h-px w-8 bg-[#000027]/20"></div>
                    <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase">Global Footprint</span>
                </div>

                {/* The Narrative Heading */}
                <h2 className="mb-16 text-5xl leading-[1.1] sm:leading-[1] font-black tracking-tighter text-[#000027] uppercase italic md:text-7xl lg:text-8xl">
                    Rooted in the UK. <br />
                    <span className="text-[#000027]/20 not-italic">Operating at scale.</span>
                </h2>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                    {/* Storytelling Content */}
                    <div ref={textRef} className="lg:col-span-7">
                        <div className="space-y-8">
                            <p className="text-2xl leading-relaxed font-medium text-[#000027] md:text-3xl">
                                From our headquarters in the United Kingdom, we orchestrate the design and deployment of AI systems that transcend
                                borders.
                            </p>

                            <div className="h-px w-24 bg-blue-600/30"></div>

                            <p className="text-lg leading-relaxed text-[#000027]/60 md:text-xl">
                                Serving enterprise clients domestically and internationally, our location is our hub for innovation, but our reach is
                                defined by the systems we build. Whether it's core infrastructure or autonomous oversight mechanisms, we serve the
                                intelligent enterprise wherever it operates.
                            </p>

                            <div className="flex flex-col gap-8 pt-4 sm:flex-row">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black tracking-widest text-[#000027] uppercase opacity-30">Strategic Hub</p>
                                    <p className="flex items-center gap-2 text-xl font-bold text-[#000027]">
                                        <MapPin className="size-5 text-blue-600" />
                                        United Kingdom
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black tracking-widest text-[#000027] uppercase opacity-30">Deployment Reach</p>
                                    <p className="flex items-center gap-2 text-xl font-bold text-[#000027]">
                                        <Globe2 className="size-5 text-blue-600" />
                                        International
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Minimalist Connection Visual */}
                    <div ref={visualRef} className="lg:col-span-5">
                        <div className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-[#000027]/5 bg-gray-50 shadow-2xl transition-all duration-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.72149520448!2d-0.14371402337966847!3d51.518335071815955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad47a8f334d%3A0x6b4458f310f84501!2s101%20New%20Cavendish%20St%2C%20London%20W1W%206XH!5e0!3m2!1sen!2suk!4v1714210000000!5m2!1sen!2suk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="transition-all duration-700"
                            ></iframe>

                            {/* Decorative Frame */}
                            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border-[12px] border-white/50 backdrop-blur-[1px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
