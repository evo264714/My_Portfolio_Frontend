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

const groups = [
  {
    title: "Frontend",
    note: "Interfaces that are responsive and accessible.",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "React Router", icon: SiReactrouter },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    title: "Backend and data",
    note: "APIs, databases and authentication.",
    items: [
      { name: "NodeJS", icon: SiNodedotjs },
      { name: "ExpressJS", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools and design",
    note: "Shipping, versioning and planning the UI.",
    items: [
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Figma", icon: FaFigma },
      { name: "UI/UX", icon: MdDesignServices },
    ],
  },
];

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
            className="grid gap-5 py-8 md:grid-cols-[240px_1fr] md:gap-10"
          >
            <div>
              <h3 className="font-display text-lg font-semibold text-fg">
                {group.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{group.note}</p>
            </div>

            <ul className="flex flex-wrap gap-3">
              {group.items.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2.5 rounded-lg border border-line bg-ink-900 px-4 py-2.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-fg"
                >
                  <Icon className="text-lg" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
