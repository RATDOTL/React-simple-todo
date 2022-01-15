import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>Good Job</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
