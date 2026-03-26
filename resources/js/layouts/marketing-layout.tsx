import Footer from '@/components/footer';
import LenisProvider from '@/components/lenis-provider';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import { router } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';

export default function MarketingLayout({ children, transparentNavbar = false }: { children: React.ReactNode; transparentNavbar?: boolean }) {
    useEffect(() => {
        const unbind = router.on('finish', () => {
            setTimeout(() => ScrollTrigger.refresh(), 100);
        });
        return () => unbind();
    }, []);

    return (
        <LenisProvider>
            <div className="flex min-h-[100svh] flex-col font-sans">
                <Navbar transparent={transparentNavbar} />
                <main className={cn('flex-1')}>{children}</main>
                <Footer />
            </div>
        </LenisProvider>
    );
}
