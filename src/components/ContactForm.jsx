import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiLoader,
  FiCheck,
} from "react-icons/fi";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMAIL = "mehedievo@gmail.com";
const MAX_MESSAGE = 1000;

const fieldClass =
  "w-full rounded-lg border border-line bg-ink-800 py-3 pl-11 pr-4 text-fg placeholder-subtle transition-all duration-300 hover:border-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const emptyForm = { name: "", email: "", message: "", company: "" };

function Field({ id, label, icon: Icon, multiline = false, children }) {
  return (
    <div className="group">
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg">
        {label}
      </label>
      <div className="relative">
        <Icon
          aria-hidden="true"
          className={`pointer-events-none absolute left-4 text-base text-subtle transition-colors duration-300 group-focus-within:text-accent ${
            multiline ? "top-4" : "top-1/2 -translate-y-1/2"
          }`}
        />
        {children}
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentTo, setSentTo] = useState(null); // { name, email } after success
  const confirmRef = useRef(null);

  // Move focus to the confirmation so screen readers announce it
  useEffect(() => {
    if (sentTo) confirmRef.current?.focus();
  }, [sentTo]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Hidden field: real people never fill it, spam bots often do
    if (form.company) return;

    const data = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error(
        "Contact form isn't configured yet. Please email me directly.",
      );
      console.error("Missing EmailJS keys in .env (restart the dev server).");
      return;
    }

    setIsSubmitting(true);
    const t = toast.loading("Sending your message...");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { ...data, time: new Date().toLocaleString() },
        { publicKey: PUBLIC_KEY },
      );

      toast.dismiss(t);
      setSentTo({ name: data.name, email: data.email });
      setForm(emptyForm);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.dismiss(t);
      toast.error("Message not sent. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Success state ── */
  if (sentTo) {
    return (
      <div
        ref={confirmRef}
        tabIndex={-1}
        role="status"
        className="rounded-xl border border-line bg-ink-900 p-8 text-center outline-none sm:p-12"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent">
          <FiCheck aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-display text-2xl font-bold text-fg">
          Message sent
        </h2>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-muted">
          Thanks, {sentTo.name.split(" ")[0]}. I'll reply to{" "}
          <span className="font-medium text-fg">{sentTo.email}</span> as soon as
          I can.
        </p>
        <button
          type="button"
          onClick={() => setSentTo(null)}
          className="mt-8 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-fg transition-all duration-300 hover:border-accent/50 hover:bg-ink-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-line bg-ink-900 p-6 sm:p-8"
    >
      <div>
        <h2 className="font-display text-2xl font-bold text-fg">
          Send me a message
        </h2>
        <p className="mt-2 text-muted">
          Tell me about your project or just say hello.
        </p>
      </div>

      {/* Honeypot: invisible to people, bots tend to fill it */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" icon={FiUser}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            maxLength={80}
            required
            className={fieldClass}
          />
        </Field>

        <Field id="email" label="Email" icon={FiMail}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            maxLength={120}
            required
            className={fieldClass}
          />
        </Field>
      </div>

      <div>
        <Field id="message" label="Message" icon={FiMessageSquare} multiline>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="What are you working on?"
            value={form.message}
            onChange={handleChange}
            maxLength={MAX_MESSAGE}
            minLength={10}
            required
            className={`${fieldClass} resize-y`}
          />
        </Field>
        <p
          className={`mt-2 text-right text-xs transition-colors ${
            form.message.length > MAX_MESSAGE * 0.9
              ? "text-accent"
              : "text-subtle"
          }`}
          aria-live="polite"
        >
          {form.message.length}/{MAX_MESSAGE}
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 font-semibold text-on-accent transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_10px_24px_-10px_var(--accent)] disabled:cursor-not-allowed disabled:opacity-60 motion-safe:hover:-translate-y-0.5 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {isSubmitting ? (
          <>
            <FiLoader className="animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <FiSend
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <p className="text-center text-sm text-muted">
        Prefer email?{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="font-medium text-accent hover:underline"
        >
          {EMAIL}
        </a>
      </p>
    </form>
  );
}
