import React, { useState } from "react";
import Todo from "../models/Todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (value: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (value: string) => {},
  removeTodo: (id: string) => {},
});

 const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const newTodoHandler = (enteredValue: string) => {
    console.log("App.tsx", enteredValue);
    setTodos((prevTodos) => {
      const newArray = [...prevTodos];
      newArray.push(new Todo(enteredValue));
      return newArray;
    });
  };

  const removeTodoHandler = (id: string) => {
    console.log(id);
    setTodos((previosState) => {
      const newArray = [...previosState];
      return newArray.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: newTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;