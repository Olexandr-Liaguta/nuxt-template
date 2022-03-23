import storePlugin from "~/plugins/store/storePlugin";
import {ActionContext, Commit, Store} from "vuex";

export const plugins = [storePlugin('store string')]

//Actions
export type _StoreAction<S, P, R = void> =
  (this: Store<any>, ctx: ActionContext<S, any>, payload: P) => Promise<R>


export type _StoreActions<K extends string, S> = {
  [key in K]: _StoreAction<S, any>
}

export const actions: _StoreActions<any, any> = {
  async nuxtServerInit(ctx, payload) {
  }
}

// Mutations
export type _StoreMutation<S, P> = (state: S, payload: P) => void

export type _StoreMutations<K extends string, S> = {
  [key in K]: _StoreMutation<S, any>
}

interface UseCommit {
  commit: Commit;
  moduleName: string;
  payload: any,
  key: string,
  offModuleName?: boolean
}

export function useCommit(
  {commit, payload, moduleName, key, offModuleName}: UseCommit
) {
  commit(offModuleName ? key : `${moduleName}/${key}`, payload)
}

// Getters
export type _StoreGetter<S, P> = (state: S, getters: any, rootState: any, rootGetters: any) => P

export type _StoreGetters<K extends string, S> = {
  [key in K]: _StoreGetter<S, any>
}

