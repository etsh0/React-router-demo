import { useParams } from "react-router-dom";

export default function UserPosts() {
  const { id } = useParams(); // inherited from parent :id route
  const posts = [
    { title: "Getting started with React Router", date: "Nov 2026" },
    { title: "Understanding nested routes", date: "Oct 2026" },
    { title: "The power of <Outlet />", date: "Sep 2026" },
  ];
  return (
    <div className="space-y-3">
      <div className="text-xs font-mono text-teal-500 bg-teal-50 border border-teal-100 rounded px-3 py-1 inline-block">
        useParams() → id: "{id}"
      </div>
      <h2 className="text-lg font-semibold text-slate-800">Posts</h2>
      <p className="text-slate-400 text-xs">User #{id}'s posts. Path: <code className="font-mono">/users/{id}/posts</code></p>
      <div className="space-y-2">
        {posts.map((p) => (
          <div key={p.title} className="bg-teal-50 rounded-lg border border-teal-100 p-3">
            <p className="text-sm font-medium text-slate-800">{p.title}</p>
            <p className="text-xs text-teal-500 mt-0.5">{p.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
