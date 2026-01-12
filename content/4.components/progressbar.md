---
title: ProgressBar
description: Display progress of a task with customizable appearance and value positioning.
---

## Import

```ts
import { ProgressBar } from '@fewangsit/wangsvue';
```

## Basic

Basic progress bar with determinate mode showing current progress value.

::component-demo{src="progressbar/Basic"}
::

## Severity

ProgressBar with different severity colors: primary, success, danger, warning, and dark.

::component-demo{src="progressbar/Severity"}
::

## Value Position

ProgressBar with different value label positions: inside, left-side, right-side, and bottom.

::component-demo{src="progressbar/ValuePosition"}
::

## Indeterminate Mode

ProgressBar in indeterminate mode for unknown progress duration.

::component-demo{src="progressbar/Indeterminate"}
::

## Without Value

ProgressBar with value display disabled.

::component-demo{src="progressbar/WithoutValue"}
::

## Custom Label

ProgressBar with custom label content using the label slot.

::component-demo{src="progressbar/CustomLabel"}
::

## Animated

ProgressBar with animated progress that cycles between 0 and 100 automatically.

::component-demo{src="progressbar/Animated"}
::