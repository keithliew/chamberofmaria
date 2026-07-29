# TASK — Integrate Nano Banana images into Chamber of Maria site

## Context
`NANO-BANANA-PROMPTS-maria.md` and `AVATAR-IMAGE-BRIEF.md` (already in this project) define an 8-image shot list. The user has generated these via Nano Banana 2 and placed the output files somewhere in the project's assets folder — likely with generic filenames (e.g. "image1.png," "generated.png") rather than the intended names, and possibly with 2–3 variants per shot since the brief recommended generating multiple and picking the best.

## Step 1 — Inventory & rename (mapping confirmed, no guessing needed)
The user has confirmed the actual downloaded filenames. Locate these files in the assets folder and rename per this exact mapping:

| Downloaded filename | Canonical filename | Should show |
|---|---|---|
| `meeting-room.png` | `office-window-skyline-abstract.webp` | Empty meeting room, city skyline through window, no people |
| `desk-doc-signing.png` | `desk-documents-signing.webp` | Hand + pen signing a document, no face |
| `bookshelf.png` | `bookshelf-legal-texts.webp` | Bookshelf, generic unreadable spines, no people |
| `conveyancing.png` | `conveyancing-keys-document.webp` | House keys on a property document, no hands/people |
| `banking-loan-doc.png` | `banking-loan-documents.webp` | Stack of financial documents + calculator, no people |
| `tenancy-agreement-handover.png` | `tenancy-keys-handover.webp` | Two hands exchanging a key, no faces |
| `probate-estate-docs.png` | `probate-estate-documents.webp` | Photo album + document folder, dignified/calm mood, no people |
| `og-share-image.png` | `og-share-image.webp` | Flat graphic design, navy background, logo motif, NO text baked in |

**Still open every file and view it before proceeding to Step 3** — the filename tells you which shot it's *meant* to be, not whether the generation actually succeeded at the brief. Confirm each roughly matches its "should show" description before running the full QA pass.

## Step 2 — QA every image before using it (this is the important part)
For each matched image, check and report:
1. **No visible face or identifiable person anywhere in frame** — this is a firm rule from the build brief (misrepresenting a real licensed professional's identity), not a style preference. If any image shows a face — even incidentally, e.g. reflected in a window or glossy desk surface — **do not use it**; flag it back to the user instead of silently rejecting or silently using it.
2. **Resolution** — at least 1600×900 for section/card images, at least 1200×630 for the OG image. Flag anything smaller rather than upscaling it.
3. **Tone check, especially #7 (probate)** — this one needs to read as calm and dignified, not sombre or sad. Use your own judgment viewing it; if it feels off, flag it rather than shipping it.
4. **#8 (OG image) must have no legible text baked into the image itself** — text gets added separately in HTML/CSS. If the generated image has text in it, flag it rather than using it as-is.
5. **Color consistency** — all images should read as belonging to the same navy (#1A2138) / muted brass (#A6864F) palette established in the wordmark. Flag anything that looks like a different color grading entirely.

## Step 3 — Convert and optimize
Convert each approved image to WebP, ≤250KB, at its native resolution (don't upscale). Rename to its canonical filename from the table above. Place in the project's `assets/` folder.

## Step 4 — Wire into the site
Per `CLAUDE-chambers-maria-r-build.md`'s site structure section:
- `office-window-skyline-abstract.webp` → about.html (and/or homepage hero background, if pursuing the optional photo-hero treatment — otherwise the typographic hero stays as built)
- `desk-documents-signing.webp` → index.html or services.html general section
- `bookshelf-legal-texts.webp` → about.html
- `conveyancing-keys-document.webp` → services.html, Sale & Purchase Agreements section
- `banking-loan-documents.webp` → services.html, Bank Loan Documentation section
- `tenancy-keys-handover.webp` → services.html, Tenancy Agreements section
- `probate-estate-documents.webp` → services.html, Probate & Letters of Administration section
- `og-share-image.webp` → OG meta tags on every page (`<meta property="og:image" content="...">`)

Add meaningful `alt` text to every `<img>` tag matching its content (not the internal shot-list description — write it as a visitor would read it, e.g. "Signed property document with keys" not "Prompt 4 conveyancing image").

## Step 5 — Report back
Before declaring this done, give a summary table: original file → matched shot # → QA result (pass/flagged, with reason) → final filename → where it was placed. Flag anything you rejected or couldn't confidently match, rather than making a silent judgment call on the sensitive items (face-check failures, tone concerns on #7, text-in-image on #8).
