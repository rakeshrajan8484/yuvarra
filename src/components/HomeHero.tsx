import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { copy } from "@/lib/site";

export function HomeHero() {
  return (
    <>
      <section className="grid bg-surface lg:min-h-[calc(100dvh-var(--chrome))] lg:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-16 lg:col-span-6 lg:px-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))] lg:py-20">
          <Reveal>
            <h1 className="font-display pb-1 text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-ink md:text-5xl lg:text-[3.15rem] lg:leading-[1.1]">
              Sophisticated Lending.
              <span className="block">Seamlessly Delivered.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[42ch] text-lg leading-8 text-muted">
              {copy.heroSubhead}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">{copy.connect}</Button>
              <Button href="/what-we-do" variant="secondary">
                Services
              </Button>
            </div>
          </Reveal>
        </div>
        <figure className="relative min-h-[280px] lg:col-span-6 lg:h-full lg:min-h-[calc(100dvh-var(--chrome))]">
          <Image
            src="/images/hero-wide.jpg"
            alt="A private meeting room overlooking a financial district harbour"
            fill
            preload
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-center"
          />
        </figure>
      </section>

      <section className="bg-ink text-on-ink" aria-label="Jurisdictions">
        <ul className="mx-auto grid max-w-[1400px] sm:grid-cols-3">
          {copy.centres.map((centre, index) => (
            <li
              key={centre}
              className={`px-5 py-5 lg:px-10 lg:py-6 ${
                index > 0 ? "border-t border-white/10 sm:border-t-0 sm:border-l" : ""
              }`}
            >
              <p className="font-display text-xl tracking-[-0.02em] md:text-2xl">
                {centre}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
