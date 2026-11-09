import Image from "next/image";
import { Reveal } from "./Reveal";

export function Introduction() {
  return (
    <section className="intro section-wrap" id="about">
      <Reveal className="intro-kicker">
        <p className="eyebrow"><span className="eyebrow-rule" /> A PLACE TO PAUSE</p>
      </Reveal>
      <div className="intro-grid">
        <Reveal className="intro-title">
          <h2 className="display-heading">A stay that feels <em>like home.</em></h2>
        </Reveal>
        <Reveal className="intro-copy" delay={0.12}>
          <p>
            In Dennilton, Dlombi&apos;s Guesthouse offers township and rural
            accommodation with a simple promise: a warm welcome and a place
            to settle in.
          </p>
          <p>
            Whether you are visiting the area or passing through, make your
            enquiry and speak with us about the stay that suits your plans.
          </p>
          <a className="button button-outline" href="#accommodation">Get to know the guesthouse</a>
        </Reveal>
      </div>
      <Reveal className="intro-image image-frame">
        <Image
          src="/images/client/garden.webp"
          alt="The landscaped garden at Dlombi's Guesthouse"
          fill
          sizes="(max-width: 720px) 100vw, 88vw"
          quality={82}
        />
        <span className="image-caption">A little space to slow down <span>DENNILTON, SOUTH AFRICA</span></span>
      </Reveal>
      <div className="intro-stamp" aria-hidden="true">
        <span>DL</span>
        <span>WARMTH · REST · WELCOME</span>
      </div>
    </section>
  );
}
