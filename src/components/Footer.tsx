import Link from 'next/link';
import { shopConfig } from '../../config';
import styles from './Footer.module.css';

const quickLinks = [
  { href: '/',        label: 'Home' },
  { href: '/shop',    label: 'Shop' },
  { href: '/repair',  label: 'Book Repair' },
  { href: '/about',   label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Laptop Sales & Repair',
  'Desktop Assembly',
  'Component Upgrades',
  'Data Recovery',
  'AMC Plans',
  'Networking Setup',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top Strip */}
      <div className={styles.topStrip}>
        <div className="container">
          <div className={styles.stripInner}>
            <div className={styles.stripLeft}>
              <span className={styles.stripIcon}>📞</span>
              <div>
                <p className={styles.stripLabel}>Call or WhatsApp</p>
                <a href={`tel:${shopConfig.phone}`} className={styles.stripValue}>
                  {shopConfig.phone}
                </a>
              </div>
            </div>
            <div className={styles.stripDivider} />
            <div className={styles.stripLeft}>
              <span className={styles.stripIcon}>🕐</span>
              <div>
                <p className={styles.stripLabel}>Working Hours</p>
                <p className={styles.stripValue}>{shopConfig.workingHours}</p>
              </div>
            </div>
            <div className={styles.stripDivider} />
            <div className={styles.stripLeft}>
              <span className={styles.stripIcon}>📍</span>
              <div>
                <p className={styles.stripLabel}>Visit Us</p>
                <p className={styles.stripValue}>{shopConfig.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand Column */}
            <div className={styles.col}>
              <Link href="/" className={styles.logo}>
                <div className={styles.logoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 8h2l1 3 2-5 1 4h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={styles.logoText}>{shopConfig.name}</span>
              </Link>
              <p className={styles.brandDesc}>{shopConfig.description}</p>
              <div className={styles.socials}>
                {shopConfig.socials.instagram && (
                  <a href={shopConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                    </svg>
                  </a>
                )}
                {shopConfig.socials.facebook && (
                  <a href={shopConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                <a href={`https://wa.me/${shopConfig.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Quick Links</h3>
              <ul className={styles.linkList}>
                {quickLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>
                      <span className={styles.linkArrow}>›</span> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Services</h3>
              <ul className={styles.linkList}>
                {services.map(s => (
                  <li key={s}>
                    <span className={styles.serviceItem}>
                      <span className={styles.linkArrow}>›</span> {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Get in Touch</h3>
              <div className={styles.contactList}>
                <a href={`tel:${shopConfig.phone}`} className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span>{shopConfig.phone}</span>
                </a>
                <a href={`mailto:${shopConfig.email}`} className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <span>{shopConfig.email}</span>
                </a>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>{shopConfig.address}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>🕐</span>
                  <span>{shopConfig.workingHours}</span>
                </div>
              </div>
              <a
                href={`https://wa.me/${shopConfig.whatsapp.replace(/\D/g,'')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-cyan btn-sm ${styles.waBtn}`}
                id="footer-whatsapp-btn"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {year} {shopConfig.name}. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <span className={styles.bottomLink}>Privacy Policy</span>
              <span className={styles.dot}>·</span>
              <span className={styles.bottomLink}>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
