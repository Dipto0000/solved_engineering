/**
 * Single source of truth for business details.
 *
 * ⚠️  Replace the placeholder phone/email/address below with the real
 *     business details — every CTA, link and tel:/wa.me URL derives from here.
 */

const phoneDisplay = "+65 9347 0547";
/** Digits only, in international format (no +, no spaces) for tel: / wa.me. */
const phoneRaw = "6593470547";

/** WhatsApp deep-link base — append `?text=` for a prefilled message. */
export const whatsappBase = `https://wa.me/${phoneRaw}`;

export const site = {
  name: "Solved Engineering",
  shortName: "Solved",
  tagline: "One team for every repair, finish and renovation.",
  description:
    "Solved Engineering delivers plumbing, painting, waterproofing, electrical, CCTV, tiling and full renovation services under one accountable team.",

  contact: {
    phoneDisplay,
    phoneHref: `tel:+${phoneRaw}`,
    whatsappHref: `${whatsappBase}?text=${encodeURIComponent(
      "Hello Solved Engineering, I'd like a free quote for:",
    )}`,
    email: "mh724964@gmail.com",
    emailHref: "mailto:mh724964@gmail.com",
    address: "Singapore",
    hours: "Always available · 24/7",
  },

  founder: {
    name: "Roman",
    role: "Founder & CEO",
    initials: "MR",
    quote:
      "I started Solved Engineering because property owners kept getting passed between contractors. We take one call, own the whole scope, and finish it properly.",
    bio: "With hands-on experience across wet trades, epoxy systems and electrical works, Roman leads every project from site survey to final handover.",
    experienceYears: 12,
  },

  /** Headline trust metrics shown in the hero. */
  stats: [
    { value: "12+", label: "Years on site" },
    { value: "850+", label: "Jobs completed" },
    { value: "16", label: "Services in-house" },
    { value: "24h", label: "Response time" },
  ],

  guarantees: [
    "Free on-site survey and written quotation",
    "Fixed pricing — no surprise extras",
    "Materials sourced from verified suppliers",
    "Workmanship warranty on every handover",
  ],
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "Leadership", href: "#founder" },
  { label: "Contact", href: "#contact" },
];
