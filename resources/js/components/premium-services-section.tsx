import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const premiumServices = [
// ... existing services ...
    { title: 'Software Development', emoji: '💻' },
    { title: 'AI & Automation', emoji: '🤖' },
    { title: 'Cloud & DevOps', emoji: '☁️' },
    { title: 'Managed IT Services', emoji: '🛠️' },
    { title: 'Data & Analytics', emoji: '📊' },
    { title: 'System Integration', emoji: '🔗' },
    { title: 'Security & Compliance', emoji: '🔒' },
    { title: 'Web & App Development', emoji: '📱' },
];

gsap.registerPlugin(ScrollTrigger);

export default function PremiumServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 95%',
                        end: 'top 75%',
                        scrub: 1,
                    },
                }
            );

            if (gridRef.current) {
                gsap.fromTo(gridRef.current.children,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 90%',
                            end: 'top 60%',
                            scrub: 1,
                        },
                    }
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
        <section ref={sectionRef} className="py-24 bg-white font-sans">
            <div ref={headerRef} className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Premium Services</h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    As a certified IT company, Sapphire helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {premiumServices.map((service, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-xl transition-all cursor-default group">
                            <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{service.emoji}</span>
                            <span className="text-sm font-bold text-gray-800 text-center sm:text-left leading-tight">{service.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
