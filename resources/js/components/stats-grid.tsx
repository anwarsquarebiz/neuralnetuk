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
        <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4", className)}>
            {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 flex flex-col items-start gap-4 text-[#0a1a3b] border border-gray-50 group hover:border-blue-600/10 transition-all">
                    <div className="flex flex-col flex-1">
                        <span className="text-3xl md:text-4xl font-extrabold text-[#1a56db] mb-1">{stat.val}</span>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-60 leading-tight">{stat.label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
