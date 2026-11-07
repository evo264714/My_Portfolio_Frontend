// import { Link } from "react-router-dom";
// import portrait from "../assets/mehedi-portrait.webp";

// const stagger = (n) => ({ animationDelay: `${n * 0.12}s` });

// export default function Hero() {
//   return (
//     <section>
//       <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-16 md:pb-32 md:pt-24 lg:grid-cols-[1.25fr_0.75fr]">
//         {/* Text */}
//         <div>
//           <p
//             className="hero-in inline-flex items-center gap-2 rounded-full border border-line bg-ink-900 px-3.5 py-1.5 text-sm text-muted"
//             style={stagger(0)}
//           >
//             <span
//               className="h-2 w-2 rounded-full bg-accent"
//               aria-hidden="true"
//             />
//             Available for work
//           </p>

//           <h1
//             className="hero-in mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
//             style={stagger(1)}
//           >
//             Mehedi Hasan
//           </h1>

//           <p
//             className="hero-in mt-4 font-display text-xl font-medium text-accent sm:text-2xl"
//             style={stagger(2)}
//           >
//             MERN stack developer
//           </p>

//           <p
//             className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-muted"
//             style={stagger(3)}
//           >
//             I turn ideas into working web apps, with logins, payments and admin
//             dashboards, and I explain every step in plain English.
//           </p>

//           <div
//             className="hero-in mt-9 flex flex-col gap-3 sm:flex-row"
//             style={stagger(4)}
//           >
//             <Link
//               to="/contacts"
//               className="rounded-md bg-accent px-6 py-3 text-center font-semibold text-ink-950 transition hover:bg-accent/90"
//             >
//               Get in touch
//             </Link>
//             <Link
//               to="/projects"
//               className="rounded-md border border-line px-6 py-3 text-center font-semibold text-fg transition hover:border-subtle hover:bg-ink-800"
//             >
//               View projects
//             </Link>
//           </div>
//         </div>

//         {/* Photo */}
//         <div
//           className="hero-in mx-auto w-full max-w-sm lg:max-w-none"
//           style={stagger(2)}
//         >
//           <div className="relative">
//             <div
//               className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent/40"
//               aria-hidden="true"
//             />
//             <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-ink-800">
//               <img
//                 src={portrait}
//                 alt="Portrait of Mehedi Hasan"
//                 width="800"
//                 height="1000"
//                 fetchPriority="high"
//                 decoding="async"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import { FiArrowRight, FiAward, FiBookOpen, FiMapPin } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs, SiMongodb } from "react-icons/si";
import portrait from "../assets/mehedi-portrait.webp";

const stagger = (n) => ({ animationDelay: `${n * 0.12}s` });

const facts = [
  { icon: FiBookOpen, text: "BSc in CSE" },
  { icon: FiAward, text: "PTE Academic 84/90" },
  { icon: FiMapPin, text: "Dhaka, Bangladesh" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-x-clip">
      {/* Background grid */}
      <div
        className="hero-grid pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-14 md:pb-32 md:pt-20 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ───────── Text ───────── */}
        <div>
          <p
            className="hero-in inline-flex items-center gap-2 rounded-full border border-line bg-ink-900 px-3.5 py-1.5 text-sm text-muted"
            style={stagger(0)}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for work
          </p>

          <h1
            className="hero-in mt-6 font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            style={stagger(1)}
          >
            <span className="block">Mehedi</span>
            <span className="text-outline block">Hasan</span>
          </h1>

          <p
            className="hero-in mt-6 flex items-center gap-3 font-display text-xl font-medium text-accent sm:text-2xl"
            style={stagger(2)}
          >
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            MERN stack developer
          </p>

          <p
            className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={stagger(3)}
          >
            I turn ideas into working web apps, with logins, payments and admin
            dashboards, and I explain every step in plain English.
          </p>

          <div
            className="hero-in mt-9 flex flex-col gap-3 sm:flex-row"
            style={stagger(4)}
          >
            <Link
              to="/contacts"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-on-accent transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_12px_28px_-12px_var(--accent)] motion-safe:hover:-translate-y-0.5"
            >
              Get in touch
              <FiArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-md border border-line px-6 py-3 font-semibold text-fg transition-all duration-300 hover:border-accent/50 hover:bg-ink-800 motion-safe:hover:-translate-y-0.5"
            >
              View projects
            </Link>
          </div>

          <ul
            className="hero-in mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"
            style={stagger(5)}
          >
            {facts.map(({ icon: Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-2">
                <Icon className="text-accent" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* ───────── Visual ───────── */}
        <div
          className="hero-in relative mx-auto w-full max-w-sm lg:max-w-md"
          style={stagger(2)}
        >
          {/* Glow and dots behind */}
          <div
            className="hero-glow pointer-events-none absolute -inset-12 -z-10"
            aria-hidden="true"
          />
          <div
            className="dots pointer-events-none absolute -bottom-6 -left-6 -z-10 h-36 w-36"
            aria-hidden="true"
          />

          {/* Offset arch outline (sits behind the solid portrait panel) */}
          <div
            className="absolute inset-0 translate-x translate-y rounded-b-2xl rounded-t-[9rem] border border-accent/40"
            aria-hidden="true"
          />

          {/* Arch portrait: solid background so the outline can't show through */}
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-b-2xl rounded-t-[9rem] border border-line"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 25%, var(--ink-800)), var(--ink-800))",
            }}
          >
            <img
              src={portrait}
              alt="Portrait of Mehedi Hasan"
              width="800"
              height="1000"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating code card */}
          <div
            className="hero-in absolute -left-3 top-1/3 sm:-left-12"
            style={stagger(5)}
            aria-hidden="true"
          >
            <div className="float rounded-xl border border-line bg-ink-900/90 p-4 shadow-xl backdrop-blur">
              <div className="mb-3 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-subtle/60" />
                <span className="h-2 w-2 rounded-full bg-subtle/60" />
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <div className="font-mono text-[11px] leading-5 text-muted sm:text-xs">
                <p>
                  <span className="text-accent">const</span> developer = {"{"}
                </p>
                <p className="pl-4">
                  stack: <span className="text-accent">{'"MERN"'}</span>,
                </p>
                <p className="pl-4">
                  auth: <span className="text-accent">true</span>,
                </p>
                <p className="pl-4">
                  payments: <span className="text-accent">{'"Stripe"'}</span>,
                </p>
                <p>{"};"}</p>
              </div>
            </div>
          </div>

          {/* Floating stack chip */}
          <div
            className="hero-in absolute -bottom-5 -right-2 sm:-right-8"
            style={stagger(6)}
            aria-hidden="true"
          >
            <div className="float-slow flex items-center gap-3 rounded-xl border border-line bg-ink-900/90 px-4 py-3 shadow-xl backdrop-blur">
              <FaReact className="text-xl text-[#0ea5e9]" />
              <SiNodedotjs className="text-xl text-[#4caf50]" />
              <SiMongodb className="text-xl text-[#22a355]" />
              <span className="ml-1 text-xs font-medium text-muted">
                Full-stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}