import Image from 'next/image';
import { CampaignFooter, CampaignHeader, ContactBand } from '@/components/campaign-shell';

const priorities = [
  {
    title: 'Roads, core services and community preservation',
    copy: 'Prioritize safe, well-maintained roads and dependable core services while protecting the character, heritage and natural setting that make our Township home.',
  },
  {
    title: 'Families and community life',
    copy: 'Support recreation, facilities and activities that bring neighbours together and make the Township a place where families can build their lives.',
  },
  {
    title: 'Responsible and transparent fiscal policy',
    copy: 'Treat every tax dollar with care, explain costs and decisions clearly, and give ratepayers a meaningful voice before commitments are made.',
  },
  {
    title: 'Local businesses and the Island economy',
    copy: 'Support the people building businesses here and strengthen the conditions for local employers, entrepreneurs and responsible growth.',
  },
];

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main>
      <CampaignHeader />

      <section className="opening-sign-section" aria-label="Joshua P. Smith for Council">
        <figure className="opening-sign">
          <Image
            src="/campaign-sign.jpeg"
            alt="Vote Joshua P. Smith for Council, Rooted in our community"
            width={862}
            height={648}
            draggable={false}
            priority
          />
        </figure>
      </section>

      <article className="candidate-letter">
        <header className="letter-heading">
          <aside className="publication-note" aria-label="Original publication details">
            <div>
              <span>First published in Island Clippings</span>
              <strong>September 10, 2026</strong>
            </div>
            <a href="https://islandclippings.com/issues/issue_1567.pdf" target="_blank" rel="noreferrer">
              Read the original Clippings article here
            </a>
          </aside>

          <h1>Why I am running</h1>
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
          </div>
        </div>

        <div className="letter-closing">
          <p className="signature">Joshua Smith</p>

          <figure className="letter-family-photo">
            <Image
              src="/family.jpeg"
              alt="Joshua Smith with his wife and their two children"
              width={2400}
              height={1600}
              draggable={false}
            />
          </figure>
        </div>
      </article>

      <section className="platform-section" id="platform">
        <header className="section-heading platform-heading">
          <span className="eyebrow">The platform</span>
          <h2>What I find important.</h2>
          <p>A practical, transparent approach to the priorities that matter most to Township ratepayers.</p>
        </header>

        <div className="priority-grid">
          {priorities.map(({ title, copy }) => (
            <article className="priority-item" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactBand />
      <CampaignFooter />
    </main>
  );
}
