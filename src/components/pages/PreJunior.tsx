import React from "react";
import {ToDoBoard} from "../ToDoBoard/ToDoBoard";
import {Chat} from "../Chat/Chat";
import {Hello} from "../Hello/Hello";
import {CustomElementsDemo} from "../CustomElementsDemo/CustomElementsDemo";
import HW4 from "./HW4";
import HW6 from "./HW6";

function PreJunior() {
    return (
        <div className="py-5">
          <HW6/>
          <HW4/>
          <CustomElementsDemo/>
          <Hello/>
          <ToDoBoard/>
          <Chat/>
        </div>
    );
}

export default PreJunior;