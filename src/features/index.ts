import { Action, combineReducers } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { ThunkAction } from "redux-thunk"

import { ALERT, alertReducer } from "./alert"
import { FORM, formReducer } from "./form"
import { LOADING, loadingReducer } from "./loading"

const rootReducer = combineReducers({
  [FORM]: formReducer,
  [LOADING]: loadingReducer,
  [ALERT]: alertReducer,
})

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
