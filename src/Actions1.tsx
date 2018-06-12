import * as React from "react";
import { connect, DispatchProp } from "react-redux";
import * as Actions from "./actions";

type IProps = DispatchProp<any>;

class C extends React.Component<IProps> {
  render() {
    return (
      <Button onClick={() => this.props.dispatch(Actions.updateUser("Hello"))}>
        Update
      </Button>
    );
  }
}

/*
  BUTTONS
*/

export default connect<{}, DispatchProp<any>>(null)(C);

interface IButtonProps {
  onClick: typeof Actions.updateUser;
}

const Button: React.SFC<IButtonProps> = ({ onClick, children }) => (
  <button onClick={() => onClick}>{children}</button>
);
