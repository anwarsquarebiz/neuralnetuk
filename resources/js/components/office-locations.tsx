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
        <section className="bg-gray-50/50 py-12 font-sans md:py-24">
            <div className="mx-auto mb-10 max-w-7xl px-6 text-center md:mb-16 lg:px-8">
                <h2 className="mb-4 text-3xl font-extrabold text-[#0a1a3b]">Our Offices</h2>
                <p className="mx-auto max-w-2xl text-[#4a5568]">We have a global presence across three continents.</p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {offices.map((office, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-all hover:border-[#000027]/20"
                        >
                            <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-gray-50 text-4xl transition-colors group-hover:bg-blue-50">
                                {office.flag}
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-[#0a1a3b]">{office.country}</h3>
                            <div className="flex items-start justify-center gap-2 text-[#4a5568]">
                                <MapPin className="mt-1 size-4 flex-shrink-0 text-[#000027]" />
                                <p className="max-w-[200px] text-sm leading-relaxed">{office.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
