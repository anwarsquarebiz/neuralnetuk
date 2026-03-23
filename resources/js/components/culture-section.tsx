import { Button } from '@/components/ui/button';

export default function CultureSection() {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1a3b] mb-6">
                                Our Culture
                            </h2>
                            <p className="text-[#4a5568] text-lg leading-relaxed mb-6">
                                At NeuralNet, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our team members to take ownership of their work and drive meaningful results.
                            </p>
                            <p className="text-[#4a5568] text-lg leading-relaxed">
                                We are a team of passionate and dedicated professionals who are committed to delivering exceptional quality and value to our clients. Our culture is built on a foundation of trust, respect, and mutual support.
                            </p>
                        </div>
                        <Button className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-200">
                            Join our team
                        </Button>
                    </div>

                    {/* Right: 2x2 Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="aspect-square bg-blue-50 rounded-[2rem] overflow-hidden group">
                                <img 
                                    src="/assets/about-us/our-culture/first.jpg" 
                                    alt="Team Event" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="aspect-[3/4] bg-indigo-50 rounded-[2rem] overflow-hidden group">
                                <img 
                                    src="/assets/about-us/our-culture/second.jpg" 
                                    alt="Workplace" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                            <div className="aspect-[3/4] bg-sky-50 rounded-[2rem] overflow-hidden group">
                                <img 
                                    src="/assets/about-us/our-culture/third.jpg" 
                                    alt="Collaboration" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="aspect-square bg-slate-50 rounded-[2rem] overflow-hidden group">
                                <img 
                                    src="/assets/about-us/our-culture/fourth.jpg" 
                                    alt="Office Fun" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
