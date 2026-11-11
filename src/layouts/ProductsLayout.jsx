/**
 * ProductsLayout
 * ──────────────────────────────────────────────────────────
 * Accent: Orange  |  teach badge: "ProductsLayout"
 * path: /products
 *
 * Master-detail: product list (left sidebar) + <OutletZone /> (right).
 *
 * KEY TEACHING POINT:
 *   The sidebar contains a text <input>. As students navigate between
 *   /products/1, /products/2 etc., the input value is PRESERVED because
 *   ProductsLayout never unmounts – only the <Outlet /> content swaps.
 *   This demonstrates that layouts are persistent across child-route changes.
 */
import { NavLink } from "react-router-dom";
import { useState } from "react";
import OutletZone from "../components/OutletZone";
import Badge from "../components/Badge";

const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", category: "Audio" },
  { id: 2, name: "Mechanical Keyboard", category: "Peripherals" },
  { id: 3, name: "4K Monitor", category: "Display" },
  { id: 4, name: "Ergonomic Chair", category: "Furniture" },
  { id: 5, name: "USB-C Hub", category: "Accessories" },
];

export default function ProductsLayout() {
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={[
        "flex flex-col sm:flex-row gap-4",
        "teach:border-4 teach:border-orange-400 teach:rounded-2xl teach:p-4 teach:shadow-orange-100 teach:shadow-md",
      ].join(" ")}
    >
      {/* Badge */}
      <div className="teach:flex hidden items-center mb-1">
        <Badge label="ProductsLayout" color="orange" />
      </div>

      {/* ── Sidebar ── */}
      <aside className="sm:w-60 shrink-0">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-3 border-b border-slate-100 bg-orange-50">
            <p className="text-xs font-semibold text-orange-700 uppercase tracking-wider mb-2">
              Products
            </p>
            {/* 🎯 Teaching: type here, navigate between products, value stays! */}
            <input
              type="text"
              placeholder="🔍 Filter products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-sm px-3 py-1.5 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white"
            />
            <p className="text-[10px] text-orange-500 mt-1 font-mono">
              ← type here, then switch products
            </p>
          </div>
          <nav className="flex flex-col divide-y divide-slate-100">
            {filtered.map((p) => (
              <NavLink
                key={p.id}
                to={`/products/${p.id}`}
                className={({ isActive }) =>
                  [
                    "flex flex-col px-4 py-3 text-sm transition-colors duration-150",
                    isActive
                      ? "bg-orange-50 border-l-4 border-orange-500 text-orange-800"
                      : "text-slate-600 hover:bg-slate-50 border-l-4 border-transparent",
                  ].join(" ")
                }
              >
                <span className="font-medium">{p.name}</span>
                <span className="text-xs text-slate-400 mt-0.5">{p.category}</span>
              </NavLink>
            ))}
            {filtered.length === 0 && (
              <p className="px-4 py-6 text-sm text-slate-400 text-center">
                No products found
              </p>
            )}
          </nav>
        </div>
      </aside>

      {/* ── Outlet zone ── */}
      <OutletZone className="flex-1 min-h-[320px]" />
    </div>
  );
}
