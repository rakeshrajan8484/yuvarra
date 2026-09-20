import { Closer } from "@/components/Closer";
import { MediaIndex } from "@/components/MediaIndex";
import { PageBanner } from "@/components/PageBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media - Yuvarra",
};

export default function MediaPage() {
  return (
    <>
      <PageBanner
        title="Media"
        lede="Announcements, perspectives and coverage from Yuvarra and our partners."
        image="/images/centres.jpg"
      />
      <MediaIndex />
      <Closer />
    </>
  );
}
