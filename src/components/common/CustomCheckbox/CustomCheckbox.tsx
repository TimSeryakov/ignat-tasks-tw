import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type CustomCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void
  customSpanClassName?: string
};

export const CustomCheckbox: React.FC<CustomCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, customSpanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps

}
) => {
  const [value, setValue] = useState<boolean>(false)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked)
    onChangeChecked && onChangeChecked(e.currentTarget.checked)
  }

  const checkboxStyle = `${className ? className : ""}`
  const spanStyle = `pl-1 ${customSpanClassName ? customSpanClassName : ""}`

  return (
      <label>
        <input
            type="checkbox"
            className={checkboxStyle}
            checked={value}
            onChange={onChangeHandler}

            {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
        />
        {children && <span className={spanStyle}>{children}</span>}
      </label> // благодаря label нажатие на спан передастся в инпут
  )
}