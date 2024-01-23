import logo from "./logo.svg";
import "./App.css";
import HelloWrold from "./components/HelloWorld";
import CationImage from "./components/CaptionImage";
import BlinkComponent from "./components/BlinkComponent";
import CountComponent from "./components/CountComponent";
import React, { useEffect } from "react";
import RegisterInputButton from "./components/RegisterInputButton";
import TodoApp from "./components/TodoApp";

function App() {
  const [visible, setVisible] = React.useState(true);

  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
