import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const impacts = [
    { val: '20+', label: 'Years of Leadership Experience' },
    { val: '50+', label: 'Enterprise AI & Digital Projects' },
    { val: '100+', label: 'AI & Technology Consultations' },
    { val: '25+', label: 'Years Combined IT Industry Expertise' },
    { val: '95%', label: 'Client Satisfaction Rate' },
    { val: 'UK Based', label: 'Serving Global Clients' },
    { val: '24/7', label: 'Continuous Support' },
    { val: 'Secure', label: 'Enterprise-grade Governance' },
    { val: 'Flexible', label: 'Engagement Models' },
    { val: 'AI-Driven', label: 'Automation Solutions' },
    { val: 'Scalable', label: 'Infrastructure & Architecture' },
    { val: 'Global', label: 'Engineering Talent' },
];

export default function ImpactSection() {
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
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 90%',
                            end: 'top 40%',
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
        <section ref={sectionRef} className="relative overflow-hidden bg-gray-900 py-12 font-sans text-white md:py-24">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-10 bg-[#050B20]/20"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center brightness-[0.15]"
                    style={{ backgroundImage: "url('/assets/contact-mid-image.webp')" }}
                ></div>
            </div>

            <div ref={headerRef} className="relative z-20 mx-auto mb-10 max-w-7xl px-6 text-center md:mb-16 lg:px-8">
                <h2 className="mb-6 text-2xl font-extrabold break-words sm:text-3xl md:text-4xl">Our Impact and Global Presence</h2>
                <div className="mx-auto mb-12 h-1 w-20 rounded-full bg-[#000027]"></div>
            </div>

            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
                <div ref={gridRef} className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                    {impacts.map((impact, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center justify-center rounded-xl bg-white p-6 text-center shadow-2xl transition-colors duration-300 hover:bg-[#000027]"
                        >
                            <span className="mb-2 text-3xl font-extrabold text-[#000027] transition-colors group-hover:text-white">{impact.val}</span>
                            <span className="text-[11px] font-bold tracking-wider text-gray-500 uppercase transition-all group-hover:text-blue-50 group-hover:opacity-100">
                                {impact.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
