"use client";

import { useState } from "react";

export default function AddReferencePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    organization: "",
    relationship: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSave() {
  const existingReferences = JSON.parse(
    localStorage.getItem("references") || "[]"
  );

  const newReference = {
    id: Date.now(),
    ...formData,
  };

  localStorage.setItem(
    "references",
    JSON.stringify([...existingReferences, newReference])
  );

  alert("Reference saved successfully!");

  setFormData({
    fullName: "",
    email: "",
    role: "",
    organization: "",
    relationship: "",
  });
}

//   function handleSave() {
//     console.log("Reference saved:", formData);
//     alert("Reference saved successfully!");
//   }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/dashboard" className="text-sm text-blue-400 hover:text-blue-300">
          ← Back to Dashboard
        </a>

        <h1 className="mt-6 text-4xl font-bold">Add Reference</h1>
        <p className="mt-2 text-slate-400">
          Save a professor, manager, mentor, or advisor.
        </p>

        <form className="mt-8 space-y-6 rounded-2xl bg-slate-900 p-6">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Professor, Manager, Mentor"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="University / Company"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />

          <textarea
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            placeholder="Describe your relationship..."
            rows={5}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />

          <button
            type="button"
            onClick={handleSave}
            className="w-full rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600"
          >
            Save Reference
          </button>
        </form>
      </div>
    </main>
  );
}