import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import SEO from '../components/SEO';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      <SEO
        title="Privacy Policy"
        description="Privacy policy and guest information handling transparency for Anto's Comfort Residence in Kodaikanal."
        canonicalPath="/privacy-policy"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15291E]/5 text-[#15291E] text-xs font-mono font-medium border border-[#15291E]/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C89D66]" />
            <span>Guest Information & Transparency</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1C201D]">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-[#3D4540] font-sans font-light leading-relaxed">
            Anto's Comfort Residence • Kodaikanal, Tamil Nadu, India
          </p>
          <p className="text-xs text-[#6E7771] font-mono">
            Last Updated: August 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE2D5] shadow-sm space-y-10 text-[#3D4540] font-sans">
          
          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1C201D] flex items-center gap-2">
              <span className="text-[#C89D66] font-mono text-base">01.</span>
              Introduction
            </h2>
            <p className="text-sm font-light leading-relaxed">
              Welcome to the official website of <strong>{SITE_CONFIG.name}</strong>, located in Kodaikanal, Tamil Nadu, India. We respect your privacy and are committed to maintaining simple, transparent information practices for all our website visitors and prospective guests.
            </p>
            <p className="text-sm font-light leading-relaxed">
              This Privacy Policy explains how information is handled when you browse our website or reach out to us regarding cottage stays, room availability, location directions, and stay activities.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-3 pt-6 border-t border-[#EAE2D5]">
            <h2 className="font-serif text-2xl font-semibold text-[#1C201D] flex items-center gap-2">
              <span className="text-[#C89D66] font-mono text-base">02.</span>
              Information We Collect
            </h2>
            <p className="text-sm font-light leading-relaxed">
              Our website functions primarily as an informational showcase for our cottage accommodations and property details in Kodaikanal. Browsing our website does not require you to create an account, log in, or register any personal profile.
            </p>
            <p className="text-sm font-light leading-relaxed">
              We do not automatically collect personal identifiers, financial data, or sensitive personal information through our website. Any contact details (such as your name, phone number, or stay preferences) are provided voluntarily by you when you choose to initiate a phone call or WhatsApp message to inquire about a stay.
            </p>
          </section>

          {/* 3. How We Use Information */}
          <section className="space-y-3 pt-6 border-t border-[#EAE2D5]">
            <h2 className="font-serif text-2xl font-semibold text-[#1C201D] flex items-center gap-2">
              <span className="text-[#C89D66] font-mono text-base">03.</span>
              How We Use Information
            </h2>
            <p className="text-sm font-light leading-relaxed">
              Any information you voluntarily share during a phone call or WhatsApp message is used solely to:
            </p>
            <ul className="list-disc list-inside text-sm font-light space-y-1.5 pl-2 text-[#3D4540]">
              <li>Respond to your stay inquiries and check room availability.</li>
              <li>Provide details on single and double bedroom options.</li>
              <li>Assist with local directions, travel guidance, or transport arrangements in Kodaikanal.</li>
              <li>Confirm reservation details directly with you.</li>
            </ul>
          </section>

          {/* 4. WhatsApp and Phone Enquiries */}
          <section className="space-y-3 pt-6 border-t border-[#EAE2D5]">
            <h2 className="font-serif text-2xl font-semibold text-[#1C201D] flex items-center gap-2">
              <span className="text-[#C89D66] font-mono text-base">04.</span>
              WhatsApp and Phone Enquiries
            </h2>
            <p className="text-sm font-light leading-relaxed">
              For immediate guest convenience, our website provides direct phone call links and WhatsApp inquiry buttons. Clicking these links connects you directly to our host team using your device's phone dialer or the official WhatsApp application.
            </p>
            <p className="text-sm font-light leading-relaxed">
              Please note that WhatsApp communications are governed by WhatsApp's own privacy terms and end-to-end encryption protocols.
            </p>
          </section>

          {/* 5. Location and Third-Party Services */}
          <section className="space-y-3 pt-6 border-t border-[#EAE2D5]">
            <h2 className="font-serif text-2xl font-semibold text-[#1C201D] flex items-center gap-2">
              <span className="text-[#C89D66] font-mono text-base">05.</span>
              Location and Third-Party Services
            </h2>
            <p className="text-sm font-light leading-relaxed">
              To assist guests in navigating to our property, our website incorporates embedded Google Maps location previews and direct Google Maps navigation links. Interacting with map elements is subject to Google's standard Privacy Policy and terms of service.
            </p>
          </section>

          {/* 6. Data Security */}
          <section className="space-y-3 pt-6 border-t border-[#EAE2D5]">
            <h2 className="font-serif text-2xl font-semibold text-[#1C201D] flex items-center gap-2">
              <span className="text-[#C89D66] font-mono text-base">06.</span>
              Data Security
            </h2>
            <p className="text-sm font-light leading-relaxed">
              We take reasonable administrative care to keep direct guest communications safe and confidential. As a frontend informational site, we do not store customer databases, credit card numbers, or login credentials on website servers.
            </p>
          </section>

          {/* 7. Information Sharing */}
          <section className="space-y-3 pt-6 border-t border-[#EAE2D5]">
            <h2 className="font-serif text-2xl font-semibold text-[#1C201D] flex items-center gap-2">
              <span className="text-[#C89D66] font-mono text-base">07.</span>
              Information Sharing
            </h2>
            <p className="text-sm font-light leading-relaxed">
              We do not sell, rent, trade, or share your contact information with any third-party marketing agencies. Guest information is kept strictly confidential within our property management team for stay coordination only.
            </p>
          </section>

          {/* 8. External Links */}
          <section className="space-y-3 pt-6 border-t border-[#EAE2D5]">
            <h2 className="font-serif text-2xl font-semibold text-[#1C201D] flex items-center gap-2">
              <span className="text-[#C89D66] font-mono text-base">08.</span>
              External Links
            </h2>
            <p className="text-sm font-light leading-relaxed">
              Our website may contain links to external platforms such as Google Maps or social media profiles. We encourage visitors to review the privacy policies of any external sites they visit.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section className="space-y-3 pt-6 border-t border-[#EAE2D5]">
            <h2 className="font-serif text-2xl font-semibold text-[#1C201D] flex items-center gap-2">
              <span className="text-[#C89D66] font-mono text-base">09.</span>
              Children's Privacy
            </h2>
            <p className="text-sm font-light leading-relaxed">
              Our website provides general accommodation information intended for adult travelers and families. We do not knowingly collect personal details from children.
            </p>
          </section>

          {/* 10. Changes to This Privacy Policy */}
          <section className="space-y-3 pt-6 border-t border-[#EAE2D5]">
            <h2 className="font-serif text-2xl font-semibold text-[#1C201D] flex items-center gap-2">
              <span className="text-[#C89D66] font-mono text-base">10.</span>
              Changes to This Privacy Policy
            </h2>
            <p className="text-sm font-light leading-relaxed">
              We may update this Privacy Policy periodically to reflect minor adjustments in our property contact information or website presentation. Any updates will be published directly on this page with an updated revision date.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="space-y-4 pt-6 border-t border-[#EAE2D5]">
            <h2 className="font-serif text-2xl font-semibold text-[#1C201D] flex items-center gap-2">
              <span className="text-[#C89D66] font-mono text-base">11.</span>
              Contact Us
            </h2>
            <p className="text-sm font-light leading-relaxed">
              If you have any questions regarding this Privacy Policy or wish to clarify any stay details, please feel free to reach out to us:
            </p>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EAE2D5] space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C89D66] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1C201D] block">{SITE_CONFIG.name}</span>
                  <span className="text-[#6E7771]">{SITE_CONFIG.location.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#EAE2D5]">
                <Phone className="w-4 h-4 text-[#C89D66] flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#15291E] font-medium hover:underline">
                  {SITE_CONFIG.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#EAE2D5]">
                <Mail className="w-4 h-4 text-[#C89D66] flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#15291E] font-medium hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
