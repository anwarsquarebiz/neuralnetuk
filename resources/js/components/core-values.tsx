import { 
    Users, 
    Zap, 
    Handshake, 
    Lightbulb, 
    Heart, 
    TrendingUp 
} from 'lucide-react';

const values = [
    {
        title: 'Client Success',
        desc: 'Our success is measured by the success of our clients. We go above and beyond to ensure they achieve their goals.',
        icon: Users,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        title: 'Performance Excellence',
        desc: 'We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.',
        icon: Zap,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
    },
    {
        title: 'Team Collaboration',
        desc: 'We believe in the power of teamwork and collaboration, fostering an environment where everyone can contribute and grow.',
        icon: Handshake,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
    },
    {
        title: 'Innovative',
        desc: 'We are constantly exploring new ideas and technologies to stay ahead of the curve and deliver innovative solutions.',
        icon: Lightbulb,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
    },
    {
        title: 'Customer First',
        desc: 'Our customers are at the heart of everything we do. We are dedicated to providing exceptional service and support.',
        icon: Heart,
        color: 'text-red-600',
        bgColor: 'bg-red-50',
    },
    {
        title: 'Continuous Improvement',
        desc: 'We are committed to continuous learning and improvement, always seeking ways to enhance our skills and processes.',
        icon: TrendingUp,
        color: 'text-green-600',
        bgColor: 'bg-green-50',
    },
];

export default function CoreValues() {
    return (
        <section className="py-24 bg-gray-50/30 font-sans">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16 px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1a3b] mb-4">
                    Our Core Values
                </h2>
                <p className="text-[#4a5568] max-w-2xl mx-auto leading-relaxed">
                    Our values guide us in everything we do, from how we work with our clients to how we collaborate as a team.
                </p>
                <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-8"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {values.map((v, i) => (
                        <div key={i} className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-600/5 hover:-translate-y-2 transition-all duration-500">
                            <div className={`size-14 ${v.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500`}>
                                <v.icon className={`size-7 ${v.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0a1a3b] mb-4 group-hover:text-blue-600 transition-colors">
                                {v.title}
                            </h3>
                            <p className="text-[#4a5568] text-sm leading-relaxed">
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
