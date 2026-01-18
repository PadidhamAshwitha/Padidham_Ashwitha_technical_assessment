import { createPortal } from "react-dom";
import { useStore } from "../store";

export function AddNodeModal({ open, onClose, onAdd }) {
  const usedNodeTypes = useStore((s) => s.usedNodeTypes);

  if (!open) return null;

  const NODE_TYPES = [
    { type: "customInput", label: "Input Node" },
    { type: "text", label: "Text Node" },
    { type: "llm", label: "LLM Node" },
    { type: "math", label: "Math Node" },
    { type: "condition", label: "Condition Node" },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center">
      <div className="bg-white text-gray-900 rounded-xl p-6 w-[400px]">
        <h2 className="text-lg font-semibold mb-4">
          Add New Node
        </h2>

        <div className="space-y-3">
          {NODE_TYPES.map((node) => {
            const disabled = usedNodeTypes.has(node.type);

            return (
              <button
                key={node.type}
                type="button"
                disabled={disabled}
                onClick={() => {
                  onAdd(node.type);
                  onClose();
                }}
                className={`w-full px-4 py-2 rounded-lg border
                  ${
                    disabled
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "hover:bg-indigo-50"
                  }`}
              >
                {node.label}
                {disabled && " (Already added)"}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
