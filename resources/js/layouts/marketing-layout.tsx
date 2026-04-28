import Footer from '@/components/footer';
import LenisProvider from '@/components/lenis-provider';
import Loader from '@/components/Loader';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import { router } from '@inertiajs/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useState } from 'react';

let isInitialSiteLoad = true;

export default function MarketingLayout({ children, transparentNavbar = false }: { children: React.ReactNode; transparentNavbar?: boolean }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState<boolean | undefined>(undefined);
    const [pendingUrl, setPendingUrl] = useState<string | null>(null);

    const handleLoadingComplete = () => {
        setIsLoaded(true);
        isInitialSiteLoad = false;
    };

    const handleTransitionComplete = () => {
        if (pendingUrl) {
            router.visit(pendingUrl);
            setPendingUrl(null);
        }
    };

    useEffect(() => {
        const unbindBefore = router.on('before', (event) => {
            // Only intercept internal navigations that aren't manual visits after animation
            if (event.detail.visit.url.toString() !== pendingUrl) {
                event.preventDefault();
                setPendingUrl(event.detail.visit.url.toString());
                setIsTransitioning(true);
            }
        });

        const unbindFinish = router.on('finish', () => {
            setIsTransitioning(false);
            setTimeout(() => ScrollTrigger.refresh(), 100);
        });

        return () => {
            unbindBefore();
            unbindFinish();
        };
    }, [pendingUrl]);

    return (
        <LenisProvider>
            <div
                className={cn(
                    'flex flex-col font-sans transition-all duration-500',
                    !isLoaded || isTransitioning ? 'h-[100svh] overflow-hidden' : 'min-h-[100svh]',
                )}
            >
                <Loader
                    isFirstLoad={isInitialSiteLoad}
                    show={isTransitioning}
                    onCompleteAction={handleTransitionComplete}
                    handleLoadingComplete={handleLoadingComplete}
                />
                <Navbar transparent={transparentNavbar} />
                <main className={cn('flex-1')}>{children}</main>
                <Footer />
            </div>
        </LenisProvider>
    );
}
