---
title: Loading
description: Tag Samurai Loading Overlay Animation.
---

## Import
```ts
import { useLoadingStore, Loading } from '@fewangsit/wangsvue';
```

## Basic
Display a simple loading overlay animation.

::component-demo{src="loading/Basic"}
::

## With Message
Show loading with a custom message.

::component-demo{src="loading/WithMessage"}
::

## API Integration
Demonstrate Loading a POST during API request. Set loading state to true in the try block and false in the finally block to handle asynchronous operations.

::component-demo{src="loading/ApiPostRequest"}
::