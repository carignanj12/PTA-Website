---
name: Pine Tree Analytics
description: Portland-based analyst-led reputation intelligence and analytics services.
colors:
  workshop-pine: "#173f35"
  deep-pine: "#225f4f"
  field-moss: "#6f8d61"
  brass-note: "#c9963e"
  brick-warmth: "#9b4f3d"
  ledger-cream: "#fbf7ef"
  paper-warmth: "#fffdf8"
  sage-surface: "#edf4ef"
  mist-surface: "#f5f8f4"
  ink-green: "#16211e"
  muted-slate-green: "#5d6c66"
  pencil-line: "#d9e4dd"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(46px, 6.6vw, 82px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(34px, 4.2vw, 54px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "DM Sans, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  surface: "8px"
  pill: "99px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "18px"
  lg: "34px"
  xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.workshop-pine}"
    textColor: "{colors.paper-warmth}"
    rounded: "{rounded.surface}"
    padding: "13px 19px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.workshop-pine}"
    rounded: "{rounded.surface}"
    padding: "13px 19px"
    height: "48px"
  card-surface:
    backgroundColor: "{colors.paper-warmth}"
    textColor: "{colors.ink-green}"
    rounded: "{rounded.surface}"
    padding: "24px"
  nav-shell:
    backgroundColor: "{colors.ledger-cream}"
    textColor: "{colors.ink-green}"
    height: "74px"
---

# Design System: Pine Tree Analytics

## 1. Overview

**Creative North Star: "The Analyst's Workshop"**

This visual system should feel like a working room where a careful Portland analyst turns public signals into decisions: warm paper, pine green, brass markers, measured grids, and report artifacts close at hand. It is calm and precise, but not sterile. It suggests service, judgment, and craft rather than a product dashboard the buyer has to operate.

The system rejects SaaS gloss, generic digital marketing polish, and agency anonymity. It should not look like a faceless platform, a conversion-funnel template, or a broad service menu. It should feel founder-led and systems-minded, with enough editorial warmth to make the work feel human.

**Key Characteristics:**
- Warm editorial surfaces with pine and brass accents.
- Report-preview visuals that show the value without selling software.
- Square, disciplined 8px corners rather than playful pill-heavy UI.
- Clear hierarchy, short copy blocks, and generous breathing room.
- Motion and shadows used as evidence of care, not decoration.

## 2. Colors

The palette is a Portland workshop palette: pine, paper, brass, moss, and warm brick, with muted green-gray neutrals doing most of the quiet work.

### Primary
- **Workshop Pine**: The main brand anchor for CTAs, dark bands, logo marks, and active navigation.
- **Deep Pine**: The supporting pine shade for chart lines, hover states, and secondary emphasis.

### Secondary
- **Brass Note**: The small signal color for dots, chart markers, emphasis text on dark surfaces, and selected accents. It should remain scarce.
- **Field Moss**: A softer organic support color for quiet secondary moments when pine would feel too forceful.

### Tertiary
- **Brick Warmth**: A restrained warmth layer for CTA atmospheres and human service notes. Use sparingly so it does not become a restaurant-marketing palette.

### Neutral
- **Ledger Cream**: Primary page background and the default sense of warmth.
- **Paper Warmth**: Primary content surface for cards, report shells, and elevated panels.
- **Sage Surface**: Gentle supporting surface for secondary buttons, draft responses, badges, and soft panels.
- **Mist Surface**: Metric tiles and low-emphasis report elements.
- **Ink Green**: Primary text color. Never replace it with pure black.
- **Muted Slate Green**: Body copy and secondary labels.
- **Pencil Line**: Borders, dividers, and quiet structure.

### Named Rules

**The Brass Rarity Rule.** Brass is a signal, not a theme. Use it for one or two meaningful accents per section, never as a decorative wash.

**The No Pure Neutral Rule.** Do not use pure black or pure white. Every neutral should carry a slight warm or green cast.

## 3. Typography

**Display Font:** DM Serif Display with Georgia fallback
**Body Font:** DM Sans with Inter and system fallbacks
**Label/Mono Font:** DM Sans

**Character:** The pairing is editorial but practical. DM Serif Display gives the brand a human, local, report-like voice; DM Sans keeps service details, prices, navigation, and report content clear.

### Hierarchy
- **Display** (400, fluid 46px to 82px, 0.95 line-height): Hero headlines only. Keep it large, sparse, and memorable.
- **Headline** (400, fluid 34px to 54px, 1.02 line-height): Section-level ideas and major persuasion moments.
- **Title** (700, 21px, 1.18 line-height): Component headings, pricing titles, and report-card labels.
- **Body** (400, 17px, 1.6 line-height): Explanatory copy. Keep line length near 65 to 75 characters.
- **Label** (800, 13px, uppercase, 0.08em letter spacing): Eyebrows, report labels, and compact status language.

### Named Rules

**The Serif Earns the Room Rule.** Use the serif for major ideas, not for every decorative label. If everything is editorial, nothing is editorial.

**The Short Copy Rule.** Headings should carry the meaning. Body copy should clarify, not repeat.

## 4. Elevation

The system uses a hybrid of tonal layering, fine borders, and soft ambient shadows. Most structure comes from background shifts and borders; shadows are reserved for report shells, CTA panels, and elevated service artifacts that need to feel handled and tangible.

### Shadow Vocabulary
- **Ambient Report Shadow** (`0 24px 70px rgba(22, 33, 30, 0.12)`): Use for report shells, major CTA panels, and meaningful elevated artifacts.
- **Founder Panel Shadow** (`0 14px 40px rgba(22, 33, 30, 0.08)`): Use for calm content panels that need mild separation without drama.
- **Button Shadow** (`0 14px 30px rgba(23, 63, 53, 0.22)`): Use only on primary CTAs.

### Named Rules

**The Artifact Rule.** Elevation belongs to things that represent work product: reports, audits, CTAs, and important service panels. Routine layout does not need to float.

## 5. Components

### Buttons

- **Shape:** Disciplined square softness (8px radius), never fully rounded except for tiny status pills.
- **Primary:** Workshop Pine background with Paper Warmth text, bold DM Sans, 48px minimum height, and compact horizontal padding.
- **Hover / Focus:** Primary buttons shift to Deep Pine and lift by 1px. Focus must be visible and high contrast.
- **Secondary:** Transparent background, Workshop Pine text, Pencil Line border, Sage Surface hover.

### Chips

- **Style:** Small uppercase labels use DM Sans at label scale, usually with a Brass Note dot or Sage Surface background.
- **State:** Chips should clarify context or status. Do not use large clusters of decorative pills.

### Cards / Containers

- **Corner Style:** 8px radius across cards, report shells, FAQ items, pricing cards, and CTA containers.
- **Background:** Paper Warmth for primary surfaces; Sage Surface and Mist Surface for secondary report pieces.
- **Shadow Strategy:** Use shadows only for high-value artifacts and conversion panels.
- **Border:** Pencil Line borders define most containers.
- **Internal Padding:** 24px to 34px for major panels; 14px to 18px for metric and proof tiles.

### Inputs / Fields

Inputs are not yet prominent in the current site. When added, they should use Paper Warmth or Sage Surface backgrounds, Pencil Line borders, 8px corners, 48px minimum height, and a Workshop Pine focus ring. Error states should use Brick Warmth with text labels, not color alone.

### Navigation

Navigation is sticky, translucent Ledger Cream with a fine Pencil Line divider. Brand marks use compact square monograms on Workshop Pine. Desktop links are quiet Muted Slate Green until hover or active state. Mobile navigation opens as a Paper Warmth panel with the same 8px radius and clear tap targets.

### Report Preview

The report preview is the signature component. It uses a Paper Warmth shell, ambient report shadow, metric tiles, chart line, and a compact recommendation callout. It should feel like a useful work artifact, not a fake SaaS dashboard.

### Pricing Cards

Pricing cards are content units, not decorative tiles. The featured tier may use a stronger Workshop Pine border and shadow, but the layout should remain calm. Do not add flashy badges, gradient ribbons, or excessive urgency.

## 6. Do's and Don'ts

### Do:

- **Do** make Pine Tree Analytics feel like a Portland-based, analyst-led service.
- **Do** use report previews, review examples, and operational recommendations to show the signal.
- **Do** keep GuestSignal hospitality-specific while allowing the homepage to support broader analytics buyers.
- **Do** use Workshop Pine for primary action and brand anchoring.
- **Do** keep Brass Note scarce and meaningful.
- **Do** respect reduced motion and avoid color-only meaning in report, pricing, or status UI.

### Don't:

- **Don't** make this feel like a SaaS product. Avoid generic dashboard theater, inflated feature grids, fake platform screenshots, startup-style metric hero sections, and language that implies the client is buying software to manage themselves.
- **Don't** make this feel like a generic digital marketing website. Avoid vague growth claims, social media agency language, stock-photo polish, funnel jargon, and broad promises that could fit any local agency.
- **Don't** make this feel like an agency. Avoid large-team positioning, abstract service menus, generic case-study tropes, and brand language that hides the analyst-led nature of the work.
- **Don't** use side-stripe borders, gradient text, decorative glassmorphism, or identical card grids.
- **Don't** overuse rounded pills. The system's default shape is the disciplined 8px surface.
- **Don't** let AI become the lead message. Human judgment, analyst leadership, and owner approval stay central.
