/**
 * The seven core services offered by Solved Engineering.
 *
 * Data only (no icon components) so this module stays safe to import from
 * client components such as the lead form's service dropdown.
 * Icons are mapped by `slug` inside `components/sections/Services.js`.
 */
export const services = [
  {
    slug: "plumbing",
    title: "Plumbing",
    description:
      "Leak tracing, pipe replacement, bathroom fittings and water line installation with pressure-tested finishes.",
    points: ["Leak repair", "Fixture fitting", "Drainage"],
  },
  {
    slug: "painting",
    title: "Painting",
    description:
      "Interior and exterior painting with proper surface prep, primer systems and clean, sharp cut lines.",
    points: ["Interior", "Exterior", "Texture coats"],
  },
  {
    slug: "flooring",
    title: "Flooring",
    description:
      "Tiles, vinyl, laminate and concrete floors laid flat, level and grouted to last through heavy footfall.",
    points: ["Tile laying", "Vinyl & laminate", "Leveling"],
  },
  {
    slug: "epoxy-pointing",
    title: "Epoxy Pointing",
    description:
      "Seamless epoxy and grout pointing for floors, walls and joints — sealed, chemical resistant and easy to clean.",
    points: ["Epoxy floors", "Tile grouting", "Joint sealing"],
  },
  {
    slug: "electrical",
    title: "Electrical",
    description:
      "Wiring, DB boards, lighting layouts and fault finding carried out to code by qualified electricians.",
    points: ["Rewiring", "Lighting", "Fault finding"],
  },
  {
    slug: "cleaning",
    title: "Cleaning",
    description:
      "Post-construction deep cleaning, floor machine scrubbing and handover-ready detailing for any property.",
    points: ["Post-build", "Deep clean", "Handover prep"],
  },
  {
    slug: "renovation",
    title: "Renovation",
    description:
      "Full-scope remodelling — we coordinate every trade, manage the timeline and hand over one clean invoice.",
    points: ["Full remodel", "Site supervision", "Turnkey"],
  },
];

/** Option list used by the lead form's service dropdown. */
export const serviceOptions = [
  ...services.map(({ slug, title }) => ({ value: slug, label: title })),
  { value: "other", label: "Something else / Not sure yet" },
];

/** Resolve a human-readable label from a service slug. */
export function getServiceLabel(slug) {
  const option = serviceOptions.find((item) => item.value === slug);
  return option ? option.label : "General enquiry";
}
