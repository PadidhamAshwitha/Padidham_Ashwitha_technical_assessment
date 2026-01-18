import { useRef } from "react";
import { BaseNode } from "./BaseNode";
import { Position } from "reactflow";

export const DelayNode = (id) => {
    const delayRef = useRef();
    const handles = [
        {type : "target", position : Position.Left, id : `${id}-in`},
        {type : "source", position : Position.Right, id : `${id}-out`},
    ];
    return (
        <BaseNode title = "Delay" handles = {handles}>
            <input
                ref = {delayRef}
                type = "number"
                placeholder="Delay (ms)"
                className="w-full rounded-lg px-3 py-1.5 bg-purple-900/60 border border-white/10 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="text-sx text-slate-400">
                Pause execution
            </span>
        </BaseNode>
    );
};