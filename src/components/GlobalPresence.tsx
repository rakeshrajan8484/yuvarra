import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { copy } from "@/lib/site";

export function GlobalPresence() {
  return (
    <section className="border-t border-hairline bg-stone">
      <div className="mx-auto grid max-w-[1400px] lg:min-h-[40rem] lg:grid-cols-12">
        <figure className="relative min-h-[280px] lg:col-span-5 lg:min-h-full">
          <Image
            src="/images/centres.jpg"
            alt="A quiet financial-district street after rain"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </figure>
        <div className="flex flex-col justify-center px-5 py-20 lg:col-span-7 lg:px-10 lg:py-24">
          <h2 className="font-display max-w-[16ch] text-3xl font-medium leading-[1.15] tracking-[-0.03em] text-ink md:text-4xl lg:text-[2.75rem]">
            {copy.globalHeadline}
          </h2>
          <p className="mt-6 max-w-[65ch] text-[17px] leading-7 text-muted">
            {copy.globalBody}
          </p>
          <div className="mt-8">
            <Button href="/about#global-presence" variant="secondary">
              {copy.globalCta}
              <ArrowRight size={16} weight="regular" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
