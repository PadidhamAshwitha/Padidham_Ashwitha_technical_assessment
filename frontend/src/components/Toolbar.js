import { DraggableNode } from './DraggableNode';
import { useStore } from "../store";

const NODE_LIST = [
    {type : "customInput", label : "Input"},
    {type : "llm", label : "LLM"},
    {type : "text", label : "Text"},
    {type : "condition", label : "Condition"},
    {type : "math", label : "Math"},
    {type : "delay", label : "Delay"},
    {type : "merge", label : "Merge"},
    {type : "api", label : "API"},
    {type : "customOutput", label : "Output"},
];

export const PipelineToolbar = ({onAdd}) => {
    const usedNodeTypes = useStore((s) => s.usedNodeTypes);
    const clearGraph = useStore((s) => s.clearGraph);

    return (
        <div >
            <div className = "p-4 flex flex-wrap gap-3">
                {NODE_LIST.map((node) => {
                    const disabled = usedNodeTypes.has(node.type);
                    return (
                        <div
                            key={node.type}
                            className={disabled ? "opacity-40 pointer-events-none" : ""}
                            >
                            <DraggableNode
                                key = {node.type}
                                type = {node.type}
                                label = {node.label}
                            />
                            </div>
                    )
                })}
                 <button
                                    onClick={onAdd}
                                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                                >
                                    + Add
                                </button>

                                <button
                                    onClick={clearGraph}
                                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                                >
                                    Clear
                                </button>
            </div>
        </div>
    );
};
