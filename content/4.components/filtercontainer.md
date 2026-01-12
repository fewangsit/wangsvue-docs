---
title: FilterContainer
description: FilterContainer is a component for generating a dynamic grid-based layout for any count of filter fields. It calculates the number of children in the container and sets their grid area style dynamically. The grid layout is determined by the row and column position, which are incremented based on the child count. If the child count is odd and the child is the last one (which is Buttons Action), it is placed in the 4th column.
---

## Import
```ts
import { FilterContainer } from '@fewangsit/wangsvue';
```

## Basic
The FilterContainer arranges filter fields in a responsive grid layout with a default of 4 fields per row. Define QueryParams based on your table's query structure (e.g., for category filtering, use field: 'category').

::component-demo{src="filtercontainer/Basic"}
::

## Group
Group fields use the ButtonSelectTreeFilterField to filter by hierarchical group structures.

::component-demo{src="filtercontainer/Group"}
::

## Category
Category fields use the ButtonSelectTreeFilterField to filter by category hierarchies.

::component-demo{src="filtercontainer/Category"}
::

## MultiSelect
MultiSelect fields allow selecting multiple options from a list, suitable for filtering by multiple values. Use fetchOptionFn for static or async options fetching with query params.

::component-demo{src="filtercontainer/MultiSelect"}
::

## Dropdown
Dropdown fields provide a single selection from a list of options for straightforward filtering. Use fetchOptionFn for static or async options fetching with query params.

::component-demo{src="filtercontainer/Dropdown"}
::

## Calendar
Calendar fields enable date-based filtering using a date picker interface.

::component-demo{src="filtercontainer/Calendar"}
::

## RangeNumber
RangeNumber fields support filtering numeric values within a specified min-max range.

::component-demo{src="filtercontainer/RangeNumber"}
::
