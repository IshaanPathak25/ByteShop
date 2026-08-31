'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { shopConfig } from '../../../config';
import styles from './page.module.css';

const deviceTypes = ['Laptop', 'Desktop / PC', 'All-in-One', 'Gaming Console', 'Printer', 'Other'];

const issueTypes = [
  'Not turning on / No power',
  'Screen damaged / cracked',
  'Keyboard / Touchpad issue',
  'Slow performance',
  'Virus / Malware removal',
  'Data recovery',
  'Battery not charging',
  'Overheating',
  'Wi-Fi / Connectivity issue',
  'Other / Describe below',
];

const steps = [
  { icon: '📋', title: 'Book Online', desc: 'Fill out our quick repair booking form. It takes less than 2 minutes.' },
  { icon: '📞', title: 'We Confirm', desc: 'Our team will call you to confirm the appointment and give you an estimate.' },
  { icon: '🔧', title: 'We Fix It', desc: 'Drop your device at our store or schedule a pickup. We get it done.' },
  { icon: '✅', title: 'Pick Up', desc: 'Collect your repaired device with a full warranty on our work.' },
];

export default function RepairPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', deviceType: '', brand: '', model: '', issue: '', issueDesc: '', date: '', time: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🔧 *Repair Booking Request*\n\nName: ${form.name}\nPhone: ${form.phone}\nDevice: ${form.deviceType} - ${form.brand} ${form.model}\nIssue: ${form.issue}\nDescription: ${form.issueDesc}\nPreferred Date: ${form.date} ${form.time}`
    );
    window.open(`https://wa.me/${shopConfig.whatsapp.replace(/\D/g,'')}?text=${msg}`, '_blank');
    setSubmitted(true);
  }

  return (
    <div className="page-wrapper">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <p className="section-eyebrow">Repair Service</p>
          <h1 className="page-header-title">Book a Repair</h1>
          <p className="page-header-sub">Fast, reliable, and transparent — we fix all brands</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          {/* Left — Form */}
          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>🎉</span>
                <h2>Booking Sent!</h2>
                <p>Your repair request has been sent via WhatsApp. We&apos;ll confirm your appointment shortly.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Book Another</button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.formTitle}>Repair Booking Form</h2>

                {/* Contact */}
                <div className={styles.formSection}>
                  <h3 className={styles.formSectionTitle}>Your Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="r-name">Full Name *</label>
                      <input id="r-name" name="name" className="input" placeholder="Rahul Sharma" required value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="r-phone">Phone Number *</label>
                      <input id="r-phone" name="phone" className="input" placeholder="+91 98765 43210" required value={form.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="r-email">Email Address</label>
                    <input id="r-email" name="email" type="email" className="input" placeholder="rahul@email.com" value={form.email} onChange={handleChange} />
                  </div>
                </div>

                {/* Device */}
                <div className={styles.formSection}>
                  <h3 className={styles.formSectionTitle}>Device Information</h3>
                  <div className="form-group">
                    <label className="form-label" htmlFor="r-deviceType">Device Type *</label>
                    <select id="r-deviceType" name="deviceType" className="select" required value={form.deviceType} onChange={handleChange}>
                      <option value="">Select device type…</option>
                      {deviceTypes.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="r-brand">Brand *</label>
                      <input id="r-brand" name="brand" className="input" placeholder="Dell, HP, Lenovo…" required value={form.brand} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="r-model">Model</label>
                      <input id="r-model" name="model" className="input" placeholder="Inspiron 15, ThinkPad…" value={form.model} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                {/* Issue */}
                <div className={styles.formSection}>
                  <h3 className={styles.formSectionTitle}>Issue Details</h3>
                  <div className="form-group">
                    <label className="form-label" htmlFor="r-issue">Type of Issue *</label>
                    <select id="r-issue" name="issue" className="select" required value={form.issue} onChange={handleChange}>
                      <option value="">Select issue type…</option>
                      {issueTypes.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="r-issueDesc">Describe the Problem</label>
                    <textarea id="r-issueDesc" name="issueDesc" className="textarea" placeholder="Please describe what's happening in more detail…" value={form.issueDesc} onChange={handleChange} />
                  </div>
                </div>

                {/* Schedule */}
                <div className={styles.formSection}>
                  <h3 className={styles.formSectionTitle}>Preferred Schedule</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="r-date">Preferred Date</label>
                      <input id="r-date" name="date" type="date" className="input" value={form.date} onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="r-time">Preferred Time</label>
                      <select id="r-time" name="time" className="select" value={form.time} onChange={handleChange}>
                        <option value="">Any time</option>
                        <option>10:00 AM – 12:00 PM</option>
                        <option>12:00 PM – 02:00 PM</option>
                        <option>02:00 PM – 04:00 PM</option>
                        <option>04:00 PM – 06:00 PM</option>
                        <option>06:00 PM – 08:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button id="repair-submit-btn" type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  💬 Send Booking via WhatsApp
                </button>
                <p className={styles.formNote}>
                  Your booking details will be sent to us on WhatsApp for instant confirmation.
                </p>
              </form>
            )}
          </div>

          {/* Right — Info */}
          <aside className={styles.infoCol}>
            {/* How it works */}
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>How It Works</h2>
              <div className={styles.steps}>
                {steps.map((step, i) => (
                  <div key={step.title} className={styles.step}>
                    <div className={styles.stepIcon}>{step.icon}</div>
                    <div className={styles.stepContent}>
                      <span className={styles.stepNum}>Step {i+1}</span>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Why Choose Us?</h2>
              <div className={styles.whyList}>
                {[
                  { icon: '⚡', text: 'Same-day repair for most issues' },
                  { icon: '🏷️', text: 'Free diagnosis before any repair' },
                  { icon: '🛡️', text: '90-day warranty on all repairs' },
                  { icon: '💰', text: 'Transparent, no-surprise pricing' },
                  { icon: '🔧', text: 'Genuine spare parts only' },
                  { icon: '📞', text: 'Real-time WhatsApp updates' },
                ].map(w => (
                  <div key={w.text} className={styles.whyItem}>
                    <span className={styles.whyIcon}>{w.icon}</span>
                    <span className={styles.whyText}>{w.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Get in Touch</h2>
              <div className={styles.contactBtns}>
                <a
                  href={`https://wa.me/${shopConfig.whatsapp.replace(/\D/g,'')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-cyan"
                  id="repair-wa-btn"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  💬 WhatsApp
                </a>
                <a href={`tel:${shopConfig.phone}`} className="btn btn-secondary" id="repair-call-btn" style={{ flex: 1, justifyContent: 'center' }}>
                  📞 Call Us
                </a>
              </div>
              <p className={styles.hours}>
                <span>🕐</span> {shopConfig.workingHours}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
