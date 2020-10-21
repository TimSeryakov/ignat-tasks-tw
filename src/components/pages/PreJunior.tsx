import React from "react";
import {ToDoBoard} from "../ToDoBoard/ToDoBoard";
import {Chat} from "../Chat/Chat";
import {Hello} from "../Hello/Hello";
import {CustomElementsDemo} from "../CustomElementsDemo/CustomElementsDemo";
import HW4 from "../HW4";

function PreJunior() {
    return (
        <div>
          <ToDoBoard/>
          <Chat/>
          <Hello/>
          <CustomElementsDemo/>
          <HW4/>
        </div>
    );
}

export default PreJunior;

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз