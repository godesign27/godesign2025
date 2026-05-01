import { useEffect } from 'react';
import { BASE_URL, SITE_NAME } from '../lib/site';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  keywords?: string;
  structuredData?: object | object[];
}

const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

function setMetaTag(property: string, content: string, isName = false) {
  const attr = isName ? 'name' : 'property';
  let el = document.querySelector(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonicalLink(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setStructuredData(id: string, data: object | object[]) {
  const scriptId = `structured-data-${id}`;
  let el = document.getElementById(scriptId);
  if (!el) {
    el = document.createElement('script');
    el.id = scriptId;
    el.setAttribute('type', 'application/ld+json');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(Array.isArray(data) ? data : data);
}

function removeStructuredData(id: string) {
  document.getElementById(`structured-data-${id}`)?.remove();
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogType = 'website',
  keywords,
  structuredData,
}: SEOHeadProps) {
  useEffect(() => {
    const fullUrl = `${BASE_URL}${canonical}`;

    document.title = title;

    setMetaTag('description', description, true);
    if (keywords) setMetaTag('keywords', keywords, true);

    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:url', fullUrl);
    setMetaTag('og:type', ogType);
    setMetaTag('og:image', OG_IMAGE);
    setMetaTag('og:site_name', SITE_NAME);

    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:url', fullUrl);
    setMetaTag('twitter:image', OG_IMAGE);

    setCanonicalLink(fullUrl);

    if (structuredData) {
      setStructuredData('page', structuredData);
    }

    return () => {
      removeStructuredData('page');
    };
  }, [title, description, canonical, ogType, keywords, structuredData]);

  return null;
}

