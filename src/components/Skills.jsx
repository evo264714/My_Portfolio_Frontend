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
import Section from "./Section";

// "var(--fg)" is used for brands that are black or white,
// so they stay visible in both dark and light mode.
const groups = [
  {
    title: "Frontend",
    note: "Interfaces that are responsive and accessible.",
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
    note: "APIs, databases and authentication.",
    items: [
      { name: "NodeJS", icon: SiNodedotjs, color: "#4caf50" },
      { name: "ExpressJS", icon: SiExpress, color: "var(--fg)" },
      { name: "MongoDB", icon: SiMongodb, color: "#22a355" },
      { name: "Firebase", icon: SiFirebase, color: "#f59e0b" },
    ],
  },
  {
    title: "Tools and design",
    note: "Shipping, versioning and planning the UI.",
    items: [
      { name: "GitHub", icon: FaGithub, color: "var(--fg)" },
      { name: "Vercel", icon: SiVercel, color: "var(--fg)" },
      { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
      { name: "Figma", icon: FaFigma, color: "#f24e1e" },
      { name: "UI/UX", icon: MdDesignServices, color: "#a855f7" },
    ],
  },
];

function SkillTile({ skill }) {
  const Icon = skill.icon;

  return (
    <li
      style={{ "--brand": skill.color }}
      className="group flex items-center gap-3 rounded-xl border border-line bg-ink-900 p-3 transition-all duration-300 hover:border-[var(--brand)] hover:bg-[color-mix(in_srgb,var(--brand)_8%,var(--ink-900))] hover:shadow-[0_10px_28px_-14px_var(--brand)] motion-safe:hover:-translate-y-1"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-ink-800 text-2xl text-muted transition-all duration-300 group-hover:border-transparent group-hover:bg-[color-mix(in_srgb,var(--brand)_14%,transparent)] group-hover:text-[var(--brand)] motion-safe:group-hover:scale-110">
        <Icon aria-hidden="true" />
      </span>
      <span className="text-sm font-medium text-muted transition-colors duration-300 group-hover:text-fg">
        {skill.name}
      </span>
    </li>
  );
}

export default function Skills({ embedded = false }) {
  return (
    <Section
      id="skills"
      as={embedded ? "h2" : "h1"}
      title="Skills and technologies"
      description="The tools I use to take an idea from design to a deployed product."
    >
      <div className="divide-y divide-line border-y border-line">
        {groups.map((group) => (
          <div
            key={group.title}
            className="grid gap-6 py-10 md:grid-cols-[240px_1fr] md:gap-10"
          >
            <div>
              <h3 className="font-display text-lg font-semibold text-fg">
                {group.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{group.note}</p>
            </div>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {group.items.map((skill) => (
                <SkillTile key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}