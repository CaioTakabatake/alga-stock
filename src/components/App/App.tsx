import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Button from "../Button/Button";

function TestComponent() {
  return (
    <img
      src="https://cdn-icons-png.flaticon.com/512/64/64673.png"
      alt="search icon"
    />
  );
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <div className="Container">
        <Button
          onClick={() => {
            alert("test");
          }}
          appendIcon={<TestComponent />}
        >
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
