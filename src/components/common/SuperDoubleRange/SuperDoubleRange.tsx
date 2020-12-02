import React from "react";
import Slider from "@material-ui/core/Slider";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[] | number) => void
    value: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        ...restProps
    }
) => {
  const handleChange = (event: any, newValue: number[] | number) => {
    onChangeRange(newValue)
  };

    return (
        <>
          <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              {...restProps}
          />
        </>
    );
}

export default SuperDoubleRange;
