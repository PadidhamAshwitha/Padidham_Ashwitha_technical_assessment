import { useState } from 'react';
import { PipelineToolbar } from './components/Toolbar';
import { PipelineUI } from './components/Ui';
import { SubmitButton } from './components/Submit';
import  { AddNodeModal } from "./components/AddNodeModal";
import { useStore } from './store';

function App() {
  const [open, setOpen ] = useState(false);
  const addNode = useStore((s) => s.addNode);
  const getNodeID = useStore((s) => s.getNodeID);
  const handleAddNode = (type) => {
    addNode({
      id: getNodeID(type),
      type,
      position: { x: 100, y: 100 },
      data: {},
    });
  };
  return (
    <div>
      <PipelineToolbar onAdd={() => setOpen(true)}/>
      <PipelineUI />
      <SubmitButton />
      <AddNodeModal open={open} onClose={() => setOpen(false)} onAdd={handleAddNode}/>
    </div>
  );
}

export default App;
