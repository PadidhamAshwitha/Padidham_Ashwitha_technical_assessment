from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from collections import defaultdict, deque
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Edge(BaseModel):
    source : str
    target : str

class Pipeline(BaseModel):
    nodes : list
    edges : List[Edge]

@app.get("/ping")
def ping():
    return {"ping": "pong"}

@app.get("/")
def root():
    return {"status": "Backend is running"}

@app.post("/")
def root():
    return {"status": "Backend is running"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    graph = defaultdict(list)
    indegree = defaultdict(int)

    for node in pipeline.nodes:
        indegree[node["id"]] = 0

    for edge in pipeline.edges:
        graph[edge.source].append(edge.target)
        indegree[edge.target] += 1

    q = deque([n["id"] for n in pipeline.nodes if indegree[n["id"]] == 0])
    visited = 0

    while q:
        node = q.popleft()
        visited += 1
        for i in graph[node]:
            indegree[i] -= 1
            if indegree[i] == 0:
                q.append(i)
    
    return {
        "num_nodes" : len(pipeline.nodes),
        "num_edges" : len(pipeline.edges),
        "is_dag" : visited == len(pipeline.nodes),
    }

