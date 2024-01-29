# Vue-Pagelock

The `@ramstack/vue-pagelock` represents a simple utility for managing page scroll locking within Vue applications. The library weights less than 1KB, and 500 bytes when gzipped.

Uses [@ramstack/pagelock](https://github.com/rameel/pagelock) under the hood.

## Installation

### Via NPM
```sh
npm install --save @ramstack/vue-pagelock
```

### Via CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@ramstack/vue-pagelock@1.0.0/dist/vue-pagelock.min.js"></script>
```

## Usage examples

After installation, register the plugin at the application-wide level.

```js
import App from "./App";
import { createApp } from "vue";
import { PagelockPlugin } from "@ramstack/vue-pagelock";

const app = createApp(App);
app.use(PagelockPlugin);
app.mount("#app");
```

Or directly import the directive into the desired components.

```vue
<template>
  <button @click="show">Show modal</button>

  <div v-if="isOpen" class="modal">
    <button @click="close">X</button>

    <div v-pagelock="isOpen" class="modal__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent ac commodo justo, sit amet pellentesque nunc.
        Vivamus sit amet porttitor quam, nec dictum magna.
        Vestibulum mollis magna vel justo consectetur, vel viverra nisl maximus.
        Sed luctus, massa sit amet fermentum aliquet, erat tortor luctus diam,
        et commodo sem ante ut ante. Aenean rhoncus tellus vel est feugiat,
        at sagittis nisl finibus. Praesent elementum, risus ut congue ultricies,
        nisi tortor pretium magna, in cursus metus nisl sed dolor.
        Phasellus sit amet velit ante. Nulla odio arcu, pretium sed ante nec,
        tempor fringilla nisl.
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import { vPagelock } from "@ramstack/vue-pagelock";

  const isOpen = ref(false);

  function show(): void {
    isOpen.value = true;
  };

  function hide(): void {
    isOpen.value = false;
  };
</script>
```

## License
This package is released under the **MIT License**.
