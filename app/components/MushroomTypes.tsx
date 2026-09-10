const mushrooms = [
  {
    icon: "🍄",
    name: "Oyster Mushroom",
    difficulty: "Easy",
    temperature: "20–30°C",
    humidity: "80–90%",
    period: "25–30 Days",
    market: "High",
    description:
      "A beginner-friendly mushroom with relatively simple cultivation requirements.",
  },
  {
    icon: "🥛",
    name: "Milky Mushroom",
    difficulty: "Moderate",
    temperature: "25–35°C",
    humidity: "80–90%",
    period: "30–40 Days",
    market: "High",
    description:
      "Well suited to warm climates and suitable for small and medium-scale farming.",
  },
  {
    icon: "⚪",
    name: "Button Mushroom",
    difficulty: "Advanced",
    temperature: "15–20°C",
    humidity: "80–90%",
    period: "30–45 Days",
    market: "Very High",
    description:
      "A popular commercial mushroom requiring more controlled growing conditions.",
  },
  {
    icon: "🌾",
    name: "Paddy Straw Mushroom",
    difficulty: "Moderate",
    temperature: "28–35°C",
    humidity: "80–90%",
    period: "20–30 Days",
    market: "Medium",
    description:
      "A warm-climate mushroom that can be cultivated using agricultural residues.",
  },
];

export default function MushroomTypes() {
  return (
    <section
      id="mushrooms"
      className="border-b border-black/10 bg-[#fafafa]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/35">
            02 — Mushroom Types
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Choose your
            <br />
            <span className="text-black/30">
              mushroom.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/50">
            Find the mushroom that matches your climate, experience,
            investment and farming goals.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">

          {mushrooms.map((mushroom) => (
            <div
              key={mushroom.name}
              className="group rounded-3xl border border-black/10 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-black/25 hover:shadow-xl"
            >

              {/* Top */}
              <div className="flex items-start justify-between">

                <div className="text-5xl">
                  {mushroom.icon}
                </div>

                <span className="rounded-full border border-black/10 px-4 py-1.5 text-xs text-black/50">
                  {mushroom.difficulty}
                </span>

              </div>

              {/* Name */}
              <h3 className="mt-8 text-2xl font-semibold">
                {mushroom.name}
              </h3>

              <p className="mt-3 leading-7 text-black/50">
                {mushroom.description}
              </p>

              {/* Details */}
              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-black/[0.03] p-4">
                  <p className="text-xs text-black/35">
                    TEMPERATURE
                  </p>
                  <p className="mt-2 font-medium">
                    {mushroom.temperature}
                  </p>
                </div>

                <div className="rounded-2xl bg-black/[0.03] p-4">
                  <p className="text-xs text-black/35">
                    HUMIDITY
                  </p>
                  <p className="mt-2 font-medium">
                    {mushroom.humidity}
                  </p>
                </div>

                <div className="rounded-2xl bg-black/[0.03] p-4">
                  <p className="text-xs text-black/35">
                    GROWING PERIOD
                  </p>
                  <p className="mt-2 font-medium">
                    {mushroom.period}
                  </p>
                </div>

                <div className="rounded-2xl bg-black/[0.03] p-4">
                  <p className="text-xs text-black/35">
                    MARKET POTENTIAL
                  </p>
                  <p className="mt-2 font-medium">
                    {mushroom.market}
                  </p>
                </div>

              </div>

              {/* Button */}
              <button
                className="mt-8 w-full rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Learn More →
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}