import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, LucideIcon, PenTool, Rocket, Search, ShieldCheck, Terminal } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export interface DeliveryStep {
    // ... existing interface ...
    id: string;
    title: string;
    icon: LucideIcon;
    desc: string;
}

const defaultSteps: DeliveryStep[] = [
    // ... existing steps ...
    {
        id: '01',
        title: 'Project Planning',
        icon: Search,
        desc: 'We begin by understanding your goals, requirements, and business challenges. Clear planning ensures the project scope, timeline, and expectations are aligned from the start.',
    },
    {
        id: '02',
        title: 'Design Architecture',
        icon: PenTool,
        desc: 'Our team designs a scalable and secure system architecture that ensures performance, flexibility, and future growth for your solution.',
    },
    {
        id: '03',
        title: 'Developement',
        icon: Terminal,
        desc: 'Our engineers build the solution using modern technologies and best development practices to ensure reliability and high performance.',
    },
    {
        id: '04',
        title: 'Testing & QA',
        icon: ShieldCheck,
        desc: 'We perform rigorous testing and quality assurance to ensure the system is secure, stable, and ready for real-world usage.',
    },
    {
        id: '05',
        title: 'Deployment Launch',
        icon: Rocket,
        desc: 'The solution is deployed into the production environment with careful monitoring to ensure a smooth and successful launch.',
    },
    {
        id: '06',
        title: 'Maintenance & Support',
        icon: Activity,
        desc: 'We provide continuous monitoring, updates, and technical support to keep your systems running efficiently and securely.',
    },
];

interface DeliveryProcessSectionProps {
    title?: string;
    steps?: DeliveryStep[];
}

export default function DeliveryProcessSection({ title = 'Our Delivery Process', steps: customSteps }: DeliveryProcessSectionProps) {
    const activeSteps = customSteps || defaultSteps;
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(headerRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 85%',
                },
            });

            // Timeline line animation
            gsap.from(lineRef.current, {
                scaleY: 0,
                transformOrigin: 'top center',
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 20%',
                    end: 'bottom 80%',
                    scrub: true,
                },
            });

            // Animate steps individually
            const steps = sectionRef.current?.querySelectorAll('.step-item');
            steps?.forEach((step) => {
                const isEven = step.classList.contains('lg:flex-row');
                const content = step.querySelector('.content-box');
                const icon = step.querySelector('.icon-node');

                gsap.fromTo(
                    content,
                    { x: isEven ? -50 : 50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 90%',
                            end: 'top 60%',
                            scrub: 1,
                        },
                    },
                );

                gsap.fromTo(
                    icon,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 90%',
                            end: 'top 60%',
                            scrub: 1,
                        },
                    },
                );
            });

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white py-12 font-sans md:py-24">
            <div ref={headerRef} className="mx-auto mb-12 max-w-7xl px-6 text-center md:mb-24 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900">{title}</h2>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Central Vertical Line */}
                <div ref={lineRef} className="absolute top-0 bottom-0 left-[23px] w-1 -translate-x-1/2 bg-gray-900 lg:left-1/2"></div>

                <div className="space-y-12 lg:space-y-0">
                    {activeSteps.map((step, i) => (
                        <div key={i} className="step-item relative flex w-full items-center lg:min-h-[200px]">
                            {/* Left Column: Content for even steps */}
                            <div className="hidden w-1/2 justify-end pr-16 lg:flex">
                                {i % 2 === 0 ? (
                                    <div className="content-box max-w-md pb-12 text-right">
                                        <span className="mb-2 inline-block text-lg font-bold text-[#000027]">{step.id}</span>
                                        <h3 className="mb-2 text-2xl font-extrabold text-gray-900">{step.title}</h3>
                                        <p className="leading-relaxed font-medium text-gray-600">{step.desc}</p>
                                    </div>
                                ) : (
                                    <div className="h-24"></div>
                                )}
                            </div>

                            {/* Center Icon Node */}
                            <div className="icon-node absolute left-[0px] z-10 flex -translate-x-1/2 items-center justify-center bg-white p-1 lg:left-1/2">
                                <div className="flex size-12 items-center justify-center rounded-lg bg-gray-900 text-white shadow-xl transition-colors hover:bg-[#000027]">
                                    <step.icon className="size-6" />
                                </div>
                            </div>

                            {/* Right Column: Content for odd steps + Mobile fallback */}
                            <div className="flex w-full justify-start pl-12 lg:w-1/2 lg:pl-16">
                                {i % 2 !== 0 ? (
                                    <div className="content-box max-w-md pb-12 text-left">
                                        <span className="mb-2 inline-block text-lg font-bold text-[#000027]">{step.id}</span>
                                        <h3 className="mb-2 text-2xl font-extrabold text-gray-900">{step.title}</h3>
                                        <p className="leading-relaxed font-medium text-gray-600">{step.desc}</p>
                                    </div>
                                ) : (
                                    <div className="content-box max-w-md pb-12 text-left lg:hidden">
                                        <span className="mb-2 inline-block text-lg font-bold text-[#000027]">{step.id}</span>
                                        <h3 className="mb-2 text-2xl font-extrabold text-gray-900">{step.title}</h3>
                                        <p className="leading-relaxed font-medium text-gray-600">{step.desc}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
