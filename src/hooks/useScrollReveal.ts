import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLElement>(threshold = 0.9) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * threshold) {
        el.classList.add('in');
      }
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [threshold]);

  return ref;
}