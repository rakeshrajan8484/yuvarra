import { PageBanner } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Accessibility - Yuvarra" };

export default function AccessibilityPage() {
  return (
    <>
      <PageBanner title="Accessibility" />
      <Reveal className="mx-auto max-w-[72ch] px-5 py-16 text-[17px] leading-7 text-muted lg:px-10">
        <p>
          Yuvarra is committed to making this website usable. If you encounter a
          barrier, write to info@yuvarra.com.
        </p>
      </Reveal>
    </>
  );
}
