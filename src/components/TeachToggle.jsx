/**
 * TeachToggle – floating button that flips data-teach on/off on <html>.
 * Uses no context/props: reads and writes the DOM attribute directly.
 * Position: fixed bottom-right, always on top.
 */
import { useState, useEffect } from "react";

export default function TeachToggle() {
  const [on, setOn] = useState(() => {
    // Default ON so students see the teaching UI from the start
    return document.documentElement.getAttribute("data-teach") !== "off";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-teach", on ? "on" : "off");
  }, [on]);

  return (
    <button
      onClick={() => setOn((v) => !v)}
      className={[
        "fixed bottom-5 right-5 z-50",
        "flex items-center gap-2 px-4 py-2 rounded-full",
        "text-sm font-semibold shadow-lg transition-all duration-300",
        on
          ? "bg-slate-800 text-white hover:bg-slate-700"
          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-md",
      ].join(" ")}
      title="Toggle teaching layout boundaries"
    >
      <span className="text-base">{on ? "🎓" : "👁️"}</span>
      {on ? "Hide Layout Boundaries" : "Show Layout Boundaries"}
    </button>
  );
}
