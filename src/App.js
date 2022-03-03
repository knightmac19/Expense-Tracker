import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "el1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 1, 28),
    },
    {
      id: "el2",
      title: "Groceries",
      amount: 82.44,
      date: new Date(2022, 2, 18),
    },
    { id: "el3", title: "Rent", amount: 943, date: new Date(2022, 3, 31) },
    {
      id: "el4",
      title: "Date Night",
      amount: 74.97,
      date: new Date(2022, 6, 31),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
