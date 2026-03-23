const premiumServices = [
    { title: 'Software Development', emoji: '💻' },
    { title: 'AI & Automation', emoji: '🤖' },
    { title: 'Cloud & DevOps', emoji: '☁️' },
    { title: 'Managed IT Services', emoji: '🛠️' },
    { title: 'Data & Analytics', emoji: '📊' },
    { title: 'System Integration', emoji: '🔗' },
    { title: 'Security & Compliance', emoji: '🔒' },
    { title: 'Web & App Development', emoji: '📱' },
];

export default function PremiumServicesSection() {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16 px-4">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Premium Services</h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    As a certified IT company, Sapphire helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {premiumServices.map((service, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-xl transition-all cursor-default group">
                            <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{service.emoji}</span>
                            <span className="text-sm font-bold text-gray-800 text-center sm:text-left leading-tight">{service.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
