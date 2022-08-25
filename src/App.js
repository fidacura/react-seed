import { render } from "react-dom";
import { StrictMode } from "react";

import Component from "./Component";
import "./styles.scss";

const App = () => {
  return (
    <StrictMode>
      <Component />
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
