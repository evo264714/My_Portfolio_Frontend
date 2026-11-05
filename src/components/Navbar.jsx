import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/useTheme";
import avatar from "../assets/mehedi-avatar.webp";

const RESUME_URL =
  "https://drive.google.com/file/d/1h4NazCSyRMc5itpNN3WmfGoC4aV1bfSg/view?usp=sharing";

const COVER_LETTER_URL =
  "https://drive.google.com/file/d/1bxjMSSrXs-4IlMfZaJElBfZOairSl98L/view?usp=sharing";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contacts", label: "Contact" },
];

const desktopLink = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? "bg-ink-700 text-fg" : "text-muted hover:text-fg"
  }`;

const mobileLink = ({ isActive }) =>
  `block rounded-md px-4 py-3 font-medium transition-colors ${
    isActive
      ? "bg-ink-700 text-fg"
      : "text-muted hover:bg-ink-800 hover:text-fg"
  }`;

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="rounded-md border border-line p-2 text-muted transition hover:text-fg"
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink-950/90 backdrop-blur-lg">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
        aria-label="Main"
      >
        <Link to="/" onClick={close} className="flex items-center gap-3">
          <img
            src={avatar}
            alt=""
            width="36"
            height="36"
            className="h-9 w-9 rounded-full border border-line object-cover"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
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
            className="ml-3 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition hover:bg-accent/90"
          >
            Resume
          </a>
          <a
            href={COVER_LETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition hover:bg-ink-800"
          >
            Cover Letter
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
            className="rounded-md border border-line p-2 text-muted transition hover:text-fg"
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
              className="mt-3 block rounded-md bg-accent px-4 py-3 text-center font-semibold text-on-accent"
            >
              Resume
            </a>
            <a
              href={COVER_LETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-2 block rounded-md border border-line px-4 py-3 text-center font-semibold text-fg"
            >
              Cover Letter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
