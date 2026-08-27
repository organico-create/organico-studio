# Orgànico Studio — Design System

**Orgànico Studio** (`orgànico™ .Studio`) is a brand & design studio. Positioning line: **"Cada detalle cuenta"** (*every detail counts*). The work is branding, identity, packaging and web. The system is Spanish-first, professional, minimalist and geometric.

This design system encodes the studio's own brand so agents can produce on-brand interfaces, decks and assets.

## Sources provided
- **Logos** (SVG + PNG): `organicoprincipallogo`, `organicoisotipologo` (the four-point sparkle mark), `organicoresponsivelogo` (stacked). Copied into `assets/`.
- **Fonts**: Aeonik (Regular/Medium/Bold, OTF), Avenir Next Condensed (TTC), Poppins (Medium/SemiBold, TTF). Copied into `assets/fonts/`.
- **Brand sheets** (screenshots): color palette (Yellow / Dark Charcoal / grey ramp), a branding-proposal document layout, and a marketing-site homepage mockup (bento hero).

No live codebase or Figma file was provided — the system is built from the brand sheets, logo assets, fonts, and the site mockup.

---

## Index / manifest
- **`styles.css`** — root entry; `@import`s all tokens + fonts. Consumers link this one file.
- **`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- **`assets/`** — logos (principal / isotipo / responsive, SVG + PNG) and `fonts/`.
- **`components/`** — reusable primitives:
  - `forms/` — **Button**, **IconButton**, **Input**
  - `surfaces/` — **Card** (the signature bento surface), **Badge**
  - `brand/` — **Logo**
- **`ui_kits/website/`** — interactive recreation of the Orgànico marketing site (Home · Projects · Contact).
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand).
- **`SKILL.md`** — Agent-Skills entry point.

**Components:** Button, IconButton, Input, Card, Badge, Logo.
**Namespace:** `window.OrgNicoDesignSystem_4458e0`.

---

## CONTENT FUNDAMENTALS
**Language:** Spanish (Latin American, neutral). Occasional English UI verbs appear in-market ("Log In", "Sign Up", "Shop").

**Tone:** Professional, minimalist, geometric. Confident and quiet — the studio lets the work speak.

**Voice traits**
- **Short, affirmative sentences.** "Diseñamos con intención." "Cada detalle cuenta." Statements, not pitches.
- **We → you.** The studio speaks as "nosotros" ("Diseñamos…", "Respondemos en 48 horas"); the client is "tú" ("¿Tienes alguna pregunta?", "Hablemos de tu marca").
- **Casing:** Sentence case for UI and body. **UPPERCASE** reserved for big condensed display moments (document titles like "LOREM IPSUM", section labels). Never all-caps a paragraph.
- **No exclamation marks, no hype, no superlatives.** Avoid "¡increíble!", "el mejor", filler adjectives.
- **No emoji.** The brand does not use emoji anywhere.
- **Numbers stay concrete** ("48 horas"), never vague ("super rápido").

**Examples**
- Hero: *"Cada detalle cuenta"* / subhead *"Orgànico Regular · Branding"*
- CTA cards: *"Ver Proyectos"*, *"Contáctanos"*, *"¿Tienes alguna pregunta?"*
- Document: *"LOREM IPSUM"* (title) / *"Propuesta de Branding"* (subtitle) / *"Para: Cliente"*

---

## VISUAL FOUNDATIONS

**Colors.** A two-color brand — **Yellow `#FFFF00`** (Pantone 803 C, the signal accent, used sparingly on one card / one CTA) and **Dark Charcoal `#333333`** (Pantone 447 C, the ink and primary surface). Supported by a neutral ramp: `#989898`, `#D8D8D8`, `#F4F4F4` (page off-white), `#FFFFFF`. Never introduce a third hue. Yellow is a spotlight, not a background wash.

**Type.**
- **Display / impact:** *Avenir Next Condensed* Bold, uppercase, very tight (tracking ≈ −0.01em, line-height ≈ 0.95). Used for oversized document titles and section heads.
- **Headings / UI:** *Aeonik* (Bold 700 / Medium 500), tracking ≈ −0.02em. The workhorse for site headlines ("Cada detalle cuenta") and component labels.
- **Long-form body:** *Poppins* (Medium 500 / SemiBold 600), line-height 1.55, for proposals and reading text.
- The **logo wordmark itself is custom lettering** (rounded, playful) — do not re-set it in a system font.

**Layout.** Signature **bento grid**: rectangular cards of differing size, flat fills (dark / yellow / grey / white), snapped into a tight 16–18px-gap grid, centered in a `1280px` container with generous outer padding. Content sits at the card's corners (heading top-left, action / arrow bottom-right).

**Backgrounds.** Flat color only — no gradients, no photographic hero washes, no textures or patterns. Page background is off-white `#F4F4F4`; the dark card provides contrast. Product mockups are shot on a dark, industrial set (see site mockup) but the UI itself stays flat.

**Corner radii.** Soft and generous: cards use `24–32px` (lg / xl), inner chips `16px`, pills `999px`. This rounding is core to the "orgànico" feel.

**Cards.** Flat fill, hairline `1px` border only on light cards, **no drop shadow at rest**. Interactive cards lift `translateY(-4px)` with a soft `0 8px 24px rgba(28,28,28,0.08)` shadow on hover.

**Shadows.** Minimal. The brand reads flat; shadows appear only on hover-lift and never as decoration.

**Borders.** Buttons/inputs use `1.5px` strong borders; card hairlines `1px`. Focus ring is charcoal with a soft `rgba(51,51,51,0.10)` halo.

**Buttons.** Fully **pill** shaped. Primary = solid charcoal; accent = yellow; plus outline and ghost. Icon buttons are perfect circles (round arrow controls). Hit targets ≥ 44px.

**Hover / press.** Hover fades to ~88% opacity (buttons) or lifts (cards). Press **scales down** (0.97 buttons, 0.94 icon buttons) — a small, confident tactile response. No color inversion on press.

**Motion.** Quick and restrained: 120–360ms, `cubic-bezier(0.4,0,0.2,1)` standard / `(0.16,1,0.3,1)` for card lifts. Fades and small translates — **no bounces, no springy overshoot, no infinite loops.**

**Transparency & blur.** Not part of the brand. Surfaces are opaque. (One exception: a ghost outline button on the dark hero uses a translucent white border.)

**Imagery vibe.** When photography appears, it's dark, moody, industrial and cool-toned (matte black rigs, hardware), used as *environment* around the flat UI — never inside the cards.

---

## ICONOGRAPHY
- **Style:** thin, rounded **line icons** (Feather / Lucide family — 2px stroke, round caps/joins). This matches the arrows, send/paper-plane, cart/bag and chevrons in the site mockup.
- **No icon font** was provided; icons in this system are inline SVGs in `ui_kits/website/Icons.jsx` (arrow-up-right, arrow-down, arrow-left, send, bag, menu). **Substitution flagged:** where more glyphs are needed, use **Lucide** (https://lucide.dev) at 2px stroke to stay consistent — this is the closest CDN match to the mockup's icons, not a confirmed brand set.
- **The isotipo (four-point sparkle)** is the brand's signature graphic device — use `assets/logo-isotipo.svg` for it, do not redraw.
- **No emoji, no unicode-as-icon.** Icons are always line SVGs in charcoal (or white on dark / charcoal on yellow).

---

## Caveats
- **Fonts are the studio's licensed families** (Aeonik, Avenir Next Condensed, Poppins). Aeonik and Avenir Next Condensed are commercial; ship them only where licensing permits. Poppins is open (Google Fonts). Avenir Next Condensed is supplied as a `.ttc` collection — it loads in modern browsers but if you hit issues, the nearest free substitute is a condensed grotesk such as *Archivo Narrow* or *Oswald*.
- Iconography is a **flagged substitution** (Lucide/Feather) — replace with the studio's real icon set if one exists.
- No production codebase or Figma was provided; UI kit fidelity is based on the single site mockup + brand sheets.
