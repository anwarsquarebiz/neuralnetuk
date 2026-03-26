import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { 
    Code2, 
    Cpu, 
    FileText, 
    Zap, 
    Database, 
    RefreshCcw, 
    LineChart, 
    ChevronRight,
    Activity
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

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
                        stagger: 0.1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: 'top 90%',
                            end: 'top 50%',
                            scrub: 1,
                        },
                    }
                );
            }
            
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
        <section ref={sectionRef} className="font-sans w-full py-12 md:py-20 flex items-center justify-center">
            <div className='bg-gray-100 w-full lg:max-w-[90%] xl:max-w-7xl mx-auto py-12 md:py-20 rounded-3xl'>
                <div ref={headerRef} className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-10 md:mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Services</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We offer comprehensive services to develop digital solutions & manage complete product lifecycle. 
                    <br />
                    We&apos;ve robust work history with diverse business services.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-16 ">
                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {[
                        { title: 'Software Development', icon: Code2, color: 'text-blue-500', slug: 'software-development' },
                        { title: 'ML and AI', icon: Cpu, color: 'text-purple-500', slug: 'ml-and-ai' },
                        { title: 'Content', icon: FileText, color: 'text-orange-500', slug: 'content' },
                        { title: 'Automation', icon: Zap, color: 'text-green-500', slug: 'automation' },
                        { title: 'Blockchain', icon: Database, color: 'text-indigo-600', slug: 'blockchain' },
                        { title: 'DevOps', icon: RefreshCcw, color: 'text-cyan-500', slug: 'devops' },
                        { title: 'Data Analytics', icon: LineChart, color: 'text-pink-500', slug: 'data-analytics' },
                        { title: 'Agile', icon: Activity, color: 'text-orange-600', slug: 'agile' },
                    ].map((service, i) => (
                        <div key={i} className="bg-white rounded-xl p-8 shadow-sm flex flex-col min-h-full border border-gray-100 hover:shadow-xl transition-all">
                            <service.icon className={cn("size-8 mb-6", service.color)} />
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-auto">
                                {service.title === 'Software Development' && "Designing and developing scalable software solutions tailored to modern business needs."}
                                {service.title === 'ML and AI' && "Building intelligent AI and machine learning solutions to automate processes and improve decisions."}
                                {service.title === 'Content' && "Creating strategic and engaging content that strengthens brand communication."}
                                {service.title === 'Automation' && "Implementing automation solutions to improve efficiency and reduce manual work."}
                                {service.title === 'Blockchain' && "Developing secure and transparent blockchain solutions for modern digital systems."}
                                {service.title === 'DevOps' && "Enhancing development workflows with reliable CI/CD and DevOps practices."}
                                {service.title === 'Data Analytics' && "Transforming data into valuable insights that support smarter business decisions."}
                                {service.title === 'Agile' && "Delivering projects efficiently through flexible and collaborative agile methodologies."}
                            </p>
                            <Button asChild size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full font-bold h-auto py-2.5 text-sm">
                                <Link href={`/services/${service.slug}`} className="flex items-center justify-center">
                                    Explore Service <ChevronRight className="ml-1 size-4" />
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
}
