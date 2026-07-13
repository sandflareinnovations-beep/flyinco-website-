'use client';

import { useEffect } from 'react';

const CLARITY_ID = 'xemgf8jqdz';

// Loads Microsoft Clarity only after the visitor's first interaction, so the
// tag (and its third-party cookies) never blocks or degrades the initial load.
// Clarity records interactions, so nothing meaningful is lost by waiting.
export default function ClarityLoader() {
  useEffect(() => {
    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart'];
    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;
      events.forEach((e) => window.removeEventListener(e, load));
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r);
        t.async = 1;
        t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', CLARITY_ID);
    };

    events.forEach((e) => window.addEventListener(e, load, { passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, load));
  }, []);

  return null;
}
