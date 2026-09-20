# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Next.js App Router, Tailwind v4, Motion (`motion/react`). Chosen in the approved landing-page plan for a greenfield marketing site that can later grow into About, Services, Media, Insights, and Contact.

## Users

Primary: independent wealth managers and life insurance advisors who need to offer premium finance without sending the client into a new banking relationship.

Secondary: private banks, family offices, and insurance carriers looking for a specialist lending partner. The landing page speaks to both, with advisors as the primary CTA and institutions as a secondary proof path.

## Product Purpose

Yuvarra is a licensed independent lender delivering institutional-grade life insurance premium financing for international high-net-worth markets. The marketing site must make the offer intelligible, earn trust, and convert a financial professional into a conversation via `/contact`.

Success for this surface: an advisor understands that Yuvarra finances life-insurance premiums independently of private-banking relationships, and can start that conversation without friction.

## Positioning

Yuvarra finances premiums as a standalone lender. Loans are secured against the life insurance policy itself. Financing does not require AUM migration, custody, deposits, or new bank accounts. That independence is the claim a neighboring private bank cannot truthfully copy.

Yuvarra is a Cayman-incorporated company with a licensed Hong Kong branch (Money Lender Licence No. 1739/2025), operating within the Apeiron Group ecosystem, in partnership with LifeDirect (AFCO Credit Corporation, a Truist subsidiary). Those facts exist on About, Media, and the launch release. They are not on the current homepage and must not be added while homepage copy is locked.

## Operating Context

Visitors review the site on laptops in daylight offices in Hong Kong, Singapore, and similar wealth centres. The site is a marketing surface, not an application portal. Primary action is inquiry (`Connect with Yuvarra` / `Start the Conversation` / contact form). Hong Kong money-lender advertising rules require a visible bilingual warning.

## Capabilities and Constraints

Confirmed on the live site:

- Homepage, About, Services (`/what-we-do`), Media, Insights, Contact, Privacy, Accessibility, Terms
- Contact: +852 3571 8324, info@yuvarra.com, 20F, Unit 18, Silver Fortune, 1 Wellington Street, Central, Hong Kong SAR
- Presence: Hong Kong, Cayman Islands, United States
- Nav labels: Home, About, Services, Media, Insights, Contact
- Services URL on the live site is `/what-we-do`; `/services` 404s

This pass builds the landing page only. Interior pages are stubs or out of scope until the landing layout is signed off.

Homepage wording is locked: do not rewrite headlines, body, CTA labels, nav labels, or footer legal copy. Do not invent testimonials, customers, rates, or statistics.

## Brand Commitments

- Name: Yuvarra
- Keep the existing logo and wordmark
- Keep every factual homepage string
- Replace the visual world (palette, type, photography, layout). Do not recreate the teal full-bleed stock-photo template
- Dual audience, advisors first
- Part of the Apeiron Group
- Bilingual Hong Kong money-lender warning must remain visible:
  - 忠告：借錢梗要還，咪俾錢中介
  - Warning: You have to repay your loans. Don't pay any intermediaries.

## Evidence on Hand

- Live site copy and IA at https://yuvarra.com/
- Launch announcement (2 June 2026) and press coverage (PR Newswire, Hubbis, Wealth Briefing Asia, Business Times)
- CEO quote from Larry Ikard and LifeDirect quote from Rene Stuifzand exist in media, not on the homepage
- No client logos, testimonials, or performance figures are approved for the homepage
- Logo to be extracted from the live site into `public/`

## Product Principles

- Prove independence without inventing proof the homepage does not already carry
- Advisors act first; institutions find jurisdiction and Apeiron in the later sections
- Legal and licensing language stays visible and unaltered
- No fabricated social proof
- Later pages inherit the landing chrome rather than inventing a second identity

## Accessibility & Inclusion

WCAG AA contrast on body and controls. Visible keyboard focus. `prefers-reduced-motion` honored. Hong Kong bilingual warning remains in both languages. Touch targets at least 44px.
