---
title: DataTable
description: DataTable displays data in tabular format.
---

## Import

```ts
import { DataTable } from '@fewangsit/wangsvue';
import type { TableColumn } from '@fewangsit/wangsvue/datatable';
```

## Basic

Displays a simple table with string-based columns and no actions.

::component-demo{src="datatable/Basic"}
::

## Dynamic Data

Demonstrates dynamic data with lazy loading and pagination. Dynamic data is fetched from a server using the `fetch-function` prop. Specify the correct queryParams, response data entity type, and data-key. The loading state is handled automatically.

::component-demo{src="datatable/Dynamic"}
::

## Single Action

Shows single row actions like Edit and Delete, with conditional visibility based on selected item properties (e.g., quantity === 0). Visibility of actions handled by the `visible` property of each action item and we dont need to filter it manually, just place into computed property.

::component-demo{src="datatable/SingleAction"}
::

## Bulk Action

Demonstrates bulk actions using ButtonBulkAction for multiple selected rows. Enable checkbox selection by setting `selection-type="checkbox"` and ensure both DataTable and ButtonBulkAction share the same `table-name` prop.

::component-demo{src="datatable/BulkAction"}
::

## Template

Examples of custom bodyTemplate and bodyComponent for flexible rendering. `bodyTemplate` returns a text, while `bodyComponent` returns a component with props and event handlers.

::component-demo{src="datatable/Template"}
::

## Sort

Enables sorting on columns for dynamic data ordering, set `sortable: true` for each column you want to sort. This property will construct `sortBy` and `sortOrder` query parameters for the fetch-function. `sortBy` is the column field name, `sortOrder` is either `1` or `-1`.

::component-demo{src="datatable/Sort"}
::

## Search & Filter

DataTable integrates with ButtonSearch, ButtonFilter, FilterContainer, and QuickFilter for comprehensive data filtering capabilities. Those components should share the same `table-name` prop to work together.

::component-demo{src="datatable/SearchFilter"}
::

## Column Preset

Use commonly used component presets for columns with built-in functionality. Column presets provide ready-to-use column configurations for toggle switches, checkboxes, and multi-row displays.

### Toggle Preset

Toggle preset provides a switch/toggle button for boolean values with optional confirmation dialog and state management.

::component-demo{src="datatable/ColumnPreset/Toggle"}
::

### Checkbox Preset

Checkbox preset provides a checkbox for boolean values with optional confirmation dialog and state management.

::component-demo{src="datatable/ColumnPreset/Checkbox"}
::

### MultiRow Preset

MultiRow preset allows displaying multiple rows of data within a single table cell with custom attributes and components.

::component-demo{src="datatable/ColumnPreset/MultiRow"}
::

## Export Excel

DataTable provides built-in Excel export functionality to download table data as Excel files. Export supports customizing filename, selecting specific columns, and handling data transformation before export.

::component-demo{src="datatable/ExportExcel"}
::

## Editable Columns

DataTable supports inline editing with the `editable` property on columns. Set `editable: true` to make cells contenteditable, and use `numberInputOnly: true` for numeric columns to restrict input to numbers only.

::component-demo{src="datatable/Editable"}
::

