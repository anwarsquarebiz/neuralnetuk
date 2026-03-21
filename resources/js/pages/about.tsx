import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <Head title="About" />
            <main className="p-6">
                <h1 className="text-2xl font-semibold">About Page</h1>
                <p className="mt-2 text-sm text-gray-600">You are on the About page.</p>
            </main>
        </>
    );
}
