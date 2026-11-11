import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <div className="bg-white rounded-xl border border-red-100 shadow-sm p-8 text-center">
      <div className="text-5xl mb-4">🚫</div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">404 — Not Found</h1>
      <p className="text-slate-500 mb-1">
        No route matched <code className="font-mono bg-slate-100 px-1 rounded text-red-500">{pathname}</code>.
      </p>
      <p className="text-slate-400 text-sm mb-6">
        The <code className="font-mono bg-slate-100 px-1 rounded">{"<Route path=\"*\">"}</code> catch-all caught this URL.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        ← Go home
      </Link>
    </div>
  );
}
