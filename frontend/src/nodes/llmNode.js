import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const LLMNode = (id) => {
  return (
    <BaseNode
    title = "LLM"
    handles = {[
      {type : 'target', position : Position.Left, id : `${id}-system`, style : {top : '30%'}},
      {type : 'target', position : Position.Left, id : `${id}-prompt`, style : {top : '60%'}},
      {type : 'source', position : Position.Right, id : `${id}-response`}
    ]}>
    <p className="text-slate-300">Large Language Model</p>
    </BaseNode>
  )
}