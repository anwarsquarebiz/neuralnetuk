import { router } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const rafRef = useRef<((time: number) => void) | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const userAgent = navigator.userAgent;
        const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
        const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

        // Strict early return for Safari and Mobile devices
        if (isSafari || isMobile) return;

        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            infinite: false,
        });

        setLenis(lenisInstance);

        // Sync ScrollTrigger with Lenis
        lenisInstance.on('scroll', ScrollTrigger.update);

        // Define RAF function and store reference for proper cleanup
        const raf = (time: number) => {
            lenisInstance.raf(time * 1000);
        };
        rafRef.current = raf;
        gsap.ticker.add(raf);

        gsap.ticker.lagSmoothing(0);

        return () => {
            if (rafRef.current) {
                gsap.ticker.remove(rafRef.current);
            }
            lenisInstance.destroy();
            setLenis(null);
        };
    }, []);

    // Handle scroll reset on Inertia page transitions
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const unbind = router.on('finish', () => {
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
                setTimeout(() => ScrollTrigger.refresh(), 100);
            }
        });

        return () => unbind();
    }, [lenis]);

    return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
