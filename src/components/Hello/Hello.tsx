import React from "react";
import s from './Hello.module.css'


export const Hello = () => {
  return (
      <section className={s.hello}>

      </section>
  )
}

/*
- добавьте в проект с домашками компоненту с инпутом и кнопкой
- сделайте инпут контролируемым: (useState, value, onChange)
- сделайте функцию, которая будет здороваться с именем, введённым в инпут (брать value из useState и выводить в алерт) и повесьте её на <button> и добавьте в функцию для onKeyPress инпута
- выносите стрелочные функции из jsx - это нужно для оптимизации и удобства чтения
- улучшите функцию: если имя не пустое, то только тогда показывать алерт и добавлять в массив объект с именем и ид используя uuid
- отобразите количество объектов (имён) спане*/
