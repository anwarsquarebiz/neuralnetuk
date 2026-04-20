import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const leaders = [
    { name: 'Sanjay Juneja', role: 'CRO', src: '/assets/about-us/team/first.png' },
    { name: 'Anubhav Chaturvedi', role: 'CTO', src: '/assets/about-us/team/second.png' },
    { name: 'Kuljit Moore', role: 'CCO', src: '/assets/about-us/team/third.png' },
    { name: 'Manav Yesudas', role: 'CFO', src: '/assets/about-us/team/fourth.png' },
];

export default function LeadershipSection() {
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
        <section ref={sectionRef} className="overflow-hidden bg-white py-12 font-sans md:py-24">
            <div ref={headerRef} className="mx-auto mb-12 max-w-7xl px-6 text-center md:mb-20 lg:px-8">
                <h2 className="mb-6 text-3xl font-extrabold text-black md:text-4xl">Our Leadership</h2>
                <p className="mx-auto max-w-3xl px-4 text-sm leading-relaxed text-gray-600 md:text-base">
                    The outlook, passion and experience of our leaders guides Sapphire. They have a relentless passion to offer the highest levels of
                    innovation and service excellence.
                </p>
            </div>

            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div ref={gridRef} className="grid grid-cols-1 gap-x-12 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:gap-x-16">
                    {leaders.map((leader, i) => (
                        <div
                            key={i}
                            className="group mx-auto flex max-w-2xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left lg:mx-0"
                        >
                            {/* Left: Image Container */}
                            <div className="relative aspect-square w-full max-w-[200px] flex-shrink-0 overflow-hidden rounded-[2rem] bg-[#C4C4C4] shadow-sm transition-transform duration-500 group-hover:scale-[1.02] sm:max-w-[240px]">
                                <picture>
                                    <source srcSet={leader.src} type="image/png" />
                                    <img
                                        src={leader.src}
                                        alt={leader.name}
                                        className="pointer-events-none h-full w-full object-cover select-none"
                                        style={{ transform: 'translateZ(0)' }}
                                        loading="lazy"
                                    />
                                </picture>
                            </div>

                            {/* Right: Info */}
                            <div className="flex min-w-0 flex-1 flex-col justify-center">
                                <h3 className="mb-2 text-2xl leading-tight font-bold whitespace-normal text-black md:text-3xl">{leader.name}</h3>
                                <p className="text-lg font-bold tracking-tight text-[#000027] uppercase md:text-xl">{leader.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
