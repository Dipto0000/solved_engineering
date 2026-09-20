import { Clock, Mail, MapPin, Phone, Wrench } from "lucide-react";

import Container from "@/components/ui/Container";
import { services } from "@/lib/services";
import { navLinks, site } from "@/lib/site";

/** Site footer with service links and contact details. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-dark text-slate-300">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />

      <Container className="relative py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 lg:max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid size-10 place-items-center rounded-lg bg-accent">
                <Wrench className="size-5 text-brand-dark" aria-hidden="true" />
              </span>
              <span className="text-base font-bold tracking-tight text-white">
                {site.name}
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed">{site.description}</p>

            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-accent"
              >
                <Phone className="size-4 text-accent" aria-hidden="true" />
                {site.contact.phoneDisplay}
              </a>
              <a
                href={site.contact.emailHref}
                className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-accent"
              >
                <Mail className="size-4 text-accent" aria-hidden="true" />
                {site.contact.email}
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="size-4 text-accent" aria-hidden="true" />
                {site.contact.address}
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href="#services"
                    className="transition-colors hover:text-accent"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate + hours */}
          <div>
            <h2 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 flex items-start gap-2.5 text-sm">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              {site.contact.hours}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono tracking-wide text-slate-400 uppercase">
            Founder-led · {site.contact.address}
          </p>
        </div>

        <div className="mt-3 flex flex-col items-start justify-between gap-3 text-xs sm:flex-row sm:items-center">
          <p className="text-slate-400">
            Made by{" "}
            <a
              href="mailto:dipto2041@gmail.com"
              className="font-semibold text-slate-200 transition-colors hover:text-accent"
            >
              Shahriar Ahmed Dipto
            </a>
          </p>
          <p className="text-slate-400">
            Need a similar website?{" "}
            <a
              href="mailto:dipto2041@gmail.com"
              className="font-semibold text-slate-200 transition-colors hover:text-accent"
            >
              dipto2041@gmail.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
