import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Landmark, Newspaper } from 'lucide-react';
import { CampaignFooter, CampaignHeader } from '@/components/campaign-shell';

const routes = [
  {
    href: '/platform',
    icon: Landmark,
    label: 'Platform',
    copy: 'Responsible fiscal policy and strong local services.',
  },
  {
    href: '/experience',
    icon: BriefcaseBusiness,
    label: 'Experience',
    copy: 'A business degree and a career helping businesses build and scale.',
  },
  {
    href: '/article',
    icon: Newspaper,
    label: 'Full article',
    copy: 'Read Joshua’s complete message to the community.',
  },
];

export default function Home() {
  return (
    <main>
      <CampaignHeader />

      <section className="home-hero">
        <div className="home-copy">
          <span className="overline">Joshua P. Smith for Council</span>
          <h1>Rooted here.<br /><em>Ready to serve.</em></h1>
          <p>
            A fifth-generation St. Joseph Islander bringing business experience, practical decision making and a responsible fiscal lens to Council.
          </p>
          <div className="credential-line">
            <BadgeCheck size={21} aria-hidden="true" />
            <span>Bachelor’s degree in business</span>
          </div>
          <Link className="primary-link" href="/platform">
            Read the platform <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="campaign-sign-section">
          <Image
            src="/campaign-sign.jpeg"
            alt="Vote Joshua P. Smith for Council, Rooted in our community"
            width={862}
            height={648}
            priority
          />
        </div>
      </section>

      <section className="route-grid" aria-label="Explore the campaign">
        {routes.map(({ href, icon: Icon, label, copy }) => (
          <Link className="route-card" href={href} key={href}>
            <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
            <div>
              <strong>{label}</strong>
              <span>{copy}</span>
            </div>
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        ))}
      </section>

      <CampaignFooter />
    </main>
  );
}
