"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const benefits = [
  {
    icon: "☀️",
    title: "Rooftop Solar",
    description:
      "Turn unused rooftop space into a source of clean electricity for your home or business.",
  },
  {
    icon: "💰",
    title: "Lower Electricity Bills",
    description:
      "Generate your own electricity and reduce your dependence on conventional grid power.",
  },
  {
    icon: "🇮🇳",
    title: "Government Support",
    description:
      "Explore applicable government subsidies and incentives for eligible solar installations.",
  },
  {
    icon: "⚡",
    title: "Clean Power",
    description:
      "Generate renewable electricity while moving toward a cleaner and more sustainable future.",
  },
  {
    icon: "🏠",
    title: "25+ Year Life",
    description:
      "Quality solar systems are designed to deliver reliable performance for many years.",
  },
  {
    icon: "🌍",
    title: "Sustainable Future",
    description:
      "Every solar installation can contribute to reducing dependence on fossil-fuel-based electricity.",
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Details",
    description:
      "Tell us your location, electricity usage and approximate monthly electricity bill.",
  },
  {
    number: "02",
    title: "Understand Your Roof",
    description:
      "Evaluate your rooftop, available space, energy requirements and solar potential.",
  },
  {
    number: "03",
    title: "Compare Options",
    description:
      "Understand suitable system sizes, installation options, estimated costs and savings.",
  },
  {
    number: "04",
    title: "Go Solar",
    description:
      "Choose the right solution and move forward with installation and commissioning.",
  },
];

const faqs = [
  {
    question: "What is rooftop solar?",
    answer:
      "Rooftop solar uses photovoltaic panels installed on a building's roof to convert sunlight into electricity for the property.",
  },
  {
    question: "How much solar capacity do I need?",
    answer:
      "The ideal system size depends on your electricity consumption, rooftop space, sunlight availability and budget.",
  },
  {
    question: "Can I reduce my electricity bill with solar?",
    answer:
      "Yes. A correctly designed solar system can significantly reduce the amount of electricity you need to purchase from the grid.",
  },
  {
    question: "Is government subsidy available?",
    answer:
      "Eligible residential consumers may be able to receive support under applicable government solar schemes such as PM Surya Ghar Yojana. Eligibility and subsidy amounts depend on the current scheme rules.",
  },
  {
    question: "How long does a solar system last?",
    answer:
      "Solar panels are generally designed for long-term operation, with many quality panels carrying performance warranties extending beyond 20 years.",
  },
  {
    question: "Can solar be used for businesses?",
    answer:
      "Yes. Rooftop solar can be considered for shops, offices, factories, warehouses, institutions and other commercial or industrial buildings.",
  },
];

export default function SolarEnergy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            GOWRISH<span className="text-black/40">.</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-black/50 md:flex">
            <a href="#benefits" className="transition hover:text-black">
              Benefits
            </a>

            <a href="#process" className="transition hover:text-black">
              Process
            </a>

            <a href="#faq" className="transition hover:text-black">
              FAQ
            </a>

            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-black px-5 py-2.5 text-sm text-white transition hover:scale-105"
          >
            Get Started
          </a>

        </div>
      </nav>


     {/* SOLAR HERO */}
<section className="relative min-h-screen overflow-hidden bg-black text-white">

  {/* Full Landscape Solar Image */}
  <Image
    src="/solar-image.jpg"
    alt="Solar Energy"
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />

  {/* Dark overlay for text readability */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Left-to-right gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

  {/* Content */}
  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-32">

    <div className="max-w-4xl">

      <Link
        href="/"
        className="mb-12 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
      >
        ← Back to Gowrish Ventures
      </Link>

      <p className="text-xs font-medium uppercase tracking-[0.4em] text-white/70">
        02 — Clean Energy
      </p>

      <h1 className="mt-6 text-6xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[110px]">
        Solar Energy.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
        Exploring practical clean-energy solutions for homes,
        businesses and industries — turning sunlight into
        long-term possibilities.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">

        <a
          href="#benefits"
          className="rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:scale-105"
        >
          Explore Solar
        </a>

        <a
          href="#contact"
          className="rounded-full border border-white/40 px-7 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-black"
        >
          Start a Conversation →
        </a>

      </div>

    </div>

  </div>

  {/* Bottom label */}
  <div className="absolute bottom-6 right-6 z-10 hidden text-xs uppercase tracking-[0.3em] text-white/50 sm:block">
    Clean Energy / 02
  </div>

</section>

      {/* SUBSIDY */}
      <section className="border-y border-black/10 bg-[#f5f3ef] px-6 py-20 sm:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_auto]">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-black/35">
              Government Support
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              PM Surya Ghar Yojana
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-black/50">
              Residential consumers may be eligible for financial support
              under the PM Surya Ghar: Muft Bijli Yojana, subject to the
              current government guidelines and eligibility requirements.
            </p>

          </div>


          <div className="rounded-3xl bg-black p-8 text-white sm:p-10">

            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Residential Solar
            </p>

            <p className="mt-4 text-4xl font-bold">
              Up to ₹78,000*
            </p>

            <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">
              Potential central financial assistance for eligible residential
              rooftop solar installations.
            </p>

            <p className="mt-5 text-[11px] leading-5 text-white/30">
              *Subject to applicable government scheme guidelines and
              eligibility. Verify current rules before making a purchase.
            </p>

          </div>

        </div>

      </section>


      {/* BENEFITS */}
      <section
        id="benefits"
        className="border-b border-black/10 px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-xs uppercase tracking-[0.3em] text-black/30">
              01 — Why Solar?
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              More than electricity.
              <br />
              <span className="text-black/35">
                It&apos;s an investment in tomorrow.
              </span>
            </h2>

          </div>


          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit, index) => (

              <div
                key={benefit.title}
                className="group rounded-3xl border border-[#9a7254]/40 bg-white p-8 shadow-[0_8px_30px_rgba(120,75,45,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(120,75,45,0.16)]"
              >

                <div className="flex items-center justify-between">

                  <div className="text-4xl">
                    {benefit.icon}
                  </div>

                  <span className="text-xs text-black/25">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-8 text-xl font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/45">
                  {benefit.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* BUSINESS */}
      <section className="bg-[#050505] px-6 py-28 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Beyond Homes
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
                Solar for
                <br />
                <span className="text-white/35">
                  growing businesses.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/45">
                Solar energy can also be explored for commercial and
                industrial spaces where rooftops, electricity consumption and
                operating costs create an opportunity for renewable power.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Industries",
                "Warehouses",
                "Offices",
                "Retail Shops",
                "Institutions",
                "Agriculture",
              ].map((item, index) => (

                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.08]"
                >

                  <span className="text-xs text-white/25">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 text-lg font-medium">
                    {item}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* PROCESS */}
      <section
        id="process"
        className="border-b border-black/10 px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <p className="text-xs uppercase tracking-[0.3em] text-black/30">
              03 — Simple Process
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              From rooftop
              <br />
              to clean power.
            </h2>

          </div>


          <div className="grid gap-0 md:grid-cols-4">

            {process.map((step, index) => (

              <div
                key={step.number}
                className={`border-black/10 p-7 ${
                  index !== 0 ? "border-t md:border-l md:border-t-0" : ""
                }`}
              >

                <p className="text-sm font-medium text-[#8b674d]">
                  {step.number}
                </p>

                <h3 className="mt-8 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/45">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* SOLAR CALCULATOR */}
      <section className="bg-[#f5f3ef] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-black/30">
                Estimate Your Potential
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Start with
                <br />
                your electricity bill.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-black/50">
                Your monthly electricity bill is one of the starting points
                for understanding the solar system that may suit your
                property.
              </p>

            </div>


            <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl sm:p-10">

              <div className="grid gap-6 sm:grid-cols-2">

                <div className="sm:col-span-2">

                  <label className="text-xs uppercase tracking-[0.2em] text-black/40">
                    Monthly Electricity Bill
                  </label>

                  <div className="mt-3 flex items-center rounded-2xl border border-black/10 px-5">

                    <span className="text-lg text-black/40">
                      ₹
                    </span>

                    <input
                      type="number"
                      placeholder="Example: 2500"
                      className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-black/25"
                    />

                  </div>

                </div>


                <div>

                  <label className="text-xs uppercase tracking-[0.2em] text-black/40">
                    Property Type
                  </label>

                  <select className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none">

                    <option>Home</option>
                    <option>Shop</option>
                    <option>Office</option>
                    <option>Factory</option>
                    <option>Other</option>

                  </select>

                </div>


                <div>

                  <label className="text-xs uppercase tracking-[0.2em] text-black/40">
                    Location
                  </label>

                  <input
                    type="text"
                    placeholder="City / District"
                    className="mt-3 w-full rounded-2xl border border-black/10 px-5 py-4 outline-none placeholder:text-black/25"
                  />

                </div>

              </div>


              <button
                type="button"
                className="mt-7 w-full rounded-full bg-black px-7 py-4 font-medium text-white transition hover:scale-[1.02]"
              >
                Calculate Solar Potential →
              </button>


              <p className="mt-4 text-center text-xs text-black/30">
                Indicative calculation only. Final system sizing requires a
                proper site assessment.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FAQ */}
      <section
        id="faq"
        className="border-b border-black/10 px-6 py-28"
      >

        <div className="mx-auto max-w-5xl">

          <div className="mb-14">

            <p className="text-xs uppercase tracking-[0.3em] text-black/30">
              04 — Questions
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Frequently asked
              <br />
              questions.
            </h2>

          </div>


          <div className="border-t border-black/10">

            {faqs.map((faq, index) => (

              <div
                key={faq.question}
                className="border-b border-black/10"
              >

                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                >

                  <span className="text-lg font-medium sm:text-xl">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-lg transition ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>

                </button>


                {openFaq === index && (

                  <div className="max-w-3xl pb-7 pr-12 text-sm leading-7 text-black/50">
                    {faq.answer}
                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CONTACT CTA */}
      <section
        id="contact"
        className="bg-[#2B1A14] px-6 py-28 text-white sm:py-36"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Solar Energy
          </p>

          <div className="mt-7 grid gap-12 lg:grid-cols-2 lg:items-end">

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              Your roof
              <br />
              <span className="text-white/40">
                can do more.
              </span>
            </h2>

            <div>

              <p className="max-w-lg text-base leading-7 text-white/55">
                Interested in exploring rooftop solar for your home,
                business or property? Start a conversation and understand
                what may work for you.
              </p>

              <a
                href="mailto:gowrishvengad2612@gmail.com?subject=Solar%20Energy%20Enquiry"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#2B1A14] transition hover:scale-105"
              >
                Start a Solar Enquiry
                <span>↗</span>
              </a>

            </div>

          </div>


          <div className="mt-20 border-t border-white/15 pt-7">

            <div className="flex flex-col justify-between gap-5 text-sm text-white/40 sm:flex-row">

              <p>
                Gowrish Ventures — Solar Energy
              </p>

              <a
                href="mailto:gowrishvengad2612@gmail.com"
                className="transition hover:text-white"
              >
                gowrishvengad2612@gmail.com
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-black/10 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-black/30 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Gowrish Vengad
          </p>

          <Link
            href="/"
            className="transition hover:text-black"
          >
            Back to Gowrish Ventures →
          </Link>

        </div>

      </footer>

    </main>
  );
}