---
title: Toast
description: Toast is used to display messages in an overlay.
---

## Import

```ts
import { Toast } from "@fewangsit/wangsvue";
```

## Toast Service

Toast component is controlled via the `ToastService` that needs to be installed as an application plugin.

```ts [main.ts]
import { ToastService } from "@fewangsit/wangsvue";

const app = createApp(App);
app.use(ToastService);
```

This service is available globally with the `useToast()` composable.

```ts
import { useToast } from "@fewangsit/wangsvue";

const toast = useToast();
```

## Basic

Basic toast messages using the useToast composable.

::component-demo{src="toast/Basic"}
::

## Severity

Toast supports different severity levels: success, info, and error.

::component-demo{src="toast/Severity"}
::

## Position

Toast messages can be positioned at different locations on the screen.

::component-demo{src="toast/Position"}
::

## Life Span

Control toast message duration and auto-dismiss behavior.

::component-demo{src="toast/LifeSpan"}
::

## Group

Organize toast messages into groups and manage them collectively using removeGroup and removeAllGroups methods. Group is usefull when you need render different style of toast, see [Template](#template) for example.

::component-demo{src="toast/Group"}
::

## Template

Custom content inside a message is defined with the `message` template.

::component-demo{src="toast/Template"}
::
