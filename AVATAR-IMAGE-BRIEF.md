# Chamber of Maria — AI Image Generation Brief
Companion to `CLAUDE-chambers-maria-r-build.md`. No photos or logo existed for this project — the wordmark/monogram was generated directly (see `./assets/`); this document covers supporting photographic/illustrative imagery only.

## The one hard rule — read this before generating anything
**Do not generate any image that depicts, or could be mistaken for, a real photo of "Maria R." or any other specific named person at this firm.** No founder headshot, no "the team" group photo. Nothing in the intake submission described what anyone at this firm actually looks like, and fabricating a photorealistic portrait and presenting it as a real licensed professional would misrepresent their identity — this is a firm boundary, not a style note. If the client wants a founder photo, it needs to be a real photo they supply, not a generated one.

Everything below is generic, abstract, or object/setting-focused — no invented human likeness standing in for a specific real person.

## Style guardrails — include in every prompt
- **Palette:** deep navy ink (#1A2138) and muted brass/gold (#A6864F) as accents, warm off-white (#FAF9F6) backgrounds where relevant. Restrained and traditional — this is a legal chambers, not a startup. No bright colors, no gradients, no neon.
- **Tone:** calm, precise, trustworthy. No dramatic lighting, no stock-photo "gavel and handshake" clichés if avoidable — aim for something a little more specific and less generic-stock-photo than the default legal-website imagery.
- **Setting:** Malaysian context is fine to imply subtly (e.g., a KL skyline glimpsed through an office window) but doesn't need to dominate — this firm's clients are individuals and institutions, not tourists.
- **No identifiable real buildings, no readable real signage**, same rule as other projects — keep any implied office generic.
- **Photoreal or clean flat-illustration style, not cartoonish.** Either register works for professional services; pick one and stay consistent across all generated images.
- **Aspect ratio / resolution:** generate at least 1600×900 (16:9) for anything used as a section/card image; hero backgrounds at 2400×1350 or wider if pursuing a photo hero (optional — a typographic hero using the navy/gold palette is equally valid and avoids needing any generated photo at all for the homepage).

---

## A. Homepage / general supporting imagery

| # | Suggested filename | For | Prompt |
|---|---|---|---|
| 1 | `desk-documents-signing.webp` | index.html or services.html | A close-up, photorealistic shot of hands signing a legal document at a wooden desk, a fountain pen in use, warm natural window light, navy folder and a small stack of papers visible, no readable text on the document, no visible face. 16:9. |
| 2 | `office-window-skyline-abstract.webp` | about.html or hero background | A calm, photorealistic interior shot of a law office meeting room — empty of people — with a view of a generic modern city skyline through the window, warm afternoon light, navy and brass tones in the furnishings. No readable signage. 16:9. |
| 3 | `bookshelf-legal-texts.webp` | about.html | A photorealistic shot of a bookshelf with bound legal reference volumes (generic spines, no readable titles/publisher marks), warm wood tones, soft focus background, conveys diligence and depth of practice without cliché. 16:9. |

## B. Practice-area section images (services.html)

| # | Suggested filename | For | Prompt |
|---|---|---|---|
| 4 | `conveyancing-keys-keys.webp` | Sale & Purchase Agreements section | A photorealistic close-up of house keys resting on top of a signed property document on a desk, soft natural light, navy/brass color accents nearby (e.g., a pen or folder edge), no readable text, no visible face. 16:9. |
| 5 | `banking-loan-documents.webp` | Bank Loan Documentation section | A photorealistic shot of a neat stack of financial/loan documents with a calculator and pen beside them on a clean desk, muted professional color palette, no readable text or bank logos. 16:9. |
| 6 | `tenancy-keys-handover.webp` | Tenancy Agreements section | A photorealistic shot of two sets of hands (no faces) exchanging a house key across a desk with a tenancy agreement visible but unreadable beneath, warm neutral lighting. 16:9. |
| 7 | `probate-estate-documents.webp` | Probate & Letters of Administration section | A photorealistic, quiet and respectful shot of an old family photo album and a formal document folder on a desk, soft muted lighting, conveys estate/probate context with sensitivity — no readable text, no depiction of a funeral or grief scene, keep it dignified and understated. 16:9. |

## C. Optional hero treatment
The build brief defaults to a **typographic hero** (navy background, gold accent rule, the generated wordmark, no photo needed) — this is a fully valid, deliberate choice for a legal chambers and arguably more appropriate than a stock-feeling photo hero. Only pursue a photo hero if the client specifically wants one; if so, item #2 above (office window, no people) is the safest candidate — enlarge/generate at 2400×1350 or wider.

## D. Social share (OG) image

| # | Suggested filename | Prompt |
|---|---|---|
| 8 | `og-share-image.webp` | A clean, minimal graphic-design composition (not photographic) on a deep navy background: generous negative space, no text (add "Chamber of Maria" and tagline separately in HTML/CSS afterward — do not ask the generator to render the text itself, text rendering in AI image models is unreliable). A single thin gold rule or the monogram motif positioned off-center. 16:9, crop to 1200×630 after export. |

---

### Notes on execution
- Use **Nano Banana 2** (the mid tier, not Lite) if generating via Google AI Studio — Lite isn't built for multi-reference consistency, and you'll want the generated monogram/wordmark image uploaded as a style/color reference across all of these so the navy/brass palette stays consistent.
- Generate 2-3 variants per prompt, pick the best.
- None of these images are load-bearing for trust the way a real team photo would be — if budget/time allows real photography of the actual office or even stock-licensed (properly licensed, not AI) imagery later, that would be a straightforward upgrade path, not a redo.

### Suggested priority order
1. **A1–A2** — cover the homepage/about page, most visible.
2. **D (OG image)** — cheap, fixes link-preview quality.
3. **B (4 practice-area images)** — round out services.html once the above are done.
