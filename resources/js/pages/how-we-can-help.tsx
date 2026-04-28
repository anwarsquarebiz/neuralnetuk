import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';

export default function HowWeCanHelp() {
    return (
        <MarketingLayout transparentNavbar={false}>
            <Head title="How We Can Help - NeuralNet" />
            <div className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">How We Can Help</h1>
                <p className="mx-auto max-w-2xl text-xl font-medium text-gray-600 italic">
                    Content is being updated. Please visit our{' '}
                    <a href="/consulting" className="text-[#000027] hover:underline">
                        Consulting
                    </a>{' '}
                    page for our latest strategies.
                </p>
            </div>
        </MarketingLayout>
    );
}
