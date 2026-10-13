import { useEffect } from 'react';
import { SeoConfig } from '../../types';

interface SEOProps {
  config: SeoConfig;
}

export function SEO({ config }: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = config.title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Meta description
    setMetaTag('name', 'description', config.description);

    // OpenGraph
    setMetaTag('property', 'og:title', config.title);
    setMetaTag('property', 'og:description', config.description);
    const canonicalUrl = `https://solvera-tech.com${config.canonicalPath === '/' ? '' : config.canonicalPath}`;
    setMetaTag('property', 'og:url', canonicalUrl);

    // Twitter
    setMetaTag('name', 'twitter:title', config.title);
    setMetaTag('name', 'twitter:description', config.description);

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Inject JSON-LD Schema
    const scriptId = 'json-ld-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(config.jsonLd);

    return () => {
      // Clean up script on unmount
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [config]);

  return null;
}
