function StatCard({ icon, label, value }) {
  return (
    <div className="bg-emerald-50 rounded-xl border border-emerald-100 p-4 flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-xs text-emerald-600 font-medium">{label}</p>
        <p className="text-xl font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Overview</h1>
      <p className="text-slate-500 text-sm">
        Dashboard index route — active only on the exact <code className="font-mono bg-slate-100 px-1 rounded">/dashboard</code> path.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <StatCard icon="📦" label="Orders" value="142" />
        <StatCard icon="👥" label="Users" value="38" />
        <StatCard icon="💰" label="Revenue" value="$9,200" />
        <StatCard icon="⭐" label="Rating" value="4.9" />
      </div>
    </div>
  );
}
