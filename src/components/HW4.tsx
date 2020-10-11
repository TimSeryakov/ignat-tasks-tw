import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/SuperButton/SuperButton";
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

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                {/*should work (должно работать)*/}
                <CustomInput
                    value={text}
                    onChangeText={setText}
                    onPressEnter={showAlert}
                    errorMessage={errorMessage}
                    // className={"bg-green-500 placeholder-white"} // РАБОТАЕТ // проверьте, работает ли смешивание классов
                />

                {/*should work (должно работать)*/}
                <CustomButton
                    title={"zxc"}
                    color={"red"} // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                />
                    delete {/*// название кнопки попадёт в children*/}

                {/*should work (должно работать)*/}
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
            <div>
              <CustomInput/>
              <CustomButton title={"zxc"} onClick={() => {}}/>
              <CustomCheckbox initValue={false} children={"zxczxc"}/>
            </div>
        </div>
    );
}

export default HW4;
