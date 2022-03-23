import {AppState} from "~/store/app/state";
import {_StoreGetter, _StoreGetters} from "~/store";

export enum AppGettersTypes {
  hasToken = 'hasToken',
}

interface AppGetters extends _StoreGetters<AppGettersTypes, AppState> {
  hasToken: _StoreGetter<AppState, boolean>
}

const getters: AppGetters = {
  hasToken: state => !!state.token
}

export default getters
