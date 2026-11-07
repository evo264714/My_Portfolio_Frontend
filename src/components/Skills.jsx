import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiReactrouter,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { FiGrid, FiLayout, FiDatabase, FiTool } from "react-icons/fi";
import Section from "./Section";


const groups = [
  {
    title: "Frontend",
    icon: FiLayout,
    items: [
      { name: "HTML", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", icon: FaJs, color: "#e0b400" },
      { name: "React", icon: FaReact, color: "#0ea5e9" },
      { name: "React Router", icon: SiReactrouter, color: "#f43f5e" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#8b5cf6" },
    ],
  },
  {
    title: "Backend and data",
    icon: FiDatabase,
    items: [
      { name: "NodeJS", icon: SiNodedotjs, color: "#4caf50" },
      { name: "ExpressJS", icon: SiExpress, color: "var(--fg)" },
      { name: "MongoDB", icon: SiMongodb, color: "#22a355" },
      { name: "Firebase", icon: SiFirebase, color: "#f59e0b" },
    ],
  },
  {
    title: "Tools and design",
    icon: FiTool,
    items: [
      { name: "GitHub", icon: FaGithub, color: "var(--fg)" },
      { name: "Vercel", icon: SiVercel, color: "var(--fg)" },
      { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
      { name: "Figma", icon: FaFigma, color: "#f24e1e" },
      { name: "UI/UX", icon: MdDesignServices, color: "#a855f7" },
    ],
  },
];

const ALL = "All";

const allSkills = groups.flatMap((g) =>
  g.items.map((item) => ({ ...item, group: g.title })),
);

const tabs = [
  { key: ALL, icon: FiGrid, count: allSkills.length },
  ...groups.map((g) => ({
    key: g.title,
    icon: g.icon,
    count: g.items.length,
  })),
];

// Two rows for the scrolling strip (alternate skills so the rows are balanced)
const rowA = allSkills.filter((_, i) => i % 2 === 0);
const rowB = allSkills.filter((_, i) => i % 2 === 1);

/* Fades and slides a block in once, when it scrolls into view */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(
    () =>
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* One scrolling row. The list is rendered twice so the loop never jumps. */
function MarqueeRow({ items, reverse = false }) {
  const loop = [...items, ...items];

  return (
    <ul
      className={`${
        reverse ? "marquee-reverse" : "marquee"
      } flex w-max hover:[animation-play-state:paused]`}
    >
      {loop.map((skill, i) => {
        const Icon = skill.icon;
        return (
          <li
            key={`${skill.name}-${i}`}
            className="mr-3 inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-900 px-4 py-2 text-sm font-medium text-muted transition-colors duration-300 hover:border-accent/40 hover:text-fg"
          >
            <Icon className="text-lg" style={{ color: skill.color }} />
            {skill.name}
          </li>
        );
      })}
    </ul>
  );
}

function SkillTile({ skill, index }) {
  const Icon = skill.icon;

  // Feeds the cursor position to the CSS spotlight
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <li
      onMouseMove={onMove}
      style={{ "--brand": skill.color, animationDelay: `${index * 45}ms` }}
      className="skill-in group relative overflow-hidden rounded-xl border border-line bg-ink-900 p-4 transition-all duration-300 hover:border-[var(--brand)] hover:shadow-[0_14px_32px_-16px_var(--brand)] motion-safe:hover:-translate-y-1"
    >
      {/* Spotlight that follows the cursor */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(170px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--brand) 20%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-ink-800 text-2xl text-muted transition-all duration-300 group-hover:border-transparent group-hover:bg-[color-mix(in_srgb,var(--brand)_14%,transparent)] group-hover:text-[var(--brand)] motion-safe:group-hover:scale-110">
          <Icon aria-hidden="true" />
        </span>
        <span
          className="font-mono text-xs text-subtle transition-colors duration-300 group-hover:text-[var(--brand)]"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="relative mt-4 font-display text-base font-semibold text-fg">
        {skill.name}
      </p>
      <p className="relative mt-0.5 text-xs text-muted">{skill.group}</p>
    </li>
  );
}

export default function Skills({ embedded = false }) {
  const [active, setActive] = useState(ALL);

  const visible =
    active === ALL ? allSkills : allSkills.filter((s) => s.group === active);

  return (
    <Section
      id="skills"
      as={embedded ? "h2" : "h1"}
      title="Skills and technologies"
      description="The tools I use to take an idea from design to a deployed product."
    >
      {/* Scrolling strip (decorative: the full list is in the explorer below) */}
      <Reveal>
        <div
          className="marquee-mask mb-10 space-y-3 overflow-hidden motion-reduce:hidden"
          aria-hidden="true"
        >
          <MarqueeRow items={rowA} />
          <MarqueeRow items={rowB} reverse />
        </div>
      </Reveal>

      {/* Explorer */}
      <Reveal delay={120}>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-800/40 p-5 sm:p-8">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />

          {/* Tabs + count */}
          <div className="relative mb-7 flex flex-wrap items-center justify-between gap-4">
            <div
              role="group"
              aria-label="Filter skills by category"
              className="flex flex-wrap gap-2"
            >
              {tabs.map(({ key, icon: TabIcon, count }) => {
                const isActive = active === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActive(key)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-accent bg-accent text-on-accent shadow-[0_8px_22px_-10px_var(--accent)]"
                        : "border-line text-muted hover:border-accent/50 hover:text-fg"
                    }`}
                  >
                    <TabIcon aria-hidden="true" />
                    {key}
                    <span
                      className={`rounded-full px-1.5 text-xs ${
                        isActive ? "bg-on-accent/15" : "bg-ink-700 text-subtle"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-sm text-muted" aria-live="polite">
              Showing{" "}
              <span className="font-semibold text-fg">{visible.length}</span> of{" "}
              {allSkills.length}
            </p>
          </div>

          {/* Tiles (re-keyed on tab change, so they animate in again) */}
          <ul className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {visible.map((skill, i) => (
              <SkillTile
                key={`${active}-${skill.name}`}
                skill={skill}
                index={i}
              />
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
