/**
 * UsersLayout
 * ──────────────────────────────────────────────────────────
 * Accent: Pink  |  teach badge: "UsersLayout"
 * path: /users
 *
 * Shows a user list on the left and <OutletZone /> on the right.
 * When a user is selected, UserLayout renders inside the Outlet,
 * creating layout-inside-layout (3 nested Outlets total with RootLayout).
 */
import { NavLink } from "react-router-dom";
import OutletZone from "../components/OutletZone";
import Badge from "../components/Badge";

export const USERS = [
  { id: 1, name: "Alice Johnson", role: "Designer" },
  { id: 2, name: "Bob Smith", role: "Developer" },
  { id: 3, name: "Carol White", role: "Manager" },
  { id: 4, name: "David Lee", role: "DevOps" },
];

export default function UsersLayout() {
  return (
    <div
      className={[
        "flex flex-col sm:flex-row gap-4",
        "teach:border-4 teach:border-pink-400 teach:rounded-2xl teach:p-4 teach:shadow-pink-100 teach:shadow-md",
      ].join(" ")}
    >
      {/* Badge */}
      <div className="teach:flex hidden items-center mb-1">
        <Badge label="UsersLayout" color="pink" />
      </div>

      {/* ── User list sidebar ── */}
      <aside className="sm:w-52 shrink-0">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-100 bg-pink-50">
            <p className="text-xs font-semibold text-pink-700 uppercase tracking-wider">
              Users
            </p>
          </div>
          <nav className="flex flex-col divide-y divide-slate-100">
            {USERS.map((u) => (
              <NavLink
                key={u.id}
                to={`/users/${u.id}`}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150",
                    isActive
                      ? "bg-pink-50 border-l-4 border-pink-500 text-pink-800"
                      : "text-slate-600 hover:bg-slate-50 border-l-4 border-transparent",
                  ].join(" ")
                }
              >
                <span className="w-8 h-8 rounded-full bg-pink-200 text-pink-800 flex items-center justify-center text-xs font-bold shrink-0">
                  {u.name[0]}
                </span>
                <div>
                  <p className="font-medium leading-tight">{u.name}</p>
                  <p className="text-xs text-slate-400">{u.role}</p>
                </div>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* ── Outlet zone: UserLayout renders here ── */}
      <OutletZone className="flex-1 min-h-[320px]" />
    </div>
  );
}
