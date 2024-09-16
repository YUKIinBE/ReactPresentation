import { useEffect, useRef, useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
import ProductList from "./components/ProductList";

const connect = () => console.log('Connecting');
const disconnect = () => console.log('Disconnecting');

function App() {

  useEffect(() => {
    connect();

    return () => disconnect();
  })
  return (
    <div>
    </div>
  );
}

export default App;
