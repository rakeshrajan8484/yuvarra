"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { contactPage } from "@/lib/pages";
import { contact } from "@/lib/site";

const identityField =
  "w-full border-0 bg-transparent px-0 font-display text-[1.85rem] leading-[1.15] tracking-[-0.03em] text-ink outline-none md:text-[2.15rem]";

function FocusRule({ active }: { active: boolean }) {
  const reduceMotion = useReducedMotion() === true;
  return (
    <span className="relative mt-4 block h-px w-full bg-hairline" aria-hidden="true">
      <motion.span
        className="absolute inset-0 origin-left bg-ink"
        initial={false}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 420, damping: 34, mass: 0.7 }
        }
      />
    </span>
  );
}

export function ContactForm() {
  const reduceMotion = useReducedMotion() === true;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focus, setFocus] = useState<"name" | "email" | "message" | null>(null);
  const [sent, setSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const ready = email.trim().length > 0 && message.trim().length > 0;

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      setEmailError("Email is needed so we can reply.");
      return;
    }
    setEmailError("");
    const subject = encodeURIComponent(
      `Inquiry from ${name.trim() || "Yuvarra website"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.assign(
      `mailto:info@yuvarra.com?subject=${subject}&body=${body}`,
    );
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.p
          key="sent"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[54ch] text-[17px] leading-7 text-muted"
        >
          Your email client should open. You can also write to{" "}
          <a
            href={contact.emailHref}
            className="text-ink underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
          .
        </motion.p>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          exit={reduceMotion ? undefined : { opacity: 0 }}
        >
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-12">
            <div>
              <label
                htmlFor="name"
                className={`text-sm ${focus === "name" ? "text-ink" : "text-muted"}`}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={name}
                onFocus={() => setFocus("name")}
                onBlur={() => setFocus(null)}
                onChange={(event) => setName(event.target.value)}
                className={`${identityField} mt-3`}
              />
              <FocusRule active={focus === "name"} />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`text-sm ${focus === "email" ? "text-ink" : "text-muted"}`}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                aria-invalid={emailError ? true : undefined}
                aria-describedby={emailError ? "email-error" : undefined}
                onFocus={() => setFocus("email")}
                onBlur={() => setFocus(null)}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (emailError) setEmailError("");
                }}
                className={`${identityField} mt-3`}
              />
              <FocusRule active={focus === "email" || Boolean(emailError)} />
              {emailError ? (
                <p id="email-error" className="mt-3 text-sm text-ink">
                  {emailError}
                </p>
              ) : null}
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className={`text-sm ${focus === "message" ? "text-ink" : "text-muted"}`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={9}
                maxLength={1500}
                value={message}
                onFocus={() => setFocus("message")}
                onBlur={() => setFocus(null)}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-4 min-h-[16rem] w-full resize-y border-0 bg-transparent px-0 text-xl leading-8 text-ink outline-none md:min-h-[20rem]"
              />
              <FocusRule active={focus === "message"} />
              <p className="mt-3 text-sm tabular-nums text-muted">
                {message.length} / 1500
              </p>
            </div>
          </div>

          <div className="mt-12">
            <motion.button
              type="submit"
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              className={`inline-flex min-h-14 w-full items-center justify-center rounded-[8px] px-8 text-base font-medium tracking-[0.01em] transition-colors duration-200 ${
                ready
                  ? "bg-ink text-on-ink hover:bg-sage"
                  : "border border-ink text-ink hover:bg-ink hover:text-on-ink"
              }`}
            >
              Get In Touch
            </motion.button>
            <p className="mt-5 text-[15px] text-muted">
              {contactPage.emailDirect}{" "}
              <a
                href={contact.emailHref}
                className="text-ink underline-offset-4 hover:underline"
              >
                {contact.email}
              </a>
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
