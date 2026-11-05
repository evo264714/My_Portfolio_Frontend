import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const fieldClass =
  "w-full rounded-lg border border-line bg-ink-800 px-4 py-3 text-fg placeholder-subtle transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const emptyForm = { name: "", email: "", message: "", company: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hidden field: real people never fill it, spam bots often do
    if (form.company) return;

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
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        { publicKey: PUBLIC_KEY },
      );

      toast.dismiss(t);
      toast.success("Message sent. I'll reply as soon as I can.");
      setForm(emptyForm);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.dismiss(t);
      toast.error("Message not sent. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Honeypot (hidden from people) */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-fg"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          required
          className={fieldClass}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-fg"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
          className={fieldClass}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-fg"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="What are you working on?"
          value={form.message}
          onChange={handleChange}
          required
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center rounded-lg bg-accent py-3 font-semibold text-ink-950 transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
