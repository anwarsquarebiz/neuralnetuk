import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';

export default function HowWeCanHelp() {
    return (
        <MarketingLayout transparentNavbar={false}>
            <Head title="How We Can Help - NeuralNet" />
            <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">How We Can Help</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto italic font-medium">
                    Content is being updated. Please visit our <a href="/consulting" className="text-blue-600 hover:underline">Consulting</a> page for our latest strategies.
                </p>
            </div>
        </MarketingLayout>
    );
}
