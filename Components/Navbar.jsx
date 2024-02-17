import React from "react";
import { useToDoContext } from "./ToDoContext.jsx";

function Navbar() {
  const Context = useToDoContext();

  function handleThemeBtn() {
    if (Context.Theme === "light") {
      Context.setTheme("dark");
    } else {
      Context.setTheme("light");
    }
  }

  return (
    <nav className="flex justify-around bg-purple-800 px-5 py-2 text-white">
      <div className="nav-left font-extrabold">iTask</div>
      <div className="nav-right flex list-none gap-4">
        <li>Home</li>
        <li>Your Tasks</li>
        <li>
          <button onClick={() => handleThemeBtn()}>
            <a
              className="group inline-block rounded-full bg-gradient-to-r from-orange-300 via-pink-500 to-green-300 p-[2px] hover:text-black focus:outline-none  active:text-opacity-75"
              href="#"
            >
              <span className="block rounded-full  px-1 text-sm font-medium group-hover:bg-transparent">
                {Context.Theme === "light"
                  ? "Enable Dark Mode"
                  : "Enable Light Mode"}
              </span>
            </a>
          </button>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
