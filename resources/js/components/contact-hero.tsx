import { cn } from '@/lib/utils';

const brands = [
  { name: 'L\'Oréal', logo: '/assets/brands/logo_loreal.png' },
  { name: 'Astral Pipes', logo: '/assets/brands/logo_astral.png' },
  { name: 'Honda', logo: '/assets/brands/honda_logo.png' },
  { name: 'CLP India', logo: '/assets/brands/logo_clp_india.svg' },
  { name: 'Adani', logo: '/assets/brands/logo_adani.svg' },
  { name: 'Toyota', logo: '/assets/brands/toyota_logo.webp' },
  { name: 'American Express', logo: '/assets/brands/logo_american_express.svg' },
  { name: 'Alembic', logo: '/assets/brands/alembic_logo.svg' },
  { name: 'Lafarge', logo: '/assets/brands/logo_lafargeholcim.svg' },
];

export default function ContactHero() {
  // Double the brands for seamless loop
  const displayBrands = [...brands, ...brands];

  return (
    <section className="bg-[#f0f4ff] pt-32 pb-0 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1a3b] mb-6 leading-tight max-w-4xl mx-auto">
          Let&apos;s Navigate Digital Transformation Together!!!
        </h1>
        <p className="text-[#4a5568] text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Everything is Possible with the Right Strategy and the Right Team. We&apos;re here to help you solve your business challenges and drive meaningful results.
        </p>

        {/* Scrolling Logo Marquee */}
        <div className="relative w-full overflow-hidden pb-10 ">
          <div className="flex animate-marquee gap-8 md:gap-12 w-max">
            {displayBrands.map((brand, i) => (
              <div 
                key={i} 
                className={cn(
                  "h-16 md:h-20 w-40 md:w-56 flex-shrink-0 rounded-2xl flex items-center justify-center border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group px-6",
                )}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-[60%] max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {/* Faded edges for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f0f4ff] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f0f4ff] to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
