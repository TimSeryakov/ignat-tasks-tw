import React from "react";
import {CustomButton} from "../common/CustomButton/CustomButton";
import {CustomInput} from "../common/CustomInput/CustomInput";
import './CustomElementsDemo.css'

export function CustomElementsDemo() {

  const clicked = () => {
    alert("Clicked!")
  }

  return (
      <section className="custom-elements-demo mt-1 text-center">
        <h1 className="p-10 font-mono text-3xl text-gray-700">Custom Elements Demonstration</h1>

        <div className="mb-12">
          <div className="mb-4">
            <CustomInput/>
          </div>
          <div className="mb-4">
            <CustomInput placeHolder="Enter you name..."/>
          </div>
          <div className="mb-4">
            <CustomInput onPressEnter={() => {
              console.log("Hi there!")
            }} haveError={true}/>
          </div>
        </div>

        <div className="mb-4">
          <CustomButton onClickFn={clicked} title="Default"/>
          <CustomButton onClickFn={clicked} title="Default" color="red"/>
          <CustomButton onClickFn={clicked} title="Default" color="blue"/>
          <CustomButton onClickFn={clicked} title="Default" color="green"/>
        </div>

        <div className="mb-10">
          <CustomButton onClickFn={clicked} title="Default" color="purple"/>
          <CustomButton onClickFn={clicked} title="Default" color="orange"/>
          <CustomButton onClickFn={clicked} title="Default" color="pink"/>
          <CustomButton onClickFn={clicked} title="Default" color="yellow"/>
        </div>

        <div className="mb-4">
          <CustomButton onClickFn={clicked} title="Big" size="big"/>
          <CustomButton onClickFn={clicked} title="Big" color="red" size="big"/>
          <CustomButton onClickFn={clicked} title="Big" color="blue" size="big"/>
          <CustomButton onClickFn={clicked} title="Big" color="green" size="big"/>
        </div>
        <div className="mb-10">
          <CustomButton onClickFn={clicked} title="Big" color="purple" size="big"/>
          <CustomButton onClickFn={clicked} title="Big" color="orange" size="big"/>
          <CustomButton onClickFn={clicked} title="Big" color="pink" size="big"/>
          <CustomButton onClickFn={clicked} title="Big" color="yellow" size="big"/>
        </div>
        <div className="mb-4">
          <CustomButton onClickFn={clicked} title="Small" size="small"/>
          <CustomButton onClickFn={clicked} title="Small" color="red" size="small"/>
          <CustomButton onClickFn={clicked} title="Small" color="blue" size="small"/>
          <CustomButton onClickFn={clicked} title="Small" color="green" size="small"/>
        </div>
        <div className="mb-10">
          <CustomButton onClickFn={clicked} title="Small" color="purple" size="small"/>
          <CustomButton onClickFn={clicked} title="Small" color="orange" size="small"/>
          <CustomButton onClickFn={clicked} title="Small" color="pink" size="small"/>
          <CustomButton onClickFn={clicked} title="Small" color="yellow" size="small"/>
        </div>
      </section>
  )
}