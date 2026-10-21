import { contactFacts, type ContactFact } from "@/lib/site";

export function ContactFacts({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const facts = contactFacts();
  const onDark = tone === "dark";

  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
      {facts.map((fact) => (
        <Fact key={fact.id} fact={fact} onDark={onDark} />
      ))}
    </dl>
  );
}

function Fact({ fact, onDark }: { fact: ContactFact; onDark: boolean }) {
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
        className={`mt-2 font-display font-bold leading-none ${
          fact.emphasis
            ? onDark
              ? "text-4xl text-white sm:text-5xl"
              : "text-3xl text-blue sm:text-4xl"
            : onDark
              ? "text-2xl text-white sm:text-3xl"
              : "text-2xl text-navy sm:text-3xl"
        }`}
      >
        {fact.value}
      </dd>
    </div>
  );
}
