import { Helmet } from 'react-helmet-async';

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "RD National College of Arts and Science",
  "alternateName": "RD National College",
  "url": "https://rdcollege.in",
  "logo": "https://rdcollege.in/logo.png",
  "description": "RD National College of Arts and Science, Erode — offering UG, PG, and Doctoral programmes in Computer Science, Commerce, Management, and Arts.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chinniyampalayam, Karur Main Road",
    "addressLocality": "Erode",
    "postalCode": "638151",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "telephone": "+91-7373747474",
  "email": "info@rdcollege.in",
  "sameAs": [
    "https://www.instagram.com/rdnationalcollegeerode"
  ]
};

/**
 * SEOMeta — renders per-route <title>, <meta description>, and EducationalOrganization structured data.
 * Must be wrapped in <HelmetProvider> at the app root.
 */
export default function SEOMeta({ title, description }) {
  const fullTitle = title
    ? `${title} | RD National College of Arts and Science, Erode`
    : 'RD National College of Arts and Science, Erode — Technology-Forward Education';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'RD National College of Arts and Science, Erode offers UG, PG, and Doctoral programmes with advanced tech labs, placement support, and industry collaboration.'} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      <script type="application/ld+json">{JSON.stringify(ORG_SCHEMA)}</script>
    </Helmet>
  );
}
