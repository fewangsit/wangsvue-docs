---
title: InputEmail
description: Handle input email with form validation.
---

InputEmail is a specialized wrapper around [InputText](/components/inputtext) that provides email-specific validation and formatting. It inherits all the features and props from InputText while automatically setting the validation type to 'email' and providing email-specific defaults.

## Import

```typescript
import { InputEmail } from '@fewangsit/wangsvue'
```

## Basic
Basic email input with automatic email validation.

::component-demo{src="inputemail/Basic"}
::

## Validation
Email input with form validation and custom error messages.

::component-demo{src="inputemail/Validation"}
::

## Existing Check
Email input that validates against existing email addresses to prevent duplicates.

::component-demo{src="inputemail/ExistingCheck"}
::

## Async Check
Email input with asynchronous availability checking for real-time validation.

::component-demo{src="inputemail/AsyncCheck"}
::

## Form Integration
Complete form example demonstrating email inputs in a form context.

::component-demo{src="inputemail/FormIntegration"}
::