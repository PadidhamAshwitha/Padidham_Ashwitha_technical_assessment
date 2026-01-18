# 🚀VectorShift Frontend Technical Assessment
## Pipeline Builder – React Flow + Tailwind CSS + FastAPI

This repository contains a **node-based pipeline builder** developed as part of the **VectorShift Frontend Technical Assessment**.  
The project demonstrates **clean abstractions, scalable architecture, and production-ready frontend practices**, closely inspired by VectorShift’s workflow editor.

---

## Key Features

### 1. Node Abstraction
- A **single reusable `BaseNode` component** is used by all nodes
- Eliminates duplicated JSX and logic
- Enables fast creation of new node types with consistent UI/UX

### 2. Available Node Types
- **Input Node** (singleton)
- **Text Node** (dynamic variables)
- **LLM Node**
- **API Node**
- **Condition Node**
- **Math Node**
- **Delay Node**
- **Merge Node**
- **Output Node**

### 3. Text Node Intelligence
- Auto-resizing textarea based on content
- Supports dynamic variables using:

## {{variableName}}
- Each variable automatically creates a **target handle**
- Handles update dynamically as text changes

### 4. UI & Styling
- Built entirely with **Tailwind CSS**
- VectorShift-inspired purple / dark gradient theme
- Clean spacing, typography, and modern SaaS-style visuals
- React Flow canvas with background grid, minimap, and controls

### 5. Node Creation Experience
- Drag-and-drop nodes from toolbar
- Modal-based node addition
- Node types are disabled once added
- Deleted nodes can be re-added

### 6. Singleton Node Enforcement
- Certain nodes (e.g., Input, Output) are restricted to one instance
- Enforced centrally in the Zustand store
- UI automatically reflects availability

### 6. Backend Integration
- FastAPI backend endpoint:

## POST/pipelines/parse
- Frontend sends:
- Nodes
- Edges
- Backend response format:
```json
{
  "num_nodes": 8,
  "num_edges": 7,
  "is_dag": true
}
```
## Tech Stack

### Frontend
- **React 18**
- **React Flow**
- **Tailwind CSS**
- **Zustand** (state management)

### Backend
- **Python**
- **FastAPI**

---

## Project Structure

.
├── backend
│   ├── main.py
│   └── __pycache__/
│
├── frontend
│   ├── public
│   │   └── index.html
│   │
│   ├── src
│   │   ├── components
│   │   │   ├── AddNodeModal.js
│   │   │   ├── DraggableNode.js
│   │   │   ├── Submit.js
│   │   │   ├── Toolbar.js
│   │   │   └── Ui.js
│   │   │
│   │   ├── hooks
│   │   │   └── useNodeTypes.js
│   │   │
│   │   ├── nodes
│   │   │   ├── BaseNode.js
│   │   │   ├── InputNode.js
│   │   │   ├── TextNode.js
│   │   │   ├── LLMNode.js
│   │   │   ├── APINode.js
│   │   │   ├── ConditionNode.js
│   │   │   ├── MathNode.js
│   │   │   ├── DelayNode.js
│   │   │   ├── MergeNode.js
│   │   │   └── OutputNode.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── store.js
│   │
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── README.md
└── .gitignore

---


## Setup Instructions

### 1️. Backend Setup
```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```
### backend will be available at:
- http://localhost:8000

## 2️. Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Frontend will be available at: 
http://localhost:3000

## How to Use

1. Launch both frontend and backend servers
2. Add nodes via the toolbar or modal
3. Connect nodes using the available handles
4. Use `{{variable}}` syntax inside the Text Node
5. Click **Submit**
6. View:
   - Total nodes
   - Total edges
   - DAG validation result

## Future Enhancements
- Searchable node palette
- Undo / redo support
- Pipeline persistence
- Execution engine
- Node configuration side panels

---

## Author

**Padidham Ashwitha**  
Frontend Developer | React | UI Engineering
