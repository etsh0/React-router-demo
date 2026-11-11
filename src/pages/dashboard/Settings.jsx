export default function Settings() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
      <p className="text-slate-500 text-sm">
        App-wide preferences at <code className="font-mono bg-slate-100 px-1 rounded">/dashboard/settings</code>.
      </p>
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
        {["Dark mode", "Notifications", "Two-factor auth"].map((s) => (
          <div key={s} className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-slate-700">{s}</span>
            <div className="w-10 h-5 bg-slate-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
