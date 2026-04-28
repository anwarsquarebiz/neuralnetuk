import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, ArrowDown, LucideIcon, PenTool, Rocket, Search, ShieldCheck, Terminal } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export interface DeliveryStep {
    id: string;
    title: string;
    icon: LucideIcon;
    desc: string;
}

const defaultSteps: DeliveryStep[] = [
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
        title: 'Development',
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

export default function DeliveryProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const progressLineRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the sidebar on desktop
            const mm = gsap.matchMedia();

            mm.add('(min-width: 1024px)', () => {
                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    pin: sidebarRef.current,
                    pinSpacing: false,
                    markers: false,
                });

                // Main progress line scrub
                gsap.fromTo(
                    progressLineRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: stepsRef.current,
                            start: 'top 40%',
                            end: 'bottom 100%',
                            scrub: 1,
                        },
                    },
                );
            });

            // Staggered reveal for each step
            const stepItems = gsap.utils.toArray<HTMLElement>('.step-item');
            stepItems.forEach((step) => {
                const content = step.querySelector('.step-content');
                const number = step.querySelector('.step-number');
                const icon = step.querySelector('.step-icon');

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 85%',
                        end: 'top 50%',
                        scrub: 1,
                    },
                });

                tl.fromTo(number, { opacity: 0, x: -30 }, { opacity: 0.05, x: 0 })
                    .fromTo(content, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, 0)
                    .fromTo(icon, { scale: 0, rotate: -45 }, { scale: 1, rotate: 0 }, 0);
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white font-sans">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:gap-24">
                    {/* Sidebar Area */}
                    <div className="mb-16 lg:mb-0 lg:w-1/3">
                        {/* The container that actually gets pinned */}
                        <div ref={sidebarRef} className="lg:flex lg:h-screen lg:flex-col lg:justify-center">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#000027]/20"></span>
                                <h4 className="text-[10px] font-bold tracking-[0.4em] text-[#000027]/60 uppercase">Our Process</h4>
                            </div>
                            <h2 className="text-5xl leading-[1.1] sm:leading-[1.05] font-black tracking-tight text-[#000027] md:text-6xl lg:text-7xl">
                                Delivery
                                <br />
                                <span className="text-[#000027]/30">Narrative.</span>
                            </h2>
                            <p className="mt-8 max-w-xs text-lg leading-relaxed text-gray-600">
                                A systematic, transparent flow from initial discovery to continuous production support.
                            </p>

                            <div className="mt-12 hidden items-center gap-4 text-[#000027]/40 lg:flex">
                                <div className="flex size-10 animate-bounce items-center justify-center rounded-full border border-[#000027]/10">
                                    <ArrowDown className="size-4" />
                                </div>
                                <span className="text-[10px] font-bold tracking-widest uppercase">Scroll to Explore</span>
                            </div>
                        </div>
                    </div>

                    {/* Scrolling Content */}
                    <div ref={stepsRef} className="relative py-24 md:py-32 lg:w-2/3">
                        {/* Dynamic Progress Line */}
                        <div className="absolute top-0 left-0 h-full w-[2px] bg-gray-100 lg:left-0">
                            <div ref={progressLineRef} className="h-full w-full origin-top scale-y-0 bg-[#000027]" />
                        </div>

                        <div className="space-y-24 pl-12 lg:space-y-32 lg:pl-24">
                            {defaultSteps.map((step) => (
                                <div key={step.id} className="step-item relative">
                                    {/* Large Background Number */}
                                    <div className="step-number pointer-events-none absolute -top-12 -left-12 text-[180px] leading-none font-black text-[#000027] opacity-0 transition-opacity select-none">
                                        {step.id}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="mb-8 flex items-center gap-6">
                                            <div className="step-icon flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#000027] text-white shadow-2xl">
                                                <step.icon className="size-7" />
                                            </div>
                                            <div className="hidden h-px flex-1 bg-gray-100 md:block"></div>
                                        </div>

                                        <div className="step-content max-w-2xl">
                                            <h3 className="mb-6 text-3xl font-black text-[#000027] md:text-4xl">{step.title}</h3>
                                            <p className="text-lg leading-relaxed font-medium text-gray-600 md:text-xl">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Gradient */}
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-[500px] rounded-full bg-blue-50/50 blur-[120px]" />
        </section>
    );
}
