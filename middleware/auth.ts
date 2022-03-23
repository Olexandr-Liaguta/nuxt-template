import {Context} from "@nuxt/types";
import {appFields} from "~/store/app/state";

export default function ({store, redirect}: Context) {
  if(!store.getters[appFields.getters.hasToken]) {
    const uri = encodeURI('/login?message=Need to login first');
    redirect(uri)
  }
}
