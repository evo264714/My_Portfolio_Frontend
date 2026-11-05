import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiArrowUpRight,
  FiFileText,
} from "react-icons/fi";
import useTheme from "../hooks/useTheme";
import avatar from "../assets/mehedi-avatar.webp";

const RESUME_URL =
  "https://drive.google.com/file/d/1Bt4JG83JeaNZYAmbqBo503yYVaGGUGV_/view?usp=sharing";

const COVER_LETTER_URL =
  "https://drive.google.com/file/d/1e2Dcn_HKTXy8TDtRWcDnqKgVe2T4haM3/view?usp=sharing";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contacts", label: "Contact" },
];

// Accent underline grows from the left on hover, stays on the active page
const desktopLink = ({ isActive }) =>
  `relative px-3 py-2 text-sm font-medium transition-colors duration-300
   after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-accent
   after:transition-transform after:duration-300 motion-reduce:after:transition-none hover:text-fg hover:after:scale-x-100 ${
     isActive ? "text-fg after:scale-x-100" : "text-muted after:scale-x-0"
   }`;

const mobileLink = ({ isActive }) =>
  `block rounded-md border-l-2 px-4 py-3 font-medium transition-all duration-300 ${
    isActive
      ? "border-accent bg-ink-800 text-fg"
      : "border-transparent text-muted hover:bg-ink-800 hover:text-fg motion-safe:hover:pl-5"
  }`;

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  const iconBase =
    "absolute inset-0 flex items-center justify-center transition-all duration-300 motion-reduce:transition-none";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="relative h-9 w-9 overflow-hidden rounded-md border border-line text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent"
    >
      <span
        className={`${iconBase} ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-50 opacity-0"
        }`}
      >
        <FiSun size={18} aria-hidden="true" />
      </span>
      <span
        className={`${iconBase} ${
          isDark
            ? "-rotate-90 scale-50 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <FiMoon size={18} aria-hidden="true" />
      </span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);
  const { theme, toggle } = useTheme();
  const close = () => setOpen(false);

  // More opaque bar with a soft shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line backdrop-blur-lg transition-shadow duration-300 ${
        scrolled
          ? "bg-ink-950/95 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]"
          : "bg-ink-950/80"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
        aria-label="Main"
      >
        {/* Logo */}
        <Link to="/" onClick={close} className="group flex items-center gap-3">
          <img
            src={avatar}
            alt=""
            width="36"
            height="36"
            className="h-9 w-9 rounded-full border border-line object-cover ring-2 ring-transparent transition-all duration-300 group-hover:ring-accent/60 motion-safe:group-hover:scale-105"
          />
          <span className="font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">
            Mehedi Hasan
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={desktopLink}>
              {l.label}
            </NavLink>
          ))}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-4 inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_8px_20px_-8px_var(--accent)] motion-safe:hover:-translate-y-0.5"
          >
            <FiFileText aria-hidden="true" />
            Resume
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href={COVER_LETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-2 inline-flex items-center gap-1.5 rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition-all duration-300 hover:border-accent/50 hover:bg-ink-800 motion-safe:hover:-translate-y-0.5"
          >
            Cover Letter
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <div className="ml-3">
            <ThemeToggle theme={theme} onToggle={toggle} />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={toggle} />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="animate-slideDown border-t border-line px-6 py-4 lg:hidden">
          <div className="space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={close}
                className={mobileLink}
              >
                {l.label}
              </NavLink>
            ))}

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-3 flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-center font-semibold text-on-accent transition-colors hover:bg-accent/90"
            >
              <FiFileText aria-hidden="true" />
              Resume
            </a>
            <a
              href={COVER_LETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-2 flex items-center justify-center gap-2 rounded-md border border-line px-4 py-3 text-center font-semibold text-fg transition-colors hover:bg-ink-800"
            >
              Cover Letter
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
