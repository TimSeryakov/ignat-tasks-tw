import React, {useState} from "react"
import {CustomButton} from "../common/CustomButton/CustomButton"

function Clock() {
  const [timerID, setTimerID] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)

  const stop = () => {
    clearTimeout(timerID)
  }
  const start = () => {
    stop()
    const ID: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000)
    setTimerID(ID)
  }

  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    setShow(false)
  }

  const stringTime = date.toLocaleTimeString()
  const stringDate = date.toLocaleDateString()

  return (
      <div>
        <div className={"h-24"}>
          <div className={"text-xl text-gray-700 lowercase font-major whitespace-pre-line cursor-default inline-block mx-auto"}
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
          >
            {stringTime}
          </div>

          {show && (
              <div className={"text-xl text-gray-700 lowercase font-major whitespace-pre-line cursor-default"}>
                {stringDate}
              </div>
          )}
        </div>
        <CustomButton onClick={start}>start</CustomButton>
        <CustomButton onClick={stop}>stop</CustomButton>

      </div>
  )
}

export default Clock
