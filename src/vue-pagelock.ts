import { ObjectDirective, ObjectPlugin } from "vue";
import { pagelock, pageunlock } from "@ramstack/pagelock";

const key = Symbol();

export const vPagelock: ObjectDirective<HTMLElement, boolean> = {
    mounted(el, { value }) {
        if (value) {
            el[key] || (el[key] = pagelock());
        }
        else {
            clear(el);
        }
    },

    unmounted(el) {
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

function clear(el) {
    el[key]?.();
    el[key] = null;
}
