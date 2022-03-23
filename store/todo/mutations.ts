import {TodoItem, TodoState} from "~/store/todo/state";
import {_StoreMutation, _StoreMutations, useCommit} from "~/store";
import {Commit} from "vuex";

export enum TodoMutationTypes {
  add = 'add',
  set = 'set',
}

export interface TodoMutations extends _StoreMutations<TodoMutationTypes, TodoState> /*, Record<string, _StoreMutation<TodoState, any>>*/ {
  [TodoMutationTypes.add]: _StoreMutation<TodoState, TodoItem[]>
  [TodoMutationTypes.set]: _StoreMutation<TodoState, TodoItem[]>
}

const mutations: TodoMutations = {
  add: (state, payload) => {
    state.todos.push(...payload)
  },

  set: (state, payload) => {
    state.todos = payload
  },
}

export default mutations


export function useTodoCommit<K extends keyof TodoMutations>(
  commit: Commit,
  key: K,
  payload: Parameters<TodoMutations[K]>[1],
  offModuleName?: boolean,
) {
  useCommit({
    commit,
    payload,
    key,
    offModuleName,
    moduleName: 'todo'
  })
}

