"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

type Reference = {
  id: number;
  fullName: string;
  email: string;
  role: string;
  organization: string;
  relationship: string;
};

export default function ReferencesPage() {
  const [references, setReferences] = useState<Reference[]>([]);

  useEffect(() => {
    const savedReferences = JSON.parse(
      localStorage.getItem("references") || "[]"
    );

    setReferences(savedReferences);
  }, []);

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/dashboard" className="text-sm text-blue-400 hover:text-blue-300">
          ← Back to Dashboard
        </a>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Saved References</h1>
            <p className="mt-2 text-slate-400">
              View professors, managers, and mentors you saved.
            </p>
          </div>

          <a
            href="/add-reference"
            className="rounded-xl bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-600"
          >
            Add Reference
          </a>
        </div>

        <div className="mt-8 grid gap-6">
          {references.length === 0 ? (
            <div className="rounded-2xl bg-slate-900 p-6 text-slate-400">
              No references saved yet.
            </div>
          ) : (
            references.map((reference) => (
              <div key={reference.id} className="rounded-2xl bg-slate-900 p-6">
                <h2 className="text-2xl font-semibold">{reference.fullName}</h2>
                <p className="mt-1 text-slate-400">{reference.email}</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <p>
                    <span className="text-slate-400">Role:</span>{" "}
                    {reference.role}
                  </p>
                  <p>
                    <span className="text-slate-400">Organization:</span>{" "}
                    {reference.organization}
                  </p>
                </div>

                <p className="mt-4 text-slate-300">{reference.relationship}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
    </>
  );
}