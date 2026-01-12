---
title: InlineMessage
description: InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, severity of the message.
---

## Import

```ts
import { InlineMessage } from '@fewangsit/wangsvue';
```

## Basic

Basic inline message with default secondary severity and message text.

::component-demo{src="inlinemessage/Basic"}
::

## Severity

InlineMessage with different severity levels: success, danger, and secondary.

::component-demo{src="inlinemessage/Severity"}
::

## With Title

InlineMessage with both title and message content.

::component-demo{src="inlinemessage/WithTitle"}
::

## With Lists

InlineMessage displaying a list of items after the main message.

::component-demo{src="inlinemessage/WithLists"}
::

## Removable

InlineMessage with close button functionality for user dismissal.

::component-demo{src="inlinemessage/Removable"}
::

## Loading State

InlineMessage with loading state display.

::component-demo{src="inlinemessage/Loading"}
::