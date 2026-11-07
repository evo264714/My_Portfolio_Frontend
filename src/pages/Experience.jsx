import { FiCheck } from "react-icons/fi";
import Section from "../components/Section";
import { experiences } from "../Data/experience";

// "Luminedge Bangladesh" -> "LB", "SkyTech Solutions" -> "SS"
const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function Experience({ embedded = false }) {
  return (
    <Section
      id="experience"
      as={embedded ? "h2" : "h1"}
      title="Experience"
      description="Client-facing and teaching roles that shaped how I communicate with clients and users."
    >
      <ol>
        {experiences.map((job, i) => {
          const isLast = i === experiences.length - 1;

          return (
            <li
              key={job.company}
              className="group grid gap-3 md:grid-cols-[200px_1fr] md:gap-10"
            >
              {/* Date (+ place if provided) */}
              <div className="md:pt-5 md:text-right">
                <p className="inline-flex rounded-full border border-line bg-ink-900 px-3 py-1 text-sm font-medium text-fg transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent">
                  {job.period}
                </p>
                {job.location && (
                  <p className="mt-2 text-sm text-muted">{job.location}</p>
                )}
              </div>

              {/* Timeline rail + card */}
              <div
                className={`relative border-l border-line pl-8 ${
                  isLast ? "" : "pb-10"
                }`}
              >
                {/* Dot */}
                <span
                  className="absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-ink-950 transition-all duration-300 group-hover:shadow-[0_0_0_6px_color-mix(in_srgb,var(--accent)_22%,transparent)] motion-safe:group-hover:scale-110"
                  aria-hidden="true"
                />

                <article className="rounded-xl border border-line bg-ink-900 p-6 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_18px_40px_-24px_var(--accent)] motion-safe:group-hover:-translate-y-1 sm:p-7">
                  {/* Header */}
                  <header className="flex items-start gap-4">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line bg-ink-800 font-display text-base font-bold text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10"
                      aria-hidden="true"
                    >
                      {initials(job.company)}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold leading-snug text-fg">
                        {job.role}
                      </h3>
                      <p className="mt-1 font-medium text-accent">
                        {job.company}
                      </p>
                    </div>
                  </header>

                  {/* Responsibilities */}
                  <ul className="mt-5 max-w-2xl space-y-3 leading-relaxed text-muted">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <FiCheck
                          className="mt-1 h-4 w-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Optional tech tags */}
                  {job.stack?.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                      {job.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-md border border-line px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent/40 hover:text-fg"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
