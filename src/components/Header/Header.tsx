import React from "react";
import {NavLink} from "react-router-dom";


export function Header () {
  return (

      <header className="flex justify-center h-32">
        <ul>
          <li className="inline-block mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><NavLink to="/chat"><b>Chat</b> (Task 01) </NavLink></li>
          <li className="inline-block mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><NavLink to="/todo"><b>Todo</b> (Task 02) </NavLink></li>
          <li className="inline-block mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><NavLink to="/hello"><b>Hello</b> (Task 03) </NavLink></li>
        </ul>
      </header>

  )
}