/**
 * DashboardLayout
 * ──────────────────────────────────────────────────────────
 * Accent: Emerald  |  teach badge: "DashboardLayout"
 * path: /dashboard
 *
 * Structure:
 *   sidebar (NavLinks: Overview, Profile, Settings, Orders)
 *   <OutletZone /> (right side, fills remaining space)
 */
import { NavLink } from "react-router-dom";
import OutletZone from "../components/OutletZone";
import Badge from "../components/Badge";

function SideNavItem({ to, icon, children, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
          isActive
            ? "bg-emerald-600 text-white shadow-sm"
            : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700",
        ].join(" ")
      }
    >
      <span className="text-base">{icon}</span>
      {children}
    </NavLink>
  );
}

export default function DashboardLayout() {
  return (
    <div
      className={[
        "flex flex-col sm:flex-row gap-4",
        // teach mode: emerald rounded card
        "teach:border-4 teach:border-emerald-400 teach:rounded-2xl teach:p-4 teach:shadow-emerald-100 teach:shadow-md",
      ].join(" ")}
    >
      {/* Badge */}
      <div className="teach:flex hidden items-center gap-2 col-span-2 mb-1">
        <Badge label="DashboardLayout" color="emerald" />
      </div>

      {/* ── Sidebar ── */}
      <aside className="sm:w-52 shrink-0">
        <div className="bg-white rounded-xl border border-slate-200 p-2 shadow-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-4 py-2">
            Dashboard
          </p>
          <nav className="flex flex-col gap-1">
            {/*
             * end prop: so "Overview" link (/dashboard) is active only on
             * the exact /dashboard path, not on /dashboard/profile etc.
             */}
            <SideNavItem to="/dashboard" end icon="📊">Overview</SideNavItem>
            <SideNavItem to="/dashboard/profile" icon="👤">Profile</SideNavItem>
            <SideNavItem to="/dashboard/settings" icon="⚙️">Settings</SideNavItem>
            <SideNavItem to="/dashboard/orders" icon="📦">Orders</SideNavItem>
          </nav>
        </div>
      </aside>

      {/* ── Outlet zone ── */}
      <OutletZone className="flex-1 min-h-[320px]" />
    </div>
  );
}
