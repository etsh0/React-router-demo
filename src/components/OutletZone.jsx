/**
 * OutletZone – wraps <Outlet /> with a dashed border + "<Outlet />" label
 * visible only in teach mode (data-teach="on").
 * className prop lets each layout add sizing / flex / overflow as needed.
 */
import { Outlet } from "react-router-dom";

export default function OutletZone({ className = "" }) {
  return (
    <div className={`outlet-wrapper relative ${className}`}>
      {/* Teach-mode label: hidden by default, shown via CSS in index.css + teach: variant */}
      <span className="outlet-label teach:block">{"<Outlet />"}</span>

      {/* Dashed border only in teach mode */}
      <div className={`teach:border-2 teach:border-dashed teach:border-slate-300 teach:rounded-lg teach:pt-4 h-full`}>
        <Outlet />
      </div>
    </div>
  );
}
