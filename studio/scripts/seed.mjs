// One-time content migration: pushes the current static site content
// (src/lib/content.ts + the page components) into Sanity as real documents.
// Safe to re-run — every write is createOrReplace on a deterministic _id.
//
// Usage: node --env-file=.env.local scripts/seed.mjs

import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "../..");
const IMAGES_ROOT = path.join(REPO_ROOT, "public/images");

if (!process.env.SANITY_API_TOKEN) {
  console.error("Missing SANITY_API_TOKEN. Run with: node --env-file=.env.local scripts/seed.mjs");
  process.exit(1);
}

const client = createClient({
  projectId: "a4hcjnc6",
  dataset: "production",
  apiVersion: "2025-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => randomUUID().slice(0, 8);

// --- image upload, cached by relative path so repeats aren't re-uploaded ---
const assetCache = new Map();
async function uploadAsset(relPath) {
  if (assetCache.has(relPath)) return assetCache.get(relPath);
  const abs = path.join(IMAGES_ROOT, relPath);
  console.log("  uploading", relPath);
  const asset = await client.assets.upload("image", createReadStream(abs), {
    filename: path.basename(relPath),
  });
  assetCache.set(relPath, asset._id);
  return asset._id;
}
async function img(relPath, alt) {
  const assetId = await uploadAsset(relPath);
  return { _type: "image", asset: { _type: "reference", _ref: assetId }, alt };
}

async function main() {
  console.log("Uploading images and building documents...");

  // ---------------------------------------------------------------------
  // siteSettings
  // ---------------------------------------------------------------------
  const siteSettings = {
    _id: "siteSettings",
    _type: "siteSettings",
    name: "365 Health Logistics",
    shortName: "365 Health",
    tagline: "Bringing Pharma On Time To The People In Need",
    subhead:
      "Ensuring the safety and integrity of your medications with precision temperature-controlled logistics.",
    phone: "(877) 374-0577",
    phoneHref: "tel:+18773740577",
    email: "info@365health.global",
    address: { line1: "21822 Lassen Street, Suite A", line2: "Chatsworth, CA 91311" },
    social: { facebook: "#", x: "#", instagram: "#" },
    navItems: [
      { _key: key(), _type: "navLink", label: "Home", href: "/" },
      { _key: key(), _type: "navLink", label: "About", href: "/about" },
      {
        _key: key(),
        _type: "navLink",
        label: "Services",
        href: "/services",
        children: [
          { _key: key(), _type: "navChildLink", label: "Delivery", href: "/delivery" },
          { _key: key(), _type: "navChildLink", label: "Warehouse", href: "/warehouse" },
          { _key: key(), _type: "navChildLink", label: "Products and Solutions", href: "/product-solutions" },
          { _key: key(), _type: "navChildLink", label: "Flexible Hot/Cold Gel Packs", href: "/flexible-hot-cold-gel-packs" },
        ],
      },
      { _key: key(), _type: "navLink", label: "Contact", href: "/contact" },
    ],
    footerNavItems: [
      { _key: key(), _type: "navChildLink", label: "Home", href: "/" },
      { _key: key(), _type: "navChildLink", label: "About", href: "/about" },
      { _key: key(), _type: "navChildLink", label: "Services", href: "/services" },
      { _key: key(), _type: "navChildLink", label: "Contact", href: "/contact" },
    ],
    credentials: [
      { _key: key(), _type: "credentialItem", icon: "truck", label: "3PL Licensed", detail: "Third-party logistics license for pharma freight" },
      { _key: key(), _type: "credentialItem", icon: "shield-check", label: "HIPAA Compliant", detail: "Drivers & dispatchers trained on patient privacy" },
      { _key: key(), _type: "credentialItem", icon: "scan-barcode", label: "DSCSA Traceable", detail: "Full drug-supply-chain tracing on every shipment" },
      { _key: key(), _type: "credentialItem", icon: "badge-check", label: "CA Board of Pharmacy", detail: "Licensed wholesale distributor" },
    ],
    complianceBand: {
      eyebrow: "Advanced Technology & Strict Compliance",
      heading: "Leading with innovation in pharmaceutical logistics",
      copy:
        "Our commitment to compliance and technology sets us apart. At 365 Health Logistics, we employ cutting-edge technology to monitor and manage the temperature of your pharmaceuticals 24/7, ensuring compliance with all health regulations. Our systems are regularly audited and updated to keep pace with industry standards.",
    },
    getInTouch: {
      eyebrow: "Get in Touch",
      heading: "Ready to start a conversation?",
      copy:
        "Have questions or need to schedule a consultation? Our expert team is ready to help you streamline your pharmaceutical logistics needs. Contact us today to ensure your products are in the best hands.",
      formHeading: "Send a quick message",
    },
  };

  // ---------------------------------------------------------------------
  // deliveryTier collection (referenced by homePage and deliveryPage)
  // ---------------------------------------------------------------------
  const deliveryTiers = [
    { _id: "deliveryTier-next-day", name: "Next Day Delivery", window: "8 AM – 8 PM", detail: "Available from 8 AM to 8 PM.", order: 1 },
    { _id: "deliveryTier-same-day", name: "Same Day Delivery", window: "Cutoff 1 PM · Delivered by 8 PM", detail: "Items collected before 1 PM will be delivered before 8 PM.", order: 2 },
    { _id: "deliveryTier-urgent", name: "Urgent Delivery", window: "≤ 4 Hours", detail: "Pickup and delivery are guaranteed within 4 hours in most areas.", order: 3 },
    { _id: "deliveryTier-inside", name: "Inside Delivery", window: "White Glove", detail: "We go the extra mile by delivering your products directly inside, ensuring they're never left on your doorstep.", order: 4 },
  ].map((t) => ({ ...t, _type: "deliveryTier" }));

  // ---------------------------------------------------------------------
  // homePage
  // ---------------------------------------------------------------------
  const homePage = {
    _id: "homePage",
    _type: "homePage",
    heroImage: await img("home-hero.png", "A 365 Health Logistics courier loading temperature-sensitive packages into a delivery van"),
    heroStats: [
      { _key: key(), _type: "statItem", value: "98.5%", label: "On-time delivery" },
      { _key: key(), _type: "statItem", value: "150K+", label: "Sq ft warehouse" },
      { _key: key(), _type: "statItem", value: "3PL", label: "Licensed & HIPAA compliant" },
    ],
    primaryCtaLabel: "Discover our solutions",
    secondaryCtaLabel: "Request a quote",
    deliveryHeading: "On-Time Delivery",
    featuredDeliveryTiers: deliveryTiers
      .slice(0, 3)
      .map((t) => ({ _key: key(), _type: "reference", _ref: t._id })),
    storageHeading: "Secure Storage Capacity",
    storageCopy:
      "Our Southern California warehouse efficiently stores regular and temperature-controlled biopharma products, with up-to-date inventory counts. One convenient location streamlines storage and delivery — no need for multiple intermediaries.",
    productsHeading: "Products and Solutions",
    productsCopy:
      "Our company offers a diverse range of meticulously engineered thermal packaging solutions tailored specifically for the pharmaceutical and biotech industries. Our products are designed to meet the rigorous demands of temperature-sensitive items.",
    whoWeAreHeading: "Your partners in cold storage medical logistics",
    whoWeAreCopy:
      "At 365 Health Logistics, we specialize in the cold-storage transportation of pharmaceuticals and medications. With a commitment to safety, reliability, and compliance, we provide end-to-end logistics solutions that protect the integrity of your products every step of the way. Our state-of-the-art technology and trained professionals ensure your medical supplies are handled with the utmost care and precision.",
    whoWeAreImage: await img("who-we-are.png", "Air freight, trucks, and last-mile vans supporting 365 Health's cold chain network"),
    offerHeading: "Comprehensive cold chain logistics services",
    offerCopy:
      "Our targeted services are crafted to address the critical storage and delivery needs of the biotech and pharmaceutical sector, ensuring your products are handled with expertise from start to finish.",
    offerItems: [
      {
        _key: key(),
        _type: "offerItem",
        name: "Logistic Operators",
        copy: "Logistics play a vital role in transporting biotech, including pharmaceuticals, from one point to another successfully. Data collection, analysis, and customer communication keep freight flowing efficiently and on schedule.",
        icon: await img("call-center.png", "Logistic Operators icon"),
        href: "/delivery",
      },
      {
        _key: key(),
        _type: "offerItem",
        name: "Product Safety & Integrity",
        copy: "365 Health Logistics helps clients navigate risks like temperature fluctuations and shipment delays. Mandated by the DSCSA, trade partners must provide drug-tracing information to the FDA when taking ownership of medications. This assists in investigating counterfeit pharmaceuticals.",
        icon: await img("protection.png", "Product Safety & Integrity icon"),
        href: "/product-solutions",
      },
    ],
    clientsHeading: "Trusted by professionals",
    clients: [
      { _key: key(), _type: "clientLogo", name: "Amazon", logo: await img("clients/Amazon-Image.png", "Amazon logo") },
      { _key: key(), _type: "clientLogo", name: "Walmart", logo: await img("clients/Walmart-Image.png", "Walmart logo") },
      { _key: key(), _type: "clientLogo", name: "Best Buy", logo: await img("clients/best-buy.jpg", "Best Buy logo") },
      { _key: key(), _type: "clientLogo", name: "Sam's Club", logo: await img("clients/Sams-Club.png", "Sam's Club logo") },
      { _key: key(), _type: "clientLogo", name: "USC Keck's Pharmacy", logo: await img("clients/usc.png", "USC Keck's Pharmacy logo") },
      { _key: key(), _type: "clientLogo", name: "Cold Chain Technologies", logo: await img("clients/cold-chain.png", "Cold Chain Technologies logo") },
    ],
    advancedTechImage: await img("who-we-are.png", "Air freight and ground fleet supporting 365 Health's temperature-monitoring technology"),
    testimonialIntro: "Our clients trust us to handle their most sensitive shipments. Here's what they have to say.",
    testimonialQuoteParts: [
      "365 Health Logistics has consistently exceeded our expectations, ensuring our products are delivered safely and on time.",
      "Their attention to detail and proactive communication make them a valued partner in our supply chain.",
    ],
    testimonialAttribution: "Supply chain partner, 365 Health client",
  };

  // ---------------------------------------------------------------------
  // aboutPage
  // ---------------------------------------------------------------------
  const aboutPage = {
    _id: "aboutPage",
    _type: "aboutPage",
    heroImage: await img("about.jpg", "365 Health Logistics team"),
    title: "About Us",
    mission:
      "To provide a white-glove service that gives customers peace of mind knowing their prescriptions and medications will be delivered the right way, at the right time, and at the right temperature. We want our customers to feel like an extension of our family and our company.",
    vision:
      "A future in which every customer — particularly patients — gets their pharmaceuticals through secure storage, transportation, and packaging, from a company always striving to enhance the level of service it offers.",
    advancedTechImage: await img("about-2.png", "Air freight, trucks, and last-mile vans supporting 365 Health's cold chain network"),
  };

  // ---------------------------------------------------------------------
  // servicesPage
  // ---------------------------------------------------------------------
  const servicesPage = {
    _id: "servicesPage",
    _type: "servicesPage",
    heroImage: await img("services-hero.webp", "365 Health Logistics services"),
    title: "Services",
    stats: [
      {
        _key: key(),
        _type: "statItem",
        value: "98.5%",
        unit: "Efficiency",
        label: "On-Time Delivery",
        copy: "With a 98.5% on-time delivery rate, we ensure your pharmaceuticals reach their destination on schedule, every time.",
      },
      {
        _key: key(),
        _type: "statItem",
        value: "150,000+",
        unit: "Sq Ft",
        label: "Warehouse",
        copy: "Southern California cold-storage and ambient warehousing, with real-time inventory counts across every unit.",
      },
      {
        _key: key(),
        _type: "statItem",
        value: "50+",
        unit: "States",
        label: "Wholesale",
        copy: "Licensed wholesale distribution backed by full DSCSA traceability, from our dock to pharmacies nationwide.",
      },
    ],
    categoriesHeading: "Every part of the cold chain, handled",
    categories: [
      { _key: key(), _type: "serviceCategory", name: "Delivery", href: "/delivery", image: await img("service-1.png", "Delivery") },
      { _key: key(), _type: "serviceCategory", name: "Warehouse", href: "/warehouse", image: await img("service-2.jpg", "Warehouse") },
      { _key: key(), _type: "serviceCategory", name: "Products and Solutions", href: "/product-solutions", image: await img("service-3.jpg", "Products and Solutions") },
    ],
  };

  // ---------------------------------------------------------------------
  // deliveryPage
  // ---------------------------------------------------------------------
  const deliveryPage = {
    _id: "deliveryPage",
    _type: "deliveryPage",
    heroImage: await img("delivery-hero.png", "365 Health Logistics"),
    introHeading: "Reliable and Trusted Deliveries",
    introCopy:
      "At 365, we take pride in our reliable, on-time deliveries, supported by a skilled team of drivers and dispatchers. Our versatile fleet, including small units, sprinters, and box trucks, is equipped to handle all your delivery needs. With an impeccable track record of on-time deliveries and zero claims, you can trust 365 Logistics to get your shipments where they need to go, on time, every time.",
    whiteGloveHeading: "Custom and White Glove Services",
    whiteGloveCopy: "Our white-glove services are tailored to meet your unique needs. Feel free to reach out to us for personalized solutions.",
    deliveryTiers: deliveryTiers.map((t) => ({ _key: key(), _type: "reference", _ref: t._id })),
    optionsHeading: "Reliable Delivery Options",
    deliveryOptions: [
      { _key: key(), _type: "deliveryOption", name: "ID + Signature", detail: "ID and signature mandatory" },
      { _key: key(), _type: "deliveryOption", name: "Signature Required", detail: "Signature upon delivery" },
      { _key: key(), _type: "deliveryOption", name: "No Signature", detail: "No signature necessary" },
      { _key: key(), _type: "deliveryOption", name: "Contactless", detail: "Contactless delivery" },
    ],
    closingCopy:
      "With our top-tier 3PL license and dedicated HIPAA-compliant drivers and dispatchers, we have the expertise and resources to tailor solutions perfectly suited to your needs. Trust us to deliver excellence personalized just for you!",
  };

  // ---------------------------------------------------------------------
  // warehousePage
  // ---------------------------------------------------------------------
  const warehousePage = {
    _id: "warehousePage",
    _type: "warehousePage",
    heroImage: await img("warehouse-hero.jpg", "365 Health Logistics warehouse racking"),
    title: "Warehouse and Fulfilment",
    introLead: "We're Your All-in-One Pharma Solution.",
    introCopy:
      "Not your ordinary 3PL company, we also boast a coveted wholesale license with the California Board of Pharmacy, positioning us as your ultimate one-stop-shop for all your pharmaceutical business needs, from product management to fulfillment and warehousing.",
    capabilities: [
      {
        _key: key(),
        _type: "capability",
        name: "Revolutionizing Returns Processing",
        copy: "Recognizing a void in the industry, we handle returns with the same level of urgency as outbound order fulfillment. Our meticulous SOPs streamline product identification, relabeling, and repackaging, while our dedicated associates undergo specialized training to uphold stringent quality standards.",
      },
      {
        _key: key(),
        _type: "capability",
        name: "Elevating Your Brand with Customization",
        copy: "Stand out from the competition with our customized solutions that add that extra flair to your products. From custom packouts to innovative packaging, we excel in adding unique touches that set your brand apart.",
      },
      {
        _key: key(),
        _type: "capability",
        name: "Efficient Kitting and Assembly",
        copy: "Our streamlined operations are designed for seamless kitting and assembly tasks. Let us assist in creating enticing bundles or kits that showcase your offerings and enhance customer appeal.",
      },
      {
        _key: key(),
        _type: "capability",
        name: "Precise Inventory Management",
        copy: "Rest easy as we meticulously handle your product inventory, ensuring accurate management of diverse product lines with unwavering attention to detail.",
      },
      {
        _key: key(),
        _type: "capability",
        name: "Optimized Fulfillment Experience",
        copy: "With multiple fulfillment sites, we are dedicated to elevating your customer experience and enhancing your business operations at every touchpoint. Trust us to drive success for your brand with our comprehensive solutions tailored to meet your unique needs.",
      },
    ],
    storageHeading: "Importance of Proper Pharmaceutical Storage",
    storageCopy:
      "As a direct consequence of this, the requirements for storing different medications and the advice given by their manufacturers are not uniform. There are some that have to be kept at a cold temperature, such as the refrigerator or the freezer, while others may be kept at room temperature. Here are the reasons why it's so vital to monitor temperature and why it's so important to use the proper pharmaceutical storage keep medications in the proper manner.",
    storageImage: await img("warehouse-2.jpg", "Cold storage racking aisle"),
    advancedTechImage: await img("warehouse-3.png", "Air freight and ground fleet supporting 365 Health's warehouse network"),
  };

  // ---------------------------------------------------------------------
  // productSolutionsPage
  // ---------------------------------------------------------------------
  const productSolutionsPage = {
    _id: "productSolutionsPage",
    _type: "productSolutionsPage",
    heroImage: await img("products/products-hero.jpg", "365 Health Logistics packing a temperature-controlled shipping container"),
    title: "Products and Solutions",
    introCopy:
      "Packaging requirements vary — some medications require refrigeration or freezing, while others remain stable at room temperature. Proper temperature monitoring is essential to preserving their effectiveness. We provide a range of packaging solutions for temperature-sensitive medications and products.",
    cctRxHeading: "Temperature Controlled Containers *CCT Rx™ Family",
    cctRxCopy:
      "365 ensures the value and integrity of your products throughout their entire journey with our high-performance thermal packaging solutions. We offer a range of sizes tailored to meet your specific needs. Contact us today to discover how we can help you overcome your cold chain challenges. Our experts are ready to provide the solutions you need.",
    cctRxSlides: await Promise.all(
      [
        ["products/CCTRX_Family-300x253.jpg", "CCT Rx Family thermal shipping boxes"],
        ["products/GTS-RX-15L-300x236.jpg", "GTS-RX 15L insulated container"],
        ["products/GTS-RX-8L-300x236.jpg", "GTS-RX 8L insulated container"],
        ["products/IMG_0082-300x200.png", "CCT Rx thermal container"],
        ["products/RX-3_1-300x214.png", "CCT Rx thermal container"],
      ].map(async ([src, alt]) => ({ ...(await img(src, alt)), _key: key() }))
    ),
    categories: [
      {
        _key: key(),
        _type: "productCategory",
        name: "Pallet Shippers",
        copy: "365 offers a variety of bulk and pallet shipment solutions tailored to your needs. Available in different sizes, temperature profiles, and durations, they meet industry standards using various insulation and refrigerant options. Our solutions include single-use and reusable options, from thermal covers to PCM blankets and passive shippers. Discover how 365 ensures complete cold chain protection.",
        image: await img("products/cct-endeavair@2x-300x300.webp", "Pallet Shippers"),
      },
      {
        _key: key(),
        _type: "productCategory",
        name: "Thermal Covers",
        copy: "Thermal Covers, made with Tyvek®, protect pharmaceuticals, chemicals, and medical devices worldwide. These validated, cost-effective pallet covers offer advanced protection, are 100% recyclable, and come in three variations to suit your needs.",
        image: await img("products/DuPont_Tyvek_Solar_W50-1-2-03-300x254.webp", "Thermal Covers"),
      },
      {
        _key: key(),
        _type: "productCategory",
        name: "Monitoring Solutions",
        copy: "Bluetooth-enabled data loggers track temperature and humidity in real time across storage and transit, giving you continuous visibility and audit-ready records for every shipment.",
        image: await img("products/0005487_intemp-cx403-storage-room-ambient-temperature-bluetooth-data-logger-300x225.jpeg", "Monitoring Solutions"),
      },
    ],
    whyStorageEyebrow: "Monitoring Solutions",
    whyStorageHeading: "Why pharmaceutical storage matters",
    whyStorageBullets: [
      "Ensures the medication's potency is maintained",
      "Ensures the integrity of medications is preserved",
      "Prevents medicine from being spoiled or deteriorated",
      "Assures quality and safety throughout the product's shelf life",
    ],
    whyStorageCopy:
      "Medication storage is largely influenced by temperature, humidity, and sunlight. Pharmacists must guarantee their facilities have the proper equipment to keep medications at the temperature, moisture, and light conditions their code of ethics requires. You'll find these advantages when you transport pharmaceuticals and vaccinations with a team of professionals from 365 Health:",
    whyProfessionals: [
      {
        _key: key(),
        _type: "advantage",
        title: "Precise temperature control",
        copy: "Reefer trucks maintain a precise temperature throughout transport — from room temperature to freezing — independent of the weather, with drivers monitoring for maintenance and documentation.",
      },
      {
        _key: key(),
        _type: "advantage",
        title: "Flexible delivery options",
        copy: "Medications are highly personalized — a professional team can change quickly based on what's being shipped and delivered, while maintaining high quality standards.",
      },
      {
        _key: key(),
        _type: "advantage",
        title: "Secure handling",
        copy: "Pharmaceuticals are delicate and costly. Professionals experienced with delicate, precious items load, transport, and unload every shipment with care.",
      },
      {
        _key: key(),
        _type: "advantage",
        title: "Regulatory compliance",
        copy: "Pharma transport experts know the rules that must be followed while loading, storing, and transporting these items.",
      },
      {
        _key: key(),
        _type: "advantage",
        title: "Total visibility",
        copy: "Trace shipments and receive notice after delivery — documentation that matters for your company and for local/federal record-keeping standards.",
      },
    ],
  };

  // ---------------------------------------------------------------------
  // gelPackProduct collection
  // ---------------------------------------------------------------------
  const packDefs = [
    {
      id: "gp-4-25x11-s",
      sku: "GP-4.25X11-S",
      name: "4.25 x 11 Flexible Hot/Cold Gel Pack",
      size: "Small",
      dimensions: "15 x 11 x 1.5 inches",
      weight: "11.29 ounces",
      features: ["Non-toxic", "Flexible when frozen", "Hot and cold therapy", "Reusable", "Durable"],
      images: [
        "packs/4.25-x-11-Flexible-HotCold-Gel-Pack-Small-1-399x1024.jpg",
        "packs/4.25-x-11-Flexible-HotCold-Gel-Pack-Small-2.jpg",
        "packs/4.25-x-11-Flexible-HotCold-Gel-Pack-Small-3.jpg",
      ],
    },
    {
      id: "gp-5-5x11-m",
      sku: "GP-5.5X11-M",
      name: "5.5 x 11 Flexible Hot/Cold Gel Pack",
      size: "Medium",
      dimensions: "11.02 x 11.02 x 0.79 inches",
      weight: "1.01 pounds",
      features: ["Non-toxic", "Flexible when frozen", "Hot and cold therapy", "Reusable", "Durable"],
      images: [
        "packs/5.5-x-11-Flexible-HotCold-Gel-Pack-Medium-1-1024x513.jpg",
        "packs/5.5-x-11-Flexible-HotCold-Gel-Pack-Medium-2.jpg",
        "packs/5.5-x-11-Flexible-HotCold-Gel-Pack-Medium-3.jpg",
      ],
    },
    {
      id: "gp-7-5x11-l",
      sku: "GP-7.5X11-L",
      name: "7.5 x 11 Flexible Hot/Cold Gel Pack",
      size: "Large",
      dimensions: "15 x 11 x 1.5 inches",
      weight: "1.26 pounds",
      features: ["Non-toxic", "Flexible when frozen", "Hot and cold therapy", "Reusable", "Durable"],
      images: [
        "packs/7.5-x-11-Flexible-HotCold-Gel-Pack-Large-1-747x1024.jpg",
        "packs/7.5-x-11-Flexible-HotCold-Gel-Pack-Large-2.jpg",
        "packs/7.5-x-11-Flexible-HotCold-Gel-Pack-Large-3.jpg",
      ],
    },
    {
      id: "gp-11x15-l",
      sku: "GP-11X15-L",
      name: "11 x 15 Flexible Hot/Cold Gel Pack",
      size: "Large",
      dimensions: "15 x 11 x 1.5 inches",
      weight: "2.93 pounds",
      features: ["Non-toxic", "Flexible when frozen", "Hot and cold therapy", "Reusable", "Durable"],
      images: [
        "packs/11-x-15-Flexible-HotCold-Gel-Pack-Large-1-747x1024.jpg",
        "packs/11-x-15-Flexible-HotCold-Gel-Pack-Large-2.jpg",
        "packs/11-x-15-Flexible-HotCold-Gel-Pack-Large-3.jpg",
      ],
    },
    {
      id: "gp-wrap-3x5x6-s",
      sku: "GP-WRAP-3X5X6-S",
      name: "Flexible Hot/Cold Gel Packs with Wrap",
      size: "Small",
      dimensions: "3 x 5 x 6 inches",
      weight: "1.22 pounds",
      features: ["Durable", "Gel packs are suitable for both freezing and microwaving", "Hot and cold therapy", "Reusable", "Non-toxic"],
      images: [
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Small-1-770x1024.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Small-2-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Small-3-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Small-4-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Small-5-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Small-6-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Small-7-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Small-8-150x150.jpg",
      ],
    },
    {
      id: "gp-wrap-4-5x7x8-m",
      sku: "GP-WRAP-4.5X7X8-M",
      name: "Flexible Hot/Cold Gel Packs with Wrap",
      size: "Medium",
      dimensions: "4.5 x 7 x 8 inches",
      weight: "1.8 pounds",
      features: ["Durable", "Gel packs are suitable for both freezing and microwaving", "Hot and cold therapy", "Reusable", "Non-toxic"],
      images: [
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Medium-1-898x1024.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Medium-2-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Medium-3-150x150.jpg",
      ],
    },
    {
      id: "gp-wrap-3x5x6-l",
      sku: "GP-WRAP-3X5X6-L",
      name: "Flexible Hot/Cold Gel Packs with Wrap",
      size: "Large",
      dimensions: "3 x 5 x 6 inches",
      weight: "2.4 pounds",
      features: ["Durable", "Gel packs are suitable for both freezing and microwaving", "Hot and cold therapy", "Reusable", "Non-toxic"],
      images: [
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Large-1-1006x1024.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Large-2-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Large-3-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Large-4-150x150.jpg",
      ],
    },
    {
      id: "gp-wrap-back-4-5x7x8",
      sku: "GP-WRAP-BACK-4.5X7X8",
      name: "Flexible Hot/Cold Gel Packs with Wrap",
      size: "Large",
      label: "Back & Abdomen",
      dimensions: "4.5 x 7 x 8 inches",
      weight: "3.01 pounds",
      features: ["Durable", "Gel packs are suitable for both freezing and microwaving", "Hot and cold therapy", "Reusable", "Non-toxic"],
      images: [
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-1-1024x1024.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-2-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-3-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-4-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-5-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-6-150x150.jpg",
        "packs/Flexible-HotCold-Gel-Packs-with-Wrap-Back-Abdomen-7-150x150.jpg",
      ],
    },
  ];

  const gelPackProducts = [];
  for (const [i, def] of packDefs.entries()) {
    const images = [];
    for (const [n, src] of def.images.entries()) {
      images.push({ ...(await img(src, `${def.name} — photo ${n + 1}`)), _key: key() });
    }
    gelPackProducts.push({
      _id: `gelPackProduct-${def.id}`,
      _type: "gelPackProduct",
      sku: def.sku,
      name: def.name,
      size: def.size,
      ...(def.label ? { label: def.label } : {}),
      dimensions: def.dimensions,
      weight: def.weight,
      features: def.features,
      images,
      order: i + 1,
    });
  }

  // ---------------------------------------------------------------------
  // gelPacksPage
  // ---------------------------------------------------------------------
  const gelPacksPage = {
    _id: "gelPacksPage",
    _type: "gelPacksPage",
    heroImage: await img("packs/packs-hero.jpg", "365 Health team packing a shipment"),
    title: "Flexible Hot/Cold Gel Packs",
    note: 'The product list itself lives under "Gel Pack Products" in the sidebar, not on this page.',
    wholesaleEyebrow: "Looking to buy wholesale?",
  };

  // ---------------------------------------------------------------------
  // contactPage
  // ---------------------------------------------------------------------
  const contactPage = {
    _id: "contactPage",
    _type: "contactPage",
    heroImage: await img("customer_service.jpg", "365 Health Logistics customer service"),
    title: "Contact",
    formHeading: "Connect with Us",
  };

  // ---------------------------------------------------------------------
  // requestQuotePage
  // ---------------------------------------------------------------------
  const requestQuotePage = {
    _id: "requestQuotePage",
    _type: "requestQuotePage",
    heroImage: await img("request-quote-hero.jpg", "Request a quote from 365 Health Logistics"),
    title: "Request a Quote",
    formHeading: "Fill out the below form to Request a Quote",
    serviceOptions: ["Delivery", "Warehouse", "Product Solutions", "Flexible Gel Packs"],
    advancedTechImage: await img("service-1.png", "Air freight and ground fleet supporting 365 Health's logistics network"),
  };

  // ---------------------------------------------------------------------
  // write everything
  // ---------------------------------------------------------------------
  const docs = [
    siteSettings,
    homePage,
    aboutPage,
    servicesPage,
    ...deliveryTiers,
    deliveryPage,
    warehousePage,
    productSolutionsPage,
    ...gelPackProducts,
    gelPacksPage,
    contactPage,
    requestQuotePage,
  ];

  console.log(`\nWriting ${docs.length} documents...`);
  let tx = client.transaction();
  for (const doc of docs) tx = tx.createOrReplace(doc);
  await tx.commit();

  console.log(`Done. Seeded ${docs.length} documents (${assetCache.size} unique images uploaded).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
