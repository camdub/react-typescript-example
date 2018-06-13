import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import globalReducer, { ITodo } from "../todoApp/rdc.todo";
import MainSection from "../todoApp/components/MainSection";
import { Provider } from "react-redux";
import { createStore } from "redux";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const store = createStore(globalReducer);

const App = () => (
  <div style={styles}>
    <br />
    <MainSection />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
