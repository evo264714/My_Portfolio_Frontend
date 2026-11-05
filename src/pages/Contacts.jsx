import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";

const info = [
  {
    label: "Email",
    value: "mehedievo@gmail.com",
    href: "mailto:mehedievo@gmail.com",
    icon: FiMail,
  },
  {
    label: "Phone",
    value: "+880 1626 618090",
    href: "tel:+8801626618090",
    icon: FiPhone,
  },
  {
    label: "Location",
    value: "Dhaka, Bangladesh",
    icon: FiMapPin,
  },
];

export default function Contacts({ embedded = false }) {
  return (
    <Section
      id="contact"
      as={embedded ? "h2" : "h1"}
      title="Get in touch"
      description="Have a project in mind or want to collaborate? Send a message and I'll get back to you."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <ul className="space-y-6">
          {info.map(({ label, value, href, icon: Icon }) => (
            <li key={label} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line bg-ink-900 text-accent">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-muted">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="font-medium text-fg transition-colors hover:text-accent"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-medium text-fg">{value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <ContactForm />
      </div>
    </Section>
  );
}
