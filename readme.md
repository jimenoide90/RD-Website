# Richmond Day Design System

Design system for the Richmond Day agency website (Toronto, Canada): a dark, editorial, image-led portfolio. Source: the project file `Richmond Day.dc.html` (no Figma or repo attached). Sections: What We Do, Work, How We Do It, Who We Are, Let's Talk.

## Content fundamentals
- Voice: short, direct agency copy. Section titles are uppercase (WHAT WE DO, WHO WE ARE, LET'S TALK), except "how we do it" in the source.
- Labels are small uppercase mono ("START A PROJECT", "02 / 06"). Service blurbs are one plain sentence ("Interfaces and digital products shaped around how people actually use them.").
- No emoji. Arrow glyphs (↗) mark links.
- Third person for the studio and team bios; "we" in split-screen headlines ("We Are Unlike Every Other Agency.").

## Visual foundations
- **Color:** near-black ink (#0b0b0b) pages, warm paper (#f5f2ed) text, stone (#d9d5cc) secondary text, slate (#889bb1) meta, one accent: orange #ed3d02. "Let's Talk" inverts to paper background with ink text.
- **Type:** Bebas Neue (display, uppercase, line-height .95), DM Sans 300/400/500 (body), DM Mono 11px uppercase with .14em tracking (labels, nav, counters).
- **Spacing:** fluid gutters clamp(24px,5.5vw,80px); content max 1280px; section padding clamp(80px,10vw,144px); grid gaps 16–18px.
- **Backgrounds:** full-bleed photography, desaturated/darkened for the team gallery (grayscale + brightness .5); dark gradient scrims behind overlaid text. No patterns or textures.
- **Corners & borders:** square-leaning (2–5px radii); 1px hairlines rgba(245,242,237,.12); circles for avatars.
- **Shadows:** none; depth comes from scrims and image overlap.
- **Motion:** one easing, cubic-bezier(.22,1,.36,1). Reveal on scroll (rise 28px + fade), 1s slow image scale on hover, floating squares (rdBob), horizontal scroll case studies, sticky split-screen with hover reveal, draggable 3D image ring in the hero.
- **Hover:** text links turn orange; cards scale image 1.05; CTA arrow gap widens; list rows indent.
- **Imagery:** warm, cinematic, automotive and campaign photography; team portraits in black and white.

## Iconography
No icon font or icon library. Small inline SVG strokes (24px viewBox, 2px stroke, square caps) and unicode glyphs (↗, +). Do not draw new illustrations.

## Fonts
Bebas Neue and DM Sans are local files in `fonts/` (declared in `fonts.css`). DM Mono still loads from Google Fonts; no file was provided.

## Index
- `styles.css` → `fonts.css`, `tokens/{colors,typography,spacing,motion}.css`
- `guidelines/` foundation cards
- `components/core/` Button, SectionHeader, WorkCard
- `assets/` sample photography
- `SKILL.md`

Logo: `assets/RichmondDay_Logo_dark_horizontal.png`, a white horizontal lockup for dark backgrounds. No light-background version was provided.

## Intentional additions
None. UI kits and slide templates were not built.
