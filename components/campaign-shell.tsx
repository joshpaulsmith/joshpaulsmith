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
          font-family: var(--font-manrope), Arial, Helvetica, sans-serif;
        }

        .contact-section .contact-inner {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-section .contact-heading {
          max-width: 740px;
          margin: 0 auto 38px;
          text-align: center;
        }

        .contact-section .contact-eyebrow {
          display: block;
          margin-bottom: 18px;
          color: rgb(255 255 255 / 82%);
          font-size: 0.875rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .contact-section .contact-heading h2 {
          margin: 0;
          font-family: var(--font-newsreader), Georgia, serif;
          font-size: clamp(2.65rem, 5.4vw, 3.9rem);
          font-weight: 600;
          line-height: 1.04;
          letter-spacing: -0.04em;
          text-wrap: balance;
        }

        .contact-section .contact-heading p {
          max-width: 46ch;
          margin: 20px auto 0;
          color: rgb(255 255 255 / 90%);
          font-size: clamp(1rem, 1.35vw, 1.125rem);
          line-height: 1.6;
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
          gap: 18px;
          min-width: 0;
          padding: 26px 28px;
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
          gap: 7px;
          min-width: 0;
        }

        .contact-section .contact-label {
          color: rgb(255 255 255 / 80%);
          font-size: 0.875rem;
          font-weight: 750;
          letter-spacing: 0.08em;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .contact-section .contact-value {
          font-size: clamp(1.3rem, 2vw, 1.5rem);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.025em;
          overflow-wrap: anywhere;
        }

        .contact-section .contact-value-email {
          font-size: clamp(1rem, 1.55vw, 1.125rem);
        }

        .contact-section .contact-sign-note {
          grid-column: 2;
          margin: -2px 0 0;
          color: rgb(255 255 255 / 88%);
          font-size: 0.95rem;
          line-height: 1.55;
          text-align: center;
        }

        .contact-section .contact-sign-note a {
          color: #fff;
          font-weight: 750;
          text-decoration: underline;
          text-decoration-color: rgb(255 255 255 / 58%);
          text-underline-offset: 0.18em;
        }

        .contact-section .contact-sign-note a:hover {
          text-decoration-color: #fff;
        }

        .contact-section .contact-sign-note a:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 4px;
        }

        @media (min-width: 901px) {
          .contact-section .contact-eyebrow {
            font-size: 1rem;
          }

          .contact-section .contact-heading h2 {
            font-size: clamp(3.25rem, 5.4vw, 4.25rem);
          }

          .contact-section .contact-heading p {
            font-size: 1.25rem;
          }

          .contact-section .contact-label {
            font-size: 1rem;
          }

          .contact-section .contact-value {
            font-size: 1.65rem;
          }

          .contact-section .contact-value-email {
            font-size: 1.25rem;
          }

          .contact-section .contact-sign-note {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 900px) {
          .contact-section .contact-options {
            grid-template-columns: 1fr;
          }

          .contact-section .contact-sign-note {
            grid-column: 1;
            margin-top: 2px;
          }
        }

        @media (max-width: 700px) {
          .contact-section .contact-options {
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
            href="mailto:joshpaulsmith@outlook.com?subject=Township%20of%20St.%20Joseph%20Inquiry"
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

          <p className="contact-sign-note">
            Request a sign{' '}
            <a href="mailto:joshpaulsmith@outlook.com?subject=Sign%20Request">here</a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
