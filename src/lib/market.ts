/**
 * The Class B market index: every current model we can find, factory and
 * builder, compiled from the market census (Oct 2026).
 *
 * `verified` means the model has a completed fact ledger and appears in the
 * full comparison (/compare) and the match quiz. Everything else is LISTED
 * only: brand, model, chassis where the manufacturer publishes it, and a
 * link to the manufacturer. No specifications are claimed for listed models.
 *
 * Chassis is filled only where the census or a completed ledger states it.
 * Brand URLs were checked live on Oct 14, 2026.
 */

export interface MarketModel {
  id: string;
  name: string;
  chassis?: string;
  verified?: boolean;
}

export interface MarketBrand {
  brand: string;
  url: string;
  type: "factory" | "builder";
  note?: string;
  models: MarketModel[];
}

export const MARKET: MarketBrand[] = [
  {
    brand: "Winnebago",
    url: "https://www.winnebago.com",
    type: "factory",
    models: [
      { id: "winnebago-revel", name: "Revel", chassis: "Sprinter", verified: true },
      { id: "winnebago-revel-sport", name: "Revel Sport", chassis: "Sprinter" },
      { id: "winnebago-travato", name: "Travato", chassis: "ProMaster", verified: true },
      { id: "winnebago-solis", name: "Solis", chassis: "ProMaster", verified: true },
      { id: "winnebago-solis-pocket", name: "Solis Pocket", chassis: "ProMaster" },
    ],
  },
  {
    brand: "Thor Motor Coach",
    url: "https://www.thormotorcoach.com",
    type: "factory",
    models: [
      { id: "thor-scope", name: "Scope", chassis: "ProMaster" },
      { id: "thor-rize", name: "Rize", chassis: "ProMaster" },
      { id: "thor-sequence", name: "Sequence", chassis: "ProMaster", verified: true },
      { id: "thor-tellaro", name: "Tellaro", chassis: "ProMaster", verified: true },
      { id: "thor-palladium", name: "Palladium", chassis: "Transit" },
      { id: "thor-talavera", name: "Talavera", chassis: "Transit" },
      { id: "thor-sanctuary", name: "Sanctuary", chassis: "Sprinter" },
      { id: "thor-tranquility", name: "Tranquility", chassis: "Sprinter" },
    ],
  },
  {
    brand: "Coachmen",
    url: "https://www.coachmenrv.com",
    type: "factory",
    models: [
      { id: "coachmen-beyond", name: "Beyond", chassis: "Transit" },
      { id: "coachmen-galleria", name: "Galleria", chassis: "Sprinter", verified: true },
      { id: "coachmen-nova", name: "Nova", chassis: "ProMaster", verified: true },
      { id: "coachmen-pixel", name: "Pixel" },
    ],
  },
  {
    brand: "Airstream",
    url: "https://www.airstream.com",
    type: "factory",
    models: [
      { id: "airstream-interstate-19", name: "Interstate 19", chassis: "Sprinter" },
      { id: "airstream-interstate-19x", name: "Interstate 19X", chassis: "Sprinter" },
      { id: "airstream-interstate-24gl", name: "Interstate 24GL", chassis: "Sprinter" },
      { id: "airstream-interstate-24gt", name: "Interstate 24GT", chassis: "Sprinter" },
      { id: "airstream-interstate-24glx", name: "Interstate 24GLX", chassis: "Sprinter", verified: true },
      { id: "airstream-rangeline", name: "Rangeline", chassis: "ProMaster" },
    ],
  },
  {
    brand: "Jayco",
    url: "https://www.jayco.com",
    type: "factory",
    models: [
      { id: "jayco-swift", name: "Swift" },
      { id: "jayco-terrain", name: "Terrain", chassis: "Sprinter" },
      { id: "jayco-comet", name: "Comet" },
    ],
  },
  {
    brand: "Entegra Coach",
    url: "https://www.entegracoach.com",
    type: "factory",
    models: [
      { id: "entegra-ethos", name: "Ethos" },
      { id: "entegra-launch", name: "Launch", chassis: "Sprinter" },
      { id: "entegra-expanse", name: "Expanse", chassis: "Transit" },
    ],
  },
  {
    brand: "Forest River",
    url: "https://www.forestriverinc.com",
    type: "factory",
    note: "New to Class B for 2027 under the Forest River name.",
    models: [
      { id: "forest-river-lucent", name: "Lucent", chassis: "Transit" },
      { id: "forest-river-sommar", name: "Sommar", chassis: "ProMaster" },
    ],
  },
  {
    brand: "Tiffin",
    url: "https://www.tiffinmotorhomes.com",
    type: "factory",
    models: [
      { id: "tiffin-gh1", name: "GH1", chassis: "Sprinter" },
      { id: "tiffin-gh2", name: "GH2", chassis: "Sprinter" },
    ],
  },
  {
    brand: "Pleasure-Way",
    url: "https://www.pleasureway.com",
    type: "factory",
    models: [
      { id: "pleasure-way-plateau", name: "Plateau" },
      { id: "pleasure-way-ascent", name: "Ascent" },
      { id: "pleasure-way-ontour-20", name: "Ontour 2.0" },
      { id: "pleasure-way-ontour-22", name: "Ontour 2.2" },
      { id: "pleasure-way-lexor", name: "Lexor" },
    ],
  },
  {
    brand: "Grech RV",
    url: "https://www.grechrv.com",
    type: "factory",
    models: [
      { id: "grech-strada-ion", name: "Strada-ion", chassis: "Sprinter" },
      { id: "grech-terreno", name: "Terreno-ion", chassis: "Sprinter", verified: true },
      { id: "grech-turismo-ion", name: "Turismo-ion", chassis: "Sprinter" },
      { id: "grech-vacanza-ion", name: "Vacanza-ion", chassis: "Sprinter" },
    ],
  },
  {
    brand: "Midwest Automotive Designs",
    url: "https://www.midwestautomotivedesigns.com",
    type: "factory",
    models: [
      { id: "midwest-passage", name: "Passage" },
      { id: "midwest-patriot", name: "Patriot" },
      { id: "midwest-patriot-cruiser", name: "Patriot Cruiser" },
    ],
  },
  {
    brand: "Chinook RV",
    url: "https://www.chinookrv.com",
    type: "factory",
    models: [{ id: "chinook-bayside", name: "Bayside" }],
  },
  {
    brand: "Roadtrek",
    url: "https://www.roadtrek.com",
    type: "factory",
    note: "Still selling through dealers; factory lineup confirmation in progress.",
    models: [
      { id: "roadtrek-zion", name: "Zion" },
      { id: "roadtrek-play", name: "Play" },
      { id: "roadtrek-chase", name: "Chase" },
      { id: "roadtrek-ss-agile", name: "SS Agile" },
      { id: "roadtrek-westfalia-wave", name: "Westfalia Wave" },
    ],
  },
  {
    brand: "Remote Vans",
    url: "https://www.remotevans.com",
    type: "builder",
    note: "Production builder in Cincinnati, Ohio. Fixed-spec series on the Sprinter 144.",
    models: [
      { id: "remote-vans-t45", name: "T-45", chassis: "Sprinter" },
      { id: "remote-vans-friday", name: "Friday Series", chassis: "Sprinter", verified: true },
      { id: "remote-vans-oasis", name: "Oasis Series", chassis: "Sprinter" },
      { id: "remote-vans-aegis", name: "Aegis Series", chassis: "Sprinter", verified: true },
    ],
  },
  {
    brand: "Storyteller Overland",
    url: "https://www.storytelleroverland.com",
    type: "builder",
    models: [
      { id: "storyteller-overland-mode", name: "MODE OG (Classic)", chassis: "Sprinter", verified: true },
      { id: "storyteller-mode-xo", name: "MODE XO", chassis: "Sprinter" },
      { id: "storyteller-mode-xl-crew", name: "MODE XL CREW", chassis: "Sprinter" },
      { id: "storyteller-mode-xl-tour", name: "MODE XL TOUR", chassis: "Sprinter" },
    ],
  },
  {
    brand: "Sportsmobile",
    url: "https://www.sportsmobile.com",
    type: "builder",
    note: "Built to order since 1961, no fixed models. See our Sportsmobile review.",
    models: [
      { id: "sportsmobile-custom", name: "Custom conversions", chassis: "Sprinter / Transit / ProMaster" },
    ],
  },
  {
    brand: "Outside Van",
    url: "https://www.outsidevan.com",
    type: "builder",
    models: [
      { id: "outside-van-approach", name: "Approach" },
      { id: "outside-van-syncline", name: "Syncline" },
      { id: "outside-van-baseline", name: "Baseline" },
    ],
  },
  {
    brand: "VanDOit",
    url: "https://www.vandoit.com",
    type: "builder",
    models: [
      { id: "vandoit-moov", name: "MOOV", chassis: "Transit" },
      { id: "vandoit-liv", name: "LIV", chassis: "Transit" },
      { id: "vandoit-do", name: "DO", chassis: "Transit" },
    ],
  },
  {
    brand: "Rossmonster",
    url: "https://www.rossmonster.com",
    type: "builder",
    models: [{ id: "rossmonster-skye", name: "Skye", chassis: "Sprinter" }],
  },
  {
    brand: "Dave & Matt Vans",
    url: "https://www.dmvans.com",
    type: "builder",
    note: "Direct-to-consumer value builds from Gypsum, Colorado.",
    models: [
      { id: "dave-matt-lv3", name: "LV3", chassis: "ProMaster" },
      { id: "dave-matt-lv5", name: "LV5", chassis: "ProMaster" },
      { id: "dave-matt-lv7", name: "LV7", chassis: "ProMaster" },
    ],
  },
  {
    brand: "TOURIG",
    url: "https://www.mytourig.com",
    type: "builder",
    note: "Bespoke expedition builds from Golden, Colorado. No production line.",
    models: [{ id: "tourig-custom", name: "Custom builds", chassis: "Sprinter / Transit" }],
  },
  {
    brand: "Titan Vans",
    url: "https://www.titanvans.com",
    type: "builder",
    models: [
      { id: "titan-classic", name: "Classic" },
      { id: "titan-metis", name: "Metis" },
      { id: "titan-ultra", name: "Ultra" },
    ],
  },
  {
    brand: "Field Van",
    url: "https://www.fieldvan.com",
    type: "builder",
    models: [
      { id: "field-van-shyft", name: "SHYFT" },
      { id: "field-van-summit-s1", name: "Summit S1" },
    ],
  },
  {
    brand: "Advanced RV",
    url: "https://www.advanced-rv.com",
    type: "builder",
    note: "One-off ultra-custom builds, from roughly $550,000. No fixed models.",
    models: [{ id: "advanced-rv-custom", name: "One-off custom builds", chassis: "Sprinter" }],
  },
  {
    brand: "ModVans",
    url: "https://www.modvans.com",
    type: "builder",
    models: [
      { id: "modvans-cv1", name: "CV1", chassis: "Transit" },
      { id: "modvans-mh1", name: "MH1", chassis: "Transit" },
    ],
  },
  {
    brand: "Vanworks",
    url: "https://www.vanworks.com",
    type: "builder",
    models: [{ id: "vanworks-switchback", name: "Switchback", chassis: "Sprinter" }],
  },
  {
    brand: "Benchmark Vehicles",
    url: "https://www.benchmarkvehicles.com",
    type: "builder",
    note: "Fully custom overland builds. No production line.",
    models: [{ id: "benchmark-custom", name: "Custom builds", chassis: "Sprinter" }],
  },
];

export const ALL_MODELS: (MarketModel & { brand: string })[] = MARKET.flatMap((b) =>
  b.models.map((m) => ({ ...m, brand: b.brand }))
);

export function findModel(id: string) {
  return ALL_MODELS.find((m) => m.id === id);
}

export const VERIFIED_COUNT = ALL_MODELS.filter((m) => m.verified).length;
export const MODEL_COUNT = ALL_MODELS.length;
export const BRAND_COUNT = MARKET.length;
