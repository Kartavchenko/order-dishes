import DishesForm from "./components/Form/Form";
import sendResults from "./redux/operations";

function App() {
  return (
    <DishesForm onSubmit={sendResults} />
  );
}

export default App;
