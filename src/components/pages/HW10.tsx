import React from "react"
import {CustomButton} from "../common/CustomButton/CustomButton"
import {Preloader} from "../common/Preloader/Preloader";
import {RootStoreType} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {setLoadingAC} from "../../store/loadingReducer";


export function HW10() {
  const {isLoading} = useSelector((state: RootStoreType) => state.hw10)
  const dispatch = useDispatch()


    const setLoading = () => {
      dispatch(setLoadingAC(true))
      setTimeout(() => {
        dispatch(setLoadingAC(false))
      }, 3000)


    }

    return (
        <div className="py-5 text-center">
          <h1 className="p-10 text-3xl text-gray-700 lowercase font-major">homework 10</h1>

            {isLoading
                ? (
                    <Preloader/> // Можно передать любой текст
                ) : (
                    <div className="inline-block text-center">
                        <CustomButton onClick={setLoading} color={"purple"}>Set loading...</CustomButton>
                    </div>
                )
            }

        </div>
    )
}

export default HW10