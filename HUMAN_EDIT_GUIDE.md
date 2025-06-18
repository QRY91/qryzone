# Human Edit Components Guide

This guide covers the transparent AI collaboration editing system for QryZone articles. These components allow you to show your editorial presence and let readers compare your edits with the original AI-generated content.

## Components Overview

### 1. HumanEditDiff - Collapsible Diff Viewer
Shows a before/after comparison in a collapsible interface. Best for major rewrites and structural changes.

### 2. HotswapEdit - Interactive Toggle System
Inline components that let readers click to instantly switch between original and edited versions.

### 3. InlineHumanEdit - Simple Inline Highlighting
Basic highlighting for small edits without toggle functionality.

## Making Components Globally Available

### Option 1: Import in Each Article
```tsx
import HumanEditDiff, { InlineHumanEdit } from '@/components/HumanEditDiff';
import HotswapEdit, { HotswapBlock, HotswapMulti } from '@/components/HotswapEdit';
```

### Option 2: Create Article Layout Wrapper
Create `src/components/ArticleLayout.tsx`:

```tsx
'use client';

import HumanEditDiff, { InlineHumanEdit } from './HumanEditDiff';
import HotswapEdit, { HotswapBlock, HotswapMulti } from './HotswapEdit';

interface ArticleLayoutProps {
  children: React.ReactNode;
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <div className="article-with-edits">
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
  HotswapMulti
};
```

Then import once per article:
```tsx
import ArticleLayout, { 
  HotswapEdit, 
  HumanEditDiff, 
  HotswapBlock 
} from '@/components/ArticleLayout';
```

### Option 3: Global Context Provider (Advanced)
For truly global access, create a context provider, but this adds complexity.

## Usage Examples

### HumanEditDiff - Major Edits

#### Basic Usage
```tsx
<HumanEditDiff 
  label="Accuracy Fix"
  original="AI tools made coding super easy and fast."
>
  AI tools helped bypass the "tutorial slog"—a common momentum killer when starting new projects. Instead of getting stuck in setup phases, I could immediately engage with the interesting complexity that actually maintains motivation and drives learning.
</HumanEditDiff>
```

#### Custom Labels
```tsx
<HumanEditDiff label="Technical Correction">
  {/* Your corrected content */}
</HumanEditDiff>

<HumanEditDiff label="Clarity Improvement">
  {/* Your improved explanation */}
</HumanEditDiff>

<HumanEditDiff label="Context Addition">
  {/* Your enhanced context */}
</HumanEditDiff>
```

### HotswapEdit - Interactive Inline Edits

#### Single Word/Phrase
```tsx
<p>
  The result was <HotswapEdit original="amazing">sustained GitHub activity, intrinsic motivation, and genuine fun</HotswapEdit> in the development process.
</p>
```

#### Multiple Inline Edits
```tsx
<p>
  <HotswapEdit original="Gaming">Years of systematic analysis in gaming</HotswapEdit> 
  helped me <HotswapEdit original="code better">develop transferable problem-solving patterns</HotswapEdit> 
  that <HotswapEdit original="work well">create sustained development flow</HotswapEdit>.
</p>
```

#### Custom Labels and No Indicator
```tsx
<HotswapEdit 
  original="vague term" 
  label="precision edit"
  showIndicator={false}
>
  specific technical concept
</HotswapEdit>
```

### HotswapBlock - Paragraph-Level Edits

```tsx
<HotswapBlock 
  label="complete rewrite"
  original="AI is really good at helping with code. It makes development faster and easier. I recommend using it for projects."
>
  AI tools helped bypass the "tutorial slog"—a common momentum killer when starting new projects. Instead of getting stuck in setup phases, I could immediately engage with the interesting complexity that actually maintains motivation and drives learning. The systematic approach that emerged wasn't just about code generation, but about maintaining flow state through reduced friction.
</HotswapBlock>
```

### HotswapMulti - Complex Multi-Segment Edits

```tsx
<HotswapMulti
  segments={[
    {
      id: "intro",
      original: "I learned to code with AI",
      edited: "My deep dive into AI-assisted development began with Panopticron"
    },
    {
      id: "method", 
      original: "and it was helpful",
      edited: "an enterprise monitoring dashboard that required systematic collaboration with AI to solve complex technical challenges"
    },
    {
      id: "result",
      original: "so I got better at programming",
      edited: "This experience revealed both the power and friction points of AI collaboration, leading to systematic tool development"
    }
  ]}
  globalToggle={true}
/>
```

### InlineHumanEdit - Simple Highlighting

```tsx
<p>
  This approach creates <InlineHumanEdit original="good results">measurable productivity gains without sacrificing code quality</InlineHumanEdit> for development teams.
</p>
```

## When to Use Each Component

### Use HumanEditDiff when:
- Major rewrites or restructuring
- Adding significant context or explanation
- Technical corrections that require detailed comparison
- You want to preserve the full original for transparency

### Use HotswapEdit when:
- Quick word or phrase improvements
- Precision edits for accuracy
- Clarity improvements that are easy to compare
- You want immediate, seamless comparison

### Use HotswapBlock when:
- Entire paragraph rewrites
- Structural changes to sections
- Major tone or style adjustments
- Complex edits that span multiple sentences

### Use HotswapMulti when:
- Multiple edits throughout a paragraph
- You want readers to see the cumulative effect of changes
- Complex edits with different types of improvements
- Teaching moments about systematic editing

### Use InlineHumanEdit when:
- Simple highlighting without comparison needed
- Minor corrections that don't need toggle functionality
- You want to mark edits without the interactive features

## Best Practices

### Editorial Transparency
- Use descriptive labels: "Technical Correction", "Clarity Fix", "Context Addition"
- Don't overuse - highlight significant improvements, not every minor change
- Group related edits together rather than fragmenting text

### Content Strategy
- Start with major structural edits (HumanEditDiff/HotswapBlock)
- Then handle inline precision edits (HotswapEdit)
- Use InlineHumanEdit for simple marking without interaction

### Performance Considerations
- Each component adds JavaScript - use judiciously
- Group multiple small edits into HotswapMulti rather than many individual components
- Consider using InlineHumanEdit for simple cases

### Visual Hierarchy
- Don't nest edit components inside each other
- Maintain paragraph flow - avoid breaking up natural reading rhythm
- Use consistent labeling across your articles

## Styling Customization

### Custom Classes
All components accept `className` prop:
```tsx
<HotswapEdit className="my-custom-edit" original="text">edited</HotswapEdit>
```

### CSS Variables Available
```css
/* Customize in your article or global CSS */
.my-article .hotswap-edit {
  --edit-bg: #custom-color;
  --original-bg: #another-color;
}
```

## Example Article Pattern

```tsx
import Link from "next/link";
import HumanEditDiff, { InlineHumanEdit } from '@/components/HumanEditDiff';
import HotswapEdit, { HotswapBlock, HotswapMulti } from '@/components/HotswapEdit';

export default function MyArticle() {
  return (
    <div style={{ /* standard article styles */ }}>
      
      <section>
        <h2>Major Section Rewrite</h2>
        <HumanEditDiff label="Structural Improvement">
          <original>AI is cool and helpful for coding.</original>
          <p>AI-assisted development requires systematic methodology to be truly effective. The key insight isn't that AI writes code—it's that AI enables different cognitive workflows that can amplify human problem-solving capabilities when used systematically.</p>
        </HumanEditDiff>
      </section>

      <section>
        <h2>Inline Precision Edits</h2>
        <p>
          The result was <HotswapEdit original="productivity gains">sustained GitHub activity, intrinsic motivation, and genuine fun</HotswapEdit> that 
          <HotswapEdit original="helped me">fundamentally changed my relationship with</HotswapEdit> software development.
        </p>
      </section>

      <section>
        <h2>Complex Multi-Edit</h2>
        <HotswapMulti
          segments={[
            { id: "1", original: "Simple approach", edited: "Systematic methodology" },
            { id: "2", original: "that works", edited: "that creates compound returns" },
            { id: "3", original: "for coding", edited: "across different domains and projects" }
          ]}
        />
      </section>

    </div>
  );
}
```

## Technical Notes

### Component Files
- `src/components/HumanEditDiff.tsx` - Collapsible diff viewer
- `src/components/HotswapEdit.tsx` - Interactive toggle components
- CSS in `src/app/globals.css` under "Human Edit" and "Hotswap Edit" sections

### Accessibility
- All interactive elements have proper ARIA labels
- Keyboard navigation supported
- Screen reader friendly

### Browser Support
- Modern browsers with JavaScript enabled
- Graceful degradation: shows edited content if JS fails
- No external dependencies

## Troubleshooting

### Import Errors
Make sure to import from the correct files:
```tsx
// Correct imports
import HumanEditDiff, { InlineHumanEdit } from '@/components/HumanEditDiff';
import HotswapEdit, { HotswapBlock, HotswapMulti } from '@/components/HotswapEdit';
```

### Styling Issues
- Check that `globals.css` includes the edit component styles
- Verify CSS custom properties are loaded
- Use browser dev tools to inspect component classes

### Performance Issues
- Limit number of edit components per page (< 20 interactive elements)
- Use InlineHumanEdit for simple cases instead of interactive components
- Group related edits with HotswapMulti

This system provides transparent, interactive editorial presence while maintaining excellent readability and user experience.