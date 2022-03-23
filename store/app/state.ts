import {useStoreFields} from "~/utils/storeUtils";
import {AppActionTypes} from "~/store/app/actions";
import {AppMutationTypes} from "~/store/app/mutations";
import {AppGettersTypes} from "~/store/app/getters";

export enum AppStates {
  token = 'token',
}

export interface AppState extends Record<AppStates, any> {
  [AppStates.token]: string | null,
}

const state = (): AppState => ({
  token: null
})

export default state

export const appFields = useStoreFields<AppStates, AppGettersTypes, AppMutationTypes, AppActionTypes>({
  moduleName: 'app',
  _actions: AppActionTypes,
  _mutations: AppMutationTypes,
  _state: AppStates,
  _getters: AppGettersTypes
})
