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

  <a
    href="tel:+17052575300"
    aria-label="Call Joshua Smith at 705 257 5300"
  >
    <Phone size={22} strokeWidth={1.8} aria-hidden="true" />
    <span>Call Joshua</span>
    <strong>(705) 257-5300</strong>
  </a>

  <a
    href="mailto:joshpaulsmith@outlook.com"
    aria-label="Email Joshua Smith at joshpaulsmith@outlook.com"
    style={{ gridTemplateColumns: 'auto minmax(0, 1fr)' }}
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
    <span>Email Joshua</span>
    <strong
      style={{
        fontSize: 'clamp(1rem, 4.5vw, 1.6rem)',
        overflowWrap: 'anywhere',
      }}
    >
      joshpaulsmith@outlook.com
    </strong>
  </a>
</section>
  );
}
