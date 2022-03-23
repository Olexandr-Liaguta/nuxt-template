import {Context} from "@nuxt/types";

export default function ({ $axios, redirect }: Context) {
  $axios.onError(error => {})
}
