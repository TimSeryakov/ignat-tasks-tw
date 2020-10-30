import React, {useState} from "react";
import CustomSelect from "../common/CustomSelect/CustomSelect";
import CustomRadio from "../common/CustomRadio/CustomRadio";


const arr = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div>
                <CustomSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <div>
                <CustomRadio
                    name={"radio"}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>


        </div>
    );
}

export default HW7;
