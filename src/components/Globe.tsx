"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import createGlobe from "cobe";

const DARK_CONFIG = {
  baseColor: [0.13, 0.13, 0.13] as [number, number, number],
  markerColor: [0.4, 0.8, 1.0] as [number, number, number],
  glowColor: [0.15, 0.15, 0.15] as [number, number, number],
  dark: 1,
  diffuse: 1.4,
  mapBrightness: 4,
};

const LIGHT_CONFIG = {
  baseColor: [0.88, 0.88, 0.9] as [number, number, number],
  markerColor: [0.1, 0.4, 0.9] as [number, number, number],
  glowColor: [0.9, 0.9, 0.9] as [number, number, number],
  dark: 0,
  diffuse: 1.2,
  mapBrightness: 6,
};

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visitorLocation, setVisitorLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.latitude && data.longitude) {
          setVisitorLocation({
            latitude: data.latitude,
            longitude: data.longitude,
          });
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const config = resolvedTheme === "dark" ? DARK_CONFIG : LIGHT_CONFIG;
    const size = 220 * Math.min(devicePixelRatio, 2);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: Math.min(devicePixelRatio, 2),
      width: size,
      height: size,
      phi: phiRef.current,
      theta: 0.3,
      scale: 1.05,
      dark: config.dark,
      diffuse: config.diffuse,
      mapSamples: 16000,
      mapBrightness: config.mapBrightness,
      mapBaseBrightness: 0.04,
      baseColor: config.baseColor,
      markerColor: config.markerColor,
      glowColor: config.glowColor,
      markers: visitorLocation
        ? [
            {
              location: [visitorLocation.latitude, visitorLocation.longitude],
              size: 0.06,
            },
          ]
        : [],
      onRender: (state) => {
        phiRef.current += 0.003;
        state.phi = phiRef.current;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [resolvedTheme, visitorLocation, mounted]);

  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="w-[220px] h-[220px] animate-pulse rounded-full bg-neutral-100 dark:bg-neutral-800/30" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <canvas
        ref={canvasRef}
        style={{ width: 220, height: 220 }}
        className="rounded-full"
      />
      <p className="text-[10px] uppercase tracking-wider font-medium text-neutral-400 dark:text-neutral-600">
        {visitorLocation ? "your location" : "visitors worldwide"}
      </p>
    </div>
  );
}
