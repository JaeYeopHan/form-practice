import { createSlice } from "@reduxjs/toolkit";

import { FormDataResponse } from "@/api";

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

interface FormState extends FormDataResponse {
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
  reducers: {}
});

export const FORM = _.name;
export const formActions = _.actions;
export const formReducer = _.reducer;
