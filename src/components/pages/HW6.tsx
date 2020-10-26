import React, {useState} from "react";
import {CustomButton} from "../common/CustomButton/CustomButton";
import {restoreState, saveState} from "../localStorage/localStorage";
import EditableSpan from "../common/EditableSpan/EditableSpan";

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
      setValue(restoreState<string>("editable-span-value", ""))
    };

    return (
        <div className="py-5 text-center">

          <h1 className="p-10 text-3xl text-gray-700 lowercase font-major">homework 6</h1>


            <div className="mb-5">
                <EditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "You can edit me! 🤖"}}
                />
            </div>
          <div className="text-center">
            <CustomButton onClick={save}>&nbsp;&nbsp;save&nbsp;&nbsp;</CustomButton>
            <CustomButton onClick={restore}>restore</CustomButton>
          </div>

        </div>
    );
}

export default HW6;
