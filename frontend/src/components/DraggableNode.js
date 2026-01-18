export const DraggableNode = ({ type, label }) => {
    const onDragStart = (e) => {
      e.dataTransfer.setData('application/reactflow', JSON.stringify({nodeType : type}));
      e.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
      draggable
      onDragStart = {onDragStart}
      className = "px-4 py-3 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg cursor-grab"
      >
          {label}
      </div>
    );
  };
  