export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          Secure AI-powered reference management
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          RefVault AI
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Store trusted references, record achievements, and generate professional
          recommendation letter drafts using AI.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/dashboard"
            className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600"
          >
            Get Started
          </a>

          <a
            href="#how-it-works"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-900"
          >
            How It Works
          </a>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-8 text-3xl font-bold">How it works</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">1. Save References</h3>
            <p className="mt-3 text-slate-400">
              Add professors, managers, mentors, and their relationship details.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">2. Record Achievements</h3>
            <p className="mt-3 text-slate-400">
              Store projects, skills, grades, awards, publications, and work impact.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">3. Generate Letters</h3>
            <p className="mt-3 text-slate-400">
              AI creates request emails and draft recommendation letters.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}