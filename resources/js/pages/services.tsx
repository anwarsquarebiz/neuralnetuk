import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';

export default function Services() {
    return (
        <MarketingLayout>
            <Head title="Services" />
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Services</h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Our range of enterprise-grade AI and software services.
                </p>
            </div>
        </MarketingLayout>
    );
}
