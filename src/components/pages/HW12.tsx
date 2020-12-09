import React from "react";
import s from "./HW12.module.css";
import CustomSelect from "../common/CustomSelect/CustomSelect";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../store/store";
import {setTheme} from "../../store/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
  const {theme} = useSelector((state: RootStoreType) => state.hw12)
  const dispatch = useDispatch()

  const onChangeCallback = (selectedValue: string) => {
    dispatch(setTheme(selectedValue))
  }

  return (
      <div className={`py-5 text-center ${s[theme]}`}>
        <h1 className={`p-10 text-3xl text-gray-700 lowercase font-major ${s[theme + '-text']}`}>homework 12</h1>

        <CustomSelect
            options={themes}
            value={theme}
            onChangeOption={onChangeCallback}
        />

      </div>
  );
}

export default HW12;
