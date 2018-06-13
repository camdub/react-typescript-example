import { Action as ReduxAction } from "redux";
import { ITodo } from "./rdc.todo";

export interface IAddTodo extends ReduxAction {
  type: "ADD_TODO";
  payload: {
    text: string;
    completed: boolean;
  };
}

export interface IDeleteTodo extends ReduxAction {
  type: "DELETE_TODO";
  payload: {
    todo: ITodo;
  };
}

export interface ICompleteTodo extends ReduxAction {
  type: "COMPLETE_TODO";
  payload: {
    todo: ITodo;
  };
}

export interface IEditTodo extends ReduxAction {
  type: "EDIT_TODO";
  payload: {
    todo: ITodo;
    newText: string;
  };
}

export type Actions = IEditTodo | ICompleteTodo | IAddTodo | IDeleteTodo;
