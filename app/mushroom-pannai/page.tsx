import FarmPlanner from "../components/farmplanner";
export default function MushroomPannai() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Header */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <a
            href="/"
            className="text-lg font-bold tracking-tight transition hover:text-black/60"
          >
            GOWRISH.
          </a>

          <a
            href="/"
            className="rounded-full border border-black/20 px-5 py-2 text-sm transition hover:bg-black hover:text-white"
          >
            ← Back to Ventures
          </a>

        </div>
      </header>


{/* Hero */}
<section className="relative overflow-hidden border-b border-black/10">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/mushroom.jpg')",
    }}
  />

  {/* Mild white overlay */}
  <div className="absolute inset-0 bg-white/10" />

  {/* Soft gradient for readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/60 to-white/55" />

  <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">

    <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/40">
      Agriculture • Mushroom Farming
    </p>

    <div className="max-w-4xl">

      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
        Mushroom
        <br />
        <span className="text-black/30">Pannai.</span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">
        A modern agricultural venture focused on mushroom cultivation,
        sustainable farming and creating practical opportunities through
        agriculture.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href="#about"
          className="rounded-full bg-black px-7 py-3 font-medium text-white transition hover:scale-105"
        >
          Explore Venture ↓
        </a>

        <a
          href="#contact"
          className="rounded-full border border-black/20 px-7 py-3 font-medium transition hover:bg-black hover:text-white"
        >
          Contact Us
        </a>

      </div>

    </div>
  </div>
</section>
{/* Farm Planner */}
<FarmPlanner />

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-7xl border-b border-black/10 px-6 py-24"
      >

        <div className="grid gap-12 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/35">
              01 — About
            </p>

            <h2 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Growing ideas
              <br />
              from the ground up.
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-black/55">

            <p>
              Mushroom Pannai is an agricultural venture concept built around
              modern mushroom cultivation and practical farming solutions.
            </p>

            <p>
              The focus is on building a sustainable approach to agriculture
              while creating opportunities for production, entrepreneurship
              and future growth.
            </p>

          </div>

        </div>
      </section>


      {/* Focus Areas */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/35">
          02 — Focus Areas
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          What we are building.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group rounded-3xl border border-black/10 bg-black/[0.025] p-8 transition duration-300 hover:-translate-y-2 hover:border-black/25 hover:bg-black/[0.05]">

            <div className="text-4xl">🍄</div>

            <p className="mt-12 text-xs uppercase tracking-[0.25em] text-black/35">
              01
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Mushroom Cultivation
            </h3>

            <p className="mt-4 leading-7 text-black/50">
              Focused on modern and sustainable mushroom farming practices
              with attention to quality and efficient production.
            </p>

          </div>


          {/* Card 2 */}
          <div className="group rounded-3xl border border-black/10 bg-black/[0.025] p-8 transition duration-300 hover:-translate-y-2 hover:border-black/25 hover:bg-black/[0.05]">

            <div className="text-4xl">🌱</div>

            <p className="mt-12 text-xs uppercase tracking-[0.25em] text-black/35">
              02
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Sustainable Farming
            </h3>

            <p className="mt-4 leading-7 text-black/50">
              Exploring responsible farming approaches that make better use
              of resources and support long-term agricultural growth.
            </p>

          </div>


          {/* Card 3 */}
          <div className="group rounded-3xl border border-black/10 bg-black/[0.025] p-8 transition duration-300 hover:-translate-y-2 hover:border-black/25 hover:bg-black/[0.05]">

            <div className="text-4xl">📈</div>

            <p className="mt-12 text-xs uppercase tracking-[0.25em] text-black/35">
              03
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Future Growth
            </h3>

            <p className="mt-4 leading-7 text-black/50">
              Developing opportunities around agricultural production,
              entrepreneurship and future expansion.
            </p>

          </div>

        </div>
      </section>


      {/* Vision */}
      <section className="border-y border-black/10 bg-black/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/35">
            03 — Vision
          </p>

          <div className="grid gap-10 lg:grid-cols-2">

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Agriculture can be
              <br />
              <span className="text-black/30">
                practical, modern
              </span>
              <br />
              and sustainable.
            </h2>

            <div className="flex items-center">

              <p className="text-lg leading-8 text-black/55">
                The vision behind Mushroom Pannai is to explore agriculture as
                a modern business opportunity — combining cultivation,
                responsible resource use and entrepreneurship to create
                meaningful value.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* Future */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="rounded-3xl border border-black/10 bg-black/[0.025] p-8 sm:p-12 lg:p-16">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/35">
                04 — Future
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                From a farm
                <br />
                to a venture.
              </h2>

            </div>

            <div>

              <p className="leading-8 text-black/55">
                Mushroom Pannai is intended to grow beyond cultivation into a
                broader agricultural venture. Future possibilities can include
                improved production systems, value-added opportunities,
                partnerships and scalable farming solutions.
              </p>

            </div>

          </div>

        </div>
      </section>


{/* Contact */}
<section 
  id="contact" 
  className="border-t border-white/10 bg-[#4A2C20] text-white"
>
  <div className="mx-auto max-w-7xl px-6 py-24">

    <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/50">
      05 — Contact
    </p>

    <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

      <div>

        <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Interested in
          <br />
          <span className="text-white/50">
            agriculture?
          </span>
        </h2>

      </div>

      <div>

        <p className="max-w-lg text-lg leading-8 text-white/70">
          Have an idea, partnership opportunity or interest in the
          venture? Let&apos;s start a conversation.
        </p>

        <a
          href="mailto:gowrishvengad2612@gmail.com"
          className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-medium text-[#4A2C20] transition hover:scale-105"
        >
          Start a Conversation →
        </a>

      </div>

    </div>

  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-black/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-black/35 sm:flex-row sm:items-center sm:justify-between">

          <p>© {new Date().getFullYear()} Gowrish Ventures</p>

          <a
            href="/"
            className="transition hover:text-black"
          >
            Gowrish Ventures ↑
          </a>

        </div>

      </footer>

    </main>
  );
}