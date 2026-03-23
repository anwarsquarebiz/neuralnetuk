import { cn } from '@/lib/utils';

interface FullWidthBannerProps {
    text: string;
    className?: string;
}

export default function FullWidthBanner({ text, className }: FullWidthBannerProps) {
    return (
        <section className={cn("w-full bg-blue-600 py-6 overflow-hidden", className)}>
            <div className="w-full text-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight opacity-90">
                    {text}
                </h2>
            </div>
        </section>
    );
}
