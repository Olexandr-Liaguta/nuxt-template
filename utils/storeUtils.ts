interface UseStoreFieldsInput {
  _state: Record<string, string>,
  _getters: Record<string, string>,
  _mutations: Record<string, string>,
  _actions: Record<string, string>,
  moduleName: string
}

export function useStoreFields<S extends string,
  G extends string,
  M extends string,
  A extends string>
({
   _state,
   _mutations,
   _getters,
   _actions,
   moduleName
 }: UseStoreFieldsInput) {
  const state: Record<string, string> = {}
  for (const stateKey in _state) {
    state[stateKey] = `${moduleName}/${stateKey}`
  }

  const mutations: Record<string, string> = {}
  for (const mutKey in _mutations) {
    mutations[mutKey] = `${moduleName}/${mutKey}`
  }

  const actions: Record<string, string> = {}
  for (const actionKey in _actions) {
    actions[actionKey] = `${moduleName}/${actionKey}`
  }

  const getters: Record<string, string> = {}
  for (const getterKey in _getters) {
    getters[getterKey] = `${moduleName}/${getterKey}`
  }

  return {
    state: state as Record<S, string>,
    mutations: mutations as Record<M, string>,
    actions: actions as Record<A, string>,
    getters: getters as Record<G, string>,
  }
}
