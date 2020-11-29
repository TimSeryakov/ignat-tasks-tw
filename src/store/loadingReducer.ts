import {ActionsTypes} from "./store";

const initState = {
  isLoading: false
}

export type LoadingStatusType = typeof initState

const SET_HW10_LOADING = "SET_HW10_LOADING"

export const loadingReducer = (state: LoadingStatusType = initState, action: ActionsTypes): LoadingStatusType => {
    switch (action.type) {
        case "SET_HW10_LOADING": {
            return { ...state, isLoading: action.isLoading }
        }
        default: return state
    }
}

export type LoadingActionType = {
  type: typeof SET_HW10_LOADING
  isLoading: boolean
}

export const setLoadingAC = (isLoading: boolean): LoadingActionType =>
({ type: "SET_HW10_LOADING", isLoading })