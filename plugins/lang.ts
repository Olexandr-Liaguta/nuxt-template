import {Context} from "@nuxt/types";
import {Locales} from "~/lang/types";

export default function (
  {app}: Context,
  inject: (key: string, value: any) => void
) {
  inject('l', Locales)
}

declare module 'vue/types/vue' {
  interface Vue {
    $l: typeof Locales
  }
}

declare module '@nuxt/types' {
  interface Context {
    $l: Locales
  }

  interface NuxtAppOptions {
    $l: Locales
  }
}
