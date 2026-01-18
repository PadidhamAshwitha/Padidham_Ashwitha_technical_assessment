import {Position } from "reactflow";
import { BaseNode} from "./BaseNode";

export const MergeNode = (id) => {
    const handles = [
        { type : "target", position : Position.Left, id : `${id}-in-1`, style : { top : "30%"}},
        { type : "target", position : Position.Left, id : `${id}-in-1`, style : { top : "50%"}},
        { type : "target", position : Position.Left, id : `${id}-in-1`, style : { top : "70%"}},
        { type : "source", position : Position.Right, id : `${id}-out`},
    ];
    return (
        <BaseNode title = "Merge" handles = {handles}>
            <p classname = "text-xs text-slate-400">Combine Multiple Nodes</p>
        </BaseNode>
    );
};