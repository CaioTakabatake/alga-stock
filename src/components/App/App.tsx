import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Button from "../../shared/Button/Button";
import Container from "../../shared/Container";
import Input from "../../shared/Input";

function TestComponent() {
  return (
    <img
      src="https://cdn-icons-png.flaticon.com/512/64/64673.png"
      alt="search icon"
    />
  );
}

function App() {
  const [street, setStreet] = useState("");

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
        <Input
          label="Street"
          placeholder="E.g.: 15th Avenue"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </Container>
    </div>
  );
}

export default App;
