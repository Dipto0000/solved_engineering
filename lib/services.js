/**
 * The sixteen core services offered by Solved Engineering.
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
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    description:
      "CCTV cameras, DVR/NVR setup and mobile viewing configured for homes, shops and offices.",
    points: ["Camera setup", "DVR / NVR", "Remote viewing"],
  },
  {
    slug: "roofing",
    title: "Roofing",
    description:
      "Roof leak repair, re-roofing and protective coatings built to stand up to heavy rain.",
    points: ["Leak repair", "Re-roofing", "Roof coating"],
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    description:
      "Bathroom, roof and wall waterproofing with tested membranes — no more seepage or damp patches.",
    points: ["Bathrooms", "Roofs", "Wall seepage"],
  },
  {
    slug: "plastering",
    title: "Plastering",
    description:
      "Smooth cement and gypsum plastering with neat edges, ready for paint or wallpaper.",
    points: ["Cement plaster", "Gypsum finish", "Patch repair"],
  },
  {
    slug: "door-repair",
    title: "Door Repair",
    description:
      "Door alignment, lock replacement, hinge repair and new door installation for rooms and main entrances.",
    points: ["Locks", "Hinges", "Installation"],
  },
  {
    slug: "tiling-vinyl",
    title: "Tiling & Vinyl",
    description:
      "Floor and wall tiles plus vinyl planks laid flat and level with clean grout lines.",
    points: ["Floor tiles", "Wall tiles", "Vinyl planks"],
  },
  {
    slug: "ceiling-partition",
    title: "Ceiling & Partition",
    description:
      "False ceilings, gypsum partitions and office dividers built fast with clean finishing.",
    points: ["False ceiling", "Gypsum partition", "Office dividers"],
  },
  {
    slug: "hacking",
    title: "Hacking & Demolition",
    description:
      "Controlled hacking, wall demolition and debris disposal to prepare your site for renovation.",
    points: ["Wall hacking", "Tile hacking", "Debris disposal"],
  },
  {
    slug: "metal-aluminium",
    title: "Metal & Aluminium Work",
    description:
      "Grilles, gates, aluminium windows and custom metal fabrication with neat welding and durable finishes.",
    points: ["Grilles & gates", "Alu windows", "Fabrication"],
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
