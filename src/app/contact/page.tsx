import type { Metadata } from 'next';
import { shopConfig } from '../../../config';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${shopConfig.name}. ${shopConfig.address}. ${shopConfig.phone}.`,
};

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <p className="section-eyebrow">Get in Touch</p>
          <h1 className="page-header-title">Contact Us</h1>
          <p className="page-header-sub">We&apos;re always happy to help — reach out any way you like</p>
        </div>
      </div>
      <ContactClient />
    </div>
  );
}
