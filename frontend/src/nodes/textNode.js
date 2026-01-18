import { useEffect, useRef, useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

const VAR_REGEX = /\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g;

export const TextNode = ({ id }) => {
  const textareaRef = useRef(null);
  const [vars, setVars] = useState(['input']);

  const extractVars = () => {
    const value = textareaRef.current?.value || '';
    const matches = [...value.matchAll(VAR_REGEX)].map(m => m[1]);
    return [...new Set(matches)];
  };

  useEffect(() => {
    setVars(extractVars());
  }, []);

  const handles = [
    ...vars.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${v}`,
      style: { top: `${30 + i * 20}%` },
    })),
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-out`,
    },
  ];

  return (
    <BaseNode title="Text" handles={handles}>
      <textarea
        ref={textareaRef}
        defaultValue="{{input}}"
        onChange={() => {
          setVars(extractVars());

          textareaRef.current.style.height = 'auto';
          textareaRef.current.style.height =
            textareaRef.current.scrollHeight + 'px';
        }}
        className="w-full rounded-lg px-3 py-1.5 bg-purple-900/60 border border-white/10 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </BaseNode>
  );
};
