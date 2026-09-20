import { PageBanner } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions - Yuvarra" };

export default function TermsPage() {
  return (
    <>
      <PageBanner title="Terms & Conditions" />
      <Reveal className="mx-auto max-w-[72ch] px-5 py-16 text-[17px] leading-7 text-muted lg:px-10">
        <p>
          These Terms and Conditions constitute a legally binding agreement
          between you and Yuvarra Limited, a company incorporated in the Cayman
          Islands with operations in Hong Kong.
        </p>
      </Reveal>
    </>
  );
}
