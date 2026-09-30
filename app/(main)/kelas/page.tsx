import Link from "next/link";

const kelas = ["1A", "1B", "2A", "2B", "3A", "3B"];

export default function KelasPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Kelas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {kelas.map((k) => (
          <Link
            key={k}
            href={`/kelas/${k}`}
            className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-blue-50 transition-colors"
          >
            <span className="text-lg font-semibold text-slate-700">Kelas {k}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}