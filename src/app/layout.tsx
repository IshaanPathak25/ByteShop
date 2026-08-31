import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import CartDrawer from '@/components/CartDrawer';
import { shopConfig } from '../../config';

export const metadata: Metadata = {
  title: {
    default: `${shopConfig.name} — ${shopConfig.tagline}`,
    template: `%s | ${shopConfig.name}`,
  },
  description: shopConfig.description,
  keywords: ['computer shop', 'laptop repair', 'desktop', 'gaming pc', 'tech shop', 'computer accessories', shopConfig.name],
  authors: [{ name: shopConfig.name }],
  openGraph: {
    type: 'website',
    siteName: shopConfig.name,
    title: `${shopConfig.name} — ${shopConfig.tagline}`,
    description: shopConfig.description,
    url: shopConfig.siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${shopConfig.name} — ${shopConfig.tagline}`,
    description: shopConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6c63ff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
        </CartProvider>
      </body>
    </html>
  );
}
