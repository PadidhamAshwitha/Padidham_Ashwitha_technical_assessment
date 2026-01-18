import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { useRef } from "react";

const operations = ["+", "-", "*", "/"];

export const MathNode = ({id}) => {
    const opRef = useRef();

    const handles = [
        { type : "target", position : Position.Left, id : `${id}-a`, style : { top : "35%"}},
        { type : "target", position : Position.Left, id : `${id}-b`, style : { top : "65%"}},
        { type : "source", position : Position.Right, id : `${id}-result`},
    ];
    return(
        <BaseNode title="Math" handles={handles} nodeId={id}>
            <label className="text-xs text-purple-200">Operation</label>

            <select
                ref={opRef}
                defaultValue="+"
                className=" w-full px-3 py-2 rounded-lg bg-purple-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                {operations.map((op) => (
                    <option key={op}>{op}</option>
                ))}
            </select>

            <p className="text-xs text-purple-300">A ⊕ B</p>
        </BaseNode>
    );
};