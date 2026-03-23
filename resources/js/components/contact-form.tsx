import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from '@/components/ui/select';
import { Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactForm() {
    return (
        <div className="bg-white shadow-2xl overflow-hidden font-sans">
            {/* Header */}
            <div className="bg-[#1e48f7] p-4">
                <h3 className="text-white font-bold text-base">
                    Questions? Contact us for Sales Enquiry!
                </h3>
            </div>

            {/* Form */}
            <form className="p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <Input 
                            placeholder="Full Name *" 
                            className="bg-gray-50/50 border-gray-300 rounded-lg h-12 focus:ring-[#1e48f7] transition-all"
                        />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                        <Input 
                            type="email"
                            placeholder="Email *" 
                            className="bg-gray-50/50 border-gray-300 rounded-lg h-12 focus:ring-[#1e48f7] transition-all"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mobile Number */}
                    <div className="flex gap-2">
                        <Select defaultValue="IN">
                            <SelectTrigger className="w-24 bg-gray-50/50 border-gray-300 rounded-lg h-12">
                                <SelectValue placeholder="IN" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="IN">IN</SelectItem>
                                <SelectItem value="US">US</SelectItem>
                                <SelectItem value="UK">UK</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input 
                            placeholder="Mobile Number *" 
                            className="flex-1 bg-gray-50/50 border-gray-300 rounded-lg h-12 focus:ring-[#1e48f7] transition-all"
                        />
                    </div>
                    {/* Interest */}
                    <div className="space-y-2">
                        <Select>
                            <SelectTrigger className="bg-gray-50/50 border-gray-300 rounded-lg h-12 text-gray-500">
                                <SelectValue placeholder="Interested In? *" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="software">Software Development</SelectItem>
                                <SelectItem value="ai">AI & ML Solutions</SelectItem>
                                <SelectItem value="blockchain">Blockchain</SelectItem>
                                <SelectItem value="automation">Automation</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Budget */}
                    <div className="space-y-2">
                        <Select>
                            <SelectTrigger className="bg-gray-50/50 border-gray-300 rounded-lg h-12 text-gray-500">
                                <SelectValue placeholder="Project Budget *" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="small">$1k - $5k</SelectItem>
                                <SelectItem value="medium">$5k - $20k</SelectItem>
                                <SelectItem value="large">$20k+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* Select Project */}
                    <div className="space-y-2">
                        <Select>
                            <SelectTrigger className="bg-gray-50/50 border-gray-300 rounded-lg h-12 text-gray-500">
                                <SelectValue placeholder="Select Project *" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="new">New Project</SelectItem>
                                <SelectItem value="existing">Existing Project</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <Textarea 
                        placeholder="Tell about your project here... *" 
                        className="bg-gray-50/50 border-gray-300 rounded-2xl min-h-[140px] p-4 focus:ring-[#1e48f7] transition-all"
                    />
                </div>

                {/* File Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center bg-gray-50/30 group hover:border-[#1e48f7]/40 transition-all cursor-pointer">
                    <div className="size-10 bg-white shadow-sm rounded-full flex items-center justify-center mb-2 text-gray-400 group-hover:text-[#1e48f7] transition-colors">
                        <Upload className="size-5" />
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                        <span className="text-[#1e48f7]">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                        Any File (e.g., pdf, doc, images, zip etc.)
                    </p>
                    <div className="mt-4">
                        <Button variant="outline" className="bg-[#1e48f7] hover:bg-[#1e48f7]/90 text-white border-transparent text-xs px-6 rounded-lg h-9">
                            Upload
                        </Button>
                    </div>
                </div>

                {/* Subscription Checkbox */}
                <div className="flex items-start gap-3 items-center">
                    <Checkbox id="subscribe" className="rounded-md border-gray-300 data-[state=checked]:bg-[#1e48f7] data-[state=checked]:border-[#1e48f7]" />
                    <label htmlFor="subscribe" className="text-xs text-gray-500 leading-none cursor-pointer">
                        Keep me informed about NeuralNet&apos;s activities and services by subscribing to our newsletter.
                    </label>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button 
                        type="button" 
                        variant="outline"
                        className="h-12 rounded-lg text-blue-600 border-blue-600 hover:bg-blue-50 font-bold"
                    >
                        Schedule a consulting
                    </Button>
                    <Button 
                        type="submit" 
                        className="h-12 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-200"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}
