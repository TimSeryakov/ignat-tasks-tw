import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type CustomCheckboxPropsType = DefaultInputPropsType & {
  // title: string
  initValue: boolean
  onChangeCheckedHandler?: (checked: boolean) => void
  customClassName?: string
};

export const CustomCheckbox: React.FC<CustomCheckboxPropsType> = (
    {
        // title,
        initValue,

        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeCheckedHandler,
        className, customClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps

}
) => {
  const [valueFromParent, setValueFromParent] = useState<boolean>(initValue)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueFromParent(e.currentTarget.checked)
  }

  return (
      <label>
        <input
            type="checkbox"
            checked={valueFromParent}
            onChange={onChangeHandler}
        />
        <span> zxc</span>
      </label>
  )
}