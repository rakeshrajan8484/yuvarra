export const site = {
  name: "Yuvarra",
  title: "Yuvarra - Life Insurance Premium Financing",
  description:
    "Smart lending for life insurance advisors and their high-net-worth clients.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "Services" },
  { href: "/media", label: "Media" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;

export const contact = {
  phoneDisplay: "+852 3571 8324",
  phoneHref: "tel:+85235718324",
  email: "info@yuvarra.com",
  emailHref: "mailto:info@yuvarra.com",
  address: [
    "20F, Unit 18, Silver Fortune",
    "1 Wellington Street",
    "Central, Hong Kong SAR",
  ],
};

export const copy = {
  launchKicker: "LAUNCH",
  launchTitle: "Yuvarra is Live",
  launchBody:
    "Independent premium financing for international high-net-worth markets is now available.",
  launchCta: "Read the announcement",
  launchDismiss: "Maybe later",
  announcementHref: "/media/yuvarra-launches-independent-premium-financing",

  heroHeadline: "Sophisticated Lending. Seamlessly Delivered.",
  heroSubhead:
    "Smart lending for life insurance advisors and their high-net-worth clients.",
  connect: "Connect with Yuvarra",

  platformLabel: "Our Platform",
  platformHeadline: "Structure. Transparency. Discipline.",
  platformLead:
    "Yuvarra delivers premium financing for life insurance with institutional-grade clarity and control.",
  platformBody:
    "We work with financial advisors to create solutions for international high-net-worth clients without requiring asset movement or new banking requirements. Providing:",
  capabilities: [
    {
      title: "Centralized Coordination Across Borders",
      body: "A single platform coordinating clients, advisors, lenders, and insurers with clarity, governance, and control.",
    },
    {
      title: "Access to Diversified, Reliable Capital",
      body: "Multi-source financing capabilities designed to accommodate varying client profiles, policy structures, and jurisdictions.",
    },
    {
      title: "Program-Agnostic Support",
      body: "Independent oversight of proprietary and third-party financing programs, free from product bias or distribution pressure.",
    },
    {
      title: "Full Operational Oversight",
      body: "Structured involvement from assessment through servicing and ongoing review. Built for long-term sustainability over transaction velocity.",
    },
  ],

  globalLabel: "Global Capability",
  globalHeadline: "Positioned across key financial centres",
  centres: ["Hong Kong", "Cayman Islands", "United States"] as const,
  globalBody:
    "Our positioning across established financial jurisdictions enables coordinated structuring with local regulatory depth. Each presence is maintained to support cross-border lending frameworks, institutional governance requirements, and the ongoing oversight that complex premium finance arrangements demand. This deliberate geographic footprint allows us to navigate multi-jurisdictional complexity with consistency, ensuring that every engagement benefits from proximity to the markets, regulators, and counterparties that matter most.",
  globalCta: "Explore our global presence",

  closerHeadline: "Let's structure financing that lasts.",
  closerBody:
    "Whether you're a financial advisor, private bank, or family office seeking institutional-grade premium financing support, we're ready to listen.",
  startConversation: "Start the Conversation",

  footerBlurb:
    "A next-generation premium finance platform for international high-net-worth markets.",
  warningZh: "忠告：借錢梗要還，咪俾錢中介",
  warningEn:
    "Warning: You have to repay your loans. Don't pay any intermediaries.",
  apeiron: "Part of the Apeiron Group",
  copyright: "© 2026 Yuvarra. All rights reserved.",
};
