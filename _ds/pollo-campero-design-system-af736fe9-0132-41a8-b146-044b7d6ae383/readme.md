# Pollo Campero — Design System

A lively, family-first design system for **Pollo Campero USA**, built primarily for the
**Training department** (courses, decks, videos, images, job aids) but usable for any
on-brand interface or asset.

> Scope: **US-based restaurants only.** Pollo Campero was born in Guatemala (1971) and is
> headquartered there, but this system is for the U.S. market. Keep copy in English (with
> a warm sprinkle of Spanish), U.S. pricing, and U.S. menu naming.

---

## 1. Brand context

Pollo Campero is an award-winning Latin-American fried & grilled chicken chain — "America's
10Best," citrus-marinated and hand-breaded, a taste of home for the #CamperoFamily. The
brand is warm, festive, and proudly Guatemalan-rooted. Its mascot, **Pollito** (a cheerful
yellow chicken in a cowboy hat, orange bandana and white shirt), is central to the
personality.

**Sources used to build this system**
- **Website:** https://us.campero.com/ (home, menu, rewards, our story; order.campero.com)
- **Brand color sheet:** `uploads/ColoresCAMPERO.pdf` → exact Pantone/RGB values (captured in `tokens/colors.css`)
- **Logos:** `LOGO2024_PC-01/02.png`, `logotipo campero simple blanco-01.png`
- **Fonts:** Exo family, Bushcraft One, Guthen Bloots, "Just Tell Me What"
- **Mascot art:** `Pollito 2024_No Background.png`, `Nuevo Pollito Entero.png`, `PinPollitoEmoji-01/02.png`
- **Brand assets ("Recurso" series):** hand-drawn orange doodles + food illustrations
- **Deck template:** `uploads/PPT-2024_Power.pptx` → wood-grain textures, torn-paper edges, framed photos (extracted into `assets/`)

All originals remain in `uploads/`. Re-derive from there if needed.

---

## 2. Content fundamentals (voice & tone)

Campero sounds like a **warm, upbeat family member who loves to feed you** — never corporate.

- **Person:** Speak to the guest as "you"; the brand is "we." Rally around "the family."
- **Casing:** Headlines are **UPPERCASE and punchy** (Exo Black). Body is sentence case.
- **Energy:** Short, exclamatory, appetite-forward. Playful onomatopoeia is welcome ("MMMM, rewards!", "GOOOOOOL").
- **Spanish flavor:** A light, natural sprinkle — *familia, buen provecho, ¡qué rico!, ¡gracias!* Never force it; the U.S. site is English-first.
- **Hashtag:** `#CamperoFamily`.
- **Emoji:** Sparingly and tastefully (⭐️ 🔥 🍗 🎉 🛒). They suit casual/training contexts; avoid in formal legal copy.

**On-brand examples (real site copy):**
> "Skip the line & order online." · "Join the family." · "Follow the flavor." ·
> "MMMM, rewards!" · "Big flavor, small bites." · "Show you care the flavorful way." ·
> "Award-winning fried and grilled chicken."

**Off-brand:** "Utilize our digital ordering platform." · "Customers may redeem points herein."
Cold, stiff, or jargon-heavy = not Campero. (See `guidelines/brand-voice.html`.)

---

## 3. Visual foundations

**Colors** — Pantone-accurate (`tokens/colors.css`). Bright **Campero Orange `#FF4D00`** is
the energy/doodle color; **Yellow `#FFD100`** is sunshine; **Maroon `#5E2A2B`** is the logo
outline and primary ink; **Lime `#B4BD00`** is fresh/sides; **Amber `#FF8300`** warms;
**Grape `#512E91`** is a rare pop. Neutrals are **warm and cream-based** (`#FFFBF3` page,
`#F4EDE0` panels) — never cold gray.

**Typography** — `tokens/typography.css`. **Exo** is the workhorse (UI + headlines); the
house headline is **Exo Black, ALL CAPS, tight leading** (matches the site). Hand-drawn
**accent** faces carry personality: **Guthen Bloots** (flowing script — the "Pollo" feel),
**Just Tell Me What** (casual marker), **Bushcraft One** (chunky display). Use accents for
kickers, sign-offs, and captions — not body text.

**Backgrounds** — The signature is **painted wood-grain planks** in brand colors
(`assets/textures/wood-*.png`), used full-bleed. A recurring motif is the **torn-paper edge**
revealing a second color beneath, and **color panels framed by a white-wood border**. Plain
cream is the quiet default.

**Illustration** — Two registers: **orange hand-drawn line-art** (food + objects, sketchy
single-weight) and **filled spot illustrations** (fries, flan, mac & cheese, etc.). Plus a
library of **orange "doodle" flourishes** — squiggles, underlines, hearts, quote marks,
dividers — sprinkled to add hand-made energy. **Never** redraw these in SVG; use the PNGs.

**Shape & depth** — Friendly and tactile: **generous rounding** (pills for buttons/badges),
a confident **2.5px maroon "ink" outline** on key elements, and the playful **"sticker pop"**
shadow (solid maroon offset, e.g. `4px 4px 0`). Soft shadows are **warm-tinted** (maroon
alpha), never neutral. Corner radii run from `8px` to organic blobs (`tokens/effects.css`).

**Cards** — White surface, rounded `lg` (22px), either a hairline sand border (quiet) or the
maroon ink outline + pop shadow (loud). Optional colored accent bar across the top.

**Motion** — Bouncy and friendly. Hovers **lift** (`translateY(-4px)`) and brighten slightly;
presses **dip** into their pop shadow. Use the **overshoot bounce** easing
(`--ease-bounce`) for pops and toggles; `--ease-out` for everything else. Durations
120–360ms. Avoid slow, somber fades.

**States** — Hover: brighten + lift. Press: translate into shadow / shrink slightly. Focus:
4px soft orange ring (`--pc-orange-100`) on a maroon-orange border. Disabled: 50% opacity.

**Imagery vibe** — Warm, bright, appetizing, daylight. Restaurant photos get a **playful
tilted double-frame** (orange + yellow offset). No cool/desaturated/b&w treatments.

---

## 4. Iconography

Pollo Campero does **not** ship a formal icon font. Its "icon" language is the **hand-drawn
orange doodle set** plus the **mascot** — copied into `assets/doodles/` and `assets/mascot/`
and exposed via the `<Doodle>` and `<Mascot>` components. Use these PNGs as decorative icons,
dividers and accents; **do not** hand-roll SVG replacements (they lose the marker texture).

For functional UI glyphs (chevrons, checks, close, arrows) the components draw **minimal
inline SVG strokes in maroon** at ~2.5–4px weight, matching the chunky outline language.
Where a broader UI icon set is needed, substitute **Lucide** (CDN, rounded 2px strokes) and
tint it maroon/orange — flagged here as a substitution, since the brand has no official set.

**Emoji** are an acceptable lightweight icon source in casual/training contexts (⭐️🔥🍗🎉🛒).

---

## 5. What's in here (index)

**Foundations**
- `styles.css` — single entry point (imports only). Consumers link this.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css`
- `guidelines/*.html` — specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab

**Components** (`components/`, exported on `window.PolloCamperoDesignSystem_af736f`)
- `core/` — **Button**, **Badge**, **Card**
- `forms/` — **Input**, **Select**, **Checkbox**, **Switch**
- `navigation/` — **Tabs**
- `brand/` — **Eyebrow**, **Callout**, **PriceTag**, **Mascot**, **Doodle**

**UI kits** (`ui_kits/`)
- `website/` — interactive recreation of us.campero.com (home, menu, rewards, cart)

**Slides** (`slides/`) — 6 deck layouts (title, section, content, comparison, quote, closing)
recreating the PPT-2024 template language (1280×720).

**Assets** (`assets/`) — `logos/`, `mascot/`, `doodles/`, `illustrations/`, `textures/`,
`photos/`, `fonts/`.

---

## 6. Substitutions & open questions
- **Fonts:** all four brand font files were provided and embedded — no substitutions. (Note
  "Just Tell Me What" and "Guthen Bloots Personal Use" are personal-use licenses; confirm a
  commercial license for production.)
- **Product photography:** none was provided, so the menu/news use the brand's own
  illustrations as stand-ins. Drop in real food photos when available.
- **Icon set:** no official UI icon font exists; functional glyphs are inline SVG, with
  Lucide flagged as a fallback if a fuller set is needed.
