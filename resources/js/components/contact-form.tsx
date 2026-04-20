import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';
import { Upload } from 'lucide-react';
import { useRef } from 'react';

export default function ContactForm() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        countryCode: 'IN',
        interest: '',
        budget: '',
        projectType: '',
        description: '',
        file: null as File | null,
        subscribe: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Gather data into FormData (handled by Inertia if file is present)
        post('/contact', {
            forceFormData: true,
            onSuccess: () => {
                reset();
                alert('Thank you for your message! We will get back to you soon.');
            },
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('file', e.target.files[0]);
        }
    };

    return (
        <div className="overflow-hidden bg-white font-sans shadow-2xl">
            {/* Header */}
            <div className="bg-[#1e48f7] p-4">
                <h3 className="text-base font-bold text-white">Questions? Contact us for Sales Enquiry!</h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-2">
                        <Input
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Full Name *"
                            className="h-12 rounded-lg border-gray-300 bg-gray-50/50 transition-all focus:ring-[#1e48f7]"
                            required
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                        <Input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Email *"
                            className="h-12 rounded-lg border-gray-300 bg-gray-50/50 transition-all focus:ring-[#1e48f7]"
                            required
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Mobile Number */}
                    <div className="flex gap-2">
                        <Select value={data.countryCode} onValueChange={(val) => setData('countryCode', val)}>
                            <SelectTrigger className="h-12 w-24 rounded-lg border-gray-300 bg-gray-50/50">
                                <SelectValue placeholder="IN" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="IN">IN</SelectItem>
                                <SelectItem value="US">US</SelectItem>
                                <SelectItem value="UK">UK</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex-1 space-y-2">
                            <Input
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                placeholder="Mobile Number *"
                                className="h-12 w-full rounded-lg border-gray-300 bg-gray-50/50 transition-all focus:ring-[#1e48f7]"
                                required
                            />
                            {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                        </div>
                    </div>
                    {/* Interest */}
                    <div className="space-y-2">
                        <Select value={data.interest} onValueChange={(val) => setData('interest', val)}>
                            <SelectTrigger className="h-12 rounded-lg border-gray-300 bg-gray-50/50 text-gray-500">
                                <SelectValue placeholder="Interested In? *" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="software">Software Development</SelectItem>
                                <SelectItem value="ai">AI & ML Solutions</SelectItem>
                                <SelectItem value="blockchain">Blockchain</SelectItem>
                                <SelectItem value="automation">Automation</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.interest && <p className="text-xs text-red-500">{errors.interest}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Budget */}
                    <div className="space-y-2">
                        <Select value={data.budget} onValueChange={(val) => setData('budget', val)}>
                            <SelectTrigger className="h-12 rounded-lg border-gray-300 bg-gray-50/50 text-gray-500">
                                <SelectValue placeholder="Project Budget *" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="small">$1k - $5k</SelectItem>
                                <SelectItem value="medium">$5k - $20k</SelectItem>
                                <SelectItem value="large">$20k+</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.budget && <p className="text-xs text-red-500">{errors.budget}</p>}
                    </div>
                    {/* Select Project */}
                    <div className="space-y-2">
                        <Select value={data.projectType} onValueChange={(val) => setData('projectType', val)}>
                            <SelectTrigger className="h-12 rounded-lg border-gray-300 bg-gray-50/50 text-gray-500">
                                <SelectValue placeholder="Select Project *" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="new">New Project</SelectItem>
                                <SelectItem value="existing">Existing Project</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.projectType && <p className="text-xs text-red-500">{errors.projectType}</p>}
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <Textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        placeholder="Tell about your project here... *"
                        className="min-h-[140px] rounded-2xl border-gray-300 bg-gray-50/50 p-4 transition-all focus:ring-[#1e48f7]"
                        required
                    />
                    {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
                </div>

                {/* File Upload */}
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/30 p-6 transition-all hover:border-[#1e48f7]/40"
                >
                    <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
                    <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-colors group-hover:text-[#1e48f7]">
                        <Upload className="size-5" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                        {data.file ? (
                            <span className="text-[#1e48f7]">{data.file.name}</span>
                        ) : (
                            <>
                                <span className="text-[#1e48f7]">Click to upload</span> or drag and drop
                            </>
                        )}
                    </p>
                    <p className="mt-1 text-[10px] tracking-wider text-gray-400 uppercase">Any File (e.g., pdf, doc, images, zip etc.)</p>
                    <div className="mt-4">
                        <Button
                            type="button"
                            variant="outline"
                            className="h-9 rounded-lg border-transparent bg-[#1e48f7] px-6 text-xs text-white hover:bg-[#1e48f7]/90"
                        >
                            {data.file ? 'Change' : 'Upload'}
                        </Button>
                    </div>
                </div>

                {/* Subscription Checkbox */}
                <div className="flex items-center gap-3">
                    <Checkbox
                        id="subscribe"
                        checked={data.subscribe}
                        onCheckedChange={(checked: boolean | 'indeterminate') => setData('subscribe', checked === true)}
                        className="rounded-md border-gray-300 data-[state=checked]:border-[#1e48f7] data-[state=checked]:bg-[#1e48f7]"
                    />
                    <label htmlFor="subscribe" className="cursor-pointer text-xs leading-none text-gray-500">
                        Keep me informed about NeuralNet&apos;s activities and services by subscribing to our newsletter.
                    </label>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Button type="button" variant="outline" className="h-12 rounded-lg border-[#000027] font-bold text-[#000027] hover:bg-blue-50">
                        Schedule a consulting
                    </Button>
                    <Button
                        type="submit"
                        disabled={processing}
                        className="h-12 rounded-lg bg-[#000027] font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
                    >
                        {processing ? 'Submitting...' : 'Submit'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
