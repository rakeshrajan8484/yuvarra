import { Closer } from "@/components/Closer";
import { PageBanner } from "@/components/PageBanner";
import { ServicesIndex } from "@/components/ServicesIndex";
import { services } from "@/lib/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Yuvarra",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title={services.title}
        lede={services.lede}
        image="/images/hero-wide.jpg"
        crumb="Services"
      />
      <ServicesIndex />
      <Closer />
    </>
  );
}
