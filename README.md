# @ramstack/vue-pagelock
[![NPM](https://img.shields.io/npm/v/@ramstack/vue-pagelock)](https://www.npmjs.com/package/@ramstack/vue-pagelock)
[![MIT](https://img.shields.io/github/license/rameel/vue-pagelock)](https://github.com/rameel/vue-pagelock/blob/main/LICENSE)

`@ramstack/vue-pagelock` is a lightweight utility for managing page scroll locking in `Vue` applications.
The library is approximately `1 KiB` in size.

Uses [@ramstack/pagelock](https://github.com/rameel/pagelock) under the hood.

## Installation

### Using NPM
```sh
npm install --save @ramstack/vue-pagelock
```

### Using CDN
```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@ramstack/vue-pagelock@1/dist/vue-pagelock.min.js"></script>

<script>
    const app = Vue.createApp({
        setup() {
        }
    });

    // Register the pagelock plugin
    app.use(PagelockPlugin);

    app.mount("#app");
</script>
```

### Using the ES module build
```html
<script type="module">
    import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
    import { PagelockPlugin } from "https://cdn.jsdelivr.net/npm/@ramstack/vue-pagelock@1/dist/vue-pagelock.esm.min.js";

    const app = createApp({
        setup() {
        }
    });

    // Register the pagelock plugin
    app.use(PagelockPlugin);

    app.mount("#app");
</script>
```

## Usage examples

After installation, register the plugin at the application level.

```js
import App from "./App";
import { createApp } from "vue";
import { PagelockPlugin } from "@ramstack/vue-pagelock";

const app = createApp(App);
app.use(PagelockPlugin);
app.mount("#app");
```

Alternatively, you can import the directive directly into the components where it is needed.
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
