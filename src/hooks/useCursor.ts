import { useEffect, useRef } from 'react';

export function useCursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = `${e.clientX}px`;
        curRef.current.style.top = `${e.clientY}px`;
      }
    };

    const lerp = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${p.rx}px`;
        ringRef.current.style.top = `${p.ry}px`;
      }
      rafRef.current = requestAnimationFrame(lerp);
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(lerp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { curRef, ringRef };
}