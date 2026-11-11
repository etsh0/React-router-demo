export default function Register() {
  return (
    <div className="text-center space-y-3">
      <div className="text-4xl">✍️</div>
      <h1 className="text-xl font-bold text-slate-900">Register</h1>
      <p className="text-slate-400 text-sm">
        Path: <code className="font-mono bg-slate-100 px-1 rounded">/register</code>
        <br/>Auth pages share AuthLayout, not RootLayout.
      </p>
    </div>
  );
}
