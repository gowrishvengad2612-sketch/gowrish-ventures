"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DebatePage() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [side, setSide] = useState("");
  const [argument, setArgument] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");
    setError("");

    // Basic validation
    if (!name || !contact || !age || !side || !argument) {
      setError("Please fill in all the fields.");
      return;
    }

    const ageNumber = Number(age);

    if (!Number.isInteger(ageNumber) || ageNumber < 13 || ageNumber > 100) {
      setError("Please enter a valid age.");
      return;
    }

    if (argument.trim().length < 20) {
      setError("Please write at least 20 characters in your argument.");
      return;
    }

    setLoading(true);

    try {
const { error: insertError } = await supabase
  .from("arguments")
  .insert({
  name: name.trim(),
  Contact: contact.trim(),
  age: ageNumber,
  side: side,
  argument: argument.trim(),
  status: "pending",
  selected: false,
})

      if (insertError) {
        console.error(insertError);
        setError(insertError.message);
        return;
      }

      // Clear form
      setName("");
      setContact("");
      setAge("");
      setSide("");
      setArgument("");

      setMessage(
        "Your argument has been submitted successfully and is now waiting for moderation."
      );
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="px-6 pb-16 pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
            Public Debate
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            NEET: Ban It or Make It Fair?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Share your perspective. Every submission is reviewed before it
            appears publicly.
          </p>
        </div>
      </section>

      {/* DEBATE SIDES */}
      <section className="px-6 pb-12">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <div className="mb-4 text-3xl">🟤</div>

            <h2 className="text-2xl font-black">
              SUPPORT — BAN NEET
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Argue why NEET should be removed or fundamentally changed.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <div className="mb-4 text-3xl">⚫</div>

            <h2 className="text-2xl font-black">
              OPPOSE — FAIR NEET
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Argue why NEET should remain, but become fairer and more
              accessible.
            </p>
          </div>
        </div>
      </section>

      {/* JOIN THE DEBATE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-gray-200 bg-white p-6 shadow-xl sm:p-10">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
              Your Voice Matters
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              JOIN THE DEBATE
            </h2>

            <p className="mt-3 text-gray-600">
              Submit your argument for moderation. Your personal details will
              not be displayed publicly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <div>
              <label className="mb-2 block text-sm font-bold">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                required
              />
            </div>

            {/* CONTACT */}
            <div>
              <label className="mb-2 block text-sm font-bold">
                Email or Mobile Number
              </label>

              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter your email or mobile number"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                required
              />

              <p className="mt-2 text-xs text-gray-500">
                This information is kept private and is only available for
                moderation.
              </p>
            </div>

            {/* AGE */}
            <div>
              <label className="mb-2 block text-sm font-bold">
                Age
              </label>

              <input
                type="number"
                min="13"
                max="100"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                required
              />
            </div>

            {/* SIDE */}
            <div>
              <label className="mb-3 block text-sm font-bold">
                Choose Your Side
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setSide("BAN NEET")}
                  className={`rounded-2xl border-2 p-5 text-left transition ${
                    side === "BAN NEET"
                      ? "border-black bg-black text-white"
                      : "border-gray-200 bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  <div className="text-2xl">🟤</div>

                  <div className="mt-2 font-black">
                    SUPPORT — BAN NEET
                  </div>

                  <div
                    className={`mt-1 text-sm ${
                      side === "BAN NEET"
                        ? "text-gray-300"
                        : "text-gray-500"
                    }`}
                  >
                    I support banning or fundamentally changing NEET.
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSide("FAIR NEET")}
                  className={`rounded-2xl border-2 p-5 text-left transition ${
                    side === "FAIR NEET"
                      ? "border-black bg-black text-white"
                      : "border-gray-200 bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  <div className="text-2xl">⚫</div>

                  <div className="mt-2 font-black">
                    OPPOSE — FAIR NEET
                  </div>

                  <div
                    className={`mt-1 text-sm ${
                      side === "FAIR NEET"
                        ? "text-gray-300"
                        : "text-gray-500"
                    }`}
                  >
                    I support keeping NEET but making it fairer.
                  </div>
                </button>
              </div>
            </div>

            {/* ARGUMENT */}
            <div>
              <label className="mb-2 block text-sm font-bold">
                Write Your Argument
              </label>

              <textarea
                value={argument}
                onChange={(e) => setArgument(e.target.value)}
                placeholder="Write your complete argument here..."
                rows={8}
                className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 leading-7 outline-none transition focus:border-black"
                required
              />

              <p className="mt-2 text-xs text-gray-500">
                Your complete argument is sent to the admin for moderation.
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                ❌ {error}
              </div>
            )}

            {/* SUCCESS */}
            {message && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
                ✅ {message}
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-black px-6 py-4 text-lg font-black text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "SUBMITTING..." : "SUBMIT ARGUMENT"}
            </button>

            <p className="text-center text-xs leading-5 text-gray-500">
              By submitting, you understand that your argument will be
              reviewed by an administrator before any public display.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}