import {LoadingActionType, loadingReducer} from "./loadingReducer"
import {combineReducers, createStore} from "redux"

const reducers = combineReducers({
    hw10: loadingReducer,

})

const store = createStore(reducers)

export default store

export type RootStoreType = ReturnType<typeof reducers>

export type ActionsTypes = LoadingActionType


// @ts-ignore
window.store = store // for dev
