import {AppMutationTypes, useAppCommit} from "~/store/app/mutations";
import {_StoreAction, _StoreActions} from "~/store";
import {AppState} from "~/store/app/state";
import {Dispatch} from "vuex";

export enum AppActionTypes {
  login = 'login',
  logout = 'logout',
}

interface AppActions extends _StoreActions<AppActionTypes, AppState> {
  login: _StoreAction<AppState, undefined>,
  logout: _StoreAction<AppState, undefined>,
}

const actions: AppActions = {
  async login({commit}) {
    useAppCommit(commit, AppMutationTypes.setToken, 'someToken', true)
  },

  async logout({commit}) {
    useAppCommit(commit, AppMutationTypes.clearToken, undefined, true)
  }
}

export default actions

export async function useAppDispatch<T extends keyof AppActions>(
  dispatch: Dispatch,
  key: T,
  payload: Parameters<AppActions[T]>[2],
) {
  await dispatch(`app/${key}`, payload)
}
