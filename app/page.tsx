import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  HeartHandshake,
  Landmark,
  MapPin,
  Phone,
  Trees,
} from 'lucide-react';

const priorities = [
  {
    icon: HeartHandshake,
    number: '01',
    title: 'A place for families',
    copy: 'Continued investment in local activities, recreation and facilities that bring our community together.',
  },
  {
    icon: BriefcaseBusiness,
    number: '02',
    title: 'A strong local economy',
    copy: 'Practical support for small businesses and the people building their lives on St. Joseph Island.',
  },
  {
    icon: Trees,
    number: '03',
    title: 'Reliable essentials',
    copy: 'Safe, well-cared-for roads and dependable services delivered responsibly and fairly.',
  },
  {
    icon: Landmark,
    number: '04',
    title: 'Open local government',
    copy: 'Clear communication about projects, costs and decisions — with meaningful opportunities to be heard.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Joshua P. Smith campaign home">
          <span className="wordmark-name">JOSHUA P. SMITH</span>
          <span className="wordmark-role">FOR COUNCIL</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#priorities">Priorities</a>
          <a href="#story">Meet Joshua</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="tel:+17052575300">
          <Phone size={16} aria-hidden="true" />
          <span>705.257.5300</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            Township of St. Joseph
          </div>
          <h1>
            Rooted here.
            <br />
            <span>Ready to serve.</span>
          </h1>
          <p className="hero-lede">
            Joshua P. Smith is running for Council to give back to the community that has given his family so much — and to help build a strong future for the next generation.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#story">
              Meet Joshua <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#priorities">
              His priorities <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="home-note">
            <MapPin size={18} aria-hidden="true" />
            Proud fifth-generation St. Joseph Islander
          </div>
        </div>

        <div className="hero-visual">
          <div className="sign-frame">
            <img
              src="/campaign-sign.jpeg"
              alt="Campaign sign reading Vote Joshua P. Smith for Council, Rooted in our community"
              width="862"
              height="648"
              fetchPriority="high"
            />
          </div>
          <div className="ballot-note">
            <Check size={18} strokeWidth={3} aria-hidden="true" />
            <span>Your voice at the council table</span>
          </div>
        </div>
      </section>

      <div className="trust-strip" aria-label="Campaign values">
        <span>Community</span>
        <i aria-hidden="true" />
        <span>Responsibility</span>
        <i aria-hidden="true" />
        <span>Transparency</span>
        <i aria-hidden="true" />
        <span>Local roots</span>
      </div>

      <section className="priorities section" id="priorities">
        <div className="section-heading">
          <p className="section-kicker">Focused on what matters</p>
          <h2>Strong roots. A thoughtful path forward.</h2>
          <p>
            A practical, community-first approach to the fundamentals ratepayers depend on.
          </p>
        </div>
        <div className="priority-grid">
          {priorities.map(({ icon: Icon, number, title, copy }) => (
            <article className="priority-card" key={number}>
              <div className="priority-topline">
                <span className="priority-icon"><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></span>
                <span className="priority-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="family-section" id="story">
        <div className="family-photo-wrap">
          <img
            src="/family.jpeg"
            alt="Joshua Smith with his wife and their two children"
            width="5958"
            height="3972"
            loading="lazy"
          />
          <div className="photo-caption">
            <span>Family. Community. Future.</span>
            <small>St. Joseph Island</small>
          </div>
        </div>

        <article className="article-copy">
          <p className="section-kicker">In his own words</p>
          <h2>Josh Smith runs for Council in the Township of St. Joseph.</h2>
          <p className="article-intro">
            My name is Joshua Smith, and I am a proud fifth-generation St. Joseph Islander.
          </p>
          <p>
            My family has called the Island home for over 100 years, and today my family and I are continuing to grow those roots, with our third child expected at the end of this year.
          </p>
          <p>
            A major inspiration behind my decision to run for council is my late grandmother, Maria Smith. She loved St. Joseph Island, was deeply involved in the community and believed in contributing to the place we call home. More importantly, she taught me the value of hard work and giving back.
          </p>
          <p>
            As more young families choose to make the Township of St. Joseph their home, I want to be a strong voice for them, preserving what makes our community so special while also building toward its future. I want to see continued investment in local activities, recreation and facilities that bring our community together and make the Township a great place to raise a family.
          </p>
          <blockquote>
            “Council should be accessible and accountable to the community it represents.”
          </blockquote>
          <p>
            I also want to focus on the fundamentals that matter to ratepayers. Supporting our small businesses and local economy, keeping our roads safe and well cared for, maintaining the services our residents depend on and making sure every tax dollar is spent responsibly and fairly.
          </p>
          <p>
            I believe strongly in grassroots communication and transparency. Ratepayers should know what projects are being considered, what they will cost and how their tax dollars are being spent. They should also have a meaningful opportunity to be heard before important decisions are made. Council should be accessible and accountable to the community it represents.
          </p>
          <p>
            I have a degree in business and a background primarily in business and operations. Open communication, responsible decision making, managing priorities and finding practical solutions have served me well throughout my career, and I would bring that same approach to council.
          </p>
          <p>
            For me, running for council is about giving back to a community that has given my family so much while making thoughtful, responsible decisions for its future.
          </p>
          <p>
            I am proud of my family’s deep roots here, proud to be raising my children here, and ready to do my part for the future of the Township of St. Joseph. I hope I can count on your support in the upcoming election.
          </p>
          <p className="signature">Joshua Smith</p>
        </article>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-kicker section-kicker-light">Let’s talk</p>
          <h2>Your questions and ideas matter.</h2>
          <p>
            Joshua would be pleased to talk with residents and answer questions about his intentions as a Councillor.
          </p>
        </div>
        <a className="contact-number" href="tel:+17052575300" aria-label="Call Joshua Smith at 705 257 5300">
          <span>Reach Joshua directly</span>
          <strong>705.257.5300</strong>
          <ArrowRight size={28} aria-hidden="true" />
        </a>
      </section>

      <footer>
        <a className="wordmark wordmark-light" href="#top">
          <span className="wordmark-name">JOSHUA P. SMITH</span>
          <span className="wordmark-role">FOR COUNCIL</span>
        </a>
        <p>Rooted in our community.</p>
        <small>Joshua P. Smith for Council · 2026</small>
      </footer>
    </main>
  );
}
