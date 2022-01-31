import logo from "./logo.svg";
import "./App.css";
// import TransActionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TransactionList />
      </header>
    </div>
  );
}

export default App;
