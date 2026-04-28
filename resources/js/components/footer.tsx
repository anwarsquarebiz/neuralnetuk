import { Link, usePage } from '@inertiajs/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

// Custom Brand Icons as Lucide brand icons were removed in v1+
const FacebookIcon = (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TwitterIcon = (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const LinkedinIcon = (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const InstagramIcon = (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const footerLinks = {
    pages: [
        { title: 'Home', href: '/' },
        // { title: 'Solutions', href: '/solutions' },
        { title: 'About us', href: '/about' },
        { title: 'Contact us', href: '/contact' },
    ],
    contact: [
        { title: 'London, United Kingdom', href: '#', icon: MapPin },
        { title: '+44 20 7946 0958', href: 'tel:+442079460958', icon: Phone },
        { title: 'info@neuralnet.uk', href: 'mailto:info@neuralnet.uk', icon: Mail },
    ],
};

const footerSolutions = [
    { title: 'Software Development', href: '/solutions/software-development' },
    { title: 'Cybersecurity', href: '/solutions/cybersecurity' },
    { title: 'AI Avatars', href: '/solutions/ai-avatars' },
    { title: 'AI Voice Agents', href: '/solutions/ai-voice-agents' },
    { title: 'AI Guardian', href: '/solutions/ai-guardian' },
];

export default function Footer() {
    const { url } = usePage();
    const footerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate content reveal
            gsap.from(contentRef.current?.children || [], {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 90%',
                },
            });

            // Animate background blobs
            gsap.to('.footer-blob', {
                x: 'random(-50, 50)',
                y: 'random(-50, 50)',
                duration: 'random(10, 20)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: {
                    each: 2,
                    from: 'random',
                },
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="relative overflow-hidden">
            {/* Moving Background Blobs (Brand Theme) */}
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                <div className="absolute -top-6 -left-6 -z-10 size-20 animate-pulse bg-[#000027]/10 blur-3xl transition-all duration-700" />
                <div className="absolute -top-2 -left-2 -z-10 size-14 animate-bounce bg-[#000027]/15 blur-2xl [animation-duration:8s]" />
                <div className="footer-blob absolute -top-20 -left-20 size-[500px] rounded-full bg-[#000027]/10 blur-[100px]" />
                <div className="footer-blob absolute top-0 -right-20 size-[400px] rounded-full bg-[#000027]/10 blur-[80px]" />
                <div className="footer-blob absolute bottom-0 left-1/3 size-[600px] rounded-full bg-[#000027]/5 blur-[120px]" />

                {/* <Ballpit
                    count={40}
                    gravity={0.1}
                    friction={0.997}
                    wallBounce={0.95}
                    followCursor={false}
                    colors={['#000027', '#000027', '#000027']}
                /> */}
            </div>

            <div className="relative z-20 mx-auto border-t border-white/40 bg-white/30 px-8 pt-24 pb-12 backdrop-blur-3xl lg:px-12">
                <div ref={contentRef} className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
                    {/* Left: Brand Section */}
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <Link href="/" className="group flex w-fit items-center gap-2 outline-none">
                                <img
                                    src="/assets/neuralnet-logo-dark.svg"
                                    alt="NeuralNet"
                                    className="size-8 transition-transform duration-500 group-hover:scale-110"
                                />
                                <span className="text-xl font-bold tracking-tight text-[#000027] transition-colors duration-300 group-hover:text-[#000027]/80">
                                    NeuralNet
                                </span>
                            </Link>
                            <h2 className="text-5xl leading-tight font-black tracking-tighter text-[#000027] uppercase lg:text-7xl">
                                Neural
                                <br />
                                Net
                            </h2>
                        </div>
                        <p className="max-w-xs text-base leading-relaxed font-light text-[#000027]/60">
                            Engineering at the intersection of human strategy and high-performance digital systems.
                        </p>
                    </div>

                    {/* Right: The Studio Index */}
                    <div className="grid shrink-0 grid-cols-1 gap-12 sm:grid-cols-3 lg:gap-16">
                        {/* Navigation Index */}
                        <div>
                            <h3 className="mb-8 text-[10px] font-bold tracking-[0.4em] text-[#000027]/40 uppercase">Navigation</h3>
                            <ul className="space-y-4">
                                {footerLinks.pages.map((link) => (
                                    <li key={link.title}>
                                        <Link
                                            href={link.href}
                                            className={`text-base font-medium transition-all duration-300 hover:text-[#000027] ${
                                                url === link.href ? 'text-[#000027]' : 'text-[#000027]/60'
                                            }`}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions Index */}
                        <div>
                            <h3 className="mb-8 text-[10px] font-bold tracking-[0.4em] text-[#000027]/40 uppercase">Solutions</h3>
                            <ul className="space-y-4">
                                {footerSolutions.map((link) => (
                                    <li key={link.title}>
                                        <Link
                                            href={link.href}
                                            className={`text-base font-medium transition-all duration-300 hover:text-[#000027] ${
                                                url === link.href ? 'text-[#000027]' : 'text-[#000027]/60'
                                            }`}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Social Index */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="mb-8 text-[10px] font-bold tracking-[0.4em] text-[#000027]/40 uppercase">Global Reach</h3>
                                <ul className="space-y-6">
                                    {footerLinks.contact.map((item) => (
                                        <li key={item.title}>
                                            <Link href={item.href} className="group block space-y-1">
                                                <div className="flex items-center gap-2 text-[9px] font-black tracking-widest text-[#000027]/40 uppercase transition-colors group-hover:text-[#000027]">
                                                    <item.icon className="size-2.5" />
                                                    {item.title.includes('@') ? 'E-Mail' : item.title.includes('+') ? 'Direct' : 'Office'}
                                                </div>
                                                <div className="text-sm font-light text-[#000027]/60 transition-colors group-hover:text-[#000027]">
                                                    {item.title}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social: LinkedIn Only */}
                            <div>
                                <h3 className="mb-6 text-[10px] font-bold tracking-[0.4em] text-[#000027]/40 uppercase">Network</h3>
                                <Link
                                    href="#"
                                    className="group flex items-center gap-3 text-base font-light text-[#000027]/60 transition-all duration-300 hover:text-[#000027]"
                                >
                                    <LinkedinIcon className="size-4 transition-transform duration-500 group-hover:scale-110" />
                                    <span>LinkedIn</span>
                                    <span className="h-[1px] w-8 bg-[#000027]/10 transition-all duration-500 group-hover:w-12 group-hover:bg-[#000027]" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Architectural Bar */}
                <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[#000027]/5 pt-8 text-[9px] font-bold tracking-[0.3em] text-[#000027]/40 uppercase sm:flex-row">
                    <p>© {new Date().getFullYear()} NeuralNet — Precision in Practice.</p>
                    <p className="hidden sm:block">London, United Kingdom</p>
                </div>
            </div>
        </footer>
    );
}
