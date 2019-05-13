import Cookies from 'js-cookie'
export function getCookieStorage (key) {
  return Cookies.get(key)
}

export function setCookieStorage (key, value) {
  let millisecond = new Date().getTime()
  let expiresTime = new Date(millisecond + 60 * 1000 * 120)
  return Cookies.set(key, value, { expires: expiresTime })
}

export function removeCookieStorage (key) {
  return Cookies.remove(key)
}
