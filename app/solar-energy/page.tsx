export default function SolarEnergy() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="text-sm text-white/50 transition hover:text-white"
        >
          ← Back to Gowrish Ventures
        </a>

        <div className="mt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Clean Energy
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
            Solar Energy.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">
            Exploring clean-energy solutions that help homes, businesses and
            communities move toward a more sustainable future.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-4xl">☀️</div>
              <h2 className="mt-6 text-xl font-semibold">
                Solar Solutions
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/40">
                Exploring practical solar-energy solutions for the future.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-4xl">⚡</div>
              <h2 className="mt-6 text-xl font-semibold">
                Clean Power
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/40">
                Supporting the transition toward cleaner and smarter energy.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-4xl">🌍</div>
              <h2 className="mt-6 text-xl font-semibold">
                Sustainable Future
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/40">
                Building ideas that can create meaningful environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}