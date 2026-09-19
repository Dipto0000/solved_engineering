import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock, Phone, ShieldCheck } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

/** Above-the-fold value proposition covering all seven service lines. */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-dark text-white">
      {/* Blueprint grid + amber glow for depth */}
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 -right-24 size-[32rem] rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Copy */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-wide text-slate-200 backdrop-blur">
              <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
              Multi-service engineering team · {site.contact.address}
            </p>

            <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
              Every trade your property needs,{" "}
              <span className="text-accent">under one accountable team.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              From a leaking pipe to a full renovation — we deliver plumbing,
              painting, flooring, epoxy pointing, electrical, cleaning and
              renovation work with fixed pricing and a single point of contact.
            </p>

            {/* All seven services at a glance */}
            <ul className="mt-7 flex flex-wrap gap-2">
              {services.map((service) => (
                <li
                  key={service.slug}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  <CheckCircle2
                    className="size-3.5 text-accent"
                    aria-hidden="true"
                  />
                  {service.title}
                </li>
              ))}
            </ul>

            {/* Primary actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.contact.phoneHref} variant="accent" size="lg">
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </Button>
              <Button href="#contact" variant="ghostLight" size="lg">
                Get a Free Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>

            <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <Clock className="size-4 text-accent" aria-hidden="true" />
              Free site survey · Written quotation within 24 hours
            </p>

            {/* Trust metrics */}
            <dl className="mt-9 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-white/10 pt-7 sm:grid-cols-4">
              {site.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-mono text-2xl font-bold text-accent">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs tracking-wide text-slate-400 uppercase">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Showcase image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=70"
                  alt="Solved Engineering crew finishing an on-site renovation project"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Floating proof card */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-brand-dark/85 p-3.5 backdrop-blur sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-xs">
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="hazard-stripes h-3 w-1.5 rounded-full" aria-hidden="true" />
                  Fixed price. Fixed deadline.
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  One invoice, one crew, no subcontractor runaround.
                </p>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -top-4 -left-2 hidden rounded-xl bg-accent px-4 py-3 text-brand-dark shadow-cta sm:block">
              <span className="block font-mono text-xl leading-none font-bold">
                {site.founder.experienceYears}+
              </span>
              <span className="mt-1 block text-[10px] font-semibold tracking-widest uppercase">
                Years experience
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
