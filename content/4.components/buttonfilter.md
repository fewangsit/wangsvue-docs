---
title: ButtonFilter
description: ButtonFilter is a utility button that toggles the visibility of a FilterContainer for datatables, using event bus communication.
---

## Import
```ts
import { ButtonFilter } from '@fewangsit/wangsvue';
```

## Basic
ButtonFilter integrates with FilterContainer by emitting events via the event bus when clicked. Both components must share the same `tableName` prop to target a specific datatable's filter. No manual eventBus calls are needed.

::component-demo{src="buttonfilter/Basic"}
::
