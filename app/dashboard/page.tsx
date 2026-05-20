import Navbar from "@/components/Navbar";
export default function DashboardPage() {
  // return (
  return (
  <>
    <Navbar />
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="mt-2 text-slate-400">
              Manage references, achievements, and recommendation requests.
            </p>
          </div>

          <a
            href="/generate-letter"
            className="rounded-xl bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-600"
          >
            Generate Letter
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">References</h2>
            <p className="mt-3 text-slate-400">
              Store professors, mentors, and managers securely.
            </p>

            <a
              href="/add-reference"
              className="mt-6 inline-block rounded-lg bg-slate-800 px-4 py-2 hover:bg-slate-700"
            >
              View References
            </a>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Achievements</h2>
            <p className="mt-3 text-slate-400">
              Save projects, awards, publications, and impact.
            </p>


            <a
              href="/add-achievement"
              className="mt-6 inline-block rounded-lg bg-slate-800 px-4 py-2 hover:bg-slate-700"
            >
              View Achievements
            </a>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Requests</h2>
            <p className="mt-3 text-slate-400">
              Track recommendation letter requests and approvals.
            </p>

            <a
              href="/generate-letter"
              className="mt-6 inline-block rounded-lg bg-slate-800 px-4 py-2 hover:bg-slate-700"
            >
              View Requests
            </a>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}