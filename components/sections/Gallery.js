import Image from "next/image";
import { ArrowRight, ImageIcon } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryItems } from "@/lib/gallery";
import { site } from "@/lib/site";

/**
 * Masonry-style showcase grid. The `span` values in `lib/gallery.js` let the
 * first and fifth tiles anchor a 4-column desktop layout.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="bg-canvas py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Our work"
        title="Renovation and epoxy finishes, delivered"
        description="A look at recent interior fit-outs, seamless epoxy floors and handover-ready cleaning across residential and commercial sites."
      />

      <Container className="mt-10 sm:mt-12">
        <div className="grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:auto-rows-[200px] lg:grid-cols-4 lg:gap-4">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden rounded-xl border border-hairline bg-brand ${item.span}`}
            >
              <Image
                src={item.src}
                alt={`${item.title} — ${item.category} by ${site.name}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/10 to-transparent opacity-90"
                aria-hidden="true"
              />

              <figcaption className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                <span className="inline-block rounded-md bg-accent px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-brand-dark uppercase">
                  {item.category}
                </span>
                <p className="mt-2 text-sm font-semibold text-white sm:text-base">
                  {item.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Honest caption + conversion nudge */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-hairline bg-white p-5 shadow-card sm:flex-row sm:items-center">
          <p className="flex items-start gap-3 text-sm text-brand-muted">
            <ImageIcon className="mt-0.5 size-5 shrink-0 text-accent-dark" aria-hidden="true" />
            Representative finishes from our portfolio. Request a site visit for
            photos of completed projects near you.
          </p>
          <Button href="#contact" variant="brand" size="md" className="shrink-0">
            Book a site visit
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
