import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-ink-900 transition-colors hover:border-accent/40">
      <div className="aspect-[16/10] overflow-hidden border-b border-line bg-ink-800">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-fg">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-line px-2.5 py-1 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:gap-2.5"
        >
          Visit live site
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
