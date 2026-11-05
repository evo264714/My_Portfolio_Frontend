export default function Section({
  id,
  title,
  description,
  as: Heading = "h2",
  children,
}) {
  return (
    <section id={id} className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-12 max-w-2xl">
          <Heading className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            {title}
          </Heading>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {description}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}