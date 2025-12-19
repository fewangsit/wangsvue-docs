---
inclusion: manual
---

# WangsVue Documentation Creation Guide

## Mandatory Rules for Documentation

### 1. Content Structure
- **Title & Description**: Use component name as title with clear description
- **Import Section**: Always include import statement first
- **Examples Section**: Focus on practical examples with interactive demos
- **NO API Reference**: Do not add API Reference, Types, or Accessibility sections unless explicitly requested
- **Keep it Simple**: Focus on usage examples and practical implementation

### 2. Required Sections (in order)
```markdown
---
title: ComponentName
description: Brief description of what the component does (Get the description from mcp_wangsvue_mcp_analyze_component tool.)
---

## Import
```ts
import { ComponentName } from '@fewangsit/wangsvue';
```

## Examples

### Basic
Brief description of basic usage.

::component-demo{src="component/Basic"}
::

### [Feature Name]
Description of the feature being demonstrated.

::component-demo{src="component/FeatureName"}
::
```

### 3. Demo Component Requirements
- **File Structure**: `app/components/docs/{component}/{demo}.vue`
- **Naming**: Use PascalCase for demo files (e.g., `Basic.vue`, `Severity.vue`)
- **Registry**: Add all demos to `componentRegistry` in `ComponentDemo.vue`
- **Implementation**: Follow resolved API from MCP tools exactly

### 4. MCP Workflow (Mandatory)
1. **Search**: `mcp_wangsvue_mcp_search_components` with `{"format": "toon"}`
2. **Analyze**: `mcp_wangsvue_mcp_analyze_component` with `{"format": "toon"}`
3. **Resolve**: `mcp_wangsvue_mcp_resolve_type_definition` with `{"includeRelated": true}`
4. **Implement**: Use exact prop names and types from resolution
5. **Lint**: Run `npx eslint . --fix` until clean

### 5. Demo Component Template
```vue
<script setup lang="ts">
import { ComponentName } from '@fewangsit/wangsvue'
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <!-- Use exact props from MCP resolution -->
    <ComponentName 
      prop="value"
      :boolean-prop="true"
    />
  </div>
</template>
```

### 6. Cross-References
- **Link Related Components**: Reference other components when relevant
- **Use Proper Links**: `/components/component-name` format
- **Context**: Explain relationships (e.g., Button uses WangsIcons)

### 7. Forbidden Sections
- ❌ **API Reference** - Do not document props, events, slots
- ❌ **Types** - Do not list TypeScript definitions
- ❌ **Accessibility** - Do not add accessibility guidelines
- ❌ **Keyboard Support** - Do not document keyboard interactions

### 8. Component Registry Updates
Always update `app/utils/component-registry.ts`:
```js
export const componentRegistry: Record<string, () => Promise<any>> = {
  // Existing components...
  
  // New component demos
  'component/Basic': () => import('~/components/docs/component/Basic.vue'),
  'component/Feature': () => import('~/components/docs/component/Feature.vue'),
}
```

### 9. Import Best Practices
- **Main Package**: Always import from `@fewangsit/wangsvue`
- **No Subpaths**: Avoid subpath imports like `@fewangsit/wangsvue/component`
- **Types**: Import types from main package: `import type { TypeName } from '@fewangsit/wangsvue'`

### 10. Demo Categories
Common demo types to create:
- **Basic**: Simple usage example
- **Severity**: Different color variants
- **Size**: Size variations
- **Loading**: Loading states
- **Interactive**: User interaction examples
- **Template**: Custom content/slots usage

### 11. File Naming Conventions
- **Markdown**: `{number}.{component-name}.md` (e.g., `1.button.md`)
- **Demo Components**: `{FeatureName}.vue` in PascalCase
- **Directory**: `app/components/docs/{component}/`

### 12. Quality Checklist
Before completing documentation:
- [ ] MCP workflow followed completely
- [ ] All demos work without errors
- [ ] Component registry updated
- [ ] ESLint passes on all files
- [ ] No API Reference/Types/Accessibility sections
- [ ] Cross-references added where relevant
- [ ] Import statements correct

## Example Complete Documentation

```markdown
---
title: Button
description: Button is an extension to standard button element with icons and theming.
---

## Import

```ts
import { Button } from '@fewangsit/wangsvue';
```

## Examples

### Basic
Text to display on a button is defined with the `label` property.

::component-demo{src="button/Basic"}
::

### Severity
The severity property defines the variant of a button.

::component-demo{src="button/Severity"}
::

### Icons
Icon of a button is specified with `icon` property. The `icon` property accepts any value from the [WangsIcons](/components/icon) collection.

::component-demo{src="button/Icon"}
::
```

## Remember
- **Focus on Examples**: Show, don't tell
- **Keep it Practical**: Real-world usage scenarios
- **No Technical Docs**: Leave API details to TypeScript definitions
- **Interactive Demos**: Every example should have a working demo
- **Cross-Reference**: Link related components appropriately