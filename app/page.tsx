"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DebateSection from "./components/DebateSection";

const ventures = [
  {
    number: "01",
    title: "Mushroom Pannai",
    category: "Agriculture",
    description:
      "A modern agricultural venture focused on mushroom cultivation, sustainable farming and creating practical opportunities through agriculture.",
    icon: "🍄",
    href: "/mushroom-pannai",
    image: "/mushroom.jpg",
  },
  {
    number: "02",
    title: "Solar Energy",
    category: "Clean Energy",
    description:
      "Exploring clean-energy solutions that help homes, businesses and communities move toward a more sustainable future.",
    icon: "☀️",
    href: "/solar-energy",
    image: "/solar.jpg",
  },
  {
    number: "03",
    title: "Future Venture",
    category: "Coming Soon",
    description:
      "A new venture is currently being developed. More details will be revealed soon.",
    icon: "✦",
    href: "#",
    image: "/ucomming.avif",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            GOWRISH<span className="text-black/40">.</span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 text-sm text-black/60 md:flex">
            <a href="#about" className="transition hover:text-black">
              About
            </a>

            <a href="#ventures" className="transition hover:text-black">
              Ventures
            </a>

            <a href="#debate" className="transition hover:text-black">
              Debate
            </a>

            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-black/20 px-5 py-2.5 text-sm transition hover:bg-black hover:text-white md:block"
          >
            Let's Connect
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-black/10 px-3 py-2 md:hidden"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-black/10 bg-white px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5 text-black/70">

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>

              <a
                href="#ventures"
                onClick={() => setMenuOpen(false)}
              >
                Ventures
              </a>

              <a
                href="#debate"
                onClick={() => setMenuOpen(false)}
              >
                Debate
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>

            </div>
          </div>
        )}
      </nav>


      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pt-28 pb-16"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      >

        {/* SOFT CENTER GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.03] blur-3xl" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row">

          {/* LEFT CONTENT */}
          <div className="w-full max-w-2xl">

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-black/45">
              Entrepreneur · Builder · Visionary
            </p>

            <h1 className="text-6xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[110px]">
              Gowrish
              <br />

              <span className="text-black/45">
                Vengad.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-8 text-black/55">
              Building ventures across agriculture, clean energy and ideas
              that create meaningful impact.
            </p>

            <a
              href="#ventures"
              className="group mt-8 flex w-fit items-center gap-3 rounded-full bg-black px-7 py-4 font-medium text-white transition hover:scale-105"
            >
              Explore Ventures

              <span className="transition group-hover:translate-y-1">
                ↓
              </span>
            </a>

          </div>


          {/* RIGHT SIDE PHOTO */}
          <div className="w-full lg:w-[42%]">

            <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-black/10 shadow-xl sm:max-w-[420px] lg:max-w-[520px]">

              <Image
                src="/cb.PNG.jpg"
                alt="Gowrish Vengad"
                fill
                priority
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 520px"
                className="object-cover object-center"
              />

            </div>

          </div>

        </div>


        {/* BOTTOM LEFT N */}
        <div className="absolute bottom-5 left-6 flex h-12 w-12 items-center justify-center rounded-full border border-black/40 text-lg font-medium">
          N
        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-black/10 px-6 py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/30">
              01 — About
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Building ideas
              <br />
              into ventures.
            </h2>
          </div>

          <div className="text-lg leading-8 text-black/50">

            <p>
              I&apos;m Gowrish Vengad, an entrepreneur interested in building
              practical businesses and exploring ideas that can create real
              value.
            </p>

            <p className="mt-6">
              My focus is on agriculture, renewable energy and new ventures,
              while also creating a space where people can exchange ideas
              through meaningful social debates.
            </p>

          </div>

        </div>
      </section>


      {/* VENTURES */}
      <section
        id="ventures"
        className="border-t border-black/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          {/* HEADING */}
          <div className="mb-16">

            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/30">
              02 — Ventures
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Things I&apos;m building.
            </h2>

          </div>


          {/* VENTURE CARDS */}
          <div className="grid gap-7 md:grid-cols-3">

            {ventures.map((venture) => (
              <Link
                key={venture.number}
                href={venture.href}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#9a7254]
                  bg-white
                  shadow-[0_8px_30px_rgba(120,75,45,0.14)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#765139]
                  hover:shadow-[0_18px_45px_rgba(120,75,45,0.22)]
                "
              >

                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#f1efeb]">

                  <Image
                    src={venture.image}
                    alt={venture.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-black/5 transition duration-500 group-hover:bg-black/0" />

                  {/* NUMBER */}
                  <div className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/80 px-3 py-1.5 backdrop-blur-sm">

                    <span className="text-xs text-black/60">
                      {venture.number}
                    </span>

                  </div>


                  {/* ICON */}
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/80 text-xl backdrop-blur-sm">

                    {venture.icon}

                  </div>

                </div>


                {/* CONTENT */}
                <div className="p-7">

                  <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#8b674d]">
                    {venture.category}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {venture.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/45">
                    {venture.description}
                  </p>


                  {/* EXPLORE */}
                  <div className="mt-7 flex items-center justify-between">

                    <span className="text-sm font-medium">
                      Explore
                    </span>

                    <span
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        border border-[#9a7254]
                        text-sm
                        transition-all
                        duration-300
                        group-hover:bg-[#765139]
                        group-hover:text-white
                      "
                    >
                      ↗
                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>


      {/* DEBATE */}
      <DebateSection />


      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-[#3d2921] bg-[#2B1A14] px-6 py-24 text-white sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          {/* TOP LABEL */}
          <div className="mb-16 flex items-center gap-4">

            <span className="text-xs text-white/50">
              04
            </span>

            <span className="h-px w-10 bg-white/20" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/50">
              Contact
            </span>

          </div>


          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

            {/* LEFT */}
            <div>

              <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">

                Have an idea?

                <br />

                <span className="text-white/40">
                  Let&apos;s make it happen.
                </span>

              </h2>


              <p className="mt-8 max-w-md text-base leading-7 text-white/60 sm:text-lg">

                Whether you have a project, collaboration idea, or simply
                want to connect, feel free to reach out.

              </p>


              {/* EMAIL */}
              <div className="mt-12">

                <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Email
                </p>

                <a
                  href="mailto:gowrishvengad2612@gmail.com"
                  className="text-base text-white transition hover:text-white/60 sm:text-lg"
                >
                  gowrishvengad2612@gmail.com
                </a>

              </div>


              {/* PHONE */}
              <div className="mt-7">

                <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Phone
                </p>

                <a
                  href="tel:+917550383309"
                  className="text-base text-white transition hover:text-white/60 sm:text-lg"
                >
                  +91 75503 83309
                </a>

              </div>

            </div>


            {/* RIGHT */}
            <div>

              <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/40">
                Start a conversation
              </p>


              <div className="border-t border-white/15">

                {/* PROJECT */}
                <a
                  href="mailto:gowrishvengad2612@gmail.com?subject=Project%20Enquiry"
                  className="group flex items-center justify-between border-b border-white/15 py-7"
                >

                  <div>

                    <h3 className="text-xl font-medium text-white sm:text-2xl">
                      Project & Collaboration
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-white/45">
                      Have a project or idea you&apos;d like to discuss?
                      Let&apos;s explore how we can work together.
                    </p>

                  </div>

                  <span className="ml-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-[#2B1A14]">
                    ↗
                  </span>

                </a>


                {/* BUSINESS */}
                <a
                  href="mailto:gowrishvengad2612@gmail.com?subject=Business%20Enquiry"
                  className="group flex items-center justify-between border-b border-white/15 py-7"
                >

                  <div>

                    <h3 className="text-xl font-medium text-white sm:text-2xl">
                      Business Enquiry
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-white/45">
                      Interested in a business opportunity, partnership,
                      or collaboration?
                    </p>

                  </div>

                  <span className="ml-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-[#2B1A14]">
                    ↗
                  </span>

                </a>


                {/* GENERAL */}
                <a
                  href="mailto:gowrishvengad2612@gmail.com?subject=General%20Enquiry"
                  className="group flex items-center justify-between border-b border-white/15 py-7"
                >

                  <div>

                    <h3 className="text-xl font-medium text-white sm:text-2xl">
                      General Enquiry
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-white/45">
                      For questions, introductions, or just to say hello.
                    </p>

                  </div>

                  <span className="ml-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-[#2B1A14]">
                    ↗
                  </span>

                </a>

              </div>


              {/* BUTTON */}
              <a
                href="mailto:gowrishvengad2612@gmail.com"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#2B1A14] transition-all duration-300 hover:scale-[1.03]"
              >
                Start a Conversation
                <span>↗</span>
              </a>

            </div>

          </div>


          {/* BOTTOM */}
          <div className="mt-20 border-t border-white/15 pt-6">

            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Available for new opportunities
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-black/10 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-black/30 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Gowrish Vengad
          </p>

          <p>
            Building ventures. Creating impact.
          </p>

        </div>

      </footer>

    </main>
  );
}