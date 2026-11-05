import { Link } from "react-router-dom";
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
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {!embedded && (
        <div className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-muted">Interested in working together?</p>
          <Link
            to="/contacts"
            className="rounded-md bg-accent px-6 py-3 font-semibold text-ink-950 transition hover:bg-accent/90"
          >
            Get in touch
          </Link>
        </div>
      )}
    </Section>
  );
}
