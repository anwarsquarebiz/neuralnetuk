const leaders = [
    { name: 'Sanjay Juneja', role: 'CRO', src: '/assets/about-us/team/first.png' },
    { name: 'Anubhav Chaturvedi', role: 'CTO', src: '/assets/about-us/team/second.png' },
    { name: 'Kuljit Moore', role: 'CCO', src: '/assets/about-us/team/third.png' },
    { name: 'Manav Yesudas', role: 'CFO', src: '/assets/about-us/team/fourth.png' },
];

export default function LeadershipSection() {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                    Our Leadership
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base px-4">
                    The outlook, passion and experience of our leaders guides Sapphire. They have a relentless passion to offer the highest levels of innovation and service excellence.
                </p>
            </div>

            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-16">
                    {leaders.map((leader, i) => (
                        <div key={i} className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-6 sm:gap-10 group max-w-2xl mx-auto lg:mx-0">
                            {/* Left: Image Container */}
                            <div className="w-full max-w-[200px] sm:max-w-[240px] aspect-square bg-[#C4C4C4] rounded-[2rem] overflow-hidden relative flex-shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
                                <img 
                                    src={leader.src} 
                                    alt={leader.name} 
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            
                            {/* Right: Info */}
                            <div className="flex flex-col justify-center flex-1 min-w-0">
                                <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 whitespace-normal leading-tight">
                                    {leader.name}
                                </h3>
                                <p className="text-lg md:text-xl font-bold text-blue-600 uppercase tracking-tight">
                                    {leader.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
