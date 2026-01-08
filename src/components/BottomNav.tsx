"use client";
import { useCallback } from "react";

export type TabKey = "home" | "start" | "uren" | "opdrachten" | "geld" | "meer";

interface Props {
  tab: TabKey;
  setTab: (t: TabKey) => void; // or React.Dispatch<React.SetStateAction<TabKey>>
}

export default function BottomNav({ tab, setTab }: Props) {
  const items: { key: TabKey; label: string; icon: string }[] = [
    { key: "home", label: "Home", icon: "🏠" },
    { key: "opdrachten", label: "Opdrachten", icon: "🗂️" },
    { key: "geld", label: "Geld", icon: "💶" },
    { key: "uren", label: "Uren", icon: "⏱️" },
    { key: "start", label: "Startwijzer", icon: "📋" },
  ];

  // stable handler (keeps TS happy and avoids re-renders)
  const handleSet = useCallback((k: TabKey) => () => setTab(k), [setTab]);

  return (
    <nav className="fixed bottom-0 left-0 right-0">
      <div className="phone bg-white/90 backdrop-blur border-t border-gray-200 h-16 grid grid-cols-5">
        {items.map((i) => {
          const active = tab === i.key;
          return (
            <button
              key={i.key}
              onClick={handleSet(i.key)}
              className={`flex flex-col items-center justify-center text-[11px] ${
                active ? "text-blue-700 font-semibold" : "text-gray-600"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-sm ${
                  active ? "bg-blue-50" : "bg-gray-50"
                }`}
              >
                <span className="text-lg">{i.icon}</span>
              </div>
              <span className="mt-0.5">{i.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
