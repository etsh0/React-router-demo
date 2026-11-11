/**
 * Badge – small mono chip shown in the corner of each layout when teach mode is ON.
 * Usage: <Badge color="blue" label="RootLayout" />
 */
export default function Badge({ label, color = "slate" }) {
  const colorMap = {
    blue: "border-blue-500 text-blue-600 bg-blue-50",
    emerald: "border-emerald-500 text-emerald-600 bg-emerald-50",
    orange: "border-orange-500 text-orange-600 bg-orange-50",
    pink: "border-pink-500 text-pink-600 bg-pink-50",
    teal: "border-teal-500 text-teal-600 bg-teal-50",
    violet: "border-violet-500 text-violet-600 bg-violet-50",
    slate: "border-slate-400 text-slate-500 bg-slate-50",
  };

  return (
    <span
      className={[
        // Base: always hidden; teach: variant reveals it
        "teach:inline-flex",
        "hidden items-center",
        "font-mono text-[10px] font-semibold leading-none",
        "px-2 py-1 rounded-full border",
        colorMap[color] ?? colorMap.slate,
      ].join(" ")}
    >
      {label}
    </span>
  );
}
