import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface ServiceHeroProps {
    title: string;
    description: string;
    imageSrc?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function ServiceHero({ 
    title, 
    description, 
    imageSrc, 
    buttonText = "Talk To An Expert", 
    buttonHref = "/contact" 
}: ServiceHeroProps) {
    return (
        <section className="relative w-full pt-32 pb-20 bg-[#f0f4ff] overflow-hidden font-sans">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1a3b] leading-tight mb-6">
                            {title}
                        </h1>
                        <p className="text-lg text-[#4a5568] font-medium leading-relaxed mb-10 max-w-xl">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 py-3 h-auto text-sm font-bold shadow-lg">
                                <Link href={buttonHref}>{buttonText}</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Image/Placeholder */}
                    <div className="flex-1 w-full lg:max-w-[600px] relative">
                        {imageSrc ? (
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <img src={imageSrc} alt={title} className="w-full aspect-video object-cover" loading="lazy" />
                            </div>
                        ) : (
                            <div className="w-full aspect-video bg-[#0a1a3b] rounded-2xl shadow-2xl overflow-hidden border-4 border-white flex items-center justify-center p-8">
                                <div className="w-full h-full border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center">
                                    <span className="text-white/40 font-mono text-sm">Visual Asset Placeholder</span>
                                </div>
                            </div>
                        )}
                        
                        {/* Decorative background circle */}
                        <div className="absolute -top-10 -right-10 size-40 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-10 -left-10 size-32 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
