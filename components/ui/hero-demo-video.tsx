"use client";

import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/use-in-view";

export function HeroDemoVideo() {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "80px" });
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
    <div ref={ref} className="hero-demo-video-wrap mt-10 md:mt-12 mx-auto w-full max-w-5xl">
      <video
        ref={videoRef}
        className="hero-demo-video"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        aria-label="Dirac product demo"
      >
        <source src="/dirac-website-demo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
