import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type CustomButtonType =  DefaultButtonPropsType & {
  color?: "teal" | "green" | "red" | "blue" | "pink" | "purple" | "orange" | "yellow"
  size?: "small" | "normal" | "big"
}

enum Sizes {
  small = 8,
  normal = 10,
  big = 12
}

export const CustomButton: FC<CustomButtonType> = (
    {
      color = "teal", size = "normal",
      className, ...restProps
    }
) => {

  const buttonStyle = `
         ${className ? className : ""} 
         bg-${color}-200 hover:bg-${color}-300 active:bg-${color}-400 h-${Sizes[size]} 
         px-${size === "big" ? "10" : "5"} text-gray-800 inline-flex appearance-none 
         items-center justify-center transition-all duration-200 select-none relative 
         whitespace-no-wrap align-middle leading-tight outline-none focus:outline-none 
         min-w-10 text-base focus:shadow-outline font-semibold rounded-md mx-2`

  return (
      <button
          className={buttonStyle}
          {...restProps}  // отдаём кнопке остальные пропсы если они есть (children там внутри)
      />
  )
}