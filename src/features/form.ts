import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  view: {
    page: number;
  };
}

const name = "Form";
const initialState: FormState = {
  formId: 0,
  title: "Default Title",
  items: [],
  answers: [],
  view: {
    page: 0
  }
};

const _ = createSlice({
  name,
  initialState,
  reducers: {
    success(state: FormState, action: PayloadAction<FormDataResponse>) {
      return {
        ...state,
        ...action.payload
      };
    },
    failure(state: FormState) {},
    toNext(state: FormState) {
      const { items, view } = state;
      const { page } = view;

      if (page < items.length - 1) {
        state.view.page += 1;
      }
    },
    toPrev(state: FormState) {
      const { view } = state;
      const { page } = view;

      if (page > initialState.view.page) {
        state.view.page -= 1;
      }
    },
    update(state: FormState, action: PayloadAction<FormAnswer>) {
      state.answers.push(action.payload);
    },
    submit(state: FormState) {
      const { formId: id, answers: items } = state;
      const output = { id, items };

      console.log(output);
    }
  }
});

const getTitle = (state: FormState): string => state.title;
const getPage = (state: FormState): number => state.view.page;
const getItems = (state: FormState): FormItem[] => state.items;
const getCurrentItems = createSelector([getPage, getItems], (page, items) =>
  items.filter((_, index) => index === page)
);

function fetchFormData(): AppThunk {
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
export const formSelectors = {
  title: getTitle,
  currentItems: getCurrentItems
};
export const formThunks = {
  fetchFormData
};
