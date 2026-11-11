/**
 * AuthLayout
 * ──────────────────────────────────────────────────────────
 * Accent: Violet  |  teach badge: "AuthLayout"
 *
 * Completely outside RootLayout — no navbar, no footer.
 * Centered card in a full-screen violet-tinted background.
 * Routes: /login, /register, /forgot-password
 */
import { Link } from "react-router-dom";
import OutletZone from "../components/OutletZone";
import Badge from "../components/Badge";
import TeachToggle from "../components/TeachToggle";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div
        className={[
          "w-full max-w-sm",
          "teach:border-4 teach:border-violet-400 teach:rounded-2xl teach:shadow-violet-100 teach:shadow-lg",
        ].join(" ")}
      >
        {/* Badge + label */}
        <div className="teach:flex hidden items-center justify-between mb-3 px-1">
          <Badge label="AuthLayout" color="violet" />
          <span className="font-mono text-xs text-violet-400">(no RootLayout)</span>
        </div>

        {/* Auth card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Brand header */}
          <div className="bg-violet-600 px-6 pt-8 pb-6 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h1 className="text-white font-bold text-xl">RouterDemo</h1>
            <p className="text-violet-200 text-sm mt-1">
              Auth pages live outside RootLayout
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex border-b border-slate-200">
            <Link
              to="/login"
              className="flex-1 text-center py-3 text-sm font-medium text-slate-600 hover:bg-violet-50 hover:text-violet-700 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="flex-1 text-center py-3 text-sm font-medium text-slate-600 hover:bg-violet-50 hover:text-violet-700 transition-colors"
            >
              Register
            </Link>
            <Link
              to="/forgot-password"
              className="flex-1 text-center py-3 text-sm font-medium text-slate-600 hover:bg-violet-50 hover:text-violet-700 transition-colors"
            >
              Forgot?
            </Link>
          </div>

          {/* Outlet zone */}
          <div className="p-6">
            <OutletZone />
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          <Link to="/" className="hover:text-violet-600 underline underline-offset-2">
            ← Back to app
          </Link>
        </p>
      </div>

      <TeachToggle />
    </div>
  );
}
