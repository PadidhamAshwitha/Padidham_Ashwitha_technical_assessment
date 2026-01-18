import { useState } from "react";
import { useStore } from "../store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Backend error:", text);
        alert("Backend error. Check console.");
        return;
      }

      const data = await res.json();
      setResult(data);

    } catch (err) {
      console.error("Fetch failed:", err);
      alert("Failed to connect to backend");
    }
  };

  return (
    <div>
      <button
        className="px-4 py-3 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg cursor-pointer"
        onClick={handleSubmit}
      >
        Submit Pipeline
      </button>

      {result && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="p-6 bg-slate-900 rounded-xl text-white space-y-2">
            <p>Nodes: {result.num_nodes}</p>
            <p>Edges: {result.num_edges}</p>
            <p>DAG: {result.is_dag ? "Yes" : "No"}</p>

            <button
              onClick={() => setResult(null)}
              className="text-indigo-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
