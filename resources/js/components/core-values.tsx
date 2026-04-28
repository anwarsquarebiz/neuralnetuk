import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Handshake, Heart, Lightbulb, TrendingUp, Users, Zap } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        title: 'Client Success',
        desc: 'Our success is measured by the success of our clients. We go above and beyond to ensure they achieve their goals.',
        icon: Users,
        color: 'text-[#000027]',
        bgColor: 'bg-blue-50',
    },
    {
        title: 'Performance Excellence',
        desc: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.',
        icon: Zap,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
    },
    {
        title: 'Team Collaboration',
        desc: 'We believe in the power of teamwork and collaboration, fostering an environment where everyone can contribute and grow.',
        icon: Handshake,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
    },
    {
        title: 'Innovative',
        desc: 'We are constantly exploring new ideas and technologies to stay ahead of the curve and deliver innovative solutions.',
        icon: Lightbulb,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
    },
    {
        title: 'Customer First',
        desc: 'Our customers are at the heart of everything we do. We are dedicated to providing exceptional service and support.',
        icon: Heart,
        color: 'text-red-600',
        bgColor: 'bg-red-50',
    },
    {
        title: 'Continuous Improvement',
        desc: 'We are committed to continuous learning and improvement, always seeking ways to enhance our skills and processes.',
        icon: TrendingUp,
        color: 'text-green-600',
        bgColor: 'bg-green-50',
    },
];

export default function CoreValues() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 95%',
                        end: 'top 70%',
                        scrub: 1,
                    },
                },
            );

            if (gridRef.current) {
                gsap.fromTo(
                    gridRef.current.children,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 90%',
                            end: 'top 50%',
                            scrub: 1,
                        },
                    },
                );
            }

            ScrollTrigger.refresh();
        }, sectionRef);

        const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={sectionRef} className="overflow-hidden bg-gray-50/30 py-12 font-sans md:py-24">
            <div ref={headerRef} className="mx-auto mb-10 max-w-7xl px-6 text-center md:mb-16 lg:px-8">
                <h2 className="mb-4 text-3xl font-extrabold text-[#0a1a3b] md:text-4xl">Our Core Values</h2>
                <p className="mx-auto max-w-2xl leading-relaxed text-[#4a5568]">
                    Our values guide us in everything we do, from how we work with our clients to how we collaborate as a team.
                </p>
                <div className="mx-auto mt-8 h-1.5 w-24 rounded-full bg-[#000027]"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div ref={gridRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {values.map((v, i) => (
                        <div
                            key={i}
                            className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#000027]/5"
                        >
                            <div
                                className={`size-14 ${v.bgColor} mb-6 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110`}
                            >
                                <v.icon className={`size-7 ${v.color}`} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-[#0a1a3b] transition-colors group-hover:text-[#000027]">{v.title}</h3>
                            <p className="text-sm leading-relaxed text-[#4a5568]">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
