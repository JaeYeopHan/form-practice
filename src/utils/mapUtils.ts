let map: { [key: number]: string | null } = {}

const has = (key: number) => {
  if (map === null) {
    return false
  }
  return !!map[key]
}

const set = (key: number, value: string) => {
  if (map !== null) map[key] = value
}

const remove = (key: number) => {
  if (map !== null) {
    map[key] = null
    delete map[key]
  }
}

const toggle = (key: number, value: string) => {
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
