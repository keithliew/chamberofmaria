# CLAUDE.md — Chamber of Maria Website Build Brief

## What this is
A static website for **Chamber of Maria** *(brand/display name — see naming note below)*, a Malaysian legal practice (Advocates & Solicitors) established 2015, licensed under the Bar Council. Built from a Fast Track intake submission — several fields need client confirmation before launch, marked below rather than assumed. **This is a regulated profession — legal advertising in Malaysia is governed by Bar Council rules on professional conduct. Nothing in this brief should be read as confirming compliance with those rules; the client, as the licensed practitioner, must review all public-facing copy against current Bar Council advertising guidelines before launch.** I am not qualified to certify that compliance and am not asserting it.

## Naming note — display name vs. registered name
The Fast Track submission gave the registered/legal name as **"CHAMBERS OF MARIA. R"** (plural "Chambers," with ". R"). The client has since requested the site and logo display as **"Chamber of Maria"** (singular "Chamber," no ". R"). Treat "Chamber of Maria" as the brand name used everywhere visible (header, hero, logo, page titles). If a footer legal line or registration disclosure is ever needed, confirm with the client whether it should cite the original registered name "CHAMBERS OF MARIA. R" or whether the registration itself has also changed to match — do not assume these are the same thing without confirming.


## Hard constraints
1. Static HTML/CSS/JS only. No framework, no build step. Deploys via git push to Cloudflare Pages.
2. One shared stylesheet, one small shared script. Semantic HTML, mobile-first.
3. **No outcome guarantees, ever.** Never imply a case/transaction "will succeed," "will win," or similar — standard legal-advertising caution, doubly important since this firm handles conveyancing, loans, and probate where clients may be anxious and outcome-promising language is both improper and potentially misleading.
4. **No invented credentials, no invented named team members beyond "Maria. R" and the firm's own name.** No fabricated founder bio, no fabricated years-of-experience claims beyond "established 2015," no fabricated specific Bar admission number — only what's in this brief.
5. **Do not generate a photorealistic "founder portrait" or any image purporting to depict a real, named individual.** Generating a fake photo and presenting it as "Maria R." would misrepresent a real licensed professional's identity — this is a firm rule, not a style preference. Supporting imagery must stay generic/abstract (see companion `AVATAR-IMAGE-BRIEF.md`).
6. Per page: unique title, meta description, canonical URL, OG tags, favicon (from the generated monogram).

## Verified facts (from Fast Track submission, 2026-07-29)
- **Registered name (SSM/legal):** CHAMBERS OF MARIA. R *(as originally submitted)*
- **Display/brand name (use everywhere on the site):** Chamber of Maria *(per client's later instruction — see naming note above)*
- **Established:** 2015
- **Licence:** "Licensed under Bar Council" — general statement only; no specific admission/registration number given `[OPTIONAL BUT RECOMMENDED: get the exact registration number if the client wants to display it — strengthens trust, not required to block launch]`
- **One-liner:** "Legal Firm" *(minimal — site positioning copy below is synthesized from the practice-areas list, not from this line)*
- **Practice areas (verbatim from submission):** preparing legal documents such as sale and purchase agreements, bank loan documents, tenancy agreements, and LA (Letters of Administration) & Probate documents
- **Typical clients:** Purchasers, Vendors, Landlords, Tenants, Banks, Developers, Deceased's Estates
- **Client volume claim:** "Served more than 5,000 clients so far" — display exactly as given, do not round further or embellish
- **Declined work:** fraud transactions — this is the qualification/wrong-fit line
- **Claims needing fine print:** "Nil" — client explicitly stated none; do not invent a disclaimer that wasn't asked for
- **Commission/referral disclosure:** answered "no" to paying referral cuts; the paired "does revenue involve commissions" question was left blank. Since the directly relevant question was answered "no," **no commission disclosure line is needed** — flagged only for awareness, not blocking.
- **Hours:** 8am – 5pm
- **Address:** No public address — service area only *(deliberate choice, same treatment as prior projects with this answer)*
- **Primary CTA:** WhatsApp us
- **WhatsApp number:** 0126036230 → format as `+60126036230` for the `wa.me` link
- **Response commitment:** within 24 hours
- **Industry:** Professional services (legal)

## Flagged gaps — resolve before launch, not necessarily before build
1. **Domain "chambersofmaria.r" is not a valid TLD.** ".r" isn't a real top-level domain. `[NEEDS CLIENT CONFIRMATION — likely meant .com, .com.my, or .law; do not attempt to register or reference this domain as-is]`
2. **Two different email addresses were given** — `chamofmaria.r@gmail.com` (Email Main) vs `chambersofmaria.r@gmail.com` (Submit Email). These may be a typo (missing "bers") or genuinely two different inboxes. `[NEEDS CONFIRMATION before publishing either as the public contact address]`
3. **No named founder bio beyond the firm name.** About page should stay high-level (practice areas, year established, client volume, Bar Council licensing) rather than inventing a personal narrative for "Maria. R." `[CLIENT MAY WANT TO SUPPLY 2-3 SENTENCES — do not invent]`
4. **Legal advertising compliance is the client's responsibility to confirm**, not something this brief or its builder can certify — see the note at the top of this document.

## Fast Track defaults applied (per standard SOP — stated here, not silent)
- CTA tone: **Consultative** (professional services, considered engagement — not promotional/direct)
- Scan-vs-depth: **Concise**, since legal-services visitors typically want quick clarity on "do you handle my situation" before enquiring, not long-form content
- Sign-off/QA: defaults to the submitter's contact unless another contact is named

## Design system — derived from industry convention, no existing brand to sample from
No logo or brand materials existed (client explicitly requested: *"design a simple wordmark for me instead"*). Per standard design guidance for this industry (finance/legal/property: dark ink, restrained serif, minimal color), the following was generated and is provided in `./assets/`:
```css
--ink:  #1A2138;  /* deep navy, primary text/wordmark color */
--gold: #A6864F;  /* muted brass accent — restrained, NOT bright/shiny gold */
--paper: #FAF9F6; /* warm off-white, not stark white — softer, traditional feel */
```
**Typeface:** Lora (serif) — elegant, professional, legible at both display and body sizes. Single accent color only, per the "ONE accent, minimal palette" guardrail.
**Assets provided (in `./assets/`):**
- `wordmark-horizontal-header.webp` — primary header lockup
- `wordmark-stacked.webp` — alternate stacked lockup (for narrow spaces / mobile)
- `monogram-favicon-source.webp` — "M·R" monogram in a simple ring, source for favicon
- These are v1 generated concepts, not client-approved final branding — present as options, confirm one before final launch.

## Site structure
1. **index.html** — Hero (firm name, "Advocates & Solicitors," established 2015), practice-area summary (4 areas from the verbatim list), client-volume stat (5,000+ clients), WhatsApp CTA.
2. **services.html** — Full practice area detail: Conveyancing (SPAs), Banking/Loan Documentation, Tenancy Agreements, Probate & Letters of Administration. Each section written from the verbatim practice list — no invented sub-services.
3. **about.html** — Firm background (est. 2015, Bar Council licensed), who they serve (the client-type list), who they don't take on (fraud transactions), response commitment (24 hours). No fabricated founder narrative.
4. **contact.html** — WhatsApp CTA (primary), hours (8am–5pm), "service area only, no walk-in address" note, simple enquiry form via Web3Forms to the confirmed submission email (pending gap #2 above).

## Companion document
See `AVATAR-IMAGE-BRIEF.md` for the AI-image generation shot list covering supporting imagery — deliberately excludes any fabricated "founder photo," per constraint #5 above.

## QA before handover
1. No outcome-guarantee language anywhere ("we will win," "guaranteed approval," etc.).
2. No fabricated founder bio, no fabricated Bar admission number, no fabricated named colleagues.
3. No AI-generated image anywhere purports to be a real photo of "Maria R." or any specific named person.
4. Domain and the two email addresses are resolved with the client before any of them go live on the published site.
5. WhatsApp link tested: `https://wa.me/60126036230` opens with a sensible prefilled message.

## Deliverables
Complete site files + optimized assets + PRELAUNCH-CHECKLIST.md listing: domain TLD issue, the two-email discrepancy, optional Bar admission number, optional founder bio, and the explicit reminder that Bar Council advertising-rule compliance is the client's to confirm.
