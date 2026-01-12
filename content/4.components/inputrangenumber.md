---
title: InputRangeNumber
description: Handle input range number.
---

## Import

```ts
import { InputRangeNumber } from '@fewangsit/wangsvue';
```

## Basic
Basic range number input with two-way data binding using v-model.

::component-demo{src="inputrangenumber/Basic"}
::

## Placeholders
Range input with custom placeholders for minimum and maximum fields.

::component-demo{src="inputrangenumber/Placeholders"}
::

## Validation
Range number input with form validation and mandatory field requirements.

::component-demo{src="inputrangenumber/Validation"}
::

## Mandatory
Range input with mandatory validation and custom error messages.

::component-demo{src="inputrangenumber/Mandatory"}
::

## Disabled
Range input in disabled state prevents user interaction.

::component-demo{src="inputrangenumber/Disabled"}
::

## Invalid
Range input showing invalid state with error message. Validator message will only be shown if `use-validator` set to true.

::component-demo{src="inputrangenumber/Invalid"}
::

## Form Integration
Complete form example with range number input and validation. Similar to [InputNumber](/components/inputnumber), InputRangeNumber integrates seamlessly with form validation.

::component-demo{src="inputrangenumber/FormIntegration"}
::