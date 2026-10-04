import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export function CampaignHeader() {
  return (
    <header className="campaign-header">
      <div className="header-main">
        <Image
          className="header-logo"
          src="/township-logo.png"
          alt="Township of St. Joseph heritage logo"
          width={129}
          height={129}
          draggable={false}
        />

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
    <section
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <style>{`
        .contact-section {
          padding: clamp(48px, 7vw, 88px) 20px;
          background: linear-gradient(135deg, #b92636, #cb303f);
          color: #fff;
        }

        .contact-section .contact-inner {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-section .contact-heading {
          max-width: 700px;
          margin: 0 auto 32px;
          text-align: center;
        }

        .contact-section .contact-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #fff;
          font-size: 0.875rem;
          font-weight: 750;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contact-section .contact-heading h2 {
          margin: 0;
          font-family: var(--font-newsreader), Georgia, serif;
          font-size: clamp(2.1rem, 5vw, 3.5rem);
          font-weight: 610;
          line-height: 1.12;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .contact-section .contact-heading p {
          max-width: 48ch;
          margin: 18px auto 0;
          color: #fff;
          font-size: 1rem;
          line-height: 1.65;
          text-wrap: pretty;
        }

        .contact-section .contact-options {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .contact-section .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
          padding: 24px;
          border: 1px solid rgb(255 255 255 / 38%);
          border-radius: 8px;
          background: rgb(0 0 0 / 10%);
          color: #fff;
          text-align: left;
          text-decoration: none;
          transition: background 180ms ease, border-color 180ms ease;
        }

        .contact-section .contact-card:hover {
          border-color: #fff;
          background: rgb(0 0 0 / 18%);
        }

        .contact-section .contact-card:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 4px;
        }

        .contact-section .contact-icon {
          display: grid;
          place-items: center;
          flex: 0 0 48px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgb(255 255 255 / 14%);
        }

        .contact-section .contact-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .contact-section .contact-label {
          font-size: 0.875rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .contact-section .contact-value {
          font-size: 1.375rem;
          font-weight: 750;
          line-height: 1.4;
          overflow-wrap: anywhere;
        }

        .contact-section .contact-value-email {
          font-size: 1rem;
        }

        @media (max-width: 700px) {
          .contact-section .contact-options {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .contact-section .contact-card {
            gap: 14px;
            padding: 20px 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-section .contact-card {
            transition: none;
          }
        }
      `}</style>

      <div className="contact-inner">
        <header className="contact-heading">
          <span className="contact-eyebrow">Your voice matters</span>
          <h2 id="contact-heading">
            Let’s talk about our community.
          </h2>
          <p>
            Have a question or an idea for our Township? I’d love to hear
            from you.
          </p>
        </header>

        <div className="contact-options">
          <a
            className="contact-card"
            href="tel:+17052575300"
            aria-label="Call Joshua Smith at 705 257 5300"
          >
            <span className="contact-icon">
              <Phone
                size={24}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>

            <span className="contact-details">
              <span className="contact-label">Call Joshua</span>
              <strong className="contact-value">
                (705) 257-5300
              </strong>
            </span>
          </a>

          <a
            className="contact-card"
            href="mailto:joshpaulsmith@outlook.com"
            aria-label="Email Joshua Smith at joshpaulsmith@outlook.com"
          >
            <span className="contact-icon">
              <Mail
                size={24}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>

            <span className="contact-details">
              <span className="contact-label">Email Joshua</span>
              <strong className="contact-value contact-value-email">
                joshpaulsmith@outlook.com
              </strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}