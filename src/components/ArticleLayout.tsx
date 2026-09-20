import { PageBanner } from "@/components/PageBanner";

export function ArticleLayout({
  kicker,
  title,
  lede,
  children,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <PageBanner title={title} lede={lede} crumb={kicker ?? "Article"} />
      <article className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="max-w-[72ch] space-y-4 text-[17px] leading-7 text-muted">
          {children}
        </div>
      </article>
    </>
  );
}
