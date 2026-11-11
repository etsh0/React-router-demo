import { useParams, Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", category: "Audio", price: "$129", desc: "Premium over-ear with 30h battery." },
  { id: 2, name: "Mechanical Keyboard", category: "Peripherals", price: "$89", desc: "Tactile switches, RGB, TKL layout." },
  { id: 3, name: "4K Monitor", category: "Display", price: "$349", desc: "27-inch IPS, 144Hz, USB-C." },
  { id: 4, name: "Ergonomic Chair", category: "Furniture", price: "$449", desc: "Lumbar support, mesh back, 5-year warranty." },
  { id: 5, name: "USB-C Hub", category: "Accessories", price: "$59", desc: "7-in-1: HDMI, 3×USB-A, SD, PD." },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[240px] text-center p-8">
        <div className="text-5xl mb-4">❓</div>
        <h2 className="text-xl font-semibold text-red-600 mb-2">Product not found</h2>
        <p className="text-slate-400 text-sm mb-4">
          No product with id <code className="font-mono bg-slate-100 px-1 rounded text-orange-600">{id}</code>
        </p>
        <Link to="/products" className="text-orange-600 text-sm underline hover:no-underline">
          ← Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <div className="text-xs font-mono text-orange-500 bg-orange-50 border border-orange-100 rounded px-3 py-1 inline-block">
        useParams() → id: "{id}"
      </div>
      <h1 className="text-2xl font-bold text-slate-900">{product.name}</h1>
      <p className="text-slate-500 text-sm">{product.desc}</p>
      <div className="flex gap-3 items-center">
        <span className="text-2xl font-bold text-orange-600">{product.price}</span>
        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">{product.category}</span>
      </div>
      <div className="bg-orange-50 rounded-xl border border-orange-100 p-4 text-sm text-orange-700">
        💡 Notice the search input on the left didn't reset — <strong>ProductsLayout stays mounted</strong> as you navigate between products.
      </div>
    </div>
  );
}
