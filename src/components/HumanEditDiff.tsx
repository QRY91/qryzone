'use client';

import { useState } from 'react';

interface HumanEditDiffProps {
  children: React.ReactNode;
  original: React.ReactNode;
  label?: string;
  className?: string;
}

export default function HumanEditDiff({
  children,
  original,
  label = "Human Edit",
  className = ""
}: HumanEditDiffProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`human-edit-diff ${isExpanded ? 'expanded' : ''} ${className}`}>
      <div
        className="human-edit-diff-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{label}</span>
        <button className="human-edit-diff-toggle" type="button">
          {isExpanded ? 'Hide Diff' : 'Show Diff'}
        </button>
      </div>

      <div className="human-edit-diff-content">
        <div className="human-edit-diff-collapsed">
          <div className="human-edit-diff-label">Current (Edited)</div>
          <div className="diff-added">
            {children}
          </div>
        </div>

        <div className="human-edit-diff-expanded">
          <div className="human-edit-diff-label">Diff View</div>
          <div className="diff-removed">
            {original}
          </div>
          <div className="diff-added">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple inline version for smaller edits
interface InlineHumanEditProps {
  children: React.ReactNode;
  original: React.ReactNode;
  className?: string;
}

export function InlineHumanEdit({ children, original, className = "" }: InlineHumanEditProps) {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <span
      className={`human-edit-inline ${className}`}
      onClick={() => setShowOriginal(!showOriginal)}
      title={showOriginal ? "Click to hide original" : "Click to see original"}
      style={{ cursor: 'pointer' }}
    >
      {showOriginal ? (
        <span style={{ textDecoration: 'line-through', opacity: 0.7 }}>
          {original}
        </span>
      ) : (
        children
      )}
    </span>
  );
}
