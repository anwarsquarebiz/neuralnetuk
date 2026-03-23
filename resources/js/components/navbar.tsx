import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import {
    Menu,
    ChevronDown,
    ChevronRight,
    Code2,
    Cpu,
    FileText,
    Zap,
    Database,
    RefreshCcw,
    LineChart,
    Activity
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import NeuralIcon from './neural-icon';

const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services', hasMegaMenu: true },
    { title: 'Consulting', href: '/consulting' },
    { title: 'About us', href: '/about' },
];

const services = [
    { title: 'Software Development', icon: Code2, color: 'text-blue-500', desc: 'Scalable solutions for modern business.', slug: 'software-development' },
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
                isScrolled ? 'bg-white backdrop-blur-md border-b text-foreground' : 'bg-transparent',
            )}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
            <div className="mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 outline-none">
                    <NeuralIcon className={cn("size-8", isTransparentAtTop ? "text-blue-400" : "text-blue-500")} />
                    <span className={cn("text-xl font-bold tracking-tight", isTransparentAtTop ? "text-white" : "text-foreground")}>NeuralNet</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <div 
                            key={link.title}
                            className="relative py-8"
                            onMouseEnter={() => link.hasMegaMenu ? setIsMegaMenuOpen(true) : setIsMegaMenuOpen(false)}
                        >
                            {link.hasMegaMenu ? (
                                <button
                                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                                    className={cn(
                                        "text-sm font-medium transition-colors flex items-center gap-1 hover:text-blue-500 bg-transparent border-none cursor-pointer outline-none",
                                        isTransparentAtTop ? "text-white/90" : "text-foreground/80"
                                    )}
                                >
                                    {link.title}
                                    <ChevronDown className={cn("size-3.5 transition-transform", isMegaMenuOpen && "rotate-180")} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors flex items-center gap-1 hover:text-blue-500",
                                        isTransparentAtTop ? "text-white/90" : "text-foreground/80"
                                    )}
                                >
                                    {link.title}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Button asChild className="ml-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg h-auto py-2 text-sm">
                        <Link href="/contact">Talk To An Expert</Link>
                    </Button>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={isTransparentAtTop ? "text-white" : "text-foreground"}>
                                <Menu className="size-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-background p-0">
                            <div className="flex flex-col h-full py-10 px-6">
                                <SheetTitle className="mb-8">
                                    <Link href="/" className="flex items-center gap-2">
                                        <NeuralIcon className="size-8 text-blue-500" />
                                        <span className="text-xl font-bold tracking-tight text-foreground">NeuralNet</span>
                                    </Link>
                                </SheetTitle>
                                <div className="flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <div key={link.title} className="flex flex-col gap-4">
                                            {link.hasMegaMenu ? (
                                                <>
                                                    <button 
                                                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                                                        className="text-lg font-medium text-foreground/80 transition-colors hover:text-blue-500 flex items-center justify-between w-full bg-transparent border-none text-left"
                                                    >
                                                        {link.title}
                                                        <ChevronDown className={cn("size-4 transition-transform", isMegaMenuOpen && "rotate-180")} />
                                                    </button>
                                                    {isMegaMenuOpen && (
                                                        <div className="flex flex-col gap-3 pl-4 border-l-2 border-blue-500 ml-1">
                                                            {services.map((service, i) => (
                                                                <Link 
                                                                    key={i} 
                                                                    href={`/services/${service.slug}`}
                                                                    className="text-sm font-medium text-foreground/60 hover:text-blue-500 transition-colors"
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
                                                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-blue-500"
                                                >
                                                    {link.title}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                    <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg w-full py-3 h-auto text-sm">
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
                    "absolute left-0 top-20 w-full bg-white border-b shadow-2xl transition-all duration-300 ease-in-out overflow-hidden z-40",
                    isMegaMenuOpen ? "max-h-[600px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
                )}
                onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
                <div className="mx-auto px-4 sm:px-6 lg:px-8 flex min-h-[200px]">
                    {/* Left Sidebar */}
                    <div className="w-1/4 bg-blue-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
                         {/* Minimalist background accent */}
                        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2">
                            <div className="w-[300px] h-[300px] border-[20px] border-white rounded-full"></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-extrabold mb-4">Service</h3>
                            <p className="text-blue-100 text-sm font-medium leading-relaxed">
                                Our Portfolio Of Services Range From Designing Strategy To Delivering Impact.
                            </p>
                        </div>

                        <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 rounded-md py-3 px-6 h-auto text-sm font-bold w-full relative z-10">
                            <Link href="/contact">Hire Now</Link>
                        </Button>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1 p-8 grid grid-cols-2 gap-3 bg-white">
                        {services.map((service, i) => (
                            <Link 
                                key={i} 
                                href={`/services/${service.slug}`}
                                className="group flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <div className={cn("size-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-100", service.color)}>
                                    <service.icon className="size-5" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                                        <ChevronRight className="size-3 text-blue-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{service.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
