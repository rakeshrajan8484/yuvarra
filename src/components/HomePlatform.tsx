import Image from "next/image";
import { copy } from "@/lib/site";

export function HomePlatform() {
  return (
    <section className="bg-stone">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl font-medium leading-[1.15] tracking-[-0.03em] text-ink md:text-4xl">
            {copy.platformHeadline}
          </h2>
          <p className="mt-5 max-w-[54ch] text-[17px] leading-7 text-muted">
            {copy.platformLead}
          </p>
          <p className="mt-4 max-w-[54ch] text-[17px] leading-7 text-muted">
            {copy.platformBody}
          </p>
          <figure className="relative mt-10 hidden aspect-[4/3] lg:block">
            <Image
              src="/images/hero-desk.jpg"
              alt="A leather folio and papers on a desk overlooking Hong Kong harbour"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </figure>
        </div>

        <div className="lg:col-span-7 lg:pt-2">
          <h3 className="font-display text-2xl tracking-[-0.02em] text-ink">
            {copy.platformLabel}
          </h3>
          <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
            {copy.capabilities.map((item) => (
              <li key={item.title} className="grid gap-3 py-7 md:grid-cols-12 md:gap-8">
                <h4 className="font-display text-lg leading-snug tracking-[-0.02em] text-ink md:col-span-5">
                  {item.title}
                </h4>
                <p className="text-[16px] leading-7 text-muted md:col-span-7">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
