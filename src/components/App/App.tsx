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
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <ul>
          {["Daniel", "Caio", "Thiago", "Caio"].map((name, index) => {
            return <li key={index}>{name}</li>;
          })}
        </ul>
      </Container>
    </div>
  );
}

export default App;
