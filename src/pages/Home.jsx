export default function Home() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
      <div className="text-5xl mb-4">🏠</div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Home</h1>
      <p className="text-slate-500">
        You're at the root index route — rendered by <code className="font-mono bg-slate-100 px-1 rounded text-blue-600">/</code>.
      </p>
    </div>
  );
}
