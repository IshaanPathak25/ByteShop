import type { Metadata } from 'next';
import Link from 'next/link';
import { shopConfig } from '../../config';
import { products, featuredProductIds } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: `${shopConfig.name} — ${shopConfig.tagline}`,
  description: shopConfig.description,
};

const featuredProducts = featuredProductIds
  .map(id => products.find(p => p.id === id))
  .filter(Boolean) as typeof products;

export default function HomePage() {
  return (
    <div className={styles.page}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={`badge badge-accent ${styles.heroBadge}`}>
              <span>⚡</span> Bangalore&apos;s Trusted Tech Shop
            </div>
            <h1 className={styles.heroTitle}>
              Premium Tech,<br />
              <span className="gradient-text">Expert Hands.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              {shopConfig.tagline} — sales, repairs, upgrades, and AMC plans.
              Walk in or book online in minutes.
            </p>
            <div className={styles.heroActions}>
              <Link href="/shop" className="btn btn-primary btn-lg" id="hero-shop-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Shop Now
              </Link>
              <Link href="/repair" className="btn btn-secondary btn-lg" id="hero-repair-btn">
                🔧 Book Repair
              </Link>
              <a href={`tel:${shopConfig.phone}`} className="btn btn-ghost btn-lg">
                📞 {shopConfig.phone}
              </a>
            </div>
            {/* Trust Indicators */}
            <div className={styles.trustRow}>
              {shopConfig.stats.map(stat => (
                <div key={stat.label} className={styles.trustItem}>
                  <span className={styles.trustValue}>{stat.value}</span>
                  <span className={styles.trustLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Hero Visual */}
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardInner}>
                <div className={styles.heroScreenBg} />
                <div className={styles.heroScreenContent}>
                  <div className={styles.heroMockbar}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.heroMockLines}>
                    {[100, 70, 85, 55, 90, 65].map((w, i) => (
                      <div key={i} className={styles.heroMockLine} style={{ width: `${w}%`, animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className={`${styles.floatBadge} ${styles.float1}`}>
                <span>✅</span> 5-Star Rating
              </div>
              <div className={`${styles.floatBadge} ${styles.float2}`}>
                <span>⚡</span> Same-Day Repair
              </div>
              <div className={`${styles.floatBadge} ${styles.float3}`}>
                <span>🛡️</span> Warranty Assured
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What We Do</p>
            <h2 className="section-title">Everything Tech, <span className="gradient-text">Under One Roof</span></h2>
            <p className="section-subtitle">
              From buying your next laptop to fixing the one you have — we&apos;ve got you covered.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {shopConfig.services.map((svc, i) => (
              <div key={svc.title} className={styles.serviceCard} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className={styles.serviceIcon}>{svc.icon}</div>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────── */}
      <section className={`section ${styles.featured}`}>
        <div className="container">
          <div className={styles.featuredHeader}>
            <div>
              <p className="section-eyebrow">Hot Picks</p>
              <h2 className="section-title">Featured <span className="gradient-text">Products</span></h2>
            </div>
            <Link href="/shop" className="btn btn-secondary">
              View All →
            </Link>
          </div>
          <div className={styles.productsGrid}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <section className={`section ${styles.whyUs}`}>
        <div className="container">
          <div className={styles.whyUsInner}>
            <div className={styles.whyUsLeft}>
              <p className="section-eyebrow">Why ByteShop?</p>
              <h2 className="section-title">Tech experts who <span className="gradient-text">actually care</span></h2>
              <p className={styles.whyUsDesc}>
                We&apos;re not a faceless e-commerce site. We&apos;re your neighborhood tech store
                with real people, real expertise, and a genuine interest in solving your problems.
              </p>
              <div className={styles.whyList}>
                {[
                  { icon: '✅', title: 'Transparent Pricing', desc: 'No hidden charges. We quote before we fix.' },
                  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most repairs done same day or within 24 hours.' },
                  { icon: '🛡️', title: 'Warranty on Repairs', desc: 'All our repair work comes with a 90-day warranty.' },
                  { icon: '🔧', title: 'Certified Technicians', desc: 'Years of hands-on experience with all brands.' },
                ].map(item => (
                  <div key={item.title} className={styles.whyItem}>
                    <div className={styles.whyItemIcon}>{item.icon}</div>
                    <div>
                      <h4 className={styles.whyItemTitle}>{item.title}</h4>
                      <p className={styles.whyItemDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.whyActions}>
                <Link href="/repair" className="btn btn-primary" id="why-repair-btn">Book a Repair</Link>
                <Link href="/about" className="btn btn-secondary">Learn More</Link>
              </div>
            </div>
            <div className={styles.whyUsRight}>
              <div className={styles.statsGrid}>
                {shopConfig.stats.map(stat => (
                  <div key={stat.label} className={styles.statCard}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Customer Love</p>
            <h2 className="section-title">What our customers <span className="gradient-text">say</span></h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {shopConfig.testimonials.map((t, i) => (
              <div key={t.name} className={styles.testimonialCard} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.testimonialAvatar}>{t.avatar}</div>
                  <div>
                    <p className={styles.testimonialName}>{t.name}</p>
                    <p className={styles.testimonialLoc}>{t.location}</p>
                  </div>
                  <div className="stars" style={{ marginLeft: 'auto' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < t.rating ? 'star' : 'star star-empty'}>★</span>
                    ))}
                  </div>
                </div>
                <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>
                Got a tech issue? <span className="gradient-text">Let&apos;s fix it.</span>
              </h2>
              <p className={styles.ctaSubtitle}>
                Book a repair online or walk into our store. We&apos;ll sort it out.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/repair" className="btn btn-primary btn-lg" id="cta-repair-btn">
                Book Repair Now
              </Link>
              <a
                href={`https://wa.me/${shopConfig.whatsapp.replace(/\D/g,'')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cyan btn-lg"
                id="cta-whatsapp-btn"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
