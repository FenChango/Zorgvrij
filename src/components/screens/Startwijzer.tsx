"use client";
export default function Startwijzer({ onBack }: any) {
  const stappen = [
    "KvK-inschrijving",
    "VOG",
    "Verzekeringen (AVB/BAV)",
    "KOR / btw-keuze",
    "BIG / AGB",
  ];

  return (
    <section className="p-4 pb-24">
      <button onClick={onBack} className="text-sm text-brand-600 mb-2">
        ← Terug
      </button>
      <h2 className="h2 mb-3">Startwijzer</h2>
      <div className="card grid gap-2 text-sm">
        {stappen.map((t, i) => (
          <label
            key={i}
            className="flex items-center gap-3 border p-2 rounded-lg"
          >
            <input type="checkbox" className="accent-brand-600" />
            <span>{t}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
