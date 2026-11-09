import { ArrowUpRight, MapPin } from "lucide-react";
import { contact } from "@/lib/contact";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section className="location" id="location">
      <div className="location-inner section-wrap">
        <Reveal className="location-copy">
          <p className="eyebrow"><span className="eyebrow-rule" /> FIND YOUR WAY</p>
          <h2 className="display-heading">Discover <em>Dennilton.</em></h2>
          <p>
            Dlombi&apos;s Guesthouse is in Dennilton, South Africa. Use the map
            link to explore the town and plan your route. Contact us if you
            need help with directions.
          </p>
          <a className="button button-dark" href={contact.mapsHref} target="_blank" rel="noreferrer">
            <MapPin size={16} strokeWidth={1.6} /> Open map <ArrowUpRight size={16} strokeWidth={1.6} />
          </a>
        </Reveal>
        <Reveal className="location-card" delay={0.12}>
          <span className="location-card-index">LOCATION / 01</span>
          <span className="location-pin"><MapPin size={21} strokeWidth={1.3} /></span>
          <p className="location-place">Dennilton</p>
          <p className="location-country">South Africa</p>
          <span className="location-coordinates">SOUTH AFRICA</span>
          <a href={contact.mapsHref} target="_blank" rel="noreferrer" aria-label="View Dennilton on Google Maps">VIEW ON MAP <ArrowUpRight size={14} /></a>
        </Reveal>
      </div>
    </section>
  );
}
