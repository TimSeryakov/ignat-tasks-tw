import React, {ChangeEvent, useState} from "react";
import {CustomInput} from "./common/CustomInput/CustomInput";
import {CustomButton} from "./common/CustomButton/CustomButton";
import {CustomCheckbox} from "./common/CustomCheckbox/CustomCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const errorMessage = text ? "" : "Error Message Text Goes Here";
    const showAlert = () => {
        if (errorMessage) {
            alert("Введите текст...");
        } else {
            alert(text); // если нет ошибки показать текст
        }
    }

    const [checkedValue, setCheckedValue] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setCheckedValue(e.currentTarget.checked);

    return (
        <div className="py-5 text-center">

          <h1 className="p-10 text-3xl text-gray-700 lowercase font-major">homeworks 4</h1>


            <div className="flex flex-col items-center">
                {/*should work (должно работать)*/}
              <div className="p-5">
                <CustomInput
                  value={text}
                  onChangeText={setText}
                  onPressEnter={showAlert}
                  errorMessage={errorMessage}
                  // className={"bg-green-500 placeholder-white"} // РАБОТАЕТ // проверьте, работает ли смешивание классов
              />
              </div>

              <div className="p-5">
                <CustomButton
                    color="red"
                    onClick={showAlert}
                >
                    Delete {/*// название кнопки попадёт в children*/}
                </CustomButton>
              </div>

              <div className="p-5">
                <CustomCheckbox
                    checked={checkedValue}
                    onChangeChecked={setCheckedValue}
                >
                    Some text {/*// этот текст попадёт в children*/}
                </CustomCheckbox>

                <br/>
                {/*// onChange тоже должен работать*/}
                <CustomCheckbox checked={checkedValue} onChange={testOnChange}/>
                </div>
            </div>
        </div>
    );
}

export default HW4;
