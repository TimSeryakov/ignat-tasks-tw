import {LoadingActionType, loadingReducer} from "./loadingReducer"
import {combineReducers, createStore} from "redux"
import {themeReducer, SetThemeActionType} from "./themeReducer";

const reducers = combineReducers({
    hw10: loadingReducer,
    hw12: themeReducer

})

const store = createStore(reducers)

export default store

export type RootStoreType = ReturnType<typeof reducers>

export type ActionsTypes = LoadingActionType | SetThemeActionType


// @ts-ignore
window.store = store // for dev
