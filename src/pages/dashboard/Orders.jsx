export default function Orders() {
  const orders = [
    { id: "ORD-001", item: "Headphones", status: "Shipped", total: "$129" },
    { id: "ORD-002", item: "Keyboard", status: "Delivered", total: "$89" },
    { id: "ORD-003", item: "Monitor", status: "Processing", total: "$349" },
  ];
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold text-slate-900">Orders</h1>
      <p className="text-slate-500 text-sm">Recent orders at <code className="font-mono bg-slate-100 px-1 rounded">/dashboard/orders</code>.</p>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        {orders.map((o) => (
          <div key={o.id} className="flex items-center justify-between px-4 py-3 border-b border-slate-100 last:border-0">
            <div>
              <p className="font-medium text-sm text-slate-800">{o.id}</p>
              <p className="text-xs text-slate-400">{o.item}</p>
            </div>
            <div className="text-right">
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">{o.status}</span>
              <p className="text-sm font-semibold text-slate-700 mt-1">{o.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
