import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../Data/projects";

export default function Projects({ embedded = false }) {
  return (
    <Section
      id="projects"
      as={embedded ? "h2" : "h1"}
      title="Projects"
      description="A selection of recent full-stack projects, all live and open to explore."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {!embedded && (
        <div className="relative mt-20 overflow-hidden rounded-2xl border border-line bg-ink-900 p-8 sm:p-10">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-fg">
                Interested in working together?
              </h2>
              <p className="mt-2 text-muted">
                Tell me about your idea and I'll get back to you.
              </p>
            </div>
            <Link
              to="/contacts"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-on-accent transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_12px_28px_-12px_var(--accent)] motion-safe:hover:-translate-y-0.5"
            >
              Get in touch
              <FiArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      )}
    </Section>
  );
}
