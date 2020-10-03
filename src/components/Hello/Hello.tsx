import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {v1} from "uuid";

type VisitorType = {
  id: string
  name: string
}

export function Hello () {

  const [name, setName] = useState<string>("")
  const [visitors, setVisitors] = useState<Array<VisitorType>>([])

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onGreetingsButtonClick()
    }
  }

  const onGreetingsButtonClick = () => {
    if (name !== "") {
      alert(`Hello ${name}`)
      addName(name)
      setName("")
    }
  }


  const addName = (name: string) => {
      const newVisitor: VisitorType = { id: v1(), name: name }
      setVisitors([newVisitor, ...visitors])
  }

  return (
      <section className="pt-64">

        <div className="flex pb-3 py-4 px-4 w-64 mx-auto">
          <input
              className="flex-grow border-gray-500 px-3 py-1 mr-2 border bg-gray-300 rounded-md text-gray-900 focus:outline-none focus:shadow-outline"
              placeholder="Enter your name..."

              value={name}
              onChange={onChangeTitle}
              onKeyPress={onKeyPress}
          />
          <button
              className="bg-blue-400 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline"
              onClick={onGreetingsButtonClick}>
            Post
          </button>
        </div>

        <div className="text-center">
           <span className="text-gray-600 font-semibold">Visitors: {visitors.length}</span>
        </div>
      </section>
  )
}

