import React from "react";
import Navbar from "./Components/Navbar.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import ToDoList from "./Components/ToDoList.jsx";
import { useToDoContext } from "./Components/ToDoContext.jsx";
import "./index.css";

function App() {
  const Context = useToDoContext();

  return (
    <>
      <div
        className={`cover ${
          Context.Theme === "light" ? `bg-white` : `bg-black`
        } min-h-screen`}
      >
        <Navbar></Navbar>
        <div className="conatiner min-h-[600px] bg-blue-500 mx-[25%] my-5 w-[50%] rounded-xl p-5">
          <h1 className="text-center text-2xl">Manage Your ToDo Lists</h1>
          <SearchBar></SearchBar>
          <hr className="mt-8 mx-[5%]" />
          <ToDoList></ToDoList>
        </div>
      </div>
    </>
  );
}

export default App;
