import { useEffect, useRef, useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(ref.current) ref.current.focus();
  })

  useEffect(() => {
    document.title = 'My App';
  })
  return (
    <div>
      <select className="form-select" onChange={(event) => setCategory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category}/>
    </div>
  );
}

export default App;
