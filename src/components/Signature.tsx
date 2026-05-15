'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const Penflow = dynamic(() => import('penflow/react').then((m) => m.Penflow), { ssr: false });

const FADE_DELAY_MS = 3800;
const FADE_DURATION_MS = 1800;

export const Signature = () => {
  const [sigOpacity, setSigOpacity] = useState(1);
  const [quoteOpacity, setQuoteOpacity] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timers.current.push(
      setTimeout(() => setSigOpacity(0), FADE_DELAY_MS),
      setTimeout(() => setQuoteOpacity(1), FADE_DELAY_MS + FADE_DURATION_MS)
    );
    return () => timers.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative flex justify-center items-center mt-4" style={{ minHeight: '60px' }}>
      <div
        className="absolute"
        style={{ opacity: sigOpacity, transition: `opacity ${FADE_DURATION_MS}ms ease` }}
      >
        <Penflow
          text="Akhilesh"
          fontUrl="/fonts/BrittanySignature.ttf"
          quality="balanced"
          seed="akhilesh"
          size={52}
          color="currentColor"
        />
      </div>

      <div
        className="absolute text-center text-[11px] uppercase font-mono tracking-widest opacity-0 pointer-events-none select-none"
        style={{ opacity: quoteOpacity, transition: `opacity ${FADE_DURATION_MS}ms ease` }}
      >
        Not all those who wander are lost.
        <span className="block mt-1 opacity-50">— Tolkien</span>
      </div>
    </div>
  );
};
