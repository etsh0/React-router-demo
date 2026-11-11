export default function PickUser() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[240px] text-center p-8">
      <div className="text-5xl mb-4">👈</div>
      <h2 className="text-xl font-semibold text-slate-700 mb-2">Pick a user</h2>
      <p className="text-slate-400 text-sm">
        Select a user from the list to view their profile.<br/>
        This is the <code className="font-mono bg-slate-100 px-1 rounded">index</code> route of <code className="font-mono bg-slate-100 px-1 rounded">UsersLayout</code>.
      </p>
    </div>
  );
}
