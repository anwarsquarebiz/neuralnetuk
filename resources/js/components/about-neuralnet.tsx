import { Button } from '@/components/ui/button';

export default function AboutNeuralNet() {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-blue-600/5 rounded-[2.5rem] blur-2xl group-hover:bg-blue-600/10 transition-all duration-700"></div>
                        <div className="relative aspect-[4/3] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 group-hover:scale-[1.02] transition-all duration-700">
                            <img 
                                src="/assets/about-us/about section image.jpg" 
                                alt="About NeuralNet" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1a3b] mb-6">
                                About NeuralNet
                            </h2>
                            <p className="text-[#4a5568] text-lg leading-relaxed mb-6">
                                NeuralNet is a UK-based IT consulting and software development company focused on delivering high-quality solutions on time and within budget. We specialize in AI-driven digital transformation for enterprise clients worldwide.
                            </p>
                            <p className="text-[#4a5568] text-lg leading-relaxed">
                                Our mission is to empower businesses with the latest technologies and strategic insights they need to thrive in the digital age. With a team of world-class engineers and strategists, we turn complex challenges into competitive advantages.
                            </p>
                        </div>
                        <Button className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-200">
                            Join our team
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
