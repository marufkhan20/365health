import { defineQuery } from "next-sanity";

export const SITE_SETTINGS_QUERY = defineQuery(
  `*[_id == "siteSettings" && _type == "siteSettings"][0]`
);

export const HOME_PAGE_QUERY = defineQuery(
  `*[_id == "homePage" && _type == "homePage"][0]{
    ...,
    featuredDeliveryTiers[]->
  }`
);

export const ABOUT_PAGE_QUERY = defineQuery(
  `*[_id == "aboutPage" && _type == "aboutPage"][0]`
);

export const SERVICES_PAGE_QUERY = defineQuery(
  `*[_id == "servicesPage" && _type == "servicesPage"][0]`
);

export const DELIVERY_PAGE_QUERY = defineQuery(
  `*[_id == "deliveryPage" && _type == "deliveryPage"][0]{
    ...,
    deliveryTiers[]->
  }`
);

export const WAREHOUSE_PAGE_QUERY = defineQuery(
  `*[_id == "warehousePage" && _type == "warehousePage"][0]`
);

export const PRODUCT_SOLUTIONS_PAGE_QUERY = defineQuery(
  `*[_id == "productSolutionsPage" && _type == "productSolutionsPage"][0]`
);

export const GEL_PACKS_PAGE_QUERY = defineQuery(
  `*[_id == "gelPacksPage" && _type == "gelPacksPage"][0]`
);

export const GEL_PACK_PRODUCTS_QUERY = defineQuery(
  `*[_type == "gelPackProduct"] | order(order asc)`
);

export const CONTACT_PAGE_QUERY = defineQuery(
  `*[_id == "contactPage" && _type == "contactPage"][0]`
);

export const REQUEST_QUOTE_PAGE_QUERY = defineQuery(
  `*[_id == "requestQuotePage" && _type == "requestQuotePage"][0]`
);
