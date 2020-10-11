import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent} from 'react';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type CustomInputType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void
  onPressEnter?: () => void
  errorMessage?: string
  placeHolder?: string
  spanClassName?: string
}


export const CustomInput: FC<CustomInputType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onPressEnter,
        errorMessage,
        placeHolder = "Type something...",
        className, spanClassName,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e); // проверка, если есть пропс onChange
                             // то передать ему е (поскольку onChange не обязателен)

    onChangeText && onChangeText(e.currentTarget.value);
  }

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    e.key === "Enter" // если нажата кнопка Enter
    && onPressEnter // и есть пропс onEnter
    && onPressEnter(); // то вызвать его
  }

    const inputStyle = `${errorMessage ? "border-red-400 bg-red-100" : "border-gray-500 bg-gray-300"} 
                        flex-grow px-3 py-1 mr-2 text-gray-900 bg-gray-300 border border-gray-500 rounded-md focus:outline-none focus:shadow-outline
                        ${className ? className : ""}` // кастомные стили, если есть, то переназначат существющие

    const errorSpanStyle = `text-red-400 pl-3 text-sm ${spanClassName ? spanClassName : ""}`

  return (
      <div className="inline-block text-left">
        <input
          type={"text"}
          onChange={onChangeCallback}
          onKeyPress={onKeyPressCallback}
          className={inputStyle}
          placeholder={placeHolder}

          {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />
      <br/>
      {errorMessage && <span className={errorSpanStyle}>{errorMessage}</span>}
      </div>
  )
}
