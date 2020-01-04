import { formSelectors } from "./form"

describe("selectors", () => {
  const defaultState = {
    formId: 0,
    title: "Default Title",
    itemsById: {},
    ids: [],
    answers: {},
    view: {
      page: 0,
    },
  }
  test("isClickable, false/false/false", () => {
    // Given
    const state = {
      ...defaultState,
      ids: [1, 2, 3, 4],
      answers: {},
      view: {
        page: 0,
      },
    }

    // When
    const result = formSelectors.isClickable(state)
    // Then
    expect(result).toEqual({
      submit: false,
      next: false,
      prev: false,
    })
  })

  test("isClickable, false/false/true", () => {
    // Given
    const state = {
      ...defaultState,
      ids: [1, 2, 3, 4],
      answers: {},
      view: {
        page: 1,
      },
    }

    // When
    const result = formSelectors.isClickable(state)
    // Then
    expect(result).toEqual({
      submit: false,
      next: false,
      prev: true,
    })
  })

  test("isClickable, true/false/true", () => {
    // Given
    const mockAnswer = { answer: "test" }
    const state = {
      ...defaultState,
      ids: [1, 2, 3, 4],
      answers: { 1: mockAnswer, 2: mockAnswer, 3: mockAnswer, 4: mockAnswer },
      view: {
        page: 3,
      },
    }

    // When
    const result = formSelectors.isClickable(state)
    // Then
    expect(result).toEqual({
      submit: true,
      next: false,
      prev: true,
    })
  })

  test("isClickable, true/true/true", () => {
    // Given
    const mockAnswer = { answer: "test" }
    const state = {
      ...defaultState,
      ids: [1, 2, 3, 4],
      answers: { 1: mockAnswer, 2: mockAnswer, 3: mockAnswer, 4: mockAnswer },
      view: {
        page: 2,
      },
    }

    // When
    const result = formSelectors.isClickable(state)
    // Then
    expect(result).toEqual({
      submit: true,
      next: true,
      prev: true,
    })
  })

  test("getCurrentItem", () => {
    // Given
    const item2 = {
      itemId: 2,
      title: "two",
      formType: 2,
      options: [],
    }
    const item3 = {
      itemId: 3,
      title: "three",
      formType: 3,
      options: [],
    }
    const state = {
      ...defaultState,
      ids: [2, 3],
      itemsById: {
        2: item2,
        3: item3,
      },
      view: {
        page: 1,
      },
    }

    // When
    const result = formSelectors.currentItem(state)

    // Then
    expect(result).toEqual(item3)
  })
})
