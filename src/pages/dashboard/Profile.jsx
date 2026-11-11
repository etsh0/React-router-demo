export default function Profile() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
      <p className="text-slate-500 text-sm">
        Your profile settings live at <code className="font-mono bg-slate-100 px-1 rounded">/dashboard/profile</code>.
      </p>
      <div className="bg-emerald-50 rounded-xl border border-emerald-100 p-4 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-emerald-300 flex items-center justify-center text-2xl">👤</div>
        <div>
          <p className="font-semibold text-slate-800">Admin User</p>
          <p className="text-sm text-slate-500">admin@routerdemo.dev</p>
        </div>
      </div>
    </div>
  );
}
