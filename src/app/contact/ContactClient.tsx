'use client';

import { shopConfig } from '../../../config';
import styles from './page.module.css';

export default function ContactPageClient() {
  const waNumber = shopConfig.whatsapp.replace(/\D/g, '');

  return (
    <div className="container">
      <div className={styles.layout}>
        {/* Left — Info */}
        <div className={styles.infoCol}>
          {/* Quick Contact Cards */}
          <div className={styles.contactCards}>
            <a href={`tel:${shopConfig.phone}`} className={styles.contactCard} id="contact-call-btn">
              <span className={styles.contactCardIcon}>📞</span>
              <div>
                <p className={styles.contactCardLabel}>Call Us</p>
                <p className={styles.contactCardValue}>{shopConfig.phone}</p>
                <p className={styles.contactCardNote}>Mon–Sat, 10 AM – 8 PM</p>
              </div>
            </a>
            <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" className={`${styles.contactCard} ${styles.contactCardWa}`} id="contact-whatsapp-btn">
              <span className={styles.contactCardIcon}>💬</span>
              <div>
                <p className={styles.contactCardLabel}>WhatsApp</p>
                <p className={styles.contactCardValue}>{shopConfig.whatsapp}</p>
                <p className={styles.contactCardNote}>Instant replies during working hours</p>
              </div>
            </a>
            <a href={`mailto:${shopConfig.email}`} className={styles.contactCard} id="contact-email-btn">
              <span className={styles.contactCardIcon}>✉️</span>
              <div>
                <p className={styles.contactCardLabel}>Email</p>
                <p className={styles.contactCardValue}>{shopConfig.email}</p>
                <p className={styles.contactCardNote}>We reply within 24 hours</p>
              </div>
            </a>
          </div>

          {/* Address Card */}
          <div className={styles.addressCard}>
            <h2 className={styles.addressTitle}>Visit Our Store</h2>
            <div className={styles.addressInfo}>
              <div className={styles.addressItem}>
                <span className={styles.addressIcon}>📍</span>
                <div>
                  <p className={styles.addressLabel}>Address</p>
                  <p className={styles.addressValue}>{shopConfig.address}</p>
                </div>
              </div>
              <div className={styles.addressItem}>
                <span className={styles.addressIcon}>🕐</span>
                <div>
                  <p className={styles.addressLabel}>Working Hours</p>
                  <p className={styles.addressValue}>{shopConfig.workingHours}</p>
                </div>
              </div>
              <div className={styles.addressItem}>
                <span className={styles.addressIcon}>📅</span>
                <div>
                  <p className={styles.addressLabel}>Days Open</p>
                  <p className={styles.addressValue}>{shopConfig.workingDays}</p>
                </div>
              </div>
            </div>
            <div className={styles.addressActions}>
              <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Hi! I'd like to visit your store. Can you share directions?")}`} target="_blank" rel="noopener noreferrer" className="btn btn-cyan" style={{ flex: 1, justifyContent: 'center' }}>
                💬 WhatsApp for Directions
              </a>
            </div>
          </div>
        </div>

        {/* Right — Map + Form */}
        <div className={styles.mapCol}>
          {/* Map */}
          <div className={styles.mapWrap}>
            <iframe
              title="Store location map"
              src={shopConfig.mapEmbedUrl}
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form */}
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Send Us a Message</h2>
            <form className={styles.form} onSubmit={e => { e.preventDefault(); alert('Message sent! We\'ll get back to you soon.'); }}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="c-name">Name *</label>
                  <input id="c-name" className="input" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="c-phone">Phone *</label>
                  <input id="c-phone" className="input" placeholder="+91 98765 43210" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-subject">Subject *</label>
                <input id="c-subject" className="input" placeholder="How can we help?" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-message">Message *</label>
                <textarea id="c-message" className="textarea" placeholder="Describe your query…" required />
              </div>
              <button id="contact-submit-btn" type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
