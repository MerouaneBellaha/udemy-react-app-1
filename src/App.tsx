import Expenses from "./components/Expenses/Expenses";
import { ExpenseType } from "./components/types/ExpenseType";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses: Array<ExpenseType> = [
    {
      id: "e1",
      title: "Car insurance",
      date: new Date(2021, 2, 28),
      amount: 294.5,
    },
    {
      id: "e2",
      title: "cards",
      date: new Date(2021, 2, 10),
      amount: 1000.5,
    },
  ];

  return (
    <div>
      <Expenses expenses={expenses}></Expenses>
      <NewExpense></NewExpense>
    </div>
  );
};

export default App;
