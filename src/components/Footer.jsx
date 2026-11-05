import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contacts", label: "Contact" },
];

const socials = [
  { href: "https://github.com/evo264714", label: "GitHub", icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/mehedi-hasan-026372278/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61590524911124",
    label: "Facebook",
    icon: FaFacebook,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-900">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/P82TdCk/481248708-1613480832612995-5037061505902725476-n.jpg"
              alt=""
              className="h-14 w-14 rounded-full border border-line object-cover"
            />
            <div>
              <p className="font-display text-xl font-semibold">Mehedi Hasan</p>
              <p className="mt-1 text-sm text-muted">
                MERN stack developer based in Bangladesh
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <nav aria-label="Footer">
              <h3 className="mb-3 text-sm font-semibold text-fg">Pages</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-muted transition-colors hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-fg">Elsewhere</h3>
              <ul className="space-y-2 text-sm">
                {socials.map(({ href, label, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                    >
                      <Icon aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mehedi Hasan. All rights reserved.</p>
          <p>
            Have a project in mind?{" "}
            <Link
              to="/contacts"
              className="font-medium text-accent hover:underline"
            >
              Let's talk
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
