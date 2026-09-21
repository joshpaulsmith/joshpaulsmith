import type { Metadata } from 'next';
import { BarChart3, BriefcaseBusiness, GraduationCap, Scale, Users } from 'lucide-react';
import { CampaignFooter, CampaignHeader, ContactBand } from '@/components/campaign-shell';

export const metadata: Metadata = {
  title: 'Experience | Joshua P. Smith for Council',
  description: 'Joshua Smith’s business education, operations background and experience helping businesses build and scale.',
};

const qualifications = [
  {
    icon: GraduationCap,
    title: 'Bachelor’s degree in business',
    copy: 'A strong foundation in how organizations plan, allocate resources, evaluate opportunities and make responsible decisions.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business and operations',
    copy: 'A career focused primarily on the practical work of helping businesses build, improve and scale.',
  },
  {
    icon: BarChart3,
    title: 'Managing growth',
    copy: 'Experience balancing priorities, finding practical solutions and keeping attention on sustainable long-term results.',
  },
  {
    icon: Users,
    title: 'Clear communication',
    copy: 'An open, collaborative approach to decisions, expectations and accountability.',
  },
];

export default function ExperiencePage() {
  return (
    <main>
      <CampaignHeader />

      <section className="experience-hero">
        <div>
          <span className="overline">Education and experience</span>
          <h1>Business discipline for responsible local government.</h1>
          <p>
            Joshua brings a bachelor’s degree in business and a career built around helping businesses establish strong foundations, solve operational challenges and scale responsibly.
          </p>
        </div>
        <div className="experience-credential">
          <GraduationCap size={34} strokeWidth={1.6} aria-hidden="true" />
          <span>Academic foundation</span>
          <strong>Bachelor’s degree<br />in business</strong>
        </div>
      </section>

      <section className="qualification-section">
        <div className="qualification-grid">
          {qualifications.map(({ icon: Icon, title, copy }) => (
            <article key={title}>
              <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <div className="council-application">
          <div className="application-heading">
            <Scale size={29} strokeWidth={1.7} aria-hidden="true" />
            <span className="overline">Applied to Council</span>
            <h2>A practical qualification for fiscal policy.</h2>
          </div>
          <div className="application-copy">
            <p>
              Municipal fiscal policy requires more than reviewing a price tag. It requires understanding priorities, tradeoffs, long-term obligations and the value residents receive in return.
            </p>
            <p>
              Joshua’s education and business experience provide a grounded framework for asking the right questions, weighing risk and making responsible decisions with public money.
            </p>
          </div>
        </div>
      </section>

      <ContactBand />
      <CampaignFooter />
    </main>
  );
}
