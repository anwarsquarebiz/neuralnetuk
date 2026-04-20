import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';

const brands = [
    { name: 'Alembic', src: '/assets/brands/alembic_logo.svg' },
    { name: 'Almarai', src: '/assets/brands/almarai_corporate_logo.png' },
    { name: 'Cummins', src: '/assets/brands/cummins.webp' },
    { name: 'Honda', src: '/assets/brands/honda_logo.png' },
    { name: 'ACC', src: '/assets/brands/logo_acc.svg' },
    { name: 'Adani', src: '/assets/brands/logo_adani.svg' },
    { name: 'Ambuja', src: '/assets/brands/logo_ambuja.svg' },
    { name: 'American Express', src: '/assets/brands/logo_american_express.svg' },
    { name: 'Astral', src: '/assets/brands/logo_astral.png' },
    { name: 'BNPL India', src: '/assets/brands/logo_bnpl_india.svg' },
    { name: 'Chevron Oronite', src: '/assets/brands/logo_chevron_oronite.svg' },
    { name: 'CLP India', src: '/assets/brands/logo_clp_india.svg' },
    { name: 'Dr. Reddy', src: '/assets/brands/logo_drreddy.png' },
    { name: 'GFL', src: '/assets/brands/logo_gfl.svg' },
    { name: 'JSW Energy', src: '/assets/brands/logo_jswenergy.svg' },
    { name: 'LafargeHolcim', src: '/assets/brands/logo_lafargeholcim.svg' },
    { name: 'Larsen & Toubro', src: '/assets/brands/logo_larsen_toubro.svg' },
    { name: 'Loreal', src: '/assets/brands/logo_loreal.png' },
    { name: 'MG Motors', src: '/assets/brands/logo_mg_motors.svg' },
    { name: 'TDSG', src: '/assets/brands/logo_tdsg.png' },
    { name: 'Titan', src: '/assets/brands/logo_titan.webp' },
    { name: 'Vedanta', src: '/assets/brands/logo_vedanta.svg' },
    { name: 'Orient', src: '/assets/brands/orient_logo.webp' },
    { name: 'Toyota', src: '/assets/brands/toyota_logo.webp' },
];

gsap.registerPlugin(ScrollTrigger);

export default function BrandTrustSection() {
    const isMobile = useIsMobile();
    const [visibleRows, setVisibleRows] = useState(4);

    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    // Calculate how many brands to show
    // Mobile: 2 columns, rows * 2
    // Desktop: all brands
    const visibleCount = isMobile ? visibleRows * 2 : brands.length;
    const visibleBrands = brands.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleRows((prev) => prev + 4);
        // Wait for DOM update, then refresh ScrollTrigger
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
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
                    { y: 30, opacity: 0, scale: 0.9 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        stagger: 0.05,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 90%',
                            end: 'top 60%',
                            scrub: 1,
                        },
                    },
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
        <section ref={sectionRef} className="bg-white py-12 font-sans md:py-24">
            <div ref={headerRef} className="mx-auto mb-10 max-w-7xl px-6 text-center md:mb-16 lg:px-8">
                <h2 className="mb-6 font-sans text-3xl font-extrabold text-gray-900">Trusted By The World&apos;s Leading Brands</h2>
                <p className="mx-auto max-w-3xl leading-relaxed text-gray-600">
                    We are glad to be a digital technology and innovation partner with world&apos;s leading brands. Building greater futures through
                    innovation and collective knowledge.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div ref={gridRef} className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {visibleBrands.map((brand, i) => (
                        <div
                            key={i}
                            className="group flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] grayscale transition-all hover:grayscale-0"
                        >
                            <picture className="flex h-full w-full items-center justify-center">
                                <source srcSet={brand.src} type="image/webp" />
                                <img
                                    src={brand.src}
                                    alt={brand.name}
                                    className="pointer-events-none max-h-full max-w-full object-contain select-none"
                                    style={{ transform: 'translateZ(0)' }}
                                    loading="lazy"
                                />
                            </picture>
                        </div>
                    ))}
                </div>

                {/* Load More Button - Only Mobile & if more brands exist */}
                {isMobile && visibleCount < brands.length && (
                    <div className="mt-12 flex justify-center">
                        <Button
                            onClick={handleLoadMore}
                            variant="outline"
                            className="h-12 rounded-xl border-[#000027] px-8 font-bold text-[#000027] hover:bg-blue-50"
                        >
                            Load More
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
