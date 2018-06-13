import * as React from "react";
import { ITodo } from "../rdc.todo";
import TodoItem from "./TodoItem";
import Footer from "./footer";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { deleteTodo, editTodo, addTodo } from "../act.todo";
import { IState as IGlobalState } from "../rdc.todo";
import Header from "./header";

interface MainSectionProps {
  todos: ITodo[];
  dispatch: Dispatch<any>;
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
      // this.props.clearCompleted();
    }
  }

  handleShow(filter: string) {
    this.setState({ filter });
  }

  renderToggleAll(completedCount: number) {
    const { todos } = this.props;
    if (todos.length > 0) {
      return (
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={() => this.handleClearCompleted()}
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
    const { todos, dispatch } = this.props;

    const completedCount = todos.reduce(
      (count: number, todo): number => (todo.completed ? count + 1 : count),
      0
    );

    return (
      <div>
        <Header addTodo={(text: string) => dispatch(addTodo(text))} />
        <section className="main">
          {this.renderToggleAll(completedCount)}
          <ul className="todo-list">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={(t: ITodo) => dispatch(deleteTodo(t))}
                editTodo={(t, s) => dispatch(editTodo(t, s))}
              />
            ))}
          </ul>
          {/*this.renderFooter(completedCount)*/}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: IGlobalState) => ({
  todos: state.todoList
});

export default connect(mapStateToProps)(MainSection);
