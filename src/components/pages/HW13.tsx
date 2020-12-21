import React, {useState} from "react";
import {CustomCheckbox} from "../common/CustomCheckbox/CustomCheckbox";
import {CustomButton} from "../common/CustomButton/CustomButton";
import { API } from "../../api/api";


const Request = () => {
    const [value, setValue] = useState(true)
    const [answer, setAnswer] = useState<Array<string>>([])

    return (
        <>
            <div className="mb-5">
                <CustomCheckbox checked={value} onChangeChecked={setValue}>
                    {value.toString()}
                </CustomCheckbox>
            </div>

            <CustomButton onClick={() => {
                API.sendData(value).then(r => setAnswer([r.errorText, r.info]))
            }}>
                Send checkbox value to server
            </CustomButton>

            <div className="pt-5">
                <h2 className="text-4xl">{!!answer.length && "Answer:"}</h2>
                <h3 className="text-3xl">{answer[0] && answer[0]}</h3>
                <h3 className="text-2xl">{answer[1] && answer[1]}</h3>
            </div>
        </>
    )
}

const HW13 = () => (
    <div className={`py-5 text-center`}>
        <h1 className={`p-10 text-3xl text-gray-700 lowercase font-major`}>homework 13</h1>

        <Request/>
    </div>
)


export default HW13
