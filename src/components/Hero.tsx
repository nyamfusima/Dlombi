import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src="/images/client/garden.webp"
        alt="The landscaped garden at Dlombi's Guesthouse"
        fill
        preload
        sizes="100vw"
        quality={88}
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow hero-enter hero-enter-1">
          DENNILTON <span /> SOUTH AFRICA
        </p>
        <h1 className="hero-enter hero-enter-2" id="hero-title">
          Find your place
          <br />
          to feel <em>at home.</em>
        </h1>
        <p className="hero-copy hero-enter hero-enter-3">
          Warm hospitality and a peaceful place to stay in Dennilton.
        </p>
        <div className="hero-actions hero-enter hero-enter-4">
          <a className="button button-gold" href="#contact">Enquire about a stay</a>
          <a className="button button-ghost" href="#about">Discover the guesthouse</a>
        </div>
      </div>
      <div className="hero-bottom">
        <span>A WARM WELCOME IN DENNILTON</span>
        <a href="#about" aria-label="Scroll to discover the guesthouse"><span className="scroll-line" /> SCROLL TO DISCOVER</a>
      </div>
    </section>
  );
}
