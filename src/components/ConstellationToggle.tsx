"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }));

    const MAX_DIST = 120;
    const MOUSE_DIST = 180;
    const REPEL_DIST = 80;
    const REPEL_STRENGTH = 0.08;
    const mouse = { x: -9999, y: -9999 };
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // repel from cursor
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < REPEL_DIST && mdist > 0) {
          const force = (REPEL_DIST - mdist) / REPEL_DIST * REPEL_STRENGTH;
          p.vx += (mdx / mdist) * force;
          p.vy += (mdy / mdist) * force;
        }

        // dampen velocity so it doesn't fly off, but keep a minimum speed
        p.vx *= 0.99;
        p.vy *= 0.99;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed < 0.3) {
          const scale = 0.3 / (speed || 0.001);
          p.vx *= scale;
          p.vy *= scale;
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      // lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(150, 150, 150, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // lines from cursor to nearby particles
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST) {
          const opacity = (1 - dist / MOUSE_DIST) * 0.6;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `rgba(150, 150, 150, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(150, 150, 150, 0.6)";
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}

export function SnowToggle() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setActive((s) => !s)}
        aria-label="Toggle constellation"
        className={`transition-all duration-300 focus:outline-none ${
          active ? "opacity-100" : "opacity-40 hover:opacity-100"
        }`}
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <circle cx="5" cy="5" r="1" fill="currentColor" stroke="none" />
            <circle cx="19" cy="7" r="1" fill="currentColor" stroke="none" />
            <circle cx="8" cy="17" r="1" fill="currentColor" stroke="none" />
            <circle cx="18" cy="18" r="1" fill="currentColor" stroke="none" />
            <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" />
            <line x1="5" y1="5" x2="12" y2="10" />
            <line x1="12" y1="10" x2="19" y2="7" />
            <line x1="12" y1="10" x2="8" y2="17" />
            <line x1="8" y1="17" x2="18" y2="18" />
            <line x1="19" y1="7" x2="18" y2="18" />
          </svg>
        </div>
      </button>
      {active && createPortal(<ConstellationCanvas />, document.body)}
    </>
  );
}
