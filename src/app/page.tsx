export default function Page() {
  return (
    <main className="min-h-dvh bg-gray-50">
      <section className="mx-auto w-full max-w-[420px] px-4 py-6">
        {/* Hero */}
        <div className="text-center">
          <div className="text-4xl mb-2">🩺</div>
          <h1 className="text-2xl font-bold">ZorgVrij</h1>
          <p className="text-gray-600 mt-1">
            Mobile-first assistent voor zorg-zzp’ers
          </p>
        </div>

        {/* CTA’s */}
        <div className="mt-6 grid gap-3">
          <a
            href="/login"
            className="w-full text-center bg-blue-600 text-white py-3 rounded-xl shadow"
          >
            Inloggen
          </a>
          <a
            href="/onboarding"
            className="w-full text-center bg-white border border-gray-200 py-3 rounded-xl shadow-sm"
          >
            Aan de slag
          </a>
        </div>

        {/* Feature highlights */}
        <div className="mt-8 grid gap-3">
          <div className="rounded-xl bg-white p-4 shadow">
            <h3 className="font-semibold">Uren → Factuur</h3>
            <p className="text-sm text-gray-600">
              Van urenregistratie naar factuur in één flow.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow">
            <h3 className="font-semibold">Startwijzer</h3>
            <p className="text-sm text-gray-600">
              Checklist voor KvK, VOG, verzekeringen en meer.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow">
            <h3 className="font-semibold">Reserveringen</h3>
            <p className="text-sm text-gray-600">
              Belasting, pensioen, vakantie en ziekte automatisch berekend.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
