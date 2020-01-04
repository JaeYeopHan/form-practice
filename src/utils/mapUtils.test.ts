import Map from "./mapUtils"

test("toggle", () => {
  // Given
  const mockValue = "one"

  // When
  const result1 = Map.toggle(1, mockValue)
  // Then
  expect(result1).toEqual({ 1: mockValue })

  // When
  const result2 = Map.toggle(1, mockValue)
  // Then
  expect(result2).toEqual({})
})
