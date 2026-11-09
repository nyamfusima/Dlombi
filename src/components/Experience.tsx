"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

export function Experience() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.controls = true;
    }
  }, []);

  return (
    <section className="experience">
      <div className="experience-inner section-wrap">
        <Reveal className="experience-image image-frame">
          <video
            ref={videoRef}
            aria-label="Illustrative guest-room video by hello aesthe on Pexels; not filmed at Dlombi's Guesthouse"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/stock/guest-room-video-poster.jpg"
            preload="metadata"
          >
            <source src="/videos/guest-room-illustrative.mp4" type="video/mp4" />
          </video>
          <span className="image-caption">Illustrative guest-room footage · not filmed at Dlombi&apos;s Guesthouse</span>
        </Reveal>
        <Reveal className="experience-copy" delay={0.12}>
          <p className="eyebrow"><span className="eyebrow-rule" /> A SENSE OF PLACE</p>
          <h2 className="display-heading">Rooted in <em>the everyday.</em></h2>
          <p>
            Come as you are. Find a welcoming base in Dennilton, take a breath,
            and make your own time here. Dlombi&apos;s Guesthouse brings township
            and rural accommodation together in a setting that feels grounded
            and unhurried.
          </p>
          <a className="button button-outline" href="#location">Find us in Dennilton</a>
          <span className="experience-note">A QUIETER KIND OF STAY</span>
        </Reveal>
      </div>
    </section>
  );
}
