import React from 'react';
import { Compass, Heart, Shield, Trees } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import SEO from '../components/SEO';
import cottaBack from "../assets/images/cota-backs2.webp";

export const About: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      <SEO
        title="About Us - Story & Philosophy"
        description="Learn about Anto's Comfort Residence in Kodaikanal — comfortable cottages surrounded by pine trees, peaceful nature, and warm hospitality."
        canonicalPath="/about"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15291E]/5 text-[#15291E] text-sm font-semibold font-medium border border-[#15291E]/10">
            <Compass className="w-3.5 h-3.5 text-[#C89D66]" />
            <span>Our Story & Philosophy</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#3534FB] block sm:text-4xl lg:text-5xl leading-tight">
            Crafted for Peace, Privacy & Nature
          </h1>
          <p className="text-base text-[#000000] font-semibold font-light leading-relaxed">
            Anto's Comfort Residence was born out of a desire to create a true mountain sanctuary — where human architecture blends seamlessly into the surrounding pine canopy.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE2D5] shadow-sm">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-[#3534FB] block sm:text-4xl lg:text-5xl leading-tight">
              Building Without Distributing the Forest
            </h2>
            <p className="text-sm sm:text-base text-[#000000] font-sans font-semibold leading-relaxed">
              When we first walked through this hillside parcel in Kodaikanal, we made a strict promise: not a single mature pine tree would be felled. Instead, our cottage were meticulously positioned around the natural contours of the rocks and trees.
            </p>
            <p className="text-sm sm:text-base text-[#000000] font-sans font-semibold leading-relaxed">
              Every room is thoughtfully designed to offer natural warmth and scenic mountain views. The result is an accommodation that feels like it has organically belonged to the mountain for decades.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md img-zoom-container">
            <img
              src={cottaBack}
              alt="Anto's Comfort Residence architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-[#15291E] space-y-4">
            <Shield className="w-8 h-8 text-[#C89D66]" />
            <h3 className="font-serif text-4xl font-semibold text-[#3534FB]">Absolute Privacy</h3>
            <p className="text-sm text-[#000000] font-semibold font-light leading-relaxed">
              Each cottage maintains wide buffer zones of native flora, ensuring complete visual and auditory privacy for every guest stay.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-[#15291E] space-y-4">
            <Heart className="w-8 h-8 text-[#C89D66]" />
            <h3 className="font-serif text-4xl font-semibold text-[#3534FB]">Warm Hospitality</h3>
            <p className="text-sm text-[#000000] font-semibold font-light leading-relaxed">
              Our small host team is dedicated to personal service — assisting with stay needs, local travel tips, and warm hospitality throughout your visit.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-[#15291E] space-y-4">
            <Trees className="w-8 h-8 text-[#C89D66]" />
            <h3 className="font-serif text-4xl font-semibold text-[#3534FB]">Eco-Conscious</h3>
            <p className="text-sm text-[#000000] font-semibold font-light leading-relaxed">
              Rainwater harvesting, solar water heating, zero single-use plastics, and organic waste composting on property grounds.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#15291E] text-[#FAF7F2] p-10 sm:p-14 rounded-3xl text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            We Look Forward to Welcoming You
          </h2>
          <p className="text-sm font-sans font-light text-white/80 max-w-lg mx-auto">
            Experience the natural charm of Kodaikanal at Anto's Comfort Residence. Connect with us directly on WhatsApp for enquiries and stay arrangements.
          </p>
          <div className="flex justify-center">
            <WhatsAppButton
              label="Talk to Our Host on WhatsApp"
              size="lg"
              variant="secondary"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
