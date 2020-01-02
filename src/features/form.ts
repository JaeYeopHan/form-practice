import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FormDataResponse, getFormData } from "@/api";

import { AppThunk } from "./index";
import { loadingActions } from "./loading";

export enum FormType {
  CheckBox = 1,
  Radio = 2,
  TextInput = 3,
  SelectBox = 4
}

export interface FormOption {
  id: number;
  text: string;
}

export interface FormItem {
  itemId: number;
  title: string;
  formType: FormType;
  options: FormOption[];
}

export interface FormAnswer {
  id: Pick<FormItem, "itemId">;
  answer: string;
}

export interface FormState extends FormDataResponse {
  answers: FormAnswer[];
}

const name = "Form";
const initialState: FormState = {
  formId: 0,
  title: "Default Title",
  items: [],
  answers: []
};

const _ = createSlice({
  name,
  initialState,
  reducers: {
    success(state: FormState, action: PayloadAction<FormDataResponse>) {
      console.log(action.payload);
      return {
        ...state,
        ...action.payload
      };
    },
    failure(state: FormState) {}
  }
});

export function fetchFormData(): AppThunk {
  return async function(dispatch) {
    try {
      dispatch(loadingActions.start(name));

      const result = await getFormData();

      dispatch(formActions.success(result));
    } catch (e) {
      dispatch(formActions.failure());
    } finally {
      dispatch(loadingActions.finish(name));
    }
  };
}

export const FORM = _.name;
export const formActions = _.actions;
export const formReducer = _.reducer;
