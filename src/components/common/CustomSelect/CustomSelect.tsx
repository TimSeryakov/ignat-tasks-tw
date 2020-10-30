import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type CustomSelectPropsType = DefaultSelectPropsType & {
    options?: Array<any>
    onChangeOption?: (option: any) => void
}

const CustomSelect: React.FC<CustomSelectPropsType> = (
    {
        options = [],
        onChange, onChangeOption,
        ...restProps
    }
) => {
  const mappedOptions: Array<any> = options ? options.map((o, i) => <option key={i}>{o}</option>): []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
      onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <>
          <select onChange={onChangeCallback} {...restProps}>
             {mappedOptions}
          </select>
        </>
    );
}

export default CustomSelect;
