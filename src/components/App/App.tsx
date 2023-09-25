import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Container from "../../shared/Container";
import Table from "../../shared/Table";
import { TableHeader } from "../../shared/Table";
import Products from "../../shared/Table/Table.mockdata";

const headers: TableHeader[] = [
  { key: "id", value: "#" },
  { key: "Actions", value: "Actions" },
  { key: "price", value: "Price", right: true },
  { key: "stock", value: "Available Stock", right: true },
];

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table headers={headers} data={Products} />
      </Container>
    </div>
  );
}

export default App;
