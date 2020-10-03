import React from "react";
import {CustomButton} from "../common/CustomButton/CustomButton";

export function CustomElementsDemo() {
  return (
      <section className="mt-16 text-center">
        <h1 className="p-10 text-2xl font-bold text-gray-700">Custom Elements Demonstration</h1>

        <div className="mb-4">
          <CustomButton title="Default"/>
          <CustomButton title="Default" color="red"/>
          <CustomButton title="Default" color="blue"/>
          <CustomButton title="Default" color="green"/>
        </div>

        <div className="mb-10">
          <CustomButton title="Default" color="purple"/>
          <CustomButton title="Default" color="orange"/>
          <CustomButton title="Default" color="pink"/>
          <CustomButton title="Default" color="yellow"/>
        </div>

        <div className="mb-4">
          <CustomButton title="Big" size="big"/>
          <CustomButton title="Big" color="red" size="big"/>
          <CustomButton title="Big" color="blue" size="big"/>
          <CustomButton title="Big" color="green" size="big"/>
        </div>
        <div className="mb-10">
          <CustomButton title="Big" color="purple" size="big"/>
          <CustomButton title="Big" color="orange" size="big"/>
          <CustomButton title="Big" color="pink" size="big"/>
          <CustomButton title="Big" color="yellow" size="big"/>
        </div>
        <div className="mb-4">
          <CustomButton title="Small" size="small"/>
          <CustomButton title="Small" color="red" size="small"/>
          <CustomButton title="Small" color="blue" size="small"/>
          <CustomButton title="Small" color="green" size="small"/>
        </div>
        <div className="mb-10">
          <CustomButton title="Small" color="purple" size="small"/>
          <CustomButton title="Small" color="orange" size="small"/>
          <CustomButton title="Small" color="pink" size="small"/>
          <CustomButton title="Small" color="yellow" size="small"/>
        </div>
      </section>
  )
}