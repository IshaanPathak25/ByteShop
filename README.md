# ByteShop — White-Label Computer Shop Template

A production-ready, white-label website template for computer shops. Built with Next.js 14 (App Router), Vanilla CSS, and TypeScript. Includes full e-commerce (Razorpay + COD) and repair booking.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | CSS Modules + Global CSS |
| Language | TypeScript |
| Payments | Razorpay SDK + Cash on Delivery |
| State | React Context API + localStorage |
| Fonts | Inter + Space Grotesk (Google Fonts) |
| Deployment | Vercel (recommended) |

---

## 📁 Project Structure

```
ByteHub/
├── config.ts                    ← ⭐ EDIT THIS to customize for any client
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← Root layout (Navbar, Footer, Cart, WhatsApp FAB)
│   │   ├── page.tsx             ← Homepage
│   │   ├── shop/
│   │   │   ├── page.tsx         ← Shop / Products page
│   │   │   └── [id]/page.tsx    ← Product detail page
│   │   ├── cart/page.tsx        ← Shopping cart
│   │   ├── checkout/page.tsx    ← Checkout (Razorpay + COD)
│   │   ├── order-confirmation/  ← Order success page
│   │   ├── repair/page.tsx      ← Repair booking form
│   │   ├── about/page.tsx       ← About Us
│   │   └── contact/page.tsx     ← Contact + Google Maps
│   ├── components/
│   │   ├── Navbar.tsx           ← Sticky nav with cart badge
│   │   ├── Footer.tsx           ← 4-column footer
│   │   ├── CartDrawer.tsx       ← Sliding cart drawer
│   │   ├── WhatsAppFAB.tsx      ← Floating WhatsApp button
│   │   └── ProductCard.tsx      ← Reusable product card
│   ├── context/
│   │   └── CartContext.tsx      ← Cart state + localStorage persistence
│   ├── data/
│   │   └── products.ts          ← Product catalog (replace with real data)
│   └── styles/
│       └── globals.css          ← Design system (colors, typography, animations)
└── public/                      ← Static assets (logo, product images)
```

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
npm start
```

---

## 🎨 Customizing for a New Client (~30 minutes)

### Step 1 — Edit `config.ts`
This is the **only file** you need to edit for basic customization:

```ts
export const shopConfig = {
  name: "Client Shop Name",           // ← Change shop name
  tagline: "Their tagline here",       // ← Change tagline
  phone: "+91 XXXXX XXXXX",           // ← Change phone
  whatsapp: "+91 XXXXX XXXXX",        // ← Change WhatsApp number
  email: "hello@clientshop.com",      // ← Change email
  address: "Shop address, City",       // ← Change address
  workingHours: "Mon–Sat, 10AM–8PM",  // ← Change hours
  currency: "₹",                       // ← Change if needed
  socials: {
    instagram: "https://...",          // ← Add their social links
    facebook: "https://...",
  },
  mapEmbedUrl: "https://maps.google.com/...",  // ← Paste their Google Maps embed URL
  razorpayKeyId: "rzp_live_XXXXXXXX", // ← Add their Razorpay key
  // ... customize services, testimonials, stats
};
```

### Step 2 — Update Products
Edit `src/data/products.ts` to add the client's actual product catalog.

### Step 3 — Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Step 4 — Set Environment Variables on Vercel
Add the Razorpay secret key in Vercel's dashboard:
```
RAZORPAY_SECRET=rzp_live_secret_here
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_key_here
```

---

## 💳 Payment Setup

### Razorpay
1. Create a Razorpay account at [razorpay.com](https://razorpay.com)
2. Get your API Key ID from Dashboard → Settings → API Keys
3. Add to `config.ts` → `razorpayKeyId`
4. For production, add the secret key as an environment variable

### Cash on Delivery
COD works out of the box — no configuration needed.

---

## 🔧 Environment Variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_here
RAZORPAY_SECRET=your_secret_here
```

---

## 📱 Pages & Features

| Page | Route | Features |
|---|---|---|
| Homepage | `/` | Hero, Services, Featured Products, Testimonials, CTA |
| Shop | `/shop` | Category filters, search, sort, product grid |
| Product Detail | `/shop/[id]` | Image, specs table, Add to Cart, WhatsApp enquiry |
| Cart | `/cart` | Line items, qty controls, order summary |
| Checkout | `/checkout` | Customer form, Razorpay + COD, SSL secure |
| Order Confirm | `/order-confirmation` | Success page with order ID |
| Repair Booking | `/repair` | Multi-step form, WhatsApp submission, How-it-works |
| About Us | `/about` | Story, timeline, values |
| Contact | `/contact` | Maps embed, Click-to-call, WhatsApp, contact form |

---

## 📋 White-Label Checklist

- [ ] Edit `config.ts` with client details
- [ ] Update product catalog in `src/data/products.ts`
- [ ] Replace favicon in `public/`
- [ ] Add Google Maps embed URL to `config.ts`
- [ ] Add Razorpay credentials
- [ ] Deploy to Vercel
- [ ] Set up custom domain

---

## 📄 License

MIT — free to use and customize for client projects.
