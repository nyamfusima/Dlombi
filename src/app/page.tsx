import { Accommodation } from "@/components/Accommodation";
import { Enquiry } from "@/components/Enquiry";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Location } from "@/components/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Accommodation />
      <Experience />
      <Gallery />
      <Location />
      <Enquiry />
    </>
  );
}
