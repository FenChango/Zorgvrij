"use client";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import Startwijzer from "@/components/screens/Startwijzer";
import Urencriterium from "@/components/screens/Urencriterium";
import Opdrachten from "@/components/screens/Opdrachten";
import Finance from "@/components/screens/Finance";

export default function Dashboard() {
  const [tab, setTab] = useState<
    "home" | "start" | "uren" | "opdrachten" | "geld" | "meer"
  >("home");

  return (
    <main className="min-h-[100dvh] phone bg-gray-50">
      <header className="p-4 flex items-center justify-between bg-white shadow-sm">
        <h1 className="font-semibold text-brand-700 text-lg">ZorgVrij</h1>
        <button className="text-sm text-gray-600">Uitloggen</button>
      </header>

      {tab === "home" && (
        <section className="p-4 pb-24">
          <h2 className="text-lg font-semibold text-brand-700 mb-3">
            Welkom terug 👋
          </h2>
          <div className="grid gap-4">
            <button
              onClick={() => setTab("start")}
              className="card flex items-center justify-between"
            >
              <span>📋 Startwijzer</span>
              <span>→</span>
            </button>
            <button
              onClick={() => setTab("uren")}
              className="card flex items-center justify-between"
            >
              <span>⏱️ Urencriterium</span>
              <span>→</span>
            </button>
            <button
              onClick={() => setTab("opdrachten")}
              className="card flex items-center justify-between"
            >
              <span>🗂️ Opdrachten & legitieme uren</span>
              <span>→</span>
            </button>
            <button
              onClick={() => setTab("geld")}
              className="card flex items-center justify-between"
            >
              <span>💶 Geld & reserveringen</span>
              <span>→</span>
            </button>
          </div>
        </section>
      )}

      {tab === "start" && <Startwijzer onBack={() => setTab("home")} />}
      {tab === "uren" && <Urencriterium onBack={() => setTab("home")} />}
      {tab === "opdrachten" && <Opdrachten onBack={() => setTab("home")} />}
      {tab === "geld" && <Finance onBack={() => setTab("home")} />}

      <BottomNav tab={tab} setTab={setTab} />
    </main>
  );
}
