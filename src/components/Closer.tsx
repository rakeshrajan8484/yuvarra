import { Button } from "@/components/Button";
import { contact, copy } from "@/lib/site";

export function Closer() {
  return (
    <section className="bg-ink text-on-ink">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-7">
          <h2 className="font-display max-w-[16ch] text-3xl font-medium leading-[1.15] tracking-[-0.03em] md:text-5xl">
            {copy.closerHeadline}
          </h2>
          <p className="mt-6 max-w-[54ch] text-lg leading-8 text-on-ink-muted">
            {copy.closerBody}
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="inverse">
              {copy.startConversation}
            </Button>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
          <p className="font-display text-xl text-on-ink">Hong Kong</p>
          <p className="mt-4 text-[16px] leading-7 text-on-ink-muted">
            {contact.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-5">
            <a href={contact.phoneHref} className="text-on-ink hover:underline">
              {contact.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a href={contact.emailHref} className="text-on-ink hover:underline">
              {contact.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
