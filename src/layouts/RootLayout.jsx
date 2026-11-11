/**
 * RootLayout
 * ──────────────────────────────────────────────────────────
 * Accent: Blue  |  teach badge: "RootLayout"
 *
 * Structure:
 *   <html data-teach="on|off">   ← TeachToggle writes this
 *     top Navbar (NavLinks to all top-level sections)
 *     address bar strip (useLocation → current path)
 *     <OutletZone />    ← where nested routes render
 *     Footer
 *   </html>
 */
import { NavLink, useLocation } from "react-router-dom";
import OutletZone from "../components/OutletZone";
import Badge from "../components/Badge";
import TeachToggle from "../components/TeachToggle";

function NavItem({ to, children, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        [
          "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150",
          isActive
            ? "bg-blue-600 text-white shadow-sm"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function RootLayout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* ── Teaching wrapper: colored border + badge ── */}
      <div
        className={[
          "flex flex-col flex-1",
          // teach mode: blue rounded card with border
          "teach:m-2 teach:rounded-2xl teach:border-4 teach:border-blue-400 teach:shadow-blue-100 teach:shadow-lg teach:overflow-hidden",
        ].join(" ")}
      >
        {/* Badge in top-left corner */}
        <div className="teach:flex hidden items-center gap-2 px-4 pt-3 pb-0">
          <Badge label="RootLayout" color="blue" />
        </div>

        {/* ── Navbar ── */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-1">
            <span className="font-bold text-blue-600 mr-4 text-sm tracking-tight">
              ⚡ RouterDemo
            </span>
            {/* end prop: so "/" doesn't match /about, /dashboard, etc. */}
            <NavItem to="/" end>Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/dashboard">Dashboard</NavItem>
            <NavItem to="/products">Products</NavItem>
            <NavItem to="/users">Users</NavItem>
            <div className="ml-auto flex gap-1">
              <NavItem to="/login">Login</NavItem>
              <NavItem to="/register">Register</NavItem>
            </div>
          </nav>
        </header>

        {/* ── Address bar: shows current URL path ── */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 py-2">
          <div className="max-w-6xl mx-auto flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono">📍 path:</span>
            <span className="font-mono text-sm text-blue-700 bg-white border border-slate-200 rounded px-3 py-0.5 shadow-sm">
              {pathname}
            </span>
          </div>
        </div>

        {/* ── Main content: Outlet renders here ── */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
          <OutletZone className="h-full" />
        </main>

        {/* ── Footer ── */}
        <footer className="border-t border-slate-200 bg-white px-4 py-4">
          <div className="max-w-6xl mx-auto text-center text-xs text-slate-400 font-mono">
            React Router v6 · Vite · Tailwind CSS v4
          </div>
        </footer>
      </div>

      {/* Floating teach toggle – outside the layout card */}
      <TeachToggle />
    </div>
  );
}
