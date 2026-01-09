import { ObjectDirective, ObjectPlugin } from "vue";
import { pagelock, pageunlock } from "@ramstack/pagelock";

const key = Symbol();

export const vPagelock: ObjectDirective<HTMLElement, boolean> = {
    mounted(el, { value }) {
        handle(el, value);
    },

    updated(el, { value }) {
        handle(el, value);
    },

    beforeUnmount(el) {
        clear(el);
    }
}

export const PagelockPlugin: ObjectPlugin = {
    install(app) {
        app.directive("pagelock", vPagelock);
    }
}

export {
    pagelock,
    pageunlock
}

function handle(el: HTMLElement, value: boolean) {
    if (value) {
        el[key] || (el[key] = pagelock());
    }
    else {
        clear(el);
    }
}

function clear(el: HTMLElement) {
    el[key]?.();
    el[key] = null;
}
