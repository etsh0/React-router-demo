/**
 * UserLayout
 * ──────────────────────────────────────────────────────────
 * Accent: Teal  |  teach badge: "UserLayout"
 * path: /users/:id
 *
 * This layout is NESTED inside UsersLayout, which is itself nested
 * inside RootLayout. That's 3 levels of <Outlet /> stacking!
 *
 * Shows a user card header + tab navigation (Posts, Followers, Settings).
 * Tab pages all call useParams() to get the :id inherited from this route.
 */
import { NavLink, useParams } from "react-router-dom";
import OutletZone from "../components/OutletZone";
import Badge from "../components/Badge";
import { USERS } from "./UsersLayout";

function Tab({ to, children, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        [
          "px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-150",
          isActive
            ? "bg-white border border-b-0 border-slate-200 text-teal-700 shadow-sm"
            : "text-slate-500 hover:text-teal-600 hover:bg-teal-50",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function UserLayout() {
  const { id } = useParams();
  const user = USERS.find((u) => u.id === Number(id));

  return (
    <div
      className={[
        "flex flex-col h-full",
        "teach:border-4 teach:border-teal-400 teach:rounded-2xl teach:p-3 teach:shadow-teal-100 teach:shadow-md",
      ].join(" ")}
    >
      {/* Badge */}
      <div className="teach:flex hidden items-center mb-2">
        <Badge label="UserLayout" color="teal" />
      </div>

      {/* ── User card header ── */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-3">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-200 text-teal-800 flex items-center justify-center text-xl font-bold">
              {user.name[0]}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">{user.name}</h2>
              <p className="text-sm text-slate-500">
                {user.role} · <span className="font-mono text-teal-600">id: {id}</span>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-slate-400 text-sm">User #{id} not found</p>
        )}
      </div>

      {/* ── Tab bar ── */}
      <div className="flex gap-1 px-1 mb-0">
        {/*
         * Note: no `end` on tab links – they should stay active for the full sub-path.
         * e.g. /users/1/posts should keep "Posts" active.
         */}
        <Tab to={`/users/${id}/posts`}>📝 Posts</Tab>
        <Tab to={`/users/${id}/followers`}>👥 Followers</Tab>
        <Tab to={`/users/${id}/settings`}>⚙️ Settings</Tab>
      </div>

      {/* ── Outlet zone: tab pages render here ── */}
      <OutletZone className="flex-1 bg-white rounded-b-xl rounded-tr-xl border border-slate-200 shadow-sm p-4" />
    </div>
  );
}
