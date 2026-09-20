import Link from "next/link";
import { Closer } from "@/components/Closer";
import { Fundamentals } from "@/components/Fundamentals";
import { PageBanner } from "@/components/PageBanner";
import { insightsItems } from "@/lib/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights - Yuvarra",
};

export default function InsightsPage() {
  return (
    <>
      <PageBanner
        title="Insights"
        lede="Perspectives on premium financing, wealth transfer and the structures behind long-term liquidity planning."
        image="/images/hero-desk.jpg"
      />
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
        <h2 className="font-display text-2xl text-ink">Perspectives</h2>
        <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
          {insightsItems.map((item) => (
            <li key={item.href} className="py-8">
              <p className="text-sm text-muted">{item.date}</p>
              <Link href={item.href}>
                <h3 className="font-display mt-2 max-w-[28ch] text-2xl leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[62ch] text-[16px] leading-7 text-muted">
                  {item.lede}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Fundamentals />
      <Closer />
    </>
  );
}
