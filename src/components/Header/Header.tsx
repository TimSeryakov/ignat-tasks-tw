import React from "react";
import {NavLink} from "react-router-dom";


export function Header () {
  return (

      <header className="flex justify-center h-32">
        <ul className="mt-10">
          <li className="inline-block">
            <NavLink to="/chat" className="mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><b>Chat</b> (Task 01) </NavLink>
          </li>
          <li className="inline-block">
            <NavLink to="/todo" className="mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><b>Todo</b> (Task 02) </NavLink>
          </li>
          <li className="inline-block">
            <NavLink to="/hello" className="mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><b>Hello</b> (Task 03) </NavLink>
          </li>
          <li className="inline-block">
            <NavLink to="/custom-elements-demo" className="mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><b>Custom Elements Demo</b> (Task 04) </NavLink>
          </li>
        </ul>
      </header>

  )
}