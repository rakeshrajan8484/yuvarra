import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { mediaItems } from "@/lib/pages";

export function NewsBand() {
  const items = mediaItems.slice(0, 3);

  return (
    <section className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-ink">
            Media
          </h2>
          <Link
            href="/media"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-sage hover:text-ink"
          >
            All media
            <ArrowRight size={16} weight="regular" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="grid gap-3 py-7 transition-colors hover:bg-stone md:grid-cols-12 md:gap-8 md:px-2"
              >
                <p className="text-sm text-muted md:col-span-3">
                  {item.type}
                  <span className="block text-ink">{item.date}</span>
                </p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-xl leading-snug tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[62ch] text-[16px] leading-7 text-muted">
                    {item.lede}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
