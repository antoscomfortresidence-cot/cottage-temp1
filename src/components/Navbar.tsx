import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Synchronously recalculate scroll state on scroll and route changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount and on route change

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Element theme state: true if scrolled OR on non-home pages (unless mobile menu is open)
  const isDarkStyle = isScrolled || (!isHomePage && !mobileMenuOpen);

  // Dynamic header styling based on scroll, route, and mobile menu
  const getHeaderBackground = () => {
    if (mobileMenuOpen) return 'bg-[#0F1D15] text-[#FAF7F2] border-b border-white/10';
    if (isScrolled) {
      return 'bg-[#FAF7F2]/95 backdrop-blur-md text-[#173F2B] shadow-md border-b border-[#EAE2D5] py-3';
    }
    if (isHomePage) {
      return 'bg-gradient-to-b from-black/70 via-black/30 to-transparent text-[#FAF7F2] py-5';
    }
    return 'bg-[#173F2B] text-[#1C201D] border-b border-[#EAE2D5] py-4';
  };

  const getTextColor = (path: string) => {
    const isActive = location.pathname === path;
    if (isDarkStyle) {
      return isActive
        ? 'text-[#000000] font-semibold border-b-2 border-[#15291E]'
        : 'text-[#000000]/80 hover:text-[#15291E]';
    }
    return isActive
      ? 'text-white font-semibold border-b-2 border-[#6caca0]'
      : 'text-[#FAF7F2]/80 hover:text-white';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${getHeaderBackground()}`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none flex-shrink min-w-0"
            aria-label="Anto's Comfort Residence Home"
          >
            <div className="flex flex-col min-w-0 justify-center">
              {/* Mobile Wordmark Layout (< sm): ANTO'S / COMFORT stacked on left, Residence to the right */}
              <div className="flex sm:hidden items-start gap-2 leading-none">
                <div
                  className={`font-mermaid text-[25px] lg:text-base font-bold flex flex-col leading-tight tracking-tight min-w-0 translate-x-4 ${
                    isDarkStyle
                      ? 'text-[#6caca0]'
                      : 'text-[#6caca0] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]'
                  }`}
                >
                  <span>ANTO'S</span>
                </div>

                <div
                  className={`font-serif italic text-[20px] lg:text-[16px] font-bold flex-shrink-0 mt-8.5 -translate-x-15 ${
                    isDarkStyle
                      ? 'text-[#6caca0]'
                      : 'text-[#6caca0] drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]'
                  }`}
                >
                  <span>COMFORT</span>
                </div>

                <div
                  className={`font-serif italic text-[20px] lg:text-[16px] font-bold flex-shrink-0 mt-8.5 -translate-x-15 ${
                    isDarkStyle
                      ? 'text-[#c075b7]'
                      : 'text-[#c075b7] drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]'
                  }`}
                >
                  <span>RESIDENCE</span>
                </div>

              </div>

              {/* Desktop / Tablet Wordmark Layout (>= sm): Horizontal baseline */}
              <div className="hidden sm:flex items-baseline gap-1.5 lg:gap-2 leading-none">
                <span
                  className={`font-mermaid text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
                    isDarkStyle
                      ? 'text-[#6caca0]'
                      : 'text-[#6caca0] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]'
                  }`}
                >
                  ANTO'S COMFORT
                </span>

                <span
                  className={`font-mermaid italic text-2xl sm:text-3xl lg:text-4xl font-bold flex-shrink-0 ${
                    isDarkStyle
                      ? 'text-[#c075b7]'
                      : 'text-[#c075b7] drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]'
                  }`}
                >
                  RESIDENCE
                </span>
              </div>

              {/* Subtitle */}
              <span
                className={`text-[10px] xs:text-[15px] sm:text-[12px] tracking-[0.18em] uppercase font-sans mt-1 font-medium truncate ${
                  isDarkStyle
                    ? 'text-[#000000]'
                    : 'text-white/85'
                }`}
              >
                Cottage & Nature Stay
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-1 transition-colors duration-200 ${getTextColor(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action / Direct Call CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919344950030"
              aria-label="Call +91 93449 50030"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${
                isDarkStyle
                  ? 'bg-[#c075b7] text-[#FAF7F2] hover:bg-[#1D3829] border border-[#274B37]'
                  : 'bg-[#6caca0] text-[#15291E] hover:bg-[#D8AE77] font-semibold'
              }`}
            >
              <Phone className="w-3.5 h-3.5 flex-shrink-0" />
              <span>+91 93449 50030</span>
            </a>
          </div>

          {/* Mobile Menu & Direct Call Button */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <a
              href="tel:+919344950030"
              aria-label="Call +91 93449 50030"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-sm ${
                isDarkStyle
                  ? 'bg-[#c075b7] text-[#FAF7F2]'
                  : 'bg-[#6caca0] text-[#15291E]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 sm:p-2 rounded-lg transition-colors focus:outline-none ${
                isDarkStyle
                  ? 'text-[#6caca0] hover:bg-[#EAE2D5]'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Full Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 bg-[#0F1D15] text-[#FAF7F2] z-50 flex flex-col justify-between px-6 py-8 animate-fadeIn overflow-y-auto">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#C89D66] font-medium border-b border-white/10 pb-2">
              Navigation Menu
            </p>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-serif tracking-wide py-1 flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#C89D66] font-medium pl-2 border-l-2 border-[#C89D66]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="text-xs uppercase font-sans tracking-widest bg-[#C89D66]/20 px-2 py-0.5 rounded text-[#C89D66]">Active</span>}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-white/50">Location</span>
              <span className="text-sm font-medium text-white/90">Kodaikanal, Tamil Nadu, India</span>
            </div>

            <a
              href="tel:+919344950030"
              className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full bg-[#C89D66] text-[#15291E] font-semibold text-sm shadow-md hover:bg-[#D8AE77] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 93449 50030</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
