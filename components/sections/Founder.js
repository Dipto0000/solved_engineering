import Image from "next/image";
import { BadgeCheck, CheckCircle2, MessageCircle, Phone, Quote } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const TRUST_BADGES = [
  { label: "Verified crew", icon: BadgeCheck },
  { label: "Insured works", icon: CheckCircle2 },
  { label: "On-time handover", icon: CheckCircle2 },
];

/** Dedicated card introducing the founder and the trust promises. */
export default function Founder() {
  const { founder } = site;

  return (
    <section id="founder" className="bg-white py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Leadership & trust"
        title="The person accountable for your project"
        description="Solved Engineering is founder-led — every job is surveyed, priced and checked by the same engineer who signs it off."
      />

      <Container className="mt-10 sm:mt-12">
        <div className="relative overflow-hidden rounded-2xl bg-brand text-white shadow-card">
          <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
          <div
            className="absolute -bottom-24 -left-16 size-80 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:p-12">
            {/* Founder identity + quote */}
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/roman_kakku_image.jpg"
                  alt={founder.name}
                  width={64}
                  height={64}
                  className="size-16 shrink-0 rounded-xl object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs tracking-[0.18em] text-accent uppercase">
                    {founder.role}
                  </p>
                </div>
              </div>

              <blockquote className="mt-7 border-l-2 border-accent pl-5">
                <Quote className="size-6 text-accent" aria-hidden="true" />
                <p className="mt-3 text-lg leading-relaxed text-slate-200 italic">
                  {founder.quote}
                </p>
              </blockquote>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-400">
                {founder.bio}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href={site.contact.phoneHref} variant="accent" size="md">
                  <Phone className="size-4" aria-hidden="true" />
                  Talk to the founder
                </Button>
                <Button
                  href={site.contact.whatsappHref}
                  variant="ghostLight"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Message on WhatsApp
                </Button>
              </div>
            </div>

            {/* Trust panel */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                Our commitment
              </p>

              <ul className="mt-5 space-y-3.5">
                {site.guarantees.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-slate-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="mt-7 grid grid-cols-1 gap-2 border-t border-white/10 pt-6 sm:grid-cols-3">
                {TRUST_BADGES.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-xs font-medium text-slate-300"
                  >
                    <Icon className="size-4 text-accent" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
