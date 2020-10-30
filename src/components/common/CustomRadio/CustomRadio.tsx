import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type CustomRadioPropsType = DefaultRadioPropsType & {
    options?: Array<any>
    onChangeOption?: (option: any) => void
}

const CustomRadio: React.FC<CustomRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const mappedOptions: Array<any> = options ? options.map((o, i) => (
        <span className={"px-3"}>
          <label key={`${name} - ${i}`}>
            <input
                type={"radio"}
                name={o}
                value={o}
                checked={o === value}
                onChange={onChangeCallback}

                {...restProps}
            />
            {o}
          </label>
        </span>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default CustomRadio;
