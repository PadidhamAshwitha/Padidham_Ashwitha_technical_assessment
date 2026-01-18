import { create } from "zustand";
import {
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    MarkerType,
  } from 'reactflow';

export const useStore = create((set, get) => ({
    nodes: [],
    edges: [],
    nodeIDs: {},
    usedNodeTypes: new Set(),

    getNodeID: (type) => {
    const ids = { ...get().nodeIDs };
    ids[type] = (ids[type] || 0) + 1;
    set({ nodeIDs: ids });
    return `${type}-${ids[type]}`;
  },
    addNode: (node) => {
    const used = get().usedNodeTypes;

    if (used.has(node.type)) {
      console.warn(`Node type "${node.type}" already exists`);
      return;
    }

    const newUsed = new Set(used);
    newUsed.add(node.type);

    set({
      nodes: [...get().nodes, node],
      usedNodeTypes: newUsed,
    });
  },
    onNodesChange: (changes) => {
    const prevNodes = get().nodes;
    const nextNodes = applyNodeChanges(changes, prevNodes);

    // Detect removed nodes
    const removed = prevNodes.filter(
      (n) => !nextNodes.some((nn) => nn.id === n.id)
    );

    const nextUsed = new Set(get().usedNodeTypes);
    removed.forEach((node) => {
      nextUsed.delete(node.type);
    });

    set({
      nodes: nextNodes,
      usedNodeTypes: nextUsed,
    });
  },

      onEdgesChange : (changes) => {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
    onConnect: (connection) => {
      set({
        edges: addEdge({...connection, type: 'smoothstep', animated: true, markerEnd: {type: MarkerType.Arrow, height: '20px', width: '20px'}}, get().edges),
      });
    },
    updateNodeField: (nodeId, fieldName, fieldValue) => {
      set({
        nodes: get().nodes.map((node) => {
          if (node.id === nodeId) {
            node.data = { ...node.data, [fieldName]: fieldValue };
          }
  
          return node;
        }),
      });
    },
  }));
