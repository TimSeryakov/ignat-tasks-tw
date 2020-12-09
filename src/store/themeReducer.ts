import { ActionsTypes } from "./store";

const initState = {
  theme: 'dark'
}

type InitStateType = {
  theme: string
}

export const SET_THEME = "SET_THEME"

export const themeReducer = (state: InitStateType = initState, action: ActionsTypes): InitStateType => {
    switch (action.type) {
        case "SET_THEME": {
            return {...state, theme: action.theme}
        }
        default: return state
    }
};

export type SetThemeActionType = {
  type: typeof SET_THEME
  theme: string
}

export const setTheme = (theme: string): SetThemeActionType => ({
  type: SET_THEME, theme
})