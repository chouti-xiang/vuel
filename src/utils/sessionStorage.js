
export function getsessionStorage (key) {
  return sessionStorage.getItem(key)
}

export function setsessionStorage (key, value) {
  return sessionStorage.setItem(key, value)
}

export function removesessionStorage (key) {
  return sessionStorage.clear(key)
}
