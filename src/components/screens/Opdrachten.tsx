"use client";
export default function Opdrachten({ onBack }: any) {
  const acties = [
    { t: "Administratie (30–60 min)", u: 0.75 },
    { t: "Scholing / Bij&Her", u: 1.5 },
    { t: "Acquisitie (klantgesprek / bureau)", u: 1 },
    { t: "Zakelijke reistijd", u: 1 },
  ];

  return (
    <section className="p-4 pb-24">
      <button onClick={onBack} className="text-sm text-brand-600 mb-2">
        ← Terug
      </button>
      <h2 className="h2 mb-3">Opdrachten & legitieme uren</h2>
      <div className="card grid gap-2 text-sm">
        {acties.map((x, i) => (
          <button
            key={i}
            className="p-3 rounded-lg bg-brand-50 hover:bg-brand-100 text-left"
          >
            + {x.t}
          </button>
        ))}
      </div>
    </section>
  );
}
