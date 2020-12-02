import React, {useState} from "react";
import SuperRange from "../common/SuperRange/SuperRange";
import SuperDoubleRange from "../common/SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const SuperDoubleRangeHandler = (value: any) => {
      setValue1(value[0])
      setValue2(value[1])
    }

    return (
        <div className="py-5 text-center">
          <h1 className="p-10 text-3xl text-gray-700 lowercase font-major">homework 11</h1>

            <div className="mb-16">
                <span className={"inline-block w-100px font-major text-2xl"}>{value1.toString().padStart(2, '0')}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div className="w-200px mx-auto">
                <span className={"inline-block w-100px font-major text-2xl"}>{value1.toString().padStart(2, '0')}</span>
                <SuperDoubleRange value={[value1, value2]} onChangeRange={SuperDoubleRangeHandler} />
                <span className={"inline-block w-100px font-major text-2xl"}>{value2.toString().padStart(2, '0')}</span>
            </div>


        </div>
    );
}

export default HW11;
