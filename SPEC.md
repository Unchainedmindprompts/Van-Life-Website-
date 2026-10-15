# Van Site Automation Spec
### A daily-updating Class B buyer's guide, run on Mark's entity-graph method, operated like Alex Finn's autonomous business

Status: DRAFT v1, Oct 14, 2026. Owner: Mark Abplanalp. Operator: Muse.
Site: van-life-website.vercel.app | Repo: Unchainedmindprompts/Van-Life-Website- | Stack: Next.js 16, React 19, Tailwind 4.

---

## 1. The thesis

Custom van builders and RV dealers have brochure websites with almost no structured data (verified Oct 14, 2026: Winnebago's homepage ships one BreadcrumbList block; Storyteller Overland and Outside Van ship basic Organization tags only; Yozzy Overland, Post Falls, ships zero structured data). Nobody owns the entity layer for Class B vans.

Mark's method (entity graph + answer-first, fact-dense, corroborated articles) has become the cited source in AI answers on three sites in three industries (Luxe Window Works, Real Estate With Shirin, Living Dental Health). Applied here, the site becomes the reference that Google, Bing, ChatGPT, and Copilot resolve Class B questions against. Traffic compounds into an email list; the list and the traffic are the distribution; distribution is what sponsors and manufacturers pay for. Software is copyable. Accumulated canonical status, the list, and sponsor relationships are not.

The operating mechanism, in Mark's formulation (Oct 15, 2026): what the site states is backed up by independent sources, linked externally and wired into the graph via `mentions`, so a reader or an answer engine can verify any claim in one hop. The strategy is to be the cheapest safe answer to cite: canonical statement on the site, primary corroboration behind every claim, identity consistent across every surface. Corroboration is the product. (Research note, Oct 15, 2026: the mechanism is NOT crawl budget, which does not bind at this scale, and NOT schema as a ranking lever, whose controlled-study effect on AI citations is null. The supported levers are server-rendered fetchability, statistics and named sources in the content, and off-site corroboration, the strongest measured correlate of AI visibility.)

Revenue model (in sequence, never before the step before it):
1. Traffic and citations (the asset under construction)
2. Email list via the find-my-van quiz and newsletter
3. Sponsor placements: featured builders, comparison sponsors, dealer spotlights, newsletter sponsor
4. Buyer leads to dealers (a qualified Class B buyer is worth real money)

## 2. Non-negotiables

- **Facts are verified or they do not publish.** See Section 4. This is the rule Mark set on Oct 14, 2026 and it outranks every deadline.
- **Nothing public without Mark's approval.** Content, newsletter sends, sponsor outreach, and payments all wait at the gate (Section 6).
- **Mark's time budget: 30 minutes a week, maximum.** One daily digest, one Monday report. If the system needs more of him than that, the system is wrong.
- **No invented specs, no forum-sourced numbers presented as fact.** If a builder does not publish a spec, the site says so.

## 3. Entity architecture (the graph)

Modeled directly on the Luxe homepage graph: one connected @graph per page, stable @ids, everything cross-referenced.

**Site-level entities (fixed library, built once):**
- Organization + WebSite for the site itself (`/#org`, `/#website`), founder Person node for Mark (`/#owner`)
- Every builder as an Organization entity (`/builders/<slug>#org`) with sameAs links to their official site, Wikipedia where it exists, and their social profiles
- Every van model as a Vehicle/Product entity (`/vans/<slug>#vehicle`) with the verified spec set from the fact ledger (Section 4), manufacturer link, and offers data only where a real price source exists
- Every dealer we list as an AutoDealer/LocalBusiness entity (`/dealers/<slug>#dealer`) with address, geo, hours, sameAs to their site and review profiles

**Page templates (Mark's article method, systematized):**
- Article pages: WebPage + BlogPosting + BreadcrumbList (+ ImageObject when original media exists). BlogPosting author resolves to `/#owner`; `about` points at the model or topic entity; `mentions` lists every builder, model, and chassis entity the article covers; SpeakableSpecification on the H1 and the answer-first summary.
- Comparison pages: the two (or three) model entities as the page's `about`, a spec table generated FROM the fact ledger (never hand-typed), Q&A section answering the real buyer questions for that pairing.
- Model pages: the model entity is the mainEntity; spec table from the ledger with per-section source links (Section 4); builder entity linked; sibling models linked for internal navigation.
- Q&A sections on every content page, marked up as FAQPage. Note: Google retired FAQ rich results (May 2026); the markup stays because answer engines still read clean Q&A, and the Q&A content itself is citation material.
- Headings: single H1, question-form H2s, task/step H3s. Answer first, then the detail. External corroboration links in body copy, 2-4 per article, authoritative sources only.

## 4. The fact layer (built before any content scales)

Every published specification is a record in a ledger stored in the repo (`/data/facts/`), one JSON file per model. A record holds: entity, attribute, value, unit, model year, source URL, source type, date retrieved, and a snapshot reference.

```json
{
  "model": "winnebago-revel",
  "attribute": "fresh_water_capacity",
  "value": 35, "unit": "gal",
  "modelYear": 2026,
  "sourceUrl": "https://www.winnebago.com/...",
  "sourceType": "manufacturer_spec_page",
  "retrievedAt": "2026-10-14",
  "snapshot": "data/snapshots/winnebago-revel/2026-10-14.html",
  "crossCheck": { "sourceUrl": "...", "value": 35, "agrees": true }
}
```

Rules:
- **Source hierarchy:** (1) manufacturer spec page or brochure/spec-sheet PDF, (2) manufacturer press release, (3) dealer listing of that exact model year, (4) reputable secondary coverage. A fact publishes only with a tier 1-2 primary source AND an agreeing cross-check from a second source.
- **Model-year binding:** every fact belongs to a model year. Comparisons use one year across all models or flag the difference on the page.
- **Conflicts resolve to the manufacturer (Mark's ruling, Oct 14, 2026).** Where sources disagree on the same model, the manufacturer's published figure is what the site displays; nobody faults a site for carrying correct manufacturer data. The disagreement is still logged in the ledger with both values and sources, and the resolution is recorded. Within a manufacturer's own pages, the dedicated current model-year product page outranks comparison or marketing pages. Where the manufacturer publishes nothing, dealer data is used and labeled as a dealer figure. Differences caused by options, floor plans, or model year are not conflicts: they are labeled as what they are (base price is always "starting price, before options"; an optioned dealer sticker is labeled a dealer sticker).
- **Snapshots:** every source page is archived (HTML copy + hash) on retrieval. Manufacturers change prices and specs silently; the snapshot is the dated proof of what they published, and a diff between snapshots is how the daily loop detects changes (Section 5).
- **Published claims carry receipts:** spec tables link to the backing manufacturer page and show a "Specs verified <date>" line.
- **Empty is honest:** a spec the builder does not publish renders as "Not published by <builder>", never filled from a forum, a review, or a guess.
- **Experience claims are corroborated separately from spec claims.** Statements about lived experience (reliability in the field, real-world capacity, owner satisfaction, known annoyances) are backed by independent owner sources: forum and Reddit discussion threads where owners report the experience. The article links to the thread externally at the claim, and the thread is added to the article's `mentions` in the schema graph as a DiscussionForumPosting node with its URL, so the claim's provenance is machine-readable in one hop. Rules: experience sources corroborate experience only, never specifications (the source hierarchy above governs specs, and a forum number never becomes a stated fact); the source must be genuinely independent of this site (owners and publications that never took the claim from us; circular corroboration, five echoes of our own page, does not count); the thread is represented at its balance, not quote-mined. Build note: the article generator currently resolves `mentions` from the entity registry; external discussion mentions are a small extension (URL-keyed DiscussionForumPosting entries) to land with the first article that uses one.

## 5. The daily loop (Finn's structure, Mark's method)

Runs every morning, modeled on Finn's 7:52 AM ops run:

1. **Change scan.** Re-fetch tracked manufacturer and builder pages; diff against snapshots. New model announcements, price moves, spec changes, and discontinued models become the day's raw material and fact-ledger updates (re-verified per Section 4 before use).
2. **One content action.** Produce one new piece or one substantive refresh from the content queue (Section 7), built to the Section 3 templates, facts pulled only from the ledger. Draft lands in the approval queue, never directly on the site.
3. **One SEO improvement.** Internal-link pass, a stale page refresh, a schema gap fix, or a Search Console opportunity (queries rising, pages near page one). Search Console access is a Phase 0 setup item.
4. **Health check.** Production build passes locally, broken-link scan, deploy status on Vercel confirmed.
5. **Digest to Mark (only what matters).** Drafts awaiting approval, fact conflicts needing his call, anything unusual. Silence on a nothing-happened day is acceptable and preferred.
6. **One off-site action (weekday rotation).** Corroboration is built, not just claimed. Each weekday produces ONE off-site work product, always as a draft in the digest, always behind the Section 6 gate:
   - **Monday, question mining.** Read the van and Class B communities (Reddit subreddits, iRV2, Sprinter forums) as listening posts only. Harvest the real buyer questions being asked, in their words; recurring questions the fact layer answers best enter the content queue (Section 7) as article and FAQ candidates, built to cite the source discussion per Section 4's experience-corroboration rule.
   - **Tuesday, asset pitch.** One pitch draft for one data asset we own (research pieces, the census, comparison data) to one RV-media outlet (RVtravel, RVBusiness, RV News rotation). Offering the finding and the data; a citation from trade press is corroboration the site cannot give itself.
   - **Wednesday, creator outreach.** One outreach draft to a van-life YouTube creator who reviews or compares models we cover, offering the verified spec and comparison data as a resource. YouTube mentions are the strongest measured correlate of AI visibility; we earn them by being useful, not by asking for promotion.
   - **Thursday, entity consistency sweep.** Check every surface where Starry Van exists off the site (social profiles, directories, dealer or manufacturer pages that reference us) against the canonical facts. Discrepancies arrive as a fix list; fixes on properties the operator can reach are applied after approval.
   - **Friday, citation check.** Run the fixed panel of core buyer questions through Google, Bing, ChatGPT, and Perplexity; log who was cited for each and what changed week over week. Feeds the Monday report.
   - **Reddit ruling (Mark, Oct 15, 2026):** no Starry Van Reddit account, no posting, ever. Business accounts posting links get killed there, and the value is captured offsite instead: questions mined as a listening post, and threads cited inside articles via external links and `mentions` wiring (Section 4). This does the credibility and intelligence work of a Reddit presence with none of the platform risk.

**Weekly (Monday report, Finn's CEO update):** traffic and citation movement, content shipped, fact changes detected, email list growth, sponsor pipeline status, one recommendation.

**Newsletter (weekly, via Resend; setup in Phase 2):** the week's model and price changes, one comparison highlight, sponsor logo slot. Written by the system, approved by Mark before send, sent by the system.

## 6. The approval gate

Everything public waits for Mark. Mechanics: work happens on branches; the daily digest links each draft's preview; Mark replies approve or hold; approved work merges to main, Vercel deploys, and the operator verifies the deployment and the live page before reporting it done. Sponsor outreach emails, sponsor pricing, and any payment link creation are individually approved, always.

## 7. Content queue (first 30 days after Phase 0)

Seed the graph before chasing articles:
- Entity library: top builders (Winnebago, Storyteller Overland, Airstream, Coachmen, Pleasure-Way, Thor, Grech RV, Midwest Automotive Designs, Outside Van) and the top ~12 models by buyer demand, all facts ledger-verified.
- Comparisons (highest intent first): Revel vs MODE; Sprinter vs Transit vs ProMaster chassis guide; Interstate vs Grech; best Class B under $200k; best for winter; best for full-time living.
- Guides: true cost of ownership; Class B insurance and financing basics; off-grid power explained (battery, solar, alternator charging); buying used: what to inspect.
- Every piece follows Section 3 templates and Section 4 facts. No exceptions for speed.

## 8. Sponsor system (activates in Phase 3, designed now)

Slots built into templates from day one, sold only when traffic justifies outreach:
- Featured builder placement (builders index + model pages)
- Comparison sponsor (one per comparison, clearly labeled)
- Dealer spotlight (regional, rotating)
- Quiz results sponsor ("Presented by" on find-my-van results)
- Newsletter sponsor logo

Pricing anchor: Finn's sponsors pay ~$600 per placement at his scale; our rate card gets set from our actual traffic at Phase 3, not before. Payment via Stripe payment links (already in Mark's toolkit); the operator creates links only on Mark's approval of a closed sponsor. First outreach list is regional and warm: PNW dealers and upfitters, Yozzy Overland included (4 miles from Mark, zero structured data, sells exactly what the site covers).

## 9. Phases

- **Phase 0, Foundation (weeks 1-2):** custom domain decision and setup; site-level entity graph retrofit on the existing Next.js app; fact ledger + snapshot tooling; builder/model entity library seeded; Search Console access; templates for model and comparison pages generating schema from the ledger.
- **Phase 1, Compounding (weeks 3-6):** daily loop live; the 30-day content queue ships through the approval gate; quiz email capture confirmed working end to end.
- **Phase 2, Audience (month 2-3):** Resend connected, newsletter launches weekly; distribution habits formed (each piece shared where van buyers gather, Mark's call on where); citation tracking added to the Monday report (weekly citation panel per Section 5, core questions across Google, Bing, ChatGPT, Copilot).
- **Phase 3, Monetization (when traffic earns it):** sponsor rate card set from real numbers; regional outreach begins, one approval at a time; lead-gen pilot with one dealer before scaling it.

## 10. Open decisions for Mark (only three)

1. **Domain:** buy a real domain for the van site (recommended before Phase 1; the vercel.app subdomain caps credibility with sponsors and email deliverability), or stay on the preview domain for now?
2. **Newsletter name:** the weekly letter needs a name (e.g., The Class B Brief). Mark picks or vetoes.
3. **Sponsor threshold:** the traffic level that triggers Phase 3 outreach (suggested: 5,000 monthly visitors or 500 email subscribers, whichever comes first).

## 11. Access state (verified Oct 14, 2026)

- GitHub: the operator is authenticated as Unchainedmindprompts (repo scope) and a test push to this repo succeeded and was cleaned up. HTTPS is the working route; SSH is blocked from the operator's network.
- Vercel: connected on the operator's side; deployments and logs are inspectable.
- Standing rule for this project: no direct site edits outside this pipeline; all changes flow branch -> approval -> merge -> verified deploy.
