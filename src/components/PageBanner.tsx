import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function PageBanner({
  title,
  lede,
  image,
  crumb,
}: {
  title: string;
  lede?: string;
  image?: string;
  crumb?: string;
}) {
  return (
    <section className="border-b border-hairline bg-surface">
      <div
        className={`mx-auto grid max-w-[1400px] ${image ? "lg:grid-cols-12" : ""}`}
      >
        <div
          className={`flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 ${
            image ? "lg:col-span-7" : ""
          }`}
        >
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink">{crumb ?? title}</li>
            </ol>
          </nav>
          <Reveal>
            <h1 className="font-display mt-6 max-w-[22ch] text-4xl font-medium leading-[1.15] tracking-[-0.03em] text-ink md:text-5xl">
              {title}
            </h1>
          </Reveal>
          {lede ? (
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[62ch] text-lg leading-8 text-muted">
                {lede}
              </p>
            </Reveal>
          ) : null}
        </div>
        {image ? (
          <figure className="relative min-h-[200px] lg:col-span-5 lg:min-h-full">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </figure>
        ) : null}
      </div>
    </section>
  );
}
