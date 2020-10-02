import React, {useState} from "react";
import {v1} from 'uuid';
import {ToDoList} from "../ToDoList/ToDoList";


export type TaskType = {
  id: string
  name: string
  priority: PriorityValuesType
}

export type PriorityValuesType = "height" | "middle" | "low"
export type FilterPriorityValuesType = "all" | "height" | "middle" | "low"


export const ToDoBoard = (props: TaskType) => {

  const [tasks, setTasks] = useState<Array<TaskType>>(
      [
        {id: v1(), name: "Work", priority: "height"},
        {id: v1(), name: "Anime", priority: "low"},
        {id: v1(), name: "Gaming", priority: "middle"},
        {id: v1(), name: "ReactJS", priority: "height"},
        {id: v1(), name: "HTML", priority: "low"},
      ])

  const [filter, setFilter] = useState<FilterPriorityValuesType>("all")

  function removeTasks(taskID: string) {
    const filteredTasks = tasks.filter(t => t.id !== taskID)
    setTasks(filteredTasks)
  }

  function changeFilter(value: FilterPriorityValuesType) {
    setFilter(value)
  }

  // TODO зарефакторить бы на switch case, но что-то не растет - не выводит All при первой отрисовке
  let taskForTodoList = tasks
  if (filter === "low") {
    taskForTodoList = tasks.filter(t => t.priority === "low")
  }
  if (filter === "middle") {
    taskForTodoList = tasks.filter(t => t.priority === "middle")
  }
  if (filter === "height") {
    taskForTodoList = tasks.filter(t => t.priority === "height")
  }
  if (filter === "all") {
    taskForTodoList = tasks.filter(t => t.priority)
  }

  return (
      <section className="">
        <ToDoList
            name="What to learn"
            tasks={taskForTodoList}
            removeTask={removeTasks}
            changeFilter={changeFilter}
        />
      </section>
  )
}
