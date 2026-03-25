import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Activity, ChevronDown, ChevronRight, Code2, Cpu, Database, FileText, LineChart, Menu, RefreshCcw, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import NeuralIcon from './neural-icon';

const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services', hasMegaMenu: true },
    { title: 'Consulting', href: '/consulting' },
    { title: 'About us', href: '/about' },
];

const services = [
    {
        title: 'Software Development',
        icon: Code2,
        color: 'text-blue-500',
        desc: 'Scalable solutions for modern business.',
        slug: 'software-development',
    },
    { title: 'ML and AI', icon: Cpu, color: 'text-purple-500', desc: 'Intelligent automation and insights.', slug: 'ml-and-ai' },
    { title: 'Content', icon: FileText, color: 'text-orange-500', desc: 'Strategic brand communication.', slug: 'content' },
    { title: 'Automation', icon: Zap, color: 'text-green-500', desc: 'Efficiency through smart workflows.', slug: 'automation' },
    { title: 'Blockchain', icon: Database, color: 'text-indigo-600', desc: 'Secure and transparent systems.', slug: 'blockchain' },
    { title: 'DevOps', icon: RefreshCcw, color: 'text-cyan-500', desc: 'Reliable CI/CD & infrastructure.', slug: 'devops' },
    { title: 'Data Analytics', icon: LineChart, color: 'text-pink-500', desc: 'Data-driven decision support.', slug: 'data-analytics' },
    { title: 'Agile', icon: Activity, color: 'text-orange-600', desc: 'Flexible & collaborative delivery.', slug: 'agile' },
];

interface NavbarProps {
    transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isTransparentAtTop = transparent && !isScrolled;

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 z-50 w-full transition-all duration-300',
                isScrolled ? 'text-foreground border-b bg-white backdrop-blur-md' : 'bg-transparent',
            )}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
            <div className="mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 outline-none">
                    <NeuralIcon className={cn('size-8', isTransparentAtTop ? 'text-blue-400' : 'text-blue-500')} />
                    <span className={cn('text-xl font-bold tracking-tight', isTransparentAtTop ? 'text-white' : 'text-foreground')}>NeuralNet</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <div
                            key={link.title}
                            className="relative py-8"
                            onMouseEnter={() => (link.hasMegaMenu ? setIsMegaMenuOpen(true) : setIsMegaMenuOpen(false))}
                        >
                            {link.hasMegaMenu ? (
                                <button
                                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                                    className={cn(
                                        'flex cursor-pointer items-center gap-1 border-none bg-transparent text-sm font-medium transition-colors outline-none hover:text-blue-500',
                                        isTransparentAtTop ? 'text-white/90' : 'text-foreground/80',
                                    )}
                                >
                                    {link.title}
                                    <ChevronDown className={cn('size-3.5 transition-transform', isMegaMenuOpen && 'rotate-180')} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={cn(
                                        'flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-500',
                                        isTransparentAtTop ? 'text-white/90' : 'text-foreground/80',
                                    )}
                                >
                                    {link.title}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Button asChild className="ml-4 h-auto rounded-lg bg-blue-600 py-2 text-sm text-white shadow-lg hover:bg-blue-700">
                        <Link href="/contact">Talk To An Expert</Link>
                    </Button>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={isTransparentAtTop ? 'text-white' : 'text-foreground'}>
                                <Menu className="size-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background w-[300px] p-0">
                            <div className="flex h-full flex-col px-6 py-10">
                                <SheetTitle className="mb-8">
                                    <Link href="/" className="flex items-center gap-2">
                                        <NeuralIcon className="size-8 text-blue-500" />
                                        <span className="text-foreground text-xl font-bold tracking-tight">NeuralNet</span>
                                    </Link>
                                </SheetTitle>
                                <div className="flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <div key={link.title} className="flex flex-col gap-4">
                                            {link.hasMegaMenu ? (
                                                <>
                                                    <button
                                                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                                                        className="text-foreground/80 flex w-full items-center justify-between border-none bg-transparent text-left text-lg font-medium transition-colors hover:text-blue-500"
                                                    >
                                                        {link.title}
                                                        <ChevronDown className={cn('size-4 transition-transform', isMegaMenuOpen && 'rotate-180')} />
                                                    </button>
                                                    {isMegaMenuOpen && (
                                                        <div className="ml-1 flex flex-col gap-3 border-l-2 border-blue-500 pl-4">
                                                            {services.map((service, i) => (
                                                                <Link
                                                                    key={i}
                                                                    href={`/services/${service.slug}`}
                                                                    className="text-foreground/60 text-sm font-medium transition-colors hover:text-blue-500"
                                                                >
                                                                    {service.title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="text-foreground/80 text-lg font-medium transition-colors hover:text-blue-500"
                                                >
                                                    {link.title}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                    <Button
                                        asChild
                                        className="mt-4 h-auto w-full rounded-lg bg-blue-600 py-3 text-sm text-white shadow-lg hover:bg-blue-700"
                                    >
                                        <Link href="/contact">Talk To An Expert</Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            <div
                className={cn(
                    'absolute top-20 left-0 z-40 w-full overflow-hidden border-b bg-white shadow-2xl transition-all duration-300 ease-in-out',
                    isMegaMenuOpen ? 'visible max-h-[600px] opacity-100' : 'invisible max-h-0 opacity-0',
                )}
                onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
                <div className="mx-auto flex min-h-[200px] px-4 sm:px-6 lg:px-8">
                    {/* Left Sidebar */}
                    <div className="relative flex w-1/4 flex-col justify-between overflow-hidden bg-blue-600 p-10 text-white">
                        {/* Minimalist background accent */}
                        <div className="pointer-events-none absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-10">
                            <div className="h-[300px] w-[300px] rounded-full border-[20px] border-white"></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="mb-4 text-3xl font-extrabold">Service</h3>
                            <p className="text-sm leading-relaxed font-medium text-blue-100">
                                Our Portfolio Of Services Range From Designing Strategy To Delivering Impact.
                            </p>
                        </div>

                        <Button
                            asChild
                            className="relative z-10 h-auto w-full rounded-md bg-white px-6 py-3 text-sm font-bold text-blue-600 hover:bg-gray-100"
                        >
                            <Link href="/contact">Hire Now</Link>
                        </Button>
                    </div>

                    {/* Right Content Area */}
                    <div className="grid flex-1 grid-cols-2 gap-3 bg-white p-8">
                        {services.map((service, i) => (
                            <Link
                                key={i}
                                href={`/services/${service.slug}`}
                                className="group flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            >
                                <div
                                    className={cn(
                                        'flex size-10 flex-shrink-0 items-center justify-center rounded-lg border border-transparent bg-gray-50 transition-colors group-hover:border-gray-100 group-hover:bg-white',
                                        service.color,
                                    )}
                                >
                                    <service.icon className="size-5" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <h4 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                                            {service.title}
                                        </h4>
                                        <ChevronRight className="size-3 -translate-x-2 text-blue-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                    </div>
                                    <p className="mt-1 text-xs text-gray-500">{service.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
