import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, ChevronRight, Code2, Cpu, Database, FileText, LineChart, RefreshCcw, Zap } from 'lucide-react';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current,
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
                },
            );

            if (gridRef.current) {
                gsap.fromTo(
                    gridRef.current.children,
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
                    },
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
        <section ref={sectionRef} className="flex w-full items-center justify-center py-12 font-sans md:py-20">
            <div className="mx-auto w-full rounded-3xl bg-gray-100 py-12 md:py-20 lg:max-w-[90%] xl:max-w-7xl">
                <div ref={headerRef} className="mx-auto mb-10 max-w-7xl px-6 text-center md:mb-16 lg:px-8">
                    <h2 className="mb-4 text-3xl font-extrabold text-gray-900">Our Services</h2>
                    <p className="mx-auto max-w-3xl leading-relaxed text-gray-600">
                        We offer comprehensive services to develop digital solutions & manage complete product lifecycle.
                        <br />
                        We&apos;ve robust work history with diverse business services.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
                            <div
                                key={i}
                                className="flex min-h-full flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
                            >
                                <service.icon className={cn('mb-6 size-8', service.color)} />
                                <h3 className="mb-4 text-xl font-bold text-gray-900">{service.title}</h3>
                                <p className="mb-auto text-sm leading-relaxed text-gray-600">
                                    {service.title === 'Software Development' &&
                                        'Designing and developing scalable software solutions tailored to modern business needs.'}
                                    {service.title === 'ML and AI' &&
                                        'Building intelligent AI and machine learning solutions to automate processes and improve decisions.'}
                                    {service.title === 'Content' && 'Creating strategic and engaging content that strengthens brand communication.'}
                                    {service.title === 'Automation' &&
                                        'Implementing automation solutions to improve efficiency and reduce manual work.'}
                                    {service.title === 'Blockchain' &&
                                        'Developing secure and transparent blockchain solutions for modern digital systems.'}
                                    {service.title === 'DevOps' && 'Enhancing development workflows with reliable CI/CD and DevOps practices.'}
                                    {service.title === 'Data Analytics' &&
                                        'Transforming data into valuable insights that support smarter business decisions.'}
                                    {service.title === 'Agile' &&
                                        'Delivering projects efficiently through flexible and collaborative agile methodologies.'}
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="mt-8 h-auto w-full rounded-md bg-[#000027] py-2.5 text-sm font-bold text-white hover:bg-blue-700"
                                >
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
