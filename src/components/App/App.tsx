import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Button from "../../shared/Button/Button";
import Container from "../../shared/Container";

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
      <Container>
        <Button
          onClick={() => {
            alert("test");
          }}
          appendIcon={<TestComponent />}
        >
          Button
        </Button>
      </Container>
    </div>
  );
}

export default App;
