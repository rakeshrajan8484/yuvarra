import Link from "next/link";

const variants = {
  primary:
    "bg-ink text-on-ink hover:bg-sage active:translate-y-px",
  secondary:
    "border border-ink text-ink hover:bg-ink hover:text-on-ink active:translate-y-px",
  inverse:
    "bg-on-ink text-ink hover:bg-white active:translate-y-px",
  sage:
    "bg-sage text-white hover:bg-ink active:translate-y-px",
  ghost:
    "text-sage underline-offset-4 hover:text-ink hover:underline",
  ghostLight:
    "text-on-ink underline-offset-4 hover:underline",
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-[8px] px-5 py-3 text-sm font-medium tracking-[0.01em] transition-colors duration-200 ${variants[variant]} ${className}`;
  const external =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
