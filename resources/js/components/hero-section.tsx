import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Phone } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';
import ButtonCom from './common/ButtonCom';
import ButtonSecondary from './common/ButtonSecondary';
import Orb from './creative-components/Orb';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial fade-in and slide-up for text elements on page load
            const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

            tl.fromTo(
                [titleRef.current, subtitleRef.current, textRef.current, buttonRef.current, rightContentRef.current],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    delay: 0.2,
                },
            );

            if (listRef.current) {
                tl.fromTo(
                    Array.from(listRef.current.children),
                    { x: -20, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        stagger: 0.1,
                    },
                    '-=0.4',
                );
            }

            // Parallax effect for the entire hero section (Slow move - Increased intensity)
            gsap.to(containerRef.current, {
                yPercent: 50,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            ScrollTrigger.refresh();
        }, containerRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative z-0 flex min-h-[100svh] flex-col justify-start overflow-hidden bg-white font-sans text-[#000027]"
        >
            {/* Hero Background Image */}
            {/* <div className="absolute inset-0 z-0 overflow-hidden">
                <picture>
                    <source srcSet="/assets/hero  image.webp" type="image/webp" />
                    <img
                        ref={imageRef}
                        src="/assets/hero  image.webp"
                        alt="NeuralNet Hero Overlay"
                        className="pointer-events-none mt-[-10%] h-[120%] w-full object-cover opacity-80 select-none"
                        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                        loading="eager"
                        fetchPriority="high"
                    />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B20] via-transparent to-transparent"></div>
            </div> */}

            {/* <LightPillar
                topColor="#5227FF"
                bottomColor="#000027"
                intensity={1.4}
                rotationSpeed={1.1}
                glowAmount={0.004}
                pillarWidth={6}
                pillarHeight={0.4}
                noiseIntensity={0.8}
                pillarRotation={45}
                interactive={true}
                mixBlendMode="multiply"
                quality="high"
                className="z-0"
            /> */}

            <div className="absolute inset-0">
                <Orb hoverIntensity={1.5} rotateOnHover hue={0} forceHoverState={false} backgroundColor="#ffffff" />
            </div>

            <div className="max-w-8xl pointer-events-none relative z-10 mx-auto flex w-full flex-col px-6 pt-24 md:pt-40 lg:px-20 xl:mb-12">
                <h1 ref={titleRef} className="text-2xl leading-tight font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                    Most organisations don't have an AI problem.
                </h1>
                <h2 ref={subtitleRef} className="font-sans text-2xl leading-tight font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                    They have a systems problem.
                </h2>
                <p ref={textRef} className="mt-6 w-full text-base leading-relaxed md:w-[70%] md:text-lg lg:w-1/2">
                    NeuralNet designs and deploys the AI infrastructure that turns business problems into complete solutions — software, security,
                    agents, avatars, and the oversight layer that makes sure all of it performs.
                </p>
                <div className="pointer-events-auto mt-10 flex flex-col gap-3 sm:flex-row md:gap-5">
                    <ButtonCom title="Request a Scoping Call" icon={Phone} href="/contact" />
                    <ButtonSecondary title="See What We Build" icon={Eye} href="#solutions" />
                </div>
            </div>
        </section>
    );
}
