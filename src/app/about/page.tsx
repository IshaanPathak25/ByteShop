import type { Metadata } from 'next';
import Link from 'next/link';
import { shopConfig } from '../../../config';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${shopConfig.name} — ${shopConfig.description}`,
};

const values = [
  { icon: '🎯', title: 'Customer First', desc: 'Every decision we make starts with asking: what\'s best for our customer? No shortcuts, no hidden agendas.' },
  { icon: '🔍', title: 'Transparency', desc: 'We diagnose before we fix. We quote before we touch. No surprises on your bill — ever.' },
  { icon: '⚡', title: 'Speed & Quality', desc: 'We believe fast and good aren\'t mutually exclusive. Most repairs are done same-day without compromising quality.' },
  { icon: '🌱', title: 'Always Learning', desc: 'Technology evolves fast. Our team is constantly upskilling to handle the latest hardware and software.' },
  { icon: '🤝', title: 'Community', desc: 'We\'re a neighborhood shop, not a faceless company. We know our customers by name, not by order number.' },
  { icon: '♻️', title: 'Sustainability', desc: 'We encourage repairs over replacements. Good for your wallet, good for the planet.' },
];

const milestones = [
  { year: '2014', event: 'ByteShop founded with a single workbench and a big dream.' },
  { year: '2016', event: 'Expanded to a full storefront. Started offering enterprise AMC plans.' },
  { year: '2019', event: 'Crossed 1,000+ happy customers. Launched online booking.' },
  { year: '2022', event: 'Opened our second service center. Launched same-day repair guarantee.' },
  { year: '2024', event: 'Serving 5,000+ customers with a team of 12 certified technicians.' },
];

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <p className="section-eyebrow">Our Story</p>
          <h1 className="page-header-title">About {shopConfig.name}</h1>
          <p className="page-header-sub">A decade of honest tech service — and we&apos;re just getting started</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className={styles.storyLayout}>
            <div className={styles.storyText}>
              <p className="section-eyebrow">Who We Are</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Born from a love of <span className="gradient-text">technology</span>
              </h2>
              <p className={styles.storyPara}>
                {shopConfig.name} started in 2014 with one bench, two hands, and an obsession with getting things right.
                What began as a small repair shop tucked in a corner has grown into Bangalore&apos;s most trusted
                computer service center — without ever losing that personal touch.
              </p>
              <p className={styles.storyPara}>
                We believe technology should work for you, not against you. Whether you need a new laptop, a gaming PC
                built from scratch, or your old machine brought back to life — we approach every job with the same
                attention to detail and honest service.
              </p>
              <p className={styles.storyPara}>
                Over 5,000 customers later, we&apos;re still the same shop at heart — just bigger, better, and more
                determined to be your go-to tech partner.
              </p>
              <div className={styles.storyStats}>
                {shopConfig.stats.map(stat => (
                  <div key={stat.label} className={styles.storyStat}>
                    <span className={styles.storyStatVal}>{stat.value}</span>
                    <span className={styles.storyStatLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.storyRight}>
              {/* Timeline */}
              <div className={styles.timeline}>
                <h3 className={styles.timelineTitle}>Our Journey</h3>
                {milestones.map((m, i) => (
                  <div key={m.year} className={styles.milestone}>
                    <div className={styles.milestoneYear}>{m.year}</div>
                    <div className={styles.milestoneDot} />
                    <div className={styles.milestoneEvent}>{m.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What Drives Us</p>
            <h2 className="section-title">Our Core <span className="gradient-text">Values</span></h2>
            <p className="section-subtitle">These aren&apos;t just words on a wall. They&apos;re how we operate every day.</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Ready to experience the <span className="gradient-text">difference?</span></h2>
            <p className={styles.ctaDesc}>Visit our store or book a repair online. We&apos;d love to meet you.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary btn-lg">Visit Us</Link>
              <Link href="/repair" className="btn btn-secondary btn-lg">Book a Repair</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
