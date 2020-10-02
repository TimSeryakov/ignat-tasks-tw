import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";


export const Header = () => {
  return (

      <header className={s.header}>
        <ul>
          <li><NavLink to="/chat"><b>Chat</b> (Task 01) </NavLink></li>
          <li><NavLink to="/todo"><b>Todo</b> (Task 02) </NavLink></li>
          <li><NavLink to="/hello"><b>Hello</b> (Task 03) </NavLink></li>
        </ul>
      </header>

  )
}