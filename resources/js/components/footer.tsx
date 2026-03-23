import { Link } from '@inertiajs/react';
import NeuralIcon from './neural-icon';

const footerLinks = {
    services: [
        { title: 'Software Development', href: '/services/software-development' },
        { title: 'ML & AI', href: '/services/ml-and-ai' },
        { title: 'Blockchain', href: '/services/blockchain' },
        { title: 'DevOps', href: '/services/devops' },
        { title: 'Agile', href: '/services/agile' },
    ],
    company: [
        { title: 'About Us', href: '/about' },
        { title: 'Consulting', href: '/consulting' },
    ],
    contact: [
        { title: 'hello@neuralnet.dev', href: 'mailto:hello@neuralnet.dev' },
        { title: 'London, United Kingdom', href: '#' },
        { title: '+44 20 7946 0958', href: 'tel:+442079460958' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-white border-t text-gray-900">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <NeuralIcon className="size-8 text-blue-500" />
                            <span className="text-xl font-bold tracking-tight text-gray-900">NeuralNet</span>
                        </Link>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                            AI-powered software engineering teams delivering enterprise-grade solutions at startup speed.
                        </p>
                    </div>

                    {/* Links - Services */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Services</h3>
                        <ul className="mt-4 space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.href} className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links - Company */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Company</h3>
                        <ul className="mt-4 space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.href} className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links - Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Contact</h3>
                        <ul className="mt-4 space-y-2">
                            {footerLinks.contact.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.href} className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} NeuralNet. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
