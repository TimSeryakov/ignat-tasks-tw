import React, {FC} from 'react'
import {PreloaderCircle} from "./PreloaderCircle";

type PreloaderPropsType = {
  message?: string
}
export const Preloader: FC<PreloaderPropsType> = (
    {
      message = "Loading..."
    }
) => {


  return (
      <div>
        <PreloaderCircle/>
        <span className="text-black text-3xl animate-pulse">
          {message}
        </span>
      </div>
  )
}
