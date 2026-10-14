/* ─── Entity registry ────────────────────────────────────────
   The site's @id library (SPEC.md, Section 3). Articles name entities
   by key in posts.ts; the article template resolves them into the
   JSON-LD @graph so every page refers to the same entities the same
   way. When the custom domain is chosen, change SITE_URL here and
   every @id follows. */

export const SITE_URL = "https://van-life-website.vercel.app";

export interface EntityDef {
  "@type": string;
  name: string;
  sameAs?: string[];
}

export const ENTITIES: Record<string, EntityDef> = {
  "class-b": { "@type": "Thing", name: "Class B motorhome" },
  "chassis:sprinter": {
    "@type": "Thing",
    name: "Mercedes-Benz Sprinter",
    sameAs: ["https://en.wikipedia.org/wiki/Mercedes-Benz_Sprinter"],
  },
  "chassis:transit": {
    "@type": "Thing",
    name: "Ford Transit",
    sameAs: ["https://en.wikipedia.org/wiki/Ford_Transit"],
  },
  "chassis:promaster": {
    "@type": "Thing",
    name: "Ram ProMaster",
    sameAs: ["https://en.wikipedia.org/wiki/Ram_ProMaster"],
  },
  "model:storyteller-mode": { "@type": "Product", name: "Storyteller Overland MODE" },
  "model:winnebago-boldt": { "@type": "Product", name: "Winnebago Boldt" },
  "model:winnebago-revel": { "@type": "Product", name: "Winnebago Revel" },
  "org:storyteller-overland": {
    "@type": "Organization",
    name: "Storyteller Overland",
    sameAs: ["https://storytelleroverland.com"],
  },
  "org:winnebago": {
    "@type": "Organization",
    name: "Winnebago",
    sameAs: ["https://www.winnebago.com"],
  },
  "topic:lifepo4": {
    "@type": "Thing",
    name: "Lithium iron phosphate battery",
    sameAs: ["https://en.wikipedia.org/wiki/Lithium_iron_phosphate_battery"],
  },
};

export function entityId(key: string): string {
  const [kind, slug] = key.includes(":") ? key.split(":", 2) : ["topic", key];
  if (kind === "model") return `${SITE_URL}/models/${slug}`;
  if (kind === "chassis") return `${SITE_URL}/chassis/${slug}`;
  if (kind === "org") return `${SITE_URL}/organizations/${slug}`;
  return `${SITE_URL}/topics/${slug ?? key}`;
}

export function resolveEntity(key: string) {
  const def = ENTITIES[key];
  if (!def) return { "@type": "Thing", "@id": entityId(key), name: key };
  return {
    "@type": def["@type"],
    "@id": entityId(key),
    name: def.name,
    ...(def.sameAs ? { sameAs: def.sameAs } : {}),
  };
}
