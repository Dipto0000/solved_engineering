"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getServiceLabel, serviceOptions } from "@/lib/services";
import { site, whatsappBase } from "@/lib/site";

const EMPTY_FORM = { name: "", phone: "", service: "", details: "" };

/** Contact channels rendered beside the form. */
function buildChannels() {
  return [
    {
      key: "phone",
      icon: Phone,
      label: "Call us",
      value: site.contact.phoneDisplay,
      href: site.contact.phoneHref,
    },
    {
      key: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat instantly",
      href: site.contact.whatsappHref,
      external: true,
    },
    {
      key: "email",
      icon: Mail,
      label: "Email",
      value: site.contact.email,
      href: site.contact.emailHref,
    },
    {
      key: "hours",
      icon: Clock,
      label: "Working hours",
      value: site.contact.hours,
    },
  ];
}

/** Lead capture form with a service dropdown. */
export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  }

  function validate() {
    const nextErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    // Accept digits, spaces, dashes, parentheses and a leading +.
    if (!/^\+?[\d\s\-()]{7,}$/.test(form.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.service) {
      nextErrors.service = "Please select a service.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    /*
     * There is no backend yet, so the lead is handed straight to WhatsApp with
     * the details prefilled — the enquiry reaches the team immediately.
     * Swap this block for a fetch() to an API route or form service later.
     */
    const message = [
      `New quote request — ${site.name}`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service: ${getServiceLabel(form.service)}`,
      form.details.trim() ? `Details: ${form.details.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${whatsappBase}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setSent(true);
  }

  function resetForm() {
    setForm(EMPTY_FORM);
    setErrors({});
    setSent(false);
  }

  const channels = buildChannels();

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Get in touch"
        title="Get a free quote within 24 hours"
        description="Send us the scope and we'll arrange a site survey, then follow up with a written, fixed-price quotation."
      />

      <Container className="mt-10 sm:mt-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Contact channels */}
          <div>
            <ul className="space-y-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                const content = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent-dark">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] tracking-[0.16em] text-brand-muted uppercase">
                        {channel.label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-semibold text-brand">
                        {channel.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={channel.key}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        {...(channel.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex items-center gap-4 rounded-xl border border-hairline bg-canvas p-4 transition-colors hover:border-accent/40 hover:bg-accent-soft/40"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-xl border border-hairline bg-canvas p-4">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="mt-5 flex items-center gap-2 text-sm text-brand-muted">
              <MapPin className="size-4 shrink-0 text-accent-dark" aria-hidden="true" />
              Serving {site.contact.address} and surrounding areas.
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-hairline bg-canvas p-6 shadow-card sm:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-start justify-center py-6">
                <span className="grid size-12 place-items-center rounded-xl bg-accent text-brand-dark">
                  <CheckCircle2 className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-brand">
                  Request ready to send
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  Thanks {form.name.split(" ")[0]} — your request for{" "}
                  <strong className="font-semibold text-brand">
                    {getServiceLabel(form.service)}
                  </strong>{" "}
                  has been prepared in WhatsApp. Press send there and our team
                  will reply within 24 hours. Prefer to talk now?
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={site.contact.phoneHref} variant="accent" size="md">
                    <Phone className="size-4" aria-hidden="true" />
                    Call {site.contact.phoneDisplay}
                  </Button>
                  <Button
                    onClick={resetForm}
                    variant="outline"
                    size="md"
                    className="cursor-pointer"
                  >
                    Send another request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-xl font-bold tracking-tight text-brand">
                  Request your free quote
                </h3>
                <p className="mt-1.5 text-sm text-brand-muted">
                  Two minutes to fill in. No obligation.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Full name"
                    error={errors.name}
                    className="sm:col-span-1"
                  >
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Mahmudul Hasan"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      className={inputClass(errors.name)}
                    />
                  </Field>

                  <Field
                    id="phone"
                    label="Phone number"
                    error={errors.phone}
                    className="sm:col-span-1"
                  >
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+880 1700 000000"
                      value={form.phone}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phone)}
                      className={inputClass(errors.phone)}
                    />
                  </Field>

                  <Field
                    id="service"
                    label="Service needed"
                    error={errors.service}
                    className="sm:col-span-2"
                  >
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.service)}
                        className={`${inputClass(errors.service)} cursor-pointer appearance-none pr-10`}
                      >
                        <option value="">Select a service…</option>
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-brand-muted"
                        aria-hidden="true"
                      />
                    </div>
                  </Field>

                  <Field
                    id="details"
                    label={
                      <>
                        Project details{" "}
                        <span className="font-normal text-brand-muted">
                          (optional)
                        </span>
                      </>
                    }
                    className="sm:col-span-2"
                  >
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      placeholder="Property type, area size, what needs doing, preferred start date…"
                      value={form.details}
                      onChange={handleChange}
                      className={`${inputClass(false)} resize-y`}
                    />
                  </Field>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="mt-6 w-full cursor-pointer"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Request Free Quote
                </Button>

                <p className="mt-3 text-center text-xs leading-relaxed text-brand-muted">
                  Your details stay private and are only used to prepare your
                  quotation.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Shared input styling with an error variant. */
function inputClass(hasError) {
  return [
    "w-full rounded-lg border bg-white px-3.5 py-3 text-sm text-brand",
    "placeholder:text-brand-muted/70",
    "transition-colors focus:outline-none focus:ring-2",
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-500/25"
      : "border-hairline focus:border-accent focus:ring-accent/30",
  ].join(" ");
}

/** Label + control + inline error message. */
function Field({ id, label, error, className = "", children }) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-brand"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
