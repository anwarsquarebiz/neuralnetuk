import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import LenisProvider from '@/components/lenis-provider';
import { type BreadcrumbItem } from '@/types';
import { router } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';

export default function AppSidebarLayout({ children, breadcrumbs = [] }: { children: React.ReactNode; breadcrumbs?: BreadcrumbItem[] }) {
    useEffect(() => {
        const unbind = router.on('finish', () => {
            setTimeout(() => ScrollTrigger.refresh(), 100);
        });
        return () => unbind();
    }, []);

    return (
        <LenisProvider>
            <AppShell variant="sidebar">
                <AppSidebar />
                <AppContent variant="sidebar">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} />
                    {children}
                </AppContent>
            </AppShell>
        </LenisProvider>
    );
}
