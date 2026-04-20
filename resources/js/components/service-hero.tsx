import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

interface ServiceHeroProps {
    title: string;
    description: string;
    imageSrc?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function ServiceHero({ title, description, imageSrc, buttonText = 'Talk To An Expert', buttonHref = '/contact' }: ServiceHeroProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

            tl.fromTo(contentRef.current?.children || [], { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, delay: 0.2 });

            tl.fromTo(imageRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1 }, '-=0.6');
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#f0f4ff] pt-24 pb-12 font-sans md:pt-32 md:pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
                    {/* Left Content */}
                    <div ref={contentRef} className="max-w-2xl min-w-0 flex-1 text-left">
                        <h1 className="mb-6 text-3xl leading-tight font-extrabold break-words text-[#0a1a3b] md:text-5xl lg:text-6xl">{title}</h1>
                        <p className="mb-10 max-w-xl text-lg leading-relaxed font-medium text-[#4a5568]">{description}</p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                asChild
                                className="h-auto rounded-md bg-[#000027] px-8 py-3 text-sm font-bold text-white shadow-lg hover:bg-blue-700"
                            >
                                <Link href={buttonHref}>{buttonText}</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Image/Placeholder */}
                    <div ref={imageRef} className="relative w-full flex-1 lg:max-w-[600px]">
                        {imageSrc ? (
                            <div className="relative aspect-video overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                                <picture>
                                    <source srcSet={imageSrc} type="image/webp" />
                                    <img
                                        src={imageSrc}
                                        alt={title}
                                        className="pointer-events-none h-full w-full object-cover select-none"
                                        style={{ transform: 'translateZ(0)' }}
                                        loading="eager"
                                    />
                                </picture>
                            </div>
                        ) : (
                            <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-[#0a1a3b] p-8 shadow-2xl">
                                <div className="flex h-full w-full items-center justify-center rounded-xl border-2 border-dashed border-white/20">
                                    <span className="font-mono text-sm text-white/40">Visual Asset Placeholder</span>
                                </div>
                            </div>
                        )}

                        {/* Decorative background circle */}
                        <div className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-blue-400/10 blur-3xl"></div>
                        <div className="pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full bg-purple-400/10 blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
