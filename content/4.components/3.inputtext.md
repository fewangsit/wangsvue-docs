---
title: InputText
description: InputText renders a text field to enter data.
---

## Import

```typescript
import { InputText } from '@fewangsit/wangsvue'
```

## Basic
Basic text input with label.

::component-demo{src="inputtext/Basic"}
::

## Placeholder
The default placeholder is taken from the label. You can customize it with the `placeholder` property.

::component-demo{src="inputtext/Placeholder"}
::

## Character Restrictions
Control allowed characters with regex patterns or special character settings.

::component-demo{src="inputtext/CharacterRestrictions"}
::

## Max Length Prevention
Prevent input when maximum length is reached.

::component-demo{src="inputtext/MaxLengthPrevention"}
::

## Validation on Blur
Validate input on blur event instead of on input.

::component-demo{src="inputtext/ValidationOnBlur"}
::

## Availability Check
Async validation to check value availability.

::component-demo{src="inputtext/AvailabilityCheck"}
::

## Existing Values
Validate against existing values list.

::component-demo{src="inputtext/ExistingValues"}
::

## Validation States
Different validation states and custom messages.

::component-demo{src="inputtext/ValidationStates"}
::

## Disabled State
Disabled input state.

::component-demo{src="inputtext/Disabled"}
::

## Slots
Use addon slots to add icons, buttons, or text before and after the input field.

::component-demo{src="inputtext/Slots"}
::

## Form Integration
Complete form example with multiple text inputs and all features.

::component-demo{src="inputtext/FormIntegration"}
::