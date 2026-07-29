TASK — Fix hero decoration: inline the animated SVG properly

## The problem
The SVG hero decoration (orbiting dots, Concept C) isn't animating. Root cause:
SVGs referenced via `<img src="hero-decoration.svg">` are sandboxed by the
browser as static images — CSS animations and `@keyframes` inside an externally
loaded SVG file do not run. This is a browser security behavior, not a bug in
the file itself. The fix is to inline the `<svg>...</svg>` markup directly into
the HTML (so it's part of the live DOM), and move the CSS into the site's main
stylesheet.

## What to do

1. Find wherever the hero decoration is currently included (likely an
   `<img>` tag pointing at an SVG file, in the hero section of `index.html`).

2. Replace that `<img>` tag with this inline SVG markup directly in the HTML:

```html
<svg viewBox="0 0 700 640" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="hero-decoration">
  <g stroke="var(--gold, #A6864F)" fill="none">
    <path d="M 300,60 A 260,260 0 0 1 560,200"  stroke-width="2" opacity="0.55"/>
    <path d="M 370,400 A 190,190 0 0 1 560,610" stroke-width="1" opacity="0.28"/>
    <path d="M 230,160 A 330,330 0 0 1 220,540" stroke-width="1" opacity="0.20"/>
    <path d="M 450,300 A 110,110 0 0 1 340,400" stroke-width="1" opacity="0.30"/>
  </g>
  <circle cx="440" cy="200" r="4" fill="var(--gold, #A6864F)"/>
  <g class="orbit orbit-1">
    <circle cx="550" cy="200" r="3.5" fill="var(--gold, #A6864F)"/>
  </g>
  <g class="orbit orbit-2">
    <circle cx="440" cy="330" r="3" fill="var(--gold, #A6864F)" opacity="0.85"/>
  </g>
  <g class="orbit orbit-3">
    <circle cx="440" cy="-90" r="2.5" fill="var(--gold, #A6864F)" opacity="0.7"/>
  </g>
</svg>
```

3. Add this CSS to the site's main stylesheet (styles.css or equivalent —
   NOT a separate file, NOT a `<style>` tag floating outside the SVG):

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
  transform-origin: 440px 200px;
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

/* Accessibility — required, do not remove or make conditional on anything else */
@media (prefers-reduced-motion: reduce) {
  .orbit { animation: none; }
}
```

## After making the change, verify and report back
1. Confirm the hero section's parent element has `position: relative` (or
   equivalent) so the `.hero-decoration`'s `position: absolute` anchors to
   the hero, not to the whole page — if it doesn't, the decoration will
   appear in the wrong place or overlap unrelated content.
2. Confirm `var(--gold, ...)` actually resolves to a defined color variable
   in this project's CSS — if the site doesn't already define `--gold` as a
   custom property, either add it (matching #A6864F, the established brand
   accent) or replace every `var(--gold, #A6864F)` in the SVG with the
   literal hex value directly.
3. Open the page in a browser and confirm you can actually see slow,
   subtle motion in that corner of the hero — don't just confirm the code
   was added, confirm it visibly animates.
4. Test with the OS/browser's "reduce motion" accessibility setting enabled
   and confirm the orbit dots freeze in place rather than continuing to spin.
5. Confirm the decoration disappears below 900px viewport width (mobile) as
   intended, rather than cramming into the stacked mobile layout.
6. Report back pass/fail on each of the four checks above.
