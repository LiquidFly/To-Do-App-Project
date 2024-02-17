import React, { useState, useEffect } from "react";
import { useToDoContext } from "./ToDoContext.jsx";

function SearchBar() {
  const Context = useToDoContext();

  const [InputValue, setInputValue] = useState("");
  const [SaveBtn, setSaveBtn] = useState(true);

  function handleSaveBtnClick() {
    Context.AddToDo();
    setSaveBtn(false);
  }

  function CreateToDo(InputText) {
    const ToDoObj = {
      InputText: InputText,
      id: Date.now().toString(36),
    };
    Context.CreateToDoList(ToDoObj);
    console.log("ARRAy is-->");
    console.log(Context.ToDoList);
    setInputValue("");
    return ToDoObj;
  }

  useEffect(() => {
    setSaveBtn(true);
  }, [Context.ToDoList]);

  return (
    <div className="SearcgBar flex justify-between mt-4">
      <input
      placeholder="Enter To Do List..."
        value={InputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className=" w-[80%] rounded-xl p-1"
        type="text"
      />
 
      {InputValue ? (
        <button
          onClick={() => CreateToDo(InputValue)}
          className="bg-purple-600 rounded-xl w-[10%]"
        >
          Add
        </button>
      ) : null}

      {Context.ToDoList.length > 0 && SaveBtn ? (
        <button
          className="bg-orange-300 ml-4 rounded-xl w-[10%] focus:bg-orange-700 focus:text-white"
          onClick={() => handleSaveBtnClick()}
        >
          Save List
        </button>
      ) : null}
    </div>
  );
}

export default SearchBar;
