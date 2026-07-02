"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type HeroDemoVideoProps = {
  className?: string;
};

export function HeroDemoVideo({ className }: HeroDemoVideoProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    rootMargin: "0px",
    threshold: 0.35,
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      if (!inView || motionQuery.matches) {
        video.pause();
        return;
      }

      if (video.readyState === 0) {
        video.load();
      }

      video.play().catch(() => {});
    };

    syncPlayback();
    motionQuery.addEventListener("change", syncPlayback);

    return () => motionQuery.removeEventListener("change", syncPlayback);
  }, [inView]);

  return (
    <div ref={ref} className={cn("hero-demo-video-wrap w-full", className)}>
      <video
        ref={videoRef}
        className="hero-demo-video aspect-video w-full rounded-2xl object-cover md:rounded-[1.25rem]"
        loop
        muted
        playsInline
        preload="none"
        aria-label="Dirac product demo"
      >
        <source src="/dirac-hero-demo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
