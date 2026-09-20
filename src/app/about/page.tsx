import { AboutIndex } from "@/components/AboutIndex";
import { Closer } from "@/components/Closer";
import { PageBanner } from "@/components/PageBanner";
import { about } from "@/lib/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Yuvarra",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title={about.title}
        lede={about.lede}
        image="/images/lobby.jpg"
        crumb="About"
      />
      <AboutIndex />
      <Closer />
    </>
  );
}
