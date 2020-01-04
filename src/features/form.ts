import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"

import { FormDataResponse, getFormData, setFormData } from "@/api"
import { deserialize, IndexSignature, normalize } from "@/utils/normalize"

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
type FormAnswersType = { [key: number]: { answer: string } }

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
      const { ids, view, answers } = state
      const { page } = view
      const targetId = getTargetId(state)

      if (!answers[targetId]) {
        return
      }
      if (page >= ids.length - 1) {
        return
      }
      state.view.page += 1
    },
    toPrev(state: FormState) {
      const { view } = state
      const { page } = view

      if (page > initialState.view.page) {
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

const getTitle = (state: FormState): string => state.title
const getTargetId = (state: FormState): number => state.ids[state.view.page]
const getItems = (state: FormState): FormItemByIdType => state.itemsById
const getCurrentItem = createSelector(
  [getTargetId, getItems],
  (page: number, itemsById) => itemsById[page] || {},
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
      dispatch(formActions.failure()) // TODO errorActions.alert()
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
      const { formId: id, answers } = formState
      const items = deserialize<{ id: number; answer: string }>(answers)
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
    } finally {
      dispatch(loadingActions.finish(name))
    }
  }
}

export const FORM = _.name
export const formActions = _.actions
export const formReducer = _.reducer
export const formSelectors = {
  title: getTitle,
  currentItem: getCurrentItem,
  isClickable,
}
export const formThunks = {
  fetchFormData,
  postFormAnswer,
}
