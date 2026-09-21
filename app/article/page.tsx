import type { Metadata } from 'next';
import Image from 'next/image';
import { CampaignFooter, CampaignHeader, ContactBand } from '@/components/campaign-shell';

export const metadata: Metadata = {
  title: 'A Message from Joshua | Joshua P. Smith for Council',
  description: 'Read Joshua Smith’s full message to residents of the Township of St. Joseph.',
};

export default function ArticlePage() {
  return (
    <main>
      <CampaignHeader />

      <section className="page-intro article-intro-layout">
        <div>
          <span className="overline">In his own words</span>
          <h1>Josh Smith runs for Council in the Township of St. Joseph.</h1>
          <p>Family roots, community service and a practical plan for the future.</p>
        </div>
        <Image
          src="/family.jpeg"
          alt="Joshua Smith with his wife and their two children"
          width={2400}
          height={1600}
          priority
        />
      </section>

      <article className="longform">
        <p className="lead">My name is Joshua Smith, and I am a proud fifth-generation St. Joseph Islander.</p>

        <p>My family has called the Island home for over 100 years, and today my family and I are continuing to grow those roots, with our third child expected at the end of this year.</p>

        <p>A major inspiration behind my decision to run for council is my late grandmother, Maria Smith. She loved St. Joseph Island, was deeply involved in the community and believed in contributing to the place we call home. More importantly, she taught me the value of hard work and giving back.</p>

        <p>As more young families choose to make the Township of St. Joseph their home, I want to be a strong voice for them, preserving what makes our community so special while also building toward its future. I want to see continued investment in local activities, recreation and facilities that bring our community together and make the Township a great place to raise a family.</p>

        <blockquote>“Council should be accessible and accountable to the community it represents.”</blockquote>

        <p>I also want to focus on the fundamentals that matter to ratepayers. Supporting our small businesses and local economy, keeping our roads safe and well cared for, maintaining the services our residents depend on and making sure every tax dollar is spent responsibly and fairly.</p>

        <p>I believe strongly in grassroots communication and transparency. Ratepayers should know what projects are being considered, what they will cost and how their tax dollars are being spent. They should also have a meaningful opportunity to be heard before important decisions are made. Council should be accessible and accountable to the community it represents.</p>

        <p>I have a bachelor’s degree in business and a background primarily in business and operations. Open communication, responsible decision making, managing priorities and finding practical solutions have served me well throughout my career, and I would bring that same approach to council.</p>

        <p>For me, running for council is about giving back to a community that has given my family so much while making thoughtful, responsible decisions for its future.</p>

        <p>I am proud of my family’s deep roots here, proud to be raising my children here, and ready to do my part for the future of the Township of St. Joseph. I hope I can count on your support in the upcoming election.</p>

        <p className="signature">Joshua Smith</p>
      </article>

      <ContactBand />
      <CampaignFooter />
    </main>
  );
}
