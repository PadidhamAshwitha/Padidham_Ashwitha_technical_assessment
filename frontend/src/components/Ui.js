
import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';
import { useNodeTypes } from '../hooks/useNodeTypes';
import 'reactflow/dist/style.css';

const proOptions = { hideAttribution: true };
const nodeTypes = useNodeTypes();

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [variant ] = useState("cross");
    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const getInitNodeData = (nodeID, type) => ({
      id: nodeID, 
      nodeType: type,
    });

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const bounds = reactFlowWrapper.current.getBoundingClientRect();
          const raw = event.dataTransfer.getData('application/reactflow');
          if(!raw) return;

          const { nodeType } = JSON.parse(raw);
          if(!nodeType) return;
          
            const position = reactFlowInstance.project({
              x: event.clientX - bounds.left,
              y: event.clientY - bounds.top,
            });

            const nodeID = getNodeID(nodeType);

            addNode({
              id: nodeID,
              type : nodeType,
              position,
              data: getInitNodeData(nodeID, nodeType),
            });
          },
        [reactFlowInstance,getNodeID, addNode]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <>
        <div ref={reactFlowWrapper} className = "h-[70vh] w-full">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                proOptions={proOptions}
                snapGrid={[20, 20]}
                connectionLineType="smoothstep"
            >
                <Background variant = {variant} color="violet" gap="20" />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
        </>
    )
}
