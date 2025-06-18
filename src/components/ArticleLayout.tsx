"use client";

import HumanEditDiff, { InlineHumanEdit } from "./HumanEditDiff";
import HotswapEdit, { HotswapBlock, HotswapMulti } from "./HotswapEdit";

interface ArticleLayoutProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
  showEditIndicator?: boolean;
}

export default function ArticleLayout({
  children,
  className = "",
  maxWidth = "800px",
  showEditIndicator = true,
}: ArticleLayoutProps) {
  return (
    <div
      className={`article-with-edits ${className}`}
      style={{
        maxWidth,
        margin: "0 auto",
        padding: "0 var(--space-md)",
        lineHeight: "1.7",
      }}
    >
      {showEditIndicator && (
        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-md)",
            padding: "var(--space-xs) var(--space-sm)",
            background: "#2a2a2a",
            border: "1px solid #4a4a4a",
            borderRadius: "var(--border-radius)",
            fontFamily: "var(--font-mono)",
            textAlign: "center",
          }}
        >
          📝 This article includes interactive human edits - click highlighted
          text to compare versions
        </div>
      )}
      {children}
    </div>
  );
}

// Export all edit components for use within articles
export {
  HumanEditDiff,
  InlineHumanEdit,
  HotswapEdit,
  HotswapBlock,
  HotswapMulti,
};

// Convenience type exports
export type { ArticleLayoutProps };
