export interface IndexSignature<T> {
  [key: number]: T
}

interface NormalizeReturnType<T> {
  byId: IndexSignature<T>
  ids: number[]
}

export function normalize<T>(arr: T[], id: keyof T): NormalizeReturnType<T> {
  const ids = arr.map(el => Number(el[id]))
  const byId = arr.reduce((prev: IndexSignature<T>, next: T) => {
    const key = Number(next[id])

    return {
      ...prev,
      [key]: next,
    }
  }, {})

  return { byId, ids }
}

export function deserialize<T>(obj: IndexSignature<T>, id: string = "id"): T[] {
  return Object.keys(obj).map((key: string) => ({
    [id]: Number(key),
    ...obj[Number(key)],
  }))
}
