import Image from 'next/image';
import { Phone } from 'lucide-react';

export function CampaignHeader() {
  return (
    <header className="campaign-header">
      <div className="header-main">
        <Image className="header-logo" src="/township-logo.png" alt="Township of St. Joseph heritage logo" width={129} height={129} draggable={false} />

        <div className="candidate-mark">
          <strong>Joshua P. Smith</strong>
          <span>For Council</span>
        </div>

        <p className="header-township">Township of St. Joseph</p>
      </div>
    </header>
  );
}

export function CampaignFooter() {
  return (
    <footer className="campaign-footer">
      <div>
        <strong>Joshua P. Smith</strong>
        <span>For Council</span>
      </div>
      <p>Rooted in our community</p>
      <small>Township of St. Joseph · 2026</small>
    </footer>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band">
      <div>
        <span className="eyebrow eyebrow-light">Your voice matters</span>
        <h2>Let’s talk about our community.</h2>
      </div>
      <a href="tel:+17052575300" aria-label="Call Joshua Smith at 705 257 5300">
        <Phone size={22} strokeWidth={1.8} aria-hidden="true" />
        <span>Call Joshua</span>
        <strong>(705) 257-5300</strong>
      </a>
    </section>
  );
}
