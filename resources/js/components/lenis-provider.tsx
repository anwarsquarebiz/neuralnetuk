import Lenis from 'lenis';
import { createContext, useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { router } from '@inertiajs/react';

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Sync ScrollTrigger with Lenis
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(lenis.raf);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // Handle scroll reset on Inertia page transitions
    useEffect(() => {
        const unbind = router.on('finish', () => {
            if (lenisRef.current) {
                // Reset scroll to top immediately
                lenisRef.current.scrollTo(0, { immediate: true });
                // Force ScrollTrigger to recalculate positions for the new page
                ScrollTrigger.refresh();
            }
        });

        return () => unbind();
    }, []);

    return <LenisContext.Provider value={lenisRef.current}>{children}</LenisContext.Provider>;
}
