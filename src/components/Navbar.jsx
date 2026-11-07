// import { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   FiMenu,
//   FiX,
//   FiSun,
//   FiMoon,
//   FiArrowUpRight,
//   FiFileText,
// } from "react-icons/fi";
// import useTheme from "../hooks/useTheme";
// import avatar from "../assets/mehedi-avatar.webp";

// const RESUME_URL =
//   "https://drive.google.com/file/d/1Bt4JG83JeaNZYAmbqBo503yYVaGGUGV_/view?usp=sharing";

// const COVER_LETTER_URL =
//   "https://drive.google.com/file/d/1e2Dcn_HKTXy8TDtRWcDnqKgVe2T4haM3/view?usp=sharing";

// const links = [
//   { to: "/", label: "Home", end: true },
//   { to: "/experience", label: "Experience" },
//   { to: "/projects", label: "Projects" },
//   { to: "/skills", label: "Skills" },
//   { to: "/contacts", label: "Contact" },
// ];

// // Accent underline grows from the left on hover, stays on the active page
// const desktopLink = ({ isActive }) =>
//   `relative px-3 py-2 text-sm font-medium transition-colors duration-300
//    after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-accent
//    after:transition-transform after:duration-300 motion-reduce:after:transition-none hover:text-fg hover:after:scale-x-100 ${
//      isActive ? "text-fg after:scale-x-100" : "text-muted after:scale-x-0"
//    }`;

// const mobileLink = ({ isActive }) =>
//   `block rounded-md border-l-2 px-4 py-3 font-medium transition-all duration-300 ${
//     isActive
//       ? "border-accent bg-ink-800 text-fg"
//       : "border-transparent text-muted hover:bg-ink-800 hover:text-fg motion-safe:hover:pl-5"
//   }`;

// function ThemeToggle({ theme, onToggle }) {
//   const isDark = theme === "dark";
//   const label = isDark ? "Switch to light mode" : "Switch to dark mode";
//   const iconBase =
//     "absolute inset-0 flex items-center justify-center transition-all duration-300 motion-reduce:transition-none";

//   return (
//     <button
//       type="button"
//       onClick={onToggle}
//       aria-label={label}
//       title={label}
//       className="relative h-9 w-9 overflow-hidden rounded-md border border-line text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent"
//     >
//       <span
//         className={`${iconBase} ${
//           isDark
//             ? "rotate-0 scale-100 opacity-100"
//             : "rotate-90 scale-50 opacity-0"
//         }`}
//       >
//         <FiSun size={18} aria-hidden="true" />
//       </span>
//       <span
//         className={`${iconBase} ${
//           isDark
//             ? "-rotate-90 scale-50 opacity-0"
//             : "rotate-0 scale-100 opacity-100"
//         }`}
//       >
//         <FiMoon size={18} aria-hidden="true" />
//       </span>
//     </button>
//   );
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(() => window.scrollY > 8);
//   const { theme, toggle } = useTheme();
//   const close = () => setOpen(false);

//   // More opaque bar with a soft shadow once the page is scrolled
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Close the mobile menu with Escape
//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e) => {
//       if (e.key === "Escape") setOpen(false);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open]);

//   return (
//     <header
//       className={`sticky top-0 z-50 border-b border-line backdrop-blur-lg transition-shadow duration-300 ${
//         scrolled
//           ? "bg-ink-950/95 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]"
//           : "bg-ink-950/80"
//       }`}
//     >
//       <nav
//         className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
//         aria-label="Main"
//       >
//         {/* Logo */}
//         <Link to="/" onClick={close} className="group flex items-center gap-3">
//           <img
//             src={avatar}
//             alt=""
//             width="36"
//             height="36"
//             className="h-9 w-9 rounded-full border border-line object-cover ring-2 ring-transparent transition-all duration-300 group-hover:ring-accent/60 motion-safe:group-hover:scale-105"
//           />
//           <span className="font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">
//             Mehedi Hasan
//           </span>
//         </Link>

//         {/* Desktop */}
//         <div className="hidden items-center gap-1 lg:flex">
//           {links.map((l) => (
//             <NavLink key={l.to} to={l.to} end={l.end} className={desktopLink}>
//               {l.label}
//             </NavLink>
//           ))}

//           <a
//             href={RESUME_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group ml-4 inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_8px_20px_-8px_var(--accent)] motion-safe:hover:-translate-y-0.5"
//           >
//             <FiFileText aria-hidden="true" />
//             Resume
//             <FiArrowUpRight
//               aria-hidden="true"
//               className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//             />
//           </a>

//           <a
//             href={COVER_LETTER_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group ml-2 inline-flex items-center gap-1.5 rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition-all duration-300 hover:border-accent/50 hover:bg-ink-800 motion-safe:hover:-translate-y-0.5"
//           >
//             Cover Letter
//             <FiArrowUpRight
//               aria-hidden="true"
//               className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//             />
//           </a>

//           <div className="ml-3">
//             <ThemeToggle theme={theme} onToggle={toggle} />
//           </div>
//         </div>

//         {/* Mobile controls */}
//         <div className="flex items-center gap-2 lg:hidden">
//           <ThemeToggle theme={theme} onToggle={toggle} />
//           <button
//             type="button"
//             onClick={() => setOpen(!open)}
//             aria-expanded={open}
//             aria-label={open ? "Close menu" : "Open menu"}
//             className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent"
//           >
//             {open ? <FiX size={18} /> : <FiMenu size={18} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       {open && (
//         <div className="animate-slideDown border-t border-line px-6 py-4 lg:hidden">
//           <div className="space-y-1">
//             {links.map((l) => (
//               <NavLink
//                 key={l.to}
//                 to={l.to}
//                 end={l.end}
//                 onClick={close}
//                 className={mobileLink}
//               >
//                 {l.label}
//               </NavLink>
//             ))}

//             <a
//               href={RESUME_URL}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={close}
//               className="mt-3 flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-center font-semibold text-on-accent transition-colors hover:bg-accent/90"
//             >
//               <FiFileText aria-hidden="true" />
//               Resume
//             </a>
//             <a
//               href={COVER_LETTER_URL}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={close}
//               className="mt-2 flex items-center justify-center gap-2 rounded-md border border-line px-4 py-3 text-center font-semibold text-fg transition-colors hover:bg-ink-800"
//             >
//               Cover Letter
//               <FiArrowUpRight aria-hidden="true" />
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }



import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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

const desktopLink = ({ isActive }) =>
  `relative z-10 px-3.5 py-2 text-sm font-medium transition-colors duration-300 hover:text-fg focus-visible:text-fg ${
    isActive ? "text-fg" : "text-muted"
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
      className="relative h-9 w-9 overflow-hidden rounded-md border border-line text-muted transition-all duration-300 hover:border-accent/60 hover:text-accent hover:shadow-[0_0_18px_-4px_var(--accent)]"
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
  const [hovered, setHovered] = useState(null);
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();

  const headerRef = useRef(null);
  const barRef = useRef(null);
  const pillRef = useRef(null);
  const itemRefs = useRef([]);
  const firstPlace = useRef(true);

  const close = () => setOpen(false);

  const activeIndex = links.findIndex((l) =>
    l.end ? pathname === l.to : pathname === l.to || pathname.startsWith(`${l.to}/`),
  );
  const target = hovered ?? activeIndex;

  /* Sliding highlight pill: glides to the hovered (or active) link */
  useEffect(() => {
    const place = () => {
      const pill = pillRef.current;
      if (!pill) return;
      const el = itemRefs.current[target];

      if (!el) {
        pill.style.opacity = "0";
        return;
      }

      if (firstPlace.current) {
        pill.style.transition = "none";
      }
      pill.style.opacity = "1";
      pill.style.width = `${el.offsetWidth}px`;
      pill.style.transform = `translateX(${el.offsetLeft}px)`;

      if (firstPlace.current) {
        void pill.offsetWidth; // flush so the first placement doesn't animate
        pill.style.transition = "";
        firstPlace.current = false;
      }
    };

    place();
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [target]);

  /* Scroll progress bar + compact bar once the page is scrolled */
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      setScrolled(window.scrollY > 8);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  /* Close the mobile menu: Escape key, or a click outside the header */
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  /* Close the mobile menu if the window grows to desktop size */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* Cursor spotlight: a soft glow that follows the mouse across the bar */
  const onMove = (e) => {
    const header = headerRef.current;
    if (!header) return;
    const r = header.getBoundingClientRect();
    header.style.setProperty("--mx", `${e.clientX - r.left}px`);
    header.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <header
      ref={headerRef}
      onMouseMove={onMove}
      className={`group/nav sticky top-0 z-50 border-b border-line backdrop-blur-xl transition-shadow duration-300 ${
        scrolled
          ? "bg-ink-950/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]"
          : "bg-ink-950/70"
      }`}
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/nav:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Glowing hairline along the bottom edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-500 group-hover/nav:opacity-100"
        aria-hidden="true"
      />

      {/* Scroll progress */}
      <div
        ref={barRef}
        className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left bg-accent shadow-[0_0_10px_var(--accent)]"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />

      <nav
        className={`relative mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 motion-reduce:transition-none ${
          scrolled ? "py-2" : "py-3"
        }`}
        aria-label="Main"
      >
        {/* Logo */}
        <Link to="/" onClick={close} className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full">
            {/* Spinning gradient ring on hover */}
            <span
              className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-safe:group-hover:animate-spin"
              style={{
                background:
                  "conic-gradient(var(--accent), transparent 55%, var(--accent))",
                animationDuration: "3s",
              }}
              aria-hidden="true"
            />
            <img
              src={avatar}
              alt=""
              width="36"
              height="36"
              className="relative h-9 w-9 rounded-full border border-line object-cover transition-transform duration-300 motion-safe:group-hover:scale-95"
            />
            {/* Availability dot */}
            <span
              className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-accent ring-2 ring-ink-950"
              aria-hidden="true"
            />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">
            Mehedi Hasan
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative flex items-center"
            onMouseLeave={() => setHovered(null)}
          >
            {/* Sliding pill */}
            <span
              ref={pillRef}
              className="pointer-events-none absolute left-0 top-0 h-full rounded-md border border-accent/30 bg-accent/10 opacity-0 shadow-[0_0_22px_-6px_var(--accent)] transition-[transform,width,opacity] duration-300 ease-out motion-reduce:transition-none"
              aria-hidden="true"
            />

            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                className={desktopLink}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Resume: shimmer sweep */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-4 inline-flex items-center gap-1.5 overflow-hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-all duration-300 hover:shadow-[0_8px_26px_-6px_var(--accent)] motion-safe:hover:-translate-y-0.5"
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
              aria-hidden="true"
            />
            <FiFileText className="relative" aria-hidden="true" />
            <span className="relative">Resume</span>
            <FiArrowUpRight
              aria-hidden="true"
              className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Cover Letter: fills from the bottom */}
          <a
            href={COVER_LETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-2 inline-flex items-center gap-1.5 overflow-hidden rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition-all duration-300 hover:border-accent/60 hover:text-accent hover:shadow-[0_0_20px_-8px_var(--accent)] motion-safe:hover:-translate-y-0.5"
          >
            <span
              className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-accent/10 transition-transform duration-300 ease-out group-hover:scale-y-100 motion-reduce:hidden"
              aria-hidden="true"
            />
            <span className="relative">Cover Letter</span>
            <FiArrowUpRight
              aria-hidden="true"
              className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all duration-300 hover:border-accent/60 hover:text-accent hover:shadow-[0_0_18px_-4px_var(--accent)]"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="relative border-t border-line lg:hidden">
          <div className="mx-auto max-w-6xl space-y-1 px-6 py-4">
            {links.map((l, i) => (
              <div
                key={l.to}
                className="animate-slideDown"
                style={{
                  animationDelay: `${i * 45}ms`,
                  animationFillMode: "both",
                }}
              >
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={close}
                  className={mobileLink}
                >
                  {l.label}
                </NavLink>
              </div>
            ))}

            <div
              className="animate-slideDown pt-2"
              style={{
                animationDelay: `${links.length * 45}ms`,
                animationFillMode: "both",
              }}
            >
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-center font-semibold text-on-accent transition-colors hover:bg-accent/90"
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

              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted">
                <span
                  className="h-2 w-2 rounded-full bg-accent"
                  aria-hidden="true"
                />
                Available for work
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}