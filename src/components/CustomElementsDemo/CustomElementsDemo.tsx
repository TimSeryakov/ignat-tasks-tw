import React from "react";
import {CustomButton} from "../common/CustomButton/CustomButton";

export function CustomElementsDemo() {
  return (
      <section className="mt-16 text-center">
        <h1 className="font-bold text-2xl p-10 text-gray-700">Custom Elements Demonstration</h1>

        <div className="mb-4">
          <CustomButton title="Button"/>
          <CustomButton title="Button" color="red"/>
          <CustomButton title="Button" color="blue"/>
          <CustomButton title="Button" color="green"/>
        </div>

        <div className="mb-10">
          <CustomButton title="Button" color="purple"/>
          <CustomButton title="Button" color="orange"/>
          <CustomButton title="Button" color="pink"/>
          <CustomButton title="Button" color="yellow"/>
        </div>

        <div className="mb-4">
          <CustomButton title="Button" size="big"/>
          <CustomButton title="Button" color="red" size="big"/>
          <CustomButton title="Button" color="blue" size="big"/>
          <CustomButton title="Button" color="green" size="big"/>
        </div>
        <div className="mb-10">
          <CustomButton title="Button" color="purple" size="big"/>
          <CustomButton title="Button" color="orange" size="big"/>
          <CustomButton title="Button" color="pink" size="big"/>
          <CustomButton title="Button" color="yellow" size="big"/>
        </div>
        <div className="mb-4">
          <CustomButton title="Button" size="small"/>
          <CustomButton title="Button" color="red" size="small"/>
          <CustomButton title="Button" color="blue" size="small"/>
          <CustomButton title="Button" color="green" size="small"/>
        </div>
        <div className="mb-10">
          <CustomButton title="Button" color="purple" size="small"/>
          <CustomButton title="Button" color="orange" size="small"/>
          <CustomButton title="Button" color="pink" size="small"/>
          <CustomButton title="Button" color="yellow" size="small"/>
        </div>
      </section>
  )
}