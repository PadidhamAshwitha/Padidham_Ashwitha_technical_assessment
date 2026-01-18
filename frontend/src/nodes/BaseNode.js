import { Handle, useUpdateNodeInternals } from "reactflow";
import { useEffect } from "react";

export const BaseNode = ({ title, handles = [], children, nodeId }) => {
    const updateNodeInternals = useUpdateNodeInternals();

      useEffect(() => {
    if (nodeId) {
      updateNodeInternals(nodeId);
    }
  }, [nodeId, updateNodeInternals, children]);

  return (
    <div
        className = "flex flex-col min-w-[260px] min-h-[150px] rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#3b0764] border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.25)] text-white"
    >
      {handles.map((h) => (
        <Handle
          key={h.id}
          type={h.type}
          position={h.position}
          id={h.id}
          style={h.style}
          className = " w-3 h-3 bg-purple-300 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.9)]"
        />
    ))}

      <div className="px-4 py-2 font-semibold text-sm border-b border-white/10">
        {title}
      </div>

      <div className="flex-1 px-4 py-3 space-y-3 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};
