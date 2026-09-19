/**
 * Shared call-to-action element.
 *
 * Renders an <a> when `href` is supplied, otherwise a <button>, so the same
 * visual language works for links, form submits and tel:/wa.me actions.
 */
const VARIANTS = {
  accent:
    "bg-accent text-brand-dark shadow-cta hover:bg-accent-dark hover:text-white",
  brand: "bg-brand text-white hover:bg-brand-light",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1DA851]",
  outline:
    "border border-brand/20 bg-white text-brand hover:border-brand/40 hover:bg-brand/5",
  ghostLight:
    "border border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/50 hover:bg-white/10",
};

const SIZES = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-6 text-base",
};

export default function Button({
  href,
  variant = "accent",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = [
    "inline-flex select-none items-center justify-center gap-2 rounded-lg font-semibold",
    "transition-[background-color,border-color,color,transform] duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    "active:scale-[0.98]",
    VARIANTS[variant] ?? VARIANTS.accent,
    SIZES[size] ?? SIZES.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
