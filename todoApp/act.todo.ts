import { ActionCreator } from "redux";
import * as Types from "./todo.types";
import { ITodo } from "./rdc.todo";

export const addTodo: ActionCreator<Types.IAddTodo> = (text: string) => {
  return {
    type: "ADD_TODO",
    payload: { text, completed: false }
  };
};

export const deleteTodo: ActionCreator<Types.IDeleteTodo> = (todo: ITodo) => {
  return {
    type: "DELETE_TODO",
    payload: { todo }
  };
};

export const editTodo: ActionCreator<Types.IEditTodo> = (
  todo: ITodo,
  newText: string
) => {
  return {
    type: "EDIT_TODO",
    payload: { todo, newText }
  };
};

export const completeTodo: ActionCreator<Types.ICompleteTodo> = (
  todo: ITodo
) => {
  return {
    type: "COMPLETE_TODO",
    payload: { todo }
  };
};

// const completeAll = createAction<void>(COMPLETE_ALL, () => {});

// const clearCompleted = createAction<void>(CLEAR_COMPLETED, () => {});

// export { completeAll, clearCompleted };
