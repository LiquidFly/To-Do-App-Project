import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useToDoContext } from "./ToDoContext.jsx";

function ToDoItem(props) {
  const Context = useToDoContext();

  const [Checked, setChecked] = useState(false);

  const [Edit, setEdit] = useState(true);
  function handleEdit() {
    setEdit(!Edit);
    Context.AddToDo();
    console.log(Edit);
  }

  function handleDoneEditingBtn() {
    setEdit(!Edit);
    Context.AddToDo();
  }

  return (
    <>
      <li className={`flex text-xl my-2 justify-between items-center`}>
        <div className="flex gap-2 items-center">
          <button className="mb-5">
            <FaCheck
              onClick={() => {
                setChecked(!Checked);
              }}
            />
          </button>
          <textarea
            className={`${Edit ? `bg-blue-500` : `bg-blue-200`}  ${
              Checked ? `line-through` : ``
            }  min-w-[200%] max-h-240 overflow-hidden resize-none focus:outline-0`}
            readOnly={Edit ? true : null}
          >
            {props.text}
          </textarea>
        </div>
        <div className="flex gap-4">
          {Checked === false ? (
            <div>
              {Edit ? (
                <button
                  className=" hover:text-white rounded transition duration-300 ease-in-out"
                  onClick={() => handleEdit()}
                >
                  <p> Edit</p>
                </button>
              ) : (
                <button
                  className=" hover:text-white rounded transition duration-300 ease-in-out"
                  onClick={() => handleDoneEditingBtn()}
                >
                  Done Editing?
                </button>
              )}
            </div>
          ) : (
            ""
          )}

          <MdDelete onClick={() => Context.DelToDo(props.id)} />
        </div>
      </li>
    </>
  );
}

export default ToDoItem;
