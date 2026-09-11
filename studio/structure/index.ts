import type { StructureBuilder, StructureResolver } from "sanity/structure";
import { CogIcon } from "@sanity/icons/Cog";
import { HomeIcon } from "@sanity/icons/Home";
import { UsersIcon } from "@sanity/icons/Users";
import { WrenchIcon } from "@sanity/icons/Wrench";
import { TrolleyIcon } from "@sanity/icons/Trolley";
import { PackageIcon } from "@sanity/icons/Package";
import { CubeIcon } from "@sanity/icons/Cube";
import { EnvelopeIcon } from "@sanity/icons/Envelope";
import { EditIcon } from "@sanity/icons/Edit";

// Every type listed here is a singleton — locked to one fixed-ID document
// and hidden from the generic "create new" list.
const SINGLETONS = [
  "siteSettings",
  "homePage",
  "aboutPage",
  "servicesPage",
  "deliveryPage",
  "warehousePage",
  "productSolutionsPage",
  "gelPacksPage",
  "contactPage",
  "requestQuotePage",
];

function singleton(S: StructureBuilder, typeName: string, title: string, icon: React.ComponentType) {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title));
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title("365 Health Content")
    .items([
      singleton(S, "siteSettings", "Site Settings", CogIcon),

      S.divider(),

      S.listItem()
        .title("Pages")
        .icon(HomeIcon)
        .child(
          S.list()
            .title("Pages")
            .items([
              singleton(S, "homePage", "Homepage", HomeIcon),
              singleton(S, "aboutPage", "About", UsersIcon),
              singleton(S, "servicesPage", "Services", WrenchIcon),
              singleton(S, "deliveryPage", "Delivery", TrolleyIcon),
              singleton(S, "warehousePage", "Warehouse", PackageIcon),
              singleton(S, "productSolutionsPage", "Product Solutions", CubeIcon),
              singleton(S, "gelPacksPage", "Gel Packs", PackageIcon),
              singleton(S, "contactPage", "Contact", EnvelopeIcon),
              singleton(S, "requestQuotePage", "Request a Quote", EditIcon),
            ])
        ),

      S.divider(),

      S.documentTypeListItem("deliveryTier").title("Delivery Tiers"),
      S.documentTypeListItem("gelPackProduct").title("Gel Pack Products"),

      S.divider(),

      // Anything added later that isn't a singleton or listed above still
      // shows up here automatically.
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !SINGLETONS.includes(listItem.getId() as string) &&
          !["deliveryTier", "gelPackProduct"].includes(listItem.getId() as string)
      ),
    ]);
