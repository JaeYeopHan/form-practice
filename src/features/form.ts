import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"

import {
  FormDataResponse,
  getFormData,
  setFormData,
  SubmitAnswerType,
} from "@/api"
import { convertToArray, IndexSignature, normalize } from "@/utils/normalize"

import { alertActions } from "./alert"
import { AppThunk } from "./index"
import { loadingActions } from "./loading"

export enum FormType {
  CheckBox = 1,
  Radio = 2,
  TextInput = 3,
  SelectBox = 4,
}

export interface FormOption {
  id: number
  text: string
}

export interface FormItem {
  itemId: number
  title: string
  formType: FormType
  options: FormOption[]
}

type FormItemByIdType = IndexSignature<FormItem>
export type FormAnswersType = IndexSignature<{ answer: string }>

export interface FormState {
  formId: number
  title: string
  itemsById: FormItemByIdType
  ids: number[]
  answers: FormAnswersType
  view: {
    page: number
  }
}

const name = "Form"
const initialState: FormState = {
  formId: 0,
  title: "Default Title",
  itemsById: {},
  ids: [],
  answers: {},
  view: {
    page: 0,
  },
}

const _ = createSlice({
  name,
  initialState,
  reducers: {
    success(state: FormState, action: PayloadAction<FormDataResponse>) {
      const { items, title, formId } = action.payload
      const { ids, byId: itemsById } = normalize(items, "itemId")

      return {
        ...state,
        formId,
        title,
        itemsById,
        ids,
      }
    },
    failure(state: FormState) {
      state.title = "Network Error"
    },
    toNext(state: FormState) {
      if (isClickable(state).next) {
        state.view.page += 1
      }
    },
    toPrev(state: FormState) {
      if (isClickable(state).prev) {
        state.view.page -= 1
      }
    },
    updateAnswer(state: FormState, action: PayloadAction<FormAnswersType>) {
      state.answers = {
        ...state.answers,
        ...action.payload,
      }
    },
  },
})

const getTargetId = (state: FormState): number => state.ids[state.view.page]
const getItems = (state: FormState): FormItemByIdType => state.itemsById
const getCurrentItem = createSelector(
  [getTargetId, getItems],
  (targetId: number, itemsById) => itemsById[targetId] || {},
)
const isClickable = (state: FormState) => {
  const { view, answers, ids } = state
  const { page } = view
  const targetId = getTargetId(state)

  return {
    submit: Object.keys(answers).length === ids.length,
    next: !!answers[targetId] && page < ids.length - 1,
    prev: page > 0,
  }
}

function fetchFormData(): AppThunk {
  return async function(dispatch) {
    try {
      dispatch(loadingActions.start(name))

      const result = await getFormData()

      dispatch(formActions.success(result))
    } catch (e) {
      console.error(e)
      dispatch(formActions.failure())
      dispatch(alertActions.open(name))
    } finally {
      dispatch(loadingActions.finish(name))
    }
  }
}

function postFormAnswer(): AppThunk {
  return async function(dispatch, getState) {
    try {
      dispatch(loadingActions.start(name))

      const state = getState()
      const formState = state[name]

      if (!isClickable(formState).submit) {
        dispatch(alertActions.open(name))
      }
      const { formId: id, answers } = formState
      const items = convertToArray<SubmitAnswerType>(answers)
      const result = await setFormData({
        id,
        items,
      })

      if (!result) {
        throw Error("Fail to request")
      }
    } catch (e) {
      console.error(e)
      dispatch(formActions.failure())
      dispatch(alertActions.open(name))
    } finally {
      dispatch(loadingActions.finish(name))
    }
  }
}

export const FORM = _.name
export const formActions = _.actions
export const formReducer = _.reducer
export const formSelectors = {
  currentItem: getCurrentItem,
  isClickable,
}
export const formThunks = {
  fetchFormData,
  postFormAnswer,
}
