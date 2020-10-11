import React from "react";
import {CustomButton} from "../common/CustomButton/CustomButton";
import {CustomInput} from "../common/CustomInput/CustomInput";
import './CustomElementsDemo.css'

export function CustomElementsDemo() {

  const clicked = () => {
    alert("Clicked!")
  }

  return (
      <section className="custom-elements-demo mt-1 text-center pb-10">
        <h1 className="p-10 font-mono text-3xl text-gray-700 lowercase">Custom Elements Demonstration</h1>

        <div className="mb-12">
          <div className="mb-4">
            <CustomInput/>
          </div>
          <div className="mb-4">
            <CustomInput onPressEnter={() => {
              console.log("Hi there!")
            }} errorMessage="Some error text!"/>
          </div>
          <div className="mb-4">
            <CustomInput placeHolder="Enter you name..."/>
          </div>
        </div>

        <div className="mb-4">
          <CustomButton onClick={clicked}>Default</CustomButton>
          <CustomButton onClick={clicked} color="red">Default</CustomButton>
          <CustomButton onClick={clicked} color="blue">Default</CustomButton>
          <CustomButton onClick={clicked} color="green">Default</CustomButton>
        </div>

        <div className="mb-10">
          <CustomButton onClick={clicked}color="purple">Default</CustomButton>
          <CustomButton onClick={clicked}color="orange">Default</CustomButton>
          <CustomButton onClick={clicked}color="pink">Default</CustomButton>
          <CustomButton onClick={clicked}color="yellow">Default</CustomButton>
        </div>

        <div className="mb-4">
          <CustomButton onClick={clicked} size="big">Big</CustomButton>
          <CustomButton onClick={clicked} color="red" size="big">Big</CustomButton>
          <CustomButton onClick={clicked} color="blue" size="big">Big</CustomButton>
          <CustomButton onClick={clicked} color="green" size="big">Big</CustomButton>
        </div>
        <div className="mb-10">
          <CustomButton onClick={clicked} color="purple" size="big">Big</CustomButton>
          <CustomButton onClick={clicked} color="orange" size="big">Big</CustomButton>
          <CustomButton onClick={clicked} color="pink" size="big">Big</CustomButton>
          <CustomButton onClick={clicked} color="yellow" size="big">Big</CustomButton>
        </div>
        <div className="mb-4">
          <CustomButton onClick={clicked} size="small">Small</CustomButton>
          <CustomButton onClick={clicked} color="red" size="small">Small</CustomButton>
          <CustomButton onClick={clicked} color="blue" size="small">Small</CustomButton>
          <CustomButton onClick={clicked} color="green" size="small">Small</CustomButton>
        </div>
        <div className="mb-10">
          <CustomButton onClick={clicked} color="purple" size="small">Small</CustomButton>
          <CustomButton onClick={clicked} color="orange" size="small">Small</CustomButton>
          <CustomButton onClick={clicked} color="pink" size="small">Small</CustomButton>
          <CustomButton onClick={clicked} color="yellow" size="small">Small</CustomButton>
        </div>
      </section>
  )
}