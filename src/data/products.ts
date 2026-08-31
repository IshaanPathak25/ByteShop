// ============================================================
// PRODUCT DATA — Replace with real products or CMS integration
// ============================================================

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "laptops" | "desktops" | "components" | "peripherals" | "accessories";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  badge?: "New" | "Sale" | "Popular" | "Refurbished";
  images: string[];
  shortDesc: string;
  description: string;
  specs: Record<string, string>;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "lap-001",
    name: "HP Victus 15 Gaming Laptop",
    brand: "HP",
    category: "laptops",
    price: 62990,
    originalPrice: 72990,
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
    badge: "Sale",
    images: ["/products/laptop-1.jpg"],
    shortDesc: "AMD Ryzen 5 5600H · RTX 3050 · 16GB RAM · 512GB SSD",
    description:
      "The HP Victus 15 is built for gaming and creative work. Powered by the AMD Ryzen 5 5600H processor and NVIDIA GeForce RTX 3050, it handles AAA titles and video editing effortlessly. The 144Hz FHD display ensures smooth gameplay.",
    specs: {
      Processor: "AMD Ryzen 5 5600H (up to 4.2GHz)",
      GPU: "NVIDIA GeForce RTX 3050 4GB",
      RAM: "16GB DDR4 3200MHz",
      Storage: "512GB NVMe SSD",
      Display: '15.6" FHD 144Hz IPS',
      OS: "Windows 11 Home",
      Battery: "52.5Wh, up to 8 hours",
      Weight: "2.29 kg",
    },
    tags: ["gaming", "ryzen", "rtx", "144hz"],
  },
  {
    id: "lap-002",
    name: "Dell XPS 15 Laptop",
    brand: "Dell",
    category: "laptops",
    price: 149990,
    originalPrice: 164990,
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    badge: "Popular",
    images: ["/products/laptop-2.jpg"],
    shortDesc: "Intel Core i7-12700H · RTX 3050 Ti · 16GB · 512GB SSD",
    description:
      "The Dell XPS 15 is the ultimate productivity powerhouse. Its stunning 15.6\" OLED display, premium aluminium build, and Intel Core i7 processor make it perfect for professionals and creatives.",
    specs: {
      Processor: "Intel Core i7-12700H (up to 4.7GHz)",
      GPU: "NVIDIA GeForce RTX 3050 Ti 4GB",
      RAM: "16GB DDR5 4800MHz",
      Storage: "512GB NVMe SSD",
      Display: '15.6" OLED 3.5K OLED Touch',
      OS: "Windows 11 Pro",
      Battery: "86Wh, up to 13 hours",
      Weight: "1.86 kg",
    },
    tags: ["premium", "oled", "intel", "thin"],
  },
  {
    id: "lap-003",
    name: "Lenovo IdeaPad Slim 3",
    brand: "Lenovo",
    category: "laptops",
    price: 36990,
    rating: 4.2,
    reviewCount: 456,
    inStock: true,
    badge: "Popular",
    images: ["/products/laptop-3.jpg"],
    shortDesc: "AMD Ryzen 5 5500U · Integrated · 8GB · 256GB SSD",
    description:
      "Perfect everyday laptop for students and professionals. Lightweight, reliable, and affordable with excellent battery life.",
    specs: {
      Processor: "AMD Ryzen 5 5500U (up to 4.0GHz)",
      GPU: "AMD Radeon Integrated Graphics",
      RAM: "8GB DDR4",
      Storage: "256GB NVMe SSD",
      Display: '15.6" FHD IPS Anti-Glare',
      OS: "Windows 11 Home",
      Battery: "38Wh, up to 7 hours",
      Weight: "1.65 kg",
    },
    tags: ["budget", "student", "ryzen", "lightweight"],
  },
  {
    id: "desk-001",
    name: "Custom Gaming PC — Titan Build",
    brand: "ByteShop Custom",
    category: "desktops",
    price: 89999,
    originalPrice: 99999,
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    badge: "Popular",
    images: ["/products/desktop-1.jpg"],
    shortDesc: "Intel i9-12900K · RTX 4070 · 32GB · 1TB NVMe · RGB",
    description:
      "Our signature Titan Build — a no-compromise gaming desktop assembled and tested in-store. Liquid cooled, RGB lit, and ready for 4K gaming out of the box.",
    specs: {
      Processor: "Intel Core i9-12900K (up to 5.2GHz)",
      GPU: "NVIDIA GeForce RTX 4070 12GB",
      RAM: "32GB DDR5 5600MHz Corsair",
      Storage: "1TB Samsung 980 Pro NVMe",
      Motherboard: "ASUS ROG Strix Z690-E",
      Cooling: "240mm AIO Liquid Cooler",
      Case: "Lian Li O11 Dynamic XL",
      PSU: "750W 80+ Gold",
    },
    tags: ["gaming", "custom", "rtx4070", "rgb", "4k"],
  },
  {
    id: "desk-002",
    name: "Office Workstation Pro",
    brand: "ByteShop Custom",
    category: "desktops",
    price: 42999,
    rating: 4.6,
    reviewCount: 43,
    inStock: true,
    images: ["/products/desktop-2.jpg"],
    shortDesc: "Intel i5-12400 · 16GB · 512GB SSD · Quiet Build",
    description:
      "Silent, reliable, and fast. Designed for office productivity with a compact form factor and no-frills performance.",
    specs: {
      Processor: "Intel Core i5-12400 (up to 4.4GHz)",
      GPU: "Intel UHD 730 Integrated",
      RAM: "16GB DDR4 3200MHz",
      Storage: "512GB NVMe SSD + 1TB HDD",
      Motherboard: "Gigabyte H610M",
      Cooling: "Noctua NH-L9i (Silent)",
      Case: "Fractal Design Node 304",
      PSU: "500W 80+ Bronze",
    },
    tags: ["office", "silent", "productivity", "intel"],
  },
  {
    id: "comp-001",
    name: "Samsung 870 EVO SSD 1TB",
    brand: "Samsung",
    category: "components",
    price: 8490,
    originalPrice: 9999,
    rating: 4.9,
    reviewCount: 1203,
    inStock: true,
    badge: "Sale",
    images: ["/products/ssd-1.jpg"],
    shortDesc: "SATA 2.5\" · 560MB/s Read · 530MB/s Write · 5-yr Warranty",
    description:
      "The Samsung 870 EVO is the world's most trusted SATA SSD. Upgrade your old HDD and experience a dramatic performance boost.",
    specs: {
      Interface: "SATA 6Gb/s",
      "Form Factor": "2.5 inch",
      Capacity: "1TB",
      "Sequential Read": "560 MB/s",
      "Sequential Write": "530 MB/s",
      NAND: "Samsung V-NAND 3-bit MLC",
      Warranty: "5 Years",
    },
    tags: ["ssd", "samsung", "storage", "upgrade"],
  },
  {
    id: "comp-002",
    name: "Corsair Vengeance 16GB DDR5 RAM",
    brand: "Corsair",
    category: "components",
    price: 6499,
    rating: 4.7,
    reviewCount: 342,
    inStock: true,
    badge: "New",
    images: ["/products/ram-1.jpg"],
    shortDesc: "DDR5 5600MHz · CL40 · Intel XMP 3.0 · Black Heatspreader",
    description:
      "High-performance DDR5 RAM for next-gen builds. Compatible with Intel 12th and 13th gen platforms with XMP 3.0 profiles.",
    specs: {
      Type: "DDR5",
      Speed: "5600 MHz",
      Capacity: "16GB (1x16GB)",
      Latency: "CL40",
      Voltage: "1.25V",
      XMP: "Intel XMP 3.0",
      Warranty: "Lifetime",
    },
    tags: ["ram", "ddr5", "corsair", "upgrade"],
  },
  {
    id: "peri-001",
    name: "Logitech MX Master 3S Mouse",
    brand: "Logitech",
    category: "peripherals",
    price: 8995,
    rating: 4.9,
    reviewCount: 567,
    inStock: true,
    badge: "Popular",
    images: ["/products/mouse-1.jpg"],
    shortDesc: "8000 DPI · Quiet Clicks · Bluetooth + USB · Ergonomic",
    description:
      "The gold standard of productivity mice. The MX Master 3S features ultra-quiet clicks, a MagSpeed scroll wheel, and connects to up to 3 devices simultaneously.",
    specs: {
      Sensor: "Darkfield 8000 DPI",
      Connectivity: "Bluetooth + USB Receiver",
      Battery: "Built-in rechargeable, 70 days",
      Dimensions: "124.9 x 84.3 x 51mm",
      Weight: "141g",
      Compatibility: "Windows, macOS, Linux",
    },
    tags: ["mouse", "logitech", "productivity", "wireless"],
  },
  {
    id: "peri-002",
    name: "Mechanical Keyboard — Keychron K2",
    brand: "Keychron",
    category: "peripherals",
    price: 7495,
    originalPrice: 8999,
    rating: 4.8,
    reviewCount: 289,
    inStock: true,
    badge: "Sale",
    images: ["/products/keyboard-1.jpg"],
    shortDesc: "75% Layout · Gateron Brown · RGB · Mac/Windows",
    description:
      "The Keychron K2 is a compact 75% layout mechanical keyboard with tactile Brown switches, RGB backlight, and compatibility with both macOS and Windows.",
    specs: {
      Layout: "75% (84 keys)",
      Switch: "Gateron Brown (Tactile)",
      Backlight: "RGB per-key",
      Connectivity: "Bluetooth 5.1 + USB-C",
      Battery: "4000mAh",
      Frame: "Aluminium body",
      Compatibility: "macOS, Windows, Android, iOS",
    },
    tags: ["keyboard", "mechanical", "keychron", "rgb"],
  },
  {
    id: "acc-001",
    name: "Dell 27\" 4K USB-C Monitor",
    brand: "Dell",
    category: "accessories",
    price: 48990,
    originalPrice: 54990,
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    badge: "Sale",
    images: ["/products/monitor-1.jpg"],
    shortDesc: "4K IPS · 60Hz · USB-C 90W · HDR400 · Height Adjustable",
    description:
      "Crystal-clear 4K resolution, USB-C with 90W charging, and a fully ergonomic stand. Perfect for creative professionals and multi-monitor setups.",
    specs: {
      "Panel Size": '27 inch',
      Resolution: "3840x2160 (4K UHD)",
      "Panel Type": "IPS",
      "Refresh Rate": "60Hz",
      Connectivity: "USB-C (90W), HDMI 2.0, DP 1.4",
      HDR: "HDR400",
      Stand: "Height, Tilt, Swivel, Pivot",
      Warranty: "3 Years",
    },
    tags: ["monitor", "4k", "dell", "usb-c"],
  },
];

export const categories = [
  { id: "all", label: "All Products" },
  { id: "laptops", label: "Laptops" },
  { id: "desktops", label: "Desktops" },
  { id: "components", label: "Components" },
  { id: "peripherals", label: "Peripherals" },
  { id: "accessories", label: "Accessories" },
] as const;

export const featuredProductIds = ["lap-001", "desk-001", "peri-001", "comp-001", "lap-002", "peri-002"];
