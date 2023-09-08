import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Button from "../Button/Button";

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <div className="Container">
        <Button
          content=""
          onClick={() => {
            alert("test");
          }}
        >
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
