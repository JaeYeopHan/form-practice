import { alertActions, alertReducer } from "./alert"

test("alertActions open", () => {
  // Given
  const key = "test"
  const prevState = {}

  // When
  const result = alertReducer(prevState, alertActions.open(key))

  // Then
  expect(result[key]).toEqual(true)
})

test("alertActions close", () => {
  // Given
  const key = "test"
  const prevState = {}

  // When
  const result = alertReducer(prevState, alertActions.close(key))

  // Then
  expect(result[key]).toEqual(false)
})
