import * as React from "react";
import { ITodo } from "../rdc.todo";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

interface MainSectionProps {
  todos: ITodo[];
  clearCompleted: () => void;
  completeAll: () => void;
  editTodo: (todo: ITodo, text: string) => void;
  completeTodo: (todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
}
interface MainSectionState {
  filter: string;
}

class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  constructor(props: MainSectionProps, context: any) {
    super(props, context);
    this.state = { filter: "showAll" };
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed);
    if (atLeastOneCompleted) {
      this.props.clearCompleted();
    }
  }

  handleShow(filter: string) {
    this.setState({ filter });
  }

  renderToggleAll(completedCount: number) {
    const { todos, completeAll } = this.props;
    if (todos.length > 0) {
      return (
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={() => completeAll()}
        />
      );
    }
    return null;
  }

  renderFooter(completedCount: number) {
    const { todos } = this.props;
    const { filter } = this.state;
    const activeCount = todos.length - completedCount;

    return (
      todos.length && (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={this.handleClearCompleted.bind(this)}
          onShow={this.handleShow.bind(this)}
        />
      )
    );
  }

  render() {
    const { todos, completeTodo, deleteTodo, editTodo } = this.props;

    const completedCount = todos.reduce(
      (count: number, todo): number => (todo.completed ? count + 1 : count),
      0
    );

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}

export default MainSection;
