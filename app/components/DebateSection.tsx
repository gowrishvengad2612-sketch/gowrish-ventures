import Link from "next/link";

export default function DebateSection() {
  return (
    <section
      id="debate"
      className="border-t border-black/10 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/30">
            03 — Social Debate
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Ideas deserve
            <br />
            a conversation.
          </h2>
        </div>

        <Link
          href="/debate"
          className="group block overflow-hidden rounded-[2rem] border border-[#9a7254] bg-white shadow-[0_8px_30px_rgba(120,75,45,0.14)] transition-all duration-500 hover:-translate-y-2 hover:border-[#765139] hover:shadow-[0_20px_50px_rgba(120,75,45,0.22)]"
        >
          <div className="grid md:grid-cols-[1fr_180px]">

            <div className="p-8 sm:p-12 md:p-14">

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-black/15 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-black/60">
                  Debate 01
                </span>

                <span className="rounded-full bg-[#2B1A14] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white">
                  Education
                </span>
              </div>

              <h3 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                NEET:
                <br />
                Ban It or Make It Fair?
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-7 text-black/50 sm:text-lg">
                Should NEET be abolished, or should the system be
                reformed to make medical admissions fairer for every
                student?
              </p>

              <div className="mt-10 flex items-center gap-4">
                <span className="text-sm font-medium">
                  Enter the debate
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9a7254] transition-all duration-300 group-hover:bg-[#765139] group-hover:text-white">
                  ↗
                </span>
              </div>

            </div>

            <div className="hidden items-center justify-center bg-[#2B1A14] md:flex">
              <span className="text-8xl font-semibold text-white/10 transition group-hover:text-white/20">
                01
              </span>
            </div>

          </div>
        </Link>

      </div>
    </section>
  );
}