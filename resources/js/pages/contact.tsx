import ButtonCom from '@/components/common/ButtonCom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import MarketingLayout from '@/layouts/marketing-layout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        organisation: '',
        role: '',
        problem: '',
        contactMethod: '',
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.reveal-item', {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.out',
                delay: 0.2,
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <MarketingLayout>
            <Head title="Contact - NeuralNet" />

            <section ref={containerRef} className="relative min-h-[90vh] bg-white pt-24 pb-16 font-sans text-[#000027]">
                {/* Background Architectural Elements */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/4 -right-1/4 size-[800px] rounded-full bg-[#000027]/[0.02] blur-[120px]" />
                    <div className="absolute -bottom-1/4 -left-1/4 size-[600px] rounded-full bg-[#000027]/[0.03] blur-[100px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
                        {/* Left Side: The Narrative */}
                        <div className="space-y-10 lg:col-span-5">
                            <div className="space-y-6">
                                <div className="reveal-item flex items-center gap-3">
                                    <div className="h-px w-8 bg-[#000027]/20"></div>
                                    <span className="text-[10px] font-black tracking-[0.5em] text-[#000027]/40 uppercase">INQUIRY PROTOCOL</span>
                                </div>
                                <h1 className="reveal-item text-2xl leading-[1.1] font-light tracking-tighter uppercase md:text-3xl lg:text-4xl">
                                    Tell us what you're <br />
                                    <span className="font-black text-[#000027]">trying to solve.</span>
                                </h1>
                            </div>

                            <div className="reveal-item space-y-10">
                                {/* Contact Node 01 */}
                                <div className="group space-y-4">
                                    <h3 className="text-[10px] font-black tracking-[0.4em] text-[#000027]/30 uppercase">Direct Communication</h3>
                                    <div className="space-y-1">
                                        <a
                                            href="mailto:info@neuralnet.uk"
                                            className="block text-xl font-bold tracking-tight text-[#000027] transition-colors hover:text-[#000027]/80"
                                        >
                                            info@neuralnet.uk
                                        </a>
                                        <p className="text-[11px] font-light tracking-[0.1em] text-[#000027]/50 uppercase">United Kingdom</p>
                                    </div>
                                </div>

                                {/* Contact Node 02 */}
                                <div className="group space-y-4">
                                    <h3 className="text-[10px] font-black tracking-[0.4em] text-[#000027]/30 uppercase">Physical Presence</h3>
                                    <div className="space-y-1">
                                        <p className="text-lg leading-tight font-bold tracking-wide text-[#000027]">
                                            101 New Cavendish St,
                                            <br />
                                            London W1W 6XH
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: The Architectural Form */}
                        <div className="bg-white lg:col-span-7">
                            <form
                                onSubmit={handleSubmit}
                                className="reveal-item space-y-8 rounded-3xl border border-[#000027]/5 bg-[#000027]/[0.01] p-6 shadow-sm backdrop-blur-sm md:p-10"
                            >
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-[10px] font-black tracking-widest text-[#000027]/40 uppercase">
                                            01. Your Name
                                        </Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            className="h-10 rounded-none border-x-0 border-t-0 border-b border-[#000027]/10 bg-transparent px-0 text-base font-light transition-all placeholder:text-[#000027]/20 focus-visible:border-b-[#000027] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>

                                    {/* Organisation Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="org" className="text-[10px] font-black tracking-widest text-[#000027]/40 uppercase">
                                            02. Organisation
                                        </Label>
                                        <Input
                                            id="org"
                                            placeholder="Company Name"
                                            className="h-10 rounded-none border-x-0 border-t-0 border-b border-[#000027]/10 bg-transparent px-0 text-base font-light transition-all placeholder:text-[#000027]/20 focus-visible:border-b-[#000027] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                                            value={formData.organisation}
                                            onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                                            required
                                        />
                                    </div>

                                    {/* Role Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="role" className="text-[10px] font-black tracking-widest text-[#000027]/40 uppercase">
                                            03. Your Role
                                        </Label>
                                        <Input
                                            id="role"
                                            placeholder="e.g. CTO, Founder"
                                            className="h-10 rounded-none border-x-0 border-t-0 border-b border-[#000027]/10 bg-transparent px-0 text-base font-light transition-all placeholder:text-[#000027]/20 focus-visible:border-b-[#000027] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            required
                                        />
                                    </div>

                                    {/* Contact Method Field */}
                                    <div className="space-y-2">
                                        <Label htmlFor="method" className="text-[10px] font-black tracking-widest text-[#000027]/40 uppercase">
                                            04. Preferred Contact Method
                                        </Label>
                                        <Input
                                            id="method"
                                            placeholder="Email, WhatsApp, or Phone"
                                            className="h-10 rounded-none border-x-0 border-t-0 border-b border-[#000027]/10 bg-transparent px-0 text-base font-light transition-all placeholder:text-[#000027]/20 focus-visible:border-b-[#000027] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                                            value={formData.contactMethod}
                                            onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Problem Description Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="problem" className="text-[10px] font-black tracking-widest text-[#000027]/40 uppercase">
                                        05. What are you trying to solve?
                                    </Label>
                                    <Textarea
                                        id="problem"
                                        placeholder="Describe your challenge or objectives..."
                                        className="min-h-[100px] resize-none rounded-none border-x-0 border-t-0 border-b border-[#000027]/10 bg-transparent px-0 text-base font-light transition-all placeholder:text-[#000027]/20 focus-visible:border-b-[#000027] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                                        value={formData.problem}
                                        onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="pt-4">
                                    <ButtonCom title="Submit Request" type="submit" icon={Send} className="w-full md:w-auto" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </MarketingLayout>
    );
}
