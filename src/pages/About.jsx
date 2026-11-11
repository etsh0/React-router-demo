export default function About() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
      <div className="text-5xl mb-4">ℹ️</div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">About</h1>
      <p className="text-slate-500">
        This page lives at <code className="font-mono bg-slate-100 px-1 rounded text-blue-600">/about</code> inside RootLayout.
      </p>
    </div>
  );
}
