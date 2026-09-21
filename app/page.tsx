import Image from 'next/image';
import { Building2, CircleDollarSign, Eye, HeartHandshake, Phone, Route } from 'lucide-react';
import { CampaignFooter, CampaignHeader, ContactBand } from '@/components/campaign-shell';

const priorities = [
  {
    icon: CircleDollarSign,
    title: 'Responsible fiscal policy',
    copy: 'Treat every tax dollar with care, understand the full cost of decisions and focus spending on measurable value for ratepayers.',
  },
  {
    icon: Building2,
    title: 'Local business and economy',
    copy: 'Support the people building businesses here and strengthen the conditions that help our local economy grow.',
  },
  {
    icon: Route,
    title: 'Roads and core services',
    copy: 'Keep roads safe and well cared for while protecting the dependable services residents use every day.',
  },
  {
    icon: HeartHandshake,
    title: 'Families and community life',
    copy: 'Invest in recreation, facilities and activities that bring neighbours together and make this a great place to raise a family.',
  },
  {
    icon: Eye,
    title: 'Open and accountable council',
    copy: 'Communicate project scope, cost and progress clearly, and give residents a meaningful opportunity to be heard.',
  },
];

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main>
      <CampaignHeader />

      <section className="campaign-hero">
        <div className="hero-copy">
          <span className="eyebrow">Joshua P. Smith for Council</span>
          <h1>Rooted here.<br /><em>Ready to serve.</em></h1>
          <p>
            A fifth-generation St. Joseph Islander bringing business experience, practical decision making and a responsible fiscal lens to Council.
          </p>
          <div className="hero-actions">
            <a className="phone-button" href="tel:+17052575300" aria-label="Call Joshua Smith at 705 257 5300">
              <Phone size={19} strokeWidth={1.8} aria-hidden="true" />
              <span>Call Joshua</span>
              <strong>(705) 257-5300</strong>
            </a>
            <a className="text-link" href="#platform">See the platform</a>
          </div>
          <div className="hero-notes" aria-label="Candidate background">
            <span>Fifth-generation Islander</span>
            <span>Business and operations</span>
          </div>
        </div>

        <figure className="campaign-sign">
          <Image
            src="/campaign-sign.jpeg"
            alt="Vote Joshua P. Smith for Council, Rooted in our community"
            width={862}
            height={648}
            priority
          />
          <figcaption>Your voice at the Council table</figcaption>
        </figure>
      </section>

      <section className="platform-section" id="platform">
        <header className="section-heading section-heading-light">
          <span className="eyebrow eyebrow-light">The platform</span>
          <h2>Focused on the fundamentals.</h2>
          <p>A practical, transparent approach to the priorities that matter most to Township ratepayers.</p>
        </header>

        <div className="priority-grid">
          {priorities.map(({ icon: Icon, title, copy }, index) => (
            <article className="priority-item" key={title}>
              <div className="priority-marker">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="family-section">
        <figure className="family-photo">
          <Image
            src="/family.jpeg"
            alt="Joshua Smith with his wife and their two children"
            width={2400}
            height={1600}
          />
        </figure>
        <div className="family-copy">
          <span className="eyebrow">Meet Joshua</span>
          <h2>Deep roots.<br />A practical perspective.</h2>
          <p className="family-lead">Joshua is a fifth-generation St. Joseph Islander, husband, father and business professional ready to serve his community.</p>
          <p>His family has called the Island home for more than 100 years. Today, Joshua and his family are continuing to grow those roots while building a future here for the next generation.</p>
          <div className="family-facts">
            <div><strong>5th</strong><span>generation Islander</span></div>
            <div><strong>100+</strong><span>years of family roots</span></div>
          </div>
        </div>
      </section>

      <article className="candidate-letter">
        <header className="letter-heading">
          <span className="eyebrow">In his own words</span>
          <h2>Why I am running</h2>
          <blockquote>“Council should be accessible and accountable to the community it represents.”</blockquote>
        </header>

        <div className="letter-copy">
          <div>
            <p className="lead">My name is Joshua Smith, and I am a proud fifth-generation St. Joseph Islander.</p>
            <p>My family has called the Island home for over 100 years, and today my family and I are continuing to grow those roots, with our third child expected at the end of this year.</p>
            <p>A major inspiration behind my decision to run for council is my late grandmother, Maria Smith. She loved St. Joseph Island, was deeply involved in the community and believed in contributing to the place we call home. More importantly, she taught me the value of hard work and giving back.</p>
            <p>As more young families choose to make the Township of St. Joseph their home, I want to be a strong voice for them, preserving what makes our community so special while also building toward its future. I want to see continued investment in local activities, recreation and facilities that bring our community together and make the Township a great place to raise a family.</p>
          </div>

          <div>
            <p>I also want to focus on the fundamentals that matter to ratepayers. Supporting our small businesses and local economy, keeping our roads safe and well cared for, maintaining the services our residents depend on and making sure every tax dollar is spent responsibly and fairly.</p>
            <p>I believe strongly in grassroots communication and transparency. Ratepayers should know what projects are being considered, what they will cost and how their tax dollars are being spent. They should also have a meaningful opportunity to be heard before important decisions are made.</p>
            <p>My background is primarily in business and operations. Open communication, responsible decision making, managing priorities and finding practical solutions have served me well throughout my career, and I would bring that same approach to council.</p>
            <p>For me, running for council is about giving back to a community that has given my family so much while making thoughtful, responsible decisions for its future.</p>
            <p>I am proud of my family’s deep roots here, proud to be raising my children here, and ready to do my part for the future of the Township of St. Joseph. I hope I can count on your support in the upcoming election.</p>
            <p className="signature">Joshua Smith</p>
          </div>
        </div>
      </article>

      <ContactBand />
      <CampaignFooter />
    </main>
  );
}
