import { convertToArray, normalize } from "./normalize"

test("normalize", () => {
  // Given
  const arr = [
    { id: 1, foo: "foo1", bar: "bar1" },
    { id: 2, foo: "foo2", bar: "bar2" },
  ]

  // When
  const result = normalize(arr, "id")

  // Then
  const byId = {
    1: {
      id: 1,
      foo: "foo1",
      bar: "bar1",
    },
    2: {
      id: 2,
      foo: "foo2",
      bar: "bar2",
    },
  }
  const ids = [1, 2]
  expect(result).toEqual({ byId, ids })
})

test("convertToArray", () => {
  // Given
  const obj = {
    1: {
      id: 1,
      foo: "foo1",
      bar: "bar1",
    },
    2: {
      id: 2,
      foo: "foo2",
      bar: "bar2",
    },
  }

  // When
  const result = convertToArray(obj)
  // Then
  expect(result).toEqual([
    { id: 1, foo: "foo1", bar: "bar1" },
    { id: 2, foo: "foo2", bar: "bar2" },
  ])
})
