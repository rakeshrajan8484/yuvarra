import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { insightsItems } from "@/lib/pages";

export function generateStaticParams() {
  return insightsItems.map((item) => ({
    slug: item.href.replace("/insights/", ""),
  }));
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = insightsItems.find((entry) => entry.href === `/insights/${slug}`);
  if (!item) notFound();

  return (
    <ArticleLayout kicker={item.date} title={item.title} lede={item.lede}>
      <p>{item.lede}</p>
    </ArticleLayout>
  );
}
