---
title: TabMenu
description: TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.
---

## Import

```ts
import { TabMenu } from "@fewangsit/wangsvue";
import type { MenuItem } from "@fewangsit/wangsvue/menuitem";
```

## Basic

Basic tab menu with navigation items.

::component-demo{src="tabmenu/Basic"}
::

## Types

TabMenu supports different visual styles: tab, pill, and segmented.

::component-demo{src="tabmenu/Types"}
::

## Icons

Tab menu items with icons from the [WangsIcons](/components/icon) collection.

::component-demo{src="tabmenu/Icons"}
::

## Active Index

Control the active tab programmatically using activeIndex.

::component-demo{src="tabmenu/ActiveIndex"}
::

## Router Integration

TabMenu seamlessly integrates with Vue Router for declarative navigation.  
Assign any relative or absolute path to a `MenuItem`'s `route` property and the component will automatically render the matching tab as active—no manual `activeIndex` synchronization required.

::component-demo{src="tabmenu/Router"}
::

## External URLs

Use the `url` property to open external links in a new tab. Optionally, set `target="_blank"` to ensure the link opens in a new browser tab. See [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#target) for more details.

**Note:** Do not set both `url` and `route` on the same item.

::component-demo{src="tabmenu/ExternalUrl"}
::

## Visibility Control

MenuItem visibility can be controlled using the `visible` property to show or hide tabs dynamically.

::component-demo{src="tabmenu/Visibility"}
::

## Trailing Line

Control the trailing line display at the end of tab menu.

::component-demo{src="tabmenu/TrailingLine"}
::
