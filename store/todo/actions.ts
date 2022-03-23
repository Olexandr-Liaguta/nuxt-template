import {TodoItem, TodoState} from "~/store/todo/state";
import {TodoMutationTypes, useTodoCommit} from "~/store/todo/mutations";
import {_StoreAction, _StoreActions} from "~/store";
import {Dispatch} from "vuex";

export enum TodoActionTypes {
  fetch = 'fetch'
}

interface TodoActions extends _StoreActions<TodoActionTypes, TodoState> {
  [TodoActionTypes.fetch]: _StoreAction<TodoState, string>
}

const actions: TodoActions = {
  async [TodoActionTypes.fetch]({commit}) {
    const todos = await this.$axios.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos')
    useTodoCommit(commit, TodoMutationTypes.set, todos.data, true)
  }
}

export default actions

export async function useTodoDispatch<T extends keyof TodoActions>(
  dispatch: Dispatch,
  key: T,
  payload: Parameters<TodoActions[T]>[2],
) {
  await dispatch(`app/${key}`, payload)
}
