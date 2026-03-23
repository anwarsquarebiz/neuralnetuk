import { cn } from '@/lib/utils';

export default function AboutUsStats() {
    return (
        <section className="bg-blue-600 py-20 text-white font-sans">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16 px-4">
                <h2 className="text-4xl font-extrabold mb-6">About Us</h2>
                <p className="text-lg max-w-4xl mx-auto leading-relaxed opacity-90">
                    NeuralNet is a UK-based IT consulting and software development company focused on delivering high-quality solutions on time and within budget. Our team of digital innovators and business specialists is dedicated to driving successful digital transformation for our clients.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { val: '20+', label: 'Years of Leadership Experience', img: '/assets/about-stats/leadership_expertise.jpg' },
                        { val: '50+', label: 'Enterprise AI & Digital Projects', img: '/assets/about-stats/enterprise_aI_digital_projects.jpg' },
                        { val: '100+', label: 'AI & Technology Consultations', img: '/assets/about-stats/aI_technology_consultations.jpg' },
                        { val: '25+', label: 'Years Combined IT Industry Expertise', img: '/assets/about-stats/years_combined_it_industry_expertise.jpg' },
                        { val: '95%', label: 'Client Satisfaction Rate', img: '/assets/about-stats/client_satisfaction_rate.jpg' },
                        { val: 'UK Based', label: 'Serving Global Clients', img: '/assets/about-stats/serving_global_clients.jpg' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-3xl p-4 flex items-center gap-6 shadow-xl text-blue-900 overflow-hidden ">
                            <img 
                                src={stat.img} 
                                alt={stat.label}
                                className="size-24 rounded-2xl flex-shrink-0 object-cover"
                                loading="lazy"
                            />
                            <div className="flex flex-col flex-1">
                                <span className="text-4xl font-extrabold text-blue-600 mb-1">{stat.val}</span>
                                <span className="text-sm font-semibold opacity-80 leading-snug">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
