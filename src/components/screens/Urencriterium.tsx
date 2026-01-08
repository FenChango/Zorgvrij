"use client";
import { useState } from "react";
export default function Urencriterium({ onBack }: any) {
  const DOEL_UREN = 1225;
  const [uren, setUren] = useState(0);
  const voortgang = Math.min(100, Math.round((uren / DOEL_UREN) * 100));
  const resterend = DOEL_UREN - uren;

  return (
    <section className="p-4 pb-24">
      <button onClick={onBack} className="text-sm text-brand-600 mb-2">
        ← Terug
      </button>
      <h2 className="h2 mb-3">Urencriterium</h2>

      <div className="card grid gap-3">
        <div className="flex justify-between">
          <span>Doel: 1225 uur/jaar</span>
          <span className="font-semibold text-brand-600">{voortgang}%</span>
        </div>
        <input
          type="number"
          value={uren}
          onChange={(e) => setUren(parseFloat(e.target.value) || 0)}
          className="border rounded-lg px-3 py-2 w-full"
          placeholder="Voer totaal gelogde uren in"
        />
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-2 bg-brand-600"
            style={{ width: `${voortgang}%` }}
          />
        </div>
        <p className="text-sm text-gray-600">Nog {resterend} uur te gaan</p>
      </div>
    </section>
  );
}
