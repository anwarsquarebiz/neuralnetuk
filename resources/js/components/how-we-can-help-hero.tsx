import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function HowWeCanHelpHero() {
    return (
        <section className="bg-[#E4ECFF] py-20 md:pt-32 font-sans overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="max-w-xl">
                    <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl text-gray-900 leading-tight mb-6">
                        At NeuralNet our Specialists are ready to assist
                    </h1>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                        With our expertise in AI, architecture, development and QA, we can design a comprehensive strategy to improve efficiency, performance, and your business outcomes.
                    </p>
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-10 h-10 text-sm font-bold shadow-xl">
                        <Link href="/contact" className="flex items-center gap-2">
                            Get Started <ChevronRight className="size-4" />
                        </Link>
                    </Button>
                </div>

                {/* Right Placeholder Image */}
                <div className="flex-1 w-full max-w-md">
                    <div className="aspect-square bg-white rounded-3xl shadow-2xl flex items-center justify-center p-8 border border-gray-100">
                        <div className="w-full h-full bg-blue-50 rounded-2xl flex items-center justify-center text-blue-200">
                            <span className="text-5xl font-extrabold">IMAGE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
