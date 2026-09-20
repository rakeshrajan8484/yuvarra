import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { mediaItems } from "@/lib/pages";

export function generateStaticParams() {
  return mediaItems
    .filter((item) => item.href !== "/media/yuvarra-launches-independent-premium-financing")
    .map((item) => ({ slug: item.href.replace("/media/", "") }));
}

export default async function MediaArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = mediaItems.find((entry) => entry.href === `/media/${slug}`);
  if (!item) notFound();

  return (
    <ArticleLayout
      kicker={`${item.type} · ${item.date}`}
      title={item.title}
      lede={item.lede}
    >
      <p>{item.lede}</p>
    </ArticleLayout>
  );
}
