import { createContext, useContext, useState, useEffect } from "react";

export const ToDoContext = createContext();

export function useToDoContext() {
  return useContext(ToDoContext);
}

export function ToDoContextProvider(props) {
  const [ToDoList, setToDoList] = useState([]);
  const [Theme, setTheme] = useState("light");

  function CreateToDoList(obj) {
    setToDoList((prev) => [...prev, obj]);
  }

  function AddToDo() {
    localStorage.setItem("todo-list", JSON.stringify(ToDoList));
  }

  useEffect(() => {
    const StoredList = JSON.parse(localStorage.getItem("todo-list"));
    console.log("Stored-->");
    if (StoredList) {
      setToDoList(StoredList);
    }
    console.log(StoredList);
  }, []);

  function DelToDo(id) {
    const FilteredArray = ToDoList.filter((item) => {
      return item.id != id;
    });
    setToDoList(FilteredArray);
    localStorage.setItem("todo-list", JSON.stringify(FilteredArray));
    console.log(FilteredArray);
    console.log(id);
  }

  return (
    <ToDoContext.Provider
      value={{
        CreateToDoList,
        ToDoList,
        setToDoList,
        DelToDo,
        AddToDo,
        setTheme,
        Theme,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
}
