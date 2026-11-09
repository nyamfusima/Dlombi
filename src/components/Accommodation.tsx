import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Accommodation() {
  return (
    <section className="accommodation section-wrap" id="accommodation">
      <div className="section-topline">
        <p className="eyebrow"><span className="eyebrow-rule" /> YOUR STAY</p>
        <span className="section-index">01 — ACCOMMODATION</span>
      </div>
      <div className="accommodation-heading">
        <Reveal>
          <h2 className="display-heading">Comfort, rest <em>&amp; a warm welcome.</em></h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-description">
            A closer look at the rooms and spaces at Dlombi&apos;s Guesthouse.
            Get in touch to ask about availability and the details of your stay.
          </p>
        </Reveal>
      </div>
      <div className="accommodation-grid">
        <Reveal className="room-card room-card-main">
          <div className="room-photo image-frame">
            <Image src="/images/client/bedroom.webp" alt="A guest bedroom with a neatly made bed" fill sizes="(max-width: 720px) 100vw, 54vw" quality={82} />
          </div>
          <p className="photo-caption"><span>01</span> A comfortable place to rest</p>
        </Reveal>
        <Reveal className="room-card room-card-detail" delay={0.1}>
          <div className="room-photo image-frame">
            <Image src="/images/client/sitting-area.webp" alt="A sitting area in one of the guest rooms" fill sizes="(max-width: 720px) 100vw, 36vw" quality={82} />
          </div>
          <p className="photo-caption"><span>02</span> Room details</p>
        </Reveal>
      </div>
      <div className="accommodation-bottom">
        <p>Have a question about the rooms or your dates? We&apos;re happy to help.</p>
        <a className="round-link" href="#contact" aria-label="Enquire about accommodation"><ArrowUpRight size={20} strokeWidth={1.5} /></a>
      </div>
    </section>
  );
}
