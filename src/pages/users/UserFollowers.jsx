import { useParams } from "react-router-dom";

export default function UserFollowers() {
  const { id } = useParams(); // inherited from parent :id route
  const followers = ["@reactfan", "@routermaster", "@jslearner", "@webdev99"];
  return (
    <div className="space-y-3">
      <div className="text-xs font-mono text-teal-500 bg-teal-50 border border-teal-100 rounded px-3 py-1 inline-block">
        useParams() → id: "{id}"
      </div>
      <h2 className="text-lg font-semibold text-slate-800">Followers</h2>
      <p className="text-slate-400 text-xs">User #{id}'s followers. Path: <code className="font-mono">/users/{id}/followers</code></p>
      <div className="grid grid-cols-2 gap-2">
        {followers.map((f) => (
          <div key={f} className="bg-pink-50 rounded-lg border border-pink-100 px-3 py-2 text-sm font-medium text-pink-700">
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}
