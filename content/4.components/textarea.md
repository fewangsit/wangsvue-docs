---
title: Textarea
description: Textarea is a multi-line text input element. Textarea is designed for longer text content with features like character counting and automatic height adjustment
---

## Import

```typescript
import { Textarea } from '@fewangsit/wangsvue'
```

## Basic
Basic textarea with label and placeholder.

::component-demo{src="textarea/Basic"}
::

## Size
Control textarea dimensions with rows and cols properties.

::component-demo{src="textarea/Size"}
::

## Auto Resize
Textarea that automatically adjusts height based on content.

::component-demo{src="textarea/AutoResize"}
::

## Character Limit
Character counting and input prevention at maximum length.

::component-demo{src="textarea/CharacterLimit"}
::

## Disabled State
Disabled textarea for read-only content display.

::component-demo{src="textarea/Disabled"}
::

## Validation
Textarea with built-in form validation that automatically handles empty input validation and character limit enforcement.

::component-demo{src="textarea/Validation"}
::

## Invalid State
Manually control the invalid state with custom error messages for specialized validation scenarios not covered by standard validation rules.
::component-demo{src="textarea/InvalidState"}
::


## Form Integration
Complete form example demonstrating textarea in a form context.

::component-demo{src="textarea/FormIntegration"}
::