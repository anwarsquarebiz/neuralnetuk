import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyNeuralNetSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Circle expansion animation
            // Triggered earlier and completes faster for a "quick" expansion
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 100%',
                    end: 'top top',
                    scrub: 1.5, // Much smoother and slower
                },
            });

            tl.fromTo(
                sectionRef.current,
                {
                    clipPath: 'circle(0% at var(--circle-x) 0%)',
                },
                {
                    clipPath: 'circle(150% at var(--circle-x) 0%)',
                    ease: 'none',
                },
            );

            // Content reveal
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 40%',
                        end: 'top 10%',
                        scrub: 1,
                    },
                },
            );

            // Staggered reveal for paragraphs
            const paragraphs = gsap.utils.toArray<HTMLElement>('.narrative-p');
            paragraphs.forEach((p) => {
                gsap.fromTo(
                    p,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: p,
                            start: 'top 95%',
                            end: 'top 75%',
                            scrub: 1,
                        },
                    },
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#000027] font-sans [--circle-x:50%] md:[--circle-x:38%] lg:[--circle-x:41.66%]"
            style={{ clipPath: 'circle(0% at var(--circle-x) 0%)' }}
        >
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div ref={contentRef} className="max-w-6xl pt-8">
                    <div className="mb-10 flex items-center gap-3">
                        <div className="h-px w-6 bg-white/20"></div>
                        <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/60 uppercase">
                            Narrative Protocol
                        </h4>
                    </div>

                    <h2 className="mb-12 text-3xl leading-[1.1] tracking-tighter uppercase md:text-5xl lg:text-6xl">
                        <span className="font-light text-white/50">The problem with most</span><br />
                        <span className="font-black text-white">AI deployments</span><br />
                        <span className="font-light text-white/50">isn't the AI.</span>
                    </h2>

                    <div className="space-y-10">
                        <p className="narrative-p text-xl leading-relaxed font-medium text-white/90 md:text-2xl">
                            It's that organisations buy tools before they understand the problem. They deploy agents that nobody measures. They build
                            automation and then wonder why the numbers didn't move.
                        </p>

                        <p className="narrative-p border-l-2 border-white/10 pl-8 text-xl leading-relaxed font-medium text-white/90 md:text-2xl">
                            NeuralNet was built to fix that. We start where the problem is — in the business process, the workflow, the gap between
                            what a team does and what it should be able to do. Then we design the system.
                        </p>

                        <div className="grid grid-cols-1 gap-12 pt-8 md:grid-cols-2">
                            <p className="narrative-p text-lg leading-relaxed text-white/70">
                                Every engagement produces something deployable. Every deployment is measured. Every system we build is one we can
                                defend with data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 opacity-10">
                <span className="text-[300px] leading-none font-black tracking-tighter text-white/10 select-none">NEURAL</span>
            </div>
        </section>
    );
}
