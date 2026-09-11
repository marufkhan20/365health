export const company = {
  name: "365 Health Logistics",
  shortName: "365 Health",
  tagline: "Bringing Pharma On Time To The People In Need",
  subhead:
    "Ensuring the safety and integrity of your medications with precision temperature-controlled logistics.",
  phone: "(877) 374-0577",
  phoneHref: "tel:+18773740577",
  email: "info@365health.global",
  address: {
    line1: "21822 Lassen Street, Suite A",
    line2: "Chatsworth, CA 91311",
  },
  social: {
    facebook: "#",
    x: "#",
    instagram: "#",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Delivery", href: "/delivery" },
      { label: "Warehouse", href: "/warehouse" },
      { label: "Products and Solutions", href: "/product-solutions" },
      { label: "Flexible Hot/Cold Gel Packs", href: "/flexible-hot-cold-gel-packs" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

// The live site's footer uses a shorter nav than the header.
export const footerNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const credentials = [
  { label: "3PL Licensed", detail: "Third-party logistics license for pharma freight" },
  { label: "HIPAA Compliant", detail: "Drivers & dispatchers trained on patient privacy" },
  { label: "DSCSA Traceable", detail: "Full drug-supply-chain tracing on every shipment" },
  { label: "CA Board of Pharmacy", detail: "Licensed wholesale distributor" },
] as const;

export const heroStats = [
  { value: "98.5%", label: "On-time delivery" },
  { value: "150K+", label: "Sq ft warehouse" },
  { value: "3PL", label: "Licensed & HIPAA compliant" },
] as const;

// NOTE: the live site lists this third stat as "50+ Countries", which reads
// inconsistent with a SoCal-regional, next-day/same-day delivery business.
// Swapped to "States" as a placeholder — confirm the real figure/unit with
// the client before launch. The live site also repeats one caption across
// all three stat tiles; each has a distinct one here.
export const serviceStats = [
  {
    value: "98.5%",
    unit: "Efficiency",
    label: "On-Time Delivery",
    copy: "With a 98.5% on-time delivery rate, we ensure your pharmaceuticals reach their destination on schedule, every time.",
  },
  {
    value: "150,000+",
    unit: "Sq Ft",
    label: "Warehouse",
    copy: "Southern California cold-storage and ambient warehousing, with real-time inventory counts across every unit.",
  },
  {
    value: "50+",
    unit: "States",
    label: "Wholesale",
    copy: "Licensed wholesale distribution backed by full DSCSA traceability, from our dock to pharmacies nationwide.",
  },
] as const;

export const deliveryTiers = [
  {
    name: "Next Day Delivery",
    window: "8 AM – 8 PM",
    detail: "Available from 8 AM to 8 PM.",
  },
  {
    name: "Same Day Delivery",
    window: "Cutoff 1 PM · Delivered by 8 PM",
    detail: "Items collected before 1 PM will be delivered before 8 PM.",
  },
  {
    name: "Urgent Delivery",
    window: "≤ 4 Hours",
    detail: "Pickup and delivery are guaranteed within 4 hours in most areas.",
  },
  {
    name: "Inside Delivery",
    window: "White Glove",
    detail:
      "We go the extra mile by delivering your products directly inside, ensuring they're never left on your doorstep.",
  },
] as const;

export const deliveryIntro =
  "At 365, we take pride in our reliable, on-time deliveries, supported by a skilled team of drivers and dispatchers. Our versatile fleet, including small units, sprinters, and box trucks, is equipped to handle all your delivery needs. With an impeccable track record of on-time deliveries and zero claims, you can trust 365 Logistics to get your shipments where they need to go, on time, every time.";

export const deliveryOptions = [
  { name: "ID + Signature", detail: "ID and signature mandatory" },
  { name: "Signature Required", detail: "Signature upon delivery" },
  { name: "No Signature", detail: "No signature necessary" },
  { name: "Contactless", detail: "Contactless delivery" },
] as const;

export const warehouseIntro =
  "Not your ordinary 3PL company, we also boast a coveted wholesale license with the California Board of Pharmacy, positioning us as your ultimate one-stop-shop for all your pharmaceutical business needs, from product management to fulfillment and warehousing.";

export const warehouseCapabilities = [
  {
    name: "Revolutionizing Returns Processing",
    copy: "Recognizing a void in the industry, we handle returns with the same level of urgency as outbound order fulfillment. Our meticulous SOPs streamline product identification, relabeling, and repackaging, while our dedicated associates undergo specialized training to uphold stringent quality standards.",
  },
  {
    name: "Elevating Your Brand with Customization",
    copy: "Stand out from the competition with our customized solutions that add that extra flair to your products. From custom packouts to innovative packaging, we excel in adding unique touches that set your brand apart.",
  },
  {
    name: "Efficient Kitting and Assembly",
    copy: "Our streamlined operations are designed for seamless kitting and assembly tasks. Let us assist in creating enticing bundles or kits that showcase your offerings and enhance customer appeal.",
  },
  {
    name: "Precise Inventory Management",
    copy: "Rest easy as we meticulously handle your product inventory, ensuring accurate management of diverse product lines with unwavering attention to detail.",
  },
  {
    name: "Optimized Fulfillment Experience",
    copy: "With multiple fulfillment sites, we are dedicated to elevating your customer experience and enhancing your business operations at every touchpoint. Trust us to drive success for your brand with our comprehensive solutions tailored to meet your unique needs.",
  },
] as const;

export const cctRxFamily = {
  heading: "Temperature Controlled Containers *CCT Rx™ Family",
  copy: "365 ensures the value and integrity of your products throughout their entire journey with our high-performance thermal packaging solutions. We offer a range of sizes tailored to meet your specific needs. Contact us today to discover how we can help you overcome your cold chain challenges. Our experts are ready to provide the solutions you need.",
};

export const cctRxSlides = [
  { src: "/images/products/CCTRX_Family-300x253.jpg", alt: "CCT Rx Family thermal shipping boxes" },
  { src: "/images/products/GTS-RX-15L-300x236.jpg", alt: "GTS-RX 15L insulated container" },
  { src: "/images/products/GTS-RX-8L-300x236.jpg", alt: "GTS-RX 8L insulated container" },
  { src: "/images/products/IMG_0082-300x200.png", alt: "CCT Rx thermal container" },
  { src: "/images/products/RX-3_1-300x214.png", alt: "CCT Rx thermal container" },
] as const;

export const productCategories = [
  {
    name: "Pallet Shippers",
    image: "/images/products/cct-endeavair@2x-300x300.webp",
    copy: "365 offers a variety of bulk and pallet shipment solutions tailored to your needs. Available in different sizes, temperature profiles, and durations, they meet industry standards using various insulation and refrigerant options. Our solutions include single-use and reusable options, from thermal covers to PCM blankets and passive shippers. Discover how 365 ensures complete cold chain protection.",
  },
  {
    name: "Thermal Covers",
    image: "/images/products/DuPont_Tyvek_Solar_W50-1-2-03-300x254.webp",
    copy: "Thermal Covers, made with Tyvek®, protect pharmaceuticals, chemicals, and medical devices worldwide. These validated, cost-effective pallet covers offer advanced protection, are 100% recyclable, and come in three variations to suit your needs.",
  },
  {
    name: "Monitoring Solutions",
    image:
      "/images/products/0005487_intemp-cx403-storage-room-ambient-temperature-bluetooth-data-logger-300x225.jpeg",
    copy: "Bluetooth-enabled data loggers track temperature and humidity in real time across storage and transit, giving you continuous visibility and audit-ready records for every shipment.",
  },
] as const;

export type GelPackSize = "Small" | "Medium" | "Large";

const PACK_IMG = "/images/packs/";

export const gelPacks: {
  sku: string;
  name: string;
  size: GelPackSize;
  /** Heading suffix, when it differs from the plain size (e.g. "Back & Abdomen"). */
  label?: string;
  dimensions: string;
  weight: string;
  features: string[];
  images: string[];
}[] = [
  {
    sku: "GP-4.25X11-S",
    name: "4.25 x 11 Flexible Hot/Cold Gel Pack",
    size: "Small",
    dimensions: "15 x 11 x 1.5 inches",
    weight: "11.29 ounces",
    features: ["Non-toxic", "Flexible when frozen", "Hot and cold therapy", "Reusable", "Durable"],
    images: [
      "4.25-x-11-Flexible-HotCold-Gel-Pack-Small-1-399x1024.jpg",
      "4.25-x-11-Flexible-HotCold-Gel-Pack-Small-2.jpg",
      "4.25-x-11-Flexible-HotCold-Gel-Pack-Small-3.jpg",
    ].map((f) => PACK_IMG + f),
  },
  {
    sku: "GP-5.5X11-M",
    name: "5.5 x 11 Flexible Hot/Cold Gel Pack",
    size: "Medium",
    dimensions: "11.02 x 11.02 x 0.79 inches",
    weight: "1.01 pounds",
    features: ["Non-toxic", "Flexible when frozen", "Hot and cold therapy", "Reusable", "Durable"],
    images: [
      "5.5-x-11-Flexible-HotCold-Gel-Pack-Medium-1-1024x513.jpg",
      "5.5-x-11-Flexible-HotCold-Gel-Pack-Medium-2.jpg",
      "5.5-x-11-Flexible-HotCold-Gel-Pack-Medium-3.jpg",
    ].map((f) => PACK_IMG + f),
  },
  {
    sku: "GP-7.5X11-L",
    name: "7.5 x 11 Flexible Hot/Cold Gel Pack",
    size: "Large",
    dimensions: "15 x 11 x 1.5 inches",
    weight: "1.26 pounds",
    features: ["Non-toxic", "Flexible when frozen", "Hot and cold therapy", "Reusable", "Durable"],
    images: [
      "7.5-x-11-Flexible-HotCold-Gel-Pack-Large-1-747x1024.jpg",
      "7.5-x-11-Flexible-HotCold-Gel-Pack-Large-2.jpg",
      "7.5-x-11-Flexible-HotCold-Gel-Pack-Large-3.jpg",
    ].map((f) => PACK_IMG + f),
  },
  {
    sku: "GP-11X15-L",
    name: "11 x 15 Flexible Hot/Cold Gel Pack",
    size: "Large",
    dimensions: "15 x 11 x 1.5 inches",
    weight: "2.93 pounds",
    features: ["Non-toxic", "Flexible when frozen", "Hot and cold therapy", "Reusable", "Durable"],
    images: [
      "11-x-15-Flexible-HotCold-Gel-Pack-Large-1-747x1024.jpg",
      "11-x-15-Flexible-HotCold-Gel-Pack-Large-2.jpg",
      "11-x-15-Flexible-HotCold-Gel-Pack-Large-3.jpg",
    ].map((f) => PACK_IMG + f),
  },
  {
    sku: "GP-WRAP-3X5X6-S",
    name: "Flexible Hot/Cold Gel Packs with Wrap",
    size: "Small",
    dimensions: "3 x 5 x 6 inches",
    weight: "1.22 pounds",
    features: ["Durable", "Gel packs are suitable for both freezing and microwaving", "Hot and cold therapy", "Reusable", "Non-toxic"],
    images: [
      "Flexible-HotCold-Gel-Packs-with-Wrap-Small-1-770x1024.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Small-2-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Small-3-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Small-4-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Small-5-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Small-6-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Small-7-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Small-8-150x150.jpg",
    ].map((f) => PACK_IMG + f),
  },
  {
    sku: "GP-WRAP-4.5X7X8-M",
    name: "Flexible Hot/Cold Gel Packs with Wrap",
    size: "Medium",
    dimensions: "4.5 x 7 x 8 inches",
    weight: "1.8 pounds",
    features: ["Durable", "Gel packs are suitable for both freezing and microwaving", "Hot and cold therapy", "Reusable", "Non-toxic"],
    images: [
      "Flexible-HotCold-Gel-Packs-with-Wrap-Medium-1-898x1024.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Medium-2-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Medium-3-150x150.jpg",
    ].map((f) => PACK_IMG + f),
  },
  {
    sku: "GP-WRAP-3X5X6-L",
    name: "Flexible Hot/Cold Gel Packs with Wrap",
    size: "Large",
    dimensions: "3 x 5 x 6 inches",
    weight: "2.4 pounds",
    features: ["Durable", "Gel packs are suitable for both freezing and microwaving", "Hot and cold therapy", "Reusable", "Non-toxic"],
    images: [
      "Flexible-HotCold-Gel-Packs-with-Wrap-Large-1-1006x1024.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Large-2-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Large-3-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Large-4-150x150.jpg",
    ].map((f) => PACK_IMG + f),
  },
  {
    sku: "GP-WRAP-BACK-4.5X7X8",
    name: "Flexible Hot/Cold Gel Packs with Wrap",
    size: "Large",
    label: "Back & Abdomen",
    dimensions: "4.5 x 7 x 8 inches",
    weight: "3.01 pounds",
    features: ["Durable", "Gel packs are suitable for both freezing and microwaving", "Hot and cold therapy", "Reusable", "Non-toxic"],
    images: [
      "Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-1-1024x1024.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-2-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-3-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-4-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-5-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-6-150x150.jpg",
      "Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-7-150x150.jpg",
    ].map((f) => PACK_IMG + f),
  },
] as const;

export const clients = [
  { name: "Amazon", logo: "/images/clients/Amazon-Image.png" },
  { name: "Walmart", logo: "/images/clients/Walmart-Image.png" },
  { name: "Best Buy", logo: "/images/clients/best-buy.jpg" },
  { name: "Sam's Club", logo: "/images/clients/Sams-Club.png" },
  { name: "USC Keck's Pharmacy", logo: "/images/clients/usc.png" },
  { name: "Cold Chain Technologies", logo: "/images/clients/cold-chain.png" },
] as const;

export const testimonialIntro =
  "Our clients trust us to handle their most sensitive shipments. Here's what they have to say.";

// NOTE: unattributed on the live site — placeholder attribution below.
// Get a real name / title / company before launch; an anonymous quote
// reads as filler.
export const testimonial = {
  quote:
    "365 Health Logistics has consistently exceeded our expectations, ensuring our products are delivered safely and on time. Their attention to detail and proactive communication make them a valued partner in our supply chain.",
  // The live site breaks this one quote across two message-style cards.
  quoteParts: [
    "365 Health Logistics has consistently exceeded our expectations, ensuring our products are delivered safely and on time.",
    "Their attention to detail and proactive communication make them a valued partner in our supply chain.",
  ],
  attribution: "Supply chain partner, 365 Health client",
} as const;

export const getInTouch = {
  eyebrow: "Get in Touch",
  heading: "Ready to start a conversation?",
  copy: "Have questions or need to schedule a consultation? Our expert team is ready to help you streamline your pharmaceutical logistics needs. Contact us today to ensure your products are in the best hands.",
  formHeading: "Send a quick message",
} as const;

export const missionVision = {
  mission:
    "To provide a white-glove service that gives customers peace of mind knowing their prescriptions and medications will be delivered the right way, at the right time, and at the right temperature. We want our customers to feel like an extension of our family and our company.",
  vision:
    "A future in which every customer — particularly patients — gets their pharmaceuticals through secure storage, transportation, and packaging, from a company always striving to enhance the level of service it offers.",
} as const;

export const serviceCopy =
  "Our targeted services are crafted to address the critical storage and delivery needs of the biotech and pharmaceutical sector, ensuring your products are handled with expertise from start to finish.";

export const complianceBand = {
  eyebrow: "Advanced Technology & Strict Compliance",
  heading: "Leading with innovation in pharmaceutical logistics",
  copy: "Our commitment to compliance and technology sets us apart. At 365 Health Logistics, we employ cutting-edge technology to monitor and manage the temperature of your pharmaceuticals 24/7, ensuring compliance with all health regulations. Our systems are regularly audited and updated to keep pace with industry standards.",
} as const;

export const services = [
  {
    name: "Logistic Operators",
    href: "/delivery",
    icon: "/images/call-center.png",
    copy: "Logistics play a vital role in transporting biotech, including pharmaceuticals, from one point to another successfully. Data collection, analysis, and customer communication keep freight flowing efficiently and on schedule.",
  },
  {
    name: "Product Safety & Integrity",
    href: "/product-solutions",
    icon: "/images/protection.png",
    copy: "365 Health Logistics helps clients navigate risks like temperature fluctuations and shipment delays. Mandated by the DSCSA, trade partners must provide drug-tracing information to the FDA when taking ownership of medications. This assists in investigating counterfeit pharmaceuticals.",
  },
  {
    name: "Warehousing & Fulfillment",
    href: "/warehouse",
    icon: null,
    copy: "A coveted CA Board of Pharmacy wholesale license positions us as a one-stop shop — from product management to fulfillment and warehousing.",
  },
] as const;

// The Services page's own "What We Offer" — a second, simpler trio of
// photo cards distinct from the `services` teaser above.
export const serviceCategories = [
  { name: "Delivery", href: "/delivery", image: "/images/service-1.png" },
  { name: "Warehouse", href: "/warehouse", image: "/images/service-2.jpg" },
  {
    name: "Products and Solutions",
    href: "/product-solutions",
    image: "/images/service-3.jpg",
  },
] as const;
