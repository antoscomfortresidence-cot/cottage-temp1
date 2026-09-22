import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  ogImage = 'https://antoscomfortresidence.com/favicon.png',
  type = 'website'
}) => {
  const defaultTitle = `${SITE_CONFIG.name} | Cottage Stay in Kodaikanal`;
  const defaultDescription = "Anto's Comfort Residence offers a peaceful and comfortable stay in Kodaikanal. Enjoy scenic natural surroundings, safe accommodations, single and double bedrooms, and local travel assistance.";
  
  const metaTitle = title ? `${title} | ${SITE_CONFIG.name}` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const canonicalUrl = `https://antoscomfortresidence.com${canonicalPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = metaTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attributeName: string, attributeValue: string, contentValue: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 2. Update Standard Meta Tags
    updateMetaTag('meta[name="description"]', 'name', 'description', metaDescription);

    // 3. Update Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Update Open Graph Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', metaTitle);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDescription);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);

    // 5. Update Twitter Card Tags
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', metaTitle);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDescription);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 6. Inject JSON-LD LodgingBusiness Structured Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": SITE_CONFIG.name,
      "description": defaultDescription,
      "url": "https://antoscomfortresidence.com",
      "telephone": SITE_CONFIG.phone,
      "email": SITE_CONFIG.email,
      "image": ogImage,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.location.address,
        "addressLocality": "Kodaikanal",
        "addressRegion": "Tamil Nadu",
        "postalCode": "624101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": SITE_CONFIG.location.coordinates.lat,
        "longitude": SITE_CONFIG.location.coordinates.lng
      },
      "checkinTime": SITE_CONFIG.checkInTime,
      "checkoutTime": SITE_CONFIG.checkOutTime,
      "priceRange": "₹₹"
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(schemaData);

  }, [metaTitle, metaDescription, canonicalUrl, ogImage, type]);

  return null;
};

export default SEO;
