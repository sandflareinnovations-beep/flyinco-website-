import alula480 from '../assets/images/hero/alula-hero-480.webp';
import alula768 from '../assets/images/hero/alula-hero-768.webp';
import alula1080 from '../assets/images/hero/alula-hero-1080.webp';
import alula1600 from '../assets/images/hero/alula-hero-1600.webp';
import alula2000 from '../assets/images/hero/alula-hero-2000.webp';

// Self-hosted responsive versions of the first hero slide (the home page LCP
// image). Shared by Hero.jsx and the <link rel="preload"> in app/page.jsx so
// the preloaded URL always matches what the <img> actually requests.
export const alulaHero = {
  src: alula2000,
  srcSet: [
    `${alula480} 480w`,
    `${alula768} 768w`,
    `${alula1080} 1080w`,
    `${alula1600} 1600w`,
    `${alula2000} 2000w`,
  ].join(', '),
  sizes: '100vw',
};
