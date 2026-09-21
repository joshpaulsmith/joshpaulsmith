import type { Metadata } from 'next';
import { Building2, CircleDollarSign, Eye, HeartHandshake, Route } from 'lucide-react';
import { CampaignFooter, CampaignHeader, ContactBand } from '@/components/campaign-shell';

export const metadata: Metadata = {
  title: 'Platform | Joshua P. Smith for Council',
  description: 'Joshua Smith’s priorities for responsible fiscal policy, local services and transparent council decisions.',
};

export const dynamic = 'force-static';

const priorities = [
  {
    icon: CircleDollarSign,
    title: 'Responsible fiscal policy',
    copy: 'Treat every tax dollar with care. Set clear priorities, understand the full cost of decisions and focus spending on measurable value for ratepayers.',
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
    copy: 'Continue investing in recreation, facilities and activities that bring neighbours together and make this a great place to raise a family.',
  },
  {
    icon: Eye,
    title: 'Open and accountable council',
    copy: 'Communicate project scope, cost and progress clearly. Give residents a meaningful opportunity to be heard before important decisions are made.',
  },
];

export default function PlatformPage() {
  return (
    <main>
      <CampaignHeader />

      <section className="page-intro page-intro-blue">
        <div>
          <span className="overline overline-light">The platform</span>
          <h1>Focused on the fundamentals.</h1>
          <p>A practical, transparent approach to the priorities that matter most to Township ratepayers.</p>
        </div>
      </section>

      <section className="platform-layout">
        <div className="fiscal-feature">
          <span className="overline">A responsible fiscal lens</span>
          <h2>Spend carefully. Plan for the long term. Show the value.</h2>
          <p>
            Joshua’s business background has been centred on helping businesses build and scale. He will bring that same disciplined approach to municipal decisions: define the need, understand the cost, consider the long-term impact and be accountable for the result.
          </p>
          <ol className="fiscal-checks">
            <li><span>01</span><strong>Is this needed?</strong></li>
            <li><span>02</span><strong>What is the full cost?</strong></li>
            <li><span>03</span><strong>What is the long-term value?</strong></li>
            <li><span>04</span><strong>How will results be reported?</strong></li>
          </ol>
        </div>

        <div className="platform-grid">
          {priorities.map(({ icon: Icon, title, copy }) => (
            <article className="platform-card" key={title}>
              <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
              <h2>{title}</h2>
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
