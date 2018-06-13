import * as React from "react";

interface FooterProps {
  completedCount: number;
  activeCount: number;
  filter?: string;
  onClearCompleted: () => void;
  onShow: (filter: string) => void;
}

class Footer extends React.Component<FooterProps> {
  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? "item" : "items";

    return (
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong> {itemWord} left
      </span>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button className="clear-completed" onClick={() => onClearCompleted()}>
          Clear completed
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
        {this.renderClearButton()}
      </footer>
    );
  }
}

export default Footer;
