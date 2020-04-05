import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Elemento
const elemento = (
  <div>
    <h2>Olá DATEK</h2>
  </div>
); // JSX

const MostrarI = props => {
  return <p>{props.i}</p>;
};

// Componente
function App(props) {
  const [i, setI] = useState(1);

  const increment = () => {
    setI(i + 1);
  };

  return (
    <div className="App">
      <h1>
        Hello {props.name} {i}
      </h1>
      <button onClick={increment}>Incrementar</button>
      <MostrarI i={i} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="DATEK Tecnologia" />, rootElement);
