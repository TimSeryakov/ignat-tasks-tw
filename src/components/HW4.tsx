import React, {ChangeEvent, useState} from "react";
import SuperCheckbox from "./common/SuperCheckbox/SuperCheckbox";
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
        <div>
            <hr/>
            homeworks 4

            <div className="flex flex-col items-center">
                {/*should work (должно работать)*/}
                <CustomInput
                    value={text}
                    onChangeText={setText}
                    onPressEnter={showAlert}
                    errorMessage={errorMessage}
                    // className={"bg-green-500 placeholder-white"} // РАБОТАЕТ // проверьте, работает ли смешивание классов
                />

                <CustomButton
                    color="red"
                    onClick={showAlert}
                >
                    Delete {/*// название кнопки попадёт в children*/}
                </CustomButton>

                <CustomCheckbox
                    checked={checkedValue}
                    onChangeChecked={setCheckedValue}
                >
                    Some text {/*// этот текст попадёт в children*/}
                </CustomCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checkedValue} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>

        </div>
    );
}

export default HW4;
