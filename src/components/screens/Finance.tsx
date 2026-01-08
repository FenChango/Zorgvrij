"use client";
import { useState } from "react";
export default function Finance({ onBack }: any) {
  const [inkomen, setInkomen] = useState<number | null>(null);
  const [belasting, setBelasting] = useState(27);
  const [pensioen, setPensioen] = useState(10);
  const [vakantie, setVakantie] = useState(8);
  const [ziekte, setZiekte] = useState(2);
  const [bemiddelingsFee, setBemiddelingsFee] = useState(10);

  const totaal = belasting + pensioen + vakantie + ziekte + bemiddelingsFee;
  const totaalReservering = inkomen ? (inkomen * totaal) / 100 : 0;

  return (
    <section className="p-4 pb-24">
      <button onClick={onBack} className="text-sm text-brand-600 mb-2">
        ← Terug
      </button>
      <h2 className="h2 mb-3">Geld & reserveringen</h2>
      <div className="card grid gap-3">
        <label>
          <span className="text-sm text-gray-700">
            Gemiddeld maandinkomen (€)
          </span>
          <input
            type="number"
            className="border rounded-lg px-3 py-2 w-full"
            placeholder="bijv. 3200"
            value={inkomen ?? ""}
            onChange={(e) => setInkomen(parseFloat(e.target.value) || 0)}
          />
        </label>
        <p className="text-sm text-gray-600">
          Belasting: {belasting}%, Pensioen: {pensioen}%, Vakantie: {vakantie}%,
          Ziekte: {ziekte}%, Bemiddelingsfee: {bemiddelingsFee}%
        </p>
        {inkomen && (
          <div className="mt-3 text-sm">
            <p>
              Totaal reservering: <b>€ {totaalReservering.toFixed(2)}</b>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
