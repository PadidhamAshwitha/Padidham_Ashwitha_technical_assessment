import { useRef } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const ConditionNode = (id) => {
    const conditionRef = useRef();
    const handles = [
        { type : "target", position : Position.Left, id : `${id}-in`},
        { type : "source", position : Position.Right, id : `${id}-true`, style : { top : "35%"}},
        { type : "source", position : Position.Right, id : `${id}-false`, style : { top : "65%"}},
    ];
    return (
        <BaseNode title = "Condition" handles = {handles}>
            <input
                ref = {conditionRef}
                placeholder="x > 10"
                className="w-full rounded-lg px-3 py-1.5 bg-purple-900/60 border border-white/10 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-xs text-slate-400"> True / False Branching</p>
        </BaseNode>
    );
};