---
title: InputCurrency
description: Handle input Currency with form validation. This component is an extension from InputNumber with mode currency.
---

## Import

```ts
import { InputCurrency } from '@fewangsit/wangsvue';
import type { CurrencyValue } from '@fewangsit/wangsvue/inputcurrency';
```

## Basic
Basic currency input with two-way data binding using v-model.

::component-demo{src="inputcurrency/Basic"}
::

## Disabled
Currency input in disabled state.

::component-demo{src="inputcurrency/Disabled"}
::

## V-Model Outside Form
Two-way data binding with v-model when used outside of form context.

::component-demo{src="inputcurrency/VModelOutsideForm"}
::

## Max Value
Currency input with maximum value limit.

::component-demo{src="inputcurrency/Max"}
::

## Form Initial Value
Setting initial value for form field using :model-value (one-way binding).

::component-demo{src="inputcurrency/FormInitialValue"}
::

## Validation with Custom State
Currency input with custom invalid state and string validator message.

::component-demo{src="inputcurrency/ValidationCustom"}
::

## Form Integration
Complete form example with currency inputs and validation.

::component-demo{src="inputcurrency/FormIntegration"}
::