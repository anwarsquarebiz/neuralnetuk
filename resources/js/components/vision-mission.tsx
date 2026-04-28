import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Target } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const goals = [
    {
        title: 'Our Vision',
        icon: Target,
        desc: 'To be a global leader in AI-powered software engineering, empowering businesses to achieve their full potential through strategic digital innovation and exceptional quality.',
        color: 'text-[#000027]',
        bgColor: 'bg-blue-50',
    },
    {
        title: 'Our Mission',
        icon: Rocket,
        desc: 'To deliver high-quality, reliable, and scalable software solutions that drive real business value, foster innovation, and enable our clients to thrive in an ever-evolving digital landscape.',
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
    },
];

export default function VisionMission() {
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
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 90%',
                            end: 'top 60%',
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
        <section ref={sectionRef} className="overflow-hidden bg-white py-12 font-sans md:py-24">
            <div ref={headerRef} className="mx-auto mb-10 max-w-7xl px-6 text-center md:mb-16 lg:px-8">
                <h2 className="mb-4 text-3xl font-extrabold text-[#0a1a3b] md:text-4xl">Driving Innovation Through AI & Digital Transformation</h2>
                <div className="mx-auto h-1.5 w-24 rounded-full bg-[#000027]"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 font-sans lg:px-8">
                <div ref={gridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    {goals.map((goal, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center rounded-[2.5rem] border border-gray-100 bg-gray-50/50 p-8 text-center transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-[#000027]/5 md:p-10"
                        >
                            <div
                                className={`size-20 ${goal.bgColor} mb-8 flex items-center justify-center rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                            >
                                <goal.icon className={`size-10 ${goal.color}`} />
                            </div>
                            <h3 className="mb-6 text-2xl font-bold text-[#0a1a3b]">{goal.title}</h3>
                            <p className="text-lg leading-relaxed text-[#4a5568]">{goal.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
