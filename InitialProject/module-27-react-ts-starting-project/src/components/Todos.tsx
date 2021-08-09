import React, { useContext } from "react";

import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <>
      <NewTodo />
      <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
          <TodoItem item={item} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
