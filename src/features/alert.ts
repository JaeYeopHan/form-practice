import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const name = "Alert"

export interface AlertState {
  [key: string]: boolean
}
const initialState: AlertState = {}

const _ = createSlice({
  name,
  initialState,
  reducers: {
    open(state: AlertState, action: PayloadAction<string>) {
      state[action.payload] = true
    },
    close(state: AlertState, action: PayloadAction<string>) {
      state[action.payload] = false
    },
  },
})

export const ALERT = _.name
export const alertActions = _.actions
export const alertReducer = _.reducer
