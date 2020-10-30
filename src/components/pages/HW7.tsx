import React, {useState} from "react";
import CustomSelect from "../common/CustomSelect/CustomSelect";
import CustomRadio from "../common/CustomRadio/CustomRadio";


const arr = ["collect", "coarse", "pool", "plant", "woolen"];

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);

    return (
        <div className="py-5 text-center">
          <h1 className="p-10 text-3xl text-gray-700 lowercase font-major">homework 7</h1>

            {/*should work (должно работать)*/}
            <div className="p-10">
                <CustomSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />

            </div>

          <div className="p-10">
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
