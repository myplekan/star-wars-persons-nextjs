"use client";

import { useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";
import { Person } from "../types/person";
import { Starship } from "../types/starship";
import { buildNodesAndEdges } from "../services/services";

const Flow = ({
  person,
  starships,
}: {
  person: Person;
  starships: Starship[];
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Effect to update nodes and edges when person or starships change
  useEffect(() => {
    const { nodes: updatedNodes, edges: updatedEdges } = buildNodesAndEdges(
      person,
      starships
    );
    setNodes(updatedNodes);
    setEdges(updatedEdges);
  }, [person, starships]);

  return (
    <>
      {starships && (
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
            maxZoom={1}
          />
        </ReactFlowProvider>
      )}
    </>
  );
};

export default Flow;
