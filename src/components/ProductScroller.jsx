import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { products } from "../products"; // adjust path [file:60]

export default function ProductScroller({
  items,
  targetId = "products",
  autoScroll = true,
  speed = 30, // px per second (use seconds-based speed)
  pauseOnHover = true,
}) {
  const list = useMemo(() => {
    const base = Array.isArray(items) && items.length ? items : products; // fallback [file:60]
    return base.filter((p) => p?.category !== "solar-commercial"); // optional [file:60]
  }, [items]);

  const scrollerRef = useRef(null);
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);

  const [paused, setPaused] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const onGoToProducts = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = `#${targetId}`;
  };

  // detect overflow (so you know whether auto-scroll can happen)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const check = () => setHasOverflow(el.scrollWidth > el.clientWidth + 1);
    check();

    const ro = new ResizeObserver(check);
    ro.observe(el);
    window.addEventListener("resize", check, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
  }, [list.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // stop any previous animation
    cancelAnimationFrame(rafRef.current);
    lastTsRef.current = 0;

    if (!autoScroll || paused || !hasOverflow) return;

    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000; // seconds
      lastTsRef.current = ts;

      const max = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + speed * dt;

      el.scrollLeft = next >= max ? 0 : next;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [autoScroll, paused, speed, hasOverflow, list.length]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

      <div
        ref={scrollerRef}
        // IMPORTANT:
        // - remove snap while auto-scrolling (snap fights tiny movement)
        // - keep snap when paused (manual scroll looks good)
        className={[
          "flex gap-4 overflow-x-auto pb-3 px-1",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          paused ? "snap-x snap-mandatory scroll-smooth" : "snap-none",
        ].join(" ")}
        onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
        onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
      >
        {list.map((p) => (
          <motion.a
            key={p.id}
            href={`#${targetId}`}
            onClick={onGoToProducts}
            whileHover={{ y: -4 }}
            className="snap-start flex-shrink-0 w-44 sm:w-56 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="h-28 sm:h-36 p-3">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="px-3 pb-3">
              <div className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">
                {p.name}
              </div>
              <div className="text-xs text-gray-500 mt-1">{p.efficiency}</div>
            </div>
          </motion.a>
        ))}
      </div>

      {!hasOverflow ? (
        <div className="mt-2 text-xs text-gray-500">
          (Auto-scroll needs more items or smaller card width)
        </div>
      ) : null}
    </div>
  );
}
