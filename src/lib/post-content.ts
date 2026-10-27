export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentBlock {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "callout" | "faq-group" | "image";
  heading?: string;
  text?: string;
  items?: string[];
  faqs?: FAQ[];
  src?: string;
  alt?: string;
  caption?: string;
}

export interface PostContent {
  slug: string;
  intro: string;
  blocks: ContentBlock[];
  relatedSlugs: string[];
}

export const postContent: Record<string, PostContent> = {
  "promaster-vs-sprinter-vs-transit-class-b": {
    slug: "promaster-vs-sprinter-vs-transit-class-b",
    intro:
      "Pick a chassis first and the Class B market sorts itself into three very different short lists. Of the twelve factory models we track with verified figures, seven sit on the Mercedes Sprinter, five sit on the Ram ProMaster, and none sits on the Ford Transit. Every verified Sprinter is diesel. Every verified ProMaster is a front wheel drive gasoline van on a 159 inch wheelbase, with no all wheel drive or diesel version in the pool. Every factory Transit model in our market index is a listed model only, presented from its manufacturer page with no verified model page of its own. This article is a model finder, not a second chassis argument: every placement below comes from the chassis attribute in our verified ledger, verified and listed models are kept in separate tables, and the arguments about height, ride and ownership sit in our existing chassis comparison, linked throughout.",
    relatedSlugs: [
      "sprinter-vs-transit-vs-promaster",
      "best-transit-based-class-b-vans",
      "best-class-b-vans-under-175k",
    ],
    blocks: [
      {
        type: "p",
        text: "A full Sprinter vs Transit vs ProMaster comparison already lives on this site at [Sprinter vs Transit vs ProMaster](/blog/sprinter-vs-transit-vs-promaster): interior dimensions, generic strengths and weaknesses, and the builder ecosystem. This piece extends that article rather than repeating it. Its one job is placement: if you have decided on a chassis, or you are trying to decide, here is exactly which current factory models sit on it, with the wheelbase and drivetrain the manufacturer publishes for each one. If a model cannot be tied to a chassis entry in our ledger, it does not go in a table here. Prices are left out on purpose, because a finder that mixes starting prices, dealer figures and unpublished prices would mislead; prices live in our [cost guide](/blog/how-much-does-a-class-b-van-cost) and our [under $175,000 guide](/blog/best-class-b-vans-under-175k), with their source labels attached.",
      },
      {
        type: "ul",
        heading: "The verified split at a glance, from the ledger chassis attribute",
        items: [
          "Mercedes Sprinter, 7 verified models: Winnebago Revel, Storyteller Overland MODE, Remote Vans Friday, Remote Vans Aegis, Coachmen Galleria, Grech Terreno and Airstream Interstate 24GLX. All diesel, all all wheel drive standard except the Coachmen Galleria",
          "Ram ProMaster, 5 verified models: Thor Tellaro, Thor Sequence, Winnebago Solis, Winnebago Travato and Coachmen Nova. All front wheel drive, all gasoline 3.6L V6, all on a 159 inch wheelbase",
          "Ford Transit, 0 verified models. The factory Transit set in our market index is listed only: Coachmen Beyond, Entegra Coach Expanse, Thor Palladium and Forest River Lucent, each linked to the market index rather than a model page",
          "Listed Sprinter additions, not verified models: Remote Vans Oasis and Remote Vans T-45, both on the Sprinter 144 inch wheelbase with all wheel drive, named in a listed section below and never counted in the verified seven",
        ],
      },
      {
        type: "h2",
        heading: "Sprinter: seven verified models, diesel throughout, in two lengths",
        text: "The Sprinter group is the largest verified group and the only diesel group. It splits cleanly by wheelbase: four shorter vans on the 144 inch wheelbase, built around adventure and modular layouts, and three longer vans on the 170 inch wheelbase, built around touring and luxury layouts. All wheel drive is standard on six of the seven. The one exception matters, and it is named in its own section below: the Coachmen Galleria is rear wheel drive standard, with all wheel drive optional on all floor plans, per our ledger. Never read the Sprinter table as seven all wheel drive vans without that exception attached.",
      },
      {
        type: "ul",
        heading: "Verified Sprinter models, chassis, wheelbase and drivetrain from the ledger",
        items: [
          "Winnebago Revel: Mercedes-Benz Sprinter, 144 inch wheelbase. All wheel drive, 2.0L high output turbo diesel, 211 hp",
          "Storyteller Overland MODE: Mercedes-Benz Sprinter 2500, high roof, 144 inch wheelbase. All wheel drive, always engaged, 4 cylinder high output turbo diesel",
          "Remote Vans Friday: Mercedes-Benz Sprinter 2500, high roof, 144 inch wheelbase. All wheel drive, 4 cylinder twin turbo diesel, 208 hp, 9 speed automatic",
          "Remote Vans Aegis: Mercedes-Benz Sprinter 2500, high roof, 144 inch wheelbase. All wheel drive, 4 cylinder twin turbo diesel, 208 hp, 9 speed automatic",
          "Coachmen Galleria: Mercedes-Benz Sprinter 3500 EXT, 170 inch wheelbase. Rear wheel drive standard, all wheel drive optional on all floor plans, 2.0L turbo I4 diesel, 208 hp and 332 lb-ft, 9 speed automatic",
          "Grech Terreno: Mercedes-Benz Sprinter 3500XD, 170 inch wheelbase, high roof. All wheel drive, 4 cylinder high output diesel, 211 hp and 332 lb-ft, 9 speed automatic, air suspension",
          "Airstream Interstate 24GLX: Mercedes-Benz Sprinter 3500 Extended, 170 inch wheelbase. All wheel drive, 2.0L turbo diesel high output, 208 hp and 332 lb-ft, 9G-TRONIC Plus automatic, air ride suspension",
        ],
      },
      {
        type: "h3",
        heading: "Winnebago Revel: the 144 inch Sprinter benchmark",
        text: "The [Winnebago Revel](/models/winnebago-revel) is the factory adventure benchmark on the short Sprinter. Its ledger placement is the Sprinter at a 144 inch wheelbase, all wheel drive and diesel. A buyer who wants the shortest Sprinter with a factory adventure layout starts here, and a buyer who wants a Winnebago on any other chassis is shopping a different Winnebago: the Solis and the Travato below are ProMasters.",
      },
      {
        type: "h3",
        heading: "Storyteller Overland MODE: a Sprinter now, whatever older pages say",
        text: "The [Storyteller Overland MODE](/models/storyteller-overland-mode) sits on the Sprinter 2500 at a 144 inch wheelbase, all wheel drive and diesel, per Storyteller current page as recorded in our ledger. Older Storyteller history and older search results place the MODE on the Transit. That was an earlier generation. The current MODE must never appear in a Transit list, and it does not appear in one here. Our [Transit guide](/blog/best-transit-based-class-b-vans) makes the same correction in full.",
      },
      {
        type: "h3",
        heading: "Remote Vans Friday and Aegis: the two verified Remote Vans Sprinters",
        text: "The [Remote Vans Friday](/models/remote-vans-friday) and the [Remote Vans Aegis](/models/remote-vans-aegis) share one verified placement: Sprinter 2500, high roof, 144 inch wheelbase, all wheel drive and the same twin turbo diesel. They are the two verified Remote Vans entries in our pool. The other two Remote Vans series, the Oasis and the T-45, sit on the same Sprinter 144 inch platform in our market records, but they are listed models only, so they are named in the listed section below and not counted here.",
      },
      {
        type: "h3",
        heading: "Coachmen Galleria: the 170 inch Sprinter, and the drivetrain exception",
        text: "The [Coachmen Galleria](/models/coachmen-galleria) is the long wheelbase touring entry in the verified Sprinter group, on the Sprinter 3500 EXT at 170 inches. It is also the exception this whole article has to carry carefully: rear wheel drive is standard, and all wheel drive is optional on all floor plans, per the Coachmen features page recorded in our ledger. Every other verified Sprinter is all wheel drive standard. A buyer who needs all wheel drive in a Galleria is buying an option, not the standard van, and should confirm it on the specific van in front of them.",
      },
      {
        type: "h3",
        heading: "Grech Terreno and Airstream Interstate 24GLX: the 170 inch luxury pair",
        text: "The [Grech Terreno](/models/grech-terreno), on the Sprinter 3500XD at 170 inches, and the [Airstream Interstate 24GLX](/models/airstream-interstate-24glx), on the Sprinter 3500 Extended at 170 inches, are both all wheel drive diesel vans with air suspension or air ride in their ledger drivetrain records. Together with the Galleria, they are the long van half of the Sprinter group: more interior length, a touring layout, and the highest belted seating and luxury positioning in the verified pool. A buyer choosing inside the Sprinter group is often choosing this split first, 144 inches for adventure and parking, 170 inches for touring space.",
      },
      {
        type: "h2",
        heading: "ProMaster: five verified models, one uniform specification",
        text: "The ProMaster group is the opposite of the Sprinter group in one useful way: it is uniform. All five verified models are front wheel drive, all run the gasoline 3.6L V6, and all sit on a 159 inch wheelbase. There is no all wheel drive ProMaster and no diesel ProMaster in the pool, at any price. That uniformity is the finder fact. Choosing inside this group is never a chassis decision, because the chassis is the same; it is a floor plan, bathroom, sleeping and price decision, covered model by model in our other guides.",
      },
      {
        type: "ul",
        heading: "Verified ProMaster models, chassis, wheelbase and drivetrain from the ledger",
        items: [
          "Thor Tellaro: Ram ProMaster 3500 XT Window Van, 159 inch wheelbase. Front wheel drive, 3.6L Pentastar V6",
          "Thor Sequence: Ram ProMaster 3500 Window Van, 159 inch wheelbase. Front wheel drive, 3.6L Pentastar V6",
          "Winnebago Solis: Ram ProMaster, 159 inch wheelbase. Front wheel drive, 3.6L V6 gasoline, 280 hp. The Solis line covers the 59P and 59PX floor plans",
          "Winnebago Travato: Ram ProMaster 3500, 159 inch wheelbase. Front wheel drive, 3.6L V6 gasoline, 280 hp",
          "Coachmen Nova: Ram ProMaster 3500, 159 inch wheelbase. Front wheel drive, platform inherent, 3.6L V6, 280 hp",
        ],
      },
      {
        type: "h3",
        heading: "Thor Tellaro and Thor Sequence: two Thor lines, one ProMaster placement",
        text: "The [Thor Tellaro](/models/thor-tellaro) and the [Thor Sequence](/models/thor-sequence) are close twins in this finder, on the same ProMaster 3500 chassis at the same 159 inch wheelbase with the same front wheel drive V6. Nothing in their chassis placement separates them. Thor as a brand separates a lot, though: Thor other Class B lines sit on other chassis, which is the brand trap covered below. Within these two lines, choose on floor plan and the specific van, and run them side by side in the [comparison tool](/compare).",
      },
      {
        type: "h3",
        heading: "Winnebago Solis and Winnebago Travato: the Winnebago ProMaster pair",
        text: "The [Winnebago Solis](/models/winnebago-solis) and the [Winnebago Travato](/models/winnebago-travato) are Winnebago ProMaster half, both front wheel drive gasoline vans on a 159 inch wheelbase. Set against the Revel, they state the Winnebago split plainly: one brand, two chassis, and no overlap. A shopper who starts with the Winnebago name still has to pick a chassis, because the name alone picks neither the fuel, nor the drivetrain, nor the wheelbase.",
      },
      {
        type: "h3",
        heading: "Coachmen Nova: the Coachmen ProMaster",
        text: "The [Coachmen Nova](/models/coachmen-nova) completes the Coachmen split that runs through this whole article. Coachmen builds one verified model on each chassis: the Galleria on the Sprinter above, the Nova here on the ProMaster, and the Beyond on the Transit in the listed table below. The Nova placement itself is the uniform ProMaster one, a 3500 at 159 inches, front wheel drive and gasoline. Our [winter guide](/blog/best-class-b-vans-for-winter) covers the Nova cold weather options, which are options and not a standard rating.",
      },
      {
        type: "h2",
        heading: "Transit: no verified models, and a listed set of four",
        text: "This is the headline a chassis first buyer has to hear plainly. There is no Transit model in our verified pool of twelve, so there is no Transit model page on this site and no Transit row in our comparison tool. That is a statement about our verified pool, not a claim that Transit vans do not exist. The factory Transit set exists in our [market index](/market) as listed models, each placed below on exactly what its manufacturer page or launch release publishes in our ledger, and no more than that. Thin ledger entries stay thin in this article.",
      },
      {
        type: "ul",
        heading: "Listed Transit models, kept out of the verified tables, from the ledger",
        items: [
          "Coachmen Beyond, listed: Ford Transit 350HD, gasoline, 148 inch wheelbase, dual rear wheels with all wheel drive. Engine in its ledger: 3.5L EcoBoost V6, 310 hp and 400 lb-ft, 10 speed automatic. Three floor plans: 22C, 22D and 22RB. See the market index",
          "Entegra Coach Expanse, listed: Ford Transit all wheel drive 350HD, 148 inch wheelbase, 3.73 limited slip axle. Engine in its ledger: 3.5L EcoBoost V6, 310 hp and 400 lb-ft, 10 speed transmission. Two floor plans: 21B and 21T. See the market index",
          "Thor Palladium, listed: Ford Transit T-350, high roof cargo van, all wheel drive, gasoline. Its ledger carries chassis, length and sleeping only, so no engine figure is claimed for it here. See the market index",
          "Forest River Lucent, listed: Ford Transit, and nothing further. Its ledger carries only the chassis name, two launch floor plan names, and no drivetrain, wheelbase or price from its launch release, so none is claimed here. See the market index",
        ],
      },
      {
        type: "p",
        text: "Two rules were held in that table, and both come from the ledger. First, the EcoBoost figures belong only to the two models whose ledgers publish them, the Beyond and the Expanse. They are not borrowed across to the Palladium or the Lucent. Second, where the ledger states a drivetrain for a Transit model, it is gasoline and all wheel drive, and that all wheel drive has no low range: it is a traction system for wet pavement, snow and gravel, not a technical off road system, as our [Transit guide](/blog/best-transit-based-class-b-vans) sets out. The Thor Talavera, the Palladium sister model introduced with it on the Transit Trail chassis in Thor launch post, is named here as that sister and in that guide; it has no ledger file of its own, so it gets no table row in this finder.",
      },
      {
        type: "h2",
        heading: "Listed Sprinter additions, and the builder that builds on all three",
        text: "Two more Sprinter names belong in a complete finder, with their status attached. The Remote Vans Oasis and the Remote Vans T-45 both sit on the Sprinter at a 144 inch wheelbase with all wheel drive, per their ledger files, and both appear in our [market index](/market) as listed models. Our verified Remote Vans entries are the Friday and the Aegis only, under the pool rule this site has held since the Transit guide, so the Oasis and the T-45 are named here as listed additions and never added to the verified count of seven. Sportsmobile is different again: it is a builder, not a factory model line. Our Sportsmobile ledger records conversions on the Sprinter, the Transit with factory all wheel drive, the ProMaster and the Chevrolet Express, with no per model chassis table to publish, so Sportsmobile gets a mention here and our full [Sportsmobile review](/blog/sportsmobile-review), and no table row.",
      },
      {
        type: "h2",
        heading: "Brand does not tell you the chassis",
        text: "The most common way to misuse a finder like this is to shop by brand and assume the chassis follows. In the current factory market it does not, and three brands in the verified and listed pools prove it.",
      },
      {
        type: "ul",
        heading: "The brand splits, from the placements above",
        items: [
          "Coachmen splits three ways: Galleria on the Sprinter, Nova on the ProMaster, Beyond on the Transit. One brand, all three chassis",
          "Thor splits across all three as well in the wider pool: Sequence and Tellaro on the ProMaster, Palladium and its sister Talavera on the Transit, and Sanctuary and Tranquility named as Thor Sprinters in our Transit guide. Those two Sprinter lines are article sourced with no ledger file here, so they are named in this sentence only and given no table row in this finder",
          "Winnebago splits two ways: Revel on the Sprinter, Solis and Travato on the ProMaster. Winnebago has no current Transit Class B in our market index",
          "Storyteller Overland and Remote Vans and Grech and Airstream are Sprinter only in the placements above, and Forest River enters with the Lucent on the Transit and the Sommar on the ProMaster in its launch release, the Sommar named here from that release and given no table row",
        ],
      },
      {
        type: "h2",
        heading: "How to use this finder",
        text: "Work in order. First, decide whether the chassis short list itself rules anything out: diesel and all wheel drive standard point to the Sprinter list, with the Galleria option exception checked van by van; the lowest entry prices and a uniform gasoline front wheel drive specification point to the ProMaster list, which is also where every qualifier in our [under $175,000 guide](/blog/best-class-b-vans-under-175k) sits; the tallest interior and Ford service point to the Transit, where your factory choice is the short listed set above and your wider choice is the builders. Second, read the chassis arguments themselves in our existing [chassis comparison](/blog/sprinter-vs-transit-vs-promaster), which covers dimensions, drivetrain and ownership in the depth this finder deliberately does not repeat. Third, choose inside your chassis list on the things the chassis does not decide: floor plan, bathroom, sleeping and water, which our bathroom, sleeps four and fresh water guides cover model by model. Ownership cost follows the same split, as our [ownership cost guide](/blog/cost-of-owning-a-class-b-van) shows: maintenance and fuel are organized by chassis group, not by conversion brand.",
      },
      {
        type: "ul",
        heading: "Sources for the placements in this article",
        items: [
          "Every chassis, wheelbase and drivetrain placement for the twelve verified models: the Starry Van verified ledger in data/facts, one placement basis throughout, the ledger chassis attribute per model, as recorded from each manufacturer spec or features page and re-verified in October 2026",
          "Coachmen Galleria drivetrain, rear wheel drive standard with all wheel drive optional on all floor plans: Coachmen Galleria features page, as recorded in our verified ledger",
          "Coachmen Beyond chassis and engine, Entegra Coach Expanse chassis and engine, Thor Palladium chassis, and Forest River Lucent chassis: the listed model ledgers behind our Transit guide, checked against each manufacturer page or launch release on October 20, 2026",
          "Remote Vans Oasis and T-45 chassis, Sprinter 144 inch with all wheel drive, as listed models: Remote Vans own pages, as recorded in our market records",
          "Sportsmobile platforms, Sprinter, Transit, ProMaster and Chevrolet Express: Sportsmobile own material, as recorded in our verified Sportsmobile ledger",
          "Chassis arguments, interior dimensions and ownership reasoning referenced rather than repeated: our existing Sprinter vs Transit vs ProMaster comparison, linked in this article",
        ],
      },
      {
        type: "h2",
        heading: "Start with the chassis, then work your short list",
        text: "Seven Sprinters, five ProMasters and no verified Transit: that is the current factory map, and it is more useful than any single recommendation, because it tells you exactly which list to work once you know your chassis. Work your list model by model on the model pages linked throughout this article, run the verified vans through the [comparison tool](/compare), take the [match quiz](/find-my-van) to test your chassis choice against sleeping, bathroom and winter use, and browse the [full market index](/market) for the listed Transit models and the listed Sprinter additions named above. Then verify the chassis, wheelbase and drivetrain on the manufacturer page for the specific van in front of you, because an option like Galleria all wheel drive is decided by that van, not by the line name.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Which Class B vans are built on the Sprinter?",
            answer: "Seven verified models: the Winnebago Revel, the Storyteller Overland MODE, the Remote Vans Friday, the Remote Vans Aegis, the Coachmen Galleria, the Grech Terreno and the Airstream Interstate 24GLX. All are diesel. The Revel, MODE, Friday and Aegis sit on a 144 inch wheelbase, and the Galleria, Terreno and Interstate sit on a 170 inch wheelbase. Two more Remote Vans series, the Oasis and the T-45, sit on the Sprinter 144 inch as listed models, not verified pool models.",
          },
          {
            question: "Which Class B vans are built on the ProMaster?",
            answer: "Five verified models: the Thor Tellaro, the Thor Sequence, the Winnebago Solis, the Winnebago Travato and the Coachmen Nova. The group is uniform: every one is front wheel drive, runs the gasoline 3.6L V6, and sits on a 159 inch wheelbase. There is no all wheel drive or diesel ProMaster model in the verified pool.",
          },
          {
            question: "Which Class B vans are built on the Transit?",
            answer: "None in our verified pool of twelve. The factory Transit models in our market index are listed models only: the Coachmen Beyond, the Entegra Coach Expanse, the Thor Palladium and the Forest River Lucent, each presented from its manufacturer page with no verified model page. The Thor Talavera, the Palladium sister on the Transit Trail chassis, is named in our Transit guide and has no ledger file of its own.",
          },
          {
            question: "Is the Storyteller Overland MODE a Transit van?",
            answer: "Not anymore. The current Storyteller Overland MODE is built on the Mercedes Sprinter 2500 at a 144 inch wheelbase, all wheel drive and diesel, per Storyteller current page as recorded in our verified ledger. Earlier MODE vans were Transit based, which is why older articles and search results still place it on the Transit.",
          },
          {
            question: "Are all Sprinter Class B vans all wheel drive?",
            answer: "No. Six of the seven verified Sprinter models are all wheel drive standard. The Coachmen Galleria is the exception: rear wheel drive is standard, and all wheel drive is optional on all floor plans, per Coachmen features page as recorded in our ledger. Confirm the drivetrain on the specific Galleria in front of you.",
          },
          {
            question: "Does the brand tell you which chassis a Class B van uses?",
            answer: "No. Coachmen builds one model on each chassis, the Galleria on the Sprinter, the Nova on the ProMaster and the Beyond on the Transit. Winnebago splits two ways, the Revel on the Sprinter and the Solis and Travato on the ProMaster. Thor verified lines, the Sequence and Tellaro, are ProMasters, while its Palladium is a Transit and its Sanctuary and Tranquility are Sprinters. Shop the model placement, not the brand name.",
          },
          {
            question: "Which chassis should I choose for a Class B van?",
            answer: "Start from the short lists in this finder, then read the chassis arguments in our Sprinter vs Transit vs ProMaster comparison. In placement terms: the Sprinter list is the diesel list, mostly all wheel drive standard, split between 144 inch adventure vans and 170 inch touring vans. The ProMaster list is the uniform gasoline front wheel drive list on a 159 inch wheelbase, and it holds every factory model that starts under $175,000 on a manufacturer price. The Transit list is the short listed factory set, gasoline and all wheel drive where the ledger states a drivetrain, with no low range, plus the builder conversions. The right chassis is the one whose short list still contains a floor plan, bathroom and sleeping layout you want.",
          },
        ],
      },
    ],
  },
  "best-class-b-vans-under-175k": {
    slug: "best-class-b-vans-under-175k",
    intro:
      "Exactly three of the twelve Class B models we track with verified figures start under $175,000 on a manufacturer published starting price, and all three sit on the Ram ProMaster chassis. The Thor Tellaro starts at $140,560, the Thor Sequence starts at $151,060, and the Winnebago Solis starts at $156,254 in its 59P floor plan only. No Sprinter model and no Transit model in the verified pool qualifies on that basis. Every figure below comes from our verified ledger, on one basis only: manufacturer published starting prices, before options, with floor plans split where the ledger splits them. Dealer figures and listed models are named as near misses, with the reason each one is out, and none of them is counted as a qualifier.",
    relatedSlugs: [
      "how-much-does-a-class-b-van-cost",
      "class-b-vans-that-sleep-four",
      "cost-of-owning-a-class-b-van",
    ],
    blocks: [
      {
        type: "p",
        text: "The label on the price decides whether this band means anything. A manufacturer starting price is the figure the maker publishes for the lowest priced floor plan, before options. A dealer figure is what a dealer publishes for a model whose maker publishes no price, or the sticker on one specific van. A discounted dealer sale price is neither, and using sale prices would put almost any model under almost any line for as long as one listing lasted. So this article holds the rule our [cost guide](/blog/how-much-does-a-class-b-van-cost) holds: starting prices only, source labels intact. On that basis the under $175,000 factory market is three ProMaster models from two brands, and that small answer is the finding.",
      },
      {
        type: "ul",
        heading: "The verified table: Class B starting prices under $175,000, per floor plan",
        items: [
          "Thor Tellaro 20L: $140,560 starting price, manufacturer figure from Thor model page. Enclosed wet bath, gravity flush toilet to a 13.5 gallon black tank, 22 gallons fresh water, sleeps two as standard",
          "Thor Tellaro 20U: $162,120 starting price, manufacturer figure from Thor floor plan page. Enclosed wet bath, cassette toilet at 4.75 gallons, 27 gallons fresh water, sleeps two as standard",
          "Thor Tellaro 20Y: $162,960 starting price, manufacturer figure from Thor floor plan page. Enclosed wet bath, gravity flush toilet to a 14 gallon black tank, 35 gallons fresh water, sleeps two as standard",
          "Thor Sequence 20L: $151,060 starting price, manufacturer figure from Thor model page. Enclosed wet bath, gravity flush toilet to a 13.5 gallon black tank, 22 gallons fresh water, sleeps two as standard",
          "Thor Sequence 20U: $162,120 to $165,060 starting prices, manufacturer figures from Thor floor plan pages. Enclosed wet bath, cassette toilet at 4.75 gallons, 27 gallons fresh water, sleeps two as standard",
          "Thor Sequence 20Y: $162,960 starting price, manufacturer figure from Thor floor plan page. Enclosed wet bath, gravity flush toilet to a 14 gallon black tank, 35 gallons fresh water, sleeps two as standard",
          "Winnebago Solis 59P: $156,254 starting price, manufacturer figure from Winnebago own Solis page. Enclosed wet bath with a swiveling cassette toilet, 20 gallons fresh water, sleeps four as standard with the pop-top",
          "Not in this table: the Winnebago Solis 59PX, which starts at $180,487 on Winnebago own page. The Solis name alone does not put a van under the line; the 59P floor plan does",
        ],
      },
      {
        type: "p",
        text: "One logged conflict belongs with the Thor figures. Thor class B lineup page lists a flat $161,560 for both the Tellaro and the Sequence, while the dedicated model pages publish $140,560 and $151,060 as the low ends. The model page figures govern here, per our manufacturer first policy, and the disagreement stays logged in our ledger rather than hidden. Either way, all three Thor floor plans for each line start under $175,000, so the conflict does not change who qualifies. It changes only the exact starting figure a buyer should budget from, which is why the model page for the specific floor plan is the page to check.",
      },
      {
        type: "h2",
        heading: "The three qualifiers, model by model",
        text: "All three qualifiers are front wheel drive, gasoline, ProMaster based vans with enclosed wet baths. The differences that matter are the starting figure, the floor plan spread, the toilet type, the fresh water size, and whether the van sleeps four without adding an option.",
      },
      {
        type: "h3",
        heading: "Thor Tellaro: from $140,560, the lowest starting price in the pool",
        text: "The [Thor Tellaro](/models/thor-tellaro) is the cheapest verified Class B van on a manufacturer figure, and the only model in the pool that starts under $150,000. All three of its floor plans start under $175,000: the 20L at $140,560, the 20U at $162,120, and the 20Y at $162,960, per Thor own floor plan pages. That spread matters more than the headline. A buyer who wants the 20U or 20Y layout is a $162,000 plus buyer before options, whatever the starting price says. The bathroom splits by floor plan, covered in our [bathroom guide](/blog/class-b-van-bathrooms-wet-bath-dry-bath): a cassette toilet on the 20U, and a gravity flush toilet to a black tank on the 20L and 20Y. Fresh water splits the same way, at 22 gallons on the 20L, 27 on the 20U, and 35 on the 20Y, so the 20Y carries the largest fresh tank in this band. Thor rates the Tellaro at two sleepers as standard. It reaches four only with the optional Sky Bunk pop-top, which is an option at extra cost, not the standard rating, as our [sleeps four guide](/blog/class-b-vans-that-sleep-four) sets out.",
      },
      {
        type: "h3",
        heading: "Thor Sequence: from $151,060, the second Thor line under the line",
        text: "The [Thor Sequence](/models/thor-sequence) starts at $151,060 for the 20L, a manufacturer figure from Thor model page, with the 20U at $162,120 to $165,060 and the 20Y at $162,960. Like the Tellaro, every Sequence floor plan starts under $175,000. The two Thor lines are close twins on the figures this article can verify: the same ProMaster 3500 chassis, the same floor plan names, the same bathroom split with a cassette toilet on the 20U and a flush toilet to a black tank on the 20L and 20Y, and the same fresh water split of 22, 27, and 35 gallons by floor plan. Thor rates the Sequence at two sleepers as standard as well. A buyer choosing between the Tellaro and the Sequence is therefore choosing on layout details, equipment lists, and the specific van and price in front of them, not on a verified headline figure that separates the two lines. Compare the two side by side in the [comparison tool](/compare) and on their model pages before treating either starting price as the price of the van you want.",
      },
      {
        type: "h3",
        heading: "Winnebago Solis 59P: $156,254, and the only qualifier that sleeps four as standard",
        text: "The [Winnebago Solis](/models/winnebago-solis) qualifies in one floor plan only. The 59P starts at $156,254, a manufacturer Starting At figure on Winnebago own Solis page. The 59PX starts at $180,487 on the same page and is out, so any claim that the Solis starts under $175,000 needs the 59P qualifier attached to it. Inside the band, the 59P is the differentiator on sleeping: Winnebago rates it at four as a standard configuration, with the pop-top loft counted in that rating, which makes it the only qualifier that sleeps four without an added option. Its trade is water. At 20 gallons, the 59P carries the smallest fresh tank in this band, against 22 to 35 gallons on the Thor floor plans, and our [fresh water guide](/blog/class-b-fresh-water-capacity-compared) shows what that means for days between fills. Its bathroom is an enclosed wet bath with a swiveling cassette toilet on every Solis floor plan, covered in our [cassette toilet guide](/blog/class-b-vans-with-cassette-toilets). A family of four shopping this band on a manufacturer starting price has, on verified figures, exactly one factory option, and this is it.",
      },
      {
        type: "h2",
        heading: "What each van gives up at this band",
        text: "The band has a shape, and the shape is the honest limit of shopping under $175,000 on a starting price. Every qualifier is a front wheel drive ProMaster van on gasoline. No all wheel drive, no diesel, and no Sprinter or Transit factory option exists under the line on a manufacturer starting price in the verified pool. That absence is a finding, stated as such, not a gap to fill with dealer sale prices. On winter use, per our [winter guide](/blog/best-class-b-vans-for-winter), the Thor lines carry heat pads, and Thor publishes no winter package and no insulation rating for the Sequence or the Tellaro, so neither should be upgraded to a four-season claim. Every qualifier has an enclosed wet bath, and none offers a dry bath, which is true of the whole verified pool. What the band buys you is a complete new factory van with a real bathroom at the lowest verified prices in the market. What it does not buy is drivetrain choice, a published winter rating, or, except in the Solis 59P, standard sleeping for four.",
      },
      {
        type: "h2",
        heading: "The near misses, and why each one is out",
        text: "Four names come up in almost every under $175,000 search, and each one fails the band for a stated reason. Naming them here, with the reason, is what keeps the table above honest.",
      },
      {
        type: "ul",
        heading: "Near misses, with the reason each is out or listed only",
        items: [
          "Coachmen Nova: $178,801, which is over the $175,000 line, and it is a dealer figure. Coachmen publishes no MSRP for the Nova, so the figure in our ledger is a dealer MSRP for the 2026 20RB. It is out twice over, and it is not rounded down or averaged into the band. See the [Coachmen Nova](/models/coachmen-nova) model page for the labeled figure",
          "Winnebago Travato: $183,783, over the line, and also a dealer figure. Winnebago publishes no Travato price, so our ledger carries a dealer base from Lichtsinn RV. See the [Winnebago Travato](/models/winnebago-travato) model page",
          "Winnebago Solis 59PX: $180,487 starting price on Winnebago own page, over the line. Same nameplate as the qualifier, different floor plan, different answer",
          "Remote Vans T-45: $174,900 on Remote Vans own comparison page, which is under the line as a number, but the T-45 is a listed model in our [market index](/market), not one of the twelve verified pool models. Our verified Remote Vans entries are the Friday and the Aegis only. The T-45 is named here as a listed near entry with that status attached, and it does not appear in the verified table",
          "Sportsmobile conversions: published conversion ranges of $80,000 to $125,000 for Transit builds are conversion prices only and exclude the van itself, so they never belong in a factory starting price band, as our [cost guide](/blog/how-much-does-a-class-b-van-cost) sets out",
          "Dealer sale and discount prices generally: advertised sale prices on specific vans run below MSRP across the market. They are prices for one van at one dealer at one moment, not starting prices for a model line, and this band does not use them",
        ],
      },
      {
        type: "h2",
        heading: "How to choose inside a three van band",
        text: "Start with sleeping, because it narrows the band fastest. If four people need to sleep in the van as a standard configuration, the Solis 59P is the only qualifier, and the decision becomes whether its 20 gallon fresh tank and cassette wet bath work for you. If two people travel, all three lines stay in play, and the next filter is the bathroom and water pairing by floor plan: the Thor 20U floor plans pair the band cassette option with 27 gallons of fresh water, the Thor 20Y floor plans pair a flush toilet and black tank with the band largest 35 gallons, and the Thor 20L floor plans are the lowest priced way into each Thor line at 22 gallons. Then price the specific van, not the line. The starting figure belongs to one floor plan before options, and options, a different floor plan, and dealer pricing on a specific unit all move the final figure up from it, which is also why ownership cost belongs in a separate column, as our [ownership cost guide](/blog/cost-of-owning-a-class-b-van) sets out. If your ceiling is firm at $175,000 for the finished van rather than the starting figure, treat the Thor 20L floor plans and the Solis 59P as your realistic starting points and get an out the door price on the exact van before you assume it fits.",
      },
      {
        type: "ul",
        heading: "Sources for the figures in this article",
        items: [
          "Thor Tellaro starting prices by floor plan, 20L from $140,560, 20U from $162,120, 20Y from $162,960, and the logged lineup page figure of $161,560: [Thor Tellaro model page](https://www.thormotorcoach.com/tellaro) and Thor own floor plan pages, as recorded in our verified ledger",
          "Thor Sequence starting prices by floor plan, 20L from $151,060, 20U $162,120 to $165,060, 20Y from $162,960, and the same logged lineup page figure: [Thor Sequence model page](https://www.thormotorcoach.com/sequence) and Thor own floor plan pages, as recorded in our verified ledger",
          "Winnebago Solis 59P Starting At $156,254 and 59PX Starting At $180,487: [Winnebago Solis page](https://www.winnebago.com/models/solis-series/solis), re-verified October 16, 2026 in our verified ledger",
          "Coachmen Nova $178,801 dealer MSRP for the 2026 20RB, labeled a dealer figure because Coachmen publishes no Nova MSRP, and Winnebago Travato $183,783 dealer base from Lichtsinn RV, labeled a dealer figure because Winnebago publishes no Travato price: our verified ledger, as published in our [cost guide](/blog/how-much-does-a-class-b-van-cost)",
          "Remote Vans T-45 $174,900 from Remote Vans own comparison page, recorded as a listed model in our market index, not as a verified pool model: [Remote Vans comparison page](https://remotevans.com/compare-adventure-vans/)",
          "Fresh water, bathroom, toilet and sleeping figures for every model above: the Starry Van verified ledger in data/facts, as published in our fresh water, bathroom, cassette toilet and sleeps four guides linked in this article",
        ],
      },
      {
        type: "h2",
        heading: "Three vans under the line, then price the exact one",
        text: "Under $175,000 on a manufacturer published starting price, the factory Class B market is the [Thor Tellaro](/models/thor-tellaro), the [Thor Sequence](/models/thor-sequence), and the [Winnebago Solis](/models/winnebago-solis) in its 59P floor plan. That is a narrow band, and a narrow band is useful: it tells a buyer exactly where new van money goes furthest, and exactly what has to be given up to stay under the line. Run the three through the [comparison tool](/compare), take the [match quiz](/find-my-van) to weigh price against sleeping, water and bathroom layout, and browse the [full market index](/market) for the listed models outside the verified pool, including the T-45 named above. Then price the exact floor plan and the exact van in front of you, because the starting price is a floor for the line, not a promise for a specific unit.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Which Class B vans cost under $175,000?",
            answer: "On manufacturer published starting prices in our verified pool, exactly three models: the Thor Tellaro from $140,560, the Thor Sequence from $151,060, and the Winnebago Solis at $156,254 in its 59P floor plan only. All three are Ram ProMaster models. No Sprinter or Transit factory model in the verified pool starts under $175,000 on a manufacturer published starting price.",
          },
          {
            question: "What is the cheapest Class B van under $175,000?",
            answer: "The Thor Tellaro, at a manufacturer starting price of $140,560 for the 20L floor plan, from Thor own model page. Its other floor plans also start under the line, at $162,120 for the 20U and $162,960 for the 20Y. Thor class B lineup page lists a flat $161,560 for the Tellaro; the model page figure governs on this site, and the disagreement is logged in our ledger.",
          },
          {
            question: "Is the Coachmen Nova under $175,000?",
            answer: "No. The Nova figure in our verified ledger is $178,801, which is over the $175,000 line, and it is a dealer figure, because Coachmen publishes no MSRP for the Nova. The $178,801 is a dealer MSRP for the 2026 20RB. Dealer sale prices on specific Nova units can be lower, but a sale price on one van is not a starting price for the model line, and this band uses starting prices only.",
          },
          {
            question: "Is the Winnebago Solis under $175,000?",
            answer: "Only in one floor plan. The Solis 59P starts at $156,254, a manufacturer Starting At figure on Winnebago own Solis page. The Solis 59PX starts at $180,487 on the same page and is over the line. The 59P is also the only van in this band that sleeps four as a standard configuration, and it carries the smallest fresh tank in the band, at 20 gallons.",
          },
          {
            question: "Are there any Sprinter Class B vans under $175,000?",
            answer: "Not in the verified pool on a manufacturer published starting price. Every Sprinter model in the pool starts at $192,206 or more on its verified figure. The Remote Vans T-45, a Sprinter based model listed in our market index at $174,900 from Remote Vans own comparison page, is a listed model, not a verified pool model, so it is named in this article as a listed near entry and not counted as a qualifier in the verified table.",
          },
          {
            question: "Which van under $175,000 sleeps four?",
            answer: "The Winnebago Solis 59P, rated at four by Winnebago as a standard configuration with its pop-top loft. The Thor Tellaro is rated at two as standard and reaches four only with the optional Sky Bunk pop-top, which is an added option, not the standard rating. The Thor Sequence is also rated at two as standard. Sleeping figures for all three are covered model by model in our sleeps four guide.",
          },
          {
            question: "Why does this article not use dealer sale prices?",
            answer: "Because a sale price belongs to one specific van at one dealer at one moment, and it changes or disappears with that listing. A starting price belongs to the model line and can be checked on the manufacturer page. Mixing sale prices into a price band would put almost any model under almost any line and would make the band impossible to verify, which is the problem this site exists to fix.",
          },
        ],
      },
    ],
  },
  "cost-of-owning-a-class-b-van": {
    slug: "cost-of-owning-a-class-b-van",
    intro:
      "A Class B van costs money in six places after you buy it: insurance, maintenance, fuel, storage, tires and depreciation. Depreciation is the largest of the six and the only one that is not a cash cost. Start with the honest limit of this article: our verified ledger, the record behind every other guide on this site, contains no ownership cost figures at all. It verifies purchase prices, chassis, fuel tank sizes, warranties and two tire fitments, and nothing else in this article. So every ownership figure below was sourced fresh on October 25, 2026, is published as a range, and is shown with its source and its basis: who the figure assumes you are, how you use the van, and where you keep it. Where published sources disagree, both figures are shown. There is no single national number for any of these costs, and any article that gives you one without its basis is guessing.",
    relatedSlugs: [
      "how-much-does-a-class-b-van-cost",
      "best-class-b-vans-for-winter",
      "class-b-fresh-water-capacity-compared",
    ],
    blocks: [
      {
        type: "p",
        text: "Keep ownership cost and purchase price in separate columns, because they answer different questions. Purchase price is covered in our [cost guide](/blog/how-much-does-a-class-b-van-cost): verified starting prices run from $140,560 for the [Thor Tellaro](/models/thor-tellaro) to $290,400 for the [Grech Terreno](/models/grech-terreno), with one model under $150,000, six between $150,000 and $200,000, and five at $200,000 or more. None of the figures below is added to those prices, and none of them changes them. A cheaper van to buy can be the more expensive van to run, because running cost follows the chassis, the value you insure, and whether you pay to store it, not the badge on the door.",
      },
      {
        type: "ul",
        heading: "Ownership costs at a glance, ranges with their basis, checked October 25, 2026",
        items: [
          "Insurance, recreational use: $504 to $1,500 per year for a Class B camper van (Roamly personal RV insurance guide, citing Progressive data; the same guide puts a motorhome policy with liability, comprehensive and collision at a little over $1,000 per year)",
          "Insurance, full-time use: $1,500 to $4,000 or more per year (InsuredBetter Class B camper van guide; its separate rate table puts Class B cover at $480 to $1,000 per year, which shows how much the basis moves the range)",
          "Maintenance, gas ProMaster chassis: $1,050 to $1,500 per year on average (published ProMaster maintenance guide, checked October 25, 2026)",
          "Maintenance, diesel Sprinter chassis: $1,200 to $2,500 per year for annual routine maintenance (published Sprinter maintenance guide, checked October 25, 2026)",
          "Storage, paid, Class B: $160 and up per month at typical facilities, $140 and up per month through Neighbor (Neighbor RV storage cost guide); outdoor storage $75 to $200 per month, covered $100 to $250, indoor $150 to $550 in the same guide",
          "Tires, all-terrain, verified fitments only: $243.99 per tire for a BFGoodrich KO2 in LT245/70R17 at Pep Boys, and $314.99 to $375.64 per tire for a BFGoodrich KO3 in LT275/70R17 at two retailers, all checked October 25, 2026. A set of four runs about $976 to about $1,503 before tax and, where it is not included, fitting",
          "Fuel, worked example only: 10,000 miles at an assumed 15 miles per gallon, an arithmetic assumption and not a specification for any van, costs $2,040 on gasoline at $3.06 per gallon and $2,453 on diesel at $3.68 per gallon. Those fuel prices are the United States monthly averages for October 2025 published by the Bureau of Transportation Statistics",
          "Depreciation, estimate only: a Class B loses about 15 percent in year one, 24.9 percent by year three, 31.5 percent by year five and 40 percent by year ten on the RV Loan Wizard curve, at about 7,000 miles per year. A second compilation puts the five year loss higher, at 35 to 45 percent. Both are estimates, not ledger figures",
        ],
      },
      {
        type: "p",
        text: "Add those ranges up for one worked example, with the assumptions stated. A recreational owner who keeps the van at home, drives 10,000 miles a year, and runs the fuel example above pays roughly $3,594 to $5,040 a year in cash on a gas ProMaster van: insurance at $504 to $1,500, maintenance at $1,050 to $1,500, and fuel at $2,040. The same owner on a diesel Sprinter pays roughly $4,157 to $6,453: insurance at $504 to $1,500, maintenance at $1,200 to $2,500, and fuel at $2,453. Paying for storage changes the picture more than any other line: at $160 a month it adds $1,920 a year, and indoor storage at the top of the Neighbor range adds $6,600 a year. Depreciation sits outside those cash totals. On an $180,000 van, a purely illustrative price in the middle band, the RV Loan Wizard curve implies a first year loss of about $27,000 in value. That is not a bill you pay. It is the cost you meet when you sell.",
      },
      {
        type: "h2",
        heading: "First, the chassis split that drives maintenance and fuel",
        text: "Our ledger verifies which chassis each model sits on, and that split, not the conversion brand, is the useful way to organize running costs. The Sprinter diesel group in the verified pool is the [Winnebago Revel](/models/winnebago-revel), the [Coachmen Galleria](/models/coachmen-galleria), the [Airstream Interstate 24GLX](/models/airstream-interstate-24glx), the [Grech Terreno](/models/grech-terreno), the [Storyteller Overland MODE](/models/storyteller-overland-mode) and the [Remote Vans Aegis](/models/remote-vans-aegis) and [Remote Vans Friday](/models/remote-vans-friday). The ProMaster gas group is the [Thor Tellaro](/models/thor-tellaro), the [Thor Sequence](/models/thor-sequence), the [Winnebago Solis](/models/winnebago-solis), the [Winnebago Travato](/models/winnebago-travato) and the [Coachmen Nova](/models/coachmen-nova). The Transit gas models in our market index, the Coachmen Beyond, the Entegra Coach Expanse, the Thor Palladium and the Forest River Lucent covered in our [Transit guide](/blog/best-transit-based-class-b-vans), are listed models rather than verified pool models, so no per model running cost is claimed for them here. Fuel tank size is verified: 24 gallons on the ProMaster models and 24.5 to 25 gallons on the Sprinter and Transit models. Fuel economy is not verified for any model, which is why the fuel section below is a labeled example and not a specification table.",
      },
      {
        type: "h2",
        heading: "Insurance: the range is the story",
        text: "Insurance is the clearest case of a cost that has no honest single figure. Roamly, in its personal RV insurance guide checked on October 25, 2026, puts Class B camper vans at $504 to $1,500 per year, travel trailers at $180 to $600, and Class A motorhomes at $1,000 to $4,000, and it cites Progressive data putting a motorhome policy with liability, comprehensive and collision coverage at a little over $1,000 per year, with liability only cover available from $125 per year. InsuredBetter publishes two different Class B ranges in two different places: $480 to $1,000 per year in its rate table, and $500 to $1,500 per year for recreational users in its Class B guide, rising to $1,500 to $4,000 or more per year for full-timers. Those are not errors to average out. They are different bases: liability only against full coverage, recreational use against living in the van, a lower value van against a $250,000 van on agreed value cover, and one state and driver against another. A new Class B at the top of the verified price bands, financed, lived in full-time and garaged in a high cost state will sit at or above the top of every range above. An older van, owned outright, used on weekends and kept at home, will sit near the bottom. Quote your own van, your own state and your own use before you budget a dollar figure.",
      },
      {
        type: "h2",
        heading: "Maintenance: diesel Sprinter against gas ProMaster",
        text: "The published guides checked on October 25, 2026 put the diesel Sprinter above the gas ProMaster on routine cost, and the gap is in the service itself, not in a stereotype about brands. A published Sprinter maintenance guide puts annual routine maintenance at $1,200 to $2,500, a minor service visit at $250 to $600, a major scheduled service at $800 to $2,500, and a diesel oil change at $250 to $450. A Mercedes-Benz Sprinter dealer guide puts current diesel Sprinter scheduled service at intervals of up to 20,000 miles or two years, alternating Service A and Service B, with the van display able to call service sooner. A published ProMaster guide puts average annual maintenance at $1,050 to $1,500, an oil change at $120 to $180 every 6,000 to 8,000 miles, a transmission service at $300 to $450 at 60,000 miles, and brake pads at $250 to $350 at 40,000 miles. A Ram dealer page puts a 2025 ProMaster oil change at $99 to $169 and the recommended interval at about 7,500 miles in normal use. Read those as planning ranges from named guides and dealers, not as quotes: labour rates, dealer against independent shop, and how hard the van works move any single visit outside them. What the ranges do support is the direction and rough size of the difference, a few hundred dollars a year in favour of the gas van on routine work, before any out of warranty repair on either chassis.",
      },
      {
        type: "h3",
        heading: "Warranty decides who pays in the early years, and it is verified for eight models only",
        text: "Our ledger carries a warranty record for eight of the models it tracks, and for those eight the early year maintenance exposure is a published fact rather than a guess. Winnebago covers the [Winnebago Revel](/models/winnebago-revel) and the [Winnebago Solis](/models/winnebago-solis) with a 12 month, 24,000 mile basic warranty. Remote Vans covers the [Remote Vans Aegis](/models/remote-vans-aegis) and the [Remote Vans Friday](/models/remote-vans-friday) for one year or 20,000 miles, for the original owner only. Storyteller covers the [Storyteller Overland MODE](/models/storyteller-overland-mode) for one year or 15,000 miles, with five years on its M-Power battery system. Grech gives the [Grech Terreno](/models/grech-terreno) a three year, 36,000 mile conversion warranty. Airstream gives the [Airstream Interstate 24GLX](/models/airstream-interstate-24glx) a two year limited warranty that transfers to a later owner, alongside three years or 36,000 miles of Mercedes-Benz chassis cover and five years or 100,000 miles on the powertrain. Sportsmobile covers its conversion for three years or 36,000 miles, plus a lifetime warranty against leaks. The ledger carries no warranty record for the Travato, the Tellaro, the Sequence, the Nova, the Galleria or any Transit model, so this article assigns them none. If warranty length decides a purchase between two of those vans, verify it on the manufacturer page for the specific model before you rely on a listing.",
      },
      {
        type: "h2",
        heading: "Fuel: tank size is verified, economy is not, so here is the arithmetic instead",
        text: "No file in our verified ledger carries a fuel economy figure for any model, and this site does not publish one. What can be done honestly is the arithmetic on stated assumptions, so you can replace the assumptions with your own. The Bureau of Transportation Statistics, in its Motor Fuel Prices release for October 2025, put the United States average at $3.06 per gallon for regular gasoline and $3.68 per gallon for diesel, with gasoline on the West Coast at $4.18 per gallon in the same month, which is the regional spread to keep in mind. Take 10,000 miles in a year and an assumed 15 miles per gallon. The 15 miles per gallon is an example input chosen to make the maths readable. It is not a rating, a manufacturer figure or a claim about any van in this article. At that assumption you burn about 667 gallons: $2,040 of gasoline at $3.06, or $2,453 of diesel at $3.68. At 12,000 miles the same example costs $2,448 and $2,944. At West Coast gasoline prices the 10,000 mile example rises to $2,787. Tank size, which is verified, tells you the cost of a fill and the distance between fills on your own economy figure: 24 gallons on a ProMaster van costs $73.44 at $3.06 a gallon, and 24.5 gallons on a Sprinter van costs $90.16 at $3.68. Your real fuel bill is your miles, divided by your real economy, multiplied by the price where you actually travel. Any two of those three numbers will move it more than the choice of van will.",
      },
      {
        type: "h2",
        heading: "Storage: free at home, and the fastest growing cost if it is not",
        text: "Storage is the ownership cost with the widest spread, because the bottom of the range is zero. A Class B is 17 to 23 feet long in the Neighbor guide, small enough that many owners keep it on a driveway or in a garage and pay nothing, subject to local rules and homeowners association limits. If you pay, Neighbor, in its RV storage cost guide checked on October 25, 2026, puts Class B campers and vans at $160 and up per month at typical facilities and $140 and up per month through its own marketplace, for a space of 25 feet and up. By type, the same guide puts outdoor storage at $75 to $200 per month, covered storage at $100 to $250, indoor storage at $150 to $550, communal garage storage at $200 to $400 and up, and a single enclosed unit at $200 to $600 and up, and it states that indoor climate controlled storage typically costs 100 to 200 percent more than outdoor storage. Extra Space Storage, in its RV storage rates guide, shows the regional half of the story in city figures: its listed markets run from $35 to $135 per month in Albuquerque and $49 to $326 in Phoenix to $116 to $868 in Miami, across all storage types. A Class B owner in a low cost market storing outdoors can pay less in a year than an indoor owner in a coastal city pays in two months. Get the local figure. A national average would mislead both of them.",
      },
      {
        type: "h2",
        heading: "Tires: two verified fitments, and what a set costs in those sizes",
        text: "Our ledger verifies a tire fitment for four models only, and a tire price for none, so prices below are retailer listings checked on October 25, 2026 for the two fitments in the verified pool. The [Remote Vans Aegis](/models/remote-vans-aegis) runs BFGoodrich KO2 or KO3 all-terrain tires in 275/70 R17. The [Remote Vans Friday](/models/remote-vans-friday) runs the same pattern in 245/70 R17. The listed Remote Vans Oasis and T-45 carry the same two sizes in our market records, but they are listed models, not verified pool models, so they are not the basis of this section. In the smaller size, Pep Boys listed a BFGoodrich All-Terrain T/A KO2 in LT245/70R17 at $243.99 per tire, so a set of four is $975.96 before tax. In the larger size, a BFGoodrich All-Terrain T/A KO3 in LT275/70R17 was listed at $314.99 per tire as part of a set of four at TrailBuilt Off-Road, and at $375.64 per tire at JustBoltons, so a set of four runs $1,259.96 to $1,502.56 before tax. Fitting, balancing, disposal and state fees add to some listings and are included in others, so compare the fitted total, not the tire price alone. No tire price is claimed for any other model in the pool: most Class B vans run a standard Sprinter, ProMaster or Transit tire size, and the cost that matters is a set in the size on your van, priced where you live. Budget a set as a periodic cost every few years rather than an annual one, and note that the KO3 carries a 50,000 mile limited treadwear warranty in the Monro listing checked the same day, which is a warranty term, not a promise that a set will last that long on a heavy camper van.",
      },
      {
        type: "h2",
        heading: "Depreciation: the largest cost, and the one the sources disagree about most",
        text: "Depreciation is not money you spend each year. It is value you no longer have when you sell, and on a new Class B it is larger than insurance, maintenance, fuel and storage combined in the early years. It also has no ledger basis on this site: our price work publishes starting prices and labeled dealer stickers, and no resale value series, so the figures below are outside estimates, named and dated, and they disagree. RV Loan Wizard, in its depreciation guide checked on October 25, 2026, puts a Class B motorhome at a 15 percent loss in year one at about 7,000 miles per year, then 4 to 7 percent per year in years two to five and 2 to 3 percent in years six to ten, for cumulative losses of 24.9 percent at three years, 31.5 percent at five years and 40 percent at ten years, and it notes that Class B vans retain about 68 percent of value at five years on that curve, the strongest retention of any RV type in its table. A valuation guide published at NADA Book Info puts Class B depreciation higher: about 15 to 18 percent in year one and a 35 to 45 percent loss by year five. On the illustrative $180,000 van, the first curve implies about $123,300 of value left at five years. The second implies $99,000 to $117,000. That gap, roughly $6,000 to $24,000 on the same van, is the honest size of the uncertainty. Brand, mileage, condition, maintenance records and the local used market decide where a specific van lands, and a two or three year old van has already taken the steepest part of either curve, which is the subject of our [used van guide](/blog/should-you-buy-a-covid-era-used-van). Do not plan a purchase on a single depreciation percentage.",
      },
      {
        type: "callout",
        text: "Costs this article does not put a national figure on, on purpose: registration and title fees, sales and property tax treatment, finance interest, campground and park fees, propane and consumables, winterization, and out of warranty repairs to house systems such as lithium batteries, heaters and air conditioners. Each of those is real. Each is set by your state, your loan, your mileage or your specific van, and none of them has a verified or publishable national range in the sources checked for this article. A budget that leaves a line for them, even an estimated one you set yourself, is more honest than a total that pretends they are zero.",
      },
      {
        type: "h2",
        heading: "How to build your own ownership budget",
        text: "Start from the chassis, not the brochure. If your short list is ProMaster gas, plan maintenance on the ProMaster ranges and fuel on gasoline prices. If it is Sprinter diesel, plan on the Sprinter ranges, diesel prices, and the cost of diesel exhaust fluid and fuel filters inside that service pattern. Then replace every range in this article with your own three quotes: an insurance quote on the actual van and value, in your state, for your use; a storage quote in your town, or a confirmed zero if the van lives at home; and a service quote from the shop that will actually maintain it. Add your own miles and your own fuel arithmetic. Keep depreciation in a separate column, on both published curves, so you see the range of what the van may be worth rather than a single hopeful number. Run the vans themselves through the [comparison tool](/compare), take the [match quiz](/find-my-van) to weigh running cost against sleeping, water and bathroom layout, and browse the [full market index](/market) for the listed models outside the verified pool. Our [winter guide](/blog/best-class-b-vans-for-winter) covers the cold weather equipment that can add service and winterization work, and our [fresh water guide](/blog/class-b-fresh-water-capacity-compared) covers the tank sizes behind dump and fill routines.",
      },
      {
        type: "ul",
        heading: "Sources for the ownership cost figures in this article, all checked October 25, 2026",
        items: [
          "Insurance, Class B range and Progressive motorhome figure: Roamly, [Personal RV Insurance Guide](https://www.roamly.com/learning-center/personal-rv-insurance)",
          "Insurance, recreational and full-time Class B ranges and the separate rate table: InsuredBetter, [Class B Camper Van Insurance](https://www.insuredbetter.com/rv-insurance/camper-rv-types/class-b-camper-vans/) and [RV Insurance Cost](https://www.insuredbetter.com/rv-insurance/rate-cost/)",
          "Storage, Class B, outdoor, covered and indoor ranges: Neighbor, [RV Storage Cost Guide](https://www.neighbor.com/storage-blog/rv-storage-cost-guide/)",
          "Storage, regional city ranges: Extra Space Storage, [RV Storage Rates Guide](https://www.extraspace.com/blog/self-storage/your-guide-to-rv-storage-rates/amp/)",
          "Sprinter routine, minor and major service and diesel oil change ranges: [Mercedes-Benz Sprinter Van Maintenance Cost](https://www.paautosales.com/mercedes-benz-sprinter-van-maintenance-cost/), and Sprinter service intervals: [Sprinter Van Maintenance Cost, Laguna Sprinter](https://www.lagunasprintervans.com/sprinter-van-maintenance-cost-what-to-budget-for/)",
          "ProMaster annual maintenance, oil change, transmission and brake ranges: [Is the Ram ProMaster a Reliable Work Van](https://www.paautosales.com/is-ram-promaster-reliable/), and dealer oil change price and interval: [2025 Ram ProMaster Cargo Van Oil Change](https://www.lhmchryslerjeep.com/2025-ram-promaster-cargo-van-oil-change.htm)",
          "Tires, 245/70R17 KO2 price: Pep Boys, [BFGoodrich All-Terrain T/A KO2, LT245/70R17](https://www.pepboys.com/tires/1259946?CID=aff_TD%3ABFGoodrich_CD%3ATires_DT%3A202304&store_code=856&utm_campaign=manufacturer&utm_content&utm_medium=referral&utm_source=click2buy&utm_term=bfgoodrich), and 275/70R17 KO3 prices: [TrailBuilt Off-Road KO3 LT275/70R17](https://www.trailbuiltoffroad.com/buy-wheel-offset2/A874178566050/BFG18380/anthem-off-road-valor-17x85-0-bfgoodrich-all-terrain-t-a-ko3-lt275-70r17) and [JustBoltons KO3 LT275/70R17](https://justboltons.com/bfgoodrich-all-terrain-t-a-ko3-lt275-70r17-124-121s/)",
          "Fuel prices, October 2025 United States monthly averages: Bureau of Transportation Statistics, [Motor Fuel Prices, October 2025](https://www.bts.gov/newsroom/motor-fuel-prices-october-2025-0)",
          "Depreciation, Class B curve: RV Loan Wizard, [RV Depreciation Calculator](https://rvloanwizard.com/calculators/rv-depreciation), and the higher compilation: [RV Buying, Ownership and Resale Guide](https://nadabookinfo.com/rv-buying-ownership-resale-complete-motorhome-valuation-depreciation-guide/)",
          "Purchase price bands, chassis, fuel tank sizes, warranties and tire fitments: the Starry Van verified ledger in data/facts, as published in our [cost guide](/blog/how-much-does-a-class-b-van-cost). The ledger contains no insurance, maintenance, storage, tire price, fuel economy or depreciation figures, and none is attributed to it in this article",
        ],
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "How much does it cost to own a Class B van per year?",
            answer: "On the ranges published and checked on October 25, 2026, a recreational owner who stores the van at home and drives 10,000 miles a year pays roughly $3,594 to $5,040 a year in cash on a gas ProMaster van, and roughly $4,157 to $6,453 on a diesel Sprinter. Those totals add insurance at $504 to $1,500, maintenance at $1,050 to $1,500 for a ProMaster or $1,200 to $2,500 for a Sprinter, and a fuel example built on labeled assumptions. Paid storage adds $1,920 a year at $160 a month and up to $6,600 a year for indoor storage at the top of the published range. Depreciation is on top of the cash costs and is not a bill: published estimates put a Class B down 31.5 percent at five years on one curve and 35 to 45 percent in another compilation.",
          },
          {
            question: "How much is insurance on a Class B camper van?",
            answer: "Roamly, citing Progressive data in its personal RV insurance guide checked on October 25, 2026, puts Class B camper vans at $504 to $1,500 per year, with a motorhome policy covering liability, comprehensive and collision at a little over $1,000 per year and liability only cover from $125 per year. InsuredBetter puts recreational Class B cover at $500 to $1,500 per year and full-time cover at $1,500 to $4,000 or more per year, while its separate rate table puts Class B at $480 to $1,000 per year. The range moves with the value of the van, your state, your driving record, your deductible and whether you live in the van full-time, so there is no single average to budget from.",
          },
          {
            question: "Is a Sprinter Class B more expensive to maintain than a ProMaster Class B?",
            answer: "On routine maintenance, yes, in the published guides checked on October 25, 2026. A published Sprinter guide puts annual routine maintenance at $1,200 to $2,500, with a diesel oil change at $250 to $450. A published ProMaster guide puts average annual maintenance at $1,050 to $1,500, with an oil change at $120 to $180 every 6,000 to 8,000 miles, and a Ram dealer page puts a 2025 ProMaster oil change at $99 to $169 at about a 7,500 mile interval. Those are planning ranges from named guides and dealers, not quotes, and a single out of warranty repair on either chassis can be larger than the annual difference.",
          },
          {
            question: "How much does it cost to store a Class B van?",
            answer: "Nothing if you can keep it at home, which many Class B owners can because the vans are 17 to 23 feet long. If you pay for storage, Neighbor, in its RV storage cost guide checked on October 25, 2026, puts Class B campers and vans at $160 and up per month at typical facilities and $140 and up per month through its own marketplace. By type in the same guide, outdoor storage is $75 to $200 per month, covered storage is $100 to $250, and indoor storage is $150 to $550, with a single enclosed unit at $200 to $600 and up. Location moves the figure as much as type: Extra Space Storage lists markets from $35 to $135 per month in Albuquerque to $116 to $868 in Miami across all storage types.",
          },
          {
            question: "How much do Class B vans depreciate?",
            answer: "Published estimates disagree, and both are shown in this article as estimates, not as verified figures. RV Loan Wizard, checked on October 25, 2026, puts a Class B motorhome at about 15 percent down in year one at about 7,000 miles per year, 24.9 percent down by year three, 31.5 percent by year five and 40 percent by year ten. A valuation guide published at NADA Book Info puts Class B at about 15 to 18 percent in year one and a 35 to 45 percent loss by year five. On an illustrative $180,000 van, that is about $123,300 of value left at five years on the first curve and $99,000 to $117,000 on the second. Brand, mileage, condition and maintenance records decide where a specific van lands.",
          },
          {
            question: "What do tires cost for a Class B van?",
            answer: "Only two tire fitments are verified in our ledger, both on Remote Vans models, and prices are retailer listings checked on October 25, 2026. The Remote Vans Friday runs BFGoodrich all-terrain tires in 245/70 R17: Pep Boys listed a KO2 in LT245/70R17 at $243.99 per tire, or $975.96 for a set of four before tax. The Remote Vans Aegis runs 275/70 R17: a KO3 in LT275/70R17 was listed at $314.99 to $375.64 per tire, or $1,259.96 to $1,502.56 for a set of four before tax. Fitting, balancing, disposal and state fees are included in some listings and added in others, so compare the fitted total. No tire price is claimed for any other model in this article.",
          },
          {
            question: "What fuel economy does a Class B van get?",
            answer: "This site does not publish a fuel economy figure for any Class B van, because no file in our verified ledger carries one and manufacturer pages for these conversions do not publish a comparable rating we can verify. The fuel section of this article is arithmetic on labeled assumptions only: 10,000 miles at an assumed 15 miles per gallon, which is an example input and not a rating, costs $2,040 on gasoline at the October 2025 United States average of $3.06 per gallon published by the Bureau of Transportation Statistics, and $2,453 on diesel at $3.68 per gallon. Replace the assumed economy and the fuel price with your own to get your own figure.",
          },
          {
            question: "What ownership costs are not in this article?",
            answer: "Registration and title fees, sales and property tax treatment, finance interest, campground and park fees, propane and consumables, winterization, and out of warranty repairs to house systems such as lithium batteries, heaters and air conditioners. Each of those costs is real, and each is set by your state, your loan, your mileage or your specific van. None of them has a verified or publishable national range in the sources checked on October 25, 2026, so this article names them without inventing a figure for them. Budget a line for them yourself rather than treating an unlisted cost as zero.",
          },
        ],
      },
    ],
  },
  "class-b-van-bathrooms-wet-bath-dry-bath": {
    slug: "class-b-van-bathrooms-wet-bath-dry-bath",
    intro:
      "No Class B van we track with verified figures offers a true dry bath. Of the twelve verified models, nine have an enclosed wet bath and three have no fixed bath at all. The wet bath group splits two ways: five models run a plumbed flush toilet to a holding tank on every floor plan, the Winnebago Solis and Revel run a fixed cassette toilet, and the Thor Sequence and Tellaro split by floor plan, with a cassette on the 20U and a flush toilet on the 20L and 20Y. The three with no fixed bath, the Storyteller MODE and the Remote Vans Aegis and Friday, pair a stowable shower with a portable toilet. Every claim below comes from our verified ledger. The Winnebago Revel bathroom was re-verified on Winnebago own page on October 24, 2026, and the Winnebago Travato toilet was re-verified in Winnebago 2026 Travato brochure the same day.",
    relatedSlugs: [
      "class-b-vans-with-cassette-toilets",
      "class-b-fresh-water-capacity-compared",
      "best-class-b-vans-for-winter",
    ],
    blocks: [
      {
        type: "p",
        text: "A wet bath is a single waterproof room: the shower, the toilet and usually a small sink share one space, and shower water runs across the floor of the whole room to one drain. A dry bath keeps the shower in its own separate space, so the toilet sits outside the shower and stays dry. That second layout needs more floor space than a Class B van usually has, and in this pool it does not exist: no verified model separates the shower from the toilet. So the real choice in a factory Class B is not wet against dry. It is an enclosed wet bath against no fixed bath at all, and then, inside the wet bath group, a plumbed flush toilet against a removable cassette.",
      },
      {
        type: "ul",
        heading: "Bathroom type by model, from the verified ledger",
        items: [
          "Enclosed wet bath, plumbed flush toilet: Airstream Interstate 24GLX: space-saving wet bath with shower; foot-flush toilet to an 11 gal waste tank, emptied by macerator pump",
          "Enclosed wet bath, plumbed flush toilet: Coachmen Galleria: wet bath with sink and shower; porcelain flush toilet to a black tank on every floor plan, 19 gal (24A), 24 gal (24FL), 12 gal (24Q), 26 gal (24RB)",
          "Enclosed wet bath, plumbed flush toilet: Coachmen Nova: wet bath with fiberglass shower; flush toilet to a black tank on every floor plan, 19 gal (20C and 20D), 10 gal (20RB)",
          "Enclosed wet bath, plumbed flush toilet: Grech Terreno: wet bath with window, sink and shower; porcelain toilet with macerator pump to a 13 gal black tank",
          "Enclosed wet bath, plumbed flush toilet: Winnebago Travato: wet bath; flush toilet to a black tank, 11 gal (59G), 12 gal (59K and 59KL). Re-verified in the 2026 Travato brochure on October 24, 2026",
          "Enclosed wet bath, split by floor plan: Thor Sequence: cassette toilet on the 20U only, 4.75 gal cassette; gravity-flush toilet with black tank on the 20L (13.5 gal) and 20Y (14 gal)",
          "Enclosed wet bath, split by floor plan: Thor Tellaro: cassette toilet on the 20U only, 4.75 gal cassette; gravity-flush toilet with black tank on the 20L (13.5 gal) and 20Y (14 gal)",
          "Enclosed wet bath, fixed cassette: Winnebago Solis: enclosed wet bath with swiveling cassette toilet, 5 gal cassette, on both floor plans",
          "Enclosed wet bath, fixed cassette: Winnebago Revel: wet bath, 31 in by 26 in, with swiveling cassette toilet, 5 gal cassette. Re-verified on Winnebago own page on October 24, 2026",
          "No fixed bath: Storyteller MODE (Classic MODE OG): Halo Shower system plus portable cassette toilet, 2.6 gal, and exterior shower",
          "No fixed bath: Remote Vans Aegis: Cyber Shower recirculating stowable shower plus portable Thetford cassette toilet stored in the shower box; exterior shower",
          "No fixed bath: Remote Vans Friday: Cyber Shower stowable shower plus portable cartridge toilet; exterior shower",
        ],
      },
      {
        type: "p",
        text: "Read the table as three different daily routines, not three trim levels. In a wet bath, the shower is the room: you shower standing in the same space as the toilet, and the whole room is built to get wet and drain. In the no fixed bath group, the shower sets up when you need it and stows when you do not, and the toilet is a portable unit you store, carry and empty by hand. The toilet half of the decision, cassette against black tank, decides how waste leaves the van for as long as you own it, and our [cassette toilet guide](/blog/class-b-vans-with-cassette-toilets) works through that trade in full. The water half is paired tank by tank in our [fresh water capacity guide](/blog/class-b-fresh-water-capacity-compared).",
      },
      {
        type: "h2",
        heading: "Why there is no dry bath on this list",
        text: "A dry bath needs two separate spaces where a wet bath needs one: a shower that keeps its water to itself, and a toilet space outside it. In a van that also has to hold a bed, a galley and belted seating inside a cargo van shell, every verified maker in this pool spends that floor space once, on a combined wet bath, or does not spend it on a fixed bathroom at all. That is why the honest headline of this article is an absence. If a listing or a roundup calls a Class B bathroom dry, check where the toilet sits: if the toilet stands in the shower space, it is a wet bath, whatever the headline calls it.",
      },
      {
        type: "h2",
        heading: "Group one: enclosed wet bath with a plumbed flush toilet",
        text: "Five verified models give you the conventional RV bathroom in miniature on every floor plan: an enclosed wet bath, a sink or shower fittings as listed, and a flush toilet plumbed to a holding tank that empties at a dump station.",
      },
      {
        type: "h3",
        heading: "Airstream Interstate and Grech Terreno: the macerator pair",
        text: "The [Airstream Interstate 24GLX](/models/airstream-interstate-24glx) has what Airstream calls a space-saving wet bath with a shower and a foot-flush toilet running to an 11 gallon waste tank, emptied by a macerator pump system with electric retract, per Airstream specification page. There is no cassette toilet. The [Grech Terreno](/models/grech-terreno) has a wet bath with a window, a sink and a shower, and a porcelain toilet with a macerator pump running to a 13 gallon black tank, per Grech. On both vans the macerator is the detail to notice: the toilet is plumbed and fixed, and emptying is a pump and hose job at a dump point, not a carry-out container.",
      },
      {
        type: "h3",
        heading: "Coachmen Galleria and Nova: wet bath on every floor plan",
        text: "The [Coachmen Galleria](/models/coachmen-galleria) has a wet bath with a sink and a shower and a porcelain flush toilet running to a black tank on every floor plan, per Coachmen: 19 gallons on the 24A, 24 on the 24FL, 12 on the 24Q and 26 on the 24RB. The [Coachmen Nova](/models/coachmen-nova) has a wet bath with a fiberglass shower and a flush toilet running to a black tank on every floor plan: 19 gallons on the 20C and 20D and 10 gallons on the 20RB. Neither Coachmen model offers a cassette on any floor plan, which splits the ProMaster and Sprinter pools cleanly against the Winnebago and Thor entries below.",
      },
      {
        type: "h3",
        heading: "Winnebago Travato: wet bath, flush toilet, no cassette",
        text: "The [Winnebago Travato](/models/winnebago-travato) ledger line for its bathroom is the bare words wet bath, so the toilet was re-verified in Winnebago 2026 Travato brochure on October 24, 2026 before this article was written. The brochure publishes a full wet bath and black holding tanks of 11 gallons on the 59G and 12 gallons on the 59K and 59KL, and publishes no cassette capacity for the model. Our ledger records the Travato toilet as a foot pedal flush toilet running to that black tank. The Travato does not use a cassette toilet. Its Sprinter sibling, the [Winnebago Revel](/models/winnebago-revel), is the Winnebago with the cassette, which is one of the clearest differences between the two vans.",
      },
      {
        type: "h3",
        heading: "Thor Sequence and Tellaro, 20L and 20Y: the flush half of a split line",
        text: "The [Thor Sequence](/models/thor-sequence) and the [Thor Tellaro](/models/thor-tellaro) belong in this group on two of their three floor plans. On the 20L and the 20Y, each line has an enclosed wet bath with a gravity-flush toilet running to a black tank of 13.5 gallons on the 20L and 14 gallons on the 20Y, per Thor floor plan specifications. The third floor plan, the 20U, is in the cassette group below, and that split is the single most blurred bathroom fact in this segment: the model name alone does not tell you which toilet a specific van has.",
      },
      {
        type: "h2",
        heading: "Group two: enclosed wet bath with a fixed cassette",
        text: "Two Winnebago models, and one floor plan in each Thor line, keep the enclosed wet bath and change how waste leaves it: a sealed cassette that slides out and empties through a pour spout, at a dump station or into a regular toilet, with no sewer hose and no black tank.",
      },
      {
        type: "h3",
        heading: "Winnebago Solis: cassette on both floor plans",
        text: "The [Winnebago Solis](/models/winnebago-solis) has an enclosed wet bath with a swiveling cassette toilet and a 5 gallon cassette on both floor plans, the 59P and the 59PX, per Winnebago Solis brochure, and there is no black water tank at all. The Solis is also the only van in this pool rated at four as a standard configuration, covered in our [sleeps four guide](/blog/class-b-vans-that-sleep-four), so it is the one entry here that combines an enclosed bathroom, a cassette and sleeping for four in the same van.",
      },
      {
        type: "h3",
        heading: "Winnebago Revel: the one published wet bath size in the pool",
        text: "The [Winnebago Revel](/models/winnebago-revel) bathroom in our ledger was manufacturer-only, so it was re-verified on Winnebago own Revel page on October 24, 2026 before this article was written. That page still publishes a shower with wall surround, a wet bath at 31 inches by 26 inches, a swiveling cassette toilet and a cassette toilet capacity of 5 gallons. The Revel is the only verified model whose maker publishes a wet bath size in our ledger, which is why it is the only dimension in this article. The cassette trade itself, capacity against emptying flexibility, is worked through in our [cassette toilet guide](/blog/class-b-vans-with-cassette-toilets).",
      },
      {
        type: "h3",
        heading: "Thor Sequence and Tellaro, 20U: the cassette floor plan",
        text: "On the [Thor Sequence](/models/thor-sequence) and the [Thor Tellaro](/models/thor-tellaro), only the 20U has a cassette toilet, with a 4.75 gallon cassette in its enclosed wet bath. Thor floor plan specification pages list waste water at 4.75 gallons on the 20U against the 13.5 and 14 gallon black tanks on the other floor plans, and Thor Tellaro brochure states the split outright. If a dealer advertises a Sequence or a Tellaro as a cassette toilet van, ask which floor plan is on the lot, because two of the three are not.",
      },
      {
        type: "h2",
        heading: "Group three: no fixed bath, stowable shower and portable toilet",
        text: "Three verified models spend the bathroom floor space on living and gear space instead. None of the three has a fixed wet bath or a black tank. What each has is a shower system that stows away, a portable toilet, and an exterior shower.",
      },
      {
        type: "h3",
        heading: "Storyteller MODE: Halo Shower and a 2.6 gallon portable",
        text: "The [Storyteller Overland MODE](/models/storyteller-overland-mode), in Classic MODE OG form, has no fixed wet bath. Storyteller fits a Halo Shower system, a portable cassette toilet with 2.6 gallons of capacity and an exterior shower, per Storyteller specifications. The trade is stated plainly in the rest of the MODE record: the floor space a fixed bathroom would take goes to the living layout, and the van carries its 37 gallon fresh tank inside the cabin, the largest in this pool, paired in our [fresh water guide](/blog/class-b-fresh-water-capacity-compared). A buyer who needs an enclosed bathroom should cross this van off early. A buyer who showers outside or at facilities is not paying for a room they will not use.",
      },
      {
        type: "h3",
        heading: "Remote Vans Aegis and Friday: Cyber Shower and a toilet in the shower box",
        text: "The [Remote Vans Aegis](/models/remote-vans-aegis) has no fixed wet bath: a Cyber Shower recirculating stowable shower system, a portable Thetford cassette toilet stored in the shower box, and an exterior shower, per Remote Vans. Remote Vans describes the Cyber Shower as recirculating and claims showers of 10 or more minutes on under 3.5 gallons, which is the manufacturer claim recorded in our ledger. The [Remote Vans Friday](/models/remote-vans-friday) makes the same trade with the same Cyber Shower pattern and what Remote Vans calls a portable cartridge toilet, plus an exterior shower. Neither van has a black tank. Our [Remote Vans review](/blog/remote-vans-review) covers the rest of that bathroom trade in detail.",
      },
      {
        type: "callout",
        text: "Do not borrow a bathroom across a brand lineup. Remote Vans Oasis and T-45 carry the same Cyber Shower and portable toilet pattern in our market records, but they are listed models, not verified pool models, so they are not in the table above. The rule runs the other way as well: a bathroom fitted on one floor plan is not a bathroom fitted on the whole line, which is exactly the Thor 20U split.",
      },
      {
        type: "h2",
        heading: "Bathroom dimensions: one published size, and the missing ones",
        text: "Buyers ask for wet bath dimensions more than almost any other bathroom figure, and the verified record is thin. The Revel at 31 inches by 26 inches, re-verified on Winnebago own page on October 24, 2026, is the only wet bath size in our ledger. Coachmen publishes no wet bath dimensions in its specification tables for the Galleria or the Nova. Winnebago Travato brochure floor plan diagrams state no consistent figure for every floor plan, so no Travato size is quoted here. Thor Tellaro brochure graphics carry a 48 inch by 26 inch wet bath figure that cannot be attributed to a specific floor plan from the published material, so this article does not use it. Where a maker publishes no size, this article reports that absence rather than filling it from a dealer page. If the size of the room decides your purchase, measure the specific van, because the published record will not settle it for any model but the Revel.",
      },
      {
        type: "h2",
        heading: "Models that are not in this table, and why",
        text: "The Transit-based factory models in our [market index](/market), the Coachmen Beyond, the Entegra Coach Expanse, the Thor Palladium and the Forest River Lucent covered in our [Transit guide](/blog/best-transit-based-class-b-vans), carry no bathroom attribute in our verified ledger, so no bathroom claim is made for them here. Custom builders such as Sportsmobile build bathrooms to each client layout, so there is no single factory bathroom to tabulate. If the bathroom decides your purchase on any of those vans, verify the bath type and the toilet type on the manufacturer page for the specific model and floor plan before you rely on a listing description.",
      },
      {
        type: "ul",
        heading: "Sources for the bathroom claims in this article",
        items: [
          "Airstream Interstate 24GLX: [Airstream Interstate 24GLX specification page](https://www.airstream.com/explore-products/touring-coaches/interstate/interstate-24glx-spec-detail-page)",
          "Coachmen Galleria: [Coachmen Galleria floor plan page](https://coachmenrv.com/galleria/24Q/15166), and Coachmen Nova: [Coachmen Nova features page](https://coachmenrv.com/print/features/nova)",
          "Grech Terreno: [Grech Terreno model page](https://grechrv.com/model/2027-terreno-ion-awd/)",
          "Winnebago Solis: [Winnebago Solis brochure](https://assets-cdn.interactcp.com/lichtsinn/pdfs/Solis-brochure.pdf), and Winnebago Travato: [Winnebago 2026 Travato brochure](https://assets-cdn.interactcp.com/lichtsinn/pdfs/Travato-2026-brochure.pdf), re-verified on October 24, 2026",
          "Winnebago Revel: [Winnebago Revel product page](https://www.winnebago.com/models/product?GroupID=GROUP257&ProductID=PROD670&VariantID=44E), re-verified on October 24, 2026",
          "Thor Sequence: [Thor Sequence 20U floor plan page](https://www.thormotorcoach.com/sequence/floor-plans/20u), and Thor Tellaro: [Thor Tellaro brochure](https://media-center.thormotorcoach.com/m/64eff1d433c59607/original/aNvCQZ5xUNkB1RNP_2026-OH-Tellaro-pdf.pdf)",
          "Storyteller MODE: [Storyteller 2026 Classic MODE OG page](https://www.storytelleroverland.com/pages/2026-classic-mode-og)",
          "Remote Vans Aegis: [Remote Vans Aegis Series page](https://remotevans.com/van/aegis-series-2026/), and Remote Vans Friday: [Remote Vans Friday Series page](https://remotevans.com/van/2026-friday-series/)",
        ],
      },
      {
        type: "h2",
        heading: "How to choose a Class B bathroom",
        text: "Start with the routine you will actually live with. If you want a private enclosed room and a plumbed toilet that works like the one at home, your pool is group one: the Interstate, the Terreno, the Galleria, the Nova and the Travato, plus the Thor 20L and 20Y. If you want that same enclosed room with waste you can empty at a wider range of places, your pool is group two: the Solis, the Revel and the Thor 20U floor plans. If living space matters more than an enclosed bathroom, and you are content to set a shower up and stow it again, your pool is group three: the MODE, the Aegis and the Friday. And if a separate dry toilet space is a hard requirement, no van in the verified factory pool meets it, and that is worth knowing before you shop, not after. Run your short list through the [comparison tool](/compare), take the [match quiz](/find-my-van) to weigh the bathroom against sleeping, water and budget, and browse the [full market index](/market) for the listed models outside the verified table.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Do any Class B vans have a dry bath?",
            answer: "No. None of the twelve Class B vans we track with verified manufacturer figures offers a true dry bath, meaning a shower kept separate from the toilet. Nine models have an enclosed wet bath, where the shower, toilet and usually a sink share one waterproof room, and three models, the Storyteller MODE and the Remote Vans Aegis and Friday, have no fixed bath at all.",
          },
          {
            question: "What is a wet bath in a Class B van?",
            answer: "A wet bath is a single waterproof bathroom room: the shower, the toilet and usually a small sink share one space, and shower water runs across the floor of the whole room to one drain. Every enclosed bathroom in the verified Class B pool is a wet bath, including the Airstream Interstate, the Coachmen Galleria and Nova, the Grech Terreno, the Winnebago Travato, Solis and Revel, and the Thor Sequence and Tellaro.",
          },
          {
            question: "Which Class B vans have an enclosed wet bath?",
            answer: "Nine of the twelve verified models: the Airstream Interstate 24GLX, Coachmen Galleria, Coachmen Nova, Grech Terreno, Winnebago Travato, Winnebago Solis, Winnebago Revel, Thor Sequence and Thor Tellaro. Five of them, the Interstate, Galleria, Nova, Terreno and Travato, run a plumbed flush toilet on every floor plan. The Solis and Revel run a fixed cassette toilet, and the Sequence and Tellaro split by floor plan.",
          },
          {
            question: "Which Class B vans have no fixed bathroom?",
            answer: "Three verified models: the Storyteller MODE, the Remote Vans Aegis and the Remote Vans Friday. The MODE pairs a Halo Shower system with a portable cassette toilet of 2.6 gallons and an exterior shower. The Aegis and Friday pair a stowable Cyber Shower with a portable cassette or cartridge toilet stored in the shower box, plus an exterior shower. None of the three has a fixed wet bath or a black tank.",
          },
          {
            question: "What bathroom does the Winnebago Travato have?",
            answer: "The Travato has a wet bath with a flush toilet running to a black tank, 11 gallons on the 59G and 12 gallons on the 59K and 59KL, per Winnebago 2026 Travato brochure, re-verified on October 24, 2026. It does not use a cassette toilet. The Winnebago with the fixed cassette in an enclosed wet bath is the Solis, and the adventure van with one is the Revel.",
          },
          {
            question: "How big is a Class B wet bath?",
            answer: "The Winnebago Revel is the only verified model whose maker publishes a wet bath size in our ledger: 31 inches by 26 inches, with a 5 gallon swiveling cassette toilet, re-verified on Winnebago own page on October 24, 2026. Coachmen publishes no wet bath dimensions for the Galleria or Nova, and no consistent Travato figure is published, so no other size is quoted on this site. A wet bath figure on a dealer page is not a manufacturer figure.",
          },
          {
            question: "Do the Thor Sequence and Tellaro have the same bathroom on every floor plan?",
            answer: "No. Both lines split by floor plan. The 20U has an enclosed wet bath with a cassette toilet and a 4.75 gallon cassette. The 20L and 20Y have an enclosed wet bath with a gravity-flush toilet running to a black tank of 13.5 gallons on the 20L and 14 gallons on the 20Y. Thor states the Tellaro split in its brochure and lists both waste figures on its floor plan specification pages.",
          },
          {
            question: "What do you actually get instead of a bathroom in the MODE and Remote Vans models?",
            answer: "A shower system that stows away and a portable toilet. The Storyteller MODE has a Halo Shower system, a portable cassette toilet of 2.6 gallons and an exterior shower. The Remote Vans Aegis has a recirculating Cyber Shower, a portable Thetford cassette toilet stored in the shower box and an exterior shower, and the Friday has the same Cyber Shower pattern with a portable cartridge toilet. The trade is floor space: no fixed bathroom room, and no black tank.",
          },
        ],
      },
    ],
  },
  "best-class-b-vans-for-winter": {
    slug: "best-class-b-vans-for-winter",
    intro:
      "The strongest winter hardware in the twelve verified Class B models is specific, and it is not a label. The Grech Terreno heats all three of its tanks with 12V heat and runs Timberline diesel hydronic heat. The Airstream Interstate 24GLX heats its fresh and gray tanks and heats its lithium bank. The Storyteller MODE keeps its 37 gallon fresh tank inside the cabin and heats its gray tank with a heating loop. At the other end, the Coachmen Galleria and Nova sell their tank heating as options, not standard equipment, the Remote Vans Aegis and Friday publish no four-season rating, and Thor publishes no winter package and no insulation rating for the Sequence or Tellaro. Every claim below comes from our verified ledger, and the Winnebago Revel winter equipment was re-verified on Winnebago own page on October 23, 2026.",
    relatedSlugs: [
      "class-b-fresh-water-capacity-compared",
      "best-transit-based-class-b-vans",
      "how-much-does-a-class-b-van-cost",
    ],
    blocks: [
      {
        type: "p",
        text: "The short answer is to buy the features, not the phrase four-season. Only one model in this pool, the Storyteller MODE, is even marketed as a four-season design, and this article still judges it on the features underneath that marketing: diesel-fired heat, a gray tank heating loop and a fresh tank inside the cabin. Two models are described by their own makers in weaker terms: Winnebago attaches winter use guidelines to the Solis and does not market it as true four-season, and the Travato is marketed for extended-season camping. The rest publish features without a season rating at all. So the comparison that matters is four checks per van: how the cabin is heated, whether the tanks are heated or placed inside, what insulation is published, and which wheels drive the van.",
      },
      {
        type: "ul",
        heading: "Winter features for the verified pool, from the verified ledger",
        items: [
          "Grech Terreno: all three tanks 12V heated; Timberline diesel hydronic heat and hot water; full fiberglass insulation; insulated subfloor; AWD",
          "Airstream Interstate 24GLX: 12V heated fresh and gray tanks; Timberline diesel hydronic heat and hot water; 10.3 kWh lithium battery with built-in heater; AWD",
          "Storyteller MODE: diesel-fired heat and water heating; gray tank heating loop; fresh tank inside the cabin at 37 gal; polymer insulation; marketed as four-season design; AWD",
          "Winnebago Revel: hydronic heating; insulated gray tank; winterization package; dual-pane windows; AWD. Re-verified on Winnebago own page on October 23, 2026",
          "Remote Vans Aegis: upgraded Rixen hydronic air and water heating, diesel and electric, with main and rear blowers; gray tank heating loop; Kilmat, Solarcore and Havelock wool insulation; no four-season rating published; AWD",
          "Remote Vans Friday: Rixen hydronic air and water heating; gray tank heating loop; Kilmat, Solarcore and Havelock wool insulation; no four-season rating published; AWD",
          "Coachmen Galleria: R-15 insulation standard and R-38 reflective floor insulation; Truma Combi Eco Plus heat and hot water; Cozy Wrap insulation and Polar Package Plus tank heating pads are options, not standard; RWD standard, AWD optional on all floor plans",
          "Coachmen Nova: Rockwool R-15 insulation standard; fresh and black tanks above the floor; Cozy Wrap insulation and gray tank heaters are options, not standard; Truma Combi Eco Plus; front wheel drive on the Ram ProMaster",
          "Winnebago Travato: Truma Combi G Comfort Plus heat and hot water; heated tanks; insulation; thermal window covers; marketed for extended-season camping, not four-season; front wheel drive on the Ram ProMaster",
          "Winnebago Solis: ceiling-to-floor insulation; interior waterlines; freeze-resistant exterior fill; Truma Combi Eco; Winnebago attaches a winter use guidelines note and does not market the Solis as true four-season; front wheel drive on the Ram ProMaster",
          "Thor Sequence and Thor Tellaro: holding tank heat pads; Truma Combi Eco heat and hot water; Thor publishes no winter package and no insulation rating for either model; front wheel drive on the Ram ProMaster",
        ],
      },
      {
        type: "p",
        text: "Read the table by what is standard. A feature listed as an option protects you only if the specific van you are buying has that option fitted, and a used van listing may not say. That distinction decides the Coachmen section below. It also decides how to read the absences: where a maker publishes no insulation rating and no winter package, this article reports that absence rather than filling it from a dealer page. Tank size interacts with winter use as well, because a heated tank still has to hold enough water for the trip, and our [fresh water capacity guide](/blog/class-b-fresh-water-capacity-compared) pairs every fresh figure here with its gray and waste figures.",
      },
      {
        type: "h2",
        heading: "The strongest standard winter hardware: Terreno and Interstate",
        text: "Two luxury Sprinter models publish the most complete standard winter lists in the pool. Both heat their tanks as standard equipment, both use diesel hydronic heat, and both drive all four wheels.",
      },
      {
        type: "h3",
        heading: "Grech Terreno: all three tanks heated",
        text: "The [Grech Terreno](/models/grech-terreno) is the only model in the verified pool whose ledger records all three tanks, fresh, gray and black, as 12V heated, per the Grech owner manual specification table. Its heat and hot water come from a Timberline diesel hydronic system, its insulation is full fiberglass, and its subfloor is insulated. The Terreno is all wheel drive on the Sprinter 3500XD chassis. No option package has to be added to get the tank heating: it is part of the standard winter record for the model.",
      },
      {
        type: "h3",
        heading: "Airstream Interstate 24GLX: heated tanks and a heated battery",
        text: "The [Airstream Interstate 24GLX](/models/airstream-interstate-24glx) heats its fresh and gray tanks with 12V heat, runs Timberline diesel hydronic heat and hot water, and carries a 10.3 kWh lithium battery with a built-in heater, per Airstream specification page. That battery heater matters in winter because a cold lithium bank is a power limit as well as a comfort question. The Interstate is all wheel drive. Its ledger records no heated black tank, so this article claims heated fresh and gray only, which is the exact split Airstream publishes.",
      },
      {
        type: "h2",
        heading: "The adventure pair: MODE and Revel",
        text: "The two best known adventure vans take a different route to winter use. Instead of heating every tank, they protect the fresh supply by placement and heat the gray side with insulation or a heating loop.",
      },
      {
        type: "h3",
        heading: "Storyteller MODE: the fresh tank lives inside",
        text: "The [Storyteller Overland MODE](/models/storyteller-overland-mode) carries its 37 gallon fresh tank inside the cabin, which is the simplest freeze protection in this pool: the water sits in heated living space rather than under the floor. Its heat and water heating are diesel-fired, its gray tank has a heating loop, and its insulation is polymer, per Storyteller specifications for the Classic MODE OG. Storyteller markets the MODE as a four-season design. The features above are the substance behind that phrase, and they are what a buyer should verify on a specific van. The MODE is all wheel drive. Its full tank pairing is in our [fresh water guide](/blog/class-b-fresh-water-capacity-compared), and its starting price is covered in our [cost guide](/blog/how-much-does-a-class-b-van-cost).",
      },
      {
        type: "h3",
        heading: "Winnebago Revel: hydronic heat and an insulated gray tank",
        text: "The [Winnebago Revel](/models/winnebago-revel) winter record in our ledger was manufacturer-only, so it was re-verified on Winnebago own Revel page on October 23, 2026 before this article was written. That page still publishes a hydronic heating system, an insulated gray water holding tank, a winterization package with valve and siphon tube, and tinted dual-pane windows, on an all wheel drive Sprinter chassis. Winnebago's page also carries its own caution: it recommends following the winter use guidelines and winterization procedures in the owner manual whenever camping in freezing conditions. Read that as part of the Revel winter story. The hardware is real, and the maker still tells owners to winterize by the book.",
      },
      {
        type: "h2",
        heading: "Remote Vans Aegis and Friday: strong heat, no season rating",
        text: "Remote Vans publishes heating and insulation detail for its two higher models and, notably, no season claim to go with it. That restraint is information a buyer can use.",
      },
      {
        type: "h3",
        heading: "Aegis and Friday, feature by feature",
        text: "The [Remote Vans Aegis](/models/remote-vans-aegis) runs an upgraded Rixen hydronic air and water heating system, diesel and electric, with main and rear blowers, a gray tank heating loop, and an insulation stack of Kilmat, Solarcore and Havelock wool, per Remote Vans. The [Remote Vans Friday](/models/remote-vans-friday) runs Rixen hydronic heating with the same gray tank heating loop and the same insulation stack. Both are all wheel drive Sprinters. The ledger states explicitly for both models that no four-season rating is published, so this article does not call either van four-season rated. Judge them on the Rixen system, the gray loop and the insulation, which are published, rather than on a rating that does not exist.",
      },
      {
        type: "callout",
        text: "Do not borrow winter equipment across a brand lineup. Remote Vans Oasis and T-45 carry no winter attribute in our ledger, so no Aegis or Friday heating or insulation claim is extended to them here. The same rule applies in reverse: a feature on one floor plan or one model year is not a feature of the whole line until the maker publishes it that way.",
      },
      {
        type: "h2",
        heading: "Coachmen Galleria and Nova: the option package decides",
        text: "Coachmen publishes real insulation figures for both of its verified models, which puts it ahead of brands that publish none. The trap is the tank heating: on both models it is an option, and the classic error in winter roundups is printing it as standard equipment.",
      },
      {
        type: "h3",
        heading: "Galleria: R-15 and R-38 standard, tank heat optional",
        text: "The [Coachmen Galleria](/models/coachmen-galleria) carries R-15 insulation as standard equipment and R-38 reflective insulation in the floor, with Truma Combi Eco Plus heat and hot water, per Coachmen. The Cozy Wrap insulation package and the Polar Package Plus tank heating pads are options. A Galleria without the Polar Package Plus does not have the tank heating pads, whatever a roundup says. The Galleria also breaks the all wheel drive pattern in this pool: it is rear wheel drive as standard, with all wheel drive optional on all floor plans, so the drivetrain is an option to verify on the specific van as well.",
      },
      {
        type: "h3",
        heading: "Nova: above-floor tanks help, gray heat is optional",
        text: "The [Coachmen Nova](/models/coachmen-nova) carries Rockwool R-15 insulation as standard and places its fresh and black tanks above the floor, which keeps those tanks in the warmer part of the van, per Coachmen. Its heat and hot water are Truma Combi Eco Plus. The Cozy Wrap insulation package and the gray tank heaters are options, not standard equipment, so a Nova buyer who needs gray tank heat has to confirm the option on the specific van. The Nova is a Ram ProMaster van, so it is front wheel drive, like the other ProMaster models in this pool.",
      },
      {
        type: "h2",
        heading: "Extended season, honestly labeled: Travato and Solis",
        text: "Winnebago's two ProMaster vans publish useful cold weather equipment and weaker season language than the adventure vans. That combination makes them shoulder-season vans on their own maker wording, not four-season vans.",
      },
      {
        type: "h3",
        heading: "Winnebago Travato: heated tanks, extended-season wording",
        text: "The [Winnebago Travato](/models/winnebago-travato) runs a Truma Combi G Comfort Plus furnace and water heater, heated tanks, insulation and thermal window covers, per the Winnebago 2026 Travato brochure recorded in our ledger. Winnebago markets the Travato for extended-season camping. This article keeps that wording, because it is the maker own limit: extended season is a real capability, and it is not the same claim as four-season. The Travato is front wheel drive on the ProMaster.",
      },
      {
        type: "h3",
        heading: "Winnebago Solis: insulated, with an asterisk",
        text: "The [Winnebago Solis](/models/winnebago-solis) publishes ceiling-to-floor insulation, interior waterlines, a freeze-resistant exterior fill and a Truma Combi Eco, per Winnebago. Interior waterlines and a freeze-resistant fill are sensible cold weather design. Winnebago still attaches a winter use guidelines asterisk to the Solis and does not market it as true four-season, so this article does not either. A Solis buyer planning winter trips should read Winnebago winter use guidelines for the model before relying on the insulation list. The Solis is also the only van in the pool rated at four as a standard configuration, covered in our [sleeps four guide](/blog/class-b-vans-that-sleep-four), and it is front wheel drive on the ProMaster.",
      },
      {
        type: "h2",
        heading: "Thor Sequence and Tellaro: heat pads, and two absences",
        text: "The Thor pair have the thinnest published winter record in the verified pool. What they have is simple to state, and what they do not publish matters just as much.",
      },
      {
        type: "h3",
        heading: "What Thor publishes, and what it does not",
        text: "The [Thor Sequence](/models/thor-sequence) and the [Thor Tellaro](/models/thor-tellaro) each carry holding tank heat pads and Truma Combi Eco furnace and water heating, per Thor own pages recorded in our ledger. Thor publishes no winter package for either model and no insulation rating for either model. That absence is a reportable fact, not a gap to fill from a dealer page: no R-value for a Sequence or Tellaro appears in this article, because no manufacturer R-value exists in the ledger to quote. Both models are front wheel drive ProMaster vans. Their bathrooms and cassette options are covered in our [cassette toilet guide](/blog/class-b-vans-with-cassette-toilets).",
      },
      {
        type: "h2",
        heading: "Drivetrain: all wheel drive is not universal",
        text: "Winter driving is the second half of a winter van, and the pool splits cleanly by chassis. The Sprinter-based models in the table, the Terreno, Interstate, MODE, Revel, Aegis and Friday, are all wheel drive. The Galleria is the exception on Sprinter, rear wheel drive standard with all wheel drive optional. Every ProMaster model in the pool, the Nova, Travato, Solis, Sequence and Tellaro, is front wheel drive. Front wheel drive is not a winter disqualification, and this article makes no traction claim beyond the drivetrain each maker publishes. It does mean a buyer who sets all wheel drive as a hard requirement is shopping the Sprinter list plus an optioned Galleria, and should say so early. Custom builders such as Sportsmobile convert on several chassis, including Sprinter, Transit all wheel drive, ProMaster and a Chevrolet Express 4x4, but our ledger carries no per model winter specification for Sportsmobile, so it gets a chassis mention here and no place in the winter table.",
      },
      {
        type: "h2",
        heading: "Models that are not in this table, and why",
        text: "The Transit-based factory models in our [market index](/market), the Coachmen Beyond, the Entegra Coach Expanse, the Thor Palladium and the Forest River Lucent covered in our [Transit guide](/blog/best-transit-based-class-b-vans), are all wheel drive vans, but our ledger carries chassis and drivetrain only for them and no winter attribute. No winter claim is made for them here, because a winter claim needs a manufacturer heating, tank or insulation record behind it, not just a driven axle. If winter use is your deciding factor on a Transit van, verify the heating system, tank placement and any winter package on the manufacturer page for the specific model before you rely on it.",
      },
      {
        type: "ul",
        heading: "Sources for the winter features in this article",
        items: [
          "Airstream Interstate 24GLX: [Airstream Interstate 24GLX specification page](https://www.airstream.com/explore-products/touring-coaches/interstate/interstate-24glx-spec-detail-page)",
          "Grech Terreno: [Grech Terreno model page](https://grechrv.com/model/2027-terreno-ion-awd/), with tank and insulation figures from the Grech owner manual specification table recorded in our ledger",
          "Storyteller MODE: [Storyteller 2026 Classic MODE OG page](https://www.storytelleroverland.com/pages/2026-classic-mode-og)",
          "Winnebago Revel: [Winnebago Revel product page](https://www.winnebago.com/models/product?GroupID=GROUP257&ProductID=PROD670&VariantID=44E), re-verified on October 23, 2026, and Winnebago Solis: [Winnebago Solis page](https://www.winnebago.com/models/solis-series/solis), with Travato figures from the 2026 Travato brochure recorded in our ledger",
          "Remote Vans Aegis: [Remote Vans Aegis Series page](https://remotevans.com/van/aegis-series-2026/), and Remote Vans Friday: [Remote Vans Friday Series page](https://remotevans.com/van/2026-friday-series/)",
          "Coachmen Galleria: [Coachmen Galleria floor plan page](https://coachmenrv.com/galleria/24A/15164) and Coachmen features pages recorded in our ledger, and Coachmen Nova: [Coachmen Nova floor plan page](https://coachmenrv.com/nova/20C/15161)",
          "Thor Sequence: [Thor Sequence floor plan pages](https://www.thormotorcoach.com/sequence/floor-plans/20y), and Thor Tellaro: [Thor Tellaro floor plan pages](https://www.thormotorcoach.com/tellaro/floor-plans/20y)",
        ],
      },
      {
        type: "h2",
        heading: "How to choose a Class B for winter",
        text: "Start with the trip you actually plan. For regular below-freezing camping, put heated or in-cabin tanks and hydronic or diesel heat at the top of the list, which is the Terreno, Interstate and MODE pattern, and confirm whether any feature you are counting on is an option on the specific van, which is the Coachmen lesson. For shoulder-season trips with occasional cold nights, the Travato and Solis equipment lists are built for that use, on their makers own wording. Whatever you choose, read the maker winterization guidance for that model, because even Winnebago best equipped van here carries it. Then run your short list through the [comparison tool](/compare), take the [match quiz](/find-my-van) to weigh winter against sleeping, bathroom and budget, and browse the [full market index](/market) for the listed models outside the verified table.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Which Class B van is best for winter camping?",
            answer: "On verified standard equipment, the Grech Terreno and the Airstream Interstate 24GLX publish the most complete winter lists: the Terreno heats all three tanks with 12V heat and the Interstate heats its fresh and gray tanks, and both use Timberline diesel hydronic heat and are all wheel drive. The Storyteller MODE is the other strong pattern, with diesel-fired heat, a gray tank heating loop and its 37 gallon fresh tank inside the cabin.",
          },
          {
            question: "Which Class B vans are four-season rated?",
            answer: "None of the twelve verified models carries a published four-season rating that can be compared across brands. The Storyteller MODE is marketed as a four-season design, based on diesel-fired heat, a gray tank heating loop, an in-cabin fresh tank and polymer insulation. Remote Vans publishes no four-season rating for the Aegis or Friday, Winnebago does not market the Solis as true four-season, and the Travato is marketed for extended-season camping.",
          },
          {
            question: "Does the Winnebago Revel work in winter?",
            answer: "The Revel publishes real winter equipment: a hydronic heating system, an insulated gray water holding tank, a winterization package and dual-pane windows, re-verified on Winnebago own page on October 23, 2026, on an all wheel drive Sprinter chassis. Winnebago also recommends following its winter use guidelines and winterization procedures whenever camping in freezing conditions, so the maker expects owners to winterize by the book.",
          },
          {
            question: "Are the Coachmen Galleria and Nova good for winter?",
            answer: "Both publish standard insulation, R-15 on the Galleria with R-38 reflective floor insulation and Rockwool R-15 on the Nova, and both use the Truma Combi Eco Plus. Their tank heating is not standard: the Galleria Cozy Wrap and Polar Package Plus tank heating pads are options, and the Nova Cozy Wrap and gray tank heaters are options. A winter buyer has to confirm those options on the specific van.",
          },
          {
            question: "Do the Thor Sequence and Tellaro have insulation ratings?",
            answer: "No insulation rating is published by Thor for either model in our verified ledger, and Thor publishes no winter package for either. What Thor does publish is holding tank heat pads and Truma Combi Eco furnace and water heating for both models. Any R-value for a Sequence or Tellaro on a dealer page is not a manufacturer figure.",
          },
          {
            question: "Is all wheel drive necessary for a winter Class B van?",
            answer: "It depends on where you drive, and the pool splits by chassis. The Sprinter models here are all wheel drive, except the Coachmen Galleria, which is rear wheel drive standard with all wheel drive optional. Every ProMaster model in the pool, the Nova, Travato, Solis, Sequence and Tellaro, is front wheel drive. This site reports the drivetrain each maker publishes and makes no traction claim beyond it.",
          },
          {
            question: "What winter features matter most in a Class B van?",
            answer: "Four checks, in the order this article uses: how the cabin is heated, whether the tanks are heated or placed inside the van, what insulation the maker publishes, and which wheels drive the van. A four-season label without those features named is marketing. An option package only counts if the specific van you are buying has it fitted.",
          },
          {
            question: "Are the Remote Vans Aegis and Friday four-season vans?",
            answer: "Remote Vans publishes no four-season rating for either model, and this site does not upgrade them to one. What is published is strong equipment: Rixen hydronic air and water heating, a gray tank heating loop, and Kilmat, Solarcore and Havelock wool insulation on both models, with an upgraded Rixen system and main and rear blowers on the Aegis. Both are all wheel drive.",
          },
        ],
      },
    ],
  },
  "class-b-fresh-water-capacity-compared": {
    slug: "class-b-fresh-water-capacity-compared",
    intro:
      "Class B fresh water capacity runs from 18 gallons to 37 gallons across the twelve models we track with verified figures. The largest tank is the Storyteller MODE at 37 gallons, with its tank mounted inside the cabin. The smallest is the Winnebago Travato at 18 gallons on every floor plan. Two models have no single figure at all: the Thor Tellaro and the Thor Sequence each carry 22 gallons on the 20L, 27 gallons on the 20U and 35 gallons on the 20Y. Every figure below comes from our verified ledger, re-verified on October 16, 2026, and fresh water is paired with gray and waste capacity for each model, because fresh water alone does not decide how long you can stay out.",
    relatedSlugs: [
      "how-much-does-a-class-b-van-cost",
      "class-b-vans-with-cassette-toilets",
      "class-b-vans-that-sleep-four",
    ],
    blocks: [
      {
        type: "p",
        text: "The short answer is the range above, and the floor plan matters as much as the model name. Search results and AI answers tend to give one number per model. That works for ten of the twelve models here. It fails for the Tellaro and the Sequence, where the same nameplate spans 13 gallons across its own floor plans. A flat 27 gallon figure for the Tellaro is not an average and it is not the line figure: it is the 20U floor plan only, generalized to the whole line. This article keeps the per floor plan numbers separate, and it keeps dealer figures out of the table where a manufacturer figure exists.",
      },
      {
        type: "ul",
        heading: "Fresh, gray and waste capacity for the verified pool, from the verified ledger",
        items: [
          "Storyteller MODE (Classic OG): 37 gal fresh, 24 gal gray, 2.6 gal portable toilet",
          "Thor Tellaro: 22 gal fresh (20L), 27 gal (20U), 35 gal (20Y); gray 13 gal (20L), 20 gal (20U), 28 gal (20Y); waste 4.75 gal cassette on the 20U only, black 13.5 gal (20L) and 14 gal (20Y)",
          "Thor Sequence: 22 gal fresh (20L), 27 gal (20U), 35 gal (20Y); gray 13 gal (20L), 20 gal (20U), 28 gal (20Y); waste 4.75 gal cassette on the 20U only, black 13.5 gal (20L) and 14 gal (20Y)",
          "Remote Vans Friday: 30 gal fresh, 24 gal gray; no waste figure in the verified ledger, so none is claimed here",
          "Remote Vans Aegis: 30 gal fresh, 24 gal gray; no waste figure in the verified ledger, so none is claimed here",
          "Coachmen Nova: 27 gal fresh; gray 20 gal (20C, 20D) and 23 gal (20RB); black 19 gal (20C, 20D) and 10 gal (20RB)",
          "Coachmen Galleria: 26 gal fresh on all four floor plans; gray 24 gal (24A, 24FL, 24Q) and 26 gal (24RB); black 19 gal (24A), 24 gal (24FL), 12 gal (24Q) and 26 gal (24RB)",
          "Grech Terreno: 26 gal fresh, 12V heated; gray 27 gal, 12V heated; black 13 gal, 12V heated",
          "Airstream Interstate 24GLX: 23 gal fresh, 24 gal gray, 11 gal waste with macerator",
          "Winnebago Revel: 21 gal fresh, manufacturer figure; gray 21 gal; 5 gal cassette",
          "Winnebago Solis 59P and 59PX: 20 gal fresh on both floor plans; gray 20 gal in the Winnebago brochure; 5 gal cassette",
          "Winnebago Travato: 18 gal fresh on every floor plan; gray 14 gal (59G) and 13 gal (59K, 59KL); black 11 gal (59G) and 12 gal (59K, 59KL)",
        ],
      },
      {
        type: "p",
        text: "Read the table as three linked numbers, not one headline number. Water you use for a shower, a sink or a toilet has to go somewhere. If the gray tank is smaller than the fresh tank, the gray tank fills first and ends the stay, even with fresh water left. The MODE carries 37 gallons of fresh against 24 gallons of gray. The Travato carries 18 gallons of fresh against 13 or 14 gallons of gray. The Interstate is the exception in the pool, with 23 gallons of fresh against 24 gallons of gray, and the Galleria 24RB is balanced at 26 and 26. That pairing is the honest off grid question, and it is why our [cassette toilet guide](/blog/class-b-vans-with-cassette-toilets) and this guide belong together.",
      },
      {
        type: "h2",
        heading: "The largest and smallest tanks in the pool",
        text: "The spread in this pool is two to one. That is a real buying difference, not a rounding difference, and the two ends of it are built for different kinds of travel.",
      },
      {
        type: "h3",
        heading: "Storyteller MODE: 37 gallons, inside the cabin",
        text: "The [Storyteller Overland MODE](/models/storyteller-overland-mode) carries the largest fresh tank in the verified pool, at 37 gallons. The ledger notes that the tank is mounted inside the cabin, as part of the MODE four season design. Its gray tank is 24 gallons and its portable toilet holds 2.6 gallons, per Storyteller specifications for the Classic MODE OG. The fresh figure leads the pool by 7 gallons over the next models. The gray figure does not lead the pool, so a MODE owner who uses water freely still meets the gray limit before the fresh tank is empty.",
      },
      {
        type: "h3",
        heading: "Remote Vans Friday and Aegis: 30 gallons each",
        text: "The [Remote Vans Friday](/models/remote-vans-friday) and the [Remote Vans Aegis](/models/remote-vans-aegis) each carry 30 gallons of fresh water and 24 gallons of gray, per Remote Vans. Their ledgers record fresh and gray only. No waste figure is in the verified ledger for either model, so this article claims none for them, rather than filling the column from a dealer listing. If waste capacity decides between these vans and another model, verify it on the Remote Vans model page for the specific van before you rely on it.",
      },
      {
        type: "h3",
        heading: "Winnebago Travato: 18 gallons on every floor plan",
        text: "The [Winnebago Travato](/models/winnebago-travato) carries the smallest fresh tank in the pool, at 18 gallons on every floor plan in the Winnebago 2026 brochure. The 59G, 59K and 59KL columns are identical for fresh water. Gray is 14 gallons on the 59G and 13 gallons on the 59K and 59KL in the brochure, and black is 11 gallons on the 59G and 12 gallons on the 59K and 59KL. One gray conflict is logged in the ledger: a Winnebago point of purchase sheet and a 2026 59KL window sticker list 12 gallons for the 59KL gray tank, where the brochure lists 13. This site displays the brochure figure, 13, with the disagreement noted, as the Travato model page does.",
      },
      {
        type: "h2",
        heading: "Thor Tellaro and Sequence: one model, three water figures",
        text: "This is the section the flat answers get wrong. Both Thor lines use the same per floor plan figures, and neither line has a single capacity that describes it.",
      },
      {
        type: "h3",
        heading: "Tellaro and Sequence, floor plan by floor plan",
        text: "The [Thor Tellaro](/models/thor-tellaro) and the [Thor Sequence](/models/thor-sequence) each carry 22 gallons on the 20L, 27 gallons on the 20U and 35 gallons on the 20Y, per Thor own specification pages, re-verified on October 16, 2026. Gray follows the same split, at 13, 20 and 28 gallons. Waste follows the bathroom, not the tank size: the 20U uses a 4.75 gallon cassette, while the 20L and 20Y use black tanks of 13.5 and 14 gallons. A buyer comparing a Tellaro 20L against a Solis is comparing 22 gallons against 20. A buyer comparing a Tellaro 20Y against a Solis is comparing 35 against 20. The model name alone does not tell you which comparison you are in, which is why the price guide for these vans, in our [cost guide](/blog/how-much-does-a-class-b-van-cost), also splits them by floor plan.",
      },
      {
        type: "callout",
        text: "A range of 22 to 35 gallons by floor plan is consistent with the Thor figures in our ledger. The error to watch for is not the range. It is a single flat figure, such as 27 gallons, presented as the capacity of the whole Tellaro or Sequence line. That figure belongs to the 20U only.",
      },
      {
        type: "h2",
        heading: "The middle of the pool: 20 to 27 gallons",
        text: "Seven models sit between the Travato at the bottom and the Remote Vans pair at 30 gallons. Their differences are smaller, so the gray and waste pairing matters more than the fresh headline.",
      },
      {
        type: "h3",
        heading: "Coachmen Nova and Galleria",
        text: "The [Coachmen Nova](/models/coachmen-nova) carries 27 gallons of fresh water, with gray at 20 gallons on the 20C and 20D and 23 gallons on the 20RB, and black at 19 gallons on the 20C and 20D and 10 gallons on the 20RB. The [Coachmen Galleria](/models/coachmen-galleria) carries 26 gallons of fresh water on all four floor plans, per Coachmen own floor plan specification pages. Its gray is 24 gallons on the 24A, 24FL and 24Q and 26 gallons on the 24RB, and its black ranges widely by floor plan, from 12 gallons on the 24Q to 26 gallons on the 24RB.",
      },
      {
        type: "h3",
        heading: "Grech Terreno and Airstream Interstate 24GLX",
        text: "The [Grech Terreno](/models/grech-terreno) carries 26 gallons of fresh, 27 gallons of gray and 13 gallons of black, per the Grech owner manual specification table, and all three tanks are listed as 12V heated. The [Airstream Interstate 24GLX](/models/airstream-interstate-24glx) carries 23 gallons of fresh, 24 gallons of gray and 11 gallons of waste, discharged through a macerator pump system, per Airstream specification page. The Interstate is the one model in the pool whose gray tank is larger than its fresh tank.",
      },
      {
        type: "h3",
        heading: "Winnebago Revel and Solis",
        text: "The [Winnebago Revel](/models/winnebago-revel) carries 21 gallons of fresh water on Winnebago own page, with 21 gallons of gray and a 5 gallon cassette. The [Winnebago Solis](/models/winnebago-solis) carries 20 gallons of fresh water on both floor plans, with a 5 gallon cassette, per the Winnebago Solis brochure. For the Solis gray tank, the brochure lists 20 gallons for both floor plans, and this article uses that figure. Dealer spec feeds list 30 gallons for Solis gray, and that disagreement is logged in our ledger rather than averaged.",
      },
      {
        type: "h2",
        heading: "Where published water figures go wrong",
        text: "Three disagreements in our ledger explain most of the wrong water numbers in search results. In each case the manufacturer figure governs on this site, and the other figure is logged, not hidden.",
      },
      {
        type: "ul",
        heading: "Logged disagreements behind the table above",
        items: [
          "Revel fresh water: dealer spec feeds list 35 gallons. Winnebago own page publishes 21 gallons, re-verified live on October 16, 2026. This article uses 21 and does not put the 35 gallon dealer figure in the table, because a manufacturer figure exists for this model",
          "Galleria fresh water: an RVUSA dealer spec block recorded 27 gallons for a 2026 24QM. Coachmen own floor plan specification pages list 26 gallons for every current floor plan. This article uses 26",
          "Solis gray water: dealer spec feeds list 30 gallons. The Winnebago Solis brochure lists 20 gallons for both floor plans, and individual dealer listings for 2025 units agree with the brochure. This article uses 20",
          "Travato gray water on the 59KL: a Winnebago point of purchase sheet and a 2026 59KL window sticker list 12 gallons, where the 2026 brochure lists 13. Fresh water, at 18 gallons on every floor plan, is not disputed. This article uses the brochure figure of 13, with the conflict noted",
        ],
      },
      {
        type: "h2",
        heading: "What capacity means for days off grid, as an estimate",
        text: "No manufacturer in the ledger publishes a days off grid figure, and this section does not present one as a specification. It is an estimate, built on one stated assumption, so you can test it against your own use. Assume, as an estimate only, that two people together use about 6 gallons a day for drinking, cooking, washing and short showers. On that assumed use, 18 gallons is about three days of fresh water, 26 to 27 gallons is about four days, 30 gallons is about five days, and 37 gallons is about six days. Change the assumed daily use and every one of those day counts changes with it. A couple that skips showers in the van will go longer. A family using the shower daily will go shorter. Treat these as planning estimates, not as promises from any maker.",
      },
      {
        type: "p",
        text: "The estimate has a second limit that the fresh tank does not show. Gray water accumulates as fresh water is used, so the gray tank can end a stay before the fresh tank runs dry. On the MODE, 37 gallons of fresh feeds a 24 gallon gray tank. On the Travato, 18 gallons of fresh feeds 13 or 14 gallons of gray. Cassette models work differently again: the Solis and Revel each carry a 5 gallon cassette and the Thor 20U carries a 4.75 gallon cassette, and a cassette can be emptied at a wider range of places than a black tank, which is the trade covered in our [cassette toilet guide](/blog/class-b-vans-with-cassette-toilets). For a real trip, plan around whichever fills or empties first in the specific floor plan, not around the fresh headline alone. Sleeping capacity interacts with water use too, because more people use more water, and our [sleeps four guide](/blog/class-b-vans-that-sleep-four) covers which of these vans are actually rated for four.",
      },
      {
        type: "h2",
        heading: "Models that are not in this table, and why",
        text: "The wider market in our [market index](/market) includes listed models with no water figures in the verified ledger, including the Coachmen Beyond, the Entegra Coach Expanse, the Forest River Lucent and the Thor Palladium covered in our Transit guide, and the Sportsmobile conversions. No figures are printed for them here, because printing a figure without manufacturer verification in the ledger would repeat the error this article exists to correct. Remote Vans Oasis and T-45 do have ledger figures of 30 gallons fresh and 24 gallons gray, but they are not among the twelve verified model pages, so, as in the cost guide, they are kept out of the verified table.",
      },
      {
        type: "ul",
        heading: "Sources for the figures in this article",
        items: [
          "Thor Tellaro: [Thor Tellaro floor plan pages](https://www.thormotorcoach.com/tellaro/floor-plans/20y), and Thor Sequence: [Thor Sequence floor plan pages](https://www.thormotorcoach.com/sequence/floor-plans/20y), with the 20U cassette figures from the 20U pages for each line",
          "Winnebago Revel: [Winnebago Revel product page](https://www.winnebago.com/models/product?GroupID=GROUP257&ProductID=PROD670&VariantID=44E), and Winnebago Solis and Travato figures from the Winnebago Solis and 2026 Travato brochures recorded in our ledger",
          "Storyteller MODE: [Storyteller 2026 Classic MODE OG page](https://www.storytelleroverland.com/pages/2026-classic-mode-og)",
          "Remote Vans Friday: [Remote Vans Friday Series page](https://remotevans.com/van/2026-friday-series/), and Remote Vans Aegis: [Remote Vans Aegis Series page](https://remotevans.com/van/aegis-series-2026/)",
          "Coachmen Nova: [Coachmen Nova floor plan page](https://coachmenrv.com/nova/20C/15161), and Coachmen Galleria: [Coachmen Galleria floor plan page](https://coachmenrv.com/galleria/24A/15164)",
          "Grech Terreno: the Grech Terreno owner manual specification table recorded in our ledger, and Airstream Interstate 24GLX: [Airstream Interstate 24GLX specification page](https://www.airstream.com/explore-products/touring-coaches/interstate/interstate-24glx-spec-detail-page)",
        ],
      },
      {
        type: "h2",
        heading: "Compare the whole system, not just the fresh tank",
        text: "Start with the floor plan figure, not the model headline, then pair fresh with gray and waste for that exact floor plan. If you stay at campgrounds with hookups and dump stations, the difference between 18 and 37 gallons may rarely decide a trip. If you camp away from hookups, it decides how often you move to refill and dump, and the gray tank may decide before the fresh tank does. Run your short list through the [comparison tool](/compare), take the [match quiz](/find-my-van) to check water against the rest of your priorities, and browse the [full market index](/market) for the listed models outside the verified table.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "How much fresh water does a Class B van hold?",
            answer: "In the twelve verified models we track, fresh water runs from 18 gallons on the Winnebago Travato to 37 gallons on the Storyteller MODE. Most models sit between 20 and 30 gallons. The Thor Tellaro and Thor Sequence have no single figure: each carries 22 gallons on the 20L, 27 gallons on the 20U and 35 gallons on the 20Y.",
          },
          {
            question: "Which Class B van has the largest fresh water tank?",
            answer: "The Storyteller MODE, at 37 gallons, with the tank mounted inside the cabin as part of its four season design. Its gray tank is 24 gallons and its portable toilet holds 2.6 gallons.",
          },
          {
            question: "Which Class B van has the smallest fresh water tank?",
            answer: "The Winnebago Travato, at 18 gallons on every floor plan in the Winnebago 2026 brochure. Its gray tank is 14 gallons on the 59G and 13 gallons on the 59K and 59KL, and its black tank is 11 gallons on the 59G and 12 gallons on the 59K and 59KL.",
          },
          {
            question: "How much fresh water does a Thor Tellaro hold?",
            answer: "It depends on the floor plan. The Tellaro carries 22 gallons on the 20L, 27 gallons on the 20U and 35 gallons on the 20Y, per Thor own specification pages. A flat 27 gallon figure for the Tellaro is the 20U only, not the whole line. The Thor Sequence uses the same three figures on the same floor plan names.",
          },
          {
            question: "How much fresh water does a Winnebago Revel hold?",
            answer: "21 gallons, per Winnebago own page, re-verified on October 16, 2026. Dealer spec feeds list 35 gallons for the Revel, but the manufacturer figure governs on this site. The Revel also carries 21 gallons of gray water and a 5 gallon cassette.",
          },
          {
            question: "How long does fresh water last in a Class B van?",
            answer: "That is an estimate, not a manufacturer specification. If two people together use about 6 gallons a day, as an assumed estimate for drinking, cooking, washing and short showers, 18 gallons lasts about three days, 30 gallons about five days and 37 gallons about six days. Your own daily use changes those counts, and the gray tank can fill before the fresh tank empties, as on the MODE with 37 gallons fresh and 24 gallons gray.",
          },
          {
            question: "Is fresh water capacity the limit on days off grid?",
            answer: "Not on its own. Water used in the van goes to the gray or waste tank, so a smaller gray tank can end a stay with fresh water left. The MODE carries 37 gallons fresh against 24 gallons gray, and the Travato carries 18 gallons fresh against 13 or 14 gallons gray. The Airstream Interstate 24GLX is the exception in this pool, with 23 gallons fresh and 24 gallons gray.",
          },
          {
            question: "How much fresh water do the Remote Vans Friday and Aegis hold?",
            answer: "30 gallons each, with 24 gallons of gray water, per Remote Vans. No waste figure is in our verified ledger for either model, so this site claims none for them rather than taking one from a dealer listing.",
          },
        ],
      },
    ],
  },
  "how-much-does-a-class-b-van-cost": {
    slug: "how-much-does-a-class-b-van-cost",
    intro:
      "A new Class B van costs from $140,560 to $290,400 in starting figures across the twelve models we track with verified figures. Only one model starts under $150,000, the Thor Tellaro. Six models start between $150,000 and $200,000, and four starting figures are over $200,000, up to the Grech Terreno at $290,400. The twelfth model, the Airstream Interstate 24GLX, has no published starting price at all: the $312,600 figure attached to it is the sticker on one optioned dealer unit, not a starting price. Every figure below comes from our verified ledger, re-verified on October 16, 2026, and every dealer figure is labeled as a dealer figure.",
    relatedSlugs: [
      "best-transit-based-class-b-vans",
      "class-b-vans-that-sleep-four",
      "class-b-vans-with-cassette-toilets",
    ],
    blocks: [
      {
        type: "p",
        text: "The short answer is the range above, and the label on each figure matters as much as the number. Some of these prices are published by the manufacturer. Three are dealer figures, because Coachmen and Winnebago publish no price for those models. One model publishes two different prices depending on where you read, and one publishes none. Search results and AI answers tend to mix those figures together, and to mix in used vans and optioned stickers as if they were starting prices. This article keeps them separate, band by band, so the number you budget from is the number the source actually published.",
      },
      {
        type: "ul",
        heading: "Starting prices for the verified pool, from the verified ledger",
        items: [
          "Thor Tellaro: $140,560, manufacturer figure (Thor model page, low end for the 20L)",
          "Thor Sequence: $151,060, manufacturer figure (Thor model page, 20L)",
          "Winnebago Solis 59P: $156,254, manufacturer figure (Winnebago Starting At price)",
          "Coachmen Nova: $178,801, dealer MSRP (2026 20RB, two dealers agree; Coachmen publishes no MSRP)",
          "Winnebago Travato: $183,783, dealer base (Lichtsinn RV; Winnebago publishes no Travato price)",
          "Storyteller Overland MODE (Classic OG): $192,206, manufacturer figure (Storyteller 2026 model page)",
          "Remote Vans Friday: $194,900, manufacturer direct price (Remote Vans)",
          "Winnebago Revel: $223,495, manufacturer figure (Winnebago listed starting price)",
          "Coachmen Galleria: $236,822, dealer sticker, lowest verified (2026 24QM; Coachmen publishes no MSRP)",
          "Remote Vans Aegis: $247,900, manufacturer direct price (Remote Vans)",
          "Grech Terreno: $290,400, manufacturer figure (2027 starting MSRP)",
          "Airstream Interstate 24GLX: no manufacturer starting price published. The $312,600 figure is a dealer sticker on an optioned 2027 unit, and it appears in this article only as an optioned sticker example, never as a starting price",
        ],
      },
      {
        type: "p",
        text: "Counting those twelve models, the middle of the pool falls between the MODE at $192,206 and the Friday at $194,900, a median of about $193,553. That is the honest center of the new Class B market on verified figures: not under $150,000, and not the $250,000 plus that the top of the market suggests. Six of the twelve models sit in the $150,000 to $200,000 band, so a buyer with a budget in that band has the widest choice, and a buyer under $150,000 has exactly one factory option in this pool.",
      },
      {
        type: "h2",
        heading: "How to read a Class B price",
        text: "Three kinds of figure appear in this article, and they are not interchangeable. A manufacturer starting price is the price the maker publishes for the lowest priced floor plan, before options. A dealer figure is the price a dealer publishes for a model whose maker publishes none, or the sticker on a specific van on a lot, with its floor plan and options already chosen. A manufacturer direct price, which is how Remote Vans sells, is the price the maker itself charges, separate from the higher window sticker MSRP the same maker also publishes. A discounted sale price at a dealer is none of those three: it is what one dealer is asking for one van right now. This article bands models by their starting figures only, with the source label kept on each one, and uses stickers only as examples of how far a specific van can sit from its starting figure.",
      },
      {
        type: "h2",
        heading: "Under $150,000: exactly one van",
        text: "There is no verified factory Class B under $140,000 in this pool, and only one under $150,000. An article or an answer that implies a lower factory tier exists is not working from these figures.",
      },
      {
        type: "h3",
        heading: "Thor Tellaro: $140,560, manufacturer figure",
        text: "The [Thor Tellaro](/models/thor-tellaro) is the lowest priced verified model, at $140,560 from Thor's own model page for the 20L floor plan. The same line shows why a starting price is a floor, not a typical price: Thor's other Tellaro floor plan bases are $162,120 for the 20U and $162,960 for the 20Y, both in the next band up, before options such as the Sky Bunk pop-top covered in our [sleeps four guide](/blog/class-b-vans-that-sleep-four). A Tellaro buyer who wants the 20U layout is a $160,000 plus buyer, whatever the headline starting price says. One more Thor wrinkle is logged in our ledger: Thor's class B lineup page lists a flat $161,560 for both the Tellaro and the Sequence, while the dedicated model pages publish $140,560 and $151,060. The model page figures govern here, per our manufacturer first policy.",
      },
      {
        type: "h2",
        heading: "From $150,000 to $200,000: six vans, and the center of the market",
        text: "This is the band with real choice in it: two Thor and Winnebago ProMaster lines at the bottom, two dealer priced models in the middle, and the MODE and the Friday at the top.",
      },
      {
        type: "h3",
        heading: "Thor Sequence and Winnebago Solis: the bottom of the band",
        text: "The [Thor Sequence](/models/thor-sequence) starts at $151,060, a manufacturer figure from Thor's model page for the 20L, with the 20U and 20Y floor plan bases at $162,120 to $165,060 and $162,960. The [Winnebago Solis](/models/winnebago-solis) starts at $156,254, a manufacturer Starting At price for the 59P. The Solis also shows the floor plan spread inside one model: the 59PX starts at $180,487 on Winnebago's own page, $24,233 above the 59P, for the same nameplate. Both vans are ProMaster based, and both are covered for sleeping capacity in our sleeps four guide and for bathrooms in our [cassette toilet guide](/blog/class-b-vans-with-cassette-toilets).",
      },
      {
        type: "h3",
        heading: "Coachmen Nova and Winnebago Travato: dealer figures, labeled",
        text: "The [Coachmen Nova](/models/coachmen-nova) is listed at $178,801, which is a dealer MSRP for the 2026 20RB that two dealers agree on, because Coachmen publishes no MSRP for the Nova. A 2027 20RB lists at $195,170 at one dealer, which is a reminder that a dealer figure moves with model year and dealer. The [Winnebago Travato](/models/winnebago-travato) is listed at $183,783, which is Lichtsinn RV's published dealer base for the line, because Winnebago publishes no Travato price. Neither figure is wrong, but neither is a manufacturer starting price, and any table that drops the dealer label off them is overstating what the makers publish.",
      },
      {
        type: "h3",
        heading: "Storyteller MODE and Remote Vans Friday: the top of the band",
        text: "The [Storyteller Overland MODE](/models/storyteller-overland-mode) starts at $192,206 on Storyteller's 2026 Classic MODE OG model page. Storyteller's own comparison page says $187,321 for the same van; the model page figure governs, and the disagreement is logged in our ledger rather than averaged. The [Remote Vans Friday](/models/remote-vans-friday) is $194,900 at Remote Vans' manufacturer direct price. Remote Vans also publishes a window sticker MSRP of $272,900 for the Friday, and that sticker figure is not in the band table above: the direct price is the price the maker displays for the van, and the sticker is disclosed here only so a buyer who meets it on a lot is not confused by it.",
      },
      {
        type: "h2",
        heading: "Over $200,000: four starting figures, and one sticker",
        text: "Four models have starting figures over $200,000. The fifth name in this part of the market, the Interstate, belongs here by price level but not by starting price, because it does not have one.",
      },
      {
        type: "h3",
        heading: "Winnebago Revel and Coachmen Galleria",
        text: "The [Winnebago Revel](/models/winnebago-revel) starts at $223,495, Winnebago's listed starting price. Dealer base figures for the Revel run higher, to $261,808 in the dealer record in our ledger, which is exactly the kind of figure that shows up in search answers as if it were the manufacturer's price. The [Coachmen Galleria](/models/coachmen-galleria) is listed at $236,822, a dealer sticker and the lowest verified sticker for the line, on a 2026 24QM from General RV Center, because Coachmen publishes no Galleria MSRP. Other Galleria stickers in our ledger run to $271,962, so the Galleria's real sticker range sits well above its lowest verified figure.",
      },
      {
        type: "h3",
        heading: "Remote Vans Aegis and Grech Terreno: the top starting figures",
        text: "The [Remote Vans Aegis](/models/remote-vans-aegis) is $247,900 at Remote Vans' manufacturer direct price, with the same dual pricing pattern as the Friday: its window sticker MSRP is $346,900, disclosed here and kept out of the band table. The [Grech Terreno](/models/grech-terreno) has the highest manufacturer starting price in the pool, $290,400, which is Grech's published 2027 starting MSRP. That figure, not any dealer sticker, is the top of the honest starting price range. Grech's own inventory feed includes dealer units advertised below the MSRP, at $256,500 to $262,200, and those are dealer asking prices for specific vans, not a lower starting price for the line.",
      },
      {
        type: "h3",
        heading: "Airstream Interstate 24GLX: the optioned sticker example",
        text: "The [Airstream Interstate 24GLX](/models/airstream-interstate-24glx) is the clearest starting versus sticker case in the pool. Airstream publishes no base MSRP for the 24GLX on its product page or its specification page. The $312,600 figure in our ledger is the MSRP on one optioned 2027 unit at Airstream of Minnesota. It proves that an optioned Interstate on a lot can be a $312,600 van. It does not make the Interstate a $312,600 starting price, and it does not extend the starting price range in this article past the Grech figure. Airstream does publish a starting price for the sibling Interstate 24GL, from $274,900, which is lineup context only and not a 24GLX figure.",
      },
      {
        type: "h2",
        heading: "Why the sticker is not the starting price",
        text: "The gap between a line starting figure and the sticker on a specific van is where most published Class B prices go wrong. The examples below are all from our verified ledger, and each one is a different mechanism.",
      },
      {
        type: "ul",
        heading: "Four ways a price moves away from the starting figure",
        items: [
          "Floor plan: the Winnebago Solis 59PX starts at $180,487 against $156,254 for the 59P, and the Thor Tellaro 20U and 20Y bases sit over $162,000 against $140,560 for the 20L. The starting price belongs to one floor plan only",
          "Window sticker base: a 2026 Winnebago Travato 59KL manufacturer window sticker lists a $216,037 suggested base price, against the $183,783 dealer base for the line in our table",
          "Dealer sticker spread: Coachmen Galleria stickers in our ledger run from the $236,822 low figure to $271,962, a spread of about $35,000 inside one model line with no manufacturer MSRP to anchor it",
          "Dual pricing: Remote Vans publishes a manufacturer direct price and a much higher window sticker MSRP for the same van, $194,900 against $272,900 on the Friday and $247,900 against $346,900 on the Aegis. Neither figure is an average of the two, and the direct price is the one this site displays",
        ],
      },
      {
        type: "h2",
        heading: "Listed models and conversions are not in the bands",
        text: "The wider market in our [market index](/market) includes models and builders that do not belong in a verified starting price table, and putting them there would produce the most misleading numbers in this article. The Thor Palladium, covered in our [Transit guide](/blog/best-transit-based-class-b-vans), has a manufacturer published range of $189,560 to $190,960, but it is a listed model with no verified model page, so it is named here and not banded. The Coachmen Beyond and the Forest River Lucent have no manufacturer published price at all. Remote Vans' Oasis at $224,900 and T-45 at $174,900 are listed models from the maker's comparison page, with no model pages on this site, so they are not thirteenth and fourteenth verified models. Sportsmobile conversions are the sharpest trap: Sportsmobile publishes conversion ranges of $80,000 to $125,000 for Transit and from $50,000 for Sprinter, and those are conversion prices only, excluding the van itself. A pictured complete Transit build on the same page totals $180,000, which is the honest comparison point against a factory van's complete price.",
      },
      {
        type: "ul",
        heading: "Sources for the figures in this article",
        items: [
          "Thor Tellaro: [Thor Tellaro model page](https://www.thormotorcoach.com/tellaro), and Thor Sequence: [Thor Sequence model page](https://www.thormotorcoach.com/sequence)",
          "Winnebago Solis: [Winnebago Solis page](https://www.winnebago.com/models/solis-series/solis), and Winnebago Revel: [Winnebago Revel product page](https://www.winnebago.com/models/product?GroupID=GROUP257&ProductID=PROD670&VariantID=44E)",
          "Storyteller Overland MODE: [Storyteller 2026 Classic MODE OG page](https://www.storytelleroverland.com/pages/2026-classic-mode-og)",
          "Remote Vans Friday and Aegis: [Remote Vans comparison page](https://remotevans.com/compare-adventure-vans/) and the Friday and Aegis model pages linked from it",
          "Grech Terreno: [Grech 2027 Terreno page](https://grechrv.com/model/2027-terreno-ion-awd/)",
          "Winnebago Travato dealer base: [Lichtsinn RV camper vans](https://www.lichtsinn.com/winnebago/camper-vans), labeled a dealer figure because Winnebago publishes no Travato price",
          "Coachmen Nova dealer MSRP: [Campers Inn Nova listing](https://www.campersinn.com/product-coachmen-rv/nova-motor-home-class-b), labeled a dealer figure because Coachmen publishes no Nova MSRP",
          "Airstream Interstate 24GLX: [Airstream Interstate 24GLX specification page](https://www.airstream.com/explore-products/touring-coaches/interstate/interstate-24glx-spec-detail-page), which publishes specifications and no price; the $312,600 sticker is from an optioned 2027 unit at Airstream of Minnesota, as recorded in our ledger",
        ],
      },
      {
        type: "h2",
        heading: "Start with a band, then price the specific van",
        text: "Budget from the band first, then price the exact floor plan and the exact van. If your ceiling is $150,000, your factory short list in this pool is the Tellaro 20L at its starting figure, and you should expect options to test that ceiling. If your band is $150,000 to $200,000, you have six models to work through, and the decision moves to layout, bathroom and sleeping questions, which our cassette toilet guide and sleeps four guide cover model by model. If you are shopping over $200,000, compare the Revel, Galleria, Aegis and Terreno on their starting figures, and treat every Interstate price you see as a sticker on a specific unit until Airstream publishes a base price. Run your short list through the [comparison tool](/compare), take the [match quiz](/find-my-van) to check price against the rest of your priorities, and browse the [full market index](/market) for the listed models and builders outside the verified bands. Purchase price is only part of ownership cost, and that is a separate article in this series.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "How much does a Class B van cost in 2026?",
            answer: "In verified starting figures for the twelve models we track, a new Class B van costs from $140,560 for the Thor Tellaro to $290,400 for the Grech Terreno. Six models start between $150,000 and $200,000, and the median of the pool is about $193,553, between the Storyteller MODE at $192,206 and the Remote Vans Friday at $194,900. The Airstream Interstate 24GLX has no published starting price; its $312,600 figure is a dealer sticker on an optioned 2027 unit.",
          },
          {
            question: "What is the cheapest new Class B van?",
            answer: "The Thor Tellaro, at a manufacturer starting price of $140,560 for the 20L floor plan, from Thor's own model page. It is the only verified model that starts under $150,000, and its other floor plans start over $162,000, so the cheapest figure belongs to the 20L only.",
          },
          {
            question: "Is there a new Class B van under $140,000?",
            answer: "Not in the verified pool we track. No factory model in the pool starts under $140,000. Conversion prices that appear lower, such as Sportsmobile conversion ranges, are for the conversion only and exclude the van itself.",
          },
          {
            question: "What is the most expensive Class B van?",
            answer: "By manufacturer starting price, the Grech Terreno, at a published 2027 starting MSRP of $290,400. The Airstream Interstate 24GLX has a higher figure attached to it, $312,600, but that is the sticker on one optioned dealer unit, not a starting price, because Airstream publishes no base MSRP for the 24GLX.",
          },
          {
            question: "Why is the price on a dealer lot higher than the starting price?",
            answer: "Because the starting price belongs to the lowest priced floor plan before options, and the lot price belongs to a specific van. In our verified ledger, the Winnebago Solis 59PX starts $24,233 above the 59P, a Travato 59KL window sticker lists a $216,037 suggested base against a $183,783 dealer base for the line, and Coachmen Galleria stickers run from $236,822 to $271,962 inside one model line.",
          },
          {
            question: "Which Class B prices are dealer figures, not manufacturer prices?",
            answer: "Three in this article. The Coachmen Nova at $178,801 is a dealer MSRP, the Winnebago Travato at $183,783 is a dealer base from Lichtsinn RV, and the Coachmen Galleria at $236,822 is a dealer sticker, because Coachmen publishes no MSRP for the Nova or the Galleria and Winnebago publishes no price for the Travato. Each figure is labeled a dealer figure wherever this site uses it.",
          },
          {
            question: "Does a Class B starting price include options?",
            answer: "No. A starting price is the published figure for the lowest priced floor plan before options. Options, a different floor plan, and dealer pricing on a specific van all move the final figure up from the starting price, which is why this article bands models by starting figures and uses stickers only as labeled examples.",
          },
          {
            question: "Are van conversions cheaper than factory Class B vans?",
            answer: "The published conversion ranges look cheaper because they exclude the van. Sportsmobile publishes conversion ranges of $80,000 to $125,000 for Transit and from $50,000 for Sprinter, for the conversion only. A pictured complete Transit build on its pricing page totals $180,000, which is the figure to compare against a factory van's complete starting price.",
          },
        ],
      },
    ],
  },
  "best-transit-based-class-b-vans": {
    slug: "best-transit-based-class-b-vans",
    intro:
      "The factory Ford Transit Class B set is small: five models in our market index, the Coachmen Beyond, the Thor Palladium and the Thor Talavera, the Entegra Coach Expanse, and the Forest River Lucent, which is new for 2027. None of the five is in our verified comparison pool, which is Sprinter and ProMaster only, so there are no Transit model pages on this site yet and every figure below was checked against the manufacturer's own page or launch release on October 20, 2026. Where a manufacturer publishes no price, this article says so rather than borrowing a dealer sticker. The wider Transit field is the custom builders: Sportsmobile, VanDOit and ModVans all build on the Transit, and on that side of the market the Transit is a first choice, not an afterthought.",
    relatedSlugs: [
      "sprinter-vs-transit-vs-promaster",
      "class-b-vans-that-sleep-four",
      "class-b-vans-with-cassette-toilets",
    ],
    blocks: [
      {
        type: "p",
        text: "The short answer is the list above, and its shape is the story. The big factory brands put most of their Class B volume on the Sprinter and the ProMaster, so a buyer who wants a Transit gets a short factory list, a choice of three established builders, and the tallest interior in the segment. What follows covers each factory model with the figures its manufacturer actually publishes, then the builders, then the two naming traps that catch Transit shoppers, and finally how the Transit compares with the other two chassis.",
      },
      {
        type: "ul",
        heading: "The factory Transit set, from manufacturer pages checked October 20, 2026",
        items: [
          "Coachmen Beyond: Ford Transit 350HD gas chassis, 148 inch wheelbase, dual rear wheels with all wheel drive. 3.5L EcoBoost V6, 310 hp and 400 lb-ft of torque, 10 speed automatic, 25 gallon fuel tank. Three floor plans: 22C rear couch, 22D rear dinette, 22RB rear bath. Coachmen publishes no MSRP for the Beyond",
          "Thor Palladium (2027): Ford Transit T-350 high roof cargo van with all wheel drive, gasoline. 19 feet 8 inches long, sleeps 1 to 2. Thor publishes a price range of $189,560 to $190,960 on its own Palladium page",
          "Thor Talavera: the Palladium's sister model. Thor introduced the pair together as all wheel drive Transit vans built on the Ford Transit Trail chassis, with a lift kit, a rugged wheel and tire package, enhanced traction modes and rock slider step bars, per Thor's launch post",
          "Entegra Coach Expanse (2027): Ford Transit AWD 350HD, 148 inch wheelbase, 3.5L EcoBoost V6 at 310 hp and 400 lb-ft, 10 speed transmission, 25 gallon fuel tank. 22 feet long, sleeps up to 2, two floor plans: the 21B with a power sofa bed and propane galley, and the 21T with twin beds and a more all-electric setup. Entegra published no price on its Expanse page when checked",
          "Forest River Lucent (2027): Forest River's first Class B line, launched with the 2TBA and 5RLA floor plans on the Ford Transit, per Forest River's launch release. No manufacturer price or full spec sheet was published in that release, so this article claims nothing further for it",
          "Sportsmobile Transit conversions (builder): conversion range $80,000 to $125,000 for Transit, per Sportsmobile's pricing examples page. That is the conversion only and excludes the van itself. A pictured complete Transit build on the same page totals $180,000",
          "VanDOit MOOV, LIV and DO (builder): listed in our market index on the Ford Transit. VanDOit describes its vans as modular multi-purpose builds on the Ford Transit chassis, configured as camper vans, mobile offices or commercial units",
          "ModVans CV1 and MH1 (builder): listed in our market index on the Ford Transit, with no specifications claimed here. Check ModVans directly for current specifications and pricing",
        ],
      },
      {
        type: "h2",
        heading: "Why buyers pick the Transit in the first place",
        text: "Three reasons come up again and again, and all three are chassis facts, not marketing. First, height: the high roof Transit gives 81.5 inches of interior standing height, the tallest of the three Class B chassis and a full 4 inches more than the high roof Sprinter, as our [chassis comparison](/blog/sprinter-vs-transit-vs-promaster) sets out. Tall buyers feel that difference at the stove and in the shower. Second, the drivetrain: the Transit is gas only in the US market, and its all wheel drive is available across the factory set above, but it has no low range, so it is a traction system for wet pavement, snow and gravel, not a technical off-road system. Third, service: a Ford can be serviced at Ford dealers almost anywhere in the country, with domestic parts pricing, which is the ownership argument our chassis article makes for the Transit over the Sprinter. If those three things are your priorities, the short factory list below is worth working through. If diesel, a low range transfer case or the widest body matter more, you are shopping the other two chassis.",
      },
      {
        type: "h2",
        heading: "The factory set, model by model",
        text: "Five models, four brands, and two of them are sisters. All five are listed models in our [market index](/market), which is where each one links for now, because none has a verified model page yet.",
      },
      {
        type: "h3",
        heading: "Coachmen Beyond: the three floor plan Transit",
        text: "The Beyond is Coachmen's Transit entry, built on the Ford Transit 350HD gas chassis with a 148 inch wheelbase, dual rear wheels and all wheel drive, per Coachmen's Beyond brochure. The engine is the 3.5L EcoBoost V6 at 310 hp and 400 lb-ft of torque, with a 10 speed automatic and a 25 gallon fuel tank. Coachmen offers three floor plans, the 22C with a rear couch, the 22D with a rear dinette and the 22RB with a rear bath, which is the broadest floor plan choice in the factory Transit set. Two cautions from our other Coachmen work apply here. Coachmen publishes no MSRP for the Beyond, the same pattern we found on the [Coachmen Nova](/models/coachmen-nova) and the [Coachmen Galleria](/models/coachmen-galleria), so any price you see is a dealer figure, not a manufacturer starting price. And Coachmen's own badge splits by chassis: the Galleria is a Sprinter and the Nova is a ProMaster, so only the Beyond is the Transit.",
      },
      {
        type: "h3",
        heading: "Thor Palladium: the short, published price Transit",
        text: "Thor's 2027 Palladium page describes a camper van on the Ford Transit T-350 high roof cargo chassis with all wheel drive and a gasoline engine, 19 feet 8 inches long and rated to sleep 1 to 2. At under 20 feet it is the shortest van in the factory Transit set, which matters for parking and for buyers stepping down from a car. Thor is also the one factory brand in this set that publishes a price on its own page: a range of $189,560 to $190,960, checked on Thor's Palladium page on October 20, 2026. Read that as Thor's published range for the line, not as the sticker on any specific van on a dealer lot, where options and dealer pricing move the number.",
      },
      {
        type: "h3",
        heading: "Thor Talavera: the Transit Trail sister",
        text: "The Talavera is the Palladium's sister model, and Thor introduced the two together. In Thor's own launch post, the Palladium and Talavera are all wheel drive Transit vans built on the Ford Transit Trail chassis, equipped with a lift kit, a rugged wheel and tire package, enhanced traction modes and rock slider step bars, and powered by a gas engine. That Trail base is the difference between the Thor pair and the other factory Transits here: the lift and tires are part of the factory package rather than an aftermarket addition. Thor's current site promotes the Palladium as its 2027 Transit van, so a Talavera shopper should confirm the current model year lineup and pricing with Thor or a Thor dealer before building a short list around it. The same brand warning applies in reverse on Thor's other lines: the Sanctuary and Tranquility are Sprinters and the [Thor Sequence](/models/thor-sequence) and [Thor Tellaro](/models/thor-tellaro) are ProMasters. Only the Palladium and the Talavera are Transits.",
      },
      {
        type: "h3",
        heading: "Entegra Coach Expanse: the 22 foot, two floor plan Transit",
        text: "Entegra's 2027 Expanse page puts the Expanse on the Ford Transit AWD 350HD chassis with a 148 inch wheelbase, the 3.5L EcoBoost V6 at 310 hp and 400 lb-ft of torque, a 10 speed transmission, a 3.73 limited slip axle and a 25 gallon fuel tank. The van is 22 feet long and sleeps up to 2. The choice inside is between two floor plans: the 21B, built around a power sofa bed and a propane galley, and the 21T, which shifts to twin beds and a more all-electric setup with the larger inverter. Both ride on the same Transit AWD platform, so the decision is about how you sleep and cook, not about the chassis. Entegra published no price on the Expanse page when we checked it on October 20, 2026, so get pricing from a dealer and treat it as a dealer figure. Note that one gallery slide on Entegra's page labels a floor plan 21L while the page's build section and its own FAQ both name the pair as the 21B and the 21T; this article follows the build and FAQ text.",
      },
      {
        type: "h3",
        heading: "Forest River Lucent: the new entry, listed with care",
        text: "The Lucent is the newest name in this article and the one to read most carefully. Forest River announced its entry into the Class B market for 2027 with two lines: the Lucent on the Ford Transit, launching with the 2TBA and 5RLA floor plans, and the Sommar on the Ram ProMaster. The launch release describes a shared feature set that includes a 2,800 watt flex-fuel generator, dual 12 volt house batteries, 170 watts of solar, a 1,000 watt inverter, a Timberline heat and hot water system, and a fiberglass wet bath. That is what the release supports, and it is all this article claims: Forest River published no price and no full specification sheet in the release, and the Lucent is a new line, not a long-running one. Buyers who like the idea should expect the spec sheet and pricing to firm up at dealers first, and should weigh a first year model accordingly.",
      },
      {
        type: "h2",
        heading: "The builders: where Transit choice actually lives",
        text: "Count the factory models and the Transit looks like a niche. Count the builders and the picture flips. Three of the builders in our market index build on the Transit as a primary platform, because a builder starts from a cargo van and the Transit's height, gas engine and Ford service network suit conversion work.",
      },
      {
        type: "h3",
        heading: "Sportsmobile: published Transit conversion pricing",
        text: "Sportsmobile converts the Transit in regular, extended and long body lengths, with factory all wheel drive and a Trail Ready package, per our verified Sportsmobile ledger, and our [Sportsmobile review](/blog/sportsmobile-review) covers the company and the process in full. Sportsmobile is unusually open about money: its pricing examples page states a conversion range of $80,000 to $125,000 for Transit, against $75,000 to $120,000 for Sprinter and ProMaster, and those are conversion prices that exclude the van itself. A pictured complete Transit build on the same page totals $180,000, which is the honest way to compare a conversion against a factory van's complete price. The conversion warranty is 3 years or 36,000 miles. None of that makes a Sportsmobile a factory model with a fixed spec, and that is the point: you are buying a layout built for you, on the Transit, at a published conversion band.",
      },
      {
        type: "h3",
        heading: "VanDOit and ModVans: listed, modular, Transit only in this index",
        text: "VanDOit lists three models in our [market index](/market), the MOOV, the LIV and the DO, all on the Ford Transit. VanDOit describes its product as modular multi-purpose vans built on the Ford Transit chassis that can be configured as camper vans, mobile offices or commercial units, with flexible seating and modular storage. ModVans lists two models, the CV1 and the MH1, also on the Transit. For both builders we claim no specifications or prices in this article, because we have not verified a current manufacturer spec sheet for either in this pass. That is a gap in our coverage, not a judgment on the vans: if a modular Transit is your direction, these two and Sportsmobile are the builder short list, and the next step is each builder's own current pricing.",
      },
      {
        type: "h2",
        heading: "The trap: the Storyteller MODE is not a Transit van anymore",
        text: "Search results and older articles will tell you the Storyteller Overland MODE is a Transit van. That was true of the earlier generation, and our [MODE suspension article](/blog/storyteller-overland-mode-suspension) covers that Transit generation in detail. The current [Storyteller Overland MODE](/models/storyteller-overland-mode) is built on the Mercedes Sprinter 2500 with all wheel drive, at a starting price of $192,206, per Storyteller's current page as recorded in our verified ledger, which carries an explicit note not to carry the old Transit data forward. So the MODE does not belong on a current Transit short list, however many older pages put it there. If you want the current MODE, shop it as a Sprinter. If you want a Transit, this article's list is the current one.",
      },
      {
        type: "h2",
        heading: "What is not on this list, and why",
        text: "Two absences are worth stating plainly, because search engines get both wrong. Winnebago has no current Transit Class B in our market index: its Revel family is Sprinter and its Travato and Solis family is ProMaster, so a Winnebago Transit result is stale or wrong until a Winnebago page proves otherwise. And no Transit model appears in our [comparison tool](/compare) or on a model page on this site, because the verified pool behind those tools is Sprinter and ProMaster only. The Transit models here are listed models, presented with manufacturer-checked figures for this article, and the distinction is the same one our [sleeps four guide](/blog/class-b-vans-that-sleep-four) and our [cassette toilet guide](/blog/class-b-vans-with-cassette-toilets) draw for their pools.",
      },
      {
        type: "ul",
        heading: "A Transit Class B fits if",
        items: [
          "You are tall, or you simply want the most standing room available: the high roof Transit's 81.5 inches is the tallest interior of the three chassis",
          "You want all wheel drive on a gasoline van and your driving is pavement, snow, gravel and forest roads rather than technical terrain that needs low range",
          "You value a service network you can find in almost any town, with domestic parts pricing, over a diesel specialist network",
          "You are open to a builder conversion, where the Transit gives you Sportsmobile, VanDOit and ModVans as established options alongside the five factory models",
        ],
      },
      {
        type: "ul",
        heading: "Look at Sprinter or ProMaster instead if",
        items: [
          "You want a diesel, or a drivetrain with low range for technical terrain. The Transit is gas only in the US market and its all wheel drive has no low range",
          "You want the widest body and crosswise sleeping. That is the ProMaster's strength, covered in our chassis comparison",
          "You want a long factory short list with verified, comparable spec sheets today. The Sprinter and ProMaster pools are where the factory volume and our verified pool both sit",
          "You are set on a specific feature the Transit set does not offer, such as the pop-top sleeping for four in our sleeps four guide, which is a ProMaster and Sprinter story",
        ],
      },
      {
        type: "h2",
        heading: "Start with the chassis, then work the short list",
        text: "Decide the Transit question first: tallest interior, gas all wheel drive with no low range, and Ford service almost anywhere. If that is your chassis, your factory short list is the Beyond for floor plan choice, the Palladium for the shortest van and the only manufacturer-published price in the set, the Talavera for the Transit Trail package, the Expanse for the 22 foot two layout choice, and the Lucent as the new 2027 entry to watch as its specifications firm up. Your builder short list is Sportsmobile, VanDOit and ModVans. Browse the [full market index](/market) to see each of them in the wider field, take the [match quiz](/find-my-van) to test the Transit against the rest of your priorities, run the verified Sprinter and ProMaster alternatives through the [comparison tool](/compare), and read the full [Sprinter vs Transit vs ProMaster comparison](/blog/sprinter-vs-transit-vs-promaster) before you commit to a chassis.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Which Class B vans are built on the Ford Transit?",
            answer: "The factory Transit Class B models in our market index are the Coachmen Beyond, the Thor Palladium, the Thor Talavera, the Entegra Coach Expanse and the Forest River Lucent, which is new for 2027. The builders Sportsmobile, VanDOit and ModVans also build on the Ford Transit: Sportsmobile converts it in three body lengths, VanDOit lists the MOOV, LIV and DO on the Transit, and ModVans lists the CV1 and MH1 on the Transit.",
          },
          {
            question: "Which is the best Transit-based Class B van?",
            answer: "It depends on what you are choosing between, because the factory set splits by job. The Coachmen Beyond offers the broadest floor plan choice, with the 22C, 22D and 22RB on the Transit 350HD with all wheel drive. The Thor Palladium is the shortest at 19 feet 8 inches and is the only model in the set with a manufacturer-published price, a range of $189,560 to $190,960 on Thor's own page. The Thor Talavera adds the Ford Transit Trail package of a lift kit and rugged tires. The Entegra Coach Expanse is the 22 foot option, with a choice between a power sofa floor plan and a twin bed floor plan. The Forest River Lucent is new for 2027, with no manufacturer price or full spec sheet published in its launch release.",
          },
          {
            question: "How much does a Transit-based Class B van cost?",
            answer: "Only two prices in this article come from manufacturers. Thor publishes a price range of $189,560 to $190,960 for the Palladium on its own page, checked October 20, 2026. Sportsmobile publishes a Transit conversion range of $80,000 to $125,000, which is the conversion only and excludes the van itself; a pictured complete Transit build on its pricing page totals $180,000. Coachmen publishes no MSRP for the Beyond, Entegra published no price on its Expanse page when checked, and Forest River published no price for the Lucent in its launch release, so prices for those three are dealer figures, not manufacturer starting prices.",
          },
          {
            question: "Is the Storyteller Overland MODE a Transit van?",
            answer: "Not anymore. Earlier MODE vans were Transit-based, but the current Storyteller Overland MODE is built on the Mercedes Sprinter 2500 with all wheel drive, at a starting price of $192,206 per Storyteller's current page. Listing the current MODE as a Transit option is the most common error in Transit roundups.",
          },
          {
            question: "Does Winnebago make a Transit-based Class B van?",
            answer: "No current one appears in our market index. Winnebago's Revel family is built on the Sprinter and its Travato and Solis family is built on the ProMaster, so a Winnebago Transit Class B result is stale or wrong until a Winnebago page proves otherwise.",
          },
          {
            question: "Is Transit all wheel drive the same as 4x4?",
            answer: "No. The Ford Transit's all wheel drive, fitted across the factory Transit Class B set, has no low range. It is a traction system for wet pavement, snow and gravel roads. A Sprinter 4x4 or a true four wheel drive system with high and low range is a different system for technical terrain, as our chassis comparison explains.",
          },
          {
            question: "Why choose a Transit over a Sprinter for a Class B van?",
            answer: "The three reasons buyers give are height, fuel and service. The high roof Transit has 81.5 inches of interior standing height, the tallest of the three Class B chassis and 4 inches more than the high roof Sprinter. The Transit is gasoline only in the US market, which some buyers prefer to diesel. And a Transit can be serviced at Ford dealers almost anywhere, with domestic parts pricing, while Sprinter service runs through the Mercedes network.",
          },
        ],
      },
    ],
  },
  "class-b-vans-that-sleep-four": {
    slug: "class-b-vans-that-sleep-four",
    intro:
      "Very few Class B vans actually sleep four, and the manufacturer ratings are narrower than dealer listings suggest. Among the vans we track with verified figures, the Winnebago Solis is rated at four as a standard configuration, the four Remote Vans models are rated at two to four, and the Thor Tellaro reaches four only with its optional Sky Bunk pop-top. Everything else in the verified pool is rated at two, or two to three in the case of the Storyteller Overland MODE, including the Winnebago Travato and the Airstream Interstate, which are often described as family vans but are rated at two sleepers by their manufacturers.",
    relatedSlugs: [
      "class-b-vans-with-cassette-toilets",
      "remote-vans-review",
      "class-b-van-buying-guide",
    ],
    blocks: [
      {
        type: "p",
        text: "The short answer is the list above, and the reason it is so short is that a Class B is a van. The second bed, where one exists at all, is usually a pop-top loft or a convertible seat bed, not a second bedroom. What follows lists every verified model by its manufacturer sleeping rating, states the mechanism that gets it to four where it does, and names the options that add a bunk without changing the rating. Sleeping capacity and belted seating are different numbers, and this article uses only the sleeping rating.",
      },
      {
        type: "ul",
        heading: "Sleeping capacity by model, from manufacturer specifications",
        items: [
          "Winnebago Solis (59P and 59PX): sleeps 4, manufacturer-rated. Two in the rear bed and two in the pop-top loft, counted in the rating on both floor plans",
          "Remote Vans Friday: sleeps 2 to 4, manufacturer-rated. Queen bed plus the Vanhalla swing-seat bed, which suits two smaller children",
          "Remote Vans Aegis: sleeps 2 to 4, manufacturer-rated. Queen bed plus the Vanhalla swing-seat bed, which suits two smaller occupants",
          "Remote Vans Oasis: sleeps 2 to 4, manufacturer-rated, on the same queen bed plus Vanhalla swing-seat bed layout",
          "Remote Vans T-45: sleeps 2 to 4, manufacturer-rated, on the same queen bed plus Vanhalla swing-seat bed layout",
          "Thor Tellaro (20L and 20U): sleeps 2 as standard. Four only with the optional Sky Bunk pop-top, per Thor's brochure",
          "Thor Sequence (20L): sleeps 2. An optional Sky Bunk pop-top adds a bunk, but Thor's specification table still rates the 20L at 2",
          "Coachmen Nova (all floor plans): dealer-rated at 2. An optional pop-top with an upper berth is offered, but Coachmen publishes no sleeping capacity figure",
          "Storyteller Overland MODE (Classic MODE OG): sleeps 2 to 3. Rear RV queen plus an RV twin from the convertible GrooveLounge",
          "Winnebago Travato (all floor plans): sleeps 2, per Winnebago's brochure. Dealer listings that say 3 are counting an optional front cab air mattress",
          "Winnebago Revel: sleeps 2",
          "Coachmen Galleria (all floor plans): dealer-rated at 2. Coachmen publishes no sleeping capacity figure",
          "Grech Terreno: sleeps 2",
          "Airstream Interstate 24GLX: sleeps 2, on a 70 inch by 82 inch bed. Belted seating is up to 7, which is a seating figure, not a sleeping figure",
          "Sportsmobile Penthouse Pop Top: a pop-top conversion component, not a factory model with a sleeping rating. Its penthouse bed is 40 inches by 78 inches on Sprinter, Transit and Chevy vans and 53 inches by 78 inches on the ProMaster",
        ],
      },
      {
        type: "h2",
        heading: "What does sleeps four actually mean in a Class B?",
        text: "It means two beds, and the second one is a compromise by design. On the Solis it is a pop-top loft over the main bed. On the Remote Vans models it is a swing-seat bed that the manufacturer itself describes as suiting two smaller children on the Friday and two smaller occupants on the Aegis. On the Tellaro it is an optional pop-top bunk you have to order. None of these is a second bed the size of the main one, and none of them gives four adults four full-size beds. That is not a flaw in these vans. It is the physical limit of sleeping four people inside a van body, and it is why the honest question is not whether a van sleeps four, but who the second bed actually fits.",
      },
      {
        type: "h2",
        heading: "The one mainstream factory van rated at four as standard",
        text: "One van in the verified pool gets to four without an option box, a dealer interpretation, or a seating count standing in for a bed count.",
      },
      {
        type: "h3",
        heading: "Winnebago Solis 59P and 59PX: four, counted by the manufacturer",
        text: "The [Winnebago Solis](/models/winnebago-solis) is rated at four by Winnebago on both of its floor plans. Two sleep in the rear bed, a Murphy+ bed on the 59P and a fold-down bed on the 59PX, and two sleep in the pop-top loft, and Winnebago counts the pop-top berth in its rating on both floor plans, per its Solis brochure. That makes the Solis the only mainstream factory floor plan in our verified pool that the manufacturer rates at four as a standard configuration. Winnebago publishes starting prices of $156,254 for the 59P and $180,487 for the 59PX on its own Solis page. The Solis is also one of the few vans on this list with an enclosed wet bath, which matters when four people share the van. Our [cassette toilet guide](/blog/class-b-vans-with-cassette-toilets) covers its 5 gallon cassette setup in detail.",
      },
      {
        type: "h2",
        heading: "Remote Vans: rated at two to four across the whole line",
        text: "Remote Vans rates every one of its models at two to four, using the same basic arrangement: a queen bed plus a Vanhalla swing-seat bed. The manufacturer figure stands even though dealer listing metadata says two or three on various models. The catch is in the manufacturer's own description of that second bed. On the Aegis it suits two smaller occupants, and the Friday note in the manufacturer's material says two smaller children. Read the rating as two adults plus two smaller sleepers, not four adults.",
      },
      {
        type: "h3",
        heading: "Remote Vans Friday, Aegis, Oasis and T-45",
        text: "The [Remote Vans Friday](/models/remote-vans-friday) and the [Remote Vans Aegis](/models/remote-vans-aegis) both use the queen bed plus Vanhalla swing-seat bed layout and are rated at two to four on the manufacturer's comparison page. The Oasis and the T-45 carry the same two to four rating and the same layout, and our [Remote Vans review](/blog/remote-vans-review) covers the full line, including those two models. Manufacturer direct starting prices are $194,900 for the Friday, $247,900 for the Aegis, $224,900 for the Oasis and $174,900 for the T-45, per Remote Vans. None of these vans has a fixed wet bath, so a family of four is sharing a stowable shower and a portable toilet. That trade is worth weighing alongside the sleeping rating, and you can line the Friday and Aegis up against the Solis in the [comparison tool](/compare).",
      },
      {
        type: "h2",
        heading: "Thor Tellaro: four only with the Sky Bunk option",
        text: "This is the entry most listings get wrong, because they present an option as the standard rating.",
      },
      {
        type: "h3",
        heading: "Tellaro 20L and 20U: two as standard, four as an option",
        text: "Thor rates all three current [Thor Tellaro](/models/thor-tellaro) floor plans at two. Thor's Tellaro brochure lists an optional Sky Bunk pop-top on the 20L and the 20U that raises sleeping capacity to four. So a Tellaro sleeps four only if that specific van was ordered with the Sky Bunk. If you are shopping used, ask to see the pop-top on the van in front of you rather than trusting a headline that says sleeps four. Thor publishes floor plan starting prices from $140,560 for the 20L and $162,120 for the 20U on its own floor plan pages. Those are starting prices before options, so a Sky Bunk equipped van costs more than the base figure.",
      },
      {
        type: "h2",
        heading: "Options that add a bunk but do not change the rating",
        text: "Two more ProMaster lines offer a pop-top or bunk option. In both cases the published sleeping figure does not move to four, and the article would be misleading if it listed either as a sleeps four van.",
      },
      {
        type: "h3",
        heading: "Thor Sequence 20L: a Sky Bunk, and still rated at two",
        text: "The [Thor Sequence](/models/thor-sequence) 20L offers an optional Sky Bunk pop-top that adds a bunk, advertised on Thor's 20L page. Thor's specification table still rates the 20L at two, and it rates the 20U and 20Y at two as well. Describe the Sequence as a two sleeper with an optional bunk, because that is what the manufacturer's own table says. The contrast with the sister Tellaro line is the point: Thor's brochure states the Sky Bunk raises the Tellaro to four, and makes no such statement for the Sequence.",
      },
      {
        type: "h3",
        heading: "Coachmen Nova: an optional pop-top, and no published sleeping figure",
        text: "Every current [Coachmen Nova](/models/coachmen-nova) floor plan, the 20C, 20D and 20RB, offers an optional pop-top with an upper berth, per Coachmen's features page. Coachmen's published spec tables list no sleeping capacity at all, and dealer spec tables rate the Nova at two. A Nova with the pop-top fitted plainly has an extra berth, but there is no manufacturer rating of four behind it, so we do not headline it as a sleeps four van. If the pop-top is the reason you are considering a Nova, get the berth dimensions and the rating in writing from the dealer before you rely on them.",
      },
      {
        type: "h2",
        heading: "The vans that do not sleep four, whatever a listing says",
        text: "Most of the verified pool sleeps two. That includes several vans whose seating, size or marketing can make them look like family vans at a glance.",
      },
      {
        type: "ul",
        items: [
          "[Winnebago Travato](/models/winnebago-travato): rated at two on every floor plan in Winnebago's brochure. Dealer listings often say three, counting the optional front cab air mattress. The manufacturer figure is two, and the Travato does not sleep four in any floor plan.",
          "[Storyteller Overland MODE](/models/storyteller-overland-mode): Storyteller publishes sleeps two to three for the Classic MODE OG, from a rear RV queen DreamWeaver bed plus an RV twin made from the convertible GrooveLounge. Three is the ceiling, not four.",
          "[Airstream Interstate 24GLX](/models/airstream-interstate-24glx): sleeps two on the 70 inch by 82 inch bed formed by the power rear sofa and ottomans. Its belted seating runs up to seven, the highest in this pool, and that is the trap. Belted seats are for travel, not for sleeping.",
          "[Winnebago Revel](/models/winnebago-revel): sleeps two. It shares the Solis badge family and the cassette toilet, but not the pop-top loft or the four sleeper rating.",
          "[Coachmen Galleria](/models/coachmen-galleria): dealer spec tables rate every floor plan at two, and Coachmen publishes no sleeping capacity figure for the line.",
          "[Grech Terreno](/models/grech-terreno): sleeps two, per Grech's specifications.",
        ],
      },
      {
        type: "h2",
        heading: "The custom route: add a pop-top bed to a van that lacks one",
        text: "If no factory floor plan fits, a pop-top conversion is the established custom route to a second bed. The Sportsmobile Penthouse Pop Top, covered in our [Sportsmobile review](/blog/sportsmobile-review), is a paint-matched fiberglass top with a penthouse bed, sold on its own or as part of a Sportsmobile conversion. Sportsmobile publishes the bed at 40 inches by 78 inches on Sprinter, Transit and Chevy vans and 53 inches by 78 inches on the ProMaster, and a starting price of $13,000 for the top with bed, installed. It is a component, not a factory model, so there is no manufacturer sleeps four rating to quote. What it gives you is a real second berth over whatever lower bed your layout already has, which is the same mechanism the factory pop-tops use.",
      },
      {
        type: "h2",
        heading: "Who should not try to sleep four in a Class B?",
        text: "The verified pool makes this point cleanly: most Class B vans sleep two, and four usually means a pop-top loft or a swing-seat bed sized for kids, not four adults in real beds. Be honest about which group you are in before you narrow your list.",
      },
      {
        type: "ul",
        heading: "Sleeping four in a Class B is a poor fit if",
        items: [
          "Your four sleepers are four adults who each expect a full-size bed. No van on this list offers that, and the second beds here are lofts and convertible seat beds",
          "Your two extra sleepers are teenagers or adults rather than smaller children. Remote Vans describes its own second bed as suiting two smaller children or two smaller occupants, so a family with older kids may outgrow the rating before the van wears out",
          "You need an enclosed bathroom that four people can cycle through easily. The Remote Vans models have no fixed wet bath, and the Solis wet bath is shared by everyone in the van",
          "You are counting belted seats as beds. The Interstate seats up to seven belted and sleeps two. Seating capacity tells you who can ride, not who can sleep",
          "You plan long trips rather than weekends. Four people, their clothes and their gear in a van body is workable for a few nights and wearing over weeks, whatever the sleeping rating says",
        ],
      },
      {
        type: "ul",
        heading: "Sleeping four can work if",
        items: [
          "Your group is two adults and two smaller children, which is exactly the group the Solis pop-top loft and the Remote Vans swing-seat bed are built around",
          "You accept a pop-top loft as the second bed and the climbing, weather and headroom limits that come with one",
          "You order the option that creates the rating, such as the Sky Bunk on a Tellaro 20L or 20U, and confirm it is fitted on the specific van you buy",
        ],
      },
      {
        type: "h2",
        heading: "Start with the rating, then check the bed",
        text: "Settle the sleeping question with the manufacturer's rating first, then look at what the second bed actually is. If you need four as a standard configuration, your factory short list is the Solis and the Remote Vans line. If you are open to an ordered option, the Tellaro 20L and 20U with the Sky Bunk join it. Everything else in the verified pool is a two sleeper, or a two to three in the MODE, however a listing describes it. Run your short list through the [comparison tool](/compare), take the [match quiz](/find-my-van) to check sleeping capacity against the rest of your priorities, browse the [full market index](/market) for the wider field, and read our [cassette toilet guide](/blog/class-b-vans-with-cassette-toilets) next, because bathroom type is the other decision that four people sharing a van feel every day.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Which Class B vans sleep four?",
            answer: "Among the vans we track with verified figures, the Winnebago Solis 59P and 59PX are rated at four by Winnebago as a standard configuration, with two in the rear bed and two in the pop-top loft. The Remote Vans Friday, Aegis, Oasis and T-45 are rated at two to four by Remote Vans, using a queen bed plus a Vanhalla swing-seat bed. The Thor Tellaro 20L and 20U sleep four only with the optional Sky Bunk pop-top. Every other model in the verified pool is rated at two, except the Storyteller Overland MODE at two to three.",
          },
          {
            question: "Does the Winnebago Solis sleep four?",
            answer: "Yes. Winnebago rates both the Solis 59P and the 59PX at four in its brochure: two in the rear bed, a Murphy+ bed on the 59P and a fold-down bed on the 59PX, plus two in the pop-top loft, which Winnebago counts in the rating on both floor plans.",
          },
          {
            question: "Does the Winnebago Travato sleep four?",
            answer: "No. Winnebago's brochure rates every Travato floor plan at two. Dealer listings often say three, counting the optional front cab air mattress, but the manufacturer figure is two, and no Travato floor plan sleeps four.",
          },
          {
            question: "Does the Thor Tellaro sleep four?",
            answer: "Only with an option. Thor rates all Tellaro floor plans at two as standard. Thor's brochure lists an optional Sky Bunk pop-top on the 20L and 20U that raises sleeping capacity to four, so a Tellaro sleeps four only if that van was ordered with the Sky Bunk.",
          },
          {
            question: "Does the Thor Sequence sleep four?",
            answer: "No, not by Thor's rating. The Sequence 20L offers an optional Sky Bunk pop-top that adds a bunk, but Thor's specification table still rates the 20L at two, as it does the 20U and 20Y.",
          },
          {
            question: "Does the Storyteller Overland MODE sleep four?",
            answer: "No. Storyteller publishes sleeps two to three for the Classic MODE OG: a rear RV queen DreamWeaver bed plus an RV twin from the convertible GrooveLounge. Three is the maximum.",
          },
          {
            question: "Does the Airstream Interstate sleep four?",
            answer: "No. The Interstate 24GLX sleeps two on the 70 inch by 82 inch bed formed by the power rear sofa and ottomans, per Airstream. Its belted seating runs up to seven, but belted seating is a travel figure, not a sleeping figure.",
          },
          {
            question: "Can a Class B van sleep four adults?",
            answer: "Not in four full-size beds. The vans rated for four get there with a second bed that is smaller than the main one: a pop-top loft on the Winnebago Solis and the optional Thor Tellaro Sky Bunk, or the Vanhalla swing-seat bed on the Remote Vans models, which Remote Vans describes as suiting two smaller children on the Friday and two smaller occupants on the Aegis. Four works best as two adults plus two smaller sleepers.",
          },
        ],
      },
    ],
  },
  "class-b-vans-with-cassette-toilets": {
    slug: "class-b-vans-with-cassette-toilets",
    intro:
      "Among the twelve Class B vans we track with verified manufacturer figures, the Winnebago Solis and Winnebago Revel have a fixed cassette toilet, the Thor Sequence and Thor Tellaro offer one on their 20U floor plan only, and the Storyteller Overland MODE, Remote Vans Friday and Remote Vans Aegis carry a portable cassette or cartridge toilet. The other five use a flush toilet plumbed to a black tank, and none of the twelve lists a composting toilet as standard equipment.",
    relatedSlugs: [
      "remote-vans-review",
      "class-b-van-buying-guide",
      "sprinter-vs-transit-vs-promaster",
    ],
    blocks: [
      {
        type: "p",
        text: "The short answer is the list above, and it matters more than most spec lines, because the toilet decides how you empty waste for the life of the van. A cassette lifts out and empties at a dump station or into a regular toilet, with no hose and no fixed tank under the van. A black tank holds far more and empties far less often, but only at a dump station, through a sewer hose. What follows lists every verified model by toilet type, with the cassette and tank sizes each manufacturer publishes, so you can shop the decision instead of discovering it on your first trip.",
      },
      {
        type: "ul",
        heading: "Toilet type by model, from manufacturer specifications",
        items: [
          "Winnebago Solis (59P and 59PX): fixed swiveling cassette toilet, 5 gallon cassette, enclosed wet bath, no black tank",
          "Winnebago Revel (44E): fixed swiveling cassette toilet, 5 gallon cassette, wet bath",
          "Thor Sequence: cassette toilet on the 20U only (4.75 gallon cassette); the 20L and 20Y use a flush toilet and a black tank",
          "Thor Tellaro: cassette toilet on the 20U only (4.75 gallon cassette); the 20L and 20Y use a flush toilet and a black tank",
          "Storyteller Overland MODE (Classic MODE OG): portable cassette toilet, 2.6 gallon capacity, stowable shower, no black tank",
          "Remote Vans Friday: portable cartridge toilet stored in the shower box, stowable shower, no black tank",
          "Remote Vans Aegis: portable Thetford cassette toilet stored in the shower box, stowable shower, no black tank",
          "Winnebago Travato: no cassette; flush toilet to a black tank, 11 gallons on the 59G and 12 gallons on the 59K and 59KL",
          "Coachmen Nova: no cassette; flush toilet to a black tank on every floor plan, 19 gallons on the 20C and 20D and 10 gallons on the 20RB",
          "Coachmen Galleria: no cassette; porcelain flush toilet to a black tank on every floor plan, 19 gallons on the 24A, 24 on the 24FL, 12 on the 24Q and 26 on the 24RB",
          "Grech Terreno: no cassette; porcelain toilet with a macerator pump to a 13 gallon black tank",
          "Airstream Interstate 24GLX: no cassette; foot flush toilet to an 11 gallon waste tank, emptied by a macerator pump",
        ],
      },
      {
        type: "h2",
        heading: "What is a cassette toilet, and how is it different from a black tank?",
        text: "A cassette toilet sits over a sealed, removable waste cassette. When the cassette is full, you slide it out and empty it through its pour spout at a dump station or into a regular toilet. Capacities in current Class B vans run from 2.6 gallons on the Storyteller MODE portable unit to 5 gallons on the fixed Winnebago installs. A black tank toilet is plumbed like a small version of a house toilet: waste drops into a fixed tank under the floor, and you empty that tank at a dump station by connecting a sewer hose. The black tanks in the vans above hold 10 to 26 gallons, so they need emptying far less often, but only where a dump connection exists.",
      },
      {
        type: "h2",
        heading: "Which vans have a fixed cassette toilet in a wet bath?",
        text: "Two vans, both from Winnebago, and they could hardly be more different otherwise.",
      },
      {
        type: "h3",
        heading: "Winnebago Solis: cassette on every floor plan",
        text: "The [Winnebago Solis](/models/winnebago-solis) is the clearest cassette answer in the segment. Both floor plans, the 59P and the 59PX, have an enclosed wet bath with a swiveling cassette toilet and a 5 gallon cassette, per Winnebago's Solis brochure, and there is no black water tank at all. If you want a cassette, a real enclosed bathroom and sleeping for four in the same van, the Solis is the only entry on this list that combines all three. Put it side by side with the Thor pair below in the [comparison tool](/compare) and the toilet is one of the first differences you will see.",
      },
      {
        type: "h3",
        heading: "Winnebago Revel: cassette in an adventure van",
        text: "The [Winnebago Revel](/models/winnebago-revel) puts the same style of toilet in a very different van: a swiveling cassette toilet with a 5 gallon cassette in a 31 by 26 inch wet bath, per Winnebago's specifications for the 44E. In an all wheel drive adventure van the cassette earns its keep. There is no black tank to deal with, and the cassette can be emptied at a dump station or into a regular toilet when a trip ends nowhere near an RV dump.",
      },
      {
        type: "h2",
        heading: "Which vans offer a cassette on one floor plan only?",
        text: "Thor's two ProMaster lines split the decision by floor plan, and this is the detail most dealer listings blur. A listing that calls the model line a cassette toilet van is right one time in three.",
      },
      {
        type: "h3",
        heading: "Thor Sequence: cassette on the 20U only",
        text: "On the [Thor Sequence](/models/thor-sequence), only the 20U has a cassette toilet, with a 4.75 gallon cassette in its enclosed wet bath. The 20L and 20Y have gravity flush toilets running to black tanks of 13.5 and 14 gallons. Thor's own floor plan specification pages list waste water at 4.75 gallons on the 20U against those larger black tank figures on the other floor plans, and Thor lists both toilet types in its published standards for the line.",
      },
      {
        type: "h3",
        heading: "Thor Tellaro: the identical split",
        text: "The [Thor Tellaro](/models/thor-tellaro) is the Sequence's sister line and makes the identical split: a cassette toilet on the 20U at 4.75 gallons, and gravity flush toilets with 13.5 and 14 gallon black tanks on the 20L and 20Y. Thor states the split outright in its Tellaro brochure. If a dealer advertises a Tellaro or a Sequence as a cassette toilet van, ask which floor plan is on the lot, because two of the three are not.",
      },
      {
        type: "h2",
        heading: "Which vans carry a portable cassette toilet instead of a fixed bath?",
        text: "The adventure vans below trade the fixed bathroom for living and gear space. The toilet is a portable cassette or cartridge unit that stores away, paired with a stowable shower, and there is no black tank at all.",
      },
      {
        type: "h3",
        heading: "Storyteller Overland MODE: the 2.6 gallon portable",
        text: "The [Storyteller Overland MODE](/models/storyteller-overland-mode), in Classic MODE OG form, skips the fixed bathroom entirely. You get a stowable Halo Shower system and a portable cassette toilet with 2.6 gallons of capacity, per Storyteller's published specifications, rechecked on the manufacturer's page on October 18, 2026. The trade is living space and a 37 gallon fresh water tank mounted inside the cabin, against a toilet you store, carry and empty more often than any other on this list.",
      },
      {
        type: "h3",
        heading: "Remote Vans Friday and Aegis: cartridge and cassette, same idea",
        text: "Remote Vans makes the same trade across its line. The [Remote Vans Friday](/models/remote-vans-friday) carries what the manufacturer calls a portable cartridge toilet, and the [Remote Vans Aegis](/models/remote-vans-aegis) carries a portable Thetford cassette toilet. Both store in the shower box of the stowable Cyber Shower, neither van has a black tank or a fixed wet bath, and both manufacturer pages were rechecked on October 18, 2026. Remote uses the words cartridge and cassette for the same kind of removable waste container. Our [Remote Vans review](/blog/remote-vans-review) covers the rest of that bathroom trade in detail.",
      },
      {
        type: "h2",
        heading: "Which Class B vans do not have a cassette toilet?",
        text: "Five of the twelve verified models use a flush toilet plumbed to a holding tank on every floor plan. If you want a cassette, these are the vans to cross off, whatever a listing headline suggests.",
      },
      {
        type: "ul",
        items: [
          "[Winnebago Travato](/models/winnebago-travato): a wet bath with a foot pedal flush toilet running to a black tank, 11 gallons on the 59G and 12 gallons on the 59K and 59KL, per Winnebago's 2026 brochure. It is the Revel's ProMaster sibling, and the toilet is one of the clearest differences between the two.",
          "[Coachmen Nova](/models/coachmen-nova): a wet bath with a fiberglass shower and a flush toilet to a black tank on every floor plan, 19 gallons on the 20C and 20D and 10 gallons on the 20RB, per Coachmen's specifications.",
          "[Coachmen Galleria](/models/coachmen-galleria): a porcelain flush toilet to a black tank on every floor plan, 19 gallons on the 24A, 24 on the 24FL, 12 on the 24Q and 26 on the 24RB, per Coachmen's specifications.",
          "[Grech Terreno](/models/grech-terreno): a porcelain toilet with a macerator pump to a 13 gallon black tank, per Grech's specifications and owner's manual.",
          "[Airstream Interstate 24GLX](/models/airstream-interstate-24glx): a foot flush toilet to an 11 gallon waste tank, emptied by a macerator pump system, per Airstream's specification page.",
        ],
      },
      {
        type: "h2",
        heading: "Cassette or black tank: which should you choose?",
        text: "Neither system is better in the abstract. They fit different trips, and the honest way to choose is by how you actually camp.",
      },
      {
        type: "ul",
        heading: "A cassette fits if",
        items: [
          "You camp away from dump stations and want to empty waste at a restroom or any dump point, without a sewer hose",
          "You like the option of carrying a spare cassette and swapping it instead of moving the van to dump",
          "You accept emptying a 2.6 to 5 gallon container by hand, more often than a black tank would need it",
          "You want no black tank under the van at all, as on the Solis, the MODE and the Remote Vans models",
        ],
      },
      {
        type: "ul",
        heading: "A black tank fits if",
        items: [
          "You use campgrounds with dump stations or full hookups most of the time",
          "You want the longest interval between dumps: the black tanks on this list hold 10 to 26 gallons, against 2.6 to 5 gallons for cassettes",
          "You want a fixed, plumbed bathroom that works like the one at home, with a flush toilet in an enclosed wet bath",
        ],
      },
      {
        type: "h2",
        heading: "What about composting toilets?",
        text: "None of the twelve vans in our verified pool lists a composting toilet as standard equipment in its manufacturer specifications. Composting units show up in custom conversions and as owner swaps, where a cassette or portable toilet is removed and a composting unit is fitted in its place. If composting is your plan, shop the bathroom space and the venting path rather than the badge, and confirm the swap fits before you buy. The custom route is covered in our [Sportsmobile review](/blog/sportsmobile-review), about a builder that builds each van to its client's layout.",
      },
      {
        type: "h2",
        heading: "Start with the toilet, then shop the van",
        text: "The toilet is a small line on a spec sheet and a daily fact of life on the road, so settle it early. If you have decided on a cassette, your factory short list is the Solis, the Revel, the Thor 20U floor plans, and the portable cassette adventure vans. If you want a black tank, the Travato and the Coachmen, Grech and Airstream entries above are your pool. Run your short list through the [comparison tool](/compare), take the [match quiz](/find-my-van) to check the rest of your priorities against the same models, browse the [full market index](/market) for the wider field, and read the [Class B buying guide](/blog/class-b-van-buying-guide) for the questions to answer before any of this.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Which Class B camper vans have a cassette toilet?",
            answer: "Among the twelve Class B vans we track with verified manufacturer figures, the Winnebago Solis and Winnebago Revel have fixed cassette toilets with 5 gallon cassettes. The Thor Sequence and Thor Tellaro offer a cassette toilet on their 20U floor plan only, with a 4.75 gallon cassette. The Storyteller Overland MODE, Remote Vans Friday and Remote Vans Aegis carry portable cassette or cartridge toilets and have no black tank. The Winnebago Travato, Coachmen Nova, Coachmen Galleria, Grech Terreno and Airstream Interstate 24GLX use flush toilets plumbed to black tanks instead.",
          },
          {
            question: "Does the Winnebago Revel have a cassette toilet?",
            answer: "Yes. The Revel 44E has a swiveling cassette toilet with a 5 gallon cassette in its 31 by 26 inch wet bath, per Winnebago's published specifications.",
          },
          {
            question: "Does the Winnebago Travato have a cassette toilet?",
            answer: "No. The Travato has a wet bath with a foot pedal flush toilet running to a black tank, 11 gallons on the 59G and 12 gallons on the 59K and 59KL, per Winnebago's 2026 brochure. Its Sprinter sibling, the Revel, is the Winnebago with the cassette.",
          },
          {
            question: "Do all Thor Tellaro and Sequence floor plans have cassette toilets?",
            answer: "No. On both lines, only the 20U floor plan has a cassette toilet, with a 4.75 gallon cassette. The 20L and 20Y floor plans have gravity flush toilets running to black tanks of 13.5 and 14 gallons. Thor states the split in its published standards and floor plan specifications.",
          },
          {
            question: "How big is a Class B cassette toilet?",
            answer: "The fixed Winnebago cassettes hold 5 gallons, the Thor 20U cassette holds 4.75 gallons, and the Storyteller MODE portable cassette holds 2.6 gallons, per each manufacturer's specifications. By comparison, the black tanks in the vans we track hold 10 to 26 gallons, which is why cassette owners empty more often.",
          },
          {
            question: "Can you empty a cassette toilet without a dump station?",
            answer: "Yes. A cassette lifts out of the van and empties through its pour spout at a dump station or into a regular toilet, with no sewer hose involved. That flexibility, rather than capacity, is the main reason buyers choose a cassette over a black tank.",
          },
          {
            question: "Do any Class B vans come with a composting toilet?",
            answer: "None of the twelve vans in our verified pool lists a composting toilet as standard equipment in its manufacturer specifications. Composting toilets in Class B vans are generally custom build choices or owner swaps in place of a cassette or portable toilet.",
          },
        ],
      },
    ],
  },
  "class-b-van-buying-guide": {
    slug: "class-b-van-buying-guide",
    intro:
      "The Class B campervan market has never been more exciting — or more confusing. You've got boutique custom builders crafting $250,000 rolling masterpieces, and you've got major RV manufacturers now offering factory all-wheel drive, lifted suspensions, and off-road tires at scale. Everyone looks legit. Every van looks amazing in photos. And the price range runs from $80,000 to well over $300,000.",
    relatedSlugs: [
      "sprinter-vs-transit-vs-promaster",
      "4x4-van-is-it-worth-it",
      "off-grid-power-systems-class-b",
    ],
    blocks: [
      {
        type: "callout",
        text: "Before you fall in love with a van on Instagram, before you schedule a factory tour, before you put a deposit down — answer these seven questions. They'll save you from one of the most expensive mistakes you can make.",
      },

      // ── Question 1 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 1: How Do You Actually Plan to Use It?",
        text: "This sounds obvious. It isn't.",
      },
      {
        type: "h3",
        heading: "Define Your Use Case Before You Shop",
        text: "Most buyers say \"weekend trips and maybe some longer stuff eventually.\" That answer tells you nothing — and it leads to buying the wrong van. Be specific. Are you a solo traveler or a couple? Do you bring dogs? Kids? Bikes? Do you need to work remotely from the road? Are you camping in developed campgrounds with hookups, or are you parking on forest roads with no power and no water for a week at a time?",
      },
      {
        type: "h3",
        heading: "Why Use Case Drives Every Other Decision",
        text: "Your use case determines your floor plan, your electrical requirements, your storage needs, and your budget. A weekend warrior who camps at state parks twice a month has completely different needs than a couple planning to full-time for two years in the backcountry. Get this wrong and you'll be living with compromises every single trip.",
      },

      // ── Question 2 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 2: Custom Builder or RV Manufacturer?",
        text: "This is the fork in the road — and it's a bigger decision than most buyers realize.",
      },
      {
        type: "h3",
        heading: "What the Custom Builder Path Looks Like",
        text: "Working with a shop like [Outside Van](https://www.outsidevan.com), [Storyteller Overland](https://storytelleroverland.com), or dozens of regional converters means they take a raw cargo van and build it to your specifications. You get a high degree of personalization, often superior craftsmanship, and a build that reflects how you actually live. The tradeoff is lead times that can stretch 12-18 months, limited dealer networks for service, and prices that reflect handcrafted work.",
      },
      {
        type: "h3",
        heading: "What the RV Manufacturer Path Looks Like",
        text: "Buying from companies like [Winnebago](https://www.winnebago.com), [Airstream](https://www.airstream.com), or [Thor](https://www.thormotorcoach.com) means established dealer networks, standardized builds, financing options, and warranty infrastructure. These used to mean compromise on capability. Not anymore.",
      },
      {
        type: "h3",
        heading: "How the Market Has Changed",
        text: "Here's what's shifted the game: major manufacturers are now bringing custom builder specs to production scale. Factory all-wheel drive, suspension upgrades, off-road wheel and tire packages — features that used to require a boutique builder are now coming off assembly lines. That blurs the line significantly and makes the decision harder than it used to be. The right answer depends on how much you value personalization versus convenience, and how comfortable you are with the service and warranty experience each path offers.",
      },

      // ── Question 3 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 3: Do You Need 4x4 and Off-Road Capability?",
        text: "Be honest with yourself here.",
      },
      {
        type: "h3",
        heading: "The Real Cost of 4x4",
        text: "4x4 capability adds cost — typically $10,000 to $25,000 or more depending on the platform and conversion. It adds weight. It adds mechanical complexity. And for a lot of buyers, it sits unused 95% of the time.",
      },
      {
        type: "h3",
        heading: "Who Actually Needs Off-Road Capability",
        text: "If your version of adventure is driving to a trailhead, parking in a campground, and day hiking — you don't need 4x4. A well-built 2WD Sprinter will get you everywhere you actually want to go. But if you're chasing dispersed camping on unmaintained forest roads, running routes in shoulder season when conditions are unpredictable, or overlanding into genuinely remote terrain — 4x4 stops being a luxury and becomes a safety decision.",
      },
      {
        type: "h3",
        heading: "Don't Let Marketing Make This Decision",
        text: "The current market trend is pushing buyers toward off-road specs because it looks great and it sells. Don't let marketing make this decision for you. Be clear about where you actually drive, and buy accordingly. Our full breakdown: [is 4x4 actually worth it?](/blog/4x4-van-is-it-worth-it)",
      },

      // ── Question 4 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 4: Who Converted It and Can They Prove Their Quality?",
        text: "This is the question most buyers skip. It's the one they regret.",
      },
      {
        type: "h3",
        heading: "Understanding Converter Quality Tiers",
        text: "Not all converters are equal — not even close. There are three rough tiers in the market:",
      },
      {
        type: "ul",
        items: [
          "Premium builders have years of documented builds, real customer reviews, transparent build processes, proper electrical engineering, and warranties they actually stand behind. They cost more because they deliver more.",
          "Mid-tier builders are often solid regional shops doing good work, but with less track record and less infrastructure. Some are excellent. Some cut corners you won't discover until you're three states from home.",
          "Budget converters — domestic or overseas — often look impressive in photos and fall apart under real use. Poorly designed electrical systems, inadequate insulation, cabinetry that doesn't survive road vibration, and warranties that evaporate when you need them.",
        ],
      },
      {
        type: "h3",
        heading: "Questions to Ask Every Converter Before You Buy",
        text: "Before you commit, ask for a detailed build sheet. Ask for customer references and actually call them. Ask specifically about the electrical system design and who engineered it. Ask what the warranty covers and what the claims process looks like. A quality builder will answer every one of those questions without hesitation. A bad one will get vague.",
      },

      // ── Question 5 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 5: What's Your Real Budget Including Hidden Costs?",
        text: "Whatever number you have in your head right now — add 20 to 30 percent.",
      },
      {
        type: "h3",
        heading: "Hidden Costs Most Buyers Miss",
        text: "The purchase price is just the beginning. Here's what most buyers don't factor in:",
      },
      {
        type: "ul",
        items: [
          "Insurance on a $150,000 Class B is not cheap, and coverage varies significantly. Some policies don't cover full-time living situations. Get quotes before you buy, not after.",
          "Maintenance on a Mercedes Sprinter is expensive. Dealer networks are improving but service can still be difficult in rural areas. A diesel engine, a complex electrical system, and a living space all require ongoing attention.",
          "Storage if you're not full-timing. Climate-controlled storage for a vehicle this size runs $200 to $400 a month in most western markets.",
        ],
      },
      {
        type: "h3",
        heading: "Costs That Catch Buyers Off Guard",
        text: "Upgrades — almost every buyer adds things after purchase. Solar capacity, better mattress, bike rack, rooftop gear, communication devices for backcountry travel. Budget for it upfront. Depreciation — Class B vans hold value reasonably well compared to larger RVs, but they're not investments. Know your exit strategy before you buy.",
      },

      // ── Question 6 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 6: How Do You Handle Power and Water Off-Grid?",
        text: "This is where dream meets reality fast.",
      },
      {
        type: "h3",
        heading: "Understanding Your Electrical System",
        text: "The electrical system is the heart of a livable van build. It determines whether you can run your coffee maker, charge your laptops, power your refrigerator, and keep your CPAP running for three days without hookups. A poorly designed system will leave you frustrated and underpowered. A well-engineered one disappears into the background and just works.",
      },
      {
        type: "h3",
        heading: "What to Look for in a Van's Electrical Build",
        text: "Ask specifically about battery capacity in usable amp hours, solar input wattage, shore power charging capability, and inverter size. Lithium batteries are now the standard for serious builds — they're lighter, they charge faster, and they deliver more usable capacity than AGM. The complete sizing guide: [off-grid power systems for Class B vans](/blog/off-grid-power-systems-class-b).",
      },
      {
        type: "h3",
        heading: "Water Capacity and Real-World Use",
        text: "Water is simpler but still matters. How many gallons does the fresh tank hold? Is there a gray water tank or does it drain directly? Is there a hot water system? For weekend use these questions are minor. For extended trips they become daily considerations.",
      },

      // ── Question 7 ──────────────────────────────────────────
      {
        type: "h2",
        heading: "Question 7: What Does Ownership Look Like Long Term?",
        text: "The purchase is day one. You need to think about year three.",
      },
      {
        type: "h3",
        heading: "Warranty Coverage That Actually Protects You",
        text: "What's actually covered, for how long, and who honors it? A custom builder warranty is only as good as the builder's longevity and willingness to stand behind their work. A manufacturer warranty comes with dealer network support but may have more exclusions than you expect.",
      },
      {
        type: "h3",
        heading: "Service Network and Parts Availability",
        text: "Where do you get it serviced? This matters more if you travel extensively. Sprinter dealers are widespread but not universal. Promaster and Transit have broader domestic dealer coverage. If something fails in rural Montana, your service options matter. For highly custom builds with proprietary components, replacement parts can become a challenge. For production vans from established manufacturers this is largely a non-issue.",
      },
      {
        type: "h3",
        heading: "Resale Value by Van Type",
        text: "Class B vans from reputable builders and established manufacturers hold value well. Unknown converters and budget builds do not. If you think you might sell in five years, buy accordingly.",
      },

      // ── Bottom Line ─────────────────────────────────────────
      {
        type: "h2",
        heading: "The Bottom Line",
        text: "A Class B van is one of the best investments you can make in how you experience the world. It's also a decision that rewards research and punishes impulse. Answer these seven questions honestly before you start shopping and you'll enter the market with clarity. You'll know what you need, what you're willing to pay for, and what questions to ask before you sign anything. That puts you miles ahead of most buyers. The right van is out there. Take the time to find it. When you are ready, [take the match quiz](/find-my-van) or [compare every current model side by side](/compare).",
      },

      // ── About the Author ────────────────────────────────────
      {
        type: "callout",
        text: "About the Author — Mark Abplanalp lives in Post Falls, Idaho with his wife and their rescue dog Roxy. He owns a 2013 Sportsmobile 170 EXT Sprinter van and has spent years exploring the American West from the driver's seat. He's passionate about the Class B van space and committed to helping buyers navigate it with honest, experience-based guidance — so they buy the right rig the first time.",
      },

      // ── FAQ ─────────────────────────────────────────────────
      {
        type: "faq-group",
        faqs: [
          {
            question: "How do I decide how I'll actually use my Class B van?",
            answer:
              "Be specific about your travel style before you shop. Define whether you're solo or a couple, whether you bring pets or bikes, whether you need to work remotely, and whether you'll camp at developed campgrounds with hookups or boondock on forest roads for a week at a time. Your use case determines your floor plan, electrical requirements, storage needs, and budget.",
          },
          {
            question: "Should I buy from a custom van builder or an RV manufacturer?",
            answer:
              "Custom builders like Outside Van or Storyteller Overland offer high personalization and often superior craftsmanship, but with 12-18 month lead times and limited service networks. RV manufacturers like Winnebago, Airstream, and Thor offer established dealer networks, standardized builds, and warranty infrastructure. Major manufacturers now offer factory all-wheel drive and off-road packages that used to require a boutique builder.",
          },
          {
            question: "Is 4x4 worth the cost on a Class B campervan?",
            answer:
              "4x4 adds $10,000 to $25,000 or more and increases weight and mechanical complexity. If you camp at developed campgrounds and drive graded roads, you don't need it. If you chase dispersed camping on unmaintained forest roads or overland into remote terrain, 4x4 becomes a safety decision. Don't let marketing make this choice — be honest about where you actually drive.",
          },
          {
            question: "How do I evaluate a van converter's build quality?",
            answer:
              "Ask for a detailed build sheet, customer references (and actually call them), specifics about the electrical system design and who engineered it, and exactly what the warranty covers including the claims process. Premium builders answer these questions without hesitation. There are three quality tiers: premium builders with documented track records, mid-tier regional shops with varying quality, and budget converters that often look great in photos but fall apart under real use.",
          },
          {
            question: "What hidden costs should I budget for when buying a Class B van?",
            answer:
              "Add 20-30% to your purchase price for hidden costs. Insurance on a $150,000 Class B varies significantly and some policies don't cover full-time living. Mercedes Sprinter maintenance is expensive and service can be difficult in rural areas. Storage runs $200-$400/month if you're not full-timing. Almost every buyer adds upgrades after purchase — solar, mattress, bike rack, communication devices. Class B vans hold value better than larger RVs, but they're not investments.",
          },
          {
            question: "What should I look for in a van's off-grid power and water system?",
            answer:
              "The electrical system determines whether you can run appliances for days without hookups. Ask about battery capacity in usable amp hours, solar input wattage, shore power charging capability, and inverter size. Lithium batteries are now the standard for serious builds. For water, check fresh tank capacity, gray water handling, and hot water availability — these matter more on extended trips than weekend use.",
          },
          {
            question: "What does long-term Class B van ownership look like?",
            answer:
              "Think about year three, not just day one. Evaluate warranty coverage and who actually honors it — custom builder warranties depend on the builder's longevity. Consider the service network: Sprinter dealers are widespread but not universal, while Promaster and Transit have broader domestic coverage. Vans from reputable builders and established manufacturers hold resale value well; unknown converters and budget builds do not.",
          },
        ],
      },
    ],
  },

  "sprinter-vs-transit-vs-promaster": {
    slug: "sprinter-vs-transit-vs-promaster",
    intro:
      "Three chassis dominate the Class B van market: the Mercedes Sprinter, the Ford Transit, and the Ram ProMaster. On paper they look similar — cargo vans you can sleep in. In practice, they're built for meaningfully different buyers. Here's the honest breakdown.",
    relatedSlugs: [
      "class-b-van-buying-guide",
      "4x4-van-is-it-worth-it",
      "remote-vans-review",
    ],
    blocks: [
      {
        type: "h2",
        heading: "Which chassis should you buy?",
        text: "Buy a Sprinter if off-road capability matters above all else; the [Coachmen Galleria](/models/coachmen-galleria) is the luxury touring coach on that chassis, all hardwood finish and R-15 insulation on the long 170-inch wheelbase, and the [Grech Terreno](/models/grech-terreno) is the luxury flagship, hand-built on the 3500XD with everything standard at a published $290,400, while the [Airstream Interstate 24GLX](/models/airstream-interstate-24glx) is the luxury tourer on the extended chassis, the longest van in the pool, seating seven and sleeping two. Buy a Transit if you want the most interior height, the most builder options, and a lower base cost. Buy a ProMaster if budget is tight and you'll stay on pavement; the [Winnebago Travato](/models/winnebago-travato) is the factory benchmark on that chassis, and the [Winnebago Solis](/models/winnebago-solis) is its family-first sibling, built around sleeping four, while Thor's [Sequence](/models/thor-sequence) and its sister line, the [Tellaro](/models/thor-tellaro), are the value plays on the same chassis, the Tellaro carrying the lowest published starting price of the group, and the [Coachmen Nova](/models/coachmen-nova) is the cold-climate pick, with the best insulation fitted to any ProMaster. Now for the details.",
      },
      {
        type: "h2",
        heading: "How do the interior dimensions compare?",
        text: "This is where the Transit wins decisively. The high-roof Transit delivers 81.5\" (6'10\") of interior standing height — a full 4 inches taller than the high-roof Sprinter, which comes in at 76.7\" (6'4\"). Both are livable, but that gap is noticeable when you're standing at the stove or changing clothes. The ProMaster is the widest of the three (approximately 60\" between wheel wells vs. 48\" for the Sprinter), which makes it excellent for crosswise sleeping arrangements. The manufacturers publish the full specifications: [Mercedes-Benz Sprinter](https://en.wikipedia.org/wiki/Mercedes-Benz_Sprinter), [Ford Transit](https://en.wikipedia.org/wiki/Ford_Transit), and [Ram ProMaster](https://en.wikipedia.org/wiki/Ram_ProMaster).",
      },
      {
        type: "h2",
        heading: "What about drivetrain and off-road capability?",
      },
      {
        type: "ul",
        items: [
          "Sprinter: Gas or diesel (US market). Current models use an on-demand AWD system; the older factory 4x4 with a two-speed transfer case ended with the previous generation. Best ground clearance stock.",
          "Transit: Gas only (US market). AWD option with no low range. Good in slippery conditions, limited on technical terrain.",
          "ProMaster: Gas only. Front-wheel drive exclusively — no AWD or 4x4 available, ever.",
        ],
      },
      {
        type: "h2",
        heading: "Which is most reliable, and cheapest to own?",
        text: "The ProMaster has the simplest mechanicals and lowest service costs. The Transit is a close second — extensive dealer network, cheaper parts, and straightforward maintenance. The Sprinter is the most capable but the most expensive to maintain: diesel service at a Mercedes dealer runs $800–$1,500 for routine work, and major repairs can be significant. That said, well-maintained Sprinters regularly hit 300,000+ miles.",
      },
      {
        type: "h2",
        heading: "Which chassis has the best builder ecosystem?",
        text: "More quality custom converters build on the Sprinter than any other platform. If you want a custom build with maximum options and the best resale value, Sprinter is the industry standard. The Transit has a large and growing converter community, particularly at the mid-market price point. ProMaster converters exist but the ecosystem is considerably smaller.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Is the Sprinter or Transit more reliable?",
            answer:
              "Both are reliable platforms with different risk profiles. The Transit's domestic engine and parts supply chain make it easier and cheaper to maintain. The Sprinter's diesel engine is extremely durable but requires Mercedes-specific service. For most buyers, the Transit is the lower-maintenance option.",
          },
          {
            question: "Which van has the best resale value?",
            answer:
              "Sprinter-based conversions from reputable builders hold value best, particularly with the AWD or 4x4 option. The Sprinter brand carries a premium in the used market. Storyteller Overland also holds value well due to brand demand. ProMaster builds generally depreciate fastest.",
          },
          {
            question: "Can I fit a full-size bed in a ProMaster?",
            answer:
              "Yes — the ProMaster's wide interior (approximately 60\" between wheel wells) accommodates a full-size (54\") crosswise mattress without a raised platform. This is one of its genuine advantages over the narrower Sprinter.",
          },
        ],
      },
    ],
  },

  "4x4-van-is-it-worth-it": {
    slug: "4x4-van-is-it-worth-it",
    intro:
      "The 4x4 option on a Sprinter-based Class B typically adds $10,000–$25,000 to the purchase price and increases your maintenance complexity. It's the right choice for some buyers and completely unnecessary for others. Here's how to decide honestly.",
    relatedSlugs: [
      "sprinter-vs-transit-vs-promaster",
      "storyteller-overland-mode-suspension",
      "class-b-van-buying-guide",
    ],
    blocks: [
      {
        type: "h2",
        heading: "What does 4x4 actually give you?",
        text: "True 4x4 on a Sprinter means a two-speed transfer case with high range (for highway use and mild off-road) and low range (for technical, slow-speed terrain where torque multiplication matters). This is meaningfully different from AWD, which lacks the low range and is primarily useful for traction in slippery conditions rather than technical off-road.",
      },
      {
        type: "callout",
        text: "Key distinction: Sprinter 4x4 = true 4WD with high and low range. Storyteller/Transit AWD = all-wheel drive without low range. These are different systems for different use cases.",
      },
      {
        type: "callout",
        text: "Buying new today? Since the 2023 model year, Mercedes sells this capability as an on-demand AWD system rather than the low-range 4x4 described in this article. Current adventure models like the [Winnebago Revel](/models/winnebago-revel) run that AWD system. The analysis below covers the 4x4 generation, and what AWD does and does not replace.",
      },
      {
        type: "h2",
        heading: "Who actually needs 4x4?",
      },
      {
        type: "ul",
        items: [
          "You regularly access Forest Service roads rated 4WD only",
          "You camp above 8,000 feet where seasonal snow is common",
          "You beach-drive on unimproved sand (tidal access, OHV areas)",
          "You routinely use two-track roads in wet, muddy conditions",
          "High resale value in your market — 4x4 vans sell faster and for more",
        ],
      },
      {
        type: "h2",
        heading: "Who probably doesn't need it?",
      },
      {
        type: "ul",
        items: [
          "You camp at developed campgrounds or state parks most of the time",
          "Your 'off-road' is gravel forest roads, not technical two-track",
          "You're buying a Transit or ProMaster (4x4 isn't available anyway)",
          "Budget is a significant constraint — the premium has real opportunity cost",
          "You primarily camp at elevation during dry summer months",
        ],
      },
      {
        type: "h2",
        heading: "Does the cost-benefit math work?",
        text: "At the $10,000–$25,000 the option typically adds, a van 4x4 makes financial sense if you'll actually use it OR if you're buying in a market where 4x4 resale commands a premium. If you spend 90% of your time on paved or graded roads and buy a Sprinter 4x4 for 'just in case' scenarios you could navigate with traction boards and a shovel, you've overpaid.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Does 4x4 affect fuel economy in a Sprinter?",
            answer:
              "Yes — the added mechanical complexity and weight of the 4x4 system reduces fuel economy by approximately 1–3 MPG depending on driving conditions. Most drivers report 18–22 MPG highway in 2WD Sprinters vs. 16–20 in 4x4 models.",
          },
          {
            question: "Is 4x4 worth it for resale?",
            answer:
              "In most markets, yes — Sprinter 4x4 units sell faster and command $10,000–$20,000 premiums in the used market over equivalent 2WD builds. If you're buying with any eye toward resale, 4x4 is often the right investment.",
          },
          {
            question: "Can I add 4x4 to a 2WD Sprinter later?",
            answer:
              "Theoretically yes, but it's not practical. Aftermarket 4x4 conversions exist (via Quigley or similar) but the cost ($20,000+) and complexity exceed buying a factory 4x4 model. If you want 4x4, buy it from the start.",
          },
        ],
      },
    ],
  },

  "winnebago-boldt-review": {
    slug: "winnebago-boldt-review",
    intro:
      "The Winnebago Boldt is discontinued. Winnebago built it from 2020 to 2023 on the Mercedes Sprinter, and it earned a loyal following: consistent factory build quality, real warranty support, and an available all-wheel-drive chassis. This review is kept and updated as a used-buying guide. It is not perfect, and used examples are not cheap. Here's everything you need to know.",
    relatedSlugs: [
      "class-b-van-buying-guide",
      "4x4-van-is-it-worth-it",
      "sprinter-vs-transit-vs-promaster",
    ],
    blocks: [
      {
        type: "callout",
        text: "Discontinued: Winnebago no longer produces the Boldt, and it does not appear in [Winnebago's current Class B lineup](https://www.winnebago.com). Everything below describes the 2020-2023 models as built. Shopping new instead? Start with the models in our [current model comparison](/compare).",
      },
      {
        type: "h2",
        heading: "What did the Boldt get right?",
      },
      {
        type: "ul",
        items: [
          "Factory consistency: Unlike custom builds, every Boldt of the same model year is built to the same spec — no builder variability",
          "Warranty: 1-year Winnebago warranty plus underlying Mercedes chassis warranty — real coverage, real dealer network",
          "Storage: Boldt's designers maximized every cubic inch — the overhead and under-bed storage is genuinely impressive for a 144\" wheelbase",
          "Power system: 200W solar + 100Ah lithium standard. Adequate for most users without upgrades",
          "All-wheel drive: Available on the Sprinter chassis and genuinely capable — not a marketing add-on (early model years offered the factory 4x4 system)",
          "Resale: Boldt holds its value extremely well, especially AWD and 4x4 configurations",
        ],
      },
      {
        type: "h2",
        heading: "Where does it fall short?",
      },
      {
        type: "ul",
        items: [
          "Limited customization: You get what Winnebago offers. No custom bed configurations, no alternative floor plans for a given model year",
          "Water capacity: The standard fresh water tank (26 gallons) runs out fast for two people boondocking — most owners add tank capacity",
          "Solar: 200W is starter-tier for off-grid camping. A real off-grid setup needs 400–600W; plan to upgrade",
          "Availability: Production ended in 2023, so you are shopping used inventory and the occasional dealer leftover only",
          "Price for size: At $165K+ when new for a 144\" Sprinter, you paid a quality premium — a comparable custom build might offer more for less",
        ],
      },
      {
        type: "h2",
        heading: "How does the drivetrain perform in the field?",
        text: "The Boldt rides on the Mercedes Sprinter drivetrain: a factory 4x4 system with low range in the early model years, replaced by the Mercedes on-demand AWD in the final years. In real-world use both perform well: stable on rough terrain, good ground clearance stock, and none of the compromises of an aftermarket conversion. The driven Boldt is genuinely capable, not a watered-down version of van 4x4.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Is the Winnebago Boldt still in production?",
            answer:
              "No. Winnebago discontinued the Boldt after the 2023 model year; it does not appear in their current Class B lineup. Used examples remain widely available, which is why this review is maintained as a used-buying guide.",
          },
          {
            question: "Is the Winnebago Boldt good for full-time van life?",
            answer:
              "Yes — the Boldt is one of the best factory options for full-timers. The storage efficiency, warranty support, and build consistency make it significantly less stressful than a custom build for people who don't want to be their own mechanic and project manager.",
          },
          {
            question: "How does the Boldt compare to a custom Sprinter build?",
            answer:
              "A custom build at a similar price point can offer more personalization (exact bed dimensions, larger solar, specific materials) but comes with builder variability risk and no manufacturer warranty. The Boldt trades flexibility for consistency and support — the right trade-off for most buyers.",
          },
          {
            question: "What is the fuel economy of the Winnebago Boldt?",
            answer:
              "Owner reports put the 2WD Boldt at approximately 20–23 MPG on the highway when it was new. The 4x4 model is slightly lower at 18–21 MPG. Both figures are strong for a self-contained campervan of this size.",
          },
        ],
      },
    ],
  },

  "storyteller-overland-mode-suspension": {
    slug: "storyteller-overland-mode-suspension",
    intro:
      "Storyteller Overland's MODE suspension is one of the most-discussed features in the Class B market, and one of the most confused, because the MODE changed platforms. This article covers the original system: a proprietary lift and suspension package on Storyteller's earlier Transit-based vans. The [current MODE](/models/storyteller-overland-mode) is a different vehicle, built on the Sprinter AWD. Both generations are explained below.",
    relatedSlugs: [
      "4x4-van-is-it-worth-it",
      "sprinter-vs-transit-vs-promaster",
      "class-b-van-buying-guide",
    ],
    blocks: [
      {
        type: "h2",
        heading: "What Is the MODE Suspension?",
        text: "MODE (Modular Off-road Drivetrain Enhancements) is Storyteller's proprietary suspension package applied to the Ford Transit AWD platform. It includes a leveling lift of approximately 1.5\" over stock, upgraded shock absorbers, and in some configurations, a front skid plate and all-terrain tires. The result is a Transit that sits noticeably higher than stock and handles rough terrain with more confidence. That describes the Transit generation. [The current MODE](https://storytelleroverland.com/pages/2026-classic-mode-og) rides on the Sprinter 2500 AWD at stock ride height, with 10.5 inches of ground clearance and the advanced suspension reserved for higher trims.",
      },
      {
        type: "h2",
        heading: "What does it actually change?",
      },
      {
        type: "ul",
        items: [
          "Ground clearance: Up approximately 1.5\" over stock Transit (roughly 8.5\" vs. 7\" stock)",
          "Approach/departure angles: Marginally improved — the skid plate protects the front differential",
          "Ride quality: The upgraded shocks meaningfully improve comfort on washboard and rough dirt roads",
          "Wheel travel: Slightly improved articulation for uneven terrain",
          "Nothing about the drivetrain: The Transit AWD system doesn't change — still no low range",
        ],
      },
      {
        type: "callout",
        text: "On the Transit generation, the MODE suspension makes the Transit a better adventure van. It does not make it a 4x4. For Forest Service road access, beach driving, or technical two-track, a Sprinter 4x4 still has a meaningful capability advantage.",
      },
      {
        type: "h2",
        heading: "How does it perform in the real world?",
        text: "Storyteller owners consistently report that the MODE suspension makes a genuine difference on rough-but-passable terrain: washboard dirt roads, packed gravel with loose sections, rocky two-tracks rated for high-clearance vehicles. The all-terrain tires add traction in loose conditions. For this use case — adventurous but not technical — the MODE system delivers.",
      },
      {
        type: "h2",
        heading: "MODE or Sprinter 4x4: which is the honest pick?",
        text: "For overlanders who need to access 4WD-required routes, the Sprinter 4x4 is the answer. For adventurers who camp on dirt roads and occasional rough terrain but don't do technical off-road, the Storyteller MODE is capable enough and comes with a lower overall purchase price. The right answer depends on where you actually drive.",
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "Can the Storyteller Overland go off-road?",
            answer:
              "Yes, within limits. The MODE suspension and AWD system handle rough dirt roads, light trail access, and high-clearance terrain well. Technical off-road requiring a low-range transfer case is beyond its capability.",
          },
          {
            question: "How does the MODE suspension affect ride quality on the highway?",
            answer:
              "Most owners report improved highway ride quality over stock Transit. The upgraded shocks reduce the jittery feel that stock Transit vans sometimes have at highway speed, particularly when loaded.",
          },
          {
            question: "Is the current Storyteller MODE still built on the Ford Transit?",
            answer:
              "No. Earlier MODE vans were Transit-based, which is the generation this article's suspension details describe. The current MODE is built on the Mercedes Sprinter 2500 with all-wheel drive. See [the 2026 MODE page at Storyteller Overland](https://storytelleroverland.com/pages/2026-classic-mode-og) for the current specification.",
          },
          {
            question: "Is the Storyteller MODE system serviceable anywhere?",
            answer:
              "The underlying Ford Transit components are serviceable at any Ford dealer. The MODE-specific suspension components are Storyteller-proprietary — service requires going through a Storyteller dealer or authorized shop.",
          },
        ],
      },
    ],
  },

  "off-grid-power-systems-class-b": {
    slug: "off-grid-power-systems-class-b",
    intro:
      "The power system is the most technically complex part of a Class B van build — and the component most likely to be undersized by default. Here's everything you need to know to spec the right system for how you actually camp.",
    relatedSlugs: [
      "class-b-van-buying-guide",
      "winnebago-boldt-review",
      "4x4-van-is-it-worth-it",
    ],
    blocks: [
      {
        type: "h2",
        heading: "Lithium or AGM: which should you choose?",
        text: "For most Class B buyers today, lithium (LiFePO4) is the right choice. The price premium has narrowed significantly, and the advantages — deeper usable capacity, longer cycle life, lighter weight, and faster charging — make lithium the better long-term investment for anyone camping more than a few nights at a time.",
      },
      {
        type: "ul",
        heading: "Lithium (LiFePO4)",
        items: [
          "Usable capacity: 80–100% of rated capacity vs. 50% for AGM",
          "Cycle life: 2,000–5,000+ cycles vs. 300–500 for AGM",
          "Weight: Approximately 50–60% lighter per amp-hour than AGM",
          "Charge speed: Accepts higher charge rates — faster solar and alternator charging",
          "Cost: 2–3x the upfront cost of equivalent AGM capacity (but better over a 5-year period)",
          "Sensitivity: Requires a battery management system (BMS) — most quality lithium batteries include one",
        ],
      },
      {
        type: "ul",
        heading: "AGM (Absorbent Glass Mat)",
        items: [
          "Lower upfront cost per amp-hour",
          "Well-understood technology — any RV shop can service",
          "No BMS required — simpler integration",
          "Heavier — significant weight penalty in a van application",
          "Only 50% usable capacity — a 200Ah AGM bank gives you ~100Ah usable",
          "Best for buyers on tight budgets or using the van infrequently",
        ],
      },
      {
        type: "h2",
        heading: "How much battery do you actually need?",
        text: "Sizing your battery bank requires knowing your daily consumption. Run an energy audit: add up watt-hours for your refrigerator (biggest draw), lighting, phone/laptop charging, water pump, fan/ventilation, and any heating system. A couple living in a van full-time typically needs 200–300Ah of lithium capacity as a baseline.",
      },
      {
        type: "h2",
        heading: "How much solar is enough?",
        text: "The standard 200W panel included with many factory builds is a reasonable starting point for weekend use in sunny regions. For full-time boondocking, most experienced van lifers recommend 400–600W of roof-mounted panels. At higher latitudes or in overcast climates, err toward the higher end of that range.",
      },
      {
        type: "h2",
        heading: "What are your charging options?",
      },
      {
        type: "ul",
        items: [
          "Solar: Primary source for most boondocking setups — silent, free fuel, reliable",
          "DC-DC charger (alternator charging): Charges batteries while driving. Essential for multi-day driving stretches without solar. Makers like [Victron Energy](https://www.victronenergy.com) publish the sizing guides most builders follow",
          "Shore power (AC charging): For campgrounds with hookups — fast and convenient but removes the point of off-grid capability",
          "Generator: Backup option for extended cloudy periods — adds weight, noise, and fuel logistics",
        ],
      },
      {
        type: "faq-group",
        faqs: [
          {
            question: "What size inverter do I need in a van?",
            answer:
              "For most van applications — charging laptops, running a blender, operating a small coffee maker — a 1,000–2,000W pure sine wave inverter is sufficient. If you want to run a microwave or other high-draw appliances, size up to 2,000–3,000W. Pure sine wave is required for sensitive electronics; modified sine wave works for basic resistive loads only.",
          },
          {
            question: "Can I run air conditioning off solar in a Class B?",
            answer:
              "Roof-mounted A/C is extremely power-hungry (typically 1,200–1,500W running load) and not practical for sustained off-grid use with solar alone. The math doesn't work without a large generator or shore power. Diesel-powered auxiliary heaters/coolers (Webasto, Eberspächer) are a better off-grid comfort solution.",
          },
          {
            question: "How long does a lithium van battery last?",
            answer:
              "Quality LiFePO4 batteries ([Battle Born](https://battlebornbatteries.com), Renogy, Victron) typically last 10+ years with 2,000–5,000 full cycles. At one full cycle per day, that's 5–13 years of life — significantly better than the 1–3 years you'd get from a comparable AGM bank under the same use pattern.",
          },
        ],
      },
    ],
  },
  "remote-vans-review": {
    slug: "remote-vans-review",
    intro:
      "Remote Vans is a Cincinnati builder with a focused pitch: take the Mercedes Sprinter all-wheel drive, fit one of the largest battery systems ever put in a Class B, add real off-road hardware and a Starlink dish, and sell it to people who work from the road. The founders' backgrounds, a British Army logistics officer who built overland vehicles in Africa and a tech founder who worked his way around the world without flying, say the pitch is personal. So we checked the substance: the build, the power system, the off-road kit, the prices, and the warranty agreement. The substance is real. So are two catches.",
    relatedSlugs: [
      "off-grid-power-systems-class-b",
      "4x4-van-is-it-worth-it",
      "class-b-van-buying-guide",
    ],
    blocks: [
        {
          type: "callout",
          text: "The short version: if you earn your living from a laptop and want to do it from a forest road, Remote Vans is the most work-ready factory Class B on the market right now. Three of its four models carry a 16.8 kWh battery and a fitted Starlink dish as standard. The trade-offs are equally clear: there is no fixed bathroom in any model, and the conversion warranty is one year. Both are covered in full below.",
        },
        {
          type: "h2",
          heading: "What is Remote Vans?",
          text: "Remote Vans is a Class B motorhome builder headquartered in Cincinnati, Ohio, founded in 2021. Every model is built on the same platform, the Mercedes-Benz Sprinter 144-inch wheelbase in all-wheel drive, and the company is explicit that it does not build on the longer 170-inch Sprinter or the Ford Transit. The vans are RVIA-accredited and sold through a dealer network that includes Johnson RV, Campers Inn, Vogt RV, Happy Daze, Van City RV, and, for North Idaho buyers, Yozzy Overland in Post Falls.",
        },
        {
          type: "p",
          text: "The brand runs on a line that tells you exactly who it is for: work, play, travel, anywhere. Pricing is published on [the manufacturer's own site](https://remotevans.com/2026-remote-vans-series/) under what it calls see-through pricing, a direct price per model with no negotiating. Owners are organized into a community the company calls the Rolling Nomads. Full background is on [Remote Vans' founders and team page](https://remotevans.com/remote-vans-founders-and-team/).",
        },
        {
          type: "h2",
          heading: "Who founded Remote Vans?",
          text: "The two founders bring unusually relevant pasts. Daryn Hillhouse, the co-founder and CEO, served in the British Army in operations and logistics, with tours in Bosnia, Kosovo and Afghanistan, then managed defence contracts and bids worth more than a billion dollars. After the Army he founded the Put Foot Rally, described by the company as the largest road rally in Africa, and his adventure-travel outfit there built vehicles the company now calls early prototypes of Remote Vans.",
        },
        {
          type: "p",
          text: "Tony Alexander, the other co-founder, is the remote-work half of the idea. He founded or co-founded several technology companies, including one of the world's leading online travel registries, ran a major US startup accelerator as its executive director, and once circumnavigated the globe without flying while running his businesses from the road. The founding story the company tells is disarmingly small: during COVID lockdown, Alexander pitched Hillhouse the idea of a technology-packed Sprinter he could work from anywhere, over a bowl of pasta in Cincinnati.",
        },
        {
          type: "p",
          text: "The first vans, roughly twenty of them, were built by a team of less than a handful in a disused brewery, learning as they went. In 2023 the company moved into its current facility, gained RVIA certification, and opened dealer distribution. The Friday, Oasis and Aegis series debuted in early 2024, with the T-45 added later as the entry model. Andrew Cooley, fourth-generation RV family and a former dealership owner, serves as president.",
        },
        {
          type: "h2",
          heading: "How are Remote Vans built?",
          text: "All design and build happens in-house at a 30,000 square foot facility in Cincinnati's St. Bernard neighborhood: carpentry, metalwork, upholstery, engineering and assembly under one roof. The company says every van moves through several build, testing and quality control phases on its production line. The positioning is craft rather than automation, cabinetry, disciplined wiring, and fit and finish learned by hand, and it is worth noting the company makes no robotics claims anywhere in its material.",
        },
        {
          type: "p",
          text: "Four proprietary systems appear across the range. MoPoWa houses the power and water systems in an aluminum enclosure with service panels in the garage. The Vanhalla seat swings 90 degrees and converts to a second bed. The Cyber Shower is a stowable shower system, covered below, and Pennyworth is the van's control system, run from touchscreens up to 11 inches. Named components include lightweight aluminum cabinetry, PEX-A plumbing with brass fittings throughout, an insulation stack of Kilmat sound deadening, Solarcore foam and Havelock wool, Lithionics batteries, Nomadic Cooling air conditioning, Rixen hydronic heat and Van Compass suspension parts.",
        },
        {
          type: "p",
          text: "The vans are fixed-spec rather than custom commissions, with personalization limited to branding kits: exterior and interior accent colors, cabinet inlays and drawer colors. That is how the company can describe its vans as ready in under 30 days, a sharp contrast with the 6 to 18 months its own [FAQ](https://remotevans.com/faq/) quotes for custom conversions generally.",
        },
        {
          type: "h2",
          heading: "How much battery does a Remote Vans camper have?",
          text: "This is the headline, and it earns it. The MoPoWa system is built around a 51-volt Lithionics NEVERDIE battery. The Friday, Oasis and Aegis carry 16.8 kWh of it, which the manufacturer describes as 100 percent usable with a built-in reserve. The entry T-45 carries half that, 8.4 kWh. To put the big bank in Class B terms: most factory vans in this market run battery banks a fraction of that size, sized for a night of lights and furnace. Sixteen point eight kilowatt-hours is sized for air conditioning, for days. Our [guide to off-grid power systems](/blog/off-grid-power-systems-class-b) explains how to compare bank sizes across brands, and note that Remote Vans publishes capacity in kilowatt-hours only; it does not publish an amp-hour figure, so we do not invent one.",
        },
        {
          type: "image",
          src: "/images/remote-vans-lineup.png",
          alt: "Chart of the 2026 Remote Vans lineup showing manufacturer direct prices from $174,900 to $247,900 and battery capacity of 8.4 kWh on the T-45 and 16.8 kWh on the Friday, Oasis and Aegis",
          caption: "The 2026 Remote Vans lineup. Prices are the manufacturer's published direct prices (October 2026). The Friday's window-sticker MSRP is higher, explained in the pricing section below.",
        },
        {
          type: "p",
          text: "The rest of the system is specified like it was designed by people who have actually run out of power. A 3,000-watt inverter and charger with a 5,500-watt boost mode is claimed to run the air conditioner, microwave and cooktop simultaneously. Charging comes from three sources: a 30-amp shore inlet, roof solar, and the component that matters most in practice, a dedicated 48-volt, 100-amp generator alternator that rapidly refills the bank while you drive. Be clear-eyed about the solar: a single 200-watt panel is a maintainer, not a refiller, for a bank this size. The alternator does the heavy lifting, and the company claims multiple nights, three or more, of off-grid air conditioning on a single charge. Full system specs are on [Remote Vans' comparison page](https://remotevans.com/compare-adventure-vans/).",
        },
        {
          type: "h2",
          heading: "How capable is a Remote Vans camper off-road?",
          text: "Every model starts from the right foundation: the Sprinter's all-wheel drive, BFGoodrich KO2 or KO3 all-terrain tires, and uprated rear suspension. From there the hardware climbs a clear ladder by model. The Friday gets Van Compass heavy-duty Opti-Leaf rear springs. The Oasis and Aegis add Van Compass 4.3 adjustable piggyback shocks front and rear, Baja support brackets and upgraded bump stops, plus an ARB twin onboard air compressor, a front bumper and an armor kit. The Aegis alone adds Van Compass Inverted Rally Struts and skid plates under the engine, transmission and rear differential.",
        },
        {
          type: "p",
          text: "Two honesty notes, because this site publishes what manufacturers publish and flags what they do not. Remote Vans does not publish a suspension lift height in inches for any model, and publishes no approach or departure angles, so we do not quote any. The clearance figure it does publish, on the manufacturer's own Oasis window sticker, is 9.5 inches at the rear differential. That is a real, documented number, and it puts these vans in the same working conversation as the established off-road benchmarks in our [compare tool](/compare), the [Winnebago Revel](/models/winnebago-revel) and the [Storyteller MODE](/models/storyteller-overland-mode), both of which take a different route to a similar destination. Whether any van needs this much hardware is a question we take apart in [Is 4x4 worth it?](/blog/4x4-van-is-it-worth-it)",
        },
        {
          type: "h2",
          heading: "What does the Remote Vans lineup cost?",
          text: "Four models, all Sprinter 144 all-wheel drive, all with the same queen bed, the same 30 gallons of fresh water and 24 gallons of heated gray capacity, and the same bathroom arrangement. The 2026 manufacturer direct prices are: T-45 at $174,900, Friday at $194,900, Oasis at $224,900, and Aegis at $247,900. What the steps buy you is mostly battery, air conditioning size, Starlink hardware and off-road kit, detailed in our [comparison of all four](https://remotevans.com/compare-adventure-vans/) and in the Friday and Aegis entries in our [compare tool](/compare). The Friday, the middle step and the model most buyers cross-shop against the Sprinter establishment, gets its own full breakdown in our [Friday Series model guide](/models/remote-vans-friday), and the flagship gets the same treatment in our [Aegis Series model guide](/models/remote-vans-aegis).",
        },
        {
          type: "p",
          text: "One pricing wrinkle deserves plain language, because Remote Vans publishes two numbers for the Friday. Its window sticker prints an MSRP of $272,900 alongside see-through launch pricing of $194,900. The direct price is the headline figure on the manufacturer's site and the one we publish; dealers can and do sell below it, with one dealer advertising a 2026 Friday at $175,610 after a factory rebate and dealer discount. Treat the direct price as the ceiling, not the floor. No 2027 models have been published yet.",
        },
        {
          type: "h2",
          heading: "Can you actually work remotely from a Remote Vans camper?",
          text: "This is the use case the company was founded on, and it shows in the spec sheet rather than the brochure copy. Starlink fitment climbs with the range: the T-45 is compatible but not fitted, the Friday carries a Starlink Mini with a dashboard mount, the Oasis a Standard dish, and the Aegis the High-Performance dish. In every case the account is yours; the company fits the hardware and dealers walk buyers through activation at handover.",
        },
        {
          type: "p",
          text: "The [Aegis](/models/remote-vans-aegis) goes furthest. Its manufacturer's home office section describes multiple workstation setups: both cab seats swivel, L-track on the walls and overhead shelf mounts a second screen, and one side of the bed lowers to create a standing desk. Across the range there is a Lagun-mounted bamboo table, a drop-down bamboo table, five 110-volt outlets, three 12-volt ports and up to six USB-C sockets within reach. Add the power math, a 16.8 kWh bank, an inverter that runs the air conditioner and your gear together, and an alternator that refills the bank on the drive to the next spot, and the full remote workday the company promises is genuinely supported by the hardware. Run your own priorities through [the match quiz](/find-my-van) and the Friday and Aegis are in the pool.",
        },
        {
          type: "h2",
          heading: "What warranty does Remote Vans offer?",
          text: "Read the agreement, not the slogan. The company's material repeatedly describes its warranty as one of the most generous available. The actual published agreement, effective June 1, 2025 and reproduced on [Remote Vans' warranty page](https://remotevans.com/warranty-agreement/), is a materials and workmanship warranty of one year or 20,000 miles, whichever comes first, for the original owner only, with repairs performed by Remote Vans or an authorized provider.",
        },
        {
          type: "p",
          text: "The exclusion that matters most: components and equipment not installed or supplied by Remote Vans are not covered by that warranty, and the agreement names electrical systems and appliances, heaters, refrigerators, plumbing fixtures, fans, air conditioners, light fixtures and windows. Those carry their own component manufacturers' warranties instead, including a genuinely strong 5-year, 2,000-cycle warranty on the Lithionics batteries. The Mercedes chassis carries its own coverage, published by Remote Vans as a 3-year, 36,000-mile vehicle warranty and a 5-year, 100,000-mile powertrain warranty. None of this makes the vans a bad buy. It makes the warranty average for the industry rather than generous, and a buyer should walk in knowing the difference.",
        },
        {
          type: "h2",
          heading: "What are the catches with Remote Vans?",
          text: "The bathroom is the big one, and it is a design choice, not an oversight. No Remote Vans model has a fixed wet bath or a black-water tank. Instead you get the Cyber Shower, a stowable indoor shower that sets up in under 30 seconds with a tray, curtain and quick-connect head, and a portable Thetford cassette toilet that stores in the shower box. On the Friday, Oasis and Aegis the shower can recirculate, which the manufacturer says stretches to 10-plus minute showers on under 3.5 gallons; that function is not available on the T-45. Plenty of owners prefer this arrangement for the space it frees up. Plenty of buyers will not consider a $200,000 van without an enclosed bathroom. Know which one you are before you fall for the battery.",
        },
        {
          type: "ul",
          items: [
            "Sleeps 4 comes with an asterisk: the queen bed sleeps two adults, and the second bed, the Vanhalla swing seat, is sized for two smaller children, or one adult on the Aegis combined with a swivel seat.",
            "The 200-watt solar panel cannot meaningfully refill a 16.8 kWh bank. Budget your power around driving and shore power, with solar as a top-up.",
            "It is a young company, founded in 2021, with a dealer network in the dozens rather than the hundreds. Service access on the road will not match Winnebago's, and the warranty is one year. That is the honest price of the spec sheet.",
          ],
        },
        {
          type: "faq-group",
          faqs: [
            {
              question: "Who founded Remote Vans?",
              answer: "Daryn Hillhouse and Tony Alexander, in Cincinnati in 2021. Hillhouse is a British Army operations and logistics veteran who later founded Africa's Put Foot Rally and built prototype overland vehicles. Alexander is a serial technology founder who ran a major US startup accelerator and once circumnavigated the globe without flying while working remotely. Their backgrounds are detailed on [Remote Vans' founders page](https://remotevans.com/remote-vans-founders-and-team/).",
            },
            {
              question: "Where are Remote Vans built?",
              answer: "Entirely in-house at the company's 30,000 square foot facility in Cincinnati, Ohio, including carpentry, metalwork, upholstery, engineering and assembly. The first vans were built in a disused Cincinnati brewery; the company moved to its current facility and gained RVIA certification in 2023.",
            },
            {
              question: "How much does a Remote Vans camper cost?",
              answer: "For 2026, the manufacturer's published direct prices are $174,900 for the T-45, $194,900 for the Friday, $224,900 for the Oasis and $247,900 for the Aegis. The Friday's window sticker also prints a $272,900 MSRP; the direct price is the manufacturer's headline figure, and dealers sometimes sell below it.",
            },
            {
              question: "Does a Remote Vans camper have a bathroom?",
              answer: "Not a fixed one. Every model uses the Cyber Shower, a stowable indoor shower system (recirculating on the Friday, Oasis and Aegis, but not the T-45), plus a portable Thetford cassette toilet stored in the shower box. There is no enclosed wet bath and no black-water tank in any model.",
            },
            {
              question: "How long is the Remote Vans warranty?",
              answer: "The conversion warranty in the published agreement is 1 year or 20,000 miles for the original owner, covering materials and workmanship. Components Remote Vans did not supply, including the electrical system, appliances and air conditioner, carry their own manufacturers' warranties; the Lithionics batteries are covered for 5 years or 2,000 cycles. The full agreement is on [the manufacturer's warranty page](https://remotevans.com/warranty-agreement/).",
            },
            {
              question: "Where can I see a Remote Vans camper in North Idaho?",
              answer: "Yozzy Overland in Post Falls is a Remote Vans dealer named on the manufacturer's site, about as close to home as this site gets. The full dealer list is on [Remote Vans' site](https://remotevans.com/faq/), and factory pickup at the Cincinnati headquarters is also offered.",
            },
          ],
        },
        {
          type: "p",
          text: "Remote Vans will not be the right answer for everyone, and this site exists to sort that out honestly rather than sell you a van. If the bathroom arrangement is a dealbreaker, the quiz will steer you to enclosed-bath vans automatically, because we treat it as a hard requirement when you say it is. If you work from the road and your current van's battery is the thing that ends your workday, start with [the match quiz](/find-my-van), then put the Friday and Aegis side by side with the rest of the market in [the compare tool](/compare).",
        },
    ],
  },
  "sportsmobile-review": {
    slug: "sportsmobile-review",
    intro:
      "The white Sprinter in this site's hero photo is a Sportsmobile, the author's own 2013 Sprinter 170 EXT, and it is the reason this review can say things the others cannot. Sportsmobile has converted vans one client at a time since 1961, longer than the Class B category has had a name. It sells no production model off any lot, publishes its conversion pricing anyway, and sits squarely between the factory vans and the six-figure custom shops. Here is the company, the process, the real numbers, the warranty, and a durability report from thirteen years of ownership.",
    relatedSlugs: [
      "class-b-van-buying-guide",
      "remote-vans-review",
      "storyteller-overland-mode-suspension",
    ],
    blocks: [
        {
          type: "callout",
          text: "From the author's driveway: the white Sprinter in this site's homepage hero photo is my own Sportsmobile, a 2013 Sprinter 170 EXT. Thirteen model years on, the materials have held up incredibly well and the van has given me zero issues. That is one owner's experience, stated as such. Everything else in this review is checked against Sportsmobile's own published material, the way every review on this site works.",
        },
        {
          type: "image",
          src: "/images/sportsmobile-interior-cab.jpg",
          alt: "Inside the author's 2013 Sportsmobile looking toward the cab: wood cabinetry, a wall-mounted TV, microwave and refrigerator, and the galley counter",
          caption: "The author's 2013 Sportsmobile today, looking toward the cab. The cabinetry, upholstery and systems are the ones Sportsmobile fitted thirteen years ago. Photo: the author, within the last year.",
        },
        {
          type: "h2",
          heading: "What is Sportsmobile?",
          text: "Sportsmobile is the oldest name in American van conversion: a factory-direct converter that has been turning full-size vans into Class B campers since 1961, and still builds every one of them per client. There is no Sportsmobile dealer network and no model-year lineup in the factory sense. You pick a chassis, pick or design a floor plan, choose your roof and options, and they build your van at one of three locations: Huntington, Indiana; Austin, Texas; and Gold Canyon, Arizona. The company states it has completed more than 10,000 conversions.",
        },
        {
          type: "p",
          text: "That model puts Sportsmobile in a gap in the market this site thinks about a lot. Factory vans from Winnebago or Thor are production products: fixed plans, dealer lots, a sticker price. High-end custom shops build rolling commissions at prices that can pass half a million dollars, on timelines measured in years. Sportsmobile sits between them, a tweener: custom enough that the plan is yours, established enough that the converter has outlived most of its customers' vans. Whether that middle position is the sweet spot or a compromise depends on how you buy, which is what the rest of this review is for. The company's own overview is at [sportsmobile.com](https://sportsmobile.com/).",
        },
        {
          type: "h2",
          heading: "How long has Sportsmobile been building camper vans?",
          text: "Since 1961, when Charles Borskey founded the company in El Paso, Texas, with his father Curtis, originally under the name Sportswagon. The first conversions were Volkswagen and Ford vans. Volkswagen of America soon contracted Borskey to install his kits in VW vans, and when that contract ended in 1967, Westfalia adopted several patented features of the Sportsmobile kit, which is about as strong an endorsement as the industry gives.",
        },
        {
          type: "p",
          text: "The milestones explain the company's DNA. In the 1970s Sportsmobile built the first pop-top that raised and lowered from inside the van, the direct ancestor of today's Penthouse top. It offered 4x4 conversions on Ford Econolines from 1971. The Huntington plant opened in 1976 and very nearly closed in 1980; a foreman named Jim Friermood, later a company vice president, persuaded Borskey to keep it open. Austin followed in 1984. Charles Borskey ran the company into his 89th year and died at 90. One correction to older sources you may find: the Fresno plant you will see in older articles was Sportsmobile West, a licensee, and it ended its agreement in 2020 to become the independent company Field Van. The full timeline is on [Wikipedia's Sportsmobile entry](https://en.wikipedia.org/wiki/Sportsmobile).",
        },
        {
          type: "h2",
          heading: "What does Sportsmobile build today?",
          text: "Four chassis families, designated by body code: RB for regular body, EB for extended body, LB for long body. The [Sprinter line](https://sportsmobile.com/models/mercedes-sprinter/) covers the 144-inch RB and the 170-inch EB and LB, built on the factory all-wheel drive and diesel. Ford Transit comes in three lengths with factory AWD and a new Trail Ready off-road package. Ram ProMaster covers the front-wheel-drive value end, and the Chevy Express serves buyers who want a frame chassis and a 4x4 build. The author's van, a 2013 Sprinter 170 EXT, is an EB 170, a platform Sportsmobile still converts today.",
        },
        {
          type: "p",
          text: "Inside, you start from a library of numbered standard plans, codes like EB-110S that combine body and layout, or go fully custom with a DYO, design-your-own, plan drawn up with their designers. Every conversion builds on a standard equipment package that includes an extreme weather and sound insulation package, and the options catalog runs to hundreds of items. Electrical is modern where it counts: a 200 amp-hour AGM bank is standard, and the company offers lithium systems up to 1,600 amp-hours, 24 and 48 volt systems, and roof solar up to about 500 watts.",
        },
        {
          type: "image",
          src: "/images/sportsmobile-interior-door.jpg",
          alt: "The author's 2013 Sportsmobile from the sliding door: galley and sink on the left, a bench seat on the right, and the rear bed at the back of the 170 EXT",
          caption: "The EB 170 layout in the author's van: galley at the door, lounge bench opposite, bed across the rear. Photo: the author.",
        },
        {
          type: "p",
          text: "The signature product deserves its own paragraph. The [Penthouse Pop Top](https://sportsmobile.com/sportsmobile-penthouse-pop-top-a-legacy-of-freedom-space-and-innovation/) is a paint-matched fiberglass top with convertible car-top vinyl sides and a dual U-tube lift, manual or powered, with an optional bed platform upstairs and a roof rack rated to 200 pounds. You do not have to buy a conversion to get one: Sportsmobile installs the top on its own, by appointment, on your existing van. That top-only business is a large part of how the company stays in its owners' lives for decades.",
        },
        {
          type: "h2",
          heading: "What happened to the Sportsmobile Classic 4x4?",
          text: "It is the question longtime followers ask first, so here is the honest answer. When Ford ended the full E-Series van after 2014, Sportsmobile refused to kill its flagship 4x4 camper. Instead it engineered its own steel-reinforced fiberglass camper shell for the E-Series cutaway chassis, with its own serious 4x4 system underneath, and launched it as the Classic at Overland Expo in 2015. [MotorTrend's review](https://www.motortrend.com/reviews/1507-2015-sportsmobile-ford-e-series-classic) of that van is worth reading if you want to understand what this company is capable of when it decides to engineer rather than assemble.",
        },
        {
          type: "p",
          text: "Today, the Classic does not appear in the lineup published on Sportsmobile's site, which covers the Sprinter, Transit, ProMaster and Chevy Express, and the old Classic 4x4 page redirects to the homepage. No announcement of its discontinuation was found, and Ford still builds the E-Series cutaway the Classic sits on. So the accurate statement is: the Classic is absent from the currently published lineup, and whether it can still be special-ordered is something Sportsmobile does not publish. Ask them directly, and know that on the modern vans the 4x4 story is the factories' own AWD systems, not a Sportsmobile-engineered conversion.",
        },
        {
          type: "h2",
          heading: "How does buying a Sportsmobile work?",
          text: "Factory-direct and per client. You work with Sportsmobile's own designers to choose the chassis, the plan and the options. Sportsmobile usually supplies the base van itself, ordering through preferred dealers who know how to spec a van for conversion, with freight and preparation included in the price and any rebates going to you. If you are financing the van and conversion together, the vehicle must be purchased through Sportsmobile. Bringing your own van is possible, and the top-only and modification work assumes it. The company offers RV financing at all three locations, delivers nationwide, does not take trades, and sells pre-owned Sportsmobiles on consignment. The details are in [their FAQ](http://sportsmobile.com/faqs/).",
        },
        {
          type: "p",
          text: "Two refinements to the usual description. First, deposits and build lead times are not published anywhere on the company's site; both are quoted per build, so any timeline a forum gives you is anecdote, not policy. Second, while there is no dealer stock anywhere, Sportsmobile's own site lists a small New Stock inventory of already-built vans at its own lots, alongside the consignment pre-owned listings. The core business is unmistakably build-to-order, but a buyer who cannot wait is not entirely out of luck.",
        },
        {
          type: "h2",
          heading: "What does a Sportsmobile cost?",
          text: "Unusually for a custom converter, Sportsmobile publishes real numbers on its [pricing examples page](http://sportsmobile.com/pricing/pricing-examples/), all plus tax, title and license. Conversion prices for a Sprinter start at $50,000 for a base-level 144 RB two-wheel drive. A well-equipped all-wheel drive conversion runs $77,000 on either the 144 or the 170. Stated conversion ranges are $75,000 to $120,000 for Sprinter and ProMaster, and $80,000 to $125,000 for Transit. The Penthouse top with bed, installed on its own, starts at $13,000.",
        },
        {
          type: "p",
          text: "The worked example on that page is the clearest way to understand the tweener math. A Sprinter EB high-roof diesel AWD: the van itself at $78,400, the EB-110S conversion at $78,500, plus $7,500 of Sportsmobile options, totals $164,400 before tax and title. Pictured complete builds on the same page run $145,000 for a ProMaster, $160,000 for a 144 Sprinter, $180,000 for a Transit and $190,000 for a 170 Sprinter. Set those totals against the factory pool in our [compare tool](/compare) and against the half-million-dollar end of the custom world, and the middle position stops being a metaphor. It is a price band.",
        },
        {
          type: "h2",
          heading: "Where does Sportsmobile sit in the market?",
          text: "Call it the professional middle. Against factory vans, Sportsmobile trades immediacy for authorship: no lot to drive one off today, but the floor plan, the roof and the systems are chosen with a designer rather than accepted from a brochure, and the converter answering your service call is the company that built the van. Against the high-end custom shops, it trades bespoke-everything for a 65-year-old playbook: standard plans refined over thousands of builds, published conversion pricing, and totals that land closer to a Revel than to a rolling commission. Our [buying guide](/blog/class-b-van-buying-guide) argues the first decision is how you will actually use the van. If your answer involves a plan nobody stocks, this is the tier built for you.",
        },
        {
          type: "p",
          text: "It is also worth saying who should not buy one. If you need a fixed bathroom, a fixed price on a window sticker, or a delivery date you can circle this quarter, the production market serves you better, and the [match quiz](/find-my-van) will sort you honestly. Sportsmobile is not in that quiz, deliberately: a per-client build has no single price or spec to rank, and pretending otherwise would break the rule this site runs on. The newest factory take on the same work-from-anywhere idea is covered in our [Remote Vans review](/blog/remote-vans-review).",
        },
        {
          type: "h2",
          heading: "How do Sportsmobiles hold up?",
          text: "Start with the author's evidence, since it is the reason this review exists. My 2013 Sprinter 170 EXT has needed nothing beyond ordinary chassis life in thirteen years: no conversion failures, no leaks, no cabinetry coming apart, and the materials, the top, the cabinets, the systems, still feel put together the way they did at delivery. One van is an anecdote, but it is an anecdote you can check against the company's own construction claims: a fiberglass Penthouse warranted for life against leaks, high-grade and deliberately serviceable components, name-brand appliances that any RV service center can work on, and an insulation package the company markets as four-season.",
        },
        {
          type: "image",
          src: "/images/sportsmobile-interior-rear.jpg",
          alt: "The author's 2013 Sportsmobile through the open rear doors: two facing benches in gray upholstery and warm wood cabinetry in bright sunlight",
          caption: "Through the rear doors: the twin benches and woodwork after thirteen years of use. Photo: the author, within the last year.",
        },
        {
          type: "image",
          src: "/images/sportsmobile-interior-galley.jpg",
          alt: "The galley of the author's 2013 Sportsmobile: stone-pattern countertop and sink, microwave and refrigerator stack, and a tall wood wardrobe cabinet",
          caption: "The galley and wardrobe wall. The tall cabinet is the bathroom and storage core of this floor plan. Photo: the author.",
        },
        {
          type: "image",
          src: "/images/sportsmobile-interior-front.jpg",
          alt: "The front lounge of the author's 2013 Sportsmobile: a gray bench seat facing the swiveling cab seats, with a ceiling fan above",
          caption: "The front lounge, with the cab seats swiveled into the living space. Photo: the author.",
        },
        {
          type: "p",
          text: "The wider record supports the impression, with one honest exception. Sportsmobile says many owners are on their second, third or fourth van from the company, which is the retention pattern you would expect if the product lasted. The BBB profile we could locate, for the former Fresno licensee, shows zero complaints and zero reviews. Google ratings for the current locations run high, roughly 4.3 to 5.0 stars, on small counts of about 9 to 17 reviews each, and RV Insider shows 5.0 from 2 reviews. Calibrate that against the production industry on the same platform: [Thor Motor Coach averages 3.4 stars across 1,225 owner reviews](https://gorvrentals.com/blog/are-thor-motorhomes-any-good), scoring 2.9 for overall quality and 2.6 for factory warranty support, and [Winnebago](https://www.rvinsider.com/Winnebago-RV-Reviews?make=Winnebago), the strongest of the volume brands, averages about 4.2 stars across more than 1,200 reviews. Sportsmobile's 5.0 rests on just 2 reviews, so the samples are not comparable and we will not pretend otherwise. But a converter does not build more than 10,000 vans over 65 years without leaving a complaint trail if the product fails people. The near-absence of one is the evidence. Against that record, exactly one detailed critical review is easy to find: [Wand'rly Magazine's account](https://wandrlymagazine.com/a-sportsmobile-review/) of a 2020 Penthouse installation in Texas, disputing extra charges and follow-up service. Both things belong in a review. The formal record is about as clean as this industry produces, and it is not literally spotless.",
        },
        {
          type: "h2",
          heading: "What warranty does Sportsmobile offer?",
          text: "The conversion is warranted for 3 years or 36,000 miles, stated in [the company FAQ](http://sportsmobile.com/faqs/) and on its Why Sportsmobile page. The Penthouse top carries the same term plus something no factory van in our pool offers: a lifetime warranty against leaks. Appliances and the 4x4 are warranted by their own manufacturers, the chassis by the van maker, and the company states its conversions do not void the chassis warranty. One caution for used-van shoppers and forum readers: older Sportsmobile Texas marketing claimed 50 months and 50,000 miles. That figure no longer appears on the manufacturer's site; the current published term is 3 years and 36,000 miles, and that is the number to plan around.",
        },
        {
          type: "faq-group",
          faqs: [
            {
              question: "Who founded Sportsmobile, and when?",
              answer: "Charles Borskey, with his father Curtis, founded the company in El Paso, Texas in 1961, originally under the name Sportswagon. Charles ran it for roughly six decades, into his 89th year. The company has completed more than 10,000 conversions.",
            },
            {
              question: "Can you buy a Sportsmobile off a dealer's lot?",
              answer: "No. Sportsmobile sells factory-direct from its three locations in Huntington, Indiana; Austin, Texas; and Gold Canyon, Arizona, and builds per client. Its own site does list a small New Stock inventory of completed vans at its own lots, plus pre-owned Sportsmobiles sold on consignment.",
            },
            {
              question: "How much does a Sportsmobile conversion cost?",
              answer: "Published examples on [the manufacturer's pricing page](http://sportsmobile.com/pricing/pricing-examples/) start at a $50,000 base conversion for a Sprinter 144, with well-equipped all-wheel drive conversions at $77,000 and stated conversion ranges of $75,000 to $125,000 depending on platform, all plus tax, title and license and excluding the van itself. A worked complete example, a Sprinter EB diesel AWD, totals $164,400. The Penthouse top alone starts at $13,000 installed.",
            },
            {
              question: "Can Sportsmobile still build the Classic 4x4?",
              answer: "It is not in the lineup currently published on sportsmobile.com, and the company publishes no statement either way about special orders. The Classic was Sportsmobile's own fiberglass camper shell on the Ford E-Series cutaway, built from 2015 after Ford ended the E-Series van. Ask Sportsmobile directly; on current vans, all-wheel drive comes from the chassis factories.",
            },
            {
              question: "What warranty does a Sportsmobile carry?",
              answer: "Three years or 36,000 miles on the conversion, per [the company's FAQ](http://sportsmobile.com/faqs/). The Penthouse top adds a lifetime warranty against leaks. Appliances, the 4x4 system and the chassis are covered by their respective manufacturers.",
            },
            {
              question: "Does Sportsmobile supply the van, or do you bring your own?",
              answer: "Either, with a condition. Sportsmobile usually supplies the base van through preferred dealers, and if you finance the van and conversion together, the vehicle must be purchased through Sportsmobile. Customers can also bring their own van, and standalone work like a Penthouse top installation is offered by appointment.",
            },
          ],
        },
        {
          type: "p",
          text: "Sportsmobile is not the fastest way to buy a camper van, and it is not trying to be. It is the way to buy the exact van you designed, from the company that invented half the category, at a total that sits between the factory sticker and the custom stratosphere. If that is your shape of purchase, start with their [pricing examples](http://sportsmobile.com/pricing/pricing-examples/), then pressure-test the factory alternatives in our [compare tool](/compare) before you commit. The author of this site made his choice in 2013, and the van in the hero photo is still making the case.",
        },
    ],
  },
  "should-you-buy-a-covid-era-used-van": {
    slug: "should-you-buy-a-covid-era-used-van",
    intro: "Everyone says do not buy a COVID RV. The data says the disaster was real but concentrated in trailers, while the van record is supplier-part recalls, a late production peak, and a first owner who already paid for the debugging. Here is the evidence, and the protocol that makes the era almost irrelevant.",
    blocks: [
      { "type": "p", "text": "The short answer: yes, a COVID-era used van can be a smart buy, and for Class B vans specifically, the famous warning about COVID build quality is aimed at the wrong vehicles. The documented quality collapse of 2021 and 2022 is real, but it lives in high-volume towable RVs. The van record looks different: a cluster of recalls caused mostly by supplier parts, no defect-rate penalty anyone can actually measure, and a used market where the first owner has already absorbed both the peak-era price and the debugging. What follows is the evidence, with the receipts, and then the buying protocol that makes the era almost irrelevant." },
      { "type": "h2", "heading": "What counts as a COVID-era build?", "text": "There is no official definition, but the sources converge. A COVID-era RV is one built roughly between June 2020 and December 2022, sold as a 2021 through 2023 model. The first COVID spring shut the plants down; what followed was the largest demand surge the industry has ever seen, met by a workforce that had never been thinner. Owner reporting and the labor data pinpoint the highest-risk window as builds from the second half of 2021 through the first half of 2022, when the shortage bit hardest. You can find any van's actual build month on the manufacturer's label, usually on the driver's door jamb or the entry door frame, and the exact date matters more than the model year on the title." },
      { "type": "h2", "heading": "What actually happened during the COVID RV boom?", "text": "Start with the scale. The [RV Industry Association](https://www.rvia.org) counts 406,070 RVs shipped in 2019. In 2021 the industry shipped 600,240, the biggest year in its history, with a workforce that could not be hired fast enough. Elkhart County, Indiana, where most American RVs are built, saw unemployment sink to 1 percent in late 2021 while average weekly wages jumped 35 percent from early 2020. An IndyStar investigation, later cited by [Hunterbrook's reporting](https://hntrbrk.com) on RV frame defects, quoted a Winnebago employee who went from working on 16 RVs a day to 36 during the pandemic. That reporting is where the nickname was born: COVID trailers. Note the word. Trailers." },
      { "type": "image", "src": "/images/covid-era-shipments.png", "alt": "Bar chart of Class B Type B shipments 2019 to 2023 showing the peak in 2022 at 17,026 units", "caption": "Class B shipments by year (RVIA). The overall RV market peaked in 2021; vans peaked a year later, in far smaller numbers." },
      { "type": "p", "text": "The Class B numbers tell their own story. Van campers went from 4,248 shipments in 2019 to a peak of 17,026 in 2022. That is a surge, but compare it with 544,028 towables shipped in 2021 alone. Vans were a small, late wave, and their peak arrived after the worst of the labor shortage had already begun to ease." },
      { "type": "h2", "heading": "Where does the quality spike actually show up in the data?", "text": "In exactly one place, and it is not vans. An analysis of NHTSA complaints found the spike in complaints containing the word frame concentrated in Grand Design fifth wheels from model years 2020 to 2022, and NHTSA opened a formal investigation, PE24029, into frame flex on those towables, built on Lippert-supplied frames. There is no equivalent investigation, and no complaint spike, for any Class B model. Meanwhile, the towable horror stories from owner forums are specific and grim: wrong adhesives substituted during shortages, tank brackets held by a fraction of their screws, sealing tape omitted, leaks and delamination following. Those are failures of high-speed, piece-rate house construction, which is precisely what a trailer is and a van mostly is not." },
      { "type": "callout", "text": "The honesty box: no public dataset reports defect rates or warranty claim rates by model year, for vans or for RVs generally. Consumer Reports does not cover RV reliability at all. So when a video or a forum post tells you a 2021 build is some specific percentage worse than a 2019, that number was invented. What exists is recall records, complaint data, shipment figures and owner reporting, and this article sticks to those." },
      { "type": "h2", "heading": "Why are Class B vans a different case?", "text": "Three structural reasons. First, the vehicle itself: a Class B's chassis, engine, suspension and crash structure are built by Mercedes-Benz, Ford or Ram on automotive lines with automotive quality control. The RV maker's labor touches only the conversion inside it. Second, scale: at their peak, vans were roughly 3 percent of towable volume, built in smaller runs by smaller teams, closer to the way the custom builders on our [market index](/market) have always worked. Third, timing: the van peak came in 2022, not during the desperate hiring winter of 2021. None of this makes a COVID-era van automatically good. It makes the trailer evidence a poor predictor of any individual van." },
      { "type": "h2", "heading": "What did actually go wrong on COVID-era vans?", "text": "The recalls are real, and a buyer should know them by name. But read the causes before you judge the era:" },
      { "type": "ul", "items": ["Cooktops: 9,720 Winnebago vans (Solis, Travato, Ekko, 2020 to 2023) recalled because Suburban's SDS2 burner tubes can fracture and leak gas. A supplier part. Coachmen recalled a grand total of 12 vans for the same cooktop.", "Generators: 6,536 Winnebago vans recalled over the fuel hose on the Cummins Onan generator, attributed by Cummins to an inadequate hose specification. The window runs to April 2023 builds, past most definitions of the COVID era.", "Awnings: 4,521 Winnebago Revels (2021 to 2023) recalled because the awning can extend while driving. Cause: the gearbox housing from supplier Carefree of Colorado.", "Propane fittings: 3,374 Thor vans (2022 Scope, Tellaro, Sequence, Sanctuary, Tranquility, Rize) recalled for cracked LP quick-disconnect fittings. The NHTSA filing blames porosity and contamination in Enerco's brass.", "The genuine workmanship cases are smaller: a Thor LP line routed too short with an excessive bend (2022 Scope and Rize), and a Winnebago wire harness built incorrectly (2022 Travato). Real, specific, and a short list."] },
      { "type": "p", "text": "Every one of those recalls is a free dealer remedy, and completion is checkable by VIN in two minutes at [nhtsa.gov/recalls](https://www.nhtsa.gov/recalls). By 2026, most have been done, and the biggest ones are one-part swaps, not structural surgery. A recall that has been completed is not a mark against a used van. It is maintenance the seller's era paid for." },
      { "type": "h2", "heading": "What about a COVID-era Class C, or a trailer?", "text": "A Class C deserves a separate sentence because its risk profile is genuinely different from a van's: behind an automotive cab sits an entire plant-built house, walls, roof, and often slide-outs, which is where rushed construction does its damage and where water gets in. That is an argument for inspecting a C harder, not for a proven verdict against it, and the market rendered no verdict either: in [J.D. Power's](https://www.jdpower.com/rvs) 2023 year-end figures, Class C values actually rose 1.3 percent while standard hitch trailers fell 4.0 percent and fifth wheels fell 2.5 percent. For trailers, especially high-volume fifth wheels from the peak window, the caution is earned, and at least one NRVIA-certified inspector quoted by RVtravel advises that his recommended used years for Grand Design fifth wheels stop at 2020. Read that quote carefully when you meet it elsewhere: it is a judgment about one brand of fifth wheel, not about vans, and it is routinely recycled as if it covered everything with wheels." },
      { "type": "h2", "heading": "How do you buy a COVID-era van safely?", "text": "The protocol matters more than the model year. In order:" },
      { "type": "ol", "items": ["Run the VIN before you visit. Check recall status at nhtsa.gov. Open recalls are not a dealbreaker, they are free repairs, but an owner who never bothered tells you something about the van's life.", "Confirm the build month, not just the model year. A van built in March 2021 and one built in November 2021 lived through different factories. The label is on the door jamb.", "Hire a certified inspector. An [NRVIA](https://nrvia.org) inspection runs a few hundred dollars and tests what actually kills used RVs: water intrusion and prior water damage, roof and sealant condition, LP system leak testing, electrical, tire age by DOT date code, and the systems underneath. Weight the water and sealant checks heaviest on any 2021 to 2022 build of anything; sealing failures are the most repeated complaint of the era.", "Ask for the service records, and read them as the van's biography. The best COVID-era buy is the van whose first owner worked the punch list under warranty. That debugging is done, documented, and already paid for. A 2021 van with a fat folder beats a 2019 van with none.", "Price it against the corrected market, not the seller's receipt. Pandemic buyers paid peak prices with limited supply, and lender commentary since has documented their negative equity hangover. Their 2021 purchase price is not evidence of your 2026 value. Check current values for the model in our [comparison tool](/compare) and across the [full market index](/market).", "Walk away from the era's real red flags: water staining or soft floors, musty smells, delamination, a seller who cannot produce records, or open safety recalls the seller refuses to have completed before sale. Those are not COVID problems. They are this-van problems, and they exist in every model year."] },
      { "type": "h2", "heading": "So, is it wise to buy a COVID-era used van?", "text": "Yes, with the protocol, and the reasoning is almost unfair in the buyer's favor. The era's documented sins concentrate in towables. The van-specific defects are dominated by supplier parts that carry free, verifiable fixes. The production peak for vans came late and small. The first owner absorbed the steepest depreciation in RV history and, in the good examples, the entire warranty punch list. What is left is the largest pool of used Class B vans ever to exist, priced in a corrected market, every one of them individually inspectable. The vans to avoid are not a model year. They are the vans, from any year, with water damage, no records and an evasive seller. If you are earlier in the journey than this, start with the [Class B buying guide](/blog/class-b-van-buying-guide), take the [match quiz](/find-my-van) to narrow the field, and if you want proof that a well-built van outlasts eras entirely, read how a [2013 Sportsmobile](/blog/sportsmobile-review) is doing after thirteen years." },
      { "type": "faq-group", "faqs": [{"question": "What years are considered COVID-era RVs?", "answer": "Units built roughly from June 2020 through December 2022, sold as 2021 to 2023 models. The highest-risk window, by labor data and owner reporting, is builds from the second half of 2021 through the first half of 2022. Check the build month on the manufacturer's door jamb label rather than trusting the model year."}, {"question": "Are COVID-era Class B vans less reliable than other years?", "answer": "There is no dataset that shows that. No public source reports defect or warranty rates by model year, and the documented Class B recalls of the era are dominated by supplier components (Suburban cooktops, Cummins generators, Carefree awnings, Enerco LP fittings) rather than conversion workmanship. The quantified quality spike of the era, NHTSA frame complaints and investigation PE24029, concerns Grand Design fifth wheel trailers."}, {"question": "How do I check if a used van's recalls have been completed?", "answer": "Enter the VIN at [nhtsa.gov/recalls](https://www.nhtsa.gov/recalls). It lists every open recall for that specific vehicle. Remedies are free at a dealer, and a seller or dealer can print the completion history. The major COVID-era van recalls (cooktop burner tubes, generator fuel hose, awning gearbox, LP fittings) are single-part replacements."}, {"question": "Should I get a used COVID-era van inspected?", "answer": "Yes, and you should inspect any used van this way. An [NRVIA-certified inspection](https://nrvia.org) costs a few hundred dollars and covers water intrusion and prior damage, roof and sealant condition, LP leak testing, electrical systems, and tire age by DOT code. On a 2021 to 2022 build, weight the water intrusion and sealant findings most heavily."}, {"question": "Are COVID-era vans cheaper than other used vans?", "answer": "They are cheaper than they were, because the whole market corrected after 2022 and pandemic buyers had paid peak prices. J.D. Power's 2023 figures show the correction hit trailers hardest (standard hitch down 4.0 percent) while motorhome values moved least. No valuation source applies a specific quality discount to 2021 to 2022 vans, so the discount a buyer captures is ordinary depreciation, which the first owner already absorbed."}, {"question": "Is a COVID-era Class C riskier than a COVID-era Class B?", "answer": "Its risk sits in a different place. A Class C's house, walls, roof and slide-outs, is entirely plant-built, which is where rushed construction causes the most harm, so inspection matters even more. But there is no Class B versus Class C defect dataset, and Class C values rose 1.3 percent in J.D. Power's 2023 figures. Era is a weaker signal than condition and records for both."}] },
    ],
    relatedSlugs: ["class-b-van-buying-guide", "winnebago-boldt-review", "sportsmobile-review"],
  },
};
