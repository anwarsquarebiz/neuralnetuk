import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Briefcase, Cpu, Globe, Lightbulb, Smile } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsStats() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                headerRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 95%',
                        end: 'top 70%',
                        scrub: 1,
                    },
                },
            );

            // Stats cards stagger animation
            if (statsRef.current) {
                gsap.fromTo(
                    statsRef.current.children,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.15,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: 'top 90%',
                            end: 'top 40%',
                            scrub: 1,
                        },
                    },
                );
            }

            ScrollTrigger.refresh();
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={sectionRef} className="overflow-hidden bg-[#000027] py-12 font-sans text-white md:py-20">
            <div ref={headerRef} className="mx-auto mb-10 max-w-7xl px-6 text-center md:mb-16 lg:px-8">
                <h2 className="mb-6 text-3xl font-extrabold break-words md:text-4xl">About Us</h2>
                <p className="mx-auto max-w-4xl text-lg leading-relaxed opacity-90">
                    NeuralNet is a UK-based IT consulting and software development company focused on delivering high-quality solutions on time and
                    within budget. Our team of digital innovators and business specialists is dedicated to driving successful digital transformation
                    for our clients.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div ref={statsRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            val: '20+',
                            label: 'Years of Leadership Experience',
                            icon: Award,
                            color: 'bg-orange-50 text-orange-600',
                        },
                        {
                            val: '50+',
                            label: 'Enterprise AI & Digital Projects',
                            icon: Cpu,
                            color: 'bg-purple-50 text-purple-600',
                        },
                        {
                            val: '100+',
                            label: 'AI & Technology Consultations',
                            icon: Lightbulb,
                            color: 'bg-yellow-50 text-yellow-600',
                        },
                        {
                            val: '25+',
                            label: 'Years Combined IT Industry Expertise',
                            icon: Briefcase,
                            color: 'bg-blue-50 text-[#000027]',
                        },
                        {
                            val: '95%',
                            label: 'Client Satisfaction Rate',
                            icon: Smile,
                            color: 'bg-green-50 text-green-600',
                        },
                        {
                            val: 'UK Based',
                            label: 'Serving Global Clients',
                            icon: Globe,
                            color: 'bg-cyan-50 text-cyan-600',
                        },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-6 overflow-hidden rounded-3xl bg-white p-6 text-blue-900 shadow-md transition-all duration-300 hover:shadow-xl"
                        >
                            <div className={`flex size-16 shrink-0 items-center justify-center rounded-2xl ${stat.color}`}>
                                <stat.icon className="size-8" />
                            </div>
                            <div className="flex flex-1 flex-col">
                                <span className={`mb-1 text-4xl font-extrabold ${stat.color.split(' ')[1]}`}>{stat.val}</span>
                                <span className="text-sm leading-snug font-bold text-gray-600">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
