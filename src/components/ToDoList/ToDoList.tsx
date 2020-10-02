import React from "react";
import s from './ToDoList.module.css'
import {FilterPriorityValuesType, TaskType} from "../ToDoBoard/ToDoBoard";

type PropsType = {
  name: string
  tasks: Array<TaskType>
  removeTask: (taskID: string) => void
  changeFilter: (value: FilterPriorityValuesType) => void
}


export function ToDoList(props: PropsType) {

  const renderTasksList = props.tasks.map(t => {
    const removeTasks = () => {
      props.removeTask(t.id)
    }

    return (
        <li key={t.id} className="bg-gray-800 my-1 rounded-md">
          <b>{t.name}</b>
          <span> [{t.priority}]</span>
          <button onClick={removeTasks}><span role="img" aria-label="delete">❌</span></button>
        </li>
    )
  })

  const onSetAllFilterClick = () => {
    props.changeFilter("all")
  }
  const onSetHeightFilterClick = () => {
    props.changeFilter("height")
  }
  const onSetMiddleFilterClick = () => {
    props.changeFilter("middle")
  }
  const onSetLowFilterClick = () => {
    props.changeFilter("low")
  }

  return (
      <section className={s.todolist}>
        <div className={s["todolist__inner"]}>
          <h3 className="text-2xl">{props.name}</h3>
          <ul>
            {renderTasksList}
          </ul>
          <div>
            <h4 className="text-xl">Priority filter:</h4>
            <button onClick={onSetAllFilterClick} className="bg-gray-900 rounded-md p-2">All</button>
            <button onClick={onSetHeightFilterClick} className="bg-gray-900 rounded-md p-2">Height</button>
            <button onClick={onSetMiddleFilterClick} className="bg-gray-900 rounded-md p-2">Middle</button>
            <button onClick={onSetLowFilterClick} className="bg-gray-900 rounded-md p-2">Low</button>
          </div>
        </div>
      </section>
  )
}