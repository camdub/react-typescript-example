import * as React from "react";
import * as classNames from "classnames";
import { ITodo } from "../rdc.todo";
import TodoTextInput from "./TodoTextInput";

interface TodoItemProp {
  todo: ITodo;
  deleteTodo: (todo: ITodo) => void;
  editTodo: (todo: ITodo, text: string) => void;
  key: any;
}
interface TodoItemState {
  editing: boolean;
}

class TodoItem extends React.Component<TodoItemProp, TodoItemState> {
  constructor(props: TodoItemProp, context: any) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(todo: ITodo, text: string) {
    if (text.length === 0) {
      this.props.deleteTodo && this.props.deleteTodo(todo);
    }
    this.setState({ editing: false });
  }

  render() {
    const { todo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={text => this.handleSave(todo, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <input className="toggle" type="checkbox" checked={todo.completed} />
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {todo.text}
          </label>
          <button
            className="destroy"
            onClick={() => deleteTodo && deleteTodo(todo)}
          />
        </div>
      );
    }

    return (
      <li
        className={classNames({
          completed: todo.completed,
          editing: this.state.editing
        })}
      >
        {element}
      </li>
    );
  }
}

export default TodoItem;
