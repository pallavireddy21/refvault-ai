

"use client";

import { useEffect, useState } from "react";

type Reference = {
  id: number;
  fullName: string;
};



export default function GenerateLetterPage() {
  const [formData, setFormData] = useState({
    positionTitle: "",
    organization: "",
    reference: "",
    positionDescription: "",
  });


  const [emailDraft, setEmailDraft] = useState("");
  const [letterDraft, setLetterDraft] = useState("");
   const [references, setReferences] = useState<Reference[]>([]);

  useEffect(() => {
  const savedReferences = JSON.parse(
    localStorage.getItem("references") || "[]"
  );

  setReferences(savedReferences);
}, []);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleGenerate() {
    const email = `Dear ${formData.reference},

I hope you are doing well. I am applying for the ${formData.positionTitle} position at ${formData.organization}, and I wanted to ask if you would be comfortable providing a recommendation for me.

I believe your perspective on my academic and technical work would be very valuable for this opportunity.

Thank you for your time and support.

Best regards,
Pallavi`;

    const letter = `To Whom It May Concern,

I am pleased to recommend Pallavi for the ${formData.positionTitle} position at ${formData.organization}. Based on her academic background, technical skills, and dedication to learning, I believe she would be a strong candidate for this opportunity.

Pallavi has demonstrated strong problem-solving ability, commitment, and interest in software engineering and AI-related systems. Her ability to learn quickly and apply technical concepts makes her well suited for research and professional opportunities.

I recommend her with confidence.

Sincerely,
${formData.reference}`;

    setEmailDraft(email);
    setLetterDraft(letter);
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/dashboard" className="text-sm text-blue-400 hover:text-blue-300">
          ← Back to Dashboard
        </a>

        <h1 className="mt-6 text-4xl font-bold">Generate Recommendation Letter</h1>
        <p className="mt-2 text-slate-400">
          Create a request email and recommendation letter draft.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <form className="space-y-6 rounded-2xl bg-slate-900 p-6">
            <input
              name="positionTitle"
              value={formData.positionTitle}
              onChange={handleChange}
              placeholder="Position Title"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Organization"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            />

            <select
              name="reference"
              value={formData.reference}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            >
              {/* <option>Professor</option>
              <option>Team lead</option>
              <option>Manager</option> */}
              <option value="">Select a reference</option>

              {references.map((reference) => (
              <option key={reference.id} value={reference.fullName}>
              {reference.fullName}
              </option>
     ))}
            </select>

            <textarea
              name="positionDescription"
              value={formData.positionDescription}
              onChange={handleChange}
              rows={6}
              placeholder="Paste job or research description..."
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={handleGenerate}
              className="w-full rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600"
            >
              Generate Draft
            </button>
          </form>

          <div className="space-y-6 rounded-2xl bg-slate-900 p-6">
            <div>
              <h2 className="text-xl font-semibold text-blue-300">
                Request Email Draft
              </h2>
              <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-slate-950 p-4 text-sm text-slate-300">
                {emailDraft || "Your request email will appear here..."}
              </pre>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-300">
                Recommendation Letter Draft
              </h2>
              <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-slate-950 p-4 text-sm text-slate-300">
                {letterDraft || "Your recommendation letter will appear here..."}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}