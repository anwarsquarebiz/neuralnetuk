import { Target, Rocket } from 'lucide-react';

const goals = [
    {
        title: 'Our Vision',
        icon: Target,
        desc: 'To be a global leader in AI-powered software engineering, empowering businesses to achieve their full potential through strategic digital innovation and exceptional quality.',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        title: 'Our Mission',
        icon: Rocket,
        desc: 'To deliver high-quality, reliable, and scalable software solutions that drive real business value, foster innovation, and enable our clients to thrive in an ever-evolving digital landscape.',
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
    },
];

export default function VisionMission() {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1a3b] mb-4">
                    Driving Innovation Through AI & Digital Transformation
                </h2>
                <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {goals.map((goal, i) => (
                        <div key={i} className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 text-center flex flex-col items-center">
                            <div className={`size-20 ${goal.bgColor} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                <goal.icon className={`size-10 ${goal.color}`} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0a1a3b] mb-6">
                                {goal.title}
                            </h3>
                            <p className="text-[#4a5568] leading-relaxed text-lg">
                                {goal.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
