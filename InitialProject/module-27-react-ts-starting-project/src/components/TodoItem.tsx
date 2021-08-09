import React, { useContext }  from "react";
import Todo from "../models/Todo";
import { TodosContext } from "../store/todos-context";
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{item: Todo}>  = (props) =>{

   const clickItemHandler = (event: React.MouseEvent) =>{
       console.log(props.item.id);
       todoCtx.removeTodo(props.item.id);
   }

   const todoCtx = useContext(TodosContext);

    return(
        <>
            <li className= {classes.item} onClick = {clickItemHandler} key = {props.item.id}>{props.item.text}</li>
        </>
    );
};

export default TodoItem;