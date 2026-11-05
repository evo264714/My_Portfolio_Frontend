import Section from "../components/Section";
import { experiences } from "../Data/experience";

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
              className="grid gap-3 md:grid-cols-[200px_1fr] md:gap-10"
            >
              {/* Date (+ place if provided) */}
              <div className="text-sm text-muted md:pt-1 md:text-right">
                <p className="font-medium text-fg">{job.period}</p>
                {job.location && <p className="mt-1">{job.location}</p>}
              </div>

              {/* Role */}
              <div
                className={`relative border-l border-line pl-8 ${
                  isLast ? "" : "pb-14"
                }`}
              >
                <span
                  className="absolute -left-[5.5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-ink-950"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-semibold text-fg">
                  {job.role}
                </h3>
                <p className="mt-1 font-medium text-accent">{job.company}</p>

                <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-subtle">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                {job.stack?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-line px-2.5 py-1 text-xs text-muted"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}