import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Container from "../../shared/Container";
import Table from "../../shared/Table";
import { TableHeader } from "../../shared/Table";
import Products from "../../shared/Table/Table.mockdata";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

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
        <Form title="Product Form" onSubmit={console.log}>
          <Input label="Name" placeholder="Ex: Cookie" />
          <Input
            label="Price"
            type="number"
            step={0.01}
            min={0}
            placeholder="Ex: 1.25"
          />
          <Input label="Stock" type="number" min={0} placeholder="Ex: 25" />
          <Button>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
