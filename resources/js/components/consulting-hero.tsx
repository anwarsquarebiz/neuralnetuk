import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function ConsultingHero() {
    return (
        <section className="bg-[#E4ECFF] py-20 md:pt-32 font-sans overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                {/* Left Content */}
                <div className="max-w-xl">
                    <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl text-gray-900 leading-tight mb-6">
                        At NeuralNet our Specialists are ready to assist
                    </h1>
                    <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                        With our expertise in AI, architecture, development and QA, we can design a comprehensive strategy to improve efficiency, performance, and your business outcomes.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-10 py-3 h-auto text-sm font-bold shadow-xl">
                            <Link href="/contact" className="flex items-center gap-2">
                                Get Started <ChevronRight className="size-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full max-w-md">
                    <div className="relative w-full aspect-video flex items-center justify-center p-4">
                        <img 
                            src="/assets/consulting hero.png" 
                            alt="Consulting Hero" 
                            className="w-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
