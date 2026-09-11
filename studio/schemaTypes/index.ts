import type { SchemaTypeDefinition } from "sanity";

// Objects (reusable, embedded shapes)
import { navLink } from "./objects/navLink";
import { navChildLink } from "./objects/navChildLink";
import { statItem } from "./objects/statItem";
import { credentialItem } from "./objects/credentialItem";
import { clientLogo } from "./objects/clientLogo";

// Documents
import { siteSettings } from "./documents/siteSettings";
import { homePage } from "./documents/homePage";
import { aboutPage } from "./documents/aboutPage";
import { servicesPage } from "./documents/servicesPage";
import { deliveryPage } from "./documents/deliveryPage";
import { deliveryTier } from "./documents/deliveryTier";
import { warehousePage } from "./documents/warehousePage";
import { productSolutionsPage } from "./documents/productSolutionsPage";
import { gelPacksPage } from "./documents/gelPacksPage";
import { gelPackProduct } from "./documents/gelPackProduct";
import { contactPage } from "./documents/contactPage";
import { requestQuotePage } from "./documents/requestQuotePage";

export const schemaTypes: SchemaTypeDefinition[] = [
  // objects first — documents reference them
  navChildLink,
  navLink,
  statItem,
  credentialItem,
  clientLogo,

  // singletons (one instance, see structure/index.ts)
  siteSettings,
  homePage,
  aboutPage,
  servicesPage,
  deliveryPage,
  warehousePage,
  productSolutionsPage,
  gelPacksPage,
  contactPage,
  requestQuotePage,

  // collections
  deliveryTier,
  gelPackProduct,
];
