import React from "react";
import {FilterPriorityValuesType, TaskType} from "../../ToDoBoard";
import {CustomInput} from "../../../common/CustomInput/CustomInput";
import {CustomButton} from "../../../common/CustomButton/CustomButton";

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
        <li key={t.id} className="py-2 px-3 my-3 border border-gray-600 rounded-md flex justify-between items-center">
          <span><b>{t.name}</b> [{t.priority}]</span>
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
      <section className="w-full flex justify-center text-gray-100 mt-10">
        <div className="border bg-gray-700 inline-block p-6 rounded-lg text-left">
          <h3 className="text-2xl pb-4">{props.name}</h3>
          <ul className="list-none">
            {renderTasksList}
          </ul>
          <div>
            <h4 className="text-xl pb-2 pt-4">Priority filter:</h4>

            <CustomButton onClick={onSetAllFilterClick} title="All" color="yellow"/>
            <CustomButton onClick={onSetHeightFilterClick} title="Height" color="red"/>
            <CustomButton onClick={onSetMiddleFilterClick} title="Middle" color="blue"/>
            <CustomButton onClick={onSetLowFilterClick} title="Low" color="green"/>
          </div>
        </div>
      </section>
  )
}