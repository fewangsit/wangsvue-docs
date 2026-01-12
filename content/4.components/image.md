---
title: Image
description: Displays an image with preview functionality and built-in gallery support.
---

## Import

```ts
import { Image } from '@fewangsit/wangsvue';
```

## Basic

Basic image display with preview functionality. Click the image to open the preview overlay.

::component-demo{src="image/Basic"}
::

## Sizes

Image component with different predefined sizes: small (30px), medium (80px), and big (125px).

::component-demo{src="image/Sizes"}
::

## Custom Size

Image with custom width dimensions using the `width` prop.

::component-demo{src="image/CustomSize"}
::

## Rounded

Image with rounded corners using the `rounded` prop.

::component-demo{src="image/Rounded"}
::

## Without Preview

Image display without preview functionality by setting `preview` to false.

::component-demo{src="image/WithoutPreview"}
::

## Gallery

Image gallery with multiple images and thumbnail navigation using the `galleries` prop. The gallery provides navigation between multiple images in the preview overlay.

::component-demo{src="image/Gallery"}
::

## Placeholder

Image placeholder behavior when the thumbnail fails to load or no src is provided. The `placeholder` prop defines the fallback image to display.

::component-demo{src="image/Placeholder"}
::