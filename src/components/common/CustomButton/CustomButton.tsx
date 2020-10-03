import React, {FC} from 'react';

type CustomButtonType = {
  title: string
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
      title, color = "teal", size = "normal"
    }
) => {

  const style = `bg-${color}-200 hover:bg-${color}-300 active:bg-${color}-400 h-${Sizes[size]} 
                 text-gray-800 inline-flex appearance-none items-center justify-center transition-all duration-200 
                 select-none relative whitespace-no-wrap align-middle leading-tight outline-none focus:outline-none 
                 min-w-10 text-base px-4 focus:shadow-outline font-semibold rounded-md mr-4`

  return (
      <button className={style}>{title}</button>
  )
}


// - на работе часто вместо стандартных хтмл тегов используют готовые компоненты с красивыми стилями, нужно сделать 3 компоненты: инпут, чекбокс и кнопку
// - эти компоненты должны быть УНИВЕРСАЛЬНЫМИ и иметь красивые стили (создать самому или найти в интернете)
// - добавьте в проект компоненту, в которой отрисуйте эти универсальные компоненты для демонстрации
// - замените в предыдущих домашках стандартные кнопки и инпуты вашими универсальными компонентами, в последующих домашках используйте свои универсальные компоненты вместо стандартных