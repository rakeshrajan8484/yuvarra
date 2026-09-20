import { ArticleLayout } from "@/components/ArticleLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Yuvarra launches to bring independent premium financing to international wealth markets",
};

export default function AnnouncementPage() {
  return (
    <ArticleLayout
      kicker="Press Release · 2 June 2026"
      title="Yuvarra launches to bring independent premium financing to international wealth markets"
      lede="Licensed independent lender offers a standalone premium financing solution, providing institutional-grade funding without AUM requirements or asset pledges."
    >
      <p>
        Hong Kong, 2 June 2026: Yuvarra, a licensed independent lender, today
        announces its launch, bringing a new model for life insurance premium
        financing to the wealth market. In cooperation with LifeDirect and
        drawing on expertise from Apeiron Group, Yuvarra offers wealth managers,
        financial advisers and their high-net-worth clients a way to fund life
        insurance independently.
      </p>
      <p>
        Loans are secured against the life insurance policy itself, not the
        client&apos;s investment portfolio or other assets. Without any AUM
        requirements or account openings, financing exists independently of the
        client&apos;s existing banking and investment arrangements.
      </p>
      <p>
        Yuvarra, a company incorporated in the Cayman Islands with operations in
        Hong Kong, is now open for business.
      </p>
    </ArticleLayout>
  );
}
