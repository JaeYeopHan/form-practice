import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import { LOADING, loadingReducer } from "./loading";

const rootReducer = combineReducers({
  [LOADING]: loadingReducer
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default store;
