import { Link } from "react-router-dom";

const stagger = (n) => ({ animationDelay: `${n * 0.12}s` });

export default function Hero() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-16 md:pb-32 md:pt-24 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Text */}
        <div>
          <p
            className="hero-in inline-flex items-center gap-2 rounded-full border border-line bg-ink-900 px-3.5 py-1.5 text-sm text-muted"
            style={stagger(0)}
          >
            <span
              className="h-2 w-2 rounded-full bg-accent"
              aria-hidden="true"
            />
            Available for freelance work
          </p>

          <h1
            className="hero-in mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            style={stagger(1)}
          >
            Mehedi Hasan
          </h1>

          <p
            className="hero-in mt-4 font-display text-xl font-medium text-accent sm:text-2xl"
            style={stagger(2)}
          >
            MERN stack developer
          </p>

          <p
            className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={stagger(3)}
          >
            I build fast, reliable web apps from the database to the interface,
            using React, Node.js and MongoDB.
          </p>

          <div
            className="hero-in mt-9 flex flex-col gap-3 sm:flex-row"
            style={stagger(4)}
          >
            <Link
              to="/contacts"
              className="rounded-md bg-accent px-6 py-3 text-center font-semibold text-ink-950 transition hover:bg-accent/90"
            >
              Get in touch
            </Link>
            <Link
              to="/projects"
              className="rounded-md border border-line px-6 py-3 text-center font-semibold text-fg transition hover:border-subtle hover:bg-ink-800"
            >
              View projects
            </Link>
          </div>
        </div>

        {/* Photo */}
        <div
          className="hero-in mx-auto w-full max-w-sm lg:max-w-none"
          style={stagger(2)}
        >
          <div className="relative">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent/40"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-ink-800">
              <img
                src="https://i.ibb.co.com/fYnmFXPm/Professional-Beige-Blazer-Headshot.png"
                alt="Portrait of Mehedi Hasan"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
