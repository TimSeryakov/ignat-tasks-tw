import React, {FC, KeyboardEvent} from 'react';

type CustomInputType = {
  onPressEnter?: () => void
  placeHolder?: string
  haveError?: boolean
}


export const CustomInput: FC<CustomInputType> = (
    {
        onPressEnter= () => {}, placeHolder = "Type something...", haveError = false
    }
) => {

  const KeyPress = (e: KeyboardEvent<HTMLInputElement>) => {if (e.key === "Enter") {onPressEnter()}}
  const inputStyle = "flex-grow px-3 py-1 mr-2 text-gray-900 bg-gray-300 border border-gray-500 rounded-md focus:outline-none focus:shadow-outline"

  return (
        <input 
            className={`${haveError ? "border-red-400 bg-red-100" : "border-gray-500 bg-gray-300"} ${inputStyle}`}
            onKeyPress={KeyPress}
            placeholder={placeHolder}
        />
  )
}


// - замените в предыдущих домашках стандартные кнопки и инпуты вашими универсальными компонентами, в последующих домашках используйте свои универсальные компоненты вместо стандартных
// задачи со звёздочками:
// * сделайте так чтоб onChange ваших компонент сразу давал нужное значение (value/checked), а не объект ивента

