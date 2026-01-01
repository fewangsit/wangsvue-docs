---
title: Breadcrumb
description: Breadcrumb is a component for displaying a breadcrumb trail to help users navigate a website or application. It takes an array of menu items as a prop and displays each item as a link or label, with a separator between them.
---

## Import

```ts
import { Breadcrumb } from "@fewangsit/wangsvue";
```

## Basic

Breadcrumb need a collection of breadcrumb menu items as its menus.

::component-demo{src="breadcrumb/Basic"}
::


## Route

Breadcrumb items with navigation routes for clickable links. Optionally specify title attribute for the link.

::component-demo{src="breadcrumb/WithRoute"}
::

## Breadcrumb Store

Breadcrumb store is a reactive store that manages the breadcrumb state. It provides methods to set the breadcrumb menus and to get the current breadcrumb menus. Typically rendered once at the top hierarchy (e.g., App.vue or layout component) and its state is updated within each router view component.

::component-demo{src="breadcrumb/BreadcrumbStore"}
::