const brands = [
    { name: 'Alembic', src: '/assets/brands/alembic_logo.svg' },
    { name: 'Almarai', src: '/assets/brands/almarai_corporate_logo.png' },
    { name: 'Cummins', src: '/assets/brands/cummins.webp' },
    { name: 'Honda', src: '/assets/brands/honda_logo.png' },
    { name: 'ACC', src: '/assets/brands/logo_acc.svg' },
    { name: 'Adani', src: '/assets/brands/logo_adani.svg' },
    { name: 'Ambuja', src: '/assets/brands/logo_ambuja.svg' },
    { name: 'American Express', src: '/assets/brands/logo_american_express.svg' },
    { name: 'Astral', src: '/assets/brands/logo_astral.png' },
    { name: 'BNPL India', src: '/assets/brands/logo_bnpl_india.svg' },
    { name: 'Chevron Oronite', src: '/assets/brands/logo_chevron_oronite.svg' },
    { name: 'CLP India', src: '/assets/brands/logo_clp_india.svg' },
    { name: 'Dr. Reddy', src: '/assets/brands/logo_drreddy.png' },
    { name: 'GFL', src: '/assets/brands/logo_gfl.svg' },
    { name: 'JSW Energy', src: '/assets/brands/logo_jswenergy.svg' },
    { name: 'LafargeHolcim', src: '/assets/brands/logo_lafargeholcim.svg' },
    { name: 'Larsen & Toubro', src: '/assets/brands/logo_larsen_toubro.svg' },
    { name: 'Loreal', src: '/assets/brands/logo_loreal.png' },
    { name: 'MG Motors', src: '/assets/brands/logo_mg_motors.svg' },
    { name: 'TDSG', src: '/assets/brands/logo_tdsg.png' },
    { name: 'Titan', src: '/assets/brands/logo_titan.webp' },
    { name: 'Vedanta', src: '/assets/brands/logo_vedanta.svg' },
    { name: 'Orient', src: '/assets/brands/orient_logo.webp' },
    { name: 'Toyota', src: '/assets/brands/toyota_logo.webp' },
];

export default function BrandTrustSection() {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 font-sans">Trusted By The World&apos;s Leading Brands</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We are glad to be a digital technology and innovation partner with world&apos;s leading brands. Building greater futures through innovation and collective knowledge.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {brands.map((brand, i) => (
                        <div key={i} className="aspect-[16/9] bg-white border border-gray-100 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all group overflow-hidden">
                            <img 
                                src={brand.src} 
                                alt={brand.name} 
                                className="max-w-full max-h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
