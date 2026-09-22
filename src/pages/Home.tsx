import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, BedDouble, Car, MessageCircle, Compass, ArrowRight, Clock, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import BedroomCard from '../components/BedroomCard';
import LocationMap from '../components/LocationMap';
import WhatsAppButton from '../components/WhatsAppButton';
import SEO from '../components/SEO';
import { BEDROOM_CATEGORIES } from '../data/bedrooms';
import { EXPERIENCES } from '../data/experiences';
import { GALLERY_ITEMS } from '../data/gallery';
import cotaFronts1 from '../assets/images/cota-fronts1.webp';

export const Home: React.FC = () => {
  const galleryPreview = GALLERY_ITEMS.slice(0, 6);
  const [expandedExpId, setExpandedExpId] = useState<string | null>(null);

  const toggleExpDetails = (id: string) => {
    setExpandedExpId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#FAF7F2] overflow-x-hidden">
      <SEO canonicalPath="/" />
      
      {/* 1. Cinematic Hero */}
      <HeroSlider />

      {/* 2. Property Introduction Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15291E]/5 text-[#15291E] text-xs font-semibold font-medium border border-[#15291E]/10">
              <Compass className="w-3.5 h-3.5 text-[#C89D66]" />
              <span>Welcome to Anto's Comfort Residence </span>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[#3534FB] block sm:text-4xl lg:text-5xl leading-tight">
              Comfort, Nature & Peace in Kodaikanal.
            </h2>

            <p className="text-base text-[#000000] font-semibold font-light leading-relaxed">
              Located in a beautiful and peaceful part of Kodaikanal, Anto's Comfort Residence offers a comfortable stay with refreshing views of the surrounding landscape. With a calm atmosphere, a safe and secure setting, and warm hospitality, we aim to make every stay simple, relaxing, and genuinely memorable.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#EAE2D5]">
              <div>
                <span className="font-serif text-3xl font-bold text-[#3534FB] block">Peaceful Location</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-[#3534FB] block">Nature-Facing Stay</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#15291E] hover:text-[#C89D66] transition-colors group"
              >
                <span>Read Our Story & Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D5] img-zoom-container">
              <img
                src={cotaFronts1}
                alt="Luxury Cottage interior bedroom"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Overlay Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#15291E] text-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block border border-white/10">
              <div className="flex items-center gap-1 text-[#C89D66] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="w-4 h-4 fill-[#C89D66]" />
                ))}
              </div>
              <p className="text-xs font-serif italic text-white/90">
                "Pure peace. Waking up to pine trees through floor-to-ceiling glass was an unforgettable experience."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Our Accommodation Section */}
      <section id="accommodations" className="py-20 bg-[#F4EFE6] border-y border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#C89D66] font-medium">
              OUR ACCOMMODATION
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#3534FB] block sm:text-4xl lg:text-5xl leading-tight">
              Choose Your Bedroom
            </h2>
            <p className="text-sm text-[#000000] font-semibold font-light leading-relaxed">
              Choose the bedroom type that best suits your stay and enquire with us directly on WhatsApp.
            </p>
          </div>

          {/* 2-Column Bedroom Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {BEDROOM_CATEGORIES.map((bedroom, index) => (
              <BedroomCard key={bedroom.id} bedroom={bedroom} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. The Anto's Comfort Residence Experience */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#C89D66] font-medium">
            THE ANTO'S COMFORT RESIDENCE EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#3534FB] block sm:text-4xl lg:text-5xl leading-tight">
            Comfortable Stay, Peaceful Moments.
          </h2>
          <p className="text-sm sm:text-base text-[#000000] font-semibold font-light leading-relaxed">
            At Anto's Comfort Residence, we focus on giving you a clean, comfortable and peaceful stay in Kodaikanal. From well-maintained rooms and clean bathrooms to a safe environment and convenient facilities, we make your stay simple and comfortable.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          
          <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 bg-[#173F2B] rounded-2xl border border-[#23533A] shadow-md hover:shadow-2xl space-y-4 transform hover:-translate-y-1.5 transition-all duration-300 ease-out group">
            <div className="p-3 bg-white/10 text-[#C89D66] rounded-xl w-fit border border-white/10 group-hover:bg-[#C89D66]/20 transition-colors duration-300">
              <ShieldCheck className="w-6 h-6 text-[#C89D66]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white tracking-wide">100% Safe & Secure Stay</h3>
            <p className="text-xs text-[#E8F0EA] font-sans leading-relaxed font-light opacity-90">
              A comfortable and secure environment for families, couples and groups.
            </p>
          </div>

          <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 bg-[#173F2B] rounded-2xl border border-[#23533A] shadow-md hover:shadow-2xl space-y-4 transform hover:-translate-y-1.5 transition-all duration-300 ease-out group">
            <div className="p-3 bg-white/10 text-[#C89D66] rounded-xl w-fit border border-white/10 group-hover:bg-[#C89D66]/20 transition-colors duration-300">
              <Sparkles className="w-6 h-6 text-[#C89D66]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white tracking-wide">Clean & Well-Maintained</h3>
            <p className="text-xs text-[#E8F0EA] font-sans leading-relaxed font-light opacity-90">
              Clean bedrooms, bathrooms and common areas maintained for a comfortable stay.
            </p>
          </div>

          <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 bg-[#173F2B] rounded-2xl border border-[#23533A] shadow-md hover:shadow-2xl space-y-4 transform hover:-translate-y-1.5 transition-all duration-300 ease-out group">
            <div className="p-3 bg-white/10 text-[#C89D66] rounded-xl w-fit border border-white/10 group-hover:bg-[#C89D66]/20 transition-colors duration-300">
              <BedDouble className="w-6 h-6 text-[#C89D66]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white tracking-wide">Comfortable Bedrooms</h3>
            <p className="text-xs text-[#E8F0EA] font-sans leading-relaxed font-light opacity-90">
              Neat and comfortable bedrooms with the basic facilities needed for a relaxing stay.
            </p>
          </div>

          <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 bg-[#173F2B] rounded-2xl border border-[#23533A] shadow-md hover:shadow-2xl space-y-4 transform hover:-translate-y-1.5 transition-all duration-300 ease-out group">
            <div className="p-3 bg-white/10 text-[#C89D66] rounded-xl w-fit border border-white/10 group-hover:bg-[#C89D66]/20 transition-colors duration-300">
              <Car className="w-6 h-6 text-[#C89D66]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white tracking-wide">Parking Available</h3>
            <p className="text-xs text-[#E8F0EA] font-sans leading-relaxed font-light opacity-90">
              Convenient parking space available for guests travelling by car.
            </p>
          </div>

          <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 bg-[#173F2B] rounded-2xl border border-[#23533A] shadow-md hover:shadow-2xl space-y-4 transform hover:-translate-y-1.5 transition-all duration-300 ease-out group">
            <div className="p-3 bg-white/10 text-[#C89D66] rounded-xl w-fit border border-white/10 group-hover:bg-[#C89D66]/20 transition-colors duration-300">
              <MessageCircle className="w-6 h-6 text-[#C89D66]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white tracking-wide">Easy WhatsApp Enquiry</h3>
            <p className="text-xs text-[#E8F0EA] font-sans leading-relaxed font-light opacity-90">
              Contact us easily on WhatsApp for room availability, booking and stay-related enquiries.
            </p>
          </div>

        </div>
      </section>

      {/* 6. Curated Stay Experiences */}
      <section id="experiences" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#C89D66] font-medium">
              CURATED ACTIVITIES
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#3534FB] block sm:text-4xl lg:text-5xl leading-tight">
              Experiences at Anto's Comfort Residence
            </h2>
            <p className="text-sm text-[#000000] font-semibold font-light">
              Enjoy peaceful fireside evenings, scenic mountain drives, and authentic local meals during your stay.
            </p>
          </div>

          <div className="px-4 py-2 bg-[#15291E] text-[#FAF7F2] rounded-full text-xs font-mono font-medium shadow-xs self-start md:self-auto flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C89D66]" />
            <span>Stay Activities</span>
          </div>
        </div>

        {/* 5 Experience Cards */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-3">
  {EXPERIENCES.slice(0, 5).map((exp) => {
    const isExpanded = expandedExpId === exp.id;
    return (
      <div
        key={exp.id}
        className="group bg-[#18352A] rounded-2xl overflow-hidden border border-[#D6A84F]/40 shadow-[0_0_18px_rgba(214,168,79,0.22)] hover:shadow-[0_0_24px_rgba(214,168,79,0.38)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          {/* Image */}
          <div className="aspect-[16/10] overflow-hidden relative">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute top-3 left-3 bg-[#18352A]/90 backdrop-blur-md text-[#D6A84F] border border-[#D6A84F]/40 px-3 py-1 rounded-full text-[11px] font-mono">
              {exp.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-3">
            <h3 className="font-serif text-2xl font-semibold text-white">
              {exp.title}
            </h3>

            <p className="text-xs text-[#D6A84F] font-medium italic">
              "{exp.subtitle}"
            </p>

            <p
              className={`text-xs text-[#E6E6E0] font-sans font-light leading-relaxed ${
                isExpanded ? '' : 'line-clamp-2'
              }`}
            >
              {exp.description}
            </p>

            {/* Expanded details: highlights & timing */}
            {isExpanded && (
              <div className="pt-3 border-t border-[#D6A84F]/30 space-y-3 animate-fade-in">
                {exp.duration && (
                  <div className="flex items-center gap-2 text-xs text-[#E6E6E0] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#D6A84F]" />
                    <span>{exp.duration}</span>
                  </div>
                )}

                <div className="space-y-1.5 pt-1">
                  {exp.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[#E6E6E0]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D6A84F] flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Card Actions: Toggle More Details + WhatsApp Enquiry */}
        <div className="p-6 pt-0 space-y-3">
          <button
            onClick={() => toggleExpDetails(exp.id)}
            className="w-full text-xs font-mono font-medium text-[#D6A84F] hover:text-white transition-colors flex items-center justify-center gap-1.5 py-1.5 border-t border-[#D6A84F]/30"
          >
            <span>
              {isExpanded ? 'Hide Details' : 'More Details'}
            </span>

            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#D6A84F]" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[#D6A84F]" />
            )}
          </button>

          <WhatsAppButton
            customMessage={`Hello, I would like to enquire about experiencing ${exp.title} during my stay at Anto's Comfort Residence.`}
            label={`Enquire About ${exp.title}`}
            size="sm"
            variant="outline"
            className="!bg-[#18352A] !text-white !border !border-[#D6A84F] hover:!bg-[#D6A84F] hover:!text-[#18352A] transition-colors"
            fullWidth
          />
        </div>
      </div>
    );
  })}
</div>
</section>

      {/* 7. Gallery Preview Grid */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#C89D66] font-medium">
              Visual Journey
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#3534FB] block sm:text-4xl lg:text-5xl leading-tight">
              Moments at Anto's Comfort Residence
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((item) => (
              <div key={item.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-white text-xs font-serif font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#accommodations"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#15291E] text-white hover:bg-[#1D3829] rounded-full text-sm font-semibold transition-all shadow-md cursor-pointer"
            >
              <span>Explore Our Accommodations</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. Location Preview Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <LocationMap />
      </section>

      {/* 9. Final WhatsApp CTA Banner */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#EAE2D5]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#C89D66] font-medium">
            Plan Your Stay
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#3534FB] block sm:text-4xl lg:text-5xl leading-tight">
            Ready for a Quiet Escape into Nature?
          </h2>
          <p className="text-base text-[#000000] font-semibold font-light max-w-xl mx-auto">
            Contact us directly on WhatsApp to check live availability, discuss room features, or reserve your stay.
          </p>
          <div className="pt-4 flex justify-center">
            <WhatsAppButton
              label="Instant WhatsApp Enquiry"
              size="lg"
              variant="primary"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
