"use client";
import Navbar from "@/components/Navbar";

import { useState } from "react";

export default function AddAchievementPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Project",
    description: "",
    skills: "",
    impact: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }


  function handleSave() {
  const existingAchievements = JSON.parse(
    localStorage.getItem("achievements") || "[]"
  );

  const newAchievement = {
    id: Date.now(),
    ...formData,
  };

  localStorage.setItem(
    "achievements",
    JSON.stringify([...existingAchievements, newAchievement])
  );

  alert("Achievement saved successfully!");

  setFormData({
    title: "",
    category: "Project",
    description: "",
    skills: "",
    impact: "",
  });
}
  // function handleSave() {
  //   console.log("Achievement saved:", formData);
  //   alert("Achievement saved successfully!");
  // }

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/dashboard" className="text-sm text-blue-400 hover:text-blue-300">
          ← Back to Dashboard
        </a>

        <h1 className="mt-6 text-4xl font-bold">Add Achievement</h1>
        <p className="mt-2 text-slate-400">
          Save projects, internships, research work, awards, and measurable impact.
        </p>

        <form className="mt-8 space-y-6 rounded-2xl bg-slate-900 p-6">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Achievement Title"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>Project</option>
            <option>Internship</option>
            <option>Research</option>
            <option>Award</option>
            <option>Publication</option>
            <option>Leadership</option>
          </select>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            placeholder="Describe the achievement..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Skills Used: Python, React, AWS..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            name="impact"
            value={formData.impact}
            onChange={handleChange}
            placeholder="Impact / Result"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />

          <button
            type="button"
            onClick={handleSave}
            className="w-full rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600"
          >
            Save Achievement
          </button>
        </form>
      </div>
    </main>
    </>
  );
}