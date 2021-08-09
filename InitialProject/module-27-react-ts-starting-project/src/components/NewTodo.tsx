import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoCtx = useContext(TodosContext);

  const submitTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    todoCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitTodoHandler}>
      <label htmlFor="todo">Insert your Todo</label>
      <input ref={inputRef} type="text" id="todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
