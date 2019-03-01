

export function getsessionStorage(key) {
  return sessionStorage.getItem(key)
}

export function setsessionStorage(key, value) {
  return sessionStorage.setItem(key, value)
}

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }
