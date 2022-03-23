import {Context} from "@nuxt/types";
import {NuxtAxiosInstance} from "@nuxtjs/axios";

type Hello = (msg: string) => void

export default function (
  {app}: Context,
  inject: (key: string, value: Hello) => void
) {
  // Inject $hello(msg) in Vue, context and store.
  inject('hello', msg => console.log(`Hello ${msg}!`))
}

declare module 'vue/types/vue' {
  interface Vue {
    $hello: Hello
  }
}

declare module '@nuxt/types' {
  interface Context {
    $hello: NuxtAxiosInstance
  }

  interface NuxtAppOptions {
    $hello: NuxtAxiosInstance
  }
}
