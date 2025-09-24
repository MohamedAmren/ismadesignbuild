export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Isma Design & Build",
    "image": [
      "https://ismadesignbuild.com/images/hero.svg",
      "https://ismadesignbuild.com/images/project1.svg"
    ],
    "description": "Professional interior design, custom cabinetry, and renovation services in Kota Kinabalu, Sabah. Transform your space with quality craftsmanship.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kota Kinabalu",
      "addressRegion": "Sabah",
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 5.9804,
      "longitude": 116.0735
    },
    "url": "https://ismadesignbuild.com",
    "telephone": "+60189023676",
    "email": "hello@ismadesignbuild.com",
    "priceRange": "RM500 - RM100,000+",
    "openingHours": [
      "Mo-Sa 09:00-19:00"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Kota Kinabalu",
        "containedInPlace": {
          "@type": "State", 
          "name": "Sabah"
        }
      },
      {
        "@type": "City",
        "name": "Penampang",
        "containedInPlace": {
          "@type": "State",
          "name": "Sabah" 
        }
      },
      {
        "@type": "City",
        "name": "Putatan",
        "containedInPlace": {
          "@type": "State",
          "name": "Sabah"
        }
      }
    ],
    "serviceType": [
      "Interior Design",
      "Custom Cabinetry", 
      "Home Renovation",
      "Kitchen Design",
      "Wardrobe Design",
      "Exhibition Booth Design"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Interior Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Planning & Design",
            "description": "Custom interior design plans and proposals tailored to your space and lifestyle"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Cabinet Making",
            "description": "Bespoke kitchen cabinets, wardrobes, and TV consoles designed to fit your exact needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Home Renovation",
            "description": "Complete renovation services from small updates to full house makeovers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exhibition Booth Design", 
            "description": "Custom trade show and exhibition booth design and construction"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5", 
      "worstRating": "1",
      "ratingCount": "50"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Nadia"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Isma Design & Build transformed our condo with a modern, functional kitchen. Highly recommended!"
      },
      {
        "@type": "Review", 
        "author": {
          "@type": "Person",
          "name": "Kelvin"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5", 
          "bestRating": "5"
        },
        "reviewBody": "Professional and reliable service. The custom wardrobe exceeded my expectations."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Afiqah"  
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "From start to finish, the team made the renovation stress-free and delivered beautiful results."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ismadesignbuild",
      "https://www.instagram.com/ismadesignbuild"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}