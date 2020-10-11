import React, {ChangeEvent, useState} from 'react'

type CustomCheckboxPropsType = {
  title: string
  value: boolean
};

export const CustomCheckbox = (props: CustomCheckboxPropsType) => {
  const [valueFromParent, setValueFromParent] = useState<boolean>(props.value)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueFromParent(e.currentTarget.checked)
  }

  return (
      <label>
        <input type="checkbox" checked={valueFromParent} onChange={onChangeHandler}/> {props.title}
      </label>
  )
}