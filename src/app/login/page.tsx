"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // dummy login → ga naar app
    router.push("/app");
  };

  return (
    <main className="min-h-[100dvh] p-4 flex flex-col">
      <h1 className="h1 mb-4">Inloggen</h1>
      <form onSubmit={submit} className="card grid gap-3">
        <label className="grid gap-1">
          <span className="text-sm text-gray-700">E-mail</span>
          <input
            className="border rounded-lg px-3 py-2"
            inputMode="email"
            type="email"
            required
            placeholder="jij@voorbeeld.nl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-gray-700">Wachtwoord</span>
          <input
            className="border rounded-lg px-3 py-2"
            type="password"
            required
            placeholder="••••••••"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="mt-4 py-3 rounded-xl bg-brand-600 text-white font-semibold shadow-soft"
        >
          Inloggen
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Geen account?{" "}
        <a href="#" className="text-brand-600 font-medium">
          Registreer later (nog niet actief)
        </a>
      </p>
    </main>
  );
}
