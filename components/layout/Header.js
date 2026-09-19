"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Wrench, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";

/** Sticky site header with the call CTA and a mobile navigation drawer. */
export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hazard-stripes h-1" aria-hidden="true" />

      <div className="border-b border-hairline bg-white/90 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="grid size-10 place-items-center rounded-lg bg-brand">
              <Wrench className="size-5 text-accent" aria-hidden="true" />
            </span>
            <span className="leading-none">
              <span className="block text-[15px] font-bold tracking-tight text-brand">
                {site.name}
              </span>
              <span className="mt-1 block font-mono text-[10px] tracking-[0.18em] text-brand-muted uppercase">
                Build · Fix · Finish
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded text-sm font-medium text-brand-light transition-colors hover:text-accent-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Button href={site.contact.phoneHref} variant="accent" size="sm">
              <Phone className="size-4" aria-hidden="true" />
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">Call Now</span>
            </Button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-lg border border-hairline text-brand transition-colors hover:bg-brand/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile drawer */}
      {open ? (
        <div
          id="mobile-menu"
          className="border-b border-hairline bg-white shadow-card lg:hidden"
        >
          <Container className="py-4">
            <nav className="flex flex-col" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-hairline py-3.5 text-base font-medium text-brand last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button href={site.contact.phoneHref} variant="brand" size="md">
                <Phone className="size-4" aria-hidden="true" />
                Call
              </Button>
              <Button
                href={site.contact.whatsappHref}
                variant="whatsapp"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
