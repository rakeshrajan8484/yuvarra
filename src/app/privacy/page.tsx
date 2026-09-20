import { PageBanner } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy - Yuvarra" };

export default function PrivacyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" crumb="Privacy Policy" />
      <Reveal className="mx-auto max-w-[72ch] px-5 py-16 text-[17px] leading-7 text-muted lg:px-10">
        <p>
          This page will carry Yuvarra&apos;s privacy policy in full. For
          current terms, contact info@yuvarra.com.
        </p>
      </Reveal>
    </>
  );
}
