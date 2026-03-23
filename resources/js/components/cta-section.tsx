import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
    title?: string;
    description?: string;
}

export default function CTASection({ 
    title = "Start Building with a Dedicated Engineering Team", 
    description = "Let's discuss how our AI-augmented teams can accelerate your product development and reduce time-to-market." 
}: CTASectionProps) {
    return (
        <section className="bg-[#1e48f7] py-16 font-sans border-t border-blue-400/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
                        {title}
                    </h2>
                    <p className="text-blue-50/90 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Link href="/contact">
                            <Button className="h-12 px-8 rounded-lg bg-white text-blue-600 hover:bg-white/90 font-bold shadow-md flex items-center gap-2">
                                Talk to an Expert
                                <ArrowRight className="size-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
