import { MapPin } from 'lucide-react';

const offices = [
    { country: 'India (HQ)', flag: '🇮🇳', address: 'B-290, Sector 10, Noida, UP, India - 201301' },
    { country: 'USA', flag: '🇺🇸', address: '16192 Coastal Highway, Lewes, Delaware 19958, USA' },
    { country: 'Canada', flag: '🇨🇦', address: '77 City Centre Dr Suite 501, Mississauga, ON L5B 1M5, Canada' },
    { country: 'Australia', flag: '🇦🇺', address: 'Level 2, 192 Pitt Street, Sydney, NSW 2000, Australia' },
    { country: 'UK', flag: '🇬🇧', address: '27 Old Gloucester Street, London WC1N 3AX, UK' },
    { country: 'UAE', flag: '🇦🇪', address: 'DSO-IFZA-25766, Dubai Silicon Oasis, Dubai, UAE' },
];

export default function OfficeLocations() {
    return (
        <section className="py-12 md:py-24 bg-gray-50/50 font-sans">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-10 md:mb-16">
                <h2 className="text-3xl font-extrabold text-[#0a1a3b] mb-4">Our Offices</h2>
                <p className="text-[#4a5568] max-w-2xl mx-auto">
                    We have a global presence across three continents.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offices.map((office, i) => (
                        <div key={i} className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 group hover:border-blue-600/20 transition-all text-center flex flex-col items-center">
                            <div className="size-20 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bg-blue-50 transition-colors">
                                {office.flag}
                            </div>
                            <h3 className="text-xl font-bold text-[#0a1a3b] mb-4">
                                {office.country}
                            </h3>
                            <div className="flex items-start justify-center gap-2 text-[#4a5568]">
                                <MapPin className="size-4 mt-1 flex-shrink-0 text-blue-600" />
                                <p className="text-sm leading-relaxed max-w-[200px]">
                                    {office.address}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
