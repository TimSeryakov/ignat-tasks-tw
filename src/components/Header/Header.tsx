import React from "react";
import {NavLink} from "react-router-dom";


export function Header () {
  return (

      <header className="flex justify-center pb-10">
        <ul className="">
          <li className="inline-block mt-10">
            <NavLink to="/chat" className="mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><b>Chat</b> (Task 01) </NavLink>
          </li>
          <li className="inline-block mt-10">
            <NavLink to="/todo" className="mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><b>TODO</b> (Task 02) </NavLink>
          </li>
          <li className="inline-block mt-10">
            <NavLink to="/hello" className="mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><b>Hello</b> (Task 03) </NavLink>
          </li>
          <li className="inline-block mt-10">
            <NavLink to="/custom-elements-demo" className="mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><b>Custom Elements Demo</b> (Task 04) </NavLink>
          </li>
          <li className="inline-block mt-10">
            <NavLink to="/HW4" className="mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"><b>Код Игната (HW4)</b> (Task 04) </NavLink>
          </li>

          <li className="inline-block mt-10">
            <NavLink to="/pre-junior" className="mt-10 mx-3 p-3 rounded-md bg-blue-200 text-blue-700 hover:bg-red-200"><b>Pre-Junior</b></NavLink>
          </li>
          <li className="inline-block mt-10">
            <NavLink to="/junior" className="mt-10 mx-3 p-3 rounded-md bg-blue-200 text-blue-700 hover:bg-red-200"><b>Junior</b></NavLink>
          </li>
          <li className="inline-block mt-10">
            <NavLink to="/junior-plus" className="mt-10 mx-3 p-3 rounded-md bg-blue-200 text-blue-700 hover:bg-red-200"><b>Junior+</b></NavLink>
          </li>
        </ul>
      </header>

  )
}