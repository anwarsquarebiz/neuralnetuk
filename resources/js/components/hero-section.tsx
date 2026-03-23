import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function HeroSection() {
    return (
        <section className="relative min-h-[100svh] bg-[#050B20] text-white flex flex-col justify-end overflow-hidden font-sans">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/assets/hero  image.jpg" 
                    alt="NeuralNet Hero Overlay" 
                    className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B20] via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pt-32 md:pt-40 lg:px-8 flex flex-col xl:mb-12">
                <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl leading-tight">
                    NeuralNet Delivering
                </h1>
                <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl leading-tight text-blue-500 font-sans">
                    Business Outcomes with AI
                </h2>
                <p className="text-lg md:text-xl text-gray-300 font-medium mt-4 italic">
                    (Limitless Possibilities)
                </p>
            </div>

            {/* Hero Content - Positioned at the bottom */}
            <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-12 md:pb-24 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                {/* Left Part */}
                <div className="flex-1 max-w-2xl">
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start gap-3 text-sm md:text-base font-medium text-gray-200">
                            <span className="size-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                            <span>Most-rated <span className="font-bold text-white">#1 App Development</span> Company <span className="font-bold text-white">on Clutch</span> in India and USA.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm md:text-base font-medium text-gray-200">
                            <span className="size-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                            <span>Trusted by <span className="font-bold text-white">20+ Fortune 500 Companies</span> and a Clutch Leader.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm md:text-base font-medium text-gray-200">
                            <span className="size-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                            <span>We&apos;ve been Redefining Excellence for over <span className="font-bold text-white">Two Decades.</span></span>
                        </li>
                    </ul>
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-10 py-2 h-auto text-sm md:text-base font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                        <Link href="/contact">Request A Call</Link>
                    </Button>
                </div>

                {/* Right Part */}
                <div className="max-w-xs md:text-right">
                    <p className="text-2xl md:text-3xl font-bold leading-tight">
                        Ready to see what AI solutions can do <span className="text-blue-500">for your business?</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
