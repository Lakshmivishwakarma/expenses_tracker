import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpenses from './components/NewExpenses/NewExpenses';

const App = () => {
  let expenses = [
    {
      id: "e1",
      title: "School fee",
      amount: 250,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e2",
      title: "Books",
      amount: 230,
      date: new Date(2021, 5, 13),
    },
    {
      id: "e3",
      title: "House Rent",
      amount: 1050,
      date: new Date(2021, 5, 7),
    },
    {
      id: "e4",
      title: "Food",
      amount: 500,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpenses/>
      <Expenses item={expenses} />
    </div>
  );
};
export default App;
