import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import React from 'react';

export default function MarketingLayout({ children, transparentNavbar = false }: { children: React.ReactNode; transparentNavbar?: boolean }) {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar transparent={transparentNavbar} />
            <main className={cn("flex-1")}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
