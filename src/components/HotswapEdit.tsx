'use client';

import { useState } from 'react';

interface HotswapEditProps {
  children: React.ReactNode;
  original: React.ReactNode;
  label?: string;
  className?: string;
  showIndicator?: boolean;
}

export default function HotswapEdit({
  children,
  original,
  label = "edit",
  className = "",
  showIndicator = true
}: HotswapEditProps) {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <span
      className={`hotswap-edit ${showOriginal ? 'showing-original' : 'showing-edited'} ${className}`}
      onClick={() => setShowOriginal(!showOriginal)}
      title={showOriginal ? `Click to show ${label}` : "Click to show original"}
    >
      {showOriginal ? original : children}
      {showIndicator && (
        <span className="hotswap-indicator">
          {showOriginal ? '↻' : '✎'}
        </span>
      )}
    </span>
  );
}

// Block-level version for paragraph edits
interface HotswapBlockProps {
  children: React.ReactNode;
  original: React.ReactNode;
  label?: string;
  className?: string;
}

export function HotswapBlock({
  children,
  original,
  label = "paragraph edit",
  className = ""
}: HotswapBlockProps) {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div className={`hotswap-block ${showOriginal ? 'showing-original' : 'showing-edited'} ${className}`}>
      <div
        className="hotswap-block-content"
        onClick={() => setShowOriginal(!showOriginal)}
        title={showOriginal ? `Click to show ${label}` : "Click to show original"}
      >
        {showOriginal ? original : children}
      </div>
      <div className="hotswap-block-controls">
        <button
          className="hotswap-toggle"
          onClick={() => setShowOriginal(!showOriginal)}
          type="button"
        >
          {showOriginal ? `Show ${label}` : 'Show Original'}
        </button>
      </div>
    </div>
  );
}

// Multi-segment version for complex edits with multiple parts
interface HotswapSegment {
  original: React.ReactNode;
  edited: React.ReactNode;
  id: string;
}

interface HotswapMultiProps {
  segments: HotswapSegment[];
  className?: string;
  globalToggle?: boolean;
}

export function HotswapMulti({
  segments,
  className = "",
  globalToggle = true
}: HotswapMultiProps) {
  const [showOriginals, setShowOriginals] = useState<Record<string, boolean>>({});
  const [globalOriginal, setGlobalOriginal] = useState(false);

  const toggleSegment = (id: string) => {
    setShowOriginals(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleAll = () => {
    const newState = !globalOriginal;
    setGlobalOriginal(newState);
    const newShowOriginals: Record<string, boolean> = {};
    segments.forEach(segment => {
      newShowOriginals[segment.id] = newState;
    });
    setShowOriginals(newShowOriginals);
  };

  return (
    <div className={`hotswap-multi ${className}`}>
      {globalToggle && (
        <div className="hotswap-multi-controls">
          <button
            className="hotswap-global-toggle"
            onClick={toggleAll}
            type="button"
          >
            {globalOriginal ? 'Show All Edits' : 'Show All Originals'}
          </button>
        </div>
      )}
      <div className="hotswap-multi-content">
        {segments.map(segment => (
          <span
            key={segment.id}
            className={`hotswap-segment ${showOriginals[segment.id] ? 'showing-original' : 'showing-edited'}`}
            onClick={() => toggleSegment(segment.id)}
            title={showOriginals[segment.id] ? "Click to show edit" : "Click to show original"}
          >
            {showOriginals[segment.id] ? segment.original : segment.edited}
            <span className="hotswap-indicator">
              {showOriginals[segment.id] ? '↻' : '✎'}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
