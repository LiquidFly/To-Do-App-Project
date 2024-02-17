import React, { useEffect } from "react";
import ToDoItem from "./ToDoItem.jsx";
import { useToDoContext } from "./ToDoContext.jsx";
function ToDoList() {
  const Context = useToDoContext();

  return (
    <div className=" mt-3 p-3">
      <h1 className="text-2xl font-extrabold">Your ToDos</h1>
      {Context.ToDoList &&
        Context.ToDoList.map((item) => (
          <ToDoItem id={item.id} text={item.InputText} key={item.id}></ToDoItem>
        ))}
    </div>
  );
}

export default ToDoList;
