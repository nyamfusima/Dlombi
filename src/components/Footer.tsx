import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/contact";
import { BedMark } from "./BedMark";

const footerLinks = [
  ["About", "#about"],
  ["Accommodation", "#accommodation"],
  ["Gallery", "#gallery"],
  ["Location", "#location"],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main section-wrap">
        <div className="footer-brand">
          <a className="brand brand-footer" href="#home" aria-label="Dlombi's Guesthouse home">
            <BedMark className="brand-mark" />
            <span className="brand-type"><span>Dlombi&apos;s</span><span>Guesthouse</span></span>
          </a>
          <p>Township &amp; rural accommodation<br />Dennilton, South Africa</p>
        </div>
        <div className="footer-links">
          <p className="footer-label">EXPLORE</p>
          {footerLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <div className="footer-contact">
          <p className="footer-label">SAY HELLO</p>
          <a href={contact.phoneHref}><Phone size={15} />{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}><Mail size={15} />{contact.email}</a>
          <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={15} />WhatsApp us <ArrowUpRight size={14} /></a>
        </div>
        <a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={20} /></a>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© {new Date().getFullYear()} Dlombi&apos;s Guesthouse</span>
        <span>Dennilton, South Africa</span>
        <a href="#privacy">Privacy information</a>
      </div>
      <details className="footer-privacy section-wrap" id="privacy">
        <summary>Privacy information</summary>
        <p>This website does not store enquiry form details on a guesthouse server. When you choose to enquire, your browser opens WhatsApp or your email app so you can review and send the message. Those services handle any message you send under their own privacy policies. For a privacy question, contact <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
      </details>
    </footer>
  );
}
