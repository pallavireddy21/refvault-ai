"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

type Achievement = {
  id: number;
  title: string;
  category: string;
  description: string;
  skills: string;
  impact: string;
};

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const savedAchievements = JSON.parse(
      localStorage.getItem("achievements") || "[]"
    );

    setAchievements(savedAchievements);
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
            <h1 className="text-4xl font-bold">Saved Achievements</h1>
            <p className="mt-2 text-slate-400">
              View your projects, research work, awards, and impact.
            </p>
          </div>

          <a
            href="/add-achievement"
            className="rounded-xl bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-600"
          >
            Add Achievement
          </a>
        </div>

        <div className="mt-8 grid gap-6">
          {achievements.length === 0 ? (
            <div className="rounded-2xl bg-slate-900 p-6 text-slate-400">
              No achievements saved yet.
            </div>
          ) : (
            achievements.map((achievement) => (
              <div key={achievement.id} className="rounded-2xl bg-slate-900 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">{achievement.title}</h2>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300">
                    {achievement.category}
                  </span>
                </div>

                <p className="mt-4 text-slate-300">{achievement.description}</p>

                <p className="mt-4">
                  <span className="text-slate-400">Skills:</span>{" "}
                  {achievement.skills}
                </p>

                <p className="mt-2">
                  <span className="text-slate-400">Impact:</span>{" "}
                  {achievement.impact}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
    </>
  );
}