import { ContactForm } from "@/components/ContactForm";
import { OfficeCarousel } from "@/components/OfficeCarousel";
import { PageBanner } from "@/components/PageBanner";
import { contactPage } from "@/lib/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Yuvarra",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title={contactPage.title}
        lede={contactPage.lede}
        image="/images/lobby.jpg"
        crumb="Contact"
      />
      <div className="bg-surface">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-12">
          <section className="border-b border-hairline px-5 py-16 lg:col-span-7 lg:border-b-0 lg:border-r lg:px-10 lg:py-24">
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
              {contactPage.formTitle}
            </h2>
            <p className="mt-4 max-w-[54ch] text-[17px] leading-7 text-muted">
              {contactPage.formLede}
            </p>
            <div className="mt-14">
              <ContactForm />
            </div>
          </section>
          <section className="px-5 py-16 lg:col-span-5 lg:px-10 lg:py-24">
            <h2 className="font-display text-3xl tracking-[-0.03em] text-ink md:text-4xl">
              {contactPage.officesTitle}
            </h2>
            <div className="mt-14">
              <OfficeCarousel />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
