import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <main className="p-6">
                <h1 className="text-2xl font-semibold">Home Page</h1>
                <p className="mt-2 text-sm text-gray-600">You are on the Home page.</p>
            </main>
        </>
    );
}
