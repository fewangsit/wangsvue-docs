---
title: ButtonBulkAction
description: ButtonBulkAction is a component for handling bulk action for multiple data at once.
---

## Import

```ts
import { ButtonBulkAction } from '@fewangsit/wangsvue';
```

## Basic

Basic usage of ButtonBulkAction with selected data and action options.

::component-demo{src="buttonbulkaction/Basic"}
::

## Menu Types

ButtonBulkAction supports different menu types for displaying action options.

::component-demo{src="buttonbulkaction/MenuTypes"}
::

## Custom Naming

Customize the display name for selected items using the naming property.

::component-demo{src="buttonbulkaction/CustomNaming"}
::

## With Addition Slot

Use the addition slot to provide additional input fields for bulk actions, this option is only available when `select-menu-type` is set to `dropdown`. You must set `useAdditionSlot` to `true` on the menu item which you want to use the addition slot.

::component-demo{src="buttonbulkaction/AdditionSlot"}
::

## With Table Integration

Example of ButtonBulkAction integrated with a data table for complete bulk action workflow.

::component-demo{src="buttonbulkaction/TableIntegration"}
::
