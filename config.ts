// ============================================================
// BYTESHOP — CENTRAL CONFIGURATION FILE
// Edit this file to white-label the site for any client.
// Estimated customization time per client: ~30 minutes
// ============================================================

export const shopConfig = {
  // ── Brand ──────────────────────────────────────────────────
  name: "ByteShop",
  tagline: "Your One-Stop Tech Shop",
  description:
    "Premium computers, laptops, peripherals and expert repair services. Walk in or book online.",

  // ── Contact ────────────────────────────────────────────────
  phone: "+91 00000 00000",
  whatsapp: "+91 00000 00000",
  email: "hello@byteshop.in",
  address: "Shop No. 1, Tech Plaza, MG Road, Bangalore, Karnataka - 560001",
  workingHours: "Mon–Sat, 10:00 AM – 8:00 PM",
  workingDays: "Monday to Saturday",

  // ── Currency ───────────────────────────────────────────────
  currency: "₹",
  currencyCode: "INR",

  // ── Socials ────────────────────────────────────────────────
  socials: {
    instagram: "https://instagram.com/byteshop",
    facebook: "https://facebook.com/byteshop",
    youtube: "",
    twitter: "",
  },

  // ── Maps ───────────────────────────────────────────────────
  // Paste your Google Maps embed src URL here
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0058935569!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890",

  // ── Razorpay ───────────────────────────────────────────────
  razorpayKeyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "rzp_test_placeholder",

  // ── SEO ────────────────────────────────────────────────────
  siteUrl: "https://byteshop.in",
  ogImage: "/og-image.png",

  // ── Services ───────────────────────────────────────────────
  services: [
    {
      icon: "🖥️",
      title: "Sales & Supply",
      description:
        "Laptops, desktops, components and peripherals from top brands. Best prices guaranteed.",
    },
    {
      icon: "🔧",
      title: "Repair & Service",
      description:
        "Expert diagnosis and repair for all brands. Quick turnaround, genuine parts.",
    },
    {
      icon: "⚡",
      title: "Upgrades",
      description:
        "RAM, SSD, GPU upgrades to breathe new life into your existing machine.",
    },
    {
      icon: "🛡️",
      title: "AMC Plans",
      description:
        "Annual Maintenance Contracts for homes and businesses. Stay worry-free.",
    },
    {
      icon: "💾",
      title: "Data Recovery",
      description:
        "Lost your data? Our specialists recover files from crashed drives and corrupted storage.",
    },
    {
      icon: "🌐",
      title: "Networking",
      description:
        "Wi-Fi setup, LAN cabling, router configuration for homes and offices.",
    },
  ],

  // ── Testimonials ───────────────────────────────────────────
  testimonials: [
    {
      name: "Arjun Mehta",
      location: "Bangalore",
      rating: 5,
      text: "Got my laptop repaired in under 2 hours. Excellent service, transparent pricing, and friendly staff. Will definitely return!",
      avatar: "AM",
    },
    {
      name: "Priya Nair",
      location: "Bangalore",
      rating: 5,
      text: "Bought a gaming setup here. The team helped me choose the best components within my budget. Absolutely loved the experience.",
      avatar: "PN",
    },
    {
      name: "Rohit Sharma",
      location: "Bangalore",
      rating: 5,
      text: "Their AMC plan has been a lifesaver for our office. Quick response times and professional technicians every single time.",
      avatar: "RS",
    },
    {
      name: "Deepika Iyer",
      location: "Bangalore",
      rating: 4,
      text: "Data recovery was successful when I thought all hope was lost. Great technicians, very honest about what's possible.",
      avatar: "DI",
    },
  ],

  // ── Stats ──────────────────────────────────────────────────
  stats: [
    { value: "5000+", label: "Happy Customers" },
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Brands Available" },
    { value: "24hr", label: "Avg Repair Time" },
  ],
};

export type ShopConfig = typeof shopConfig;
