
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";


function App() {
  return (
    <TodosContextProvider>
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
