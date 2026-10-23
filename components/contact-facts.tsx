import { contactFacts, type ContactFact } from "@/lib/site";

export function ContactFacts({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const facts = contactFacts();
  const onDark = tone === "dark";

  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-[1fr_1fr_1.5fr_1fr]">
      {facts.map((fact) => (
        <Fact key={fact.id} fact={fact} onDark={onDark} />
      ))}
    </dl>
  );
}

function Fact({ fact, onDark }: { fact: ContactFact; onDark: boolean }) {
  // LÓGICA NUEVA: Si estamos en el footer (onDark) y es el horario, acortamos el texto
  let displayValue = fact.value;
  if (onDark && fact.id === "horario") {
    displayValue = "Lun-Vie: 8:00 AM - 5:00 PM\nSáb: 8:00 AM - 2:00 PM";
  }

  return (
    <div className="min-w-0">
      <dt
        className={`text-xs font-semibold uppercase tracking-[0.16em] ${
          onDark ? "text-blue-light" : "text-steel"
        }`}
      >
        {fact.label}
      </dt>
      <dd
        className={`mt-2 font-display font-bold leading-tight whitespace-pre-line ${
          fact.emphasis
            ? onDark
              ? "text-3xl text-white sm:text-4xl"
              : "text-2xl text-blue sm:text-3xl"
            : onDark
              ? "text-xl text-white sm:text-2xl"
              : "text-xl text-navy sm:text-2xl"
        }`}
      >
        {displayValue}
      </dd>
    </div>
  );
}