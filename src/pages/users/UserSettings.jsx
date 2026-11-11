import { useParams } from "react-router-dom";

export default function UserSettings() {
  const { id } = useParams(); // inherited from parent :id route
  return (
    <div className="space-y-3">
      <div className="text-xs font-mono text-teal-500 bg-teal-50 border border-teal-100 rounded px-3 py-1 inline-block">
        useParams() → id: "{id}"
      </div>
      <h2 className="text-lg font-semibold text-slate-800">User Settings</h2>
      <p className="text-slate-400 text-xs">User #{id}'s settings. Path: <code className="font-mono">/users/{id}/settings</code></p>
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
        {["Email notifications", "Privacy mode", "Account deletion"].map((s) => (
          <div key={s} className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-slate-700">{s}</span>
            <div className="w-10 h-5 bg-slate-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
