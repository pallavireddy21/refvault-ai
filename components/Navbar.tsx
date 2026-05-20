// import Navbar from "@/components/Navbar";
// export default function Navbar() {
//   return (
//     <>
//     <Navbar />
//     <nav className="border-b border-slate-800 bg-slate-950 px-8 py-4 text-white">
//       <div className="mx-auto flex max-w-7xl items-center justify-between">
//         <a href="/" className="text-2xl font-bold text-blue-400">
//           RefVault AI
//         </a>

//         <div className="flex gap-6 text-sm">
//           <a href="/dashboard" className="hover:text-blue-400">Dashboard</a>
//           <a href="/references" className="hover:text-blue-400">References</a>
//           <a href="/achievements" className="hover:text-blue-400">Achievements</a>
//           <a href="/generate-letter" className="hover:text-blue-400">Generate Letter</a>
//         </div>
//       </div>
//     </nav>
//     </>
//   );
// }

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-8 py-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="text-2xl font-bold text-blue-400">
          RefVault AI
        </a>

        <div className="flex gap-6 text-sm">
          <a href="/dashboard" className="hover:text-blue-400">
            Dashboard
          </a>

          <a href="/references" className="hover:text-blue-400">
            References
          </a>

          <a href="/achievements" className="hover:text-blue-400">
            Achievements
          </a>

          <a href="/generate-letter" className="hover:text-blue-400">
            Generate Letter
          </a>
        </div>
      </div>
    </nav>
  );
}