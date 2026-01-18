import { InputNode } from '../nodes/InputNode';
import { LLMNode } from '../nodes/llmNode';
import { OutputNode } from '../nodes/outputNode';
import { TextNode } from '../nodes/textNode';
import { ConditionNode} from "../nodes/ConditionNode";
import { DelayNode } from "../nodes/DelayNode";
import { MathNode } from "../nodes/MathNode";
import { MergeNode } from "../nodes/MergeNode";
import { APINode } from "../nodes/APINode";

export const useNodeTypes = () => {
    const nodeTypes = {
        customInput : InputNode,
        llm : LLMNode,
        customOutput : OutputNode,
        text : TextNode,
        condition : ConditionNode,
        delay : DelayNode,
        math : MathNode,
        merge : MergeNode,
        api : APINode,
    };
    return nodeTypes;
};