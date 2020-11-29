import {PeoplesStateType} from "../components/pages/HW8";

export type ActionsTypes = SortActionType | CheckActionType

export type SortActionType = {
  type: "SORT"
  payload?: "alphabetically" | "reverseAlphabetically"
}

export type CheckActionType = {
  type: "CHECK"
  payload: number
}


export const sortReducer = (state: PeoplesStateType, action: ActionsTypes): PeoplesStateType => {
  switch (action.type) {
    case "SORT": {
      if (action.payload === "alphabetically") {
        return [...state].sort((prev, next) => prev.name.localeCompare(next.name))

      } else if (action.payload === "reverseAlphabetically") {
        return [...state].sort((prev, next) => prev.name.localeCompare(next.name)).reverse()

      }
      return state
    }
    case "CHECK": {
      if (action.payload) {
        return state.filter(user => user.age > action.payload)

      }
      return state
    }
    default:
      return state
  }
}

export const sortAC = (payload: "alphabetically" | "reverseAlphabetically" = "alphabetically"): SortActionType =>
    ({type: "SORT", payload: payload})

export const checkAC = (payload: number): CheckActionType =>
    ({type: "CHECK", payload: payload})