// Pushes a conversion event to GTM's dataLayer and Meta Pixel (when loaded).
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', name, params);
  }
}

// Builds a wa.me link with a prefilled message identifying the source page.
export function whatsappLink(source) {
  const text = `Hi Flyinco! I'm interested in ${source} and would like to know more.`;
  return `https://wa.me/966556182021?text=${encodeURIComponent(text)}`;
}
