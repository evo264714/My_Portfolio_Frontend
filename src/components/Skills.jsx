// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaReact,
//   FaJs,
//   FaBootstrap,
//   FaGithub,
//   FaFigma,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiFirebase,
//   SiMongodb,
//   SiNodedotjs,
//   SiExpress,
//   SiVercel,
//   SiNetlify,
//   SiReactrouter,
// } from "react-icons/si";
// import { MdDesignServices } from "react-icons/md";
// import Section from "./Section";

// // "var(--fg)" is used for brands that are black or white,
// // so they stay visible in both dark and light mode.
// const groups = [
//   {
//     title: "Frontend",
//     note: "Interfaces that are responsive and accessible.",
//     items: [
//       { name: "HTML", icon: FaHtml5, color: "#e34f26" },
//       { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
//       { name: "JavaScript", icon: FaJs, color: "#e0b400" },
//       { name: "React", icon: FaReact, color: "#0ea5e9" },
//       { name: "React Router", icon: SiReactrouter, color: "#f43f5e" },
//       { name: "TailwindCSS", icon: SiTailwindcss, color: "#06b6d4" },
//       { name: "Bootstrap", icon: FaBootstrap, color: "#8b5cf6" },
//     ],
//   },
//   {
//     title: "Backend and data",
//     note: "APIs, databases and authentication.",
//     items: [
//       { name: "NodeJS", icon: SiNodedotjs, color: "#4caf50" },
//       { name: "ExpressJS", icon: SiExpress, color: "var(--fg)" },
//       { name: "MongoDB", icon: SiMongodb, color: "#22a355" },
//       { name: "Firebase", icon: SiFirebase, color: "#f59e0b" },
//     ],
//   },
//   {
//     title: "Tools and design",
//     note: "Shipping, versioning and planning the UI.",
//     items: [
//       { name: "GitHub", icon: FaGithub, color: "var(--fg)" },
//       { name: "Vercel", icon: SiVercel, color: "var(--fg)" },
//       { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
//       { name: "Figma", icon: FaFigma, color: "#f24e1e" },
//       { name: "UI/UX", icon: MdDesignServices, color: "#a855f7" },
//     ],
//   },
// ];

// function SkillTile({ skill }) {
//   const Icon = skill.icon;

//   return (
//     <li
//       style={{ "--brand": skill.color }}
//       className="group flex items-center gap-3 rounded-xl border border-line bg-ink-900 p-3 transition-all duration-300 hover:border-[var(--brand)] hover:bg-[color-mix(in_srgb,var(--brand)_8%,var(--ink-900))] hover:shadow-[0_10px_28px_-14px_var(--brand)] motion-safe:hover:-translate-y-1"
//     >
//       <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-ink-800 text-2xl text-muted transition-all duration-300 group-hover:border-transparent group-hover:bg-[color-mix(in_srgb,var(--brand)_14%,transparent)] group-hover:text-[var(--brand)] motion-safe:group-hover:scale-110">
//         <Icon aria-hidden="true" />
//       </span>
//       <span className="text-sm font-medium text-muted transition-colors duration-300 group-hover:text-fg">
//         {skill.name}
//       </span>
//     </li>
//   );
// }

// export default function Skills({ embedded = false }) {
//   return (
//     <Section
//       id="skills"
//       as={embedded ? "h2" : "h1"}
//       title="Skills and technologies"
//       description="The tools I use to take an idea from design to a deployed product."
//     >
//       <div className="divide-y divide-line border-y border-line">
//         {groups.map((group) => (
//           <div
//             key={group.title}
//             className="grid gap-6 py-10 md:grid-cols-[240px_1fr] md:gap-10"
//           >
//             <div>
//               <h3 className="font-display text-lg font-semibold text-fg">
//                 {group.title}
//               </h3>
//               <p className="mt-1 text-sm text-muted">{group.note}</p>
//             </div>

//             <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
//               {group.items.map((skill) => (
//                 <SkillTile key={skill.name} skill={skill} />
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// }


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
import { FiLayout, FiDatabase, FiTool } from "react-icons/fi";
import Section from "./Section";

// "var(--fg)" is used for brands that are black or white,
// so they stay visible in both dark and light mode.
const groups = [
  {
    title: "Frontend",
    note: "Interfaces that are responsive and accessible.",
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
    note: "APIs, databases and authentication.",
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
    note: "Shipping, versioning and planning the UI.",
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
      <div className="space-y-6">
        {groups.map((group, i) => {
          const GroupIcon = group.icon;

          return (
            <Reveal key={group.title} delay={i * 120}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-800/40 p-6 sm:p-8">
                {/* Soft corner glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
                  aria-hidden="true"
                />

                {/* Group header */}
                <div className="relative mb-6 flex items-center gap-4 border-b border-line pb-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-xl text-accent"
                    aria-hidden="true"
                  >
                    <GroupIcon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold text-fg">
                      {group.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">{group.note}</p>
                  </div>
                  
                </div>

                {/* Tiles */}
                <ul className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {group.items.map((skill) => (
                    <SkillTile key={skill.name} skill={skill} />
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}