import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, Sun, CloudRain, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import WhatsAppButton from '../components/WhatsAppButton';
import LocationMap from '../components/LocationMap';
import SEO from '../components/SEO';
import { generateWhatsAppLink } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomInterest: 'Any Bedroom',
    message: ''
  });

  const [validationError, setValidationError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Field validation
    if (!formData.name.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim()) {
      setValidationError('Please enter your phone / WhatsApp number.');
      return;
    }

    if (!formData.message.trim()) {
      setValidationError('Please enter your intended dates or message.');
      return;
    }

    // Format WhatsApp message
    const emailText = formData.email.trim() ? formData.email.trim() : 'Not provided';
    const roomText = formData.roomInterest || 'Any Bedroom';

    const rawMessage = `Hello ${SITE_CONFIG.name},

I would like to enquire about a stay.

*Guest Details*
Name: ${formData.name.trim()}
Phone / WhatsApp: ${formData.phone.trim()}
Email: ${emailText}

*Stay Details*
Bedroom Preference: ${roomText}
Preferred Dates / Message:
${formData.message.trim()}

Please share the availability and booking details.

Thank you.`;

    const generatedUrl = generateWhatsAppLink(undefined, rawMessage);
    setWhatsappUrl(generatedUrl);
    setSubmitted(true);

    // Open WhatsApp in a new tab/window
    window.open(generatedUrl, '_blank');
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      <SEO
        title="Contact & Directions"
        description="Contact Anto's Comfort Residence in Kodaikanal for room reservations, location directions, and stay enquiries."
        canonicalPath="/contact"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15291E]/5 text-[#15291E] text-sm font-semibold font-medium border border-[#15291E]/10">
            <MessageCircle className="w-3.5 h-3.5 text-[#C89D66]" />
            <span>Location, Directions & Reservations</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#3534FB] block sm:text-4xl lg:text-5xl leading-tight">
            Contact & Directions
          </h1>
          <p className="text-base text-[#000000] font-semibold font-light leading-relaxed">
            You Have any questions about room availability, directions, transport pick-up, or stay dates? Contact our team directly.
          </p>
        </div>

        {/* Contact Info Cards + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">

            <div className="bg-white p-8 rounded-3xl border border-[#EAE2D5] space-y-6 shadow-xs">
              <h3 className="font-serif text-3xl font-bold text-[#3534FB] block">
                Contact & Address
              </h3>

              <div className="space-y-4 text-xs sm:text-lg text-[#3D4540]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C89D66] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#000000]">Property Address</h4>
                    <p className="text-[#000000] font-semibold mt-0.5">{SITE_CONFIG.location.address}</p>
                    <p className="text-[11px] text-[#C89D66] font-medium mt-1">{SITE_CONFIG.location.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#EAE2D5]">
                  <Phone className="w-5 h-5 text-[#C89D66] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#000000]">Phone / WhatsApp</h4>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#15291E] font-semibold hover:underline">
                      {SITE_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#EAE2D5]">
                  <Mail className="w-5 h-5 text-[#C89D66] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#000000]">Email Address</h4>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#15291E] font-semibold hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Frontend Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE2D5] shadow-sm">
            
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-[#15291E] mx-auto" />
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-semibold text-[#1C201D]">
                    Your enquiry is ready on WhatsApp
                  </h3>
                  <p className="text-sm text-[#3D4540] max-w-md mx-auto font-light leading-relaxed">
                    Please tap <strong>Send</strong> in WhatsApp to complete your enquiry with our team.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#15291E] text-white font-semibold text-xs rounded-full shadow-md hover:bg-[#1D3829] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C89D66]" />
                    <span>Open WhatsApp Again</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setValidationError('');
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 border border-[#15291E] text-[#15291E] font-medium text-xs rounded-full hover:bg-[#15291E] hover:text-white transition-all cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl font-bold text-[#3534FB] block">
                    Send an Online Enquiry
                  </h2>
                  <p className="text-sm text-[#000000] font-semibold font-light">
                    Fill out your details below to generate a pre-filled WhatsApp enquiry for our host team.
                  </p>
                </div>

                {validationError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[#000000]">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE2D5] rounded-xl text-xs text-[#1C201D] focus:outline-none focus:border-[#15291E]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[#000000]">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 99999 99999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE2D5] rounded-xl text-xs text-[#1C201D] focus:outline-none focus:border-[#15291E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[#000000]">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com (optional)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE2D5] rounded-xl text-xs text-[#1C201D] focus:outline-none focus:border-[#15291E]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[#000000]">Bedroom Preference</label>
                    <select
                      value={formData.roomInterest}
                      onChange={(e) => setFormData({ ...formData, roomInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE2D5] rounded-xl text-xs text-[#1C201D] focus:outline-none focus:border-[#15291E]"
                    >
                      <option value="Any Bedroom">Any Bedroom (Recommend me)</option>
                      <option value="Deluxe Room">Deluxe Room</option>
                      <option value="Standard Room">Standard Room</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#000000]">Intended Dates / Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Provide preferred check-in dates and number of guests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE2D5] rounded-xl text-xs text-[#1C201D] focus:outline-none focus:border-[#15291E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#15291E] text-[#FAF7F2] hover:bg-[#1D3829] font-semibold text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Online Enquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Location Map Section */}
        <div className="pt-8">
          <LocationMap />
        </div>

        {/* Climate & Transport Pick-up Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="bg-white p-8 rounded-3xl border border-[#15291E] space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <Sun className="w-6 h-6 text-[#C89D66]" />
              <h3 className="font-serif text-4xl font-semibold text-[#3534FB]">Best Time to Visit</h3>
            </div>
            <p className="text-sm sm:text-base text-[#000000] font-semibold font-light leading-relaxed">
              Kodaikanal enjoys pleasant, crisp weather throughout the year. Spring & Summer (September to May) bring clear skies and cool breezes (15°C to 20°C). Monsoon season (June to August) paints the mountains in vibrant emerald hues with misty rain and cascading waterfalls.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#15291E] space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <CloudRain className="w-6 h-6 text-[#C89D66]" />
              <h3 className="font-serif text-4xl font-semibold text-[#3534FB]">Pick-up & Transfer Assistance</h3>
            </div>
            <p className="text-sm sm:text-base text-[#000000] font-semibold font-light leading-relaxed">
              We can arrange private chauffeured car pick-up services from Madurai Airport, Coimbatore Airport, or Kodai Road Railway Station directly to our cottage gates upon request.
            </p>
            <div className="pt-2">
              <WhatsAppButton
                customMessage="Hello, I would like to enquire about transport pick-up assistance for my trip to Anto's Comfort Residence."
                label="Enquire for Taxi Transfer"
                size="lg"
                variant="outline"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
