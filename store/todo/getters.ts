import {TodoItem, TodoState} from "~/store/todo/state";
import {_StoreGetter, _StoreGetters} from "~/store";

export enum TodoGettersTypes {
  todos = 'todos',
}

interface TodoGetters extends _StoreGetters<TodoGettersTypes, TodoState> {
  [TodoGettersTypes.todos]: _StoreGetter<TodoState, TodoItem[]>
}

const getters: TodoGetters = {
  [TodoGettersTypes.todos]: state => state.todos
}

export default getters
