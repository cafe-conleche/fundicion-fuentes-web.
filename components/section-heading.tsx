export function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
}) {
  const headingClass = "mt-2 font-display text-3xl text-navy sm:text-4xl";

  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">
          {eyebrow}
        </p>
      ) : null}
      {as === "h1" ? (
        <h1 className={headingClass}>{title}</h1>
      ) : (
        <h2 className={headingClass}>{title}</h2>
      )}
      {description ? (
        <p className="mt-3 text-base leading-7 text-steel">{description}</p>
      ) : null}
    </div>
  );
}
