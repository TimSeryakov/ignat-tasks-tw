import React from 'react';
import Slider from '@material-ui/core/Slider';



export default function RangeSlider() {

  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: any, newValue: number[] | number) => {
    setValue(newValue as number[]);
  };

  return (
      <div>

        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
        />
      </div>
  );
}
