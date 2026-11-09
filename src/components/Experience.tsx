import Image from "next/image";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section className="experience">
      <div className="experience-inner section-wrap">
        <Reveal className="experience-image image-frame">
          <Image
            src="/images/stock/piet-retief-landscape.webp"
            alt="Illustrative South African countryside near Piet Retief; this is not a view from Dlombi's Guesthouse"
            fill
            sizes="(max-width: 720px) 100vw, 48vw"
            quality={82}
          />
          <span className="image-caption">Illustrative landscape · Piet Retief, South Africa</span>
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
          <a className="text-link" href="#location">Find us in Dennilton <span aria-hidden="true">↘</span></a>
          <span className="experience-note">A QUIETER KIND OF STAY</span>
        </Reveal>
      </div>
    </section>
  );
}
