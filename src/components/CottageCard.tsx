import React from 'react';
import { Users, BedDouble, Maximize2, Sparkles, ShieldCheck } from 'lucide-react';

export interface Cottage {
  id: string;
  name: string;
  shortName: string;
  category: string;
  capacity: number;
  areaSqFt: number;
  priceNight?: string;
  tagline: string;
  bedType: string;
  view: string;
  amenities: string[];
  images: { url: string }[];
}

import WhatsAppButton from './WhatsAppButton';

interface CottageCardProps {
  cottage: Cottage;
  index?: number;
}

export const CottageCard: React.FC<CottageCardProps> = ({ cottage, index = 0 }) => {
  const mainImage = cottage.images[0]?.url || 'https://images.unsplash.com/photo-1587061949409-02df41d5e562';

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-[#EAE2D5] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1.5"
    >
      {/* Cottage Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#15291E]/10">
        <img
          src={mainImage}
          alt={cottage.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading={index < 3 ? 'eager' : 'lazy'}
        />

        {/* Gradient Overlay for badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Room Number & Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 bg-[#15291E]/90 backdrop-blur-md text-[#FAF7F2] text-xs font-mono font-medium rounded-full border border-white/20">
            {cottage.shortName}
          </span>
          <span className="px-3 py-1 bg-[#FAF7F2]/90 backdrop-blur-md text-[#15291E] text-xs font-sans font-medium rounded-full">
            {cottage.category}
          </span>
        </div>

        {/* Capacity & Price Pill */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
          <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#C89D66]" />
              {cottage.capacity} Guests
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-[#C89D66]" />
              {cottage.areaSqFt} sq ft
            </span>
          </div>

          {cottage.priceNight && (
            <div className="bg-[#15291E] text-[#FAF7F2] px-3.5 py-1.5 rounded-full font-serif text-sm font-semibold tracking-wide border border-[#C89D66]/40 shadow-sm">
              {cottage.priceNight} <span className="text-[10px] font-sans font-normal opacity-80">/ night</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Content Section */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-[#FAF7F2]/50">
        <div>
          {/* Room Name Heading */}
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C201D] leading-tight">
            {cottage.name}
          </h3>

          {/* Tagline */}
          <p className="mt-2 text-sm text-[#3D4540] font-sans line-clamp-2 leading-relaxed font-light">
            {cottage.tagline}
          </p>

          {/* Bed & View Metadata */}
          <div className="mt-4 pt-4 border-t border-[#EAE2D5] grid grid-cols-2 gap-3 text-xs text-[#6E7771]">
            <div className="flex items-center gap-2">
              <BedDouble className="w-4 h-4 text-[#15291E] flex-shrink-0" />
              <span className="truncate">{cottage.bedType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C89D66] flex-shrink-0" />
              <span className="truncate">{cottage.view}</span>
            </div>
          </div>

          {/* Top Amenities Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {cottage.amenities.slice(0, 3).map((amenity: string, i: number) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white text-[#15291E] border border-[#EAE2D5] rounded-md text-[11px] font-medium inline-flex items-center gap-1"
              >
                <ShieldCheck className="w-3 h-3 text-[#C89D66]" />
                {amenity}
              </span>
            ))}
            {cottage.amenities.length > 3 && (
              <span className="px-2 py-1 text-[11px] text-[#6E7771] font-medium">
                +{cottage.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Dynamic WhatsApp Booking Button */}
        <div className="mt-6 pt-5 border-t border-[#EAE2D5]">
          <WhatsAppButton
            roomName={cottage.name}
            label={`Enquire About ${cottage.shortName}`}
            size="md"
            variant="primary"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default CottageCard;
