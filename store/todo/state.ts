import {TodoMutationTypes} from "~/store/todo/mutations";
import {TodoGettersTypes} from "~/store/todo/getters";
import {TodoActionTypes} from "~/store/todo/actions";
import {useStoreFields} from "~/utils/storeUtils";

export enum TodoStates {
  todos = 'todos',
}

export interface TodoState extends Record<TodoStates, any> {
  todos: TodoItem[],
}

export default (): TodoState => ({
  [TodoStates.todos]: []
})

export interface TodoItem {
  id?: number,
  userId?: number,
  title?: string,
  completed?: boolean,
}

const moduleName = 'todo'

export const todoFields = useStoreFields<TodoStates, TodoGettersTypes, TodoMutationTypes, TodoActionTypes>({
  _state: TodoStates,
  _getters: TodoGettersTypes,
  _mutations: TodoMutationTypes,
  _actions: TodoActionTypes,
  moduleName,
})
