import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiMail, FiMapPin, FiArrowUp } from "react-icons/fi";
import avatar from "../assets/mehedi-avatar.webp";

const EMAIL = "mehedievo@gmail.com";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contacts", label: "Contact" },
];

// "var(--fg)" keeps GitHub visible in both dark and light mode
const socials = [
  {
    href: "https://github.com/evo264714",
    label: "GitHub",
    icon: FaGithub,
    color: "var(--fg)",
  },
  {
    href: "https://www.linkedin.com/in/mehedi-hasan-026372278/",
    label: "LinkedIn",
    icon: FaLinkedin,
    color: "#0a66c2",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61590524911124",
    label: "Facebook",
    icon: FaFacebook,
    color: "#1877f2",
  },
];

function SocialButton({ social }) {
  const Icon = social.icon;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      title={social.label}
      style={{ "--brand": social.color }}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-ink-800 text-xl text-muted transition-all duration-300 hover:border-[var(--brand)] hover:bg-[color-mix(in_srgb,var(--brand)_10%,var(--ink-800))] hover:text-[var(--brand)] hover:shadow-[0_10px_24px_-12px_var(--brand)] motion-safe:hover:-translate-y-1"
    >
      <Icon aria-hidden="true" />
    </a>
  );
}

function scrollToTop() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-900">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-4">
              <img
                src={avatar}
                alt=""
                width="56"
                height="56"
                loading="lazy"
                className="h-14 w-14 rounded-full border border-line object-cover"
              />
              <span className="font-display text-xl font-semibold text-fg">
                Mehedi Hasan
              </span>
            </Link>

            <p className="mt-5 max-w-sm leading-relaxed text-muted">
              MERN stack developer who builds full-stack web apps and enjoys
              working directly with the people who use them.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <SocialButton key={social.label} social={social} />
              ))}
            </div>
          </div>

          {/* Pages */}
          <nav aria-label="Footer">
            <h3 className="mb-4 font-display text-base font-semibold text-fg">
              Pages
            </h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-block text-muted transition-all duration-300 hover:text-accent motion-safe:hover:translate-x-1"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-base font-semibold text-fg">
              Get in touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-3 text-muted transition-colors hover:text-accent"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-ink-800 text-accent transition-colors group-hover:border-accent/50">
                    <FiMail aria-hidden="true" />
                  </span>
                  {EMAIL}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-muted">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-ink-800 text-accent">
                  <FiMapPin aria-hidden="true" />
                </span>
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mehedi Hasan. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <p>
              Have a project in mind?{" "}
              <Link
                to="/contacts"
                className="font-medium text-accent hover:underline"
              >
                Let's talk
              </Link>
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent motion-safe:hover:-translate-y-1"
            >
              <FiArrowUp aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}