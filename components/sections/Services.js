"use client";

import { useState } from "react";
import {
  ArrowRight,
  Cctv,
  ChevronDown,
  ChevronUp,
  DoorOpen,
  Droplets,
  Grid3x3,
  Hammer,
  House,
  Layers,
  LayoutGrid,
  PaintRoller,
  PanelTop,
  Phone,
  Pickaxe,
  SprayCan,
  Umbrella,
  Wrench,
  Zap,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

/** Icons are mapped by slug so `lib/services.js` stays serializable. */
const ICONS = {
  plumbing: Wrench,
  painting: PaintRoller,
  flooring: Grid3x3,
  "epoxy-pointing": Droplets,
  electrical: Zap,
  cleaning: SprayCan,
  renovation: Hammer,
  "cctv-installation": Cctv,
  roofing: House,
  waterproofing: Umbrella,
  plastering: Layers,
  "door-repair": DoorOpen,
  "tiling-vinyl": LayoutGrid,
  "ceiling-partition": PanelTop,
  hacking: Pickaxe,
};

/** Grid of the fifteen core service lines — shows six until expanded. */
export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="bg-canvas py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="What we do"
        title="Fifteen service lines, one point of contact"
        description="No chasing separate contractors. Tell us the scope and we handle the trades, the materials and the timeline end to end."
      />

      <Container className="mt-10 sm:mt-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => {
            const Icon = ICONS[service.slug] ?? Wrench;

            return (
              <article
                key={service.slug}
                className="group flex flex-col rounded-xl border border-hairline bg-white p-6 shadow-card transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="grid size-11 place-items-center rounded-lg bg-accent-soft text-accent-dark transition-colors duration-200 group-hover:bg-accent group-hover:text-brand-dark">
                  <Icon className="size-5" aria-hidden="true" />
                </span>

                <h3 className="mt-5 text-lg font-bold tracking-tight text-brand">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {service.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-hairline pt-4">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-md bg-canvas px-2 py-1 font-mono text-[11px] tracking-wide text-brand-light uppercase"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}

          {/* Closes the grid with a conversion card */}
          <article className="flex flex-col justify-between rounded-xl border border-brand bg-brand p-6 text-white shadow-card">
            <div>
              <span className="grid size-11 place-items-center rounded-lg bg-white/10">
                <Phone className="size-5 text-accent" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">
                Not sure which you need?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Describe the problem — we&apos;ll survey the site and recommend
                the most cost-effective scope of work.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <Button href={site.contact.phoneHref} variant="accent" size="md">
                <Phone className="size-4" aria-hidden="true" />
                Call for advice
              </Button>
              <Button href="#contact" variant="ghostLight" size="md">
                Request a quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </article>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => setShowAll((value) => !value)}
            variant="outline"
            size="md"
            aria-expanded={showAll}
          >
            {showAll ? (
              <>
                Show less
                <ChevronUp className="size-4" aria-hidden="true" />
              </>
            ) : (
              <>
                Show all {services.length} services
                <ChevronDown className="size-4" aria-hidden="true" />
              </>
            )}
          </Button>
        </div>
      </Container>
    </section>
  );
}
