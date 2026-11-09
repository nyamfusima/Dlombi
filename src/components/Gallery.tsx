"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => {
    setActiveIndex((index) => index === null ? null : (index + galleryImages.length - 1) % galleryImages.length);
  }, []);
  const next = useCallback(() => {
    setActiveIndex((index) => index === null ? null : (index + 1) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
      if (event.key === "Tab") {
        const buttons = document.querySelectorAll<HTMLButtonElement>(".lightbox button");
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("lightbox-open");
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("lightbox-open");
      openerRef.current?.focus();
    };
  }, [activeIndex, close, next, previous]);

  return (
    <section className="gallery section-wrap" id="gallery">
      <div className="section-topline">
        <p className="eyebrow"><span className="eyebrow-rule" /> A CLOSER LOOK</p>
        <span className="section-index">02 — GALLERY</span>
      </div>
      <div className="gallery-heading">
        <Reveal><h2 className="display-heading">A glimpse of <em>Dlombi&apos;s.</em></h2></Reveal>
        <Reveal delay={0.12}>
          <p className="section-description">Explore the spaces and details that make up the guesthouse.</p>
        </Reveal>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <Reveal className={`gallery-item gallery-item-${index + 1}`} key={image.src} delay={index % 3 * 0.07}>
            <button
              className="gallery-button"
              type="button"
              onClick={(event) => {
                openerRef.current = event.currentTarget;
                setActiveIndex(index);
              }}
              aria-label={`Open image ${index + 1}: ${image.label}`}
            >
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 50vw, 33vw" quality={80} />
              <span className="gallery-hover"><span>{image.label}</span><span>View</span></span>
            </button>
          </Reveal>
        ))}
      </div>
      <p className="gallery-note">Property photographs supplied by Dlombi&apos;s Guesthouse.</p>

      <AnimatePresence>
        {activeImage && activeIndex !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${activeIndex + 1} of ${galleryImages.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) close();
            }}
            onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
            onTouchEnd={(event) => {
              const start = touchStart.current;
              const end = event.changedTouches[0]?.clientX;
              if (start !== null && end !== undefined && Math.abs(start - end) > 48) {
                if (start > end) next();
                else previous();
              }
              touchStart.current = null;
            }}
          >
            <button ref={closeButtonRef} className="lightbox-close" onClick={close} type="button" aria-label="Close image"><X /></button>
            <button className="lightbox-arrow lightbox-prev" onClick={previous} type="button" aria-label="Previous image"><ChevronLeft /></button>
            <motion.div
              className="lightbox-content"
              key={activeImage.src}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="lightbox-image image-frame">
                <Image src={activeImage.src} alt={activeImage.alt} fill sizes="90vw" quality={88} />
              </div>
              <p>{activeImage.label} <span>{String(activeIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}</span></p>
            </motion.div>
            <button className="lightbox-arrow lightbox-next" onClick={next} type="button" aria-label="Next image"><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
