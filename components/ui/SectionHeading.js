import Container from "@/components/ui/Container";

/**
 * Section header with an eyebrow label, title and optional description.
 * `tone="dark"` is used on steel-navy panels.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
}) {
  const isDark = tone === "dark";

  return (
    <Container className={align === "center" ? "text-center" : ""}>
      <div className={align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        {eyebrow ? (
          <p
            className={`flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em] uppercase ${
              align === "center" ? "justify-center" : ""
            } ${isDark ? "text-accent" : "text-accent-dark"}`}
          >
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
        ) : null}

        <h2
          className={`mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl ${
            isDark ? "text-white" : "text-brand"
          }`}
        >
          {title}
        </h2>

        {description ? (
          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? "text-slate-300" : "text-brand-muted"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </Container>
  );
}
