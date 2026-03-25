import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface CTASectionProps {
    title?: string;
    description?: string;
}

export default function CTASection({
    title = 'Start Building with a Dedicated Engineering Team',
    description = "Let's discuss how our AI-augmented teams can accelerate your product development and reduce time-to-market.",
}: CTASectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 90%',
                        end: 'top 40%',
                        scrub: 1,
                    },
                }
            );

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
        <section ref={sectionRef} className="border-t border-blue-400/20 bg-[#1e48f7] py-16 font-sans">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div ref={contentRef} className="space-y-8">
                    <h2 className="mx-auto max-w-4xl text-3xl leading-tight font-extrabold text-white md:text-4xl lg:text-5xl">{title}</h2>
                    <p className="mx-auto max-w-3xl text-sm leading-relaxed text-blue-50/90 md:text-lg">{description}</p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Link href="/contact">
                            <Button className="flex h-12 items-center gap-2 rounded-lg bg-white px-8 font-bold text-blue-600 shadow-md hover:bg-white/90">
                                Talk to an Expert
                                <ArrowRight className="size-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
