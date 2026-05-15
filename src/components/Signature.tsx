'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const Penflow = dynamic(() => import('penflow/react').then((m) => m.Penflow), { ssr: false });

// Penflow draws at size=84 in ~3s. We fade out shortly after.
const FADE_DELAY_MS = 3800;
const FADE_DURATION_MS = 1800;

export const Signature = () => {
  const [opacity, setOpacity] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setOpacity(0);
    }, FADE_DELAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className="flex justify-center mt-4"
      style={{
        opacity,
        transition: `opacity ${FADE_DURATION_MS}ms ease`,
      }}
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
  );
};
