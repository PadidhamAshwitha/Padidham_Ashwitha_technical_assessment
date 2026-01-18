import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || id);
  const [type, setType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode 
      title="Input" 
      handles = {[{
        type : "source",
        position : Position.Right,
        id : `${id}-value`
      }]}
    >
      <input
      className="w-full rounded-lg px-3 py-1.5 bg-purple-900/60 border border-white/10 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <select
      className="w-full rounded-lg px-3 py-1.5 bg-purple-900/60 border border-white/10 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      value={type}
      onChange={(e) => setType(e.target.value)}
      >
        <option> Text </option>
        <option> File </option>
      </select>
    </BaseNode>
  );
};