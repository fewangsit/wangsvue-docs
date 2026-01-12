---
title: InputURL
description: Handle input url with form validation.
---

## Import

```typescript
import { InputURL } from '@fewangsit/wangsvue'
```

InputURL is a specialized wrapper around [InputText](/components/inputtext) that provides URL-specific validation and formatting. It inherits all the features and props from InputText while automatically setting the validation type to 'url' and providing URL-specific defaults like protocol validation.

## Basic
Basic URL input with automatic URL validation.

::component-demo{src="inputurl/Basic"}
::

## Protocol
URL input with protocol validation that can be enabled or disabled.

::component-demo{src="inputurl/Protocol"}
::

## Validation
URL input with form validation and custom error messages.

::component-demo{src="inputurl/Validation"}
::

## Slots
Use addon slots to add URL-specific icons, open links, or test API endpoints.

::component-demo{src="inputurl/Slots"}
::

## Form Integration
Complete form example demonstrating URL inputs in a form context.

::component-demo{src="inputurl/FormIntegration"}
::