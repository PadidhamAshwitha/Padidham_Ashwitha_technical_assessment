import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const OutputNode = ({id, data}) => {
  const [name, setName] = useState(data?.outputName || id);

  return(
    <BaseNode
    title = "Output"
    handles = {[{
      type : 'target',
      position : Position.Left,
      id : `${id}-value`
    }]}>
      <input
      className="w-full rounded-lg px-3 py-1.5 bg-purple-900/60 border border-white/10 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
    </BaseNode>
  );
};