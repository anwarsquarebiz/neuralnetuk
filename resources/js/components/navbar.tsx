import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, ChevronRight, Headset, Menu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ButtonCom from './common/ButtonCom';

const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Solutions', href: '/solutions', hasMegaMenu: true },
    // { title: 'Consulting', href: '/consulting' },
    { title: 'About us', href: '/about' },
    { title: 'Contact', href: '/contact' },
];

const solutions = [
    {
        id: '01',
        title: 'Software Development',
        desc: 'Bespoke enterprise systems built for scale and performance.',
        slug: 'software-development',
        color: 'bg-blue-500/10 text-blue-400',
    },
    {
        id: '02',
        title: 'Cybersecurity',
        desc: 'Advanced threat protection and infrastructure hardening.',
        slug: 'cybersecurity',
        color: 'bg-red-500/10 text-red-400',
    },
    {
        id: '03',
        title: 'AI Avatars',
        desc: 'Realistic digital humans for next-gen customer interaction.',
        slug: 'ai-avatars',
        color: 'bg-indigo-500/10 text-indigo-400',
    },
    {
        id: '04',
        title: 'AI Voice Agents',
        desc: 'Natural language processing for seamless voice automation.',
        slug: 'ai-voice-agents',
        color: 'bg-emerald-500/10 text-emerald-400',
    },
    {
        id: '05',
        title: 'AI Guardian ★',
        desc: 'Proactive oversight and ethical alignment for AI ecosystems.',
        slug: 'ai-guardian',
        color: 'bg-amber-500/10 text-amber-400',
    },
];

interface NavbarProps {
    transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
    const { url } = usePage();
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
                'fixed top-0 left-0 z-50 w-full border-b border-white/40 bg-white/10 backdrop-blur-md transition-all duration-300',
                isMegaMenuOpen && 'border-gray-200 bg-white',
            )}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
            <div className="mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="group relative flex items-center gap-2 outline-none">
                    {/* Unique Aura Elements */}
                    <div className="absolute -top-6 -left-6 -z-10 size-20 animate-pulse bg-[#000027]/10 blur-3xl transition-all duration-700 group-hover:bg-[#000027]/20" />
                    <div className="absolute -top-2 -left-2 -z-10 size-14 animate-bounce bg-[#000027]/5 blur-2xl [animation-duration:8s]" />

                    <img
                        src="/assets/neuralnet-logo-dark.svg"
                        alt="NeuralNet"
                        className="size-8 transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="text-xl font-bold tracking-tight text-[#000027] transition-colors duration-300 group-hover:text-[#000027]/80">
                        NeuralNet
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <div
                            key={link.title}
                            className="group relative flex h-20 items-center py-0"
                            onMouseEnter={() => (link.hasMegaMenu ? setIsMegaMenuOpen(true) : setIsMegaMenuOpen(false))}
                            onMouseLeave={() => (link.hasMegaMenu ? setIsMegaMenuOpen(false) : null)}
                        >
                            {link.hasMegaMenu ? (
                                <button
                                    className={cn(
                                        'flex cursor-pointer items-center gap-1 border-none bg-transparent text-sm font-medium transition-colors outline-none hover:text-[#000027]',
                                        isMegaMenuOpen || url.startsWith('/solutions') ? 'text-[#000027]' : 'text-[#000027]/60',
                                    )}
                                >
                                    {link.title}
                                    <ChevronDown className={cn('size-3.5 transition-transform duration-300', isMegaMenuOpen && 'rotate-180')} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={cn(
                                        'flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#000027]',
                                        url === link.href ? 'text-[#000027]' : 'text-[#000027]/60',
                                    )}
                                >
                                    {link.title}
                                </Link>
                            )}

                            {/* Full-Width Architectural Submenu */}
                            {link.hasMegaMenu && (
                                <div
                                    className={cn(
                                        'pointer-events-none absolute top-20 left-0 z-40 w-[calc(100vw-var(--scrollbar-width,0px))] border-b border-gray-100 bg-white/95 py-8 opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]',
                                        isMegaMenuOpen && 'pointer-events-auto opacity-100',
                                        // Dynamic positioning to handle full viewport width
                                        'fixed top-20 right-0 left-0',
                                    )}
                                >
                                    <div className="mx-auto max-w-7xl px-8">
                                        <div className="mb-6 flex items-end justify-between border-b border-gray-100 pb-4">
                                            <div className="space-y-0.5">
                                                <span className="text-[10px] font-black tracking-[0.3em] text-[#000027]/40 uppercase">
                                                    Active Protocols
                                                </span>
                                                <h4 className="text-lg font-bold text-[#000027]">Solutions Architecture</h4>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-5 gap-px overflow-hidden rounded-xl border border-gray-100 bg-gray-100">
                                            {solutions.map((item, i) => (
                                                <Link
                                                    key={i}
                                                    href={`/solutions/${item.slug}`}
                                                    className={cn(
                                                        'group flex flex-col p-6 transition-all duration-500 hover:bg-gray-50',
                                                        url === `/solutions/${item.slug}` ? 'bg-gray-50 ring-1 ring-[#000027]/10' : 'bg-white',
                                                    )}
                                                >
                                                    <span className="mb-4 text-[10px] font-black tracking-widest text-[#000027]/20 transition-colors group-hover:text-[#000027]">
                                                        {item.id}
                                                    </span>
                                                    <div className="space-y-2">
                                                        <h5 className="text-sm font-bold text-[#000027]">{item.title}</h5>
                                                        <p className="text-[11px] leading-relaxed font-light text-gray-400 transition-colors group-hover:text-gray-600">
                                                            {item.desc.split('.')[0]}.
                                                        </p>
                                                    </div>
                                                    <div className="mt-4 flex -translate-x-2 items-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                                                        <span className="text-[9px] font-bold tracking-widest text-[#000027] uppercase">
                                                            View Details
                                                        </span>
                                                        <ChevronRight className="size-3 text-[#000027]" />
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <ButtonCom title="Talk To An Expert" icon={Headset} href="/contact" />
                </div>

                {/* Mobile Nav Toggle */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-[#000027]">
                                <Menu className="size-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background w-[300px] p-0">
                            <div className="flex h-full flex-col justify-between px-6 py-10">
                                <div className="flex flex-col">
                                    <SheetTitle className="mb-8 text-left">
                                        <Link href="/" className="flex items-center gap-2">
                                            <img src="/assets/neuralnet-logo-dark.svg" alt="NeuralNet" className="size-8" />
                                            <span className="text-foreground text-xl font-bold tracking-tight">NeuralNet</span>
                                        </Link>
                                    </SheetTitle>
                                    <div className="flex flex-col gap-6 text-left">
                                        {navLinks.map((link) => (
                                            <div key={link.title} className="flex flex-col gap-4 text-left">
                                                {link.hasMegaMenu ? (
                                                    <>
                                                        <button
                                                            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                                                            className={cn(
                                                                'flex w-full items-center justify-between border-none bg-transparent text-left text-lg font-medium transition-colors hover:text-[#000027]',
                                                                url.startsWith('/solutions') ? 'text-[#000027]' : 'text-foreground/80',
                                                            )}
                                                        >
                                                            {link.title}
                                                            <ChevronDown
                                                                className={cn('size-4 transition-transform', isMegaMenuOpen && 'rotate-180')}
                                                            />
                                                        </button>
                                                        {isMegaMenuOpen && (
                                                            <div className="ml-1 flex flex-col gap-3 border-l-2 border-[#000027] pl-4 text-left">
                                                                {solutions.map((item, i) => (
                                                                    <Link
                                                                        key={i}
                                                                        href={`/solutions/${item.slug}`}
                                                                        className={cn(
                                                                            'text-left text-sm font-medium transition-colors hover:text-[#000027]',
                                                                            url === `/solutions/${item.slug}`
                                                                                ? 'text-[#000027]'
                                                                                : 'text-foreground/60',
                                                                        )}
                                                                    >
                                                                        {item.title}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={link.href}
                                                        className={cn(
                                                            'text-left text-lg font-medium transition-colors hover:text-[#000027]',
                                                            url === link.href ? 'text-[#000027]' : 'text-foreground/80',
                                                        )}
                                                    >
                                                        {link.title}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                        {/* <Button
                                        asChild
                                        className="mt-4 h-auto w-full rounded-lg bg-[#000027] py-3 text-sm text-white shadow-lg hover:bg-[#000027]/90"
                                    >
                                        <Link href="/contact">Talk To An Expert</Link>
                                    </Button> */}
                                    </div>
                                </div>
                                <ButtonCom title="Talk To An Expert" icon={Headset} href="/contact" />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
