import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car insurance',
      date: new Date(2021, 2, 28),
      amount: 294.5
    },
    {
      id: 'e2',
      title: 'cards',
      date: new Date(2021, 2, 10),
      amount: 1000.5
    }
  ];

  return (
  <div>
    <h2>Expenses</h2>
      <ExpenseItem {...expenses[0]}></ExpenseItem>   
      <ExpenseItem {...expenses[1]}></ExpenseItem>   
  </div>
  );

}

export default App;
