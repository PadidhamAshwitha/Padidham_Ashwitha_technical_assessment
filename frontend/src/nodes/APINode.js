import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";


export const APINode = (id) => {
    return (
        <BaseNode
        title = "API"
        handles={[
            { type : "target", position : Position.Left, id : `${id}-in`},
            { type : "source", position : Position.Right, id : `${id}-out`},
        ]}
        >
        <span className="text-xs text-slate"> API Call</span>
        </BaseNode>
    );
};