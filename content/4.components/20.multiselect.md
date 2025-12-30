---
title: MultiSelect
description: MultiSelect also known as Select, is used to choose an item from a collection of options.
---

## Import

```ts
import { MultiSelect } from '@fewangsit/wangsvue';
```

## Basic

Basic usage of multiselect with simple options.

::component-demo{src="multiselect/Basic"}
::

## Object Options

MultiSelect with object options using `optionLabel` and `optionValue` properties.

::component-demo{src="multiselect/ObjectOptions"}
::

## Display Modes

MultiSelect supports different display modes for selected items.

::component-demo{src="multiselect/DisplayModes"}
::

## Max Selected Labels

Control how many selected items to show before displaying a summary.

::component-demo{src="multiselect/MaxSelectedLabels"}
::

## Loading

MultiSelect in loading state.

::component-demo{src="multiselect/Loading"}
::

## Disabled

MultiSelect in disabled state.

::component-demo{src="multiselect/Disabled"}
::

## Filter

MultiSelect with search functionality enabled.

::component-demo{src="multiselect/Filter"}
::

## Hide Header Checkbox

MultiSelect without select all functionality.

::component-demo{src="multiselect/HideHeaderCheckbox"}
::

## Controls

Hide the input and control the overlay state from parent component using the `controls` prop. By default, a button will appear as trigger that controls the overlay visibility.

::component-demo{src="multiselect/Controls"}
::

## Trigger Slot

Custom trigger slot allows you to replace the default trigger button with your own implementation.

::component-demo{src="multiselect/TriggerSlot"}
::

## Display

The `display` prop defines how selected items are displayed - either as chips (default) or comma-separated values.

::component-demo{src="multiselect/Display"}
::

## Form Integration

MultiSelect integrated with form validation.

::component-demo{src="multiselect/FormIntegration"}
::