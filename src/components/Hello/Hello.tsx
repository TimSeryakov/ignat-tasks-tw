import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {v1} from "uuid";
import {CustomButton} from "../common/CustomButton/CustomButton";
import {CustomInput} from "../common/CustomInput/CustomInput";

type VisitorType = {
  id: string
  name: string
}

export function Hello () {

  const [name, setName] = useState<string>("")
  const [visitors, setVisitors] = useState<Array<VisitorType>>([])
  const [errorMessage, setErrorMessage] = useState<string>("")

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
    setErrorMessage("")
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
    } else {
      setErrorMessage("Enter your name, please!")
    }
  }


  const addName = (name: string) => {
      const newVisitor: VisitorType = { id: v1(), name: name }
      setVisitors([newVisitor, ...visitors])
  }

  return (
      <section className="pt-64">

        <div className="flex pb-3 py-4 px-4 w-64 mx-auto">
          <CustomInput
              placeholder="Enter your name..."

              value={name}
              onChange={onChangeTitle}
              onKeyPress={onKeyPress}
              errorMessage={errorMessage}
          />


          <CustomButton title="Boom!" onClick={onGreetingsButtonClick} color="blue"/>
        </div>

        <div className="text-center">
           <span className="text-gray-600 font-semibold">Visitors: {visitors.length}</span>
        </div>
      </section>
  )
}

