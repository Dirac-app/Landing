"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { whyUsSlides, type BodyPart } from "@/components/why-us/slides";

/** Full loop duration at normal speed (~52s). */
const LOOP_DURATION_MS = 52_000;
/** Full loop duration while hovered — near-still crawl (~6 min). */
const HOVER_LOOP_DURATION_MS = 360_000;
/** How quickly speed eases toward the target (0–1 per frame). */
const SPEED_LERP = 0.06;

function SlideBody({ parts }: { parts: BodyPart[] }) {
  return (
    <p className="text-sm leading-relaxed text-muted">
      {parts.map((part, index) =>
        typeof part === "string" ? (
          <span key={index}>{part}</span>
        ) : (
          <span key={index} className="why-us-highlight">
            {part.highlight}
          </span>
        ),
      )}
    </p>
  );
}

function WhyUsSlideCard({
  title,
  body,
  icon: Icon,
}: (typeof whyUsSlides)[number]) {
  return (
    <article className="why-us-slide group/slide panel-card relative z-10 flex flex-col overflow-hidden p-6 md:p-7">
      <div
        className="why-us-slide-icon pointer-events-none absolute -right-6 -bottom-8 text-ink/[0.04]"
        aria-hidden
      >
        <Icon className="h-36 w-36 stroke-[1.25]" />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <h3 className="mb-3 shrink-0 font-serif text-lg font-medium text-ink">
          {title}
        </h3>
        <SlideBody parts={body} />
      </div>
    </article>
  );
}

export function WhyUsCarousel() {
  const { ref: viewportRef, inView } = useInView<HTMLDivElement>({
    rootMargin: "200px 0px",
    threshold: 0,
  });

  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(0);
  const targetSpeedRef = useRef(0);
  const loopWidthRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const hoveredRef = useRef(false);

  const [reducedMotion, setReducedMotion] = useState(false);

  const measureAndSyncSpeed = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const loopWidth = track.scrollWidth / 2;
    loopWidthRef.current = loopWidth;

    const duration = hoveredRef.current ? HOVER_LOOP_DURATION_MS : LOOP_DURATION_MS;
    targetSpeedRef.current = loopWidth > 0 ? loopWidth / duration : 0;

    if (speedRef.current === 0) {
      speedRef.current = targetSpeedRef.current;
    }
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => setReducedMotion(motionQuery.matches);

    syncReducedMotion();
    motionQuery.addEventListener("change", syncReducedMotion);

    return () => motionQuery.removeEventListener("change", syncReducedMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion || !inView) {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimeRef.current = null;
      return;
    }

    measureAndSyncSpeed();

    const onResize = () => measureAndSyncSpeed();
    window.addEventListener("resize", onResize);

    const tick = (time: number) => {
      const track = trackRef.current;
      const loopWidth = loopWidthRef.current;

      if (track && loopWidth > 0) {
        if (lastTimeRef.current !== null) {
          const delta = time - lastTimeRef.current;
          speedRef.current +=
            (targetSpeedRef.current - speedRef.current) * SPEED_LERP;

          offsetRef.current += speedRef.current * delta;
          if (offsetRef.current >= loopWidth) {
            offsetRef.current %= loopWidth;
          }

          track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
        lastTimeRef.current = time;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimeRef.current = null;
    };
  }, [inView, measureAndSyncSpeed, reducedMotion]);

  const handlePointerEnter = () => {
    hoveredRef.current = true;
    measureAndSyncSpeed();
  };

  const handlePointerLeave = () => {
    hoveredRef.current = false;
    measureAndSyncSpeed();
  };

  const loopSlides = [...whyUsSlides, ...whyUsSlides];

  if (reducedMotion) {
    return (
      <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5">
          {whyUsSlides.map((slide) => (
            <WhyUsSlideCard key={slide.title} {...slide} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={viewportRef}
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2"
    >
      <div
        className="why-us-carousel-mask overflow-x-hidden overflow-y-visible px-6 py-4"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <div
          ref={trackRef}
          className={`why-us-carousel-track flex w-max items-stretch gap-5${inView ? " why-us-carousel-track--active" : ""}`}
        >
          {loopSlides.map((slide, index) => (
            <WhyUsSlideCard key={`${slide.title}-${index}`} {...slide} />
          ))}
        </div>
      </div>
    </div>
  );
}
