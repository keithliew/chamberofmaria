# Pre-Launch Checklist — Chamber of Maria

Site build is complete (index, services, about, contact — shared `css/style.css` and `js/main.js`, assets in `assets/`). The items below must be resolved with the client before the site goes live. None of them block further development; they block **launch**.

## 1. Domain — not yet valid
The Fast Track submission gave `chambersofmaria.r`, which is not a valid domain (`.r` is not a real TLD). All canonical URLs, Open Graph URLs, and any future DNS/Cloudflare Pages setup in this build currently use a **placeholder**: `https://www.chamberofmaria.com`.
**Action:** confirm the real domain with the client (likely `.com`, `.com.my`, or `.law`), then find/replace the placeholder across all four HTML files (`<link rel="canonical">` and `og:url` / `og:image` tags).

## 2. Public contact email — two candidates given
Two addresses were submitted: `chamofmaria.r@gmail.com` (Email Main) and `chambersofmaria.r@gmail.com` (Submit Email). These may be a typo (missing "bers") or genuinely separate inboxes.
**Action:** confirm the single address to use as the public contact inbox. This also **blocks the contact form**: `contact.html` uses [Web3Forms](https://web3forms.com), which requires an access key generated against a specific destination email. The form currently has a placeholder (`access_key value="REPLACE_WITH_WEB3FORMS_ACCESS_KEY"`) — generate a real key once the address is confirmed and swap it in.

## 3. Registered vs. display name — footer/legal line
The site displays the brand name "Chamber of Maria" everywhere (header, hero, titles), per the client's later instruction. The footer currently states only "Licensed under the Bar Council of Malaysia" and does **not** cite the originally-submitted registered name "CHAMBERS OF MARIA. R", since it wasn't confirmed whether that registration itself has also changed to match the new display name.
**Action:** if a formal registration disclosure line is required (check current Bar Council advertising rules), confirm with the client which name to cite and add it to the footer.

## 4. Optional: Bar Council admission/registration number
Only a general "licensed under Bar Council" statement was provided — no specific admission or registration number.
**Action (optional, not launch-blocking):** if the client wants to display a specific number, add it to `about.html` and the footer — this strengthens trust but isn't required.

## 5. Optional: founder bio for "Maria. R"
`about.html` is intentionally high-level (practice areas, year established, client volume, licensing) with no personal narrative, per the build brief's constraint against fabricating a founder bio.
**Action (optional):** if the client wants to supply 2–3 sentences about "Maria. R," add them to the About page. Do not write this copy speculatively.

## 6. Legal advertising compliance — client's responsibility
This site was built with standard legal-advertising caution applied throughout (no outcome guarantees, no fabricated credentials, no invented team members, no AI-generated "founder photo"). **This does not constitute a compliance certification.** Malaysia's Bar Council governs legal advertising for licensed practitioners, and only the client, as the licensed practitioner, can confirm the final copy meets current Bar Council rules before this site is published.
**Action:** client review of all public-facing copy against current Bar Council advertising guidelines, before launch.

## 7. Branding — v1 concepts, not yet approved
`wordmark-horizontal-header.webp`, `wordmark-stacked.webp`, and `monogram-favicon-source.webp` in `assets/` are v1 generated concepts (no existing brand to sample from), not client-approved final branding.
**Action:** present as options, confirm one (or request revisions) before final launch. Favicons (`favicon-32.png`, `apple-touch-icon.png`, `favicon-512.png`) were generated from the monogram and will need regenerating if the mark changes.

## 8. Supporting imagery — generated and integrated, one open item
All 8 images from `AVATAR-IMAGE-BRIEF.md` / `NANO-BANANA-PROMPTS-maria.md` were generated via Nano Banana, QA'd, converted to WebP, and wired into the site (see mapping below). The homepage hero stays typographic as originally built — no photo hero was added.

**Open item — generation-tool watermark:** 7 of the 8 images (all except `desk-documents-signing.webp`) carry a small sparkle/star watermark in the bottom-right corner, most visible on `og-share-image.webp` where it sits alone on an empty navy background. Per client instruction, these were shipped as-is rather than cropped or regenerated.
**Action:** before final launch, either regenerate the affected images without the watermark, or crop it out, particularly for the OG image since it's the most visible instance (shows in link previews/social shares).

**Images in use:**
| File | Used on |
|---|---|
| `office-window-skyline-abstract.webp` | about.html — "Established 2015" |
| `bookshelf-legal-texts.webp` | about.html — "Response time" |
| `desk-documents-signing.webp` | index.html — "Who we work with" |
| `conveyancing-keys-document.webp` | services.html — Sale & Purchase Agreements |
| `banking-loan-documents.webp` | services.html — Bank Loan Documentation |
| `tenancy-keys-handover.webp` | services.html — Tenancy Agreements |
| `probate-estate-documents.webp` | services.html — Probate & Letters of Administration |
| `og-share-image.webp` | OG meta tags, all four pages (cropped to 1200×630) |

Raw full-resolution source PNGs remain in `assets/` locally for future re-editing but are excluded from git via `.gitignore` to keep the repo lean.

## 9. Functional QA before go-live
- [ ] WhatsApp link opens with a sensible prefilled message: `https://wa.me/60126036230?text=...`
- [ ] Contact form submits successfully once a real Web3Forms access key is in place (item 2)
- [ ] All four pages checked on mobile widths (nav toggle, form layout)
- [ ] No outcome-guarantee language anywhere ("we will win," "guaranteed approval," etc.) — verified in this build
- [ ] No fabricated founder bio, no fabricated Bar admission number, no fabricated named colleagues — verified in this build
- [ ] No AI-generated image anywhere purports to be a real photo of "Maria R." or any specific named person — verified, no faces/identifiable people in any generated image (item 8)
- [ ] Generation-tool watermark removed or cropped from the 7 affected images before launch (item 8)
- [ ] Domain and email finalized and all placeholder URLs/keys replaced (items 1–2)
