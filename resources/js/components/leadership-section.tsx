import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const leaders = [
    {
        name: 'Sanjay Juneja',
        role: 'Chief Revenue Officer / CTO',
        src: '/assets/about-us/team/first.png',
        description:
            'Sanjay leads growth and commercial strategy at NeuralNet, working closely with clients and delivery teams to ensure solutions are executed effectively and at scale. With over 25 years in the IT sector, he has worked with some of the UK’s largest organizations, delivering Microsoft-based solutions across enterprise and government environments. He is also an experienced investor, having built, scaled, and exited multiple companies across IT and healthcare.',
        domain: 'Technology & Growth',
    },
    {
        name: 'Kuljit Moore',
        role: 'Chief Commercial Officer / CEO',
        src: '/assets/about-us/team/third.png',
        description:
            'Kuljit leads commercial strategy at NeuralNet, driving growth through strong client relationships and high-performing teams. She brings over 20 years of experience across private equity and the NHS, including the successful scaling and exit of a UK-based healthcare business. She also advises and serves on the boards of growing organizations, supporting their strategic direction and expansion.',
        domain: 'Commercial Strategy',
    },
    {
        name: 'Manav Yesudas',
        role: 'Chief Financial Officer',
        src: '/assets/about-us/team/fourth.png',
        description:
            'Manav is responsible for financial strategy, operations, and governance at NeuralNet. A Chartered Accountant with over two decades of experience, he has led finance functions across IT and healthcare organizations, with a focus on scaling businesses and executing M&A initiatives. He has also played a key role in the scaling and exit of a healthcare business, bringing strong financial discipline to high-growth environments.',
        domain: 'Financial Governance',
    },
];

export default function LeadershipSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [activeCard, setActiveCard] = useState<number | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current?.children || [],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 85%',
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
                        stagger: 0.15,
                        duration: 1,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 80%',
                        },
                    },
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 font-sans md:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Architectural Header */}
                <div ref={headerRef} className="mb-20">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-px w-8 bg-[#000027]/20"></div>
                        <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase">Executive Leadership</span>
                    </div>

                    <h2 className="mb-10 text-4xl leading-[1.1] font-black tracking-tighter text-[#000027] uppercase md:text-6xl lg:text-7xl">
                        The minds behind <br />
                        <span className="text-[#000027]/30 italic">NeuralNet.</span>
                    </h2>

                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                        <p className="text-xl leading-relaxed text-[#000027]/70">
                            NeuralNet's team includes software engineers, AI specialists, cybersecurity professionals, and data scientists. Leadership
                            brings over 25 years of enterprise IT delivery experience.
                        </p>
                        <p className="text-xl leading-relaxed text-[#000027]/70">
                            We operate as a close team with direct client engagement at every stage. There is no account management layer between the
                            people asking the questions and the people building the answers.
                        </p>
                    </div>
                </div>

                {/* Leadership Grid: Awwwards Level Reveal */}
                <div ref={gridRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {leaders.map((leader, i) => (
                        <div
                            key={i}
                            onClick={() => setActiveCard(activeCard === i ? null : i)}
                            className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-xl transition-all duration-700"
                        >
                            {/* Image Container */}
                            <div className={`absolute inset-0 grayscale transition-all duration-700 lg:group-hover:scale-105 lg:group-hover:grayscale-0 ${activeCard === i ? 'scale-105 grayscale-0' : ''}`}>
                                <picture>
                                    <source srcSet={leader.src} type="image/png" />
                                    <img src={leader.src} alt={leader.name} className="h-full w-full object-cover" loading="lazy" />
                                </picture>
                            </div>

                            {/* Base Gradient Overlay (Always present for legibility) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000027]/80 via-[#000027]/20 to-transparent"></div>

                            {/* Info: Name & Role (Visible by Default) */}
                            <div className={`absolute inset-x-0 bottom-0 p-10 pointer-events-none transition-all duration-500 lg:group-hover:-translate-y-full lg:group-hover:opacity-0 ${activeCard === i ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                                <h3 className="text-3xl font-black tracking-tight text-white uppercase italic">{leader.name}</h3>
                                <p className="mt-2 text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">{leader.role}</p>
                            </div>

                            {/* Hover Overlay: Description Reveal */}
                            <div className={`absolute inset-0 flex flex-col overflow-y-auto bg-[#000027]/90 p-8 md:p-10 backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] lg:group-hover:translate-y-0 lg:group-hover:opacity-100 ${activeCard === i ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                <div className="mt-auto">
                                    <div className="mb-6 h-px w-12 bg-blue-500/50"></div>
                                    <h4 className="mb-2 text-2xl font-black text-white uppercase italic">{leader.name}</h4>
                                    <p className="mb-6 text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase">{leader.role}</p>
                                    <p className="text-sm leading-relaxed font-light text-white/80">{leader.description}</p>

                                    <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                                        <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">{leader.domain}</span>
                                        <div className="h-1 w-1 rounded-full bg-blue-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
