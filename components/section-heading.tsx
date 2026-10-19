export function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
}) {
  const centered = align === "center";
  const headingClass = `mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl ${centered ? "text-center" : ""}`;

  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className={`eyebrow ${centered ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      {as === "h1" ? (
        <h1 className={headingClass}>{title}</h1>
      ) : (
        <h2 className={headingClass}>{title}</h2>
      )}
      {description ? (
        <p className="mt-4 text-base leading-7 text-steel">{description}</p>
      ) : null}
    </div>
  );
}
