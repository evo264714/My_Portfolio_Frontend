// import { FiArrowUpRight } from "react-icons/fi";

// export default function ProjectCard({ project }) {
//   return (
//     <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-ink-900 transition-colors hover:border-accent/40">
//       <div className="aspect-[16/10] overflow-hidden border-b border-line bg-ink-800">
//         <img
//           src={project.image}
//           alt={`Screenshot of ${project.title}`}
//           loading="lazy"
//           className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
//         />
//       </div>

//       <div className="flex flex-1 flex-col p-6">
//         <h3 className="font-display text-xl font-semibold text-fg">
//           {project.title}
//         </h3>

//         <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
//           {project.description}
//         </p>

//         <ul className="mt-5 flex flex-wrap gap-2">
//           {project.tech.map((t) => (
//             <li
//               key={t}
//               className="rounded-md border border-line px-2.5 py-1 text-xs text-muted"
//             >
//               {t}
//             </li>
//           ))}
//         </ul>

//         <a
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:gap-2.5"
//         >
//           Visit live site
//           <FiArrowUpRight aria-hidden="true" />
//         </a>
//       </div>
//     </article>
//   );
// }



import { FiArrowUpRight } from "react-icons/fi";

// "https://toy-market-b3ec7.web.app/" -> "toy-market-b3ec7.web.app"
const getHost = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

export default function ProjectCard({ project, index = 0 }) {
  const number = String(index + 1).padStart(2, "0");
  const host = getHost(project.link);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-ink-900 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_24px_48px_-28px_var(--accent)] motion-safe:hover:-translate-y-1">
      {/* Screenshot inside a browser-style frame */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="block border-b border-line"
      >
        <div className="flex items-center gap-3 border-b border-line bg-ink-800 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-subtle/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-subtle/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-subtle/50" />
          </div>
          <span className="min-w-0 flex-1 truncate rounded-md bg-ink-900 px-3 py-1 text-center text-xs text-muted">
            {host}
          </span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-ink-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent shadow-lg">
              Visit live site
              <FiArrowUpRight aria-hidden="true" />
            </span>
          </div>
        </div>
      </a>

      {/* Details */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-fg transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>
          <span
            className="font-mono text-sm text-subtle"
            aria-hidden="true"
          >
            {number}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-line px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent/40 hover:text-fg"
            >
              {t}
            </li>
          ))}
        </ul>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-6 inline-flex items-center gap-1.5 self-start border-b border-transparent pb-0.5 text-sm font-semibold text-accent transition-colors hover:border-accent"
        >
          Visit live site
          <FiArrowUpRight
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      </div>
    </article>
  );
}