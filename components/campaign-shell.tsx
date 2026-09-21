/* oxlint-disable nextjs/no-html-link-for-pages -- Static GitHub Pages routes require full page loads. */
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/platform.html', label: 'Platform' },
  { href: '/bio.html', label: 'Bio' },
];

export function CampaignHeader() {
  return (
    <header className="campaign-header">
      <div className="header-main">
        <a className="township-lockup" href="/" aria-label="Township of St. Joseph campaign home">
          <Image src="/township-logo.png" alt="Township of St. Joseph heritage logo" width={129} height={129} />
          <span>Township of St. Joseph</span>
        </a>

        <a className="candidate-mark" href="/" aria-label="Joshua P. Smith campaign home">
          <strong>Joshua P. Smith</strong>
          <span>For Council</span>
        </a>

        <span className="header-balance" aria-hidden="true" />
      </div>

      <nav className="campaign-nav" aria-label="Campaign navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>{item.label}</a>
        ))}
      </nav>
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
      <p>Rooted in our community.</p>
      <small>Joshua P. Smith for Council · 2026</small>
    </footer>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band">
      <div>
        <span className="overline overline-light">Talk with Joshua</span>
        <h2>Questions, ideas or concerns?</h2>
      </div>
      <a href="tel:+17052575300" aria-label="Call Joshua Smith at 705 257 5300">
        <span>Call directly</span>
        <strong>(705) 257-5300</strong>
        <ArrowRight size={26} aria-hidden="true" />
      </a>
    </section>
  );
}
