import { Actions } from "./todo.types";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export type IState = {
  readonly todoList: ITodo[];
  readonly lastId: number;
};

const initialState: IState = {
  todoList: [],
  lastId: 0
};

export default (state: IState = initialState, action: Actions): IState => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: state.lastId,
        text: action.payload.text,
        completed: false
      } as ITodo;
      return {
        ...state,
        todoList: state.todoList.concat(newTodo),
        lastId: state.lastId + 1
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter(
          todo => todo.id !== action.payload.todo.id
        )
      };
    // case "EDIT_TODO":
    //   const newList = state.todoList.map(todoItem => {
    //     if (todoItem.id === action.payload.todo.id) {
    //       return {
    //         ...todoItem,
    //         text: action.payload.todo.text
    //       };
    //     }
    //     return todoItem;
    //   });
    //   return {
    //     ...state,
    //     todoList: newList
    //   };
    // case "COMPLETE_TODO":
    // return state;
    default:
      return state;
  }
};

//  handleActions<IState, Todo>(
//   {
//     [ADD_TODO]: (state: IState, action: Action<Todo>): IState => {
//       return [
//         {
//           id:
//             state.reduce(
//               (maxId: number, todo: Todo) => Math.max(todo.id as number, maxId),
//               -1
//             ) + 1,
//           completed: action.payload.completed,
//           text: action.payload.text
//         },
//         ...state
//       ];
//     },

//     [DELETE_TODO]: (state: IState, action: Action<Todo>): IState => {
//       return state.filter(todo => todo.id !== action.payload.id);
//     },

//     [EDIT_TODO]: (state: IState, action: Action<Todo>): IState => {
//       return <IState>state.map(
//         todo =>
//           todo.id === action.payload.id
//             ? { ...todo, text: action.payload.text }
//             : todo
//       );
//     },

//     [COMPLETE_TODO]: (state: IState, action: Action<Todo>): IState => {
//       return <IState>state.map(
//         todo =>
//           todo.id === action.payload.id
//             ? { ...todo, completed: !todo.completed }
//             : todo
//       );
//     },

//     [COMPLETE_ALL]: (state: IState, action: Action<Todo>): IState => {
//       const areAllMarked = state.every(todo => todo.completed);
//       return <IState>state.map(todo => ({
//         ...todo,
//         completed: !areAllMarked
//       }));
//     },

//     [CLEAR_COMPLETED]: (state: IState, action: Action<Todo>): IState => {
//       return state.filter(todo => todo.completed === false);
//     }
//   },
//   initialState
// );
