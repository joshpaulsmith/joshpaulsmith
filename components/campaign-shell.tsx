import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

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
      <div className="contact-heading">
        <span className="eyebrow eyebrow-light">Your voice matters</span>
        <h2>Let’s talk about our community.</h2>
      </div>
      <div className="contact-actions">
        <div className="contact-action-card">
          <a
            className="contact-action"
            href="tel:+17052575300"
            aria-label="Call Joshua Smith at 705 257 5300"
          >
            <Phone size={24} strokeWidth={1.8} aria-hidden="true" />
            <span className="contact-action-copy">
              <span className="contact-action-label">Call Joshua</span>
              <strong>(705) 257-5300</strong>
            </span>
          </a>
        </div>

        <div className="contact-action-card">
          <a
            className="contact-action"
            href="mailto:joshpaulsmith@outlook.com"
            aria-label="Email Joshua Smith at joshpaulsmith@outlook.com"
          >
            <Mail size={24} strokeWidth={1.8} aria-hidden="true" />
            <span className="contact-action-copy">
              <span className="contact-action-label">Email Joshua</span>
              <strong className="contact-email">joshpaulsmith@outlook.com</strong>
            </span>
          </a>
          <p className="sign-request">
            Request a campaign sign at{' '}
            <a
              href="mailto:joshpaulsmith@outlook.com?subject=Campaign%20sign%20request"
              aria-label="Email Joshua Smith to request a campaign sign"
            >
              joshpaulsmith@outlook.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
