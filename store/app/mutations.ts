import {AppState} from "~/store/app/state";
import {_StoreMutation, _StoreMutations, useCommit} from "~/store";
import {Commit} from "vuex";

export enum AppMutationTypes {
  setToken = 'setToken',
  clearToken = 'clearToken',
}

interface AppMutations extends _StoreMutations<AppMutationTypes, AppState> {
  setToken: _StoreMutation<AppState, string>
  clearToken: _StoreMutation<AppState, undefined>;
}

const mutations: AppMutations = {
    setToken: (state, val) => {
    state.token = val
  },

  clearToken: (state) => {
    state.token = null
  },
}

export default mutations

export function useAppCommit<T extends keyof AppMutations>(
  commit: Commit,
  key: T,
  payload: Parameters<AppMutations[T]>[1],
  offModuleName?: boolean,
) {
  useCommit({
    commit,
    offModuleName,
    key,
    payload,
    moduleName: 'app'
  })
}

