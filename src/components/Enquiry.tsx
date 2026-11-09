"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/contact";
import { Reveal } from "./Reveal";

type EnquiryFields = {
  name: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
};

const initialFields: EnquiryFields = {
  name: "",
  phone: "",
  email: "",
  checkIn: "",
  checkOut: "",
  guests: "1",
  message: "",
};

export function Enquiry() {
  const [fields, setFields] = useState(initialFields);
  const [error, setError] = useState("");
  const [showFallback, setShowFallback] = useState(false);

  const updateField = (field: keyof EnquiryFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
    setError("");
    setShowFallback(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fields.checkIn && fields.checkOut && fields.checkOut <= fields.checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }
    if (!fields.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!fields.phone.trim() && !fields.email.trim()) {
      setError("Please provide a phone number or email address so the guesthouse can reply.");
      return;
    }

    const message = [
      "Hello Dlombi's Guesthouse, I'd like to enquire about a stay.",
      "",
      `Name: ${fields.name.trim()}`,
      `Phone: ${fields.phone.trim() || "Not provided"}`,
      `Email: ${fields.email.trim() || "Not provided"}`,
      `Check-in: ${fields.checkIn || "Flexible / not provided"}`,
      `Check-out: ${fields.checkOut || "Flexible / not provided"}`,
      `Guests: ${fields.guests || "Not provided"}`,
      `Message: ${fields.message.trim() || "No additional message"}`,
      "",
      "I understand this is an enquiry and my stay is not confirmed until availability is agreed.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    const openedWindow = window.open(whatsappUrl, "_blank");
    if (openedWindow) openedWindow.opener = null;
    else setShowFallback(true);
  };

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent("Stay enquiry — Dlombi's Guesthouse")}&body=${encodeURIComponent(
    `Hello Dlombi's Guesthouse,\n\nI'd like to enquire about a stay.\n\nName: ${fields.name}\nPhone: ${fields.phone}\nEmail: ${fields.email}\nCheck-in: ${fields.checkIn}\nCheck-out: ${fields.checkOut}\nGuests: ${fields.guests}\n\n${fields.message}\n\nI understand this is an enquiry and my stay is not confirmed until availability is agreed.`,
  )}`;

  return (
    <section className="enquiry" id="contact">
      <div className="enquiry-inner section-wrap">
        <Reveal className="enquiry-intro">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-rule" /> START A CONVERSATION</p>
          <h2 className="display-heading">Planning <em>your stay?</em></h2>
          <p>We&apos;d love to hear from you. Get in touch with Dlombi&apos;s Guesthouse to enquire about your stay.</p>
          <div className="contact-details">
            <a href={contact.phoneHref}><Phone size={16} /> {contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}><Mail size={16} /> {contact.email}</a>
          </div>
          <span className="enquiry-watermark" aria-hidden="true">D</span>
        </Reveal>

        <Reveal className="enquiry-form-wrap" delay={0.12}>
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>STAY ENQUIRY</span>
              <span>01 — 07</span>
            </div>
            <div className="form-grid">
              <label>
                <span>Full name <b>*</b></span>
                <input autoComplete="name" name="name" value={fields.name} onChange={(event) => updateField("name", event.target.value)} required />
              </label>
              <label>
                <span>Phone number</span>
                <input autoComplete="tel" name="phone" type="tel" value={fields.phone} onChange={(event) => updateField("phone", event.target.value)} />
              </label>
              <label className="form-full">
                <span>Email address</span>
                <input autoComplete="email" name="email" type="email" value={fields.email} onChange={(event) => updateField("email", event.target.value)} />
              </label>
              <label>
                <span>Check-in</span>
                <input name="check-in" type="date" value={fields.checkIn} onChange={(event) => updateField("checkIn", event.target.value)} />
              </label>
              <label>
                <span>Check-out</span>
                <input name="check-out" type="date" min={fields.checkIn || undefined} value={fields.checkOut} onChange={(event) => updateField("checkOut", event.target.value)} />
              </label>
              <label className="form-full">
                <span>Number of guests</span>
                <input name="guests" type="number" min="1" value={fields.guests} onChange={(event) => updateField("guests", event.target.value)} />
              </label>
              <label className="form-full">
                <span>Anything else we should know?</span>
                <textarea name="message" rows={3} value={fields.message} onChange={(event) => updateField("message", event.target.value)} />
              </label>
            </div>
            {error && <p className="form-message form-error" role="alert">{error}</p>}
            {showFallback && <p className="form-message" role="status">WhatsApp did not open. You can send your enquiry by email instead.</p>}
            <button className="button button-form" type="submit"><MessageCircle size={17} /> Send enquiry via WhatsApp</button>
            {showFallback && <a className="email-fallback" href={mailto}><Mail size={16} /> Continue by email</a>}
            <p className="form-note">This sends an enquiry only. Your stay is not booked until the guesthouse confirms availability.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
