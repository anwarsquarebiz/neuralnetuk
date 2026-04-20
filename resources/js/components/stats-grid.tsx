import { cn } from '@/lib/utils';

const stats = [
    { val: '20+', label: 'Years of Leadership Experience', img: 'bg-gray-100' },
    { val: '50+', label: 'Enterprise AI & Digital Projects', img: 'bg-gray-800' },
    { val: '100+', label: 'AI & Technology Consultations', img: 'bg-black' },
    { val: '25+', label: 'Years Combined IT Industry Expertise', img: 'bg-blue-900' },
    { val: '95%', label: 'Client Satisfaction Rate', img: 'bg-gray-200' },
    { val: 'UK Based', label: 'Serving Global Clients', img: 'bg-gray-50' },
];

export default function StatsGrid({ className }: { className?: string }) {
    return (
        <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', className)}>
            {stats.map((stat, i) => (
                <div
                    key={i}
                    className="group flex flex-col items-start gap-4 rounded-2xl border border-gray-50 bg-white p-4 text-[#0a1a3b] transition-all hover:border-[#000027]/10"
                >
                    <div className="flex flex-1 flex-col">
                        <span className="mb-1 text-3xl font-extrabold text-[#1a56db] md:text-4xl">{stat.val}</span>
                        <span className="text-[10px] leading-tight font-bold tracking-wider uppercase opacity-60 md:text-xs">{stat.label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
