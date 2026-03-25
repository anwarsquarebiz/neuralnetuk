import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { 
    Settings,
    Handshake,
    Users,
    Building2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const models = [
// ... existing models ...
    { title: 'Fully Managed Services', icon: Settings, color: 'text-blue-500', desc: 'NeuralNet takes complete responsibility for your IT or AI operations, including infrastructure, support, monitoring, and security. This model allows businesses to focus on growth while NeuralNet manages the entire technology environment with predictable monthly costs.' },
    { title: 'Hybrid Partnership Model', icon: Handshake, color: 'text-cyan-500', desc: 'NeuralNet works alongside your internal teams, providing additional expertise, automation capabilities, and 24/7 support. This approach enhances your existing IT or engineering teams while keeping strategic control within your organization.' },
    { title: 'Dedicated Teams', icon: Users, color: 'text-purple-500', desc: 'Build a dedicated team of engineers, AI specialists, DevOps experts, and IT professionals exclusively aligned with your business. These teams operate as an extension of your organization, ensuring continuity, scalability, and deep integration with your operations.' },
    { title: 'Global Capability Centre (GCC)', icon: Building2, color: 'text-green-500', desc: 'For organizations looking to scale globally, NeuralNet helps establish secure offshore delivery teams and operational centres. This model provides long-term cost efficiency, access to global talent, and enterprise-grade governance.' },
];

export default function EngagementModelsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 95%',
                        end: 'top 70%',
                        scrub: 1,
                    },
                }
            );

            if (gridRef.current) {
                gsap.fromTo(gridRef.current.children,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.15,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 90%',
                            end: 'top 40%',
                            scrub: 1,
                        },
                    }
                );
            }

            gsap.fromTo(ctaRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 98%',
                        end: 'bottom 90%',
                        scrub: 1,
                    },
                }
            );

            ScrollTrigger.refresh();
        }, sectionRef);

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-blue-600 text-white font-sans">
            <div ref={headerRef} className="mx-auto mb-16 max-w-7xl px-6 text-center lg:px-8">
                <h2 className="mb-6 text-4xl font-extrabold">Flexible Engagement Models</h2>
                <p className="mx-auto max-w-4xl text-lg leading-relaxed opacity-90">
                    NeuralNet provides flexible engagement models designed to support organisations at every stage of growth. Whether you need fully managed services, specialist support, or dedicated engineering teams, our delivery approach adapts to your business goals, technical needs, and operational scale.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div ref={gridRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
                    {models.map((model, i) => (
                        <div key={i} className="bg-white rounded-xl p-8 shadow-2xl flex flex-col h-full text-blue-900">
                            <model.icon className={cn("size-10 mb-6", model.color)} />
                            <h3 className="text-xl font-bold mb-6 leading-tight">{model.title}</h3>
                            <p className="text-sm font-medium opacity-80 leading-relaxed">
                                {model.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div ref={ctaRef} className="flex justify-center">
                    <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 rounded-md px-10 py-3 h-auto text-sm font-extrabold shadow-xl">
                        <Link href="/contact">Get In Touch</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
