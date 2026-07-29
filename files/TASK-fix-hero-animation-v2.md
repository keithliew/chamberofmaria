TASK — Replace the broken hero decoration with corrected, verified geometry

## What went wrong
The previous SVG had arc coordinates that were hand-written rather than
mathematically derived, so the arcs didn't share a common center or align
with the orbit dots — that's why it rendered as scattered, disconnected
lines in production. This version was generated programmatically (all
arcs and dots computed from one shared center point and consistent radii)
and visually verified before delivery.

## What to do

1. Find the current (broken) hero decoration SVG in the codebase — likely
   inline in `index.html`'s hero section, or in a `<style>`/CSS block tied
   to a `.hero-decoration` class.

2. **Delete the entire previous SVG markup and its associated CSS
   completely** — do not merge or patch it, replace it outright, since the
   old coordinates are wrong and mixing old+new will reintroduce the bug.

3. Replace with this SVG markup, inlined directly in the HTML (not
   referenced via `<img src="...">` — that approach doesn't support the
   CSS animation, which is why the first version failed):

```html
<svg viewBox="0 0 900 640" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="hero-decoration">
  <g stroke="var(--gold, #A6864F)" fill="none">
    <path d="M 528.9,15.7 A 260,260 0 0 1 639.2,427.1" stroke-width="2" opacity="0.55"/>
    <path d="M 604.5,355.0 A 190,190 0 0 1 261.5,195.0" stroke-width="1" opacity="0.28"/>
    <path d="M 382.7,585.0 A 330,330 0 0 1 382.7,-65.0" stroke-width="1" opacity="0.2"/>
    <path d="M 535.3,205.0 A 110,110 0 0 1 385.0,355.3" stroke-width="1" opacity="0.3"/>
  </g>
  <circle cx="440" cy="260" r="4" fill="var(--gold, #A6864F)"/>
  <g class="orbit orbit-1">
    <circle cx="546.3" cy="288.5" r="3.5" fill="var(--gold, #A6864F)" opacity="1.0"/>
  </g>
  <g class="orbit orbit-2">
    <circle cx="261.5" cy="195.0" r="3.0" fill="var(--gold, #A6864F)" opacity="0.85"/>
  </g>
  <g class="orbit orbit-3">
    <circle cx="382.7" cy="-65.0" r="2.5" fill="var(--gold, #A6864F)" opacity="0.7"/>
  </g>
</svg>
```

4. Add this CSS to the site's main stylesheet (replacing any previous
   `.hero-decoration`/`.orbit` rules entirely):

```css
.hero-decoration {
  position: absolute;
  right: -40px;
  top: 0;
  width: 620px;
  height: auto;
  pointer-events: none;
}

.orbit {
  transform-origin: 440px 260px;
  animation: orbit-spin linear infinite;
}
.orbit-1 { animation-duration: 34s; }
.orbit-2 { animation-duration: 68s; }
.orbit-3 { animation-duration: 120s; }

@keyframes orbit-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@media (max-width: 900px) {
  .hero-decoration { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .orbit { animation: none; }
}
```

5. Confirm the hero section's containing element has `position: relative`
   so the decoration anchors correctly within the hero, not the whole page.

6. Confirm `--gold` resolves to a real defined color (#A6864F) somewhere in
   this project's CSS variables — if not, add it, or replace every
   `var(--gold, #A6864F)` above with the literal hex value.

## Verify before reporting done
1. View the page in a browser. Confirm the arcs form a **coherent,
   concentric pattern around one shared center point** — not scattered or
   disconnected lines. This is the specific bug being fixed; check it
   carefully, don't just confirm the code compiles.
2. Confirm the three dots sit exactly on their respective arcs (or very
   close), not floating disconnected from any line.
3. Confirm slow rotating motion is visible (dots orbiting the shared
   center at different speeds).
4. Test with "reduce motion" OS/browser setting enabled — orbits should
   freeze in place.
5. Confirm the decoration is hidden below 900px viewport width.
6. Report pass/fail on all five checks, with a description (or better,
   confirm you visually inspected it) rather than just "code added
   successfully."
