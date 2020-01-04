type MapType = { [key: number]: string | null }

let map: MapType = {}

const has = (key: number): boolean => {
  if (map === null) {
    return false
  }
  return !!map[key]
}

const set = (key: number, value: string): void => {
  if (map !== null) map[key] = value
}

const remove = (key: number): void => {
  if (map !== null) {
    map[key] = null
    delete map[key]
  }
}

const toggle = (key: number, value: string): MapType => {
  if (has(key)) {
    remove(key)
  } else {
    set(key, value)
  }
  return map
}

export default {
  has,
  set,
  remove,
  toggle,
}
